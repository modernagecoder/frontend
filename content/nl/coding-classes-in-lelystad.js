'use strict';
// Lelystad: capital of Flevoland, named after Cornelis Lely, 85,781
// residents on a municipality that is mostly water.
// Spine (modest, per the Phase 5 method): until the Houtribdijk opened in
// 1976, the only connection between Noord-Holland and Flevoland was the
// Oostvaardersdijk. One route is a single point of failure; the Houtribdijk
// made it two, and the Flevolijn of 1988 added a third kind of link. Software
// systems are full of single points of failure that nobody has drawn.

module.exports = {
  slug: 'coding-classes-in-lelystad',
  code: 'lls',
  accent: '#A74A04',
  accentRationale: 'Lelystad: a burnt orange for the capital of the newest land, placed by the solver more than twenty units from every page it links to, the Flevoland plum and the Almere brown among them',
  pageType: 'city',
  place: {
    name: 'Lelystad',
    eyebrow: 'Lelystad, Flevoland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Flevoland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Lelystad, Netherlands',
  title: 'Coding Classes in Lelystad | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes in Lelystad for ages 6 to 67, from the Stadshart and Lelystad Haven to Warande. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the capital of Flevoland, on a page about the one route everything depends on.',
  twitterDescription: 'Classes in Lelystad for ages 6 to 67, taught live online, first lesson free.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Lelystad Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Lelystad, taught in English.'
  },

  h1: 'Coding classes in Lelystad, a capital that once had a single road to Noord-Holland',
  capsuleQ: 'What are the best coding classes in Lelystad?',
  capsule: 'Coding classes in Lelystad serve 85,781 people (statistics office, 1 January 2026) in the capital of Flevoland, named after Cornelis Lely, the mind behind the Zuiderzee Works. The polder fell dry in June 1957 and the first residents arrived on 28 September 1967. Until 1976, the encyclopaedia records, the only connection between Noord-Holland and Flevoland was the Oostvaardersdijk; then the Houtribdijk opened, and in 1988 the Flevolijn brought the railway. One route is what engineers call a single point of failure, and software is full of them: one server, one password, one supplier, one person who knows how the system works. Modern Age Coders teaches live online in English, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'For nine years after the first residents arrived, every journey between Lelystad and Noord-Holland had one way to go. The encyclopaedia puts it plainly: until the Houtribdijk opened in 1976, the only connection between Noord-Holland and Flevoland was the Oostvaardersdijk. Nothing on this page suggests that the dike ever failed. The point is what the arrangement meant: anything that closed that one route would have closed the connection completely. A second dike changed that, and the railway in 1988 added a connection of a different kind. Engineers call the first situation a single point of failure, and they spend a great deal of effort removing them. Software developers need the same habit, because modern systems hide single points of failure everywhere, often in places nobody thought to draw.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Lelystad.',

  picks: {
    eyebrow: 'Course picks for Lelystad',
    h2: 'Four courses for the capital of the new land',
    intro: 'A child in the Waterwijk who wants to build a game that saves properly, a teenager in the Boswijk making an app that must not lose anyone\'s data, a student in the Stadshart whose whole project lives on one laptop, and an adult in Lelystad Haven whose team relies on one colleague to run the system. Each of them can begin with a full lesson free of charge.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games with save files kept in two places, so a child learns early that one copy is no copy at all.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A real app with a database, backups that are actually restored as a test, and a plan for when a service it depends on goes down.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python automations with timeouts, retries and a fallback, written on the assumption that every outside service will fail sometimes.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reports and AI tools mapped for the one supplier, file or person everything depends on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Lelystad today',
      h2: 'The capital of Flevoland, on a municipality that is mostly water',
      intro: 'Lelystad is the capital of, and a municipality in, the province of Flevoland, and it is named after Cornelis Lely, the intellectual father of the Zuiderzee Works. The statistics office counted 85,781 residents on 1 January 2026. The municipality covers 76,545 hectares, of which 22,900 are land and 53,645 water, so about seven tenths of its territory is water; the published density of 370 residents per square kilometre is taken over the land. The office divides it into 12 wijken and 137 buurten.',
      body: [
        { kind: 'table', caption: 'From dry land to a connected capital, in the encyclopaedia\'s dates', head: ['Date', 'What happened', 'Links between the new land and Noord-Holland'], rows: [
          ['June 1957', 'the polder of Oostelijk Flevoland fell dry', 'the Oostvaardersdijk'],
          ['28 September 1967', 'the first residents arrived', 'still the Oostvaardersdijk alone'],
          ['1976', 'the Houtribdijk opened', 'two dikes'],
          ['1 January 1980', 'Lelystad became a municipality', 'two dikes'],
          ['1 January 1986', 'the province of Flevoland was established; until then the Flevopolder belonged to no province', 'two dikes'],
          ['1988', 'the Flevolijn from Weesp was completed, with Lelystad as its terminus', 'two dikes and a railway']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Batavia and Nieuw Land', p: 'The town is home to the reconstruction of the VOC ship Batavia and to the Nieuw Land Erfgoedcentrum, the heritage centre of the land that was once sea.' },
          { h3: 'The airport', p: 'Lelystad Airport has been expanded to take a share of the growth of Schiphol, according to the encyclopaedia entry for the town.' },
          { h3: 'The wijken', p: 'Among the parts of the town the encyclopaedia names are the Stadshart, the Kustwijk, Lelystad Haven, the Schouw, the Hanzepark, the Warande, the Zuiderzeewijk, the Atolwijk, the Waterwijk, the Landstrekenwijk, the Hollandse Hout and the Boswijk.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'One route',
      h2: 'Nine years with one dike, and the software version of it',
      intro: 'A single point of failure is any one part whose loss stops the whole. The idea comes from engineering, and the Oostvaardersdijk before 1976 is a clear picture of it, whether or not anything ever went wrong.',
      body: [
        { kind: 'table', caption: 'One route, then more than one, in the polder and in code', head: ['The system', 'The single point', 'What its loss would stop', 'The second route'], rows: [
          ['Travel between Noord-Holland and Flevoland before 1976', 'the Oostvaardersdijk', 'every road journey between the two', 'the Houtribdijk, then the railway'],
          ['A website on one server', 'that server', 'the whole site', 'a second server behind a load balancer'],
          ['A database with no copy', 'the one disk it is on', 'every record, possibly for good', 'replicas, and backups that are restored as a test'],
          ['An app that calls one outside service', 'that provider', 'every feature that uses it', 'a timeout, a fallback, or a second provider'],
          ['A team where one person knows the deployment', 'that person', 'every release while they are away', 'written instructions and a second person trained']
        ] },
        { kind: 'p', text: 'The last row is the one people forget. Engineers joke about the bus factor, the number of people who would have to be unavailable before a project stalls, and in many teams it is one. The polder shows why the question is worth asking even when nothing has failed. For nine years every road journey between Lelystad and Noord-Holland went over one dike; the risk was not that it would fail, but that nothing else was ready if it did. Adding the Houtribdijk did not make the first dike stronger. It made its loss survivable, which is exactly what a second server, a tested backup or a second trained colleague does in software.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Lelystad in figures, with the arithmetic laid out',
      intro: 'The statistics office row with the year of each figure, then schools and origin, then the dates from the encyclopaedia. Each calculation the page makes is listed in one place.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '85,781 in 2026, 84,713 in 2025, 75,778 in 2013 and 60,722 in 1995; 42,672 men and 42,041 women in 2025. Ages in 2026: 14,280 under fifteen, 10,645 from fifteen to twenty-five, 23,311 from twenty-five to forty-five, 21,765 from forty-five to sixty-five and 15,780 aged sixty-five or more, which add to the 2026 total.' },
          { h3: 'Households and homes', p: '37,191 households in 2025 averaging 2.25 people, 13,184 of one person and 14,050 with children. 36,017 dwellings, 22,331 owner-occupied at 62 percent and 13,686 rented at 38, summing to the total; an estimated average value of 350,000 euro.' },
          { h3: 'Income and origin', p: 'Income of 31,800 euro per resident and 39,500 per income recipient in 2024; 3.7 percent of residents in poverty. In 2025, 65,522 residents were born in the Netherlands; 8,972 were of European and 24,956 of non-European origin.' },
          { h3: 'Schools', p: '42 primary establishments teach 8,013 pupils, about 191 each, and 5 secondary establishments teach 4,382, about 876 each. The office records 1,450 MBO students at institutions in the municipality.' },
          { h3: 'Land and water', p: '76,545 hectares in all: 22,900 land and 53,645 water. The published density of 370 residents per square kilometre is calculated over the land. 12 wijken and 137 buurten.' },
          { h3: 'Every calculation', p: '85,781 minus 60,722 is 25,059, which the site gives as a 41 percent rise since 1995. 53,645 of 76,545 hectares is 70 percent water. 8,013 pupils over 42 establishments is about 191 and 4,382 over 5 about 876. 1967 to 1976 is nine years. The age groups and the tenure groups were added only to check they are complete.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Lelystad, the airport, the Batavia, Nieuw Land or any school in Flevoland, and nothing here implies one. The municipal figures are the statistics office row for Lelystad at the years given. The capital status, Cornelis Lely, the dates of the polder, the first residents, the municipality, the two dikes, the province and the railway, the airport, the Batavia and the wijken all come from the encyclopaedia entry for Lelystad.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Draw the map, then ask what happens if one piece disappears',
      intro: 'Single points of failure are rarely hidden on purpose. They survive because nobody has drawn the system and asked the obvious question about each part of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Draw every dependency', p: 'On one page, draw the parts a system needs to work: servers, databases, outside services, files, accounts, and the people who know how to run it. Draw the lines between them.' },
          { h3: '2. Remove each one in turn', p: 'For every box, ask what stops if it is gone for a day. Any box whose loss stops the whole system, with nothing to take over, is a single point of failure.' },
          { h3: '3. Add a route, then test it', p: 'Give each critical box a second route: a replica, a restored backup, a fallback, a second trained person. Then switch the first one off on purpose, because a second route that has never been used is only a hope.' }
        ] },
        { kind: 'table', caption: 'Single points of failure that are easy to miss', head: ['The single point', 'Why it is missed', 'What it can take down', 'The usual remedy'], rows: [
          ['A tiny open-source package', 'it is buried deep in the dependency list', 'every build that includes it, if it disappears', 'pinned versions and a local mirror of dependencies'],
          ['An expiring certificate or domain', 'it works perfectly until the day it lapses', 'the whole site, all at once', 'monitoring and automatic renewal'],
          ['One admin account', 'it is convenient to have a single login', 'all administration if it is locked or lost', 'a second admin and recovery codes kept safely'],
          ['A single AI model provider', 'one API is simpler to write against', 'every AI feature during an outage or a price change', 'a fallback model and a clear message to users'],
          ['The one person who knows the system', 'people are not drawn on diagrams', 'every release while they are away', 'documentation and a second person trained']
        ] },
        { kind: 'callout', h3: 'Why the smallest parts cause the largest failures', p: 'In 2016 a developer removed a small package called left-pad from the npm registry. It was eleven lines long, and thousands of projects depended on it without knowing, because it sat several layers down in their dependency lists; builds around the world failed until it was restored. The lesson has been repeated many times since, with expired certificates, deleted accounts and outside services that changed or vanished. Large, obvious parts of a system tend to be protected, because everyone knows they matter. The dangerous single points are the small, dull ones that nobody drew. AI systems add new ones: a feature built on one model provider, a pipeline fed by one scraper, an evaluation that rests on one dataset. The remedy is unglamorous: draw the dependencies, remove each in imagination, add a second route to anything critical, and test that route by actually using it. Lelystad offers a calm illustration of the whole idea. For nine years a new town and its neighbours depended on one dike, and the second one did not make the first stronger. It made the connection survivable.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits that remove single points of failure',
      intro: 'For websites, databases, automations, AI features and the teams that run them. Practised in a town that went from one connection with Noord-Holland to three.',
      body: [
        { kind: 'table', caption: 'From one route to more than one', head: ['Habit', 'What to do', 'What it prevents', 'What it gives'], rows: [
          ['A dependency map', 'Draw every service, file, account and person the system needs', 'Critical parts nobody knew about', 'A list of what to protect'],
          ['Backups you restore', 'Restore a backup to a fresh machine on a schedule', 'Backups that turn out not to work', 'Proof that the data survives'],
          ['Timeouts and fallbacks', 'Give every outside call a time limit and a sensible response when it fails', 'One slow service freezing everything', 'A system that degrades instead of stopping'],
          ['Two of anything critical', 'Keep a second server, admin, provider or trained person for each vital part', 'A single loss stopping the whole', 'Survivable failures'],
          ['Practise the failure', 'Switch a part off deliberately and watch what happens', 'Second routes that exist only on paper', 'Confidence that has been tested']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A game whose save file lives in one place, and then in two. The child deletes the first copy on purpose, restores from the second, and learns why one copy is no copy.' },
          { h3: 'For teenagers', p: 'A small web app that calls an outside service. The teenager switches the service off, watches the app freeze, then adds a timeout and a fallback message so it keeps working.' },
          { h3: 'For adults', p: 'A map of what a team\'s work depends on, including people. Adults often find that the most important single point of failure is a colleague, not a computer.' }
        ] },
        { kind: 'p', text: 'This section rests on one sentence from the encyclopaedia, that until the Houtribdijk opened in 1976 the only connection between Noord-Holland and Flevoland was the Oostvaardersdijk, and on standard practice in software reliability. It makes no claim that the dike ever failed or was ever at risk.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a second save file to a system that survives losing a part',
    intro: 'Every learner is placed during the free lesson, while the teacher watches them work on something real. Which wijk they live in makes no difference, and neither does age by itself.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two copies', p: 'Children keep a game save in two places and restore it from the spare.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'What if it breaks?', p: 'Learners draw what a small program needs and remove each part in turn.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Timeout and fallback', p: 'Teenagers make an app keep working when a service it uses goes down.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The bus factor', p: 'Adults map a team system, people included, and fix its single points.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can build a feature in an afternoon. Why should a teenager in Lelystad ask what it depends on?',
    intro: 'Because the town spent nine years with a single road connection to Noord-Holland, and software is full of single roads.',
    p1: 'An AI assistant will happily write a feature that calls one model provider, stores its results in one database and assumes both will always answer. The code works in the demo, and nothing in it is wrong. What it lacks is any plan for the day the provider is down, the price changes or the database disk fills, because the assistant was asked for a feature, not for a system that survives losing a part. As more products are built on a small number of AI services, those services become shared single points of failure for thousands of applications at once.',
    p2: 'A learner who has switched off a service on purpose and watched their own app freeze, then added a timeout and a fallback and watched it carry on, understands reliability in a way that no checklist conveys. Drawing the dependencies, asking what happens when each one disappears and building a second route to anything critical are decisions a person has to make before and after the assistant writes its code. They decide whether a system bends or breaks, and they remain a human job.',
    closer: 'The case for a child in Lelystad learning to code in 2026 is therefore not the airport or the new land. It is that someone who asks what everything depends on will be needed wherever AI makes it quick to build systems that rest on a single road.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'A class that reaches every wijk of a spread-out town',
    intro: 'Lelystad was laid out with plenty of space between its wijken, and a lesson that needs no journey suits a town where the Warande and Lelystad Haven are a fair way apart.',
    cells: [
      { h3: 'Nobody crosses town', p: 'A learner in the Warande logs in at the same moment as one in the Kustwijk, each from home. The evening is not spent driving from one wijk to another and back again.' },
      { h3: 'Dutch school words stay put', p: 'Groep, brugklas, vmbo, havo, vwo and the profielkeuze are said in Dutch during lessons, just as a Lelystad school writes them, and the teaching goes on in English around them.' },
      { h3: 'A first lesson that counts', p: 'The free hour is a real lesson on a real task. The teacher watches how the learner works and ends with a level, a course and a regular weekly time, without asking for any payment details.' },
      { h3: 'Classmates at the same stage', p: 'Five to ten learners who have reached the same point. Lelystad has 14,280 residents under fifteen, but five who match on subject, level and hour are rare in any town, so groups may bring in learners from other countries.' },
      { h3: 'Regio Noord holidays', p: 'Two lessons each week, around eight a month, always at the same hour, pausing for the regio Noord holidays that Flevoland schools follow.' },
      { h3: 'A time difference that helps', p: 'India is three and a half hours ahead in summer and four and a half in winter. After school, the early evening and weekend mornings all remain available across the year.' }
    ],
    spec: { title: 'Forty-seven schools, and a group assembled online', p: 'Lelystad has 42 primary establishments teaching 8,013 pupils and 5 secondary establishments teaching 4,382. A coding class still needs five learners who match on subject, stage and hour at once, and they are found far more easily across all ages from 6 to 67 and many countries than in one town.' }
  },

  fees: {
    h2: 'What Lelystad families pay',
    intro: 'All three prices are below, and there is nothing else.',
    first: 'A full, real lesson on a real task, closing with a level and a named course.',
    group: 'Monthly, normally eight lessons, five to ten learners grouped by level.',
    private: 'Monthly, normally eight lessons, a single learner with a single teacher.',
    closer: 'The fee is one dollar price for every country, with no euro list set against it, so a family in the Boswijk and a family in the Atolwijk pay exactly the same. No payment is taken until the free lesson has settled a course and an hour, and then it is arranged over WhatsApp. Breaks, changes of format and missed lessons are all explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as posted',

  book: {
    h2: 'Tell us what the learner already knows',
    intro: 'The first task might be a game save kept in two places, a small program drawn with everything it depends on, or an app that keeps working when a service goes down.',
    success: 'Thank you. Your Lelystad class request has been sent.'
  },

  faq: {
    h2: 'Lelystad coding class questions',
    intro: 'The capital, its dates, its dikes, its water, and the lessons.',
    items: [
      { q: 'Why is Lelystad called Lelystad?', a: 'It is named after Cornelis Lely, whom the encyclopaedia calls the intellectual father of the Zuiderzee Works. Lelystad is the capital of the province of Flevoland.' },
      { q: 'How old is Lelystad?', a: 'The polder of Oostelijk Flevoland fell dry in June 1957, the first residents arrived on 28 September 1967, and Lelystad became a municipality on 1 January 1980. The province of Flevoland was established on 1 January 1986, and the railway reached the town in 1988.' },
      { q: 'How many people live in Lelystad?', a: 'The statistics office counted 85,781 residents on 1 January 2026, in 37,191 households in 2025. In 1995 the count was 60,722, and the office site gives the rise since then as 41 percent.' },
      { q: 'Why is so much of Lelystad water?', a: 'The municipality covers 76,545 hectares, of which 53,645 are water and 22,900 land, according to the statistics office, so about seven tenths of its territory is water. The published density of 370 residents per square kilometre is calculated over the land only.' },
      { q: 'What are the Oostvaardersdijk and the Houtribdijk?', a: 'According to the encyclopaedia, until the Houtribdijk opened in 1976 the only connection between Noord-Holland and Flevoland was the Oostvaardersdijk. Since 1988 Lelystad has also been on the national railway, as the terminus of the Flevolijn from Weesp.' },
      { q: 'How many schools are there in Lelystad?', a: 'The statistics office counts 42 primary establishments teaching 8,013 pupils and 5 secondary establishments teaching 4,382, with 1,450 MBO students at institutions in the municipality. This page rates no school.' },
      { q: 'What language are lessons in, and at what time?', a: 'English, with Dutch school terms such as groep, havo and vwo kept in Dutch. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend times all work. The weekly hour is agreed at the free lesson and holidays follow regio Noord.' },
      { q: 'Is there a Modern Age Coders classroom in Lelystad?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Lelystad coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Flevoland and beyond',
    h2: 'Across the polder, over the water, and up to the hub',
    html: 'The largest town on the new land has its own page at <a class="cg-inline-link" href="/coding-classes-in-almere">coding classes in Almere</a>, and the whole of the youngest province, all six municipalities, is on <a class="cg-inline-link" href="/coding-classes-in-flevoland">Flevoland</a>. Along the Flevolijn and across the water lies <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>, with its district pages. For a learner going straight to machine learning there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and every page in the series is listed on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Reach us on WhatsApp'
  },

  footerHeading: 'Lelystad, Flevoland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-almere', label: 'Almere' },
    { href: '/coding-classes-in-flevoland', label: 'Flevoland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-lls .cg-hero-grid { grid-template-columns: 0.98fr 1.02fr; align-items: end; gap: clamp(1.2rem, 3vw, 2.4rem); }
.cg-root.cg-lls .cg-hero h1 { font-weight: 610; letter-spacing: -0.013em; line-height: 1.1; }
.cg-root.cg-lls .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-lls .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-lls .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-lls .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-lls .cg-card { border-radius: 12px; border-bottom: 2px solid var(--cg-accent-soft); }
.cg-root.cg-lls .cg-table caption { letter-spacing: 0.045em; font-weight: 700; }
.cg-root.cg-lls .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lls .cg-table td:nth-child(3) { font-weight: 700; }
.cg-root.cg-lls .cg-ladder-col { border-top: 2px solid var(--cg-accent-soft); padding-top: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Lelystad, Flevoland: 85,781 residents (statistics office, 1 January 2026), 84,713 (2025), 75,778 (2013), 60,722 (1995), a rise the site gives as 41 percent; 42,672 men and 42,041 women (2025); 37,191 households (2025) averaging 2.25, 13,184 one-person, 14,050 with children; ages (2026) 14,280 under fifteen, 10,645 fifteen to twenty-five, 23,311 twenty-five to forty-five, 21,765 forty-five to sixty-five, 15,780 sixty-five or over; 76,545 hectares, 22,900 land, 53,645 water, published density 370 over land; 36,017 dwellings (2025), 22,331 owner-occupied at 62 percent, 13,686 rented at 38 percent; estimated average value 350,000 euro; income 31,800 euro per resident and 39,500 per recipient (2024); 3.7 percent in poverty; 65,522 born in the Netherlands, 8,972 of European and 24,956 of non-European origin (2025); 12 wijken, 137 buurten; 42 primary establishments with 8,013 pupils, 5 secondary with 4,382, 1,450 MBO students at institutions. Encyclopaedia: capital of Flevoland; named after Cornelis Lely, intellectual father of the Zuiderzee Works; the polder fell dry in June 1957; the first residents arrived on 28 September 1967; municipality on 1 January 1980; until the Houtribdijk opened in 1976 the only connection between Noord-Holland and Flevoland was the Oostvaardersdijk; the province of Flevoland established on 1 January 1986, before which the Flevopolder belonged to no province; on the national railway since 1988 as terminus of the Flevolijn from Weesp completed that year; Lelystad Airport expanded to take part of the growth of Schiphol; the reconstruction of the VOC ship Batavia; the Nieuw Land Erfgoedcentrum; wijken including Stadshart, Kustwijk, Lelystad Haven, Schouw, Hanzepark, Golfresort, Parkhaven, Warande, Zuiderzeewijk, Atolwijk, Waterwijk, Landstrekenwijk, Hollandse Hout, Landerijen, Boswijk; infobox 85,758 on 1 January 2026, not combined with the office row. Regio Noord holidays. The city page teaches single points of failure and redundancy.',
    localProject: 'One route is a single point of failure. Until the Houtribdijk opened in 1976, the only connection between Noord-Holland and Flevoland was the Oostvaardersdijk, so for the nine years after the first residents arrived in 1967 every road journey between Lelystad and Noord-Holland used one dike; the Houtribdijk made it two and the Flevolijn of 1988 added a railway. The page claims no failure or risk to the dike; the point is that a second route makes a loss survivable without making the first route stronger. The programming form is the single point of failure: one server, a database with no restored backup, one outside service, one admin account, one AI model provider, a tiny package deep in the dependency list (left-pad, 2016), an expiring certificate, and the one person who knows the deployment (the bus factor). The defences are a dependency map that includes people, backups restored on a schedule, timeouts and fallbacks on every outside call, two of anything critical, and deliberate practice of failure. A reliability-engineering point rather than a statistical fallacy. Chosen after a keyword check found no page in the cluster using single point of failure, bus factor or failover; the first draft argued necessary versus sufficient, which Escamp already owns, and was rewritten. Distinct from format durability (Hilversum), which concerns whether a record can still be read, and from accuracy follows use (Oss).',
    requiredMentions: [
      '60,722',
      '75,778',
      '37,191',
      '13,184',
      '14,050',
      '36,017',
      '22,331',
      '13,686',
      '8,013',
      '4,382',
      '15,780',
      'Houtribdijk',
      'Oostvaardersdijk',
      'Batavia'
    ],
    sources: [
      { claim: 'Gemeente Lelystad: 85,781 inwoners (2026), 84,713 (2025), 75,778 (2013), 60,722 (1995), groei 41 percent (25,059); mannen 42,672, vrouwen 42,041 (2025); 37,191 huishoudens, 13,184 eenpersoons (35 percent), 14,050 met kinderen (38 percent), gemiddeld 2.25; ages 0-15 14,280, 15-25 10,645, 25-45 23,311, 45-65 21,765, 65+ 15,780 (2026); 76,545 hectare, land 22,900, water 53,645; bevolkingsdichtheid 370; woningvoorraad 36,017, koopwoningen 22,331 (62 percent), huurwoningen 13,686 (38 percent) (2025); gemiddelde WOZ 350,000 euro; gemiddeld inkomen per inwoner 31,800 and per inkomensontvanger 39,500 euro (2024); personen in armoede 3.7 percent; basisonderwijs 42 vestigingen 8,013 leerlingen, voortgezet onderwijs 5 vestigingen 4,382 leerlingen, MBO 1,450; geboren in Nederland 65,522, herkomst Europa 8,972, buiten Europa 24,956 (2025); 12 wijken, 137 buurten.', url: 'https://allecijfers.nl/gemeente/lelystad/' },
      { claim: 'Lelystad (encyclopaedia): Lelystad is de hoofdstad van, en een gemeente in, de Nederlandse provincie Flevoland. Lelystad is vernoemd naar Cornelis Lely, de geestelijk vader van de Zuiderzeewerken. In juni 1957 viel de polder droog. De eerste bewoners kwamen op 28 september 1967. Op 1 januari 1980 werd Lelystad een gemeente. Tot 1976, toen de Houtribdijk werd opengesteld, was de enige verbinding tussen Noord-Holland en Flevoland de Oostvaardersdijk. Tot aan de instelling van de provincie Flevoland op 1 januari 1986 was de Flevopolder niet provinciaal ingedeeld. Sinds 1988 is Lelystad aangesloten op het landelijke spoorwegnet, destijds als eindpunt van de eveneens in 1988 voltooide Flevolijn (Weesp - Lelystad). Lelystad Airport is uitgebreid om een deel van de groei van Schiphol op te vangen. De reconstructie van het VOC-schip Batavia. Het Nieuw Land Erfgoedcentrum. Wijken: Stadshart, Kustwijk, Lelystad Haven, Schouw, Hanzepark, Golfresort, Parkhaven, Warande, Zuiderzeewijk, Atolwijk, Waterwijk, Landstrekenwijk, Hollandse Hout, Landerijen, Boswijk. De gemeente telt 85.758 inwoners (1 januari 2026).', url: 'https://nl.wikipedia.org/wiki/Lelystad' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any claim that the Oostvaardersdijk failed, was closed or was at risk. The source says only that it was the only connection until 1976.',
      'Any statement about connections between Flevoland and provinces other than Noord-Holland. The source sentence concerns Noord-Holland alone.',
      'Any population target for Lelystad. The encyclopaedia mentions a goal of about 100,000 for an expansion without making clear which, so it is not used.',
      'Any comparison of the encyclopaedia figure of 85,758 with the office figure of 85,781. Two sources that disagree is the Breda argument.',
      'Any density over the whole territory including water. The choice of denominator is the Gadong argument; the page states only that the published figure is over land.',
      'Necessary versus sufficient conditions, which Escamp already owns; an earlier draft of this page used it and was rewritten.',
      'Anything the Almere and Flevoland pages own, including base-year growth rates and their datum argument.'
    ]
  }
};
