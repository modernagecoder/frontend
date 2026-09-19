'use strict';
// London (cg- city page, UK cluster Phase 1 preview; hub for the London boroughs and areas).
// Spine: the loop that never ends. The Greater London Authority's London Datastore answers a
// CKAN-style package_search. On 19 September 2026 it reported a count of 1,302 datasets and returned
// all 1,302 whatever rows and start we sent (rows=0, 100, 1000, 1001, 5000). The usual paging loop,
// start += rows until an empty page, therefore never ends: capped at 51 calls it collected 66,402
// records, 1,302 of them distinct; package_list agreed exactly (1,302 ids, none missing either way).
// Lesson family: an API that ignores its parameters; stop on the count, cap the calls, deduplicate.
// Checked free site-wide on 20 September 2026 (pagination, infinite loop, termination: 0 dossiers).
// Place facts read at primary sources: Nomis TS001 (London usual residents 8,799,728), London
// Councils, the London Datastore about page, TfL press release of 4 May 2022, the Postal Museum's
// "Rowland Hill's Legacy" (PDF). The AI London page owns cycle hire, the AI Opportunities Action Plan,
// AI hiring figures and London clock time; none of them is used here. london.gov.uk and the Postal
// Museum's HTML pages refused an automated check (403) and were not circumvented.
const BOROUGHS = ['Barking and Dagenham', 'Barnet', 'Bexley', 'Brent', 'Bromley', 'Camden', 'City of London', 'Croydon', 'Ealing', 'Enfield', 'Greenwich',
  'Hackney', 'Hammersmith and Fulham', 'Haringey', 'Harrow', 'Havering', 'Hillingdon', 'Hounslow', 'Islington', 'Kensington and Chelsea', 'Kingston upon Thames',
  'Lambeth', 'Lewisham', 'Merton', 'Newham', 'Redbridge', 'Richmond upon Thames', 'Southwark', 'Sutton', 'Tower Hamlets', 'Waltham Forest', 'Wandsworth', 'Westminster'];
// Link each borough whose UK page has been built; the rest are named in plain text.
function boroughList() {
  const built = {};
  for (const m of require('../../scripts/nl/lib/uk-index.js').builtUkPages()) if (m.group === 'borough') built[m.place] = m.slug;
  return BOROUGHS.map(b => built[b] ? `<a class="cg-inline-link" href="/${built[b]}">${b}</a>` : b).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'LONDON', blurb: 'All 32 boroughs and the City, with a project on the London Datastore API.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-london',
  code: 'ldn',
  accent: '#A52B1D',
  accentRationale: 'London: a deep signal red from the solver (5.75:1 on every paper tint), clear of the UK hub blue and of every Irish accent',
  pageType: 'city',
  place: {
    name: 'London',
    eyebrow: 'Greater London, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'London, England',
  title: 'Best Coding Classes in London | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for London families in all 32 boroughs and the City, for ages 6 to 67, taught by a teacher. First lesson free.',
  ogDescription: 'Coding, Python and AI classes for London, on a page about the London Datastore, an API that ignores its paging, and a loop that never ends.',
  twitterDescription: 'London coding classes for ages 6 to 67, live online, with the first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for London Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across Greater London, taught live in English.'
  },

  h1: 'Coding classes in London',
  capsuleQ: 'What are the best coding classes in London?',
  capsule: 'A good class for a London family has to work in a city of 8,799,728 people at the 2021 Census, run by 33 local authorities: 32 boroughs and the City of London Corporation. London also publishes itself. The Greater London Authority created the London Datastore, which listed 1,302 datasets when we counted through its API on 19 September 2026, and that API is the project on this page. Teaching is live, online and from India: a learner in Harrow, Hackney or Croydon logs in from home to a class at their own level, with learners aged anywhere from 6 to 67, in a group of five to ten or alone with a teacher. Nothing is charged for the first lesson; from then on a group place is USD 100 a month and private teaching USD 150.',
  lead: 'Every programmer eventually writes a loop that asks a server for results one page at a time: give me the first hundred, then the next hundred, and stop when a page comes back empty. It is the standard way to download a catalogue, and it rests on one assumption nobody writes down: that the server does what the request asks. We pointed that loop at the London Datastore, the city\'s open-data catalogue. It reported 1,302 datasets. Then it sent all 1,302 back on every call, whatever page size and starting point we asked for. A page never came back empty, so the loop never stopped. We had put a cap of 51 calls on it; by then it had collected 66,402 records, and only 1,302 of them were different. Nothing crashed and nothing warned. The program simply kept working, confidently, on a false assumption. That is the thread of this page, and of a great deal of real software.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in London.',

  picks: {
    eyebrow: 'Course picks for London',
    h2: 'Four courses for a city of 33 councils',
    intro: 'A child in Enfield who wants to make a game, a teenager in Lewisham starting to write real Python, a sixth former in Ealing who likes data, and an adult in Tower Hamlets who spends Friday afternoons copying figures between spreadsheets. Each one starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block code where a loop repeats a move until something on screen changes, and the question every coder learns early: what makes it stop?' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for Key Stage 3 and 4, read before it is written, with the London Datastore as a real server to ask questions of.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Downloading a catalogue properly: counting first, capping the calls, removing duplicates and checking the total against a second listing.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Scripts that pull data from work systems safely, with limits and checks, before a report or an AI summary is built on them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'London today',
      h2: 'A city of 8,799,728, and 33 councils',
      intro: 'London is one city with many governments. The figures below come from the organisations that publish them, and each answers a different question.',
      body: [
        { kind: 'table', caption: 'London in figures, from the organisations that publish them', head: ['Measure', 'Figure', 'Where it comes from'], rows: [
          ['Usual residents, Census 2021', '8,799,728', 'Office for National Statistics, table TS001 on Nomis'],
          ['Local authorities', '33', 'London Councils: the 32 boroughs and the City of London Corporation'],
          ['Datasets in the London Datastore', '1,302', 'Our count through its API on 19 September 2026'],
          ['Postal districts in Rowland Hill\'s plan', '10', 'The Postal Museum'],
          ['Elizabeth line opening', 'Tuesday 24 May 2022', 'Transport for London']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Thirty-three councils', p: 'London Councils describes itself as the collective of London local government, the 32 boroughs and the City of London Corporation. A family\'s council decides school admissions, libraries and much else, which is why each borough will have a page of its own.' },
          { h3: 'A city that publishes itself', p: 'The London Datastore was created by the Greater London Authority to open up the city\'s data. Anyone can search it, download from it or query it through an API, which makes it an honest place for a learner to meet a real server.' },
          { h3: 'The first postcodes', p: 'The Postal Museum records that when Rowland Hill became Secretary to the Post Office in 1854, he introduced postcodes to London, dividing it into 10 postal districts. Elsewhere in Britain, postcodes were not introduced until after the Second World War.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The loop that never ends',
      intro: 'The London Datastore answers requests in a standard catalogue format. Learners ask it how many datasets it holds, try to download them page by page, and find out what happens when a server does not do what the request asks.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Ask for the count', p: 'A call to package_search returns a field called count before any results. On 19 September 2026 it said 1,302. That number becomes the definition of done.' },
          { h3: '2. Write the usual loop', p: 'Ask for 100 results starting at 0, then 100 starting at 100, and so on, stopping when a page comes back empty. On most servers it works. On this one every call returned all 1,302 datasets, so no page was ever empty.' },
          { h3: '3. Make the loop honest', p: 'Stop when the number of distinct ids reaches the count, put a hard ceiling on the number of calls, and check the result against a second listing, package_list, which gave the same 1,302 ids.' }
        ] },
        { kind: 'table', caption: 'What the London Datastore API returned in our test, 19 September 2026', head: ['Request', 'Records returned', 'What it shows'], rows: [
          ['package_search, no page size given', '1,302', 'The full catalogue in one response'],
          ['Page size 0', '1,302', 'Asking for none still returns all'],
          ['Page size 100, and page size 5,000', '1,302 each', 'The page size is ignored'],
          ['Starting at record 100, 200 and onwards', '1,302 each', 'The starting point is ignored too'],
          ['The usual loop, capped at 51 calls', '66,402', 'Only 1,302 of them distinct'],
          ['package_list, the second listing', '1,302 ids', 'None missing either way against search']
        ] },
        { kind: 'callout', h3: 'Why an AI does not catch this for you', p: 'Ask an AI assistant to write a script that downloads every dataset from the London Datastore and it will very likely write the standard paging loop, because that is what almost every catalogue API expects. The code will look correct and read well. Run against this server, it keeps going until something outside it stops it, and if it has a limit it hands back a file fifty times too long. Nothing in the code is wrong in general; the assumption is wrong for this server. Only someone who counted first, and checked the first two responses against each other, would notice. That habit of testing what a system actually does, instead of what it is supposed to do, is the part of programming that stays with the person.' }
      ]
    },
    {
      id: 'habits', tint: 'tint', eyebrow: 'Servers you do not control',
      h2: 'Five habits for any API',
      intro: 'For school projects, work scripts and anything that downloads data in a loop. Taught from a real London server that ignores its paging.',
      body: [
        { kind: 'table', caption: 'Calling an API safely when you cannot see inside it', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Ask how many first', 'Read the count or total the server reports before fetching anything', 'A loop with no idea when it is finished'],
          ['Stop on the count', 'End when distinct records reach the count, not when a page is empty', 'A loop that runs forever'],
          ['Cap the calls', 'Set a maximum number of requests and stop loudly if it is reached', 'A script that hammers someone else\'s server'],
          ['Deduplicate by id', 'Keep one record per identifier, and report how many were dropped', 'Totals fifty times too large'],
          ['Check a second listing', 'Compare with another route to the same catalogue', 'Silent gaps and silent repeats']
        ] },
        { kind: 'p', text: 'The same habits hold on any server a learner will meet later: school systems, shop websites, weather feeds, the APIs behind every app. A server can change its behaviour without notice, and the code that calls it should notice when it does. Each dataset in the London Datastore carries its own publisher and licence on its own page, and a project that uses one reads that licence first.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Greater London Authority, Transport for London, London Councils, the Postal Museum or any borough council, and nothing here suggests one. The Datastore figures are our own test of its public API; the population figure is the one the Office for National Statistics publishes for Census 2021.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Getting around',
      h2: 'A new railway under the city, and a class that needs no train',
      intro: 'London plans its week around the trains. An online lesson only needs a desk and a connection.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Elizabeth line', p: 'Transport for London opened the Elizabeth line on Tuesday 24 May 2022, with 12 trains an hour between Paddington and Abbey Wood from Monday to Saturday, between 06:30 and 23:00, when it began.' },
          { h3: 'Built underground', p: 'Eight tunnel boring machines created the new tunnels under London, according to TfL\'s own announcement. The line joined services running out to Reading and Heathrow in the west and Shenfield in the east.' },
          { h3: 'No journey at all', p: 'A learner in Havering and a learner in Hillingdon sit at opposite ends of Greater London. In an online group they share a screen at the same minute, and neither needs a line, a change or a ticket.' }
        ] },
        { kind: 'spec', title: '33 councils, one timetable', p: 'School holidays, half terms and inset days differ from borough to borough and from school to school. A group needs five learners who match on level, subject and hour, so groups draw on learners across London and beyond, and pauses are agreed with each family.' }
      ]
    },
    {
      id: 'boroughs', tint: 'tint', eyebrow: 'London, borough by borough',
      h2: 'Thirty-two boroughs and the City',
      intro: 'Each borough gets a page of its own as this series grows, written for its own schools, libraries and streets. Linked names below are live now.',
      body: [
        { kind: 'p', text: boroughList() + '.' },
        { kind: 'p', text: 'The capital also has a page on <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, built around London cycle hire data. The whole country, with its four school systems, is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a loop that stops to a script that checks',
    intro: 'Where a learner starts is decided by watching them work in the free lesson; age and school year only hint at it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Loops that stop', p: 'Children build games where something repeats until a condition changes, and learn to ask what would make it stop before they press go.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Counting and checking', p: 'First Python loops, lists and counts, with a check that the answer is the size it should be.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Real servers', p: 'Teenagers call a real London API, count first, cap their requests and remove duplicates.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Scripts at work', p: 'Adults build downloads and automations that stop on a known total and report anything unexpected.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write a downloader for the London Datastore in seconds. Why should a London teenager learn to test it?',
    intro: 'Because the code can be right in general and wrong for the one server it is pointed at.',
    p1: 'An assistant asked for a download script will produce clean, commented code with a paging loop, because that is what almost every catalogue expects. Pointed at the London Datastore, that code never finishes: the server sends the whole catalogue on every call, so the empty page the loop waits for never arrives. The assistant has not made a mistake anyone could see by reading. The problem only shows up when someone runs the code, looks at the first two responses and asks why they are identical.',
    p2: 'A learner who has watched a loop fail to stop carries the habit everywhere: ask for the count, cap the calls, check the result against something independent. It applies to exam coursework, to a first job, to any script that touches a system someone else runs. The AI can write the loop. Deciding what done means, and noticing when a system does not behave as documented, is the part that stays human.',
    closer: 'The reason for a London child to learn to code in 2026 is not the tech jobs, real as they are. It is that a city which publishes this much data needs people who test what a system does rather than what it promises.',
    blogAnchor: 'why coding is still worth learning for children in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Havering to Hillingdon, one class at one hour',
    intro: 'Greater London stretches a long way east to west, and an online lesson reaches every borough at once.',
    cells: [
      { h3: 'Home, wherever that is', p: 'A learner in Bexley and one in Barnet share a lesson from their own rooms, and nobody travels across the city.' },
      { h3: 'English school words kept', p: 'Reception, Key Stages, Year 9 options, GCSEs and A levels keep their names, and every lesson is taught in English.' },
      { h3: 'The first lesson is free', p: 'A proper lesson on a real problem, followed by a suggested level, course and weekly slot. We never ask for card details.' },
      { h3: 'Mixed from many places', p: 'A group is five to ten learners at the same level, from all over London and from other countries, which is how every stage finds a slot that suits it.' },
      { h3: 'Around the school year', p: 'Twice a week, roughly eight lessons a month, and the family decides with the teacher when to stop for holidays, half term or revision.' },
      { h3: 'Teaching from India', p: 'Our teachers work on India time, which runs five and a half hours ahead of London from late October to late March and four and a half hours ahead in summer. Your slot is always written down in UK time.' }
    ],
    spec: { title: '8,799,728 people and one group online', p: 'Finding five learners who match on level, subject and hour sounds easy in a city this size, and at seven on a Wednesday it often is not, which is why groups are drawn from London and beyond rather than from one borough.' }
  },

  fees: {
    h2: 'What classes cost in London',
    intro: 'Three prices, and no small print behind them.',
    first: 'One lesson on a real problem, ending in a placement and a course suggestion.',
    group: 'A month of lessons, usually eight, with five to ten learners at the same level.',
    private: 'A month of lessons, usually eight, with one teacher for one learner.',
    closer: 'The price is set in US dollars, as it is for every family outside India, and it is the same in Zone 1 as in Zone 6; there is no pound price list. Nothing is paid until the free lesson has fixed a course and a regular slot, and the pricing page covers pauses, missed lessons and a change of format.'
  },

  reviewsH2: 'Six Google reviews, printed as their authors wrote them',

  book: {
    h2: 'Where is the learner starting?',
    intro: 'The first task might be a block game with a loop that must stop, a first Python script that counts a list, or a real request to the London Datastore.',
    success: 'Thank you. Your London class request is on its way to the team.'
  },

  faq: {
    h2: 'London coding class questions',
    intro: 'The city, its councils, the Datastore project and the lessons.',
    items: [
      { q: 'How many people live in London?', a: 'Census 2021 counted 8,799,728 usual residents in Greater London, according to the Office for National Statistics table TS001.' },
      { q: 'How many councils does London have?', a: 'Thirty-three: the 32 London boroughs and the City of London Corporation, which London Councils describes as the collective of London local government.' },
      { q: 'What is the London Datastore project?', a: 'Learners query the London Datastore, created by the Greater London Authority, ask how many datasets it holds (1,302 on 19 September 2026), and try to download them page by page. The server returns all 1,302 on every call, so the usual loop never stops. Learners fix it by stopping on the count, capping the calls and removing duplicates.' },
      { q: 'Is the London Datastore broken?', a: 'Not in any way that matters to someone browsing it. Its search returned the whole catalogue on every call in our test, which is a reasonable choice for a catalogue of this size. It only matters to code that assumes the server will page its results, and that is the lesson.' },
      { q: 'When were London postcodes introduced?', a: 'The Postal Museum records that Rowland Hill introduced postcodes to London after becoming Secretary to the Post Office in 1854, dividing the city into 10 postal districts. Elsewhere in Britain, postcodes came only after the Second World War.' },
      { q: 'What time are lessons for London learners?', a: 'That depends on which groups have space at your level, and it is settled after the free lesson. India time is five and a half hours ahead of London in winter and four and a half in summer, and your slot is confirmed in UK time before you pay anything.' },
      { q: 'Will there be a page for my borough?', a: 'Yes. Each of the 32 boroughs and the City will have its own page as the series grows, and every one that is live is linked from the borough list on this page.' },
      { q: 'Is there a Modern Age Coders centre in London?', a: 'No. All teaching is live and online, and no London premises or UK office is claimed anywhere. A learner needs a laptop or desktop, working audio and a steady connection, and the phone number on this page is Indian and described as such.', boiler: true },
      { q: 'What do coding classes in London cost?', a: 'Nothing for the first lesson. After that, a group place costs USD 100 a month for two live lessons a week, around eight in a month, in a group of five to ten, and one-to-one teaching costs USD 150 a month on the same rhythm. Course, format and weekly hour are settled before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched by level, pace and goal rather than by age or postcode. If no group at the right level runs at a workable hour, one-to-one lessons are the alternative.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London and the UK',
    h2: 'Boroughs, the AI page and the national page',
    html: 'The boroughs are listed above and linked as their pages go live. For AI and machine learning built from first principles there is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>; for what a class anywhere should offer, <a class="cg-inline-link" href="/best-coding-class-in-the-world">eight tests for any coding class</a>; and the whole country is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'London and the UK',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/ai-and-machine-learning-classes-in-london', label: 'AI classes, London' },
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' }
  ],

  personalityCss: `
.cg-root.cg-ldn .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-ldn .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1; }
.cg-root.cg-ldn .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ldn .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ldn .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-ldn .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.7rem); }
.cg-root.cg-ldn .cg-table caption { letter-spacing: 0.04em; font-weight: 600; }
.cg-root.cg-ldn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ldn .cg-table td:last-child { font-style: italic; }
.cg-root.cg-ldn .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-ldn .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'London. ONS Census 2021 table TS001 via Nomis (NM_2021_1), London region E12000007: 8,799,728 usual residents (8,699,834 in households, 99,894 in communal establishments). London Councils, About us: "London Councils is the collective of London local government, the 32 boroughs and the City of London Corporation." London Datastore, About: "The London Datastore has been created by the Greater London Authority (GLA)". London Datastore API, our test at 19:07 UTC on 19 September 2026: package_search count 1,302; results returned 1,302 with no rows parameter, rows=0, 100, 1000, 1001 and 5000; start=100 onwards also returned 1,302 each; a loop of start += rows until an empty page, capped at 51 calls, collected 66,402 records, 1,302 distinct (same with rows=1000 and with sort=id asc); package_list 1,302 ids, identical to the search ids. TfL press release, 4 May 2022: "the Elizabeth line will open on Tuesday 24 May 2022"; "12 trains per hour between Paddington and Abbey Wood from Monday to Saturday 06:30 to 23:00"; "Eight tunnel boring machines (TBM) created the new tunnels under London"; services to Reading, Heathrow and Shenfield. The Postal Museum, Rowland Hill\'s Legacy (PDF): "When Rowland became Secretary to the Post Office in 1854, he introduced postcodes to London. Rowland\'s plan was to divide London into 10 postal districts with letter carriers based at new District Offices. Other big cities were divided into postal regions in the 1860s, but elsewhere postcodes were not introduced until after the Second World War."',
    localProject: 'The loop that never ends. The GLA\'s London Datastore answers a CKAN-style package_search that, in our test on 19 September 2026, reported count 1,302 and returned all 1,302 datasets whatever rows and start were sent (rows=0, 100, 1000, 1001, 5000; start=100 onwards). The standard paging loop (start += rows until an empty page) never terminates: capped at 51 calls it collected 66,402 records, 1,302 distinct; package_list gave the same 1,302 ids. Fix: read the count first, stop when distinct ids reach it, cap the calls, deduplicate by id, cross-check a second listing. AI angle: an assistant writes the standard loop, correct in general and wrong for this server. Lesson family: an API that ignores its parameters, loop termination and defensive consumption. Checked free on 20 September 2026 against every dossier (pagination, infinite loop, termination, ignored parameters, idempotency: 0) and distinct from spent neighbours: rate limiting and caching (Ibri, Apeldoorn, Haarlem), double counting after a join (Ash Sharqiyah North), many-to-many (Dhank), shortest paths (Diemen, Rathfarnham).',
    requiredMentions: [
      '8,799,728',
      '1,302',
      '66,402',
      'package_search',
      'package_list',
      'London Councils',
      'City of London Corporation',
      'Greater London Authority',
      'London Datastore',
      'Rowland Hill',
      'Abbey Wood',
      'tunnel boring'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), London E12000007: Total all usual residents 8,799,728.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?date=latest&geography=2013265927&measures=20100' },
      { claim: 'London Councils, About us: "London Councils is the collective of London local government, the 32 boroughs and the City of London Corporation."', url: 'https://www.londoncouncils.gov.uk/who-we-are/about-us' },
      { claim: 'London Datastore, About: "The London Datastore has been created by the Greater London Authority (GLA)".', url: 'https://data.london.gov.uk/about/' },
      { claim: 'London Datastore API, package_search, 19 September 2026: count 1302; the full catalogue returned for every rows and start value tried.', url: 'https://data.london.gov.uk/api/action/package_search' },
      { claim: 'London Datastore API, package_list, 19 September 2026: 1302 ids.', url: 'https://data.london.gov.uk/api/action/package_list' },
      { claim: 'TfL press release, 4 May 2022: the Elizabeth line opens Tuesday 24 May 2022; 12 trains per hour Paddington to Abbey Wood, Monday to Saturday 06:30 to 23:00; eight tunnel boring machines.', url: 'https://tfl.gov.uk/info-for/media/press-releases/2022/may/elizabeth-line-to-open-on-24-may-2022' },
      { claim: 'The Postal Museum, Rowland Hill\'s Legacy: Hill, Secretary to the Post Office from 1854, introduced postcodes to London, 10 postal districts; elsewhere postcodes not introduced until after the Second World War.', url: 'https://www.postalmuseum.org/wp-content/uploads/2017/02/4-Rowland-Hills-Legacy.pdf' }
    ],
    rejectedClaims: [
      'The 1917 numbering of London sub-districts (the head district as 1, the rest alphabetical by delivery office): found on Wikipedia and GENUKI only; the Postal Museum\'s HTML pages returned 403 and were not circumvented.',
      'The year the GLA was established and the year the London Datastore launched: london.gov.uk returned 403 and the Datastore about page gives no date.',
      'London Underground line and station counts: not found on a TfL page read for this build.',
      'Census ethnicity or country of birth for London: excluded as a standout; used only to order the build.',
      'Anything the AI London page owns: cycle hire data, the AI Opportunities Action Plan, AI hiring figures, London clock time.'
    ]
  }
};
