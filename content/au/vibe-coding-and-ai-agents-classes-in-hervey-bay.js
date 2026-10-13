'use strict';
// Hervey Bay (cg- city page, Australia cluster Phase 7, row 154). Shaped page: vibe coding and AI agents for
// teenagers and adults.
// Spine: how long may an agent trust a remembered answer about the next bus? Data: Translink (Queensland
// Department of Transport and Main Roads), "Maryborough-Hervey Bay general transit feed specification",
// MHB_GTFS.zip from gtfsrt.api.translink.com.au, listed on data.qld.gov.au under Creative Commons Attribution
// 4.0, downloaded 7 October 2026; feed_info valid 20261007 to 20261206. 14 routes (701 to 720), 389 stops.
// Services: MHB 26_27-43729 Monday to Friday 87 trips; Saturday 59 trips; Sunday 3 trips; one Tuesday and
// Thursday trip. Wednesday service (43729 only): 386 stops served, 3,450 scheduled stop departures (pickup
// allowed). Busiest stop 840017 "Central Ave at Stockland Hervey Bay": 71 Wednesday departures, first 06:35,
// last 19:01. Simulation (our calculation, scratchpad au/r3/hvb_ttl.py): an agent answers "when is the next
// departure?" every 10 seconds from each stop's first to last departure, refreshing a cached answer whenever
// the fixed time-to-live window rolls over; an answer is wrong when the cached departure has already left.
// Wrong share over all stops / at the busiest stop: TTL 1 min 1.72% / 8.29%; 5 min 5.19% / 30.53%; 15 min
// 13.51% / 57.34%; 30 min 24.23% / 77.44%; 60 min 46.19% / 88.85%. Cache refreshes at the busiest stop over the
// day: 746 (1 min), 150 (5 min), 51 (15 min), 26 (30 min), 14 (60 min); expiring at the cached bus's own
// departure gives 0 wrong answers with one refresh per departure (71). Lesson family: cache time-to-live for an
// agent's tool results; screened free site-wide on 7 October 2026 ("time-to-live", "time to live", "cache
// expiry": 0 page hits; claimed by AU-R3).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Hervey Bay Significant Urban Area (3009):
// 57,722 people; median age 51 (Queensland 38, Australia 38); 16,342 families; 27,454 private dwellings; 2.3
// people per household; separate house 19,030 (82.2%; Queensland 74.8%; Australia 72.3%); semi-detached, row or
// terrace house, townhouse 2,889 (12.5%); Professionals 3,732 (19.0%; Queensland 21.4%); Bachelor Degree level
// and above 6,352 (13.0%; Queensland 21.9%; Australia 26.3%); aged 15 to 19 2,986 (5.2%); aged 10 to 14 3,568
// (6.2%). Queensland Department of Education, 2027 term dates: Term 1 Wednesday 27 January to Thursday 25 March;
// Term 3 Monday 12 July to Friday 17 September. IANA tz: Australia/Brisbane UTC+10, no daylight saving.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'HERVEY BAY', label: 'Hervey Bay', blurb: 'Vibe coding and AI agents for Hervey Bay teens and adults, and an agent that must decide how long a remembered bus time stays true.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-hervey-bay',
  code: 'hvb',
  accent: '#267058',
  accentRationale: 'Hervey Bay: a deep bay-water green (HSV saturation 0.66, value 0.44, hue 161), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 5.9:1 on white and 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Hervey Bay',
    eyebrow: 'Hervey Bay, Queensland, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Hervey Bay, Queensland',
  title: 'Vibe Coding and AI Agents Classes in Hervey Bay | Live Online',
  description: 'Live online vibe coding and AI agents classes for Hervey Bay teenagers and adults: build agents in Python, test them and make them reliable. First lesson free.',
  ogDescription: 'AI agents classes for Hervey Bay, with a project on how long an agent can trust a cached bus time: wait an hour and 46% of answers are wrong.',
  twitterDescription: 'Hervey Bay vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Hervey Bay Learners',
    description: 'Level-matched online classes in vibe coding, building and testing AI agents in Python, and reliable software habits, for teenagers and adults on the Fraser Coast, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Hervey Bay',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Hervey Bay?',
  capsule: 'Lessons in which a Hervey Bay teenager or adult describes software to an AI, then reads, tests and fixes what comes back, with a teacher making sure the agent is reliable rather than merely impressive. The 2021 Census counted 57,722 people in the Hervey Bay urban area. Classes happen live on video, privately or alongside a few learners at the same stage, and the opening class costs nothing.',
  lead: 'Build an AI agent that answers "when is the next bus from my stop?" and it will want to remember answers, because asking the timetable tool every time is slow and costs money. But how long is a remembered answer true? At Central Ave at Stockland Hervey Bay, the busiest stop on the Maryborough and Hervey Bay network, an agent that trusts its memory for 15 minutes gives a wrong answer more than half the time. Our Hervey Bay project measures that across all 386 stops served on a Wednesday, then shows a smarter rule that is never wrong.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Hervey Bay.',

  picks: {
    eyebrow: 'Course picks for Hervey Bay',
    h2: 'Courses for building agents that work',
    intro: 'Each of these leads to the cache experiment on this page. The free first lesson places you on one, and no card details are asked for.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Describe a program to an AI, then read, run and repair the code it writes, with Python and the web.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'How AI systems learn and decide, so a learner knows what an agent can and cannot be trusted with.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Full-stack projects built with AI help, alongside the data structures that keep them fast.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults and professionals', note: 'Working with coding agents day to day: briefing them, checking them and keeping control of the result.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hervey Bay in the Census',
      h2: 'An older seaside city of houses and townhouses',
      intro: 'What the statistics bureau published for the Hervey Bay Significant Urban Area after the 2021 Census, with Queensland and Australia for comparison.',
      body: [
        { kind: 'table', caption: 'Hervey Bay urban area, 2021 Census QuickStats', head: ['Count', 'Hervey Bay'], rows: [
          ['People', '57,722'],
          ['Families', '16,342'],
          ['Private dwellings', '27,454'],
          ['Average people in a household', '2.3']
        ] },
        { kind: 'table', mt: true, caption: 'Comparing Hervey Bay with the state and the nation', head: ['Measure', 'Hervey Bay', 'Queensland', 'Australia'], rows: [
          ['Median age', '51', '38', '38'],
          ['Occupied homes that are separate houses', '82.2% (19,030)', '74.8%', '72.3%'],
          ['Residents 15 and over with a bachelor degree or higher', '13.0% (6,352)', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Thirteen years older', p: 'A median age of 51 makes Hervey Bay thirteen years older than Queensland as a whole, where the median is 38.' },
          { h3: 'Townhouses as well as houses', p: '2,889 occupied homes, 12.5%, were semi-detached, row or terrace houses or townhouses.' },
          { h3: 'Teenagers', p: 'The Census counted 3,568 residents aged 10 to 14 and 2,986 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'How we use census tables: each cell is adjusted very slightly by the bureau for privacy, so rows may not add to a printed total. Totals and percentages here are quoted as published, and we never invent a total by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How long can an agent trust a remembered bus time?',
      intro: 'Translink publishes the Maryborough and Hervey Bay timetable as open data. We simulated an agent that answers "next departure" questions from a cache, and measured how often a stale answer slips through.',
      body: [
        { kind: 'table', caption: 'What the Fraser Coast timetable contains (counted by us from the 7 October 2026 download)', head: ['Feature', 'Value'], rows: [
          ['Routes', '14, numbered 701 to 720'],
          ['Stops in the feed', '389'],
          ['Wednesday trips', '87'],
          ['Stops served on a Wednesday', '386, with 3,450 scheduled departures'],
          ['Busiest stop on a Wednesday', 'Central Ave at Stockland Hervey Bay, 71 departures from 6:35am to 7:01pm']
        ] },
        { kind: 'table', mt: true, caption: 'Share of cached answers that point to a bus that has already left (our calculation)', head: ['Cache lifetime', 'All stops', 'Busiest stop', 'Refreshes at the busiest stop'], rows: [
          ['1 minute', '1.72%', '8.29%', '746'],
          ['5 minutes', '5.19%', '30.53%', '150'],
          ['15 minutes', '13.51%', '57.34%', '51'],
          ['30 minutes', '24.23%', '77.44%', '26'],
          ['60 minutes', '46.19%', '88.85%', '14'],
          ['Until the cached bus departs', '0%', '0%', 'About one per departure']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Cache the tool call', p: 'The agent asks the timetable tool for the next departure, stores the answer, and reuses it for any question asked before the stored copy expires.' },
          { h3: '2. Ask all day', p: 'The simulation sends a question every ten seconds from each stop\'s first bus to its last, and marks an answer wrong if the remembered bus has already gone.' },
          { h3: '3. Expire on meaning, not on a timer', p: 'A remembered next departure stays correct exactly until that bus leaves. Expiring the cache at that moment removes every wrong answer and still saves most tool calls.' }
        ] },
        { kind: 'callout', h3: 'A timer is the wrong question', p: 'Choosing a cache lifetime feels like a trade between freshness and cost, and the table shows how steep that trade is at a busy stop. But the timetable itself says when an answer stops being true. An agent that reads that from the data needs no guess at all. Most caching mistakes in AI agents come from treating every fact as equally perishable, when each kind of fact carries its own expiry.' },
        { kind: 'p', text: 'These figures are ours, from the feed published for 7 October to 6 December 2026, using the Wednesday timetable. They describe scheduled times only; a real agent would also need live data for delays, which is a separate lesson. Nothing here describes the reliability or crowding of any Hervey Bay service.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Agent design',
      h2: 'Decisions every agent builder has to make about memory',
      intro: 'The bus cache is one small example of questions that come up whenever an agent reuses information.',
      body: [
        { kind: 'table', caption: 'Expiry choices and when each one fits', head: ['Kind of fact', 'Sensible expiry', 'Hervey Bay example'], rows: [
          ['Changes at known moments', 'When the moment arrives', 'The next departure from a stop'],
          ['Changes slowly and unpredictably', 'A fixed lifetime, chosen from evidence', 'The list of stops on a route'],
          ['Rarely changes', 'Until the source publishes a new version', 'The feed\'s validity dates'],
          ['Must always be fresh', 'Never cache it', 'A live delay alert']
        ] },
        { kind: 'p', text: 'Vibe coding makes it quick to ask an AI for "a cache with a five-minute TTL", and the code will work. What it will not tell you is that at Hervey Bay\'s busiest stop that choice is wrong for 30.53% of questions. Learners who measure before they trust are the ones who build agents people can rely on.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Build a tiny next-bus helper in Python, add a cache, then run the simulation and watch the error rate change with the lifetime.' },
          { h3: 'University students', p: 'Caching strategies, invalidation and correctness, tested against real event data rather than guesses.' },
          { h3: 'Adults', p: 'Practical agent design at work: deciding what to remember, for how long, and how to prove the choice is safe.' }
        ] },
        { kind: 'p', text: 'We are not connected to Translink, to the Queensland Government, to Fraser Coast Regional Council or to the national statistics bureau. Their published data powers the project; the simulation and every result in it come from our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Hervey Bay',
      h2: 'Weekend buses, school terms and an unchanging clock',
      intro: 'More from the timetable feed and Queensland\'s calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Weekend service', p: 'The feed runs 59 trips on a Saturday and 3 on a Sunday, against 87 on a weekday.' },
          { h3: 'Between the two cities', p: 'Route 705 runs Maryborough to Hervey Bay and back, linking the two centres of the network.' },
          { h3: 'Terms in 2027', p: 'Queensland Term 1 runs from Wednesday 27 January to Thursday 25 March 2027, and Term 3 from Monday 12 July to Friday 17 September.' }
        ] },
        { kind: 'spec', title: 'No daylight saving in Queensland', p: 'Hervey Bay keeps the same clock all year. With India also on a fixed clock, a lesson booked for 5pm is always 12:30pm for the teacher, in every season.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From prompting an AI to designing reliable agents',
    intro: 'Read the ages loosely; the free lesson shows where to start.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Vibe coding with care', p: 'Describe small programs to an AI, then read every line, run it and fix what breaks.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'First agents', p: 'Agents that call tools, remember results and are tested against real data such as the Hervey Bay feed.', courses: ['ai-ml-masterclass-teens', 'teens-ai-tools-mastery-course'] },
      { band: 'University', h3: 'Systems thinking', p: 'Caching, state and correctness in larger applications built with AI assistance.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Coding agents and workflow agents used responsibly, with clear checks before anything is trusted.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Hervey Bay learner understand caching if an AI writes the code?',
    intro: 'Because the AI will happily write a cache that is wrong half the time, and only someone who understands it will notice.',
    p1: 'Ask a coding assistant to speed up a bus-time agent and it will often suggest caching results for a few minutes. The suggestion is reasonable in general and the code will run. At a stop with a bus about every ten minutes on average, though, a fifteen-minute cache returns a bus that has already left for 57.34% of questions. Nothing in the code looks broken; the problem is in the meaning of the data.',
    p2: 'Our classes teach learners to ask what each remembered fact depends on, and to measure before trusting. With that habit, AI assistance becomes genuinely useful: the assistant writes the cache, the learner decides when it should expire and proves it with a test like the one on this page.',
    closer: 'In 2026 anyone can generate an agent; a Hervey Bay learner who can tell when its memory has gone stale is the one whose agents keep working.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Pialba, Urangan or Maryborough, one live class',
    intro: 'The Fraser Coast network runs between two cities, and an online lesson brings learners from either into the same room.',
    cells: [
      { h3: 'Two cities, one class', p: 'A student in Urangan and one in Maryborough can work on the same agent in the same lesson without a single bus ride.' },
      { h3: 'Fitted to Queensland schooling', p: 'Plans follow Queensland\'s year structure and its four terms, and Year 11 and 12 students may link an agent project to Digital Solutions. Every lesson is taught in English.' },
      { h3: 'The first lesson is real', p: 'You get a genuine class, not a sales pitch, and leave with a recommended level, course and time; no card is requested.' },
      { h3: 'Groups at your level', p: 'Fifteen to twenty learners at a matching stage from the Fraser Coast and elsewhere, so classes run at a good size.' },
      { h3: 'Two lessons a week', p: 'A fixed pair of weekly slots, about eight lessons a month, with holiday and exam breaks agreed in advance.' },
      { h3: 'A fixed time gap', p: 'Neither Queensland nor India changes its clocks, so the four-and-a-half-hour gap to our teachers is the same all year.' }
    ],
    spec: { title: 'Scheduling made simple', p: 'Because the time difference never changes, a lesson slot chosen in spring is still the same local time in autumn, for the family and for the teacher.' }
  },

  fees: {
    h2: 'Hervey Bay class fees',
    intro: 'Three numbers, clearly stated.',
    first: 'The whole first lesson is free and ends with a level, a course and a lesson time.',
    group: 'A month of lessons, normally eight, in a group of fifteen to twenty learners at your stage.',
    private: 'About eight lessons a month on the same pattern, one teacher with one learner.',
    closer: 'Every country apart from India pays in US dollars, so a family at Point Vernon and one at Torquay pay identical fees and there is no Hervey Bay price list. Nothing is billed until the trial has fixed what and when you learn, and questions about holidays, absences or switching to private lessons are answered on the pricing page.'
  },

  reviewsH2: 'What families write on Google',

  book: {
    h2: 'Book the first Hervey Bay lesson',
    intro: 'Share an age and an interest. A Year 9 student might build a simple next-bus helper; an adult might go straight to the cache experiment.',
    success: 'Thank you. We will contact you soon about a Hervey Bay class.'
  },

  faq: {
    h2: 'Hervey Bay AI agents class questions',
    intro: 'What Hervey Bay learners and families tend to ask first.',
    items: [
      { q: 'How many people live in Hervey Bay?', a: 'The Hervey Bay Significant Urban Area had 57,722 residents on 2021 Census night. Its median age was 51, compared with 38 for Queensland.' },
      { q: 'What is a cache time-to-live?', a: 'The length of time a program keeps a stored answer before asking for a fresh one. A short lifetime keeps answers current but makes more requests; a long one saves requests but risks serving answers that are no longer true.' },
      { q: 'What does the Hervey Bay project measure?', a: 'Using Translink\'s open timetable, learners simulate an agent answering next-departure questions from a cache. With a 15-minute lifetime, 13.51% of answers across all stops and 57.34% at the busiest stop point to a bus that has already left; expiring at the cached bus\'s departure removes every wrong answer.' },
      { q: 'What is vibe coding?', a: 'Building software by describing what you want to an AI and letting it write the code. We teach it together with reading, testing and correcting that code, so the learner stays in charge.' },
      { q: 'Do you help senior students in Queensland?', a: 'Yes. Senior students on the Fraser Coast work with teachers who know the Queensland calendar and its computing subjects. Assessed work stays the student\'s own; we teach the ideas and techniques.' },
      { q: 'When are lessons for Hervey Bay learners?', a: 'Usually after school or on a weekend morning, settled at the trial and quoted in Queensland time. Our teachers\' clocks sit four and a half hours behind Hervey Bay in every month.' },
      { q: 'Can younger children learn with you?', a: 'Yes, from six, starting with Scratch and visual projects before typed code; the agent project on this page is meant for older learners.' },
      { q: 'Is there a Modern Age Coders centre in Hervey Bay?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Hervey Bay AI agents classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Hervey Bay and Queensland learners',
    html: 'Nearby, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bundaberg">online Python classes in Bundaberg</a> use the bisection method on another Translink feed. For the bigger picture on agents, see <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>; the state guide lives at <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hervey Bay and Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-bundaberg', label: 'Bundaberg' },
    { href: '/ai-and-programming-classes-in-sunshine-coast', label: 'Sunshine Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-hvb .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-hvb .cg-hero h1 { font-weight: 790; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-hvb .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-hvb .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-hvb .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-hvb .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.85rem); }
.cg-root.cg-hvb .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-hvb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hvb .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-hvb .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Hervey Bay, ABS Census 2021 QuickStats, Significant Urban Area 3009 (read 7 October 2026): 57,722 people; median age 51 (Queensland 38, Australia 38); 16,342 families; 27,454 private dwellings; average 2.3 people per household; dwelling structure, occupied private dwellings: separate house 19,030 (82.2 percent; Queensland 74.8; Australia 72.3), semi-detached, row or terrace house, townhouse etc 2,889 (12.5 percent), flat or apartment 687 (3.0 percent); occupation: Professionals 3,732 (19.0 percent; Queensland 21.4; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 6,352 (13.0 percent; Queensland 21.9; Australia 26.3); aged 10 to 14 3,568 (6.2 percent); aged 15 to 19 2,986 (5.2 percent). Queensland Department of Education, future dates, 2027: Term 1 Wednesday 27 January to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Tuesday 5 October to Friday 10 December. IANA tz database: Australia/Brisbane UTC+10, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Cache time-to-live for an agent\'s tool results. Translink Maryborough-Hervey Bay GTFS (MHB_GTFS.zip, gtfsrt.api.translink.com.au; data.qld.gov.au general-transit-feed-specification-gtfs-translink, CC BY 4.0), downloaded 7 October 2026, feed_info 20261007 to 20261206. routes.txt 14 routes (701 to 720); stops.txt 389 stops. trips per service: MHB 26_27-43729 (Mon to Fri) 87, 43731 (Sat) 59, 43733 (Sun) 3, 43729-0101000 (Tue, Thu) 1. Wednesday (43729): 386 stops with a pickup-allowed departure, 3,450 departures; busiest stop 840017 Central Ave at Stockland Hervey Bay 71 departures 06:35 to 19:01; then 840161 Station Square Shopping Centre 67. Simulation: queries every 10 s from each stop\'s first to last departure; cache filled at the start of each fixed TTL window (aligned to multiples of the TTL from midnight); an answer is wrong when the cached next departure is earlier than the query time. Wrong share all stops / busiest stop: 1 min 1.72 / 8.29; 5 min 5.19 / 30.53; 15 min 13.51 / 57.34; 30 min 24.23 / 77.44; 60 min 46.19 / 88.85 percent. Cache fills at the busiest stop 746 / 150 / 51 / 26 / 14. Event-based expiry at the cached departure: 0 wrong, about one refresh per departure. Lesson family: cache time-to-live and event-based invalidation for agent tool results.',
    requiredMentions: [
      '57,722',
      '16,342',
      '27,454',
      '19,030',
      '6,352',
      'Central Ave at Stockland Hervey Bay',
      '57.34%',
      '46.19%',
      '3,450'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Hervey Bay Significant Urban Area (3009): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3009' },
      { claim: 'Translink general transit feed specification feeds, including Maryborough-Hervey Bay, published under Creative Commons Attribution 4.0.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, school term dates from 2027.', url: 'https://education.qld.gov.au/about-us/calendar/future-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Real-time delays, crowding or reliability of Fraser Coast buses: the scheduled feed contains none, so nothing is claimed.',
      'That any production system uses the cache lifetimes in the table: they are test values for the simulation.',
      'QCAA Digital Solutions syllabus detail: qcaa.qld.edu.au returned a Cloudflare 403 and was not circumvented; the subject is named only.',
      'Bureau of Meteorology facts for Hervey Bay: the Bureau returned 403 and was not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Queensland Government, Fraser Coast Regional Council or the ABS.'
    ]
  }
};
