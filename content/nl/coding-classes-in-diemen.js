'use strict';
// Diemen: an independent municipality squeezed between Amsterdam districts,
// with a railway station on the Gooilijn since 1974 and a station beside the
// metro at Diemen-Zuid since 1993. 33,327 residents.
// Spine (modest, per the Phase 5 method): a network of stations is what
// programmers call a graph, stops joined by connections with a cost. Route
// planners find the cheapest path through it with an algorithm Edsger
// Dijkstra published in 1959, and the fastest route is often not the one
// with the fewest stops.

module.exports = {
  slug: 'coding-classes-in-diemen',
  code: 'dmn',
  accent: '#4B6209',
  accentRationale: 'Diemen: a deep wood-and-meadow olive for the town of the Diemerbos, placed by the solver almost forty units from every page it links to, Amsterdam and its districts among them, with an unlinked city as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Diemen',
    eyebrow: 'Diemen, Noord-Holland',
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
  routeLabel: 'Diemen, Netherlands',
  title: 'Coding Classes in Diemen | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Diemen, ages 6 to 67, from Diemen-Noord and Oud-Diemen to Diemen-Zuid and the Sniep. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in Diemen, on a page about stations, connections and how a computer finds the fastest route.',
  twitterDescription: 'Diemen classes for learners aged 6 to 67, live online, with the first lesson free.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Diemen Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Diemen, taught in English.'
  },

  h1: 'Coding classes in Diemen, where a metro and two railways meet',
  capsuleQ: 'What are the best coding classes in Diemen?',
  capsule: 'Diemen had 33,327 residents on 1 January 2026, the national statistics record. First mentioned in 1033, it grew from the middle of the twentieth century as a commuter town for Amsterdam, and it has stayed an independent municipality, squeezed between Watergraafsmeer, Duivendrecht and Amsterdam-Zuidoost. Its connections tell the story: a station on the Gooilijn since 1974, and since 1993 a railway station on the Ringspoorbaan beside the metro at Diemen-Zuid. A set of stations joined by lines is what programmers call a graph, and finding the fastest way across it is one of the classic problems of computing, solved by the algorithm every route planner still uses. The fastest route, it turns out, is often not the one with the fewest stops. Modern Age Coders teaches live online in English for ages 6 to 67; the first lesson is free, then USD 100 a month in a group or USD 150 one to one.',
  lead: 'Look at a travel map around Diemen and it is a web of dots and lines: the station on the Gooilijn, the metro and the railway meeting at Diemen-Zuid, the roads to Amsterdam, Weesp and beyond. Computer scientists call such a web a graph, with the dots as nodes and the lines as edges, and each edge carries a cost, such as minutes, kilometres or money. The question a route planner answers, what is the cheapest way from here to there, was solved in general by Edsger Dijkstra, whose method, published in 1959, still sits inside navigation apps, internet routing and many AI planning systems. It works by always extending the cheapest route found so far, and it guarantees the best answer. Its lessons are useful far beyond travel: the obvious route is not always the best, the best route depends on what you choose to count as cost, and a network full of shortcuts can make a route with more stops the fastest of all.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Diemen.',

  picks: {
    eyebrow: 'Course picks for Diemen',
    h2: 'Four courses for the town between Amsterdam and the Gooi',
    intro: 'A child in Diemen-Noord who wants to make a maze game, a teenager in Diemen-Zuid building a route finder for the metro, a student in Oud-Diemen who has met graphs in a data course, and an adult in the Sniep who plans deliveries or schedules at work. The first lesson is free for each of them.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Maze games where a child first finds the way by hand, then teaches the computer to find the shortest one.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 14', note: 'Networks, distances and paths made concrete in code, so graph ideas become something a learner has built and tested.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Graphs and shortest paths in Python, from a small network by hand to route planning and scheduling with real data.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Delivery, travel and scheduling problems seen as networks, with a clear idea of what is being optimised.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Diemen today',
      h2: 'A settlement of 1033, a commuter town, and a town that stayed its own',
      intro: 'The encyclopaedia divides Diemen into six parts, Diemen-Noord, Oud-Diemen, Diemen-Centrum, once called Diemerbrug, Diemen-Zuid, Diemen Sniep and the outlying area; the statistics office counts nine wijken, including Plantage de Sniep, Holland Park and Bergwijkpark, and 38 buurten. On 1,195 hectares of land and 209 of water it has a published density of 2,781 residents per square kilometre.',
      body: [
        { kind: 'table', caption: 'Diemen in the encyclopaedia, by date', head: ['When', 'What happened'], rows: [
          ['1033', 'the oldest mention of Diemen, one of the first settlements in the area'],
          ['From the mid-twentieth century', 'Diemen grew strongly as a commuter town for Amsterdam; the old villages grew together, and Diemen-Noord and Diemen-Zuid were built'],
          ['1974', 'station Diemen opened on the Gooilijn'],
          ['1992 to 1996', 'the Diemerbos, a young wood, was planted in phases'],
          ['1993', 'a railway station on the Ringspoorbaan opened beside the metro station Diemen-Zuid']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Its own municipality', p: 'Diemen has held on as an independent municipality, squeezed between Amsterdam-Watergraafsmeer, Duivendrecht and Amsterdam-Zuidoost, the encyclopaedia says.' },
          { h3: 'Green in the middle', p: 'Park Spoorzicht is a nature park in the centre of Diemen, and the Diemerbos, planted between 1992 and 1996, is one of the youngest woods in the region.' },
          { h3: 'A young population', p: 'Of the 33,327 residents counted for 2026, 11,110 are aged twenty-five to forty-five, a third of the total, and institutions in the municipality count 1,890 university students.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'The fastest way across',
      h2: 'Five stops, seven connections, and a surprising answer',
      intro: 'The network below is invented to show the method, not a real map of Diemen. Travel times between stops, in minutes: A to B 4, A to C 10, B to C 3, B to D 12, C to D 5, C to E 11, D to E 2.',
      body: [
        { kind: 'table', caption: 'Dijkstra\'s method from A, fixing one stop at a time', head: ['Step', 'Stop fixed', 'Fastest time from A', 'Reached via'], rows: [
          ['1', 'A', '0 minutes', 'the start'],
          ['2', 'B', '4 minutes', 'A'],
          ['3', 'C', '7 minutes', 'A, B (not the direct 10)'],
          ['4', 'D', '12 minutes', 'A, B, C (not B to D, which gives 16)'],
          ['5', 'E', '14 minutes', 'A, B, C, D']
        ] },
        { kind: 'p', text: 'The fastest route from A to E takes 14 minutes and passes through every stop. The two-stop route, A to C to E, takes 21 minutes, and A to B to D to E takes 18. A traveller who counted stops would choose badly; a program that counts minutes chooses well. Dijkstra\'s method gets there by a simple rule repeated: of all the stops not yet fixed, fix the one that can be reached soonest, then see whether going through it improves the time to its neighbours. When the destination is fixed, its time is guaranteed to be the best possible, provided no connection has a negative cost. Change what counts as cost, say to money, or to the number of changes between metro and train, and the same method finds a different best route. Choosing the cost is the human decision; finding the route is the computer\'s job.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Diemen in the national statistics',
      intro: 'The figures published for the municipality with their years, the encyclopaedia history, and the page\'s own arithmetic at the end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '23,078 in 1995, 25,218 in 2013, 33,228 in 2025 and 33,327 on 1 January 2026. The 2025 count is 16,212 men and 17,016 women.' },
          { h3: 'Ages in 2026', p: '4,794 under fifteen, 4,872 aged fifteen to twenty-five, 11,110 aged twenty-five to forty-five, 7,092 aged forty-five to sixty-five, and 5,459 aged sixty-five and over.' },
          { h3: 'Households', p: '16,881 households in 2025, averaging 1.95 people: 7,857 of a single person and 9,024 of more, 4,798 of them with children.' },
          { h3: 'Homes and income', p: '16,115 dwellings in 2025, 6,446 owner-occupied and 9,669 rented, with an estimated average value of 460,000 euro. Average income was 38,300 euro per resident and 46,800 per income recipient in 2024, and 5.1 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: '7 primary establishments teach 2,423 pupils and there is one secondary establishment; institutions in the municipality count 527 MBO, 830 higher professional and 1,890 university students. By origin, 45 percent of residents are Dutch, 17 percent European and 38 percent from outside Europe; 65 percent were born in the Netherlands.' },
          { h3: 'The arithmetic', p: '33,327 minus 25,218 is 8,109, a rise of 32 percent since 2013. The age groups, the men and women and the household types were added up to confirm their totals, and the tenure groups make 16,115. The network example uses invented times only.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Diemen, the railway or metro operators, or any school in the area, and nothing on this page implies one. The statistics are those published for Diemen for the years stated. The oldest mention, the growth, the six parts, the stations, the Diemerbos, Park Spoorzicht and Diemen\'s independence come from the encyclopaedia entry for Diemen, which gives 33,284 residents on 1 January 2026 and 14.04 square kilometres, from a different source, not combined with the statistics.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Draw the network, then let the computer find the way',
      intro: 'Graphs are one of the most useful ideas in computing, and a learner can go from a drawing on paper to a working route finder in a few lessons.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Draw it as a graph', p: 'Put the places as dots and the connections as lines, and write a cost on every line. The drawing is already the data structure a program needs: a list of nodes and a list of weighted edges.' },
          { h3: '2. Run the method by hand', p: 'Work through Dijkstra\'s rule on paper, fixing the nearest unfixed stop each time. Doing it once by hand makes the code obvious, and shows why it always finds the best route.' },
          { h3: '3. Change the cost', p: 'Swap minutes for money, or add a penalty for each change of line, and run it again. The best route changes, which shows that the question you ask decides the answer you get.' }
        ] },
        { kind: 'table', caption: 'Graphs hiding in everyday systems', head: ['System', 'The nodes', 'The edges and their cost', 'The question asked'], rows: [
          ['A route planner', 'stations and stops', 'connections, in minutes', 'the fastest way from here to there'],
          ['The internet', 'routers', 'links, in delay or capacity', 'the best path for each packet of data'],
          ['A delivery company', 'addresses and depots', 'roads, in time or fuel', 'the cheapest set of rounds'],
          ['A game', 'squares of the map', 'moves, in steps or danger', 'how a character reaches its goal'],
          ['Diemen\'s own lines', 'Diemen, Diemen-Zuid and beyond', 'the Gooilijn, the Ringspoorbaan and the metro', 'which connection to take today']
        ] },
        { kind: 'callout', h3: 'Why AI still needs the classic algorithms', p: 'Ask an AI assistant for the best route through a network and it will usually give a sensible-sounding answer, based on patterns in text it has read. That is not the same as solving the problem. A language model does not run Dijkstra\'s method in its head; it predicts what a good answer looks like, and on a network it has never seen it can confidently choose a route that is slower, longer or simply impossible. The reliable approach combines the two: let the AI help describe the problem, choose sensible costs and write the code, and let the proven algorithm find the route. Many AI systems now do exactly this, calling a real route-finding tool rather than guessing. The same goes for scheduling, logistics and any task that is secretly a graph. A learner who has worked the method by hand on five stops, and seen the longest-looking route win, understands why a guaranteed algorithm is worth more than a confident guess. Diemen, a town defined by where its lines meet, is a good place to learn it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for problems that are secretly networks',
      intro: 'For routes, deliveries, schedules, games and data connections. Practised in a town whose metro and railways meet at Diemen-Zuid.',
      body: [
        { kind: 'table', caption: 'Solving network problems properly', head: ['Habit', 'In practice', 'What it avoids', 'What it gives'], rows: [
          ['See the graph', 'Recognise when a problem is places joined by connections', 'Solving a network problem by trial and error', 'Access to proven methods'],
          ['Choose the cost', 'Decide what is being minimised: time, money, changes, risk', 'A best route for the wrong question', 'Answers that fit the need'],
          ['Use a proven algorithm', 'Find routes with a method that guarantees the best answer', 'Confident but wrong guesses', 'Routes you can rely on'],
          ['Check the edge cases', 'Test unreachable places and connections that are closed', 'Programs that loop or crash', 'Robust behaviour'],
          ['Let AI call the tool', 'Have AI describe and code the problem, and a real algorithm solve it', 'Plausible routes that are not the best', 'The strengths of both']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A maze drawn on squared paper and then built as a game. The child finds the way by hand, then watches the computer find the shortest path and compares the two.' },
          { h3: 'For teenagers', p: 'Dijkstra\'s method in Python on a small network the teenager draws, then on a real public transport map exported from open data, with two different choices of cost.' },
          { h3: 'For adults', p: 'A work problem, delivery rounds or meeting rooms or task order, drawn as a graph. Adults often find it becomes solvable the moment it is drawn.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s account of Diemen\'s stations as its setting and an invented network for the worked example. It gives no real travel times for any Diemen connection.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a maze on squared paper to route finding with real data',
    intro: 'Each learner\'s starting level comes from the free lesson, by watching them on a real task. Age alone does not decide it, and neither does the part of Diemen they live in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Mazes', p: 'Children find paths through mazes and then program the shortest one.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Dots and lines', p: 'Learners draw networks and work out routes by hand before coding them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Dijkstra in Python', p: 'Teenagers write the algorithm and try different costs on real maps.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Networks at work', p: 'Adults turn routes, rounds and schedules into graphs and solve them.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can suggest a route in a second. Why should a teenager in Diemen learn how the best route is really found?',
    intro: 'Because a confident guess about a network is not the same as a guaranteed answer.',
    p1: 'Language models are very good at describing routes, schedules and plans in fluent sentences, and less good at actually optimising them. Given a network of stops and times, a model may pick the route that looks natural, often the one with fewest changes, without checking whether another is faster. It sounds certain either way. That matters for anything from travel to deliveries to the order in which tasks should be done, all of which are graph problems underneath.',
    p2: 'A learner who has worked Dijkstra\'s method by hand on five stops, watched the route through every stop beat the direct-looking one, and then coded it, knows the difference between an answer that sounds right and one that is proven right. Recognising that a problem is a network, choosing what to minimise and insisting that a real algorithm does the solving are human decisions. The model can describe the journey. Making sure it is the best journey is the person\'s job.',
    closer: 'So the case for a child in Diemen learning to code in 2026 is not the metro or the railway. It is that someone who can turn a messy problem into a graph and solve it properly will be needed wherever AI is asked to plan routes, rounds and schedules.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'A live class for every part of Diemen',
    intro: 'From Diemen-Noord across the railway to Diemen-Zuid and the Sniep, the town is compact, and a lesson on a laptop is the one journey that takes no time at all.',
    cells: [
      { h3: 'No connection to catch', p: 'A learner in Oud-Diemen and a learner in Holland Park start the same lesson at the same moment, each from home, with no metro or train in between.' },
      { h3: 'School words in Dutch', p: 'Groep, brugklas, vmbo, havo, vwo and profielkeuze stay in Dutch, as Diemen families use them, while the teaching is in English.' },
      { h3: 'The first hour is free', p: 'It is a real lesson on a real task. The teacher then recommends a level, a course and a regular time, and asks for no payment details.' },
      { h3: 'Groups from further afield', p: 'Five to ten learners at the same stage. Diemen has 4,794 residents under fifteen, too few to fill every level and hour locally, so groups include learners from other places and countries.' },
      { h3: 'Regio Noord holidays', p: 'Twice a week, about eight lessons a month, at a fixed hour, pausing for the regio Noord holidays that Noord-Holland schools keep.' },
      { h3: 'Teachers a few hours ahead', p: 'The teachers are in India, three and a half hours ahead of Diemen in summer and four and a half in winter, so late afternoons, evenings and weekend mornings all work.' }
    ],
    spec: { title: 'Eight schools, many connections, and one group online', p: 'Diemen has 7 primary establishments teaching 2,423 pupils and one secondary establishment. A coding group needs five learners who match on subject, stage and hour, and they are found far more easily across all ages from 6 to 67 and many countries than inside one small municipality.' }
  },

  fees: {
    h2: 'What classes cost in Diemen',
    intro: 'The whole price list, set out here.',
    first: 'A real lesson on a real task, ending with a level and a course.',
    group: 'Per month, normally eight lessons, five to ten learners at one level.',
    private: 'Per month, normally eight lessons, one learner and one teacher.',
    closer: 'The fee is one dollar price for every country, with no euro list, so a household in Diemen-Noord pays what a household in Diemen-Zuid pays. Nothing is charged until the free lesson has settled a course and a time, and payment is then arranged on WhatsApp. The pricing page covers pauses, format changes and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, as their authors wrote them',

  book: {
    h2: 'What can the learner do already?',
    intro: 'The first task might be a maze with a shortest path to find, a small network worked through by hand, or Dijkstra\'s method written in Python.',
    success: 'Thank you. Your Diemen class request has been sent.'
  },

  faq: {
    h2: 'Diemen coding class questions',
    intro: 'The town, its lines, its figures, and the lessons.',
    items: [
      { q: 'Which parts does Diemen have?', a: 'The encyclopaedia names six parts, Diemen-Noord, Oud-Diemen, Diemen-Centrum (once called Diemerbrug), Diemen-Zuid, Diemen Sniep and the outlying area. The statistics office counts nine wijken and 38 buurten.' },
      { q: 'How many people live in Diemen?', a: 'The national count was 33,327 on 1 January 2026, in 16,881 households in 2025. It was 25,218 in 2013.' },
      { q: 'How old is Diemen?', a: 'The oldest mention dates from 1033, which makes Diemen one of the first settlements in the area, according to the encyclopaedia. It grew strongly from the middle of the twentieth century as a commuter town for Amsterdam.' },
      { q: 'Which stations does Diemen have?', a: 'Station Diemen opened on the Gooilijn in 1974, and in 1993 a railway station on the Ringspoorbaan opened beside the metro station Diemen-Zuid, the encyclopaedia records.' },
      { q: 'What is the Diemerbos?', a: 'A young wood planted in phases between 1992 and 1996. Park Spoorzicht, in the centre of Diemen, is a nature park.' },
      { q: 'How many schools are there in Diemen?', a: 'The statistics count 7 primary establishments teaching 2,423 pupils and one secondary establishment, with 527 MBO, 830 higher professional and 1,890 university students at institutions in the municipality. This page rates no school.' },
      { q: 'What language are lessons in, and when are they?', a: 'In English, with Dutch school terms such as brugklas, havo and vwo kept as they are. The teachers work from India, three and a half hours ahead of Diemen in summer and four and a half in winter, so late-afternoon, evening and weekend times are easy to arrange. The time is agreed in the free lesson, and regio Noord holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Diemen?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Diemen coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Amsterdam and beyond',
    h2: 'Into Amsterdam, out to Weesp, and back to the hub',
    html: 'Diemen is surrounded by the city covered by <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, whose district pages include <a class="cg-inline-link" href="/coding-classes-in-amsterdam-oost">Amsterdam-Oost</a>, with Watergraafsmeer, and <a class="cg-inline-link" href="/coding-classes-in-amsterdam-zuidoost">Amsterdam-Zuidoost</a>. Along the Gooilijn lies <a class="cg-inline-link" href="/coding-classes-in-weesp">Weesp</a>, and every municipality in the province is listed on <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. For machine learning from the start there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Diemen, Noord-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-dmn .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.8vw, 2.3rem); }
.cg-root.cg-dmn .cg-hero h1 { font-weight: 670; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-dmn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-dmn .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dmn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.016em; }
.cg-root.cg-dmn .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.7rem); }
.cg-root.cg-dmn .cg-card { border-radius: 10px; border-bottom: 3px solid var(--cg-accent-soft); }
.cg-root.cg-dmn .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-dmn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dmn .cg-table td:nth-child(3) { font-weight: 700; }
.cg-root.cg-dmn .cg-ladder-col { border-left: 3px solid var(--cg-accent-soft); padding-left: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Diemen, Noord-Holland: 33,327 residents (statistics, 1 January 2026), 33,228 (2025), 25,218 (2013), 23,078 (1995); 16,212 men and 17,016 women (2025); ages (2026) 4,794 under fifteen, 4,872 fifteen to twenty-five, 11,110 twenty-five to forty-five, 7,092 forty-five to sixty-five, 5,459 sixty-five or over; 16,881 households (2025) averaging 1.95, 7,857 one-person, 9,024 multi-person, 4,798 with children; 1,404 hectares, 1,195 land, 209 water, published density 2,781; 16,115 dwellings (2025), 6,446 owner-occupied at 40 percent, 9,669 rented at 60 percent; estimated average value 460,000 euro; income 38,300 euro per resident and 46,800 per recipient (2024); 5.1 percent in poverty; origin (2025) 45 percent Dutch, 17 percent European, 38 percent non-European, 65 percent born in the Netherlands; 9 wijken (including Diemen Noord, Diemen Centrum, Plantage de Sniep, Diemen Zuid, Holland Park, Bergwijkpark), 38 buurten; 7 primary establishments with 2,423 pupils, 1 secondary establishment; 527 MBO, 830 HBO and 1,890 WO students at institutions. Encyclopaedia: the oldest mention dates from 1033, one of the first settlements in the area; from the mid-twentieth century Diemen grew strongly as a commuter town for Amsterdam, the old villages grew together and Diemen-Noord and Diemen-Zuid were built; six parts Diemen-Noord, Oud-Diemen, Diemen-Centrum (formerly Diemerbrug), Diemen-Zuid, Diemen Sniep and the outlying area; the Diemerbos a young wood planted in phases 1992 to 1996; Park Spoorzicht a nature park in the centre; station Diemen opened on the Gooilijn in 1974; in 1993 a railway station on the Ringspoorbaan opened beside metro station Diemen-Zuid; Diemen has held on as an independent municipality squeezed between Amsterdam-Watergraafsmeer, Duivendrecht and Amsterdam-Zuidoost; infobox 33,284 on 1 January 2026 and 14.04 square kilometres, not combined with the statistics. Regio Noord holidays. The city page teaches graphs and shortest paths.',
    localProject: 'Choose the cost, then let a proven algorithm find the route. Diemen\'s stations, on the Gooilijn since 1974 and on the Ringspoorbaan beside metro Diemen-Zuid since 1993, set the scene for graphs: nodes joined by weighted edges. An invented five-stop network (A-B 4, A-C 10, B-C 3, B-D 12, C-D 5, C-E 11, D-E 2) is worked with Dijkstra\'s method, fixing A 0, B 4, C 7, D 12 and E 14, so the fastest route passes through every stop while the two-stop route takes 21 and A-B-D-E takes 18; changing the cost to money or changes of line changes the best route. The programming form covers route planners, internet routing, delivery rounds and game pathfinding, and for AI the gap between a language model\'s plausible route and a guaranteed one, with the remedy of letting AI describe and code the problem and a real algorithm solve it. The defences are recognising a network problem, choosing the cost, using a proven algorithm, testing unreachable nodes and closed edges, and having AI call the tool. Chosen after a case-sensitive check found no page using shortest path, node or route planner in this sense. The page gives no real travel times. Distinct from Velsen, which concerns the slowest stage of a chain, from Lelystad, which concerns single points of failure in connections, and from Oegstgeest, which concerns halving a search space.',
    requiredMentions: [
      '25,218',
      '16,881',
      '7,857',
      '4,798',
      '16,115',
      '6,446',
      '9,669',
      '4,872',
      '11,110',
      'Diemerbos',
      'Ringspoorbaan',
      'Gooilijn',
      'Diemerbrug',
      'Plantage de Sniep'
    ],
    sources: [
      { claim: 'Gemeente Diemen: 33,327 inwoners (2026), 33,228 (2025), 25,218 (2013), 23,078 (1995); mannen 16,212, vrouwen 17,016 (2025); 16,881 huishoudens, 7,857 eenpersoons, 9,024 meerpersoons, 4,798 met kinderen, gemiddeld 1.95 (2025); ages 0-15 4,794, 15-25 4,872, 25-45 11,110, 45-65 7,092, 65+ 5,459 (2026); 1,404 hectare, land 1,195, water 209; bevolkingsdichtheid 2,781; woningvoorraad 16,115, koop 6,446 (40 percent), huur 9,669 (60 percent) (2025); gemiddelde WOZ 460,000 euro; gemiddeld inkomen per inwoner 38,300 and per inkomensontvanger 46,800 euro (2024); personen in armoede 5.1 percent; basisonderwijs 7 vestigingen 2,423 leerlingen, voortgezet onderwijs 1 vestiging; MBO 527, HBO 830, WO 1,890; geboren in Nederland 65 percent; herkomst Nederland 45 percent, Europa 17 percent, buiten Europa 38 percent (2025); 9 wijken (Diemen Noord, Diemen Centrum, Plantage de Sniep, Buitengebied, Diemen Zuid, Bedrijventerreinen, Holland Park, Bergwijkpark), 38 buurten.', url: 'https://allecijfers.nl/gemeente/diemen/' },
      { claim: 'Diemen (encyclopaedia): Vanaf halverwege de 20e eeuw begon Diemen sterk te groeien als forensengemeente van Amsterdam. De oude dorpen groeiden aaneen en voorts verrezen Diemen-Noord en Diemen-Zuid. Diemen bestaat uit zes delen: Diemen-Noord, Oud-Diemen, Diemen-Centrum (vroeger Diemerbrug genoemd), Diemen-Zuid, Diemen Sniep en het buitengebied. Het Diemerbos is een jong bos dat in fasen is aangelegd in de periode 1992-1996. Park Spoorzicht is een natuurpark in het centrum van Diemen. In 1974 werd aan de Gooilijn station Diemen geopend. In 1993 werd naast het metrostation Diemen-Zuid een treinstation in gebruik genomen aan de Ringspoorbaan. Diemen heeft zich weten te handhaven als zelfstandige gemeente ingeklemd tussen Amsterdam-Watergraafsmeer, Duivendrecht en Amsterdam-Zuidoost. De oudste vermelding dateert van 1033, en daarmee is Diemen een van de eerste nederzettingen in deze omgeving. Infobox: 33.284 inwoners (1 jan 2026), 14,04 km2.', url: 'https://nl.wikipedia.org/wiki/Diemen' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any real travel times, frequencies or routes for Diemen stations. The worked example is an invented network.',
      'Secondary pupil counts. The row read gave the number of establishments only.',
      'Origin counts as numbers. Only percentages were published in the row read.',
      'Any claim that Diemen resisted a specific annexation plan. The source says only that it has held on as an independent municipality.',
      'Any comparison of the encyclopaedia figure of 33,284 with the statistics figure of 33,327. Two sources that disagree is the Breda argument.',
      'Anything the Amsterdam, Amsterdam-Oost, Amsterdam-Zuidoost, Weesp and Noord-Holland pages own, including their figures and arguments.'
    ]
  }
};
