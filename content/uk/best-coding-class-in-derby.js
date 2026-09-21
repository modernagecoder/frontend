'use strict';
// Derby (cg- city page, UK cluster Phase 4). Spine: the busiest minute on Derby's buses. Sweep line over the
// Bus Open Data Service GTFS timetable for the East Midlands (feed version 20260921_024430, downloaded 21 September
// 2026; scratchpad dby/sweep.py, secs.py), for Tuesday 22 September 2026. Stops inside the ONS LAD December 2023
// BGC boundary for Derby (E06000015): 1,105. Trips running that day in the whole feed: 27,846. Trips with at least
// two timed stops inside Derby: 2,595 (417 touch the city at one stop or for zero minutes and are left out). Each
// trip is an interval from its first to its last timed stop inside Derby; mean 32.4 minutes. Ends processed before
// starts at the same instant: peak 109 trips under way, first reached at 08:14 and again at 08:17. Starts first:
// 117. All 5,190 endpoints fall on whole minutes; 661 distinct instants see one trip end and another start.
// Under way at 06:00 20, 08:00 104, 10:00 90, 12:00 86, 15:00 87, 17:00 92, 19:00 58, 22:00 20. 21 intervals end
// at 24:00 or later (GTFS service-day times). All pairs 3,365,715 comparisons against 5,190 sorted events (about
// 64,000 steps). A trip is scheduled passenger service; empty positioning runs are not in the timetable.
// Lesson family: sweep line over interval endpoints (event sorting, tie rules, maximum overlap). Screened free
// site-wide on 21 September 2026 (famcheck.js: interval overlap / sweep line 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Derby E06000015 (261,364 usual residents;
// 256,961 in households, 98.3%; 4,403 in communal establishments, 1.7%), TS007A (16,899 aged 5 to 9, 6.5%; 16,978
// aged 10 to 14, 6.5%; 18,528 aged 20 to 24, 7.1%; England 5.9, 6.0 and 6.0%), TS068 (55,701 schoolchildren and
// full-time students of 246,144 aged 5 and over, 22.6%; England 20.4%). Derby Museums, Museum of Making (Derwent
// Valley Mills, a UNESCO World Heritage Site; Derby's 300-year history of making; widely regarded as the site of
// the world's first factory) and home page (world's largest collection of works by Joseph Wright of Derby).
// Derwent Valley Mills World Heritage Site (inscribed by UNESCO in 2001; birth of the factory system; 24 km north to
// south from the edge of Matlock Bath and Cromford almost to the centre of Derby). Bus Open Data Service home page
// (bus timetable, vehicle location and fares data for every local bus service in England; free, no licence; built
// by the Department for Transport).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'DERBY', blurb: 'The city of the first factory, with a project that finds the busiest minute on its buses from the open timetable.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-derby',
  code: 'dby',
  accent: '#365953',
  accentRationale: 'Derby: a deep teal-green from the solver (6.29:1 on every paper tint, dE 5.9 from the nearest used accent), cooler than the Nottingham green beside it and clear of the Bristol brown',
  pageType: 'city',
  place: {
    name: 'Derby',
    eyebrow: 'Derby, East Midlands, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Derbyshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Derby, England',
  title: 'Best Coding Classes in Derby | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Derby learners aged 6 to 67, from Allestree and Mickleover to Chaddesden and Alvaston. First lesson free.',
  ogDescription: 'Coding and AI lessons for Derby, city of the first factory, on a page that sweeps through a day of bus timetables to find the busiest minute on the network.',
  twitterDescription: 'Derby learners from six to sixty-seven can take live online coding and AI lessons with us, beginning with one free lesson.',
  ogImageCourse: 'competitive-programming-for-teens-course',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Derby Online Coding, AI and Maths Lessons',
    description: 'Coding, Python, AI, data and mathematics taught live online in English to children, teenagers and adults in Derby, in level-based groups or one to one.'
  },

  h1: 'Coding classes in Derby',
  capsuleQ: 'What are the best coding classes in Derby?',
  capsule: 'Derby counted 261,364 usual residents at the 2021 Census, and children aged 5 to 14 made up a larger share than across England, with 6.5% in each five-year band against 5.9% and 6.0% nationally. The city\'s Museum of Making stands on what is widely regarded as the site of the world\'s first factory, at the southern end of the Derwent Valley Mills World Heritage Site. Modern Age Coders teaches Derby learners from six to sixty-seven in live online lessons, one to one or in groups of five to ten at one level, with teachers based in India and times arranged in UK hours. We charge nothing for the first lesson; afterwards a group place is USD 100 and one-to-one teaching USD 150 per month.',
  lead: 'How many buses are carrying passengers around Derby at its busiest moment? The Department for Transport\'s Bus Open Data Service publishes the timetable of every local bus service in England, free and without a licence, so the question has an exact answer. On Tuesday 22 September 2026, 2,595 scheduled trips spend time inside the city boundary. Turn each into a start and an end, sort the 5,190 moments, then walk through them keeping a running count, adding one at each start and taking one away at each end. The highest the count reaches is 109, first at 08:14. That walk is called a sweep line, and it replaces more than 3.3 million pairwise comparisons with a single pass. There is a catch: whether the answer is 109 or 117 depends on one rule about what happens when a trip ends at the very minute another begins. Finding that rule, and stating it, is the lesson Derby\'s buses teach our teenage learners.',
  wa: 'Hello Modern Age Coders, could we book a free coding lesson for a learner in Derby?',

  picks: {
    eyebrow: 'Course picks for Derby',
    h2: 'Four courses for the city of making',
    intro: 'Choose from what already interests the learner. Every course begins with a free live lesson, booked without a card.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Ages 6 to 11', note: 'Number, shape, time and money for primary years, including the clock and timetable skills that come before counting overlaps.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first line to full projects, with a real timetable file as an early taste of messy data.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 13 to 18', note: 'Contest problems built on sorting, greedy methods and prefix sums, the toolkit that interval questions draw on.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Sorting, hashing, heaps and complexity at interview standard, where event-sorting problems are a staple.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Derby today',
      h2: 'A family city, with more school-age children than the national share',
      intro: 'Census 2021 results for the Derby local authority, published by the Office for National Statistics through Nomis.',
      body: [
        { kind: 'table', caption: 'Derby, Census 2021', head: ['Measure', 'Derby', 'England'], rows: [
          ['Usual residents', '261,364', 'Not compared'],
          ['In households', '256,961, 98.3%', 'Not compared'],
          ['In communal establishments', '4,403, 1.7%', 'Not compared'],
          ['Aged 5 to 9', '16,899, 6.5%', '5.9%'],
          ['Aged 10 to 14', '16,978, 6.5%', '6.0%'],
          ['Aged 20 to 24', '18,528, 7.1%', '6.0%'],
          ['Schoolchildren and full-time students, of 246,144 aged five and over', '55,701, 22.6%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'School-age children', p: 'Children aged 5 to 9 and 10 to 14 each made up 6.5% of Derby\'s residents, above England\'s 5.9% and 6.0%.' },
          { h3: 'Almost all in homes', p: 'Some 98.3% of residents lived in households, and only 1.7% in communal establishments such as halls or care homes.' },
          { h3: 'Students present', p: 'In 2021, 22.6% of residents aged five and over were schoolchildren or full-time students, a little above England\'s 20.4%.' }
        ] },
        { kind: 'p', text: 'For a coding school, that profile points to families. A Derby household might include a primary child in Littleover wanting to make a first game, a Year 8 student in Spondon weighing GCSE options and a parent in Oakwood who wants to understand what the children are learning, and each of them would join a group at their own level rather than their age.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Making and the factory',
      h2: 'Three hundred years of making',
      intro: 'From Derby Museums and the Derwent Valley Mills World Heritage Site.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '2001', p: 'UNESCO inscribed the Derwent Valley Mills and their surrounding landscape as a World Heritage Site that year, because the valley saw the birth of the factory system.' },
          { h3: '24 kilometres', p: 'The site runs 24 kilometres from north to south, from the edge of Matlock Bath and Cromford almost to the centre of Derby.' },
          { h3: 'The first factory', p: 'Derby Museums\' Museum of Making tells the city\'s 300-year history of making, on what is widely regarded as the site of the world\'s first factory.' }
        ] },
        { kind: 'p', text: 'Derby Museums also says it holds the world\'s largest collection of works by the painter Joseph Wright of Derby. We have no connection with Derby Museums or the World Heritage Site partnership. We mention them because a factory is, among many other things, a timing problem: machines, shifts and deliveries overlapping through the day. The project on this page is a modern version of the same question, with buses in place of spinning frames.' },
        { kind: 'spec', title: 'Where the timetable comes from', p: 'The Bus Open Data Service, built by the Department for Transport, provides timetable, vehicle location and fares data for every local bus service in England. It is free open data and needs no licence, which is why a learner in Derby can download exactly the file this project uses.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The busiest minute on Derby\'s buses',
      intro: 'A sweep line turns thousands of time intervals into a single running count. We ran one over every scheduled bus trip inside Derby on Tuesday 22 September 2026.',
      body: [
        { kind: 'table', caption: 'Scheduled bus trips under way inside Derby, Tuesday 22 September 2026, Bus Open Data Service timetable', head: ['Time', 'Trips under way', 'Note'], rows: [
          ['06:00', '20', 'Early services'],
          ['08:00', '104', 'Morning rise'],
          ['08:14', '109', 'Peak, first reached'],
          ['12:00', '86', 'Midday'],
          ['17:00', '92', 'Evening rise'],
          ['19:00', '58', 'Tailing off'],
          ['22:00', '20', 'Late services']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Trips become intervals', p: 'Each trip starts at its first timed stop inside the city boundary and ends at its last. On the day, 2,595 trips had at least two such stops.' },
          { h3: '2. Sort the moments', p: 'Every start counts plus one and every end minus one. Sorting all 5,190 moments by time turns the whole question into one pass.' },
          { h3: '3. Sweep and keep count', p: 'Walk through the sorted moments with a running total. Its highest value, 109, is the peak number of trips under way at once, first reached at 08:14.' }
        ] },
        { kind: 'callout', h3: 'One minute, eight buses', p: 'Every one of the 5,190 times in the Derby file falls on a whole minute, and at 661 different moments one trip ends exactly as another begins. Process the end first and those two never overlap: the peak is 109. Process the start first and the peak becomes 117. Neither rule is wrong, but a program that never states its rule can report either number, and nobody reading the answer will know which it chose.' },
        { kind: 'p', text: 'Two more details keep the answer honest. Some trips run past midnight, and the timetable writes their times as 24:10 or later rather than starting a new day; 21 of the Derby intervals end that way, and a program that reads 24:10 as a mistake loses them. And a trip is scheduled passenger service, not a count of every bus on the road: empty runs between routes are not in the timetable, so 109 describes buses in service, not the whole fleet.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Counting overlaps',
      h2: 'Five habits for anything that overlaps in time',
      intro: 'Learned on bus trips, used afterwards on room bookings, exam timetables, parking spaces, server connections and any schedule where things run side by side.',
      body: [
        { kind: 'table', caption: 'Counting overlapping intervals you can trust', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Define start and end', 'Say exactly which moment begins and which ends each interval', 'Two programs disagreeing about the same timetable'],
          ['State the tie rule', 'Decide whether an end and a start at the same instant overlap', 'A peak that jumps from 109 to 117 with no explanation'],
          ['Keep late times', 'Treat 24:10 as ten past midnight on the same service day', 'Late trips that vanish or appear to run backwards'],
          ['Sort, do not compare', 'Sort the moments once instead of checking every pair', 'Over 3.3 million checks where about 64,000 steps will do'],
          ['Say what is counted', 'Report scheduled trips in passenger service, not every bus on the road', 'A timetable count read as a live fleet figure']
        ] },
        { kind: 'p', text: 'The fourth habit grows more important with every extra trip. Doubling the number of trips roughly quadruples the pairwise checks but only slightly more than doubles the sweep, which is the difference between a program that copes with one city and one that copes with a country.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A playground timeline of who is on the swings when, and the question of how many swings are ever needed at once.' },
          { h3: 'Teenagers', p: 'The timetable file read in Python, trips turned into intervals, the sweep written, and both tie rules tested and explained.' },
          { h3: 'Adults', p: 'Capacity and scheduling questions at work, from rooms and staff rotas to connections on a server, answered with a stated rule.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Department for Transport, the Bus Open Data Service, any bus operator, Derby Museums, the Derwent Valley Mills partnership or the Office for National Statistics. The timetable and boundary are published for public use; the intervals, counts and peaks are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a playground timeline to a sweep line',
    intro: 'Age is only a first guess at level; the free lesson finds the real one.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Taking turns', p: 'Clocks, timelines and turn-taking games, drawing who is busy when and counting the most at once.', courses: ['elementary-mathematics-complete-masterclass', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Timelines in code', p: 'Times stored as numbers, lists of start and end times, and a first loop that counts what overlaps.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Sweep-line algorithms', p: 'Event sorting, tie rules and maximum overlap on real timetable data, with the pairwise method as a comparison.', courses: ['competitive-programming-for-teens-course', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Scheduling at work', p: 'Capacity, rotas and bookings handled with sorted events, complexity in mind and every rule written down.', courses: ['data-structures-algorithms-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can read a timetable in seconds. Why should a Derby teenager write a sweep line?',
    intro: 'Because the answer rests on a rule nobody wrote down.',
    p1: 'Ask an AI tool how many buses Derby runs at its busiest moment and it may produce a confident number. Whether that number is 109 or 117 depends on a tie rule it is unlikely to mention, and whether late-night trips were counted depends on how it read times past 24:00. A learner who has written the sweep knows which questions to put to any figure like that.',
    p2: 'Sweep lines also run through the software that AI itself depends on: schedulers deciding which job runs next, calendars spotting clashes, systems tracking how many users are connected at once. Understanding one small, exact algorithm opens the door to all of them.',
    closer: 'That is why a Derby teenager should still learn to program in 2026, in the city of the first factory: machines will count anything, but deciding what counts, and saying so plainly, is still the programmer\'s job.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Allestree, Normanton or Chaddesden, all from home',
    intro: 'Derby is compact, but a lesson that needs no bus at all is simpler still.',
    cells: [
      { h3: 'Across the city in no time', p: 'A learner in Mickleover and one in Chellaston can share a lesson without either of them catching a single bus.' },
      { h3: 'The school stages in use here', p: 'Reception, Key Stages 1 to 4, Year 9 options, GCSEs and A levels, named as Derby schools name them, and taught in English.' },
      { h3: 'A free lesson that teaches', p: 'The first session is proper teaching on a real task and ends with a suggested level, course and weekly time. There is no card to enter.' },
      { h3: 'Level first, age second', p: 'Five to ten learners at one stage, gathered from Derby, the wider UK and abroad, so that every level can find a sensible slot.' },
      { h3: 'A regular weekly pattern', p: 'Two lessons a week at a set time, around eight a month, with breaks for holidays and exams arranged with the teacher in advance.' },
      { h3: 'Teachers on a fixed clock', p: 'India does not change its clocks, so our teachers are four and a half hours ahead of Derby in British Summer Time and five and a half in winter, which keeps after-school and evening slots inside their day.' }
    ],
    spec: { title: 'Parents learning too', p: 'Adults can learn alongside their children in separate groups at their own level, or one to one in the evening; the free lesson is the place to decide which suits a household.' }
  },

  fees: {
    h2: 'Derby lesson fees',
    intro: 'A free start, then a single monthly fee.',
    first: 'A complete lesson with nothing to pay, finishing with a level, a course suggestion and a proposed weekly time.',
    group: 'About eight live lessons each month in a group of five to ten learners at one level.',
    private: 'About eight live lessons each month, taught to one learner with the teacher\'s full attention.',
    closer: 'Outside India the fee is one US dollar amount for everyone, so a family in Darley Abbey pays exactly what a family in Allestree pays, and there is no separate pound tariff. Nothing is charged until the free lesson has settled a course and a slot; the pricing page covers pausing, missed lessons and switching between group and one-to-one teaching.'
  },

  reviewsH2: 'Six unaltered Google reviews from families we teach',

  book: {
    h2: 'Book a first lesson in Derby at no cost',
    intro: 'We set the first task by level: a turn-taking timeline for a young child, a first Python program that counts overlaps, or the full Derby bus timetable and a sweep line for a teenager ready for real data.',
    success: 'Thank you. We will be in touch shortly to arrange a Derby lesson.'
  },

  faq: {
    h2: 'Derby coding class questions',
    intro: 'The questions Derby families ask us most often.',
    items: [
      { q: 'How many people live in Derby?', a: 'The 2021 Census counted 261,364 usual residents in the Derby local authority: 256,961 in households and 4,403, or 1.7%, in communal establishments.' },
      { q: 'Does Derby have many school-age children?', a: 'Yes, relative to England. In 2021, children aged 5 to 9 and 10 to 14 each made up 6.5% of residents, against 5.9% and 6.0% nationally, and 22.6% of residents aged five and over were in school or full-time study.' },
      { q: 'What is the Museum of Making?', a: 'A Derby Museums site that tells the city\'s 300-year history of making, on what is widely regarded as the site of the world\'s first factory, within the Derwent Valley Mills World Heritage Site. We are not connected with Derby Museums.' },
      { q: 'What is a sweep line?', a: 'An algorithm that sorts the start and end moments of many intervals and passes through them once, keeping a running count. It finds the maximum overlap far faster than comparing every pair.' },
      { q: 'How many buses run at once in Derby?', a: 'In the Bus Open Data Service timetable for Tuesday 22 September 2026, the peak is 109 scheduled trips under way inside the city at once, first reached at 08:14, if a trip ending as another starts is not counted as overlapping. Counted the other way, the peak is 117.' },
      { q: 'Where does the timetable data come from?', a: 'From the Bus Open Data Service, built by the Department for Transport, which provides timetable, location and fares data for every local bus service in England as free open data.' },
      { q: 'When are Derby lessons held?', a: 'After school, in the evening or at weekends, at a UK time agreed during the free lesson. Our teachers are four and a half hours ahead of Derby in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Derby?', a: 'No. There is no Derby centre and no premises anywhere in the UK; every lesson is taught live online. A learner needs a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much are lessons for Derby learners?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Derby groups put together?', a: 'By level, pace and goals rather than age or postcode, with five to ten learners at one stage. If no group meets at a workable time, we suggest one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'East Midlands neighbours and beyond',
    html: 'Just along the A52, the <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham page</a> stretches a rubber band round every tram stop. <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> links its bus stops into groups and <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> samples a footfall record fairly. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lists every UK page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Derby and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-nottingham', label: 'Nottingham' },
    { href: '/best-coding-class-in-coventry', label: 'Coventry' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-dby .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.5rem); }
.cg-root.cg-dby .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-dby .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-dby .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-dby .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-dby .cg-grid-3 { gap: clamp(1.25rem, 2.7vw, 2.3rem); }
.cg-root.cg-dby .cg-table th { letter-spacing: 0.025em; }
.cg-root.cg-dby .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dby .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-dby .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Derby, Census 2021 via Nomis: TS001 Derby local authority (E06000015) 261,364 usual residents, 256,961 in households (98.3 percent), 4,403 in communal establishments (1.7 percent); TS007A 16,899 aged 5 to 9 (6.5 percent), 16,978 aged 10 to 14 (6.5 percent), 18,528 aged 20 to 24 (7.1 percent), against England 5.9, 6.0 and 6.0 percent; TS068 55,701 schoolchildren and full-time students of 246,144 residents aged 5 and over, 22.6 percent, against 20.4 percent in England. Derby Museums, Museum of Making: Derwent Valley Mills, a UNESCO World Heritage Site; Derby\'s 300-year history of making; widely regarded as the site of the world\'s first factory. Derby Museums home page: the world\'s largest collection of works by Joseph Wright of Derby. Derwent Valley Mills World Heritage Site: inscribed by UNESCO in 2001 for the birth of the factory system; 24 km north to south from the edge of Matlock Bath and Cromford almost to the centre of Derby. Bus Open Data Service: timetable, vehicle location and fares data for every local bus service in England, free, no licence, built by the Department for Transport.',
    localProject: 'The busiest minute on Derby\'s buses. BODS GTFS, East Midlands, feed version 20260921_024430, Tuesday 22 September 2026. 1,105 stops inside the ONS LAD December 2023 BGC boundary; 27,846 trips running in the feed; 2,595 trips with two or more timed stops inside Derby (417 excluded). Interval = first to last timed stop inside Derby; mean 32.4 minutes. Sweep, ends before starts: peak 109 at 08:14 (again 08:17); starts before ends: 117. All 5,190 endpoints whole minutes; 661 instants with an end and a start together. Under way: 06:00 20, 08:00 104, 12:00 86, 17:00 92, 19:00 58, 22:00 20. 21 intervals end at 24:00 or later. Pairwise 3,365,715 against 5,190 sorted events (about 64,000 steps). Scheduled passenger trips only. Lesson family: sweep line over interval endpoints (event sorting, tie rules, maximum overlap); distinct from GTFS after-midnight handling, queueing and run-length encoding.',
    requiredMentions: [
      '261,364',
      '256,961',
      '55,701',
      '246,144',
      '16,899',
      '16,978',
      'Museum of Making',
      'Derwent Valley Mills',
      'Joseph Wright',
      'Bus Open Data Service',
      '08:14',
      'sweep line'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Derby: 261,364 usual residents; 256,961 in households; 4,403 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000015' },
      { claim: 'Nomis, Census 2021 TS007A: Derby and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000015,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Derby 55,701 students of 246,144 aged 5 and over (22.6 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000015,E92000001' },
      { claim: 'Bus Open Data Service: what the service provides, free and without a licence, built by the Department for Transport.', url: 'https://www.bus-data.dft.gov.uk/' },
      { claim: 'Bus Open Data Service, GTFS timetable download for the East Midlands (feed version 20260921_024430).', url: 'https://data.bus-data.dft.gov.uk/timetable/download/gtfs-file/east_midlands/' },
      { claim: 'ONS Open Geography, Local Authority Districts December 2023 BGC: the Derby boundary.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2023_Boundaries_UK_BGC/FeatureServer/0' },
      { claim: 'Derby Museums, Museum of Making: 300-year history of making; widely regarded as the site of the world\'s first factory.', url: 'https://derbymuseums.org/museum-of-making/' },
      { claim: 'Derby Museums: the world\'s largest collection of works by Joseph Wright of Derby.', url: 'https://derbymuseums.org/' },
      { claim: 'Derwent Valley Mills World Heritage Site: inscribed in 2001; 24 km from Matlock Bath and Cromford almost to the centre of Derby.', url: 'https://www.derwentvalleymills.org/discover/derwent-valley-mills-history/' }
    ],
    rejectedClaims: [
      'Bus operator names and trip counts by operator: computed but not published on the page, to avoid implying any connection.',
      'University of Derby and Rolls-Royce facts: no figures read from primary pages for this build, so none stated.',
      'Live fleet size: the page counts scheduled passenger trips, not vehicles on the road.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Department for Transport, bus operators, Derby Museums, the Derwent Valley Mills partnership or the ONS.'
    ]
  }
};
