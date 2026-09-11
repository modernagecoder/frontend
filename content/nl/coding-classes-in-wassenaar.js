'use strict';
// Wassenaar: villas, estates, dunes and the Duinrell theme park, between The
// Hague and Leiden. 27,975 residents.
// Spine (modest, per the Phase 5 method): anyone who has queued at a theme
// park knows that a ride can be busy without a wait and then, as it nears
// full, have a very long one. Queueing theory explains why waiting time does
// not rise in step with how busy a server is, but explodes as it approaches
// full use, and every computer system and AI service behaves the same way.

module.exports = {
  slug: 'coding-classes-in-wassenaar',
  code: 'wsr',
  accent: '#992641',
  accentRationale: 'Wassenaar: a deep estate-brick red placed by the solver almost thirty-eight units from every page it links to, The Hague, Leiden and Scheveningen among them, with an unlinked town as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Wassenaar',
    eyebrow: 'Wassenaar, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Wassenaar, Netherlands',
  title: 'Coding Classes in Wassenaar | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Wassenaar, ages 6 to 67, from Oud and Nieuw Wassenaar to De Kieviet and Kerkehout. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in Wassenaar, on a page about why queues grow so suddenly when anything gets close to full.',
  twitterDescription: 'Wassenaar classes for ages 6 to 67, taught live online, with a free first lesson.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Wassenaar Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Wassenaar, taught in English.'
  },

  h1: 'Coding classes in Wassenaar, where Duinrell teaches the mathematics of waiting',
  capsuleQ: 'What are the best coding classes in Wassenaar?',
  capsule: 'Wassenaar, 27,975 residents on 1 January 2026 in the national count, is a village among woods, villas and old country estates between The Hague and Leiden, and one of those estates, Duinrell, is now a theme park. Everyone who has queued there knows something odd about waiting: a ride can be busy and the line short, and then, on a slightly busier day, the line is suddenly enormous. That is not bad luck. Queueing theory shows that waiting time climbs slowly while a ride or a computer is moderately busy and then shoots up as it approaches full use, and web servers, databases and AI services all obey the same curve. Modern Age Coders teaches live, online and in English for ages 6 to 67; the first lesson is free, and afterwards a group place costs USD 100 a month and a one-to-one place USD 150.',
  lead: 'Picture a single ride that takes one minute to load each group of guests. If groups arrive, on average, one every two minutes, the ride is busy half the time and the wait is short. If they arrive a little faster, so that the ride is busy four fifths of the time, the average wait is not a little longer but four times as long. At nine tenths busy it is nine times as long, and at ninety-nine hundredths almost a hundred times. The same arithmetic governs a web server, a database, a checkout, a help desk and the servers that answer AI requests, which is why systems that seem fine at seventy percent load fall apart at ninety-five. Wassenaar, with a theme park inside its borders, is a good place to learn the curve, because a learner who has stood in the queue already has the intuition, and a little mathematics turns it into a rule for building systems.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Wassenaar.',

  picks: {
    eyebrow: 'Course picks for Wassenaar',
    h2: 'Four courses for the village of estates and dunes',
    intro: 'A child in Oud Wassenaar who wants to build a theme-park game, a teenager in De Kieviet simulating a queue in Python, a student in Kerkehout whose web app slows to a crawl under load, and an adult in Nieuw Wassenaar planning how many support staff a team needs. The first lesson is free for each of them.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'A theme-park game where visitors arrive at random, and the child sees queues grow when a ride gets too busy.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 14', note: 'Probability and averages made concrete by simulating arrivals, waits and busy periods in code.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Load, capacity and queueing in Python, from a simple simulation to planning servers and AI request limits.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Staffing, capacity and response times read with the waiting-time curve in mind, not a straight line.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wassenaar today',
      h2: 'A village, its estates, and the dunes to the sea',
      intro: 'Wassenaar is one woonplaats, divided by the statistics office into two wijken and 22 buurten. Besides the village itself the encyclopaedia names the hamlet of Maaldrift, the buurtschappen of Rijksdorp and Den Deijl, and the wijken Nieuw Wassenaar, Oud Wassenaar, De Kieviet and Kerkehout. The municipality covers 5,118 hectares of land and 1,123 of water, with a published density of 538 residents per square kilometre.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Villas and estates', p: 'Wassenaar consists of a village core surrounded by woodland with villas and country houses, many of them old buitenplaatsen, summer residences for well-to-do townspeople. Besides wealthy residents they house companies and consulates. The encyclopaedia counts Wassenaar among the more prosperous areas of the Netherlands.' },
          { h3: 'Duinrell and De Paauw', p: 'The Duinrell estate is in use as a theme park. The house De Paauw serves as the town hall.' },
          { h3: 'Dunes and the coast', p: 'The high dunes west of the church formed later than the village. At the Wassenaarse Slag, in the nature area, lie remnants of the Atlantikwall. The encyclopaedia lists the American School of The Hague among the secondary schools in the municipality.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'The waiting curve',
      h2: 'How busy the ride is, and how long the wait becomes',
      intro: 'The numbers come from the simplest textbook model of a queue, with one ride, guests arriving at random and loading times that vary at random. Each group takes one minute to load on average. They describe the model, not Duinrell.',
      body: [
        { kind: 'table', caption: 'Average wait in line for one ride, by how busy the ride is', head: ['Share of time the ride is busy', 'Average wait before boarding', 'Compared with a half-busy ride'], rows: [
          ['50 percent', '1 minute', 'the baseline'],
          ['80 percent', '4 minutes', '4 times as long'],
          ['90 percent', '9 minutes', '9 times as long'],
          ['95 percent', '19 minutes', '19 times as long'],
          ['99 percent', '99 minutes', '99 times as long']
        ] },
        { kind: 'p', text: 'In this model the average wait equals the loading time multiplied by the busy share divided by the idle share. At half busy that is one times one, one minute. At nine tenths busy it is nine divided by one, nine minutes. As the idle share shrinks towards nothing the wait heads towards infinity, because every random clump of arrivals finds no spare time in which to be absorbed. A second rule, known as Little\'s law, links queue length to waiting: the average number of people in a line equals the arrival rate times the average wait. If two groups arrive every minute and each waits half an hour, about sixty groups stand in line on average. Neither rule cares whether the server is a ride, a checkout or a computer. That is why engineers plan to run systems well below full load, and why a small rise in demand can turn a comfortable service into a slow one overnight.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Wassenaar in the national statistics',
      intro: 'The published figures for the municipality with their years, the encyclopaedia history, and the page\'s own calculations at the end.',
      body: [
        { kind: 'table', caption: 'Wassenaar in the statistics', head: ['Measure', 'Figure', 'Year'], rows: [
          ['Residents', '25,830; 25,656; 27,525; 27,975', '1995, 2013, 2025, 2026'],
          ['Men and women', '13,376 and 14,149', '2025'],
          ['Under fifteen, 15 to 25, 25 to 45', '4,139; 3,413; 5,243', '2026'],
          ['45 to 65, and 65 or over', '7,986 and 7,194', '2026'],
          ['Households and those with children', '12,111 and 4,169', '2025'],
          ['Dwellings, owner-occupied, rented', '12,461; 7,227; 5,234', '2025'],
          ['Estimated average home value', '745,000 euro', '2025'],
          ['Income per resident and per income recipient', '53,700 and 69,100 euro', '2024']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Schools', p: 'The statistics count 8 primary establishments and 2 secondary establishments in the municipality. No MBO, higher professional or university institutions are recorded, and this page draws nothing from that.' },
          { h3: 'Origin', p: 'In 2025, 16,330 residents were of Dutch origin, 4,454 of European and 6,741 of non-European origin, together making up the 2025 total of 27,525; 19,862 were born in the Netherlands. 3.7 percent of residents were counted as in poverty.' },
          { h3: 'Worked here', p: '27,975 minus 25,830 is 2,145. The age groups add to 27,975, the origin groups and the men and women to 27,525, and the tenure groups to 12,461. The queue table uses the standard single-server formula described above and nothing from the statistics.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Wassenaar, Duinrell, any consulate or any school in the area, and nothing here implies one. The statistics are those published for Wassenaar for the years stated. The villas and estates, Duinrell, De Paauw, the dunes, the Atlantikwall remnants, the kernen and the schools come from the encyclopaedia entry for Wassenaar, which gives 27,975 residents on 1 January 2026 and an area of 62.50 square kilometres.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Simulate the queue, then find the cliff',
      intro: 'A learner can reproduce the whole curve with a short program and a random number generator, and see the cliff for themselves.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Simulate arrivals', p: 'Write a program in which visitors arrive at random moments and each takes a random time to serve. Record how long every visitor waits, and average it.' },
          { h3: '2. Turn up the load', p: 'Run the same simulation with arrivals a little faster each time, from half busy to almost fully busy. Plot the average wait against the busy share and watch the line bend upwards.' },
          { h3: '3. Choose a safe level', p: 'Decide how long a wait is acceptable, read off the busy share that gives it, and plan capacity so the system normally runs below that level, with room for bursts.' }
        ] },
        { kind: 'table', caption: 'The same curve in systems that are not rides', head: ['System', 'What waits', 'What makes it busy', 'What keeps waits short'], rows: [
          ['A web server', 'page requests', 'more visitors per second', 'extra servers added before load gets close to full'],
          ['A database', 'queries', 'more users and heavier reports', 'faster queries, caching and a limit on concurrent work'],
          ['An AI service', 'prompts waiting for a model', 'more users and longer requests', 'spare capacity, request limits and queues with honest wait times'],
          ['A help desk', 'customers on hold', 'more calls per hour', 'staff planned for peak hours, not the daily average'],
          ['A ride at a theme park', 'guests in line', 'more visitors on a sunny day', 'more rides or faster loading, planned before the busy season']
        ] },
        { kind: 'callout', h3: 'Why AI services slow down so suddenly', p: 'Large AI models run on expensive hardware, and providers naturally try to keep that hardware busy. The queueing curve explains what happens next. As a service moves from comfortably busy towards fully busy, the average wait does not creep up; it leaps, and a small surge in demand can turn quick replies into long delays or refused requests. The same logic applies inside a company that runs its own models or its own servers: running everything at ninety-five percent looks efficient on a dashboard and feels awful to users. The remedies come straight from the mathematics. Keep average load well below full, add capacity before the cliff rather than after it, limit how much work is accepted at once, and tell people honestly how long they will wait. A learner who has watched a simulated queue go from a minute to an hour with a modest rise in arrivals will never plan a system around its average load again. Wassenaar\'s theme park makes the intuition familiar; the code makes it precise.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five rules for systems that people queue for',
      intro: 'For websites, databases, APIs, AI services, help desks and anything else with a line. Learned in the municipality with a theme park inside it.',
      body: [
        { kind: 'table', caption: 'Keeping waits short as demand grows', head: ['Rule', 'How', 'What goes wrong without it', 'The result'], rows: [
          ['Plan below full', 'Aim for normal load well under full use', 'Waits that explode on busy days', 'Room for bursts'],
          ['Measure the tail', 'Track the slowest waits, not just the average', 'A fine average hiding very long waits', 'The experience users actually have'],
          ['Scale before the cliff', 'Add capacity when load rises, not after complaints', 'Reacting when the queue is already long', 'Waits that stay predictable'],
          ['Limit concurrent work', 'Cap how much is accepted at once and queue the rest', 'Everything slowing down together', 'Fast service for what is accepted'],
          ['Say how long', 'Show an honest expected wait', 'Users retrying and making the queue worse', 'Calmer demand']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A theme-park game in Scratch where visitors appear at random. The child adds a second ride and sees the line shrink, then removes it and sees the line grow.' },
          { h3: 'For teenagers', p: 'A Python simulation of one ride with random arrivals. The teenager plots waiting time against how busy the ride is and finds where the curve turns steep.' },
          { h3: 'For adults', p: 'A real queue at work, a support inbox or a report backlog, measured for arrivals and handling time. Adults often find the team is running closer to the cliff than anyone realised.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s mention of the Duinrell theme park only as an image, together with the standard single-server queueing model. It says nothing about queues or visitor numbers at Duinrell.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a theme-park game to planning capacity for an AI service',
    intro: 'The free lesson settles where each learner begins, by watching them work on a real task. Age alone does not settle it, and neither does the neighbourhood.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Visitors at random', p: 'Children build a park game and see lines grow when a ride is busy.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Averages of waits', p: 'Learners simulate arrivals in Python and average the waits.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Find the cliff', p: 'Teenagers plot waiting time against load and find the steep part.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Capacity plans', p: 'Adults plan servers, staff or AI limits with the curve in mind.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI service can go from instant to sluggish in an afternoon. Why should a teenager in Wassenaar understand queues?',
    intro: 'Because a theme-park line and a busy server follow the same curve, and the curve is not a straight line.',
    p1: 'Every AI assistant, image generator and chatbot sits behind a queue of requests waiting for hardware to become free. When few people are using it, replies come quickly. As use climbs towards what the hardware can handle, waits grow slowly and then suddenly, and users experience a service that seems to have broken for no reason. Businesses building on these services see the same thing in their own systems, and an AI assistant asked to make a system faster will usually tune the code rather than ask how close to full it is running.',
    p2: 'A learner who has simulated a queue, turned up the arrivals and watched the average wait leap from minutes to an hour understands something that no amount of tuning replaces. Choosing how busy a system should normally be, where to add capacity and what to tell people while they wait are planning decisions a person makes. The model can answer the requests. Knowing how many it can take before everyone waits is a human judgement.',
    closer: 'So the case for a child in Wassenaar learning to code in 2026 is not the villas or the dunes. It is that someone who understands the waiting curve will be needed wherever AI services and the systems built on them are planned, priced and kept responsive.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'A class that comes to every corner of Wassenaar',
    intro: 'Wassenaar spreads through woods and dunes from the village to Maaldrift and De Kieviet, and a lesson at home spares every family the drive.',
    cells: [
      { h3: 'Among the trees, online', p: 'A learner in Rijksdorp and a learner near De Paauw join the lesson at the same moment from home. The woods and dunes between them make no difference to a class that runs on a laptop.' },
      { h3: 'Both school systems welcome', p: 'Dutch school words such as groep, brugklas, havo and vwo stay Dutch, and learners from international schools join the same English-language lessons at their own level.' },
      { h3: 'A free first hour', p: 'The first session is a full lesson on a real task. The teacher then suggests a level, a course and a regular time, and no payment details are requested.' },
      { h3: 'Groups across countries', p: 'Five to ten learners who have reached the same point. Wassenaar has 4,139 residents under fifteen, and five who match on subject, level and hour are rare in a municipality this size, so groups bring in learners from elsewhere.' },
      { h3: 'Regio Midden holidays', p: 'Two lessons a week, about eight a month, at one fixed hour, pausing during the regio Midden holidays that Zuid-Holland schools follow.' },
      { h3: 'Teachers in India', p: 'The teachers work three and a half hours ahead of Wassenaar in summer and four and a half in winter, so late afternoons, evenings and weekend mornings all fit.' }
    ],
    spec: { title: 'Ten schools, a quiet village, and one group online', p: 'Wassenaar has 8 primary and 2 secondary establishments. However many schools a place has, five learners matched on subject, stage and hour are far easier to find across every age from 6 to 67 and many countries than inside one village.' }
  },

  fees: {
    h2: 'Wassenaar fees',
    intro: 'The full price, set out in three lines.',
    first: 'A real lesson on a real task, ending with a level and a course.',
    group: 'Per month, normally eight lessons, five to ten learners at one level.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The fee is a single dollar price for every country, with no euro list, so a family in Kerkehout pays what a family in Oud Wassenaar pays. Nothing is charged until the free lesson has settled a course and a time, and payment is then arranged over WhatsApp. The pricing page explains pauses, changes of format and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, as posted',

  book: {
    h2: 'Where is the learner now?',
    intro: 'The first task might be a theme-park game with random visitors, a simulation that averages waiting times, or a plot that finds where the waiting curve turns steep.',
    success: 'Thank you. Your Wassenaar class request has been sent.'
  },

  faq: {
    h2: 'Wassenaar coding class questions',
    intro: 'The village, its estates, its figures, and the lessons.',
    items: [
      { q: 'What does the municipality of Wassenaar include?', a: 'The village of Wassenaar with its wijken Nieuw Wassenaar, Oud Wassenaar, De Kieviet and Kerkehout, the hamlet of Maaldrift and the buurtschappen of Rijksdorp and Den Deijl. The statistics office counts one woonplaats, two wijken and 22 buurten.' },
      { q: 'How many people live in Wassenaar?', a: 'The national count was 27,975 on 1 January 2026, in 12,111 households in 2025. In 1995 it was 25,830.' },
      { q: 'What is Duinrell?', a: 'An estate in Wassenaar that is in use as a theme park, according to the encyclopaedia.' },
      { q: 'Where is the town hall of Wassenaar?', a: 'In the house De Paauw, which the encyclopaedia names as the town hall.' },
      { q: 'What is at the Wassenaarse Slag?', a: 'Remnants of the Atlantikwall lie in the nature area at the Wassenaarse Slag, the encyclopaedia says; the high dunes west of the church formed later than the village.' },
      { q: 'Which schools are in Wassenaar?', a: 'The statistics count 8 primary and 2 secondary establishments, and the encyclopaedia lists the American School of The Hague among the secondary schools in the municipality. This page does not rate any school.' },
      { q: 'Which language are lessons in, and at what hours?', a: 'The lessons are in English, which suits learners at international schools, and Dutch school terms such as brugklas, havo and vwo are kept as they are. The teachers are in India, three and a half hours ahead of Wassenaar in summer and four and a half in winter, so late-afternoon, evening and weekend slots are easy. The slot is agreed in the free lesson, and regio Midden holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Wassenaar?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Wassenaar coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Haaglanden and beyond',
    h2: 'Between The Hague and Leiden, and across the province',
    html: 'To the south-west lies the city covered by <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>, including its coastal district on <a class="cg-inline-link" href="/coding-classes-in-scheveningen">Scheveningen</a>, and to the north-east <a class="cg-inline-link" href="/coding-classes-in-leiden">Leiden</a> has a page of its own. Every town and city in the province with a page is gathered on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. Learners who want machine learning from the start can go to the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the full series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wassenaar, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-wsr .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3vw, 2.4rem); }
.cg-root.cg-wsr .cg-hero h1 { font-weight: 650; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-wsr .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-wsr .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wsr .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-wsr .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.85rem); }
.cg-root.cg-wsr .cg-card { border-radius: 9px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-wsr .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-wsr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wsr .cg-table td:nth-child(2) { font-weight: 700; }
.cg-root.cg-wsr .cg-ladder-col { border-left: 3px solid var(--cg-accent-soft); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Wassenaar, Zuid-Holland: 27,975 residents (statistics, 1 January 2026), 27,525 (2025), 25,656 (2013), 25,830 (1995); 13,376 men and 14,149 women (2025); ages (2026) 4,139 under fifteen, 3,413 fifteen to twenty-five, 5,243 twenty-five to forty-five, 7,986 forty-five to sixty-five, 7,194 sixty-five or over; 12,111 households (2025) averaging 2.2, 4,169 with children; 6,240 hectares, 5,118 land, 1,123 water, published density 538; 12,461 dwellings (2025), 7,227 owner-occupied at 58 percent, 5,234 rented at 42 percent; estimated average value 745,000 euro; income 53,700 euro per resident and 69,100 per recipient (2024); 3.7 percent in poverty; origin (2025) 16,330 Dutch, 4,454 European, 6,741 non-European, 19,862 born in the Netherlands; 1 woonplaats, 2 wijken, 22 buurten; 8 primary and 2 secondary establishments; no MBO, HBO or WO institutions recorded. Encyclopaedia: a village core surrounded by woodland with villas and country houses, many of them old buitenplaatsen for well-to-do townspeople, housing wealthy residents, companies and consulates; the Duinrell estate in use as a theme park; De Paauw as town hall; the high dunes west of the church formed later; remnants of the Atlantikwall at the Wassenaarse Slag; the American School of The Hague among the secondary schools; the hamlet Maaldrift, the buurtschappen Rijksdorp and Den Deijl, and the wijken Nieuw Wassenaar, Oud Wassenaar, De Kieviet and Kerkehout; 27,975 residents on 1 January 2026 and 62.50 square kilometres; among the more prosperous areas of the Netherlands. Regio Midden holidays. The city page teaches queueing and the waiting-time curve.',
    localProject: 'Waiting explodes near full use. The Duinrell estate in Wassenaar is a theme park, used as an image for queueing: in the standard single-server model with random arrivals and service, and a one-minute average loading time, the average wait before boarding is 1 minute at 50 percent busy, 4 at 80, 9 at 90, 19 at 95 and 99 at 99 percent, because the wait equals service time times the busy share divided by the idle share; Little\'s law gives about sixty groups in line when two arrive a minute and each waits half an hour. The programming form covers web servers, databases, AI services, help desks and any system people queue for. The defences are planning normal load well below full, measuring the slowest waits rather than only the average, adding capacity before the cliff, limiting concurrent work, and telling people honest waiting times. The page says nothing about queues or visitors at Duinrell, and draws no argument from the high average income, which would be the Groningen mean-versus-typical argument. Chosen after a case-sensitive check found no page using utilisation, M/M/1 or Little\'s law. Distinct from Velsen, where the slowest stage caps throughput, from Capelle, where a breaker cuts off a failing service, and from Prins Alexander, where a queue sampled at one moment misleads.',
    requiredMentions: [
      '25,830',
      '25,656',
      '12,111',
      '4,169',
      '12,461',
      '7,227',
      '5,234',
      '7,194',
      'Duinrell',
      'Atlantikwall',
      'Maaldrift',
      'Kerkehout',
      'De Kieviet',
      'De Paauw'
    ],
    sources: [
      { claim: 'Gemeente Wassenaar: 27,975 inwoners (2026), 27,525 (2025), 25,656 (2013), 25,830 (1995); mannen 13,376, vrouwen 14,149 (2025); 12,111 huishoudens, 4,169 met kinderen, gemiddeld 2.2 (2025); ages 0-15 4,139, 15-25 3,413, 25-45 5,243, 45-65 7,986, 65+ 7,194 (2026); 6,240 hectare, land 5,118, water 1,123; bevolkingsdichtheid 538; woningvoorraad 12,461, koop 7,227 (58 percent), huur 5,234 (42 percent) (2025); gemiddelde WOZ 745,000 euro; gemiddeld inkomen per inwoner 53,700 and per inkomensontvanger 69,100 euro (2024); personen in armoede 3.7 percent; basisonderwijs 8 vestigingen, voortgezet onderwijs 2 vestigingen; MBO, HBO, WO 0; geboren in Nederland 19,862, herkomst Nederland 16,330, Europa 4,454, buiten Europa 6,741 (2025); 1 woonplaats, 2 wijken, 22 buurten.', url: 'https://allecijfers.nl/gemeente/wassenaar/' },
      { claim: 'Wassenaar (encyclopaedia): Wassenaar bestaat uit een dorpskern met daaromheen een bosrijke omgeving met villa\'s en landhuizen. Vele hiervan zijn vanouds buitenplaatsen, zomerverblijven voor welgestelde stedelingen. Behalve aan vermogende bewoners bieden deze onderdak aan bedrijven en consulaten. Het landgoed Duinrell is in gebruik als pretpark. De hoge duinen ten westen van de kerk zijn pas later ontstaan. Aan De Wassenaarse Slag liggen in het natuurgebied restanten van de Atlantikwall. American School of The Hague listed under secondary education. De Paauw as gemeentehuis. Binnen de gemeente Wassenaar liggen naast het gelijknamige dorp het gehucht Maaldrift, de buurtschappen Rijksdorp en Den Deijl en de wijken Nieuw Wassenaar, Oud Wassenaar, De Kieviet en Kerkehout. De gemeente telt 27.975 inwoners (1 januari 2026) en heeft een oppervlakte van 62,50 km2. Wassenaar behoort tot de welvarendere gebieden in Nederland.', url: 'https://nl.wikipedia.org/wiki/Wassenaar_(gemeente)' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any queue lengths, waiting times or visitor numbers at Duinrell. The theme park is an image only.',
      'Any argument that the average income misrepresents a typical resident. Mean versus typical is the Groningen argument.',
      'Any comparison of pupil counts with residents of school age. Pupils at located schools against resident pupils is the Utrecht argument.',
      'Any comparison of the statistics area of 6,240 hectares with the encyclopaedia area of 62.50 square kilometres.',
      'Names or numbers of embassies and consulates. The source says only that villas house consulates.',
      'Anything The Hague, Scheveningen, Leiden and Zuid-Holland pages own, including their figures and arguments.'
    ]
  }
};
