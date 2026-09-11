'use strict';
// Assen: capital of Drenthe since 1814, home of the TT motorcycle race held
// every year since 1925. 70,769 residents.
// Spine (modest, per the Phase 5 method): a race decides who gets there
// first. In software, a race condition is a bug in which the result depends
// on which of two things happens first, and the classic case is two updates
// that read the same value, each add to it, and overwrite one another.

module.exports = {
  slug: 'coding-classes-in-assen',
  code: 'asn',
  accent: '#3E4100',
  accentRationale: 'Assen: a dark heath olive for the capital of Drenthe, placed by the solver nearly twenty units from every page it links to, the Drenthe and Emmen accents among them, with an unlinked city as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Assen',
    eyebrow: 'Assen, Drenthe',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Drenthe' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Assen, Netherlands',
  title: 'Coding Classes in Assen | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Assen, ages 6 to 67, from the Centrum and Pittelo to Kloosterveen and Marsdijk. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the capital of Drenthe and the TT town, on a page about race conditions in code.',
  twitterDescription: 'Assen classes for learners from 6 to 67, live online, beginning with a free lesson.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Assen Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Assen, taught in English.'
  },

  h1: 'Coding classes in Assen, the TT town, and the races that happen inside code',
  capsuleQ: 'What are the best coding classes in Assen?',
  capsule: 'Assen, capital of Drenthe since 1814, had 70,769 residents on 1 January 2026 according to the national statistics. It grew from the convent of Maria in Campis, moved here from Coevorden in 1259, became a municipality in 1807 and a town in 1809, and since 1925 it has hosted a motorcycle race every year on the TT circuit. A race decides who arrives first. Programs have races too, and they are bugs: when two parts of a system update the same thing at the same moment, the result depends on which gets there first, and an update can vanish without any error. Every booking system, shared document and team of AI agents has to be built so that this cannot happen. Classes are live, online and in English for ages 6 to 67; the first is free, then USD 100 a month in a group or USD 150 one to one.',
  lead: 'Two people open the same shared shopping list on two phones. Each sees that there are ten items, each adds one, and each saves. The list should now hold twelve items; it holds eleven, because the second save overwrote the first without either person noticing. Programmers call this a race condition, and it is one of the most stubborn kinds of bug there is, because it only appears when two things happen at almost exactly the same moment, which may be rare on a quiet Tuesday and constant on the busiest day of the year. Assen, where a motorcycle race has been run every year since 1925, is a fitting place to learn it. The cure is not to hope that things never collide, but to design so that a collision cannot lose anything: operations that happen as one indivisible step, locks and transactions, and rules in the database that make the impossible result impossible to store.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Assen.',

  picks: {
    eyebrow: 'Course picks for Assen',
    h2: 'Four courses for the capital of Drenthe',
    intro: 'A child in Pittelo who wants to make a two-player game, a teenager in Kloosterveen building a booking app for a sports club, a student in the Centrum whose program sometimes gives a different answer for no visible reason, and an adult in Marsdijk whose team edits the same spreadsheet at once. For each of them, the first lesson is free.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Two-player games where both players can grab the same prize at once, and the child makes sure only one of them actually gets it.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A booking app that cannot sell the same seat twice, however many people press the button at the same moment.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python with threads, tasks and databases, where lost updates are reproduced on purpose and then prevented properly.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Shared files, forms and automations checked for the edits that disappear when two people save together.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Assen today',
      h2: 'A convent of 1259, a capital of 1814, and a race every year since 1925',
      intro: 'The municipality has seven woonplaatsen and is divided by the statistics office into ten wijken and 109 buurten: the Centrum, Lariks, Noorderpark, Pittelo, Assen-Oost, Assen-West, Peelo, Marsdijk, Kloosterveen and the Buitengebied. On 8,188 hectares of land and 157 of water it has a published density of 860 residents per square kilometre.',
      body: [
        { kind: 'table', caption: 'Assen in the encyclopaedia, by date', head: ['Year', 'What happened'], rows: [
          ['1259', 'the convent of Maria in Campis, or Marienkamp, was moved from Coevorden to a sand ridge where the centre of Assen now lies'],
          ['1807', 'Assen became an independent municipality'],
          ['1809', 'it became a town, on the orders of Louis Napoleon'],
          ['1814', 'Assen became the capital of Drenthe'],
          ['1925 onwards', 'the motorcycle race on the TT circuit, held every year']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Drents Museum', p: 'The Drents Museum stands on the Brink, in the former Gouvernementsgebouw, the old seat of provincial government.' },
          { h3: 'A capital without size', p: 'Assen is the capital of a province whose largest municipality is Emmen. The capital is chosen for other reasons than population, and Assen has held the role since 1814.' },
          { h3: 'Newer wijken', p: 'Beyond the old centre lie wijken such as Pittelo, Marsdijk, Lariks and Kloosterveen, among the residential districts the encyclopaedia names.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'A lost update',
      h2: 'Two updates, one counter, and a result that is wrong',
      intro: 'The table follows two parts of a program, A and B, each adding one to a counter that starts at ten. Both steps are correct on their own. The order in which they run is what goes wrong.',
      body: [
        { kind: 'table', caption: 'A race condition, step by step', head: ['Step', 'Part A does', 'Part B does', 'Counter afterwards'], rows: [
          ['1', 'reads the counter: 10', '', '10'],
          ['2', '', 'reads the counter: 10', '10'],
          ['3', 'adds one and writes 11', '', '11'],
          ['4', '', 'adds one and writes 11', '11, where 12 was expected'],
          ['Fixed', 'reads, adds and writes as one indivisible step', 'waits until A has finished, then does the same', '12']
        ] },
        { kind: 'p', text: 'Neither part made a mistake; each read, added and wrote exactly as written. The fault lies between them. B read the counter before A had written its result, so B\'s write replaced A\'s instead of adding to it, and one update was lost without any error message. Run the same program a thousand times and it may be right nine hundred and ninety-nine times, because the two parts usually happen to run apart; that is precisely what makes the bug so hard to catch. The fixes all do the same thing in different ways: they make read, add and write happen as one step that nothing else can interrupt, whether through an atomic operation, a lock, a database transaction, or a rule in the database itself.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Assen in the national statistics',
      intro: 'Published figures for the municipality, each with its year, then the encyclopaedia history, then the calculations made here.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents since 1995', p: '52,849 in 1995, 67,204 in 2013, 70,392 in 2025 and 70,769 on 1 January 2026, growth the figures site puts at 34 percent. The 2025 count divides into 35,005 men and 35,387 women.' },
          { h3: 'Ages, 2026', p: 'Children under fifteen number 10,233; people from fifteen to twenty-five 8,664; from twenty-five to forty-five 17,085; from forty-five to sixty-five 18,913; and residents aged sixty-five and above 15,874.' },
          { h3: 'Households', p: 'There were 32,767 households in 2025, averaging 2.07 people: 13,339 of one person and 19,428 of more, 10,215 of them with children.' },
          { h3: 'Homes and income', p: '33,401 dwellings in 2025, 19,707 owner-occupied and 13,694 rented, with an estimated average value of 294,000 euro. Income averaged 32,400 euro per resident and 38,900 per income recipient in 2024, and 2.7 percent of residents were in poverty.' },
          { h3: 'Schools and students', p: '33 primary establishments teach 6,171 pupils, around 187 each, and 10 secondary establishments teach 5,454, around 545 each. Institutions in the municipality count 3,067 MBO, 254 higher professional and 480 university students.' },
          { h3: 'Origin and arithmetic', p: 'In 2025, 56,126 residents were of Dutch origin, 3,800 of European and 10,466 of non-European origin; 62,277 were born in the Netherlands and 8,115 abroad. 70,769 minus 52,849 is 17,920. 6,171 over 33 is about 187 and 5,454 over 10 about 545. The groups were each totalled only to confirm they are complete.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no tie to the municipality of Assen, the TT circuit, the Drents Museum or any school in Drenthe, and the page claims none. The statistics are those published for Assen for the years stated. The convent, the dates of 1807, 1809 and 1814, the race on the TT circuit, the Drents Museum and the wijken come from the encyclopaedia entry for Assen, which gives 70,765 residents for 1 January 2026, a different source that is not combined with the statistics.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Make the collision impossible, not unlikely',
      intro: 'A race condition cannot be fixed by making it rarer. The only reliable fixes change the design so that two updates can never silently overwrite each other.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Reproduce it on purpose', p: 'Write a small program where two tasks add to the same counter many thousands of times, and print the total. Run it several times. A total that comes out different on each run is the race, caught in the act.' },
          { h3: '2. Make the step indivisible', p: 'Protect the read-add-write with a lock, use an atomic operation, or let the database do the adding in one statement. Run the test again until the total is right every single time.' },
          { h3: '3. Let the data refuse', p: 'Add rules the storage itself enforces: a seat that can be booked only once, a balance that cannot go below zero. Then even a bug elsewhere cannot store the impossible result.' }
        ] },
        { kind: 'table', caption: 'Races in everyday systems, and what stops them', head: ['Where', 'Two things at once', 'What goes wrong', 'What stops it'], rows: [
          ['A booking system', 'two people choose the last seat', 'the seat is sold twice', 'a rule that each seat has at most one booking'],
          ['A shared document', 'two people save at the same moment', 'one person\'s changes disappear', 'merging changes rather than overwriting the file'],
          ['A bank balance', 'two payments arrive together', 'both are allowed when only one should be', 'a transaction that checks and updates in one step'],
          ['A counter of visits', 'many requests add one at once', 'the count is lower than the truth', 'an atomic increment'],
          ['A team of AI agents', 'two agents edit the same file or record', 'one agent\'s work silently overwrites the other\'s', 'locking, or giving each agent its own piece of work']
        ] },
        { kind: 'callout', h3: 'Why AI agents make race conditions everyone\'s problem', p: 'For a long time race conditions were a specialist concern, met mainly by people writing servers and databases. AI is changing that. Assistants now run several tools at once, teams of agents divide a task and work on it in parallel, and automations fire whenever something changes. Each of these is a set of things happening at the same time, touching shared files, spreadsheets, calendars and records. Two agents that both read a document, both improve it and both save will produce exactly the lost update in the table above, and nothing in either agent\'s output will show that the other\'s work was thrown away. The protections are the classic ones, applied to new actors: give each agent its own piece of work where possible, lock or version what must be shared, and let the storage refuse results that should be impossible. A town that has staged a race every year since 1925 knows that the start line is where things collide. So do good programs.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five rules for anything that happens at once',
      intro: 'For bookings, payments, shared files, counters, background jobs and parallel AI agents. Worked through in the town of the TT.',
      body: [
        { kind: 'table', caption: 'Designing so that collisions lose nothing', head: ['Rule', 'Applied', 'Failure it prevents', 'What you get'], rows: [
          ['One step, not three', 'Use atomic operations or transactions for read, change and write', 'Lost updates', 'Totals that are always right'],
          ['Rules in the storage', 'Enforce uniqueness and limits in the database', 'Double bookings and impossible balances', 'Data that cannot be wrong'],
          ['Merge, do not overwrite', 'Save changes, not whole files, and detect conflicts', 'Vanishing edits', 'Everyone\'s work kept'],
          ['Separate the work', 'Give each worker or agent its own records where possible', 'Needless collisions', 'Parallel work that stays safe'],
          ['Test under load', 'Run many simultaneous requests in testing, not one at a time', 'Races that appear only on busy days', 'Confidence before the rush']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A two-player game in which both players can press to grab the last coin. The child sees both players win it, then changes the game so the coin can be taken only once.' },
          { h3: 'For teenagers', p: 'A Python program with two threads adding to one counter a hundred thousand times each. The teenager watches the total come out wrong, fixes it with a lock, and explains the fix.' },
          { h3: 'For adults', p: 'A shared spreadsheet or form tested with two people saving at once. Adults are often surprised which of their everyday tools quietly keeps only the last save.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s account of the annual race at Assen only as an image, together with standard practice in concurrent programming. It describes no real ticketing or timing system at the TT circuit.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a coin both players grab to agents that cannot overwrite each other',
    intro: 'The starting point is set in the free lesson, from the way the learner handles a real task. Age alone does not set it, and neither does the wijk.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The last coin', p: 'Children make sure only one player can grab a prize.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Step by step', p: 'Learners trace two updates by hand and find the lost one.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Threads and locks', p: 'Teenagers reproduce a race in Python and fix it.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Safe in parallel', p: 'Adults design bookings, files and agents that collide safely.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI agents now work side by side on the same files. Why should a teenager in Assen learn what happens when they collide?',
    intro: 'Because two correct steps at the same moment can still produce a wrong result, and nothing may warn you.',
    p1: 'Modern AI tools increasingly work in parallel: an assistant calls several tools at once, a group of agents splits a job between them, and automations react to every change as it happens. Each of those actors can be individually correct and still lose work, because the problem lies in the timing between them. Two agents that edit the same document, or two automations that update the same record, will sometimes overwrite each other, and neither will report an error. The result simply lacks something that was done.',
    p2: 'A learner who has written two threads, watched their shared counter come out wrong and different on every run, and then fixed it with a lock, understands something that is hard to learn any other way. Deciding what must happen as one indivisible step, what the storage should refuse and how parallel workers divide their work are design decisions that come before any code is generated. An assistant can write the loop. Making sure two copies of it cannot trample each other is a person\'s job.',
    closer: 'So the case for a child in Assen learning to code in 2026 is not the circuit or the capital. It is that someone who knows what happens when two things arrive at once will be needed wherever AI systems run side by side on shared work.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes for every wijk of the capital',
    intro: 'From the Brink and the Centrum out to Kloosterveen and the villages of the Buitengebied, a learner in Assen joins the same class from home.',
    cells: [
      { h3: 'No trip to the centre', p: 'A learner in Peelo and a learner in Assen-West start at the same moment, each from home, with no ride across town on a dark evening.' },
      { h3: 'School words stay Dutch', p: 'The groep, brugklas, vmbo, havo, vwo and profielkeuze of a Drenthe school keep their Dutch names; the lesson around them is in English.' },
      { h3: 'A free, real lesson', p: 'The opening session is taught on an actual task. At the end the teacher suggests a level, a course and a weekly time, and asks for nothing.' },
      { h3: 'Classmates at your level', p: 'Groups hold five to ten learners who have reached the same point. Assen has 10,233 residents under fifteen, and five who match on subject, level and hour are hard to find in one town, so a group may include learners from other countries.' },
      { h3: 'Regio Noord holidays', p: 'Two lessons a week, about eight a month, at one fixed hour, pausing for the regio Noord school holidays that Drenthe keeps.' },
      { h3: 'Time zones on your side', p: 'The teachers are in India, three and a half hours ahead of Assen in summer and four and a half in winter, so late afternoons, evenings and weekend mornings are all possible.' }
    ],
    spec: { title: 'Forty-three schools, seven woonplaatsen, and one online group', p: 'Assen has 33 primary establishments teaching 6,171 pupils and 10 secondary establishments teaching 5,454. Five learners who match on subject, stage and hour at once are far easier to find across every age from 6 to 67 and many countries than inside one municipality.' }
  },

  fees: {
    h2: 'What classes cost in Assen',
    intro: 'The complete price list, stated here.',
    first: 'One real lesson on a real task, ending with a level and a course.',
    group: 'Per month, normally eight lessons, five to ten learners at one level.',
    private: 'Per month, normally eight lessons, one learner, one teacher.',
    closer: 'The fee is one dollar price for every country, with no euro list alongside, so a family in Marsdijk pays exactly what a family in Lariks pays. Nothing is charged until the free lesson has fixed a course and an hour, and then payment is arranged on WhatsApp. The pricing page explains pauses, format changes and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, quoted as written',

  book: {
    h2: 'Tell us where the learner stands',
    intro: 'The first task might be a game where only one player may take the last coin, two updates traced by hand to find the lost one, or two threads fixed with a lock.',
    success: 'Thank you. Your Assen class request has been sent.'
  },

  faq: {
    h2: 'Assen coding class questions',
    intro: 'The capital, its history, its figures, and the lessons.',
    items: [
      { q: 'Which wijken does Assen have?', a: 'The statistics office divides Assen into ten wijken, the Centrum, Lariks, Noorderpark, Pittelo, Assen-Oost, Assen-West, Peelo, Marsdijk, Kloosterveen and the Buitengebied, with 109 buurten across seven woonplaatsen.' },
      { q: 'How many people live in Assen?', a: 'The national count was 70,769 on 1 January 2026, in 32,767 households in 2025. It was 52,849 in 1995, and the figures site puts the growth since then at 34 percent.' },
      { q: 'How did Assen begin?', a: 'In 1259 the convent of Maria in Campis was moved from Coevorden to a sand ridge where the centre of Assen now lies. Assen became a municipality in 1807, a town in 1809 on the orders of Louis Napoleon, and the capital of Drenthe in 1814, the encyclopaedia records.' },
      { q: 'What is the TT?', a: 'The motorcycle race held every year since 1925 on the TT circuit at Assen, according to the encyclopaedia.' },
      { q: 'Where is the Drents Museum?', a: 'On the Brink in Assen, in the former Gouvernementsgebouw, the old provincial government building.' },
      { q: 'How many schools are there in Assen?', a: 'The statistics count 33 primary establishments teaching 6,171 pupils and 10 secondary establishments teaching 5,454, with 3,067 MBO, 254 higher professional and 480 university students at institutions in the municipality. No school is rated here.' },
      { q: 'In what language are lessons given, and when?', a: 'In English, with Dutch school words such as brugklas, havo and vwo left untranslated. The teachers work from India, three and a half hours ahead of Assen in summer and four and a half in winter, so late-afternoon, evening and weekend times are easy to find. The time is agreed in the free lesson, and the regio Noord holidays are observed.' },
      { q: 'Is there a Modern Age Coders classroom in Assen?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Assen coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Drenthe and beyond',
    h2: 'Across Drenthe, up to Groningen, and back to the hub',
    html: 'The largest municipality in the province has its own page at <a class="cg-inline-link" href="/coding-classes-in-emmen">coding classes in Emmen</a>, and all twelve municipalities are gathered on <a class="cg-inline-link" href="/coding-classes-in-drenthe">Drenthe</a>. To the north lies <a class="cg-inline-link" href="/coding-classes-in-groningen">Groningen</a>, and to the south-west <a class="cg-inline-link" href="/coding-classes-in-zwolle">Zwolle</a>, both with pages of their own. For machine learning from the first lesson there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Assen, Drenthe and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-emmen', label: 'Emmen' },
    { href: '/coding-classes-in-drenthe', label: 'Drenthe' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-asn .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.1vw, 2.45rem); }
.cg-root.cg-asn .cg-hero h1 { font-weight: 680; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-asn .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.35rem; }
.cg-root.cg-asn .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-asn .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.018em; }
.cg-root.cg-asn .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-asn .cg-card { border-radius: 6px; border-left: 4px solid var(--cg-accent-soft); }
.cg-root.cg-asn .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-asn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-asn .cg-table td:nth-child(4) { font-weight: 700; }
.cg-root.cg-asn .cg-ladder-col { border-bottom: 3px solid var(--cg-accent-soft); padding-bottom: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Assen, Drenthe: 70,769 residents (statistics, 1 January 2026), 70,392 (2025), 67,204 (2013), 52,849 (1995), growth given by the site as 34 percent; 35,005 men and 35,387 women (2025); ages (2026) 10,233 under fifteen, 8,664 fifteen to twenty-five, 17,085 twenty-five to forty-five, 18,913 forty-five to sixty-five, 15,874 sixty-five or over; 32,767 households (2025) averaging 2.07, 13,339 one-person, 19,428 multi-person, 10,215 with children; 8,345 hectares, 8,188 land, 157 water, published density 860; 33,401 dwellings (2025), 19,707 owner-occupied at 59 percent, 13,694 rented at 41 percent; estimated average value 294,000 euro; income 32,400 euro per resident and 38,900 per recipient (2024); 2.7 percent in poverty; origin (2025) 56,126 Dutch, 3,800 European, 10,466 non-European, 62,277 born in the Netherlands and 8,115 abroad; 7 woonplaatsen, 10 wijken (Centrum, Lariks, Noorderpark, Pittelo, Assen-Oost, Assen-West, Peelo, Marsdijk, Kloosterveen, Buitengebied), 109 buurten; 33 primary establishments with 6,171 pupils, 10 secondary with 5,454; 3,067 MBO, 254 HBO and 480 WO students at institutions. Encyclopaedia: in 1259 the convent Maria in Campis or Marienkamp was moved from Coevorden to a sand ridge where the centre of Assen now lies; an independent municipality in 1807 and a town in 1809 under Louis Napoleon; capital of Drenthe in 1814; the annual motorcycle race on the TT circuit since 1925; the Drents Museum on the Brink in the former Gouvernementsgebouw; residential districts including Kloosterveen, Pittelo, Marsdijk, Assen-Oost and Lariks; infobox 70,765 on 1 January 2026 and 83.45 square kilometres, not combined with the statistics. Regio Noord holidays. The city page teaches race conditions.',
    localProject: 'Make the collision impossible, not unlikely. Assen has hosted a motorcycle race every year since 1925; the page uses the race only as an image for race conditions, bugs in which the outcome depends on which of two simultaneous actions happens first. A step table follows two parts of a program each adding one to a counter at ten: both read 10, both write 11, and one update is lost without error; the fixed row makes read, add and write indivisible and reaches 12. The programming form covers double bookings of a last seat, shared documents that keep only the last save, payments both allowed against one balance, visit counters that undercount, and teams of AI agents or parallel automations that overwrite each other\'s work. The defences are atomic operations and transactions, uniqueness and limits enforced in the storage, merging changes rather than overwriting files, giving each worker or agent its own records, and testing under simultaneous load. Chosen after a case-sensitive check found no page using race condition, concurrency, mutex or atomic. The page describes no real ticketing or timing system at the circuit. Distinct from Lelystad, which concerns single points of failure, and from Gouda, which concerns failures hidden at the joints of a sequential pipeline.',
    requiredMentions: [
      '52,849',
      '67,204',
      '32,767',
      '13,339',
      '10,215',
      '33,401',
      '19,707',
      '13,694',
      '6,171',
      '5,454',
      '15,874',
      'Maria in Campis',
      'Gouvernementsgebouw',
      'Kloosterveen'
    ],
    sources: [
      { claim: 'Gemeente Assen: 70,769 inwoners (2026), 70,392 (2025), 67,204 (2013), 52,849 (1995), growth 34 percent; mannen 35,005, vrouwen 35,387 (2025); 32,767 huishoudens, 13,339 eenpersoons, 19,428 meerpersoons, 10,215 met kinderen, gemiddeld 2.07 (2025); ages 0-15 10,233, 15-25 8,664, 25-45 17,085, 45-65 18,913, 65+ 15,874 (2026); 8,345 hectare, land 8,188, water 157; bevolkingsdichtheid 860; woningvoorraad 33,401, koop 19,707 (59 percent), huur 13,694 (41 percent) (2025); gemiddelde WOZ 294,000 euro; gemiddeld inkomen per inwoner 32,400 and per inkomensontvanger 38,900 euro (2024); personen in armoede 2.7 percent; basisonderwijs 33 vestigingen 6,171 leerlingen, voortgezet onderwijs 10 vestigingen 5,454 leerlingen, MBO 3,067, HBO 254, WO 480; geboren in Nederland 62,277, buiten Nederland 8,115, herkomst Nederland 56,126, Europa 3,800, buiten Europa 10,466 (2025); 7 woonplaatsen, 10 wijken (Centrum, Lariks, Noorderpark, Pittelo, Assen-Oost, Assen-West, Peelo, Marsdijk, Kloosterveen, Buitengebied), 109 buurten.', url: 'https://allecijfers.nl/gemeente/assen/' },
      { claim: 'Assen (encyclopaedia): In 1259 werd het nonnenklooster Maria in Campis of Marienkamp verplaatst van Coevorden naar een dekzandrug op de plek waar nu het centrum van Assen ligt. Werd het in 1807 een zelfstandige gemeente en in 1809 een stad (Louis Napoleon). In 1814 werd Assen hoofdstad van Drenthe. De sinds 1925 jaarlijkse motorrace op het TT-Circuit Assen. Drents Museum op de Brink, in het voormalige Gouvernementsgebouw. Residential districts including Kloosterveen, Pittelo, Marsdijk, Assen-Oost, Lariks. Infobox: 70.765 inwoners (1 januari 2026), 83,45 km2.', url: 'https://nl.wikipedia.org/wiki/Assen' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Visitor numbers, circuit length or any detail of the TT beyond the annual race since 1925. Not in the sentences read.',
      'Any claim about ticketing, timing or booking systems at the circuit. The race is an image only.',
      'The bog bodies or other collections of the Drents Museum. Not in the sources read for this page.',
      'Any comparison of the encyclopaedia figure of 70,765 with the statistics figure of 70,769. Two sources that disagree is the Breda argument.',
      'Anything the Emmen, Drenthe, Groningen and Zwolle pages own, including their figures and arguments.'
    ]
  }
};
