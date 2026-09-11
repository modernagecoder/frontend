'use strict';
// Velsen: IJmuiden, the North Sea Canal and its locks, Tata Steel. 70,361
// residents in seven woonplaatsen.
// Spine (modest, per the Phase 5 method): the locks at IJmuiden were built
// in 1876, 1896, 1929 and 2022, and the encyclopaedia says that as ships grew,
// the existing lock became a bottleneck for shipping to Amsterdam. A chain
// moves only as fast as its narrowest part, and speeding up anything else
// changes nothing. Programs behave the same way.

module.exports = {
  slug: 'coding-classes-in-velsen',
  code: 'vls',
  accent: '#A83B6C',
  accentRationale: 'Velsen: a harbour-light rose placed by the solver nearly twenty units from every page it links to, the Noord-Holland, Amsterdam, Haarlem and Zaanstad accents among them, with an unlinked district as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Velsen',
    eyebrow: 'Velsen, Noord-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Velsen, Netherlands',
  title: 'Coding Classes in Velsen | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Velsen, ages 6 to 67, in IJmuiden, Velserbroek, Santpoort, Driehuis and Velsen-Noord. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics at the mouth of the North Sea Canal, on a page about the narrowest part of any system.',
  twitterDescription: 'Velsen and IJmuiden classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Velsen Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in IJmuiden, Velserbroek, Santpoort, Driehuis and Velsen-Noord, taught in English.'
  },

  h1: 'Coding classes in Velsen, where a lock decides how big a ship can be',
  capsuleQ: 'What are the best coding classes in Velsen?',
  capsule: 'Velsen, with 70,361 residents on 1 January 2026 by the national count, is IJmuiden, Velserbroek, Santpoort, Driehuis and the two Velsens, at the mouth of the North Sea Canal that was dug in the 1870s for the port of Amsterdam. Every ship bound for Amsterdam passes through the locks at IJmuiden, built in 1876, 1896, 1929 and, most recently, 2022, and the encyclopaedia records why the newest was needed: as ships grew larger, the existing lock became a bottleneck. A port is only as open as its narrowest gate. Software is the same. A program is only as fast as its slowest step, and speeding up any other step changes almost nothing, which is why good programmers measure before they optimise. Live classes run online, in English, for ages 6 to 67; the first lesson is free, then USD 100 a month in a group or USD 150 one to one.',
  lead: 'A port can have deep water, long quays and fast cranes, and still take no ship wider than its lock. For Amsterdam that lock is at IJmuiden, and its history is a history of the narrowest point moving: a lock in 1876, a bigger one in 1896, a bigger one again in 1929 and, opened by the King on 26 January 2022, a sea lock 500 metres long, 70 wide and 18 deep. Each time, the encyclopaedia explains, the ships had grown until the lock became the limit. Programmers call this the bottleneck. In any chain of steps, the whole can go no faster than its slowest part, and effort spent anywhere else is wasted. The trap is that people naturally improve the step they can see or the step they know best, not the one that is actually slowest. The cure is simple and constantly skipped: measure every step first, then work on the narrowest one, and measure again, because once it is widened the bottleneck moves somewhere else.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Velsen.',

  picks: {
    eyebrow: 'Course picks for Velsen',
    h2: 'Four courses for the town at the mouth of the canal',
    intro: 'A child in Velserbroek who wants a game that runs smoothly, a teenager in IJmuiden whose app takes ages to load, a student in Santpoort training a model that seems to crawl, and an adult in Driehuis whose weekly report takes an hour to build. The first lesson is free for any of them.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games that stay smooth, where a child learns to find which part of the game is slowing everything down.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Apps timed step by step, so the slow screen is fixed at its real cause rather than by guesswork.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Profiling Python code and AI pipelines, and speeding up the part that actually takes the time.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Slow reports and dashboards traced to the one step that holds up all the rest.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Velsen today',
      h2: 'Seven places, a canal, the steelworks, and the locks',
      intro: 'Velsen is made up of seven woonplaatsen, Driehuis, IJmuiden, Santpoort-Noord, Santpoort-Zuid, Velsen-Noord, Velsen-Zuid and Velserbroek, divided by the statistics office into 11 wijken and 64 buurten. It covers 4,503 hectares of land and 1,814 of water, with a published density of 1,555 residents per square kilometre over the land.',
      body: [
        { kind: 'table', caption: 'The locks at IJmuiden, in the encyclopaedia\'s dates', head: ['Lock', 'Year', 'What the entry records'], rows: [
          ['Zuidersluis', '1876', 'the first of the IJmuiden locks'],
          ['Middensluis', '1896', 'a second, larger lock'],
          ['Noordersluis', '1929', 'the lock that ships outgrew'],
          ['Zeesluis IJmuiden', '2022', 'opened by the King on 26 January 2022; 500 metres long, 70 wide, 18 deep; larger in surface than the Kieldrechtsluis']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The canal and the town', p: 'The North Sea Canal was dug in the 1870s for the port of Amsterdam, and from the end of the nineteenth century IJmuiden grew up along it as a fishing and harbour town.' },
          { h3: 'Steel', p: 'Velsen is home to a site of the steel producer Tata Steel, according to the encyclopaedia entry for the municipality.' },
          { h3: 'Why a new lock', p: 'As ships grew in size, the encyclopaedia says, the existing lock became a bottleneck for shipping to the port of Amsterdam, and that is what the sea lock of 2022 was built to relieve.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'The narrowest point',
      h2: 'Where the time actually goes',
      intro: 'The table is an invented example of an ordinary web page taking half a second to load. It shows how much each possible improvement would save, and why the obvious choice is often the wrong one.',
      body: [
        { kind: 'table', caption: 'An illustration: one page load of 500 milliseconds, split into its steps', head: ['Step', 'Time taken', 'If made twice as fast', 'Share of the total saved'], rows: [
          ['Running the application code', '50 ms', 'saves 25 ms', '5 percent'],
          ['Waiting for the database', '400 ms', 'saves 200 ms', '40 percent'],
          ['Sending the page over the network', '50 ms', 'saves 25 ms', '5 percent'],
          ['Whole page', '500 ms', 'all three doubled saves 250 ms', '50 percent']
        ] },
        { kind: 'p', text: 'A programmer who loves tidy code might spend a week making the application twice as fast and cut the load time by 5 percent. The same week spent on the database query would cut it by 40 percent. Nothing in the finished page tells anyone which week was better spent; only measuring the steps does. The rule underneath is simple arithmetic: improving a step can save at most the time that step takes, so a step that uses a tenth of the time can never deliver more than a tenth of the gain, however brilliantly it is optimised. And once the slowest step is fixed, a different step becomes the slowest, exactly as the IJmuiden locks show: each new lock removed one limit until the ships grew into the next.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Velsen in the national statistics',
      intro: 'The published figures for the municipality with their years, the encyclopaedia history, and the page\'s own arithmetic at the end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '64,490 in 1995, 67,122 in 2013, 70,026 in 2025 and 70,361 on 1 January 2026. The 2025 figure is 34,860 men and 35,166 women.' },
          { h3: 'Ages, 2026', p: 'Under fifteen, 10,509; fifteen to twenty-five, 7,522; twenty-five to forty-five, 17,178; forty-five to sixty-five, 19,516; sixty-five and above, 15,636.' },
          { h3: 'Households', p: '32,250 households in 2025, averaging 2.14 people: 12,125 of one person and 20,125 of more, 11,124 of which include children.' },
          { h3: 'Homes and income', p: '32,231 dwellings in 2025, 18,372 owner-occupied and 13,859 rented; 31,264 occupied and 967 unoccupied; estimated average value 408,000 euro. Income averaged 35,300 euro per resident and 42,400 per income recipient in 2024, and 2.8 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: '23 primary establishments teach 5,343 pupils, about 232 each, and 11 secondary establishments teach 3,930, about 357 each, with 253 MBO students at institutions in the municipality. In 2025, 53,353 residents were of Dutch origin, 6,023 of European and 10,650 of non-European origin, and 60,693 were born in the Netherlands.' },
          { h3: 'The arithmetic', p: '70,361 minus 64,490 is 5,871, which the figures site gives as 9.1 percent. 5,343 over 23 is about 232 and 3,930 over 11 about 357. The age groups, the households, the two tenure groups, occupied and unoccupied dwellings, and the origin groups were each added up only to confirm the totals.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Velsen, Tata Steel, the port, the locks or any school in the IJmond, and nothing here implies one. The statistics are those published for Velsen for the years stated. The woonplaatsen, the canal, the growth of IJmuiden and the steelworks come from the encyclopaedia entry for Velsen, and the locks from the entry for the IJmuiden locks. The Velsen entry gives its own population and area figures from a different source, and they are not combined with the statistics here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Measure first, then widen the narrowest gate',
      intro: 'Every speed problem has one step that matters most. The work is finding it honestly, fixing it, and then finding the next one.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Time every step', p: 'Before changing anything, measure how long each part takes: loading, calculating, waiting, drawing. A profiler does this for code; a stopwatch and a notebook do it for a slow report.' },
          { h3: '2. Fix only the biggest', p: 'Work on the step that takes the most time and ignore the rest for now. A small improvement to a large step beats a large improvement to a small one, every time.' },
          { h3: '3. Measure again', p: 'After the fix, time everything again. The bottleneck has almost certainly moved, and the next piece of work is wherever it has gone, which is often somewhere nobody expected.' }
        ] },
        { kind: 'table', caption: 'Bottlenecks in places that look fast', head: ['System', 'Where it usually really is', 'What people speed up instead', 'What finding it takes'], rows: [
          ['A slow web page', 'a database query or a large image', 'the code that builds the page', 'timing each request in the browser tools'],
          ['A game that stutters', 'one function called far too often', 'the graphics settings', 'a profiler run while it stutters'],
          ['Training an AI model', 'loading and preparing the data', 'the model itself', 'measuring how often the processor sits idle waiting'],
          ['An AI assistant workflow', 'the calls to the language model', 'the code around them', 'logging how long each call takes'],
          ['Shipping to Amsterdam', 'the lock at IJmuiden', 'anything else in the port', 'the size of the ships that could pass']
        ] },
        { kind: 'callout', h3: 'Why AI systems are full of bottlenecks', p: 'Modern AI work is a chain of steps: fetching data, cleaning it, feeding it to a model, waiting for the answer, processing the result. Each step can be the narrowest, and each is easy to overlook. Teams training models often discover that their expensive processors spend much of their time idle, waiting for data that cannot be loaded fast enough, so a faster model would not help at all. Applications built on AI services find that nearly all the waiting happens inside the calls to the model, so polishing the surrounding code is effort wasted, while sending several requests at once or caching repeated ones changes everything. The discipline is the one the IJmuiden locks illustrate. Find the narrowest gate by measurement rather than by instinct, widen it, and then look again, because the ships, the data and the users keep growing, and the limit keeps moving to whatever part of the system is now the smallest.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for making anything faster',
      intro: 'For programs, websites, data pipelines, AI workflows and slow reports. Practised at the mouth of the North Sea Canal.',
      body: [
        { kind: 'table', caption: 'Speed work that pays off', head: ['Habit', 'In practice', 'Waste it prevents', 'What you get'], rows: [
          ['Measure before changing', 'Time every step of the slow process first', 'Optimising the wrong part', 'A true picture of where time goes'],
          ['Largest step first', 'Work only on the step that takes the most time', 'Effort that cannot pay back', 'The biggest gain for the effort'],
          ['Re-measure after', 'Time everything again after each fix', 'Chasing a bottleneck that has moved', 'The next target, found honestly'],
          ['Know the ceiling', 'Remember a step can save at most the time it takes', 'Expecting miracles from small steps', 'Realistic plans'],
          ['Plan for growth', 'Ask which step will become the limit as use grows', 'Surprises when demand rises', 'Capacity added before it is needed']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A relay race of three friends where one always takes longest. The child works out that helping the fastest runner does nothing, and then does the same with a slow game.' },
          { h3: 'For teenagers', p: 'A Python program timed function by function with a profiler. The teenager speeds up the slowest function, times again, and finds the next bottleneck.' },
          { h3: 'For adults', p: 'A slow weekly report timed step by step. Adults usually find one step, often an export or a lookup, taking most of the hour.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s history of the IJmuiden locks as an image, and a clearly invented page-load example. It says nothing about how the locks or the port are managed today.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the slowest runner in a relay to profiling an AI pipeline',
    intro: 'The level is set during the free lesson by watching the learner on a real task. Age alone does not set it, and neither does whether home is IJmuiden or Santpoort.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The slowest runner', p: 'Children find the one part that holds a whole game up.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Stopwatch coding', p: 'Learners time each part of a Python program and compare.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Profiler', p: 'Teenagers profile an app, fix the slowest part and measure again.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Pipeline speed', p: 'Adults find the real bottleneck in data and AI workflows.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can rewrite code to be faster in seconds. Why should a teenager in IJmuiden measure first?',
    intro: 'Because a port is only as open as its narrowest lock, and faster code in the wrong place changes nothing.',
    p1: 'Ask an AI assistant to make a program faster and it will usually oblige, rewriting loops, adding clever shortcuts and suggesting tidier structures. Whether any of that matters depends entirely on where the time goes, and the assistant typically cannot see that, because it reads the code, not a measurement of the code running. It may polish a function that takes a thousandth of the time while the real delay sits in a database query or a network call it never looked at.',
    p2: 'A learner who has timed a program step by step, found that one step took almost all the time and fixed only that, understands performance better than any list of tricks can teach. Measuring before changing, working on the largest step and measuring again are decisions a person has to insist on. The assistant can produce faster code. Knowing which code needs to be faster is the human part.',
    closer: 'So the case for a child in Velsen learning to code in 2026 is not the steelworks or the harbour. It is that someone who measures before optimising will be needed wherever AI makes it easy to change code quickly and hard to know whether the change mattered.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The same class in all seven places',
    intro: 'Velsen is split by the canal into north and south, with IJmuiden by the sea and Santpoort and Velserbroek inland, and a lesson from home reaches every part equally.',
    cells: [
      { h3: 'No crossing the canal', p: 'A learner in Velsen-Noord and a learner in Santpoort-Zuid open the same class at the same time from home, with no tunnel or ferry on a school night.' },
      { h3: 'Dutch terms as written', p: 'Brugklas, groep, vmbo, havo, vwo and the profielkeuze keep their Dutch names, as an IJmond school writes them, while the teaching is in English.' },
      { h3: 'A free lesson that teaches', p: 'The opening session is a real lesson on a real task. At the end the teacher proposes a level, a course and a weekly time, and asks for no card.' },
      { h3: 'Groups at one level', p: 'Five to ten learners at the same stage. Velsen has 10,509 residents under fifteen, and five who match on subject, level and hour are unusual in one municipality, so groups can include learners from other countries.' },
      { h3: 'Regio Noord holidays', p: 'Two lessons a week, about eight a month, at one fixed time, with breaks for the regio Noord holidays that Noord-Holland schools keep.' },
      { h3: 'Teachers a few hours ahead', p: 'The teachers are in India, three and a half hours ahead of Velsen in summer and four and a half in winter, so late afternoons, evenings and weekend mornings all work.' }
    ],
    spec: { title: 'Thirty-four schools, seven places, and one group online', p: 'Velsen has 23 primary establishments teaching 5,343 pupils and 11 secondary establishments teaching 3,930. Five learners matched on subject, stage and hour are much easier to gather across all ages from 6 to 67 and many countries than within one municipality.' }
  },

  fees: {
    h2: 'What Velsen families pay',
    intro: 'Three prices, and that is all of them.',
    first: 'A real lesson on a real task, ending with a level and a course.',
    group: 'Per month, normally eight lessons, five to ten learners at one level.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The fee is a single dollar price for every country, with no euro list, so a family in Velserbroek pays what a family in IJmuiden pays. Nothing is charged until the free lesson has fixed a course and a time, and payment is then arranged over WhatsApp. The pricing page covers pauses, format changes and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, exactly as left',

  book: {
    h2: 'How far along is the learner?',
    intro: 'The first task might be finding the slowest part of a game, timing each step of a small Python program, or tracing a slow report to the one step that holds it up.',
    success: 'Thank you. Your Velsen class request has been sent.'
  },

  faq: {
    h2: 'Velsen coding class questions',
    intro: 'The municipality, its locks, its figures, and the lessons.',
    items: [
      { q: 'What does the municipality of Velsen include?', a: 'Seven woonplaatsen: Driehuis, IJmuiden, Santpoort-Noord, Santpoort-Zuid, Velsen-Noord, Velsen-Zuid and Velserbroek, divided by the statistics office into 11 wijken and 64 buurten.' },
      { q: 'How many people live in Velsen?', a: 'The national count was 70,361 on 1 January 2026, in 32,250 households in 2025. In 1995 it was 64,490, and the figures site gives the growth since then as 9.1 percent.' },
      { q: 'Why was a new sea lock built at IJmuiden?', a: 'As ships grew larger, the existing lock became a bottleneck for shipping to the port of Amsterdam, according to the encyclopaedia. The new sea lock was opened by the King on 26 January 2022 and is 500 metres long, 70 wide and 18 deep.' },
      { q: 'How old are the IJmuiden locks?', a: 'The encyclopaedia gives the Zuidersluis as 1876, the Middensluis as 1896 and the Noordersluis as 1929, with the sea lock added in 2022. The North Sea Canal itself was dug in the 1870s for the port of Amsterdam.' },
      { q: 'How did IJmuiden grow?', a: 'From the end of the nineteenth century IJmuiden grew up along the North Sea Canal as a fishing and harbour town, the encyclopaedia says. Velsen is also home to a site of the steel producer Tata Steel.' },
      { q: 'How many schools are there in Velsen?', a: 'The statistics count 23 primary establishments teaching 5,343 pupils and 11 secondary establishments teaching 3,930, with 253 MBO students at institutions in the municipality. No school is rated here.' },
      { q: 'What language are the lessons in, and when do they take place?', a: 'In English, with Dutch school words such as brugklas, havo and vwo left untranslated. The teachers work from India, three and a half hours ahead of Velsen in summer and four and a half in winter, so late-afternoon, evening and weekend times are easy to arrange. The time is agreed in the free lesson, and regio Noord holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Velsen?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Velsen coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the IJmond and beyond',
    h2: 'Along the canal to Amsterdam, and across the province',
    html: 'At the far end of the North Sea Canal, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a> leads to the capital\'s district pages. Closer by, <a class="cg-inline-link" href="/coding-classes-in-haarlem">Haarlem</a> and <a class="cg-inline-link" href="/coding-classes-in-zaanstad">Zaanstad</a> have pages of their own, and every municipality in the province is listed on <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. For machine learning from the first lesson there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the full series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Velsen, Noord-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-vls .cg-hero-grid { align-items: end; gap: clamp(1.15rem, 2.8vw, 2.3rem); }
.cg-root.cg-vls .cg-hero h1 { font-weight: 640; letter-spacing: -0.017em; line-height: 1.08; }
.cg-root.cg-vls .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-vls .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-vls .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.015em; }
.cg-root.cg-vls .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.7rem); }
.cg-root.cg-vls .cg-card { border-radius: 5px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-vls .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-vls .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vls .cg-table td:nth-child(2) { font-weight: 700; }
.cg-root.cg-vls .cg-ladder-col { border-left: 3px solid var(--cg-accent-soft); padding-left: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Velsen, Noord-Holland: 70,361 residents (statistics, 1 January 2026), 70,026 (2025), 67,122 (2013), 64,490 (1995), growth given by the site as 5,871 or 9.1 percent; 34,860 men and 35,166 women (2025); ages (2026) 10,509 under fifteen, 7,522 fifteen to twenty-five, 17,178 twenty-five to forty-five, 19,516 forty-five to sixty-five, 15,636 sixty-five or over; 32,250 households (2025) averaging 2.14, 12,125 one-person, 20,125 multi-person, 11,124 with children; 6,317 hectares, 4,503 land, 1,814 water, published density 1,555; 32,231 dwellings (2025), 18,372 owner-occupied at 57 percent, 13,859 rented at 43 percent, 31,264 occupied and 967 unoccupied; estimated average value 408,000 euro; income 35,300 euro per resident and 42,400 per recipient (2024); 2.8 percent in poverty; origin (2025) 53,353 Dutch, 6,023 European, 10,650 non-European, 60,693 born in the Netherlands; 7 woonplaatsen, 11 wijken, 64 buurten; 23 primary establishments with 5,343 pupils, 11 secondary with 3,930, 253 MBO students at institutions. Encyclopaedia (Velsen): kernen Driehuis, IJmuiden (town hall), Santpoort-Noord, Santpoort-Zuid, Velsen-Noord, Velsen-Zuid, Velserbroek; the North Sea Canal dug in the 1870s for the port of Amsterdam; IJmuiden grew along the canal from the end of the nineteenth century as a fishing and harbour town; a site of the steel producer Tata Steel; its own population and area figures, not combined with the statistics. Encyclopaedia (IJmuiden locks): Zuidersluis 1876, Middensluis 1896, Noordersluis 1929; the sea lock opened by the King on 26 January 2022, 500 metres long, 70 wide, 18 deep, larger in surface than the Kieldrechtsluis; as ships grew the existing lock became a bottleneck for shipping to the port of Amsterdam. Regio Noord holidays. The city page teaches bottlenecks.',
    localProject: 'A chain moves only as fast as its narrowest part. The IJmuiden locks were built in 1876, 1896, 1929 and 2022, and the encyclopaedia says the existing lock became a bottleneck as ships grew, so each new lock moved the limit until ships grew into the next. An invented page-load table (50 ms code, 400 ms database, 50 ms network) shows doubling the code speed saves 5 percent and doubling the database saves 40 percent, because a step can save at most the time it takes, and once widened the bottleneck moves. The programming form covers slow web pages, stuttering games, AI training where processors wait for data, and AI workflows where the time sits inside model calls. The defences are measuring every step before changing anything, working only on the largest step, re-measuring after each fix, knowing a step\'s ceiling, and asking which step will limit growth. Chosen after a case-sensitive check found no page using bottleneck or Amdahl. The page says nothing about how the locks are managed today. Distinct from Rotterdam, which reports port throughput in two units, from Lelystad, which concerns single points of failure, and from Gouda, which concerns failures hidden at pipeline joints.',
    requiredMentions: [
      '64,490',
      '67,122',
      '32,250',
      '12,125',
      '11,124',
      '32,231',
      '18,372',
      '13,859',
      '5,343',
      '3,930',
      '15,636',
      'Noordersluis',
      'Kieldrechtsluis',
      'Velserbroek'
    ],
    sources: [
      { claim: 'Gemeente Velsen: 70,361 inwoners (2026), 70,026 (2025), 67,122 (2013), 64,490 (1995), growth 5,871 (9.1 percent); mannen 34,860, vrouwen 35,166 (2025); ages 0-15 10,509, 15-25 7,522, 25-45 17,178, 45-65 19,516, 65+ 15,636 (2026); 32,250 huishoudens, 12,125 eenpersoons, 20,125 meerpersoons, 11,124 met kinderen, gemiddeld 2.14 (2025); 6,317 hectare, land 4,503, water 1,814; bevolkingsdichtheid 1,555; woningvoorraad 32,231, koop 18,372 (57 percent), huur 13,859 (43 percent), bewoond 31,264, onbewoond 967 (2025); gemiddelde WOZ 408,000 euro; gemiddeld inkomen per inwoner 35,300 and per inkomensontvanger 42,400 euro (2024); personen in armoede 2.8 percent; basisonderwijs 23 vestigingen 5,343 leerlingen, voortgezet onderwijs 11 vestigingen 3,930 leerlingen, MBO 253 (2025); herkomst Nederland 53,353, Europa 6,023, buiten Europa 10,650, geboren in Nederland 60,693 (2025); 7 woonplaatsen, 11 wijken, 64 buurten.', url: 'https://allecijfers.nl/gemeente/velsen/' },
      { claim: 'Velsen (encyclopaedia): kernen Driehuis, IJmuiden (stadhuis), Santpoort-Noord, Santpoort-Zuid, Velsen-Noord, Velsen-Zuid, Velserbroek. Het Noordzeekanaal werd in de jaren zeventig van de 19e eeuw gegraven ten behoeve van de Haven van Amsterdam. Langs het kanaal ontstond vanaf het eind van de 19e eeuw IJmuiden als vissers- en havenstad. Velsen kent een vestiging van staalproducent Tata Steel.', url: 'https://nl.wikipedia.org/wiki/Velsen' },
      { claim: 'Sluizen van IJmuiden (encyclopaedia): Zuidersluis uit 1876; Middensluis uit 1896; Noordersluis uit 1929. Op 26 januari 2022 is de zeesluis officieel geopend door de Koning. Lengte 500 m, breedte 70 m, diepte 18 m. De zeesluis zou hiermee qua oppervlak groter worden dan de Kieldrechtsluis. Door de toename van de afmetingen van de schepen werd deze sluis een knelpunt voor de scheepvaart naar de Haven van Amsterdam.', url: 'https://nl.wikipedia.org/wiki/Zeesluis_IJmuiden' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That the sea lock is the largest in the world. The source says it is larger in surface than the Kieldrechtsluis, and the page says only that.',
      'Ship sizes, traffic volumes or waiting times at the locks. Not in the sentences read.',
      'Any comparison of the statistics area of 6,317 hectares with the encyclopaedia area of 52.87 square kilometres. Different sources and different definitions of water.',
      'The Dudok town hall in IJmuiden. Dudok belongs to the Hilversum page.',
      'Any comment on the absence of higher-education students in the row. Reading the next column is the Westland argument.',
      'Anything the Amsterdam, Haarlem, Zaanstad and Noord-Holland pages own, including their figures and arguments.'
    ]
  }
};
