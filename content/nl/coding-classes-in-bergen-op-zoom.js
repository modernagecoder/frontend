'use strict';
// Bergen op Zoom: fortress town of the Markiezaat, known as La Pucelle
// because no enemy had ever taken it, until the French did in 1747.
// 70,691 residents.
// Spine (modest, per the Phase 5 method): a record of never having been
// taken described the attacks that had been tried, not the ones still to
// come. Tests are the same: a passing test suite shows that the cases tried
// work, and says nothing about the cases nobody tried.

module.exports = {
  slug: 'coding-classes-in-bergen-op-zoom',
  code: 'boz',
  accent: '#902A66',
  accentRationale: 'Bergen op Zoom: a deep marquisate crimson, placed by the solver more than twenty-seven units from every page it links to, the Roosendaal brick and the Noord-Brabant rust among them, with an unlinked district as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Bergen op Zoom',
    eyebrow: 'Bergen op Zoom, Noord-Brabant',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Bergen op Zoom, Netherlands',
  title: 'Coding Classes in Bergen op Zoom | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Bergen op Zoom, ages 6 to 67, in the town, Halsteren and Lepelstraat. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the fortress town called La Pucelle, on a page about what a clean test record proves.',
  twitterDescription: 'Bergen op Zoom classes for learners from 6 to 67, live online, first lesson free.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Bergen op Zoom Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Bergen op Zoom, Halsteren and Lepelstraat, taught in English.'
  },

  h1: 'Coding classes in Bergen op Zoom, the town that was never taken, until 1747',
  capsuleQ: 'What are the best coding classes in Bergen op Zoom?',
  capsule: 'Bergen op Zoom had 70,691 residents on 1 January 2026, by the national count, in the town and the villages of Halsteren and Lepelstraat. It received town rights between 1198 and 1212, beat off a siege in 1588, was besieged again in 1622, and, because no enemy power had ever conquered it, became known as La Pucelle, the Maiden. In 1747 the French took it. A record of never having fallen described the attacks that had been tried, not the next one. Software tests work the same way, and the best-known line in the subject says so: testing can show that bugs are present, never that they are absent. Modern Age Coders teaches live online in English for ages 6 to 67; the first lesson is free, and after that a group costs USD 100 a month and one-to-one lessons USD 150.',
  lead: 'For more than a century and a half, the reputation of Bergen op Zoom rested on a record: sieges came, and the town did not fall. The encyclopaedia records the name that record earned, La Pucelle, because no enemy power had ever taken it. Then, during the War of the Austrian Succession, the French besieged it in 1747 and succeeded. Nothing about the earlier defences had been untrue; they really had held. What the record could not say was how the town would fare against an attack it had not yet faced. A programmer\'s test suite is a record of exactly the same kind. Every passing test is a small siege that the code survived, and a long list of green results feels like proof. It is not. It shows that the cases someone thought of work, and it is silent about everything else, which is why good programmers spend as much effort on finding the attack nobody has tried as on counting the ones that failed.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Bergen op Zoom.',

  picks: {
    eyebrow: 'Course picks for Bergen op Zoom',
    h2: 'Four courses for the town of the Markiezenhof',
    intro: 'A child in Halsteren who wants to build a quiz and try to break it, a teenager in Bergen op Zoom-Noord writing a first app with tests, a student in the old centre whose program passes every check and still fails for one user, and an adult in Lepelstraat asked to sign off on a system because it has never gone wrong. Each of them can take the first lesson free.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games a child builds and then attacks, trying every strange move a player might make before anyone else does.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Apps written with tests from the start, including tests designed to fail and inputs nobody expected.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python testing at a professional level: unit tests, generated inputs, property checks and deliberate attempts to break the code.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reports and AI tools judged by what they were tested against, not by how long they have gone without an incident.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bergen op Zoom today',
      h2: 'A fortress, a marquis\'s palace, and two villages to the north',
      intro: 'The municipality has three woonplaatsen and is divided by the statistics office into six wijken and 38 buurten; north of the town lies the village of Halsteren with Lepelstraat, part of the municipality since 1997. It covers 7,997 hectares of land and 1,316 of water, at a published density of 878 residents per square kilometre.',
      body: [
        { kind: 'table', caption: 'A record that held, and the year it did not', head: ['When', 'What the encyclopaedia records', 'What the record showed'], rows: [
          ['Between 1198 and 1212', 'Bergen op Zoom received town rights', 'a date known only within a range'],
          ['1588', 'a siege of the town was beaten off', 'the defences held against that attack'],
          ['1622', 'the Spanish, now under Spinola, besieged the town again', 'another attack, and the town was still called unconquered'],
          ['Before 1747', 'the town was known as La Pucelle, the Maiden, because no enemy power had ever taken it', 'a reputation built from the attacks so far'],
          ['1747', 'the French took the town, in the siege of Bergen op Zoom during the War of the Austrian Succession', 'the attack the record had not yet met']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Markiezenhof', p: 'The Markiezenhof is a Brabant Gothic city palace and was the residence of the lords, and later the marquises, of Bergen op Zoom.' },
          { h3: 'The Gevangenpoort', p: 'The Lievevrouwepoort, or Gevangenpoort, is a remnant of the town wall from the middle of the fourteenth century.' },
          { h3: 'The Sint-Gertrudiskerk', p: 'The church of Sint-Gertrudis suffered heavy damage in a fire in 1972; its tower looks out over the Grote Markt and has its own local name.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'What a test proves',
      h2: 'Green results describe the attacks that were tried',
      intro: 'The left column is a fortress record; the right is a test suite. The pattern is the same: evidence about what was tried, and silence about what was not.',
      body: [
        { kind: 'table', caption: 'A clean record, in a fortress and in code', head: ['The record says', 'What it really shows', 'What it cannot show', 'The honest next step'], rows: [
          ['The town has never been taken', 'every siege so far was beaten off', 'how it would stand against a new kind of attack', 'look for the attack nobody has tried'],
          ['All 200 tests pass', 'the 200 cases someone wrote down work', 'whether case 201 works', 'write the tests most likely to fail'],
          ['The system has never been hacked', 'no attack so far has succeeded, or none has been noticed', 'whether it is secure', 'invite people to try, and log what they do'],
          ['The model scored 98 percent on the test set', 'it handles questions like those in the test set', 'how it handles unusual or hostile input', 'test with strange, rare and adversarial examples'],
          ['The published age groups add up', 'here they add to 70,692', 'the published total is 70,691', 'report both, and do not quietly change either']
        ] },
        { kind: 'p', text: 'The last row is a small, real example from this page. The statistics site gives Bergen op Zoom 70,691 residents on 1 January 2026 and five age groups that add to 70,692. The difference is a single person, almost certainly a matter of how the figures were compiled, and it does not change anything written here. But the check that found it is the point. A page that simply asserted the groups add up would have passed every reader\'s glance; a check that actually added them found the one case where they do not. Edsger Dijkstra, one of the founders of computer science, put the general rule plainly: testing can show the presence of bugs, never their absence. Every test that passes is a siege survived, and the reputation it builds is real, but it describes the past attackers, and the next one may bring something the tests never imagined.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Bergen op Zoom in the national statistics',
      intro: 'The figures published for the municipality, with years; the encyclopaedia history; and the calculations and checks made on this page, including the one that did not add up.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '61,072 in 1995, 66,287 in 2013, 70,194 in 2025 and 70,691 on 1 January 2026. In 2025 the count was 34,971 men and 35,223 women, which add to that year\'s total.' },
          { h3: 'Age groups in 2026', p: '10,321 under fifteen, 7,530 aged fifteen to twenty-five, 17,107 aged twenty-five to forty-five, 19,183 aged forty-five to sixty-five and 16,551 aged sixty-five and over. Added up, these give 70,692, one more than the published total.' },
          { h3: 'Households', p: '32,116 households in 2025, averaging 2.14 people, of which 11,653 are single-person households and 10,258 include children.' },
          { h3: 'Homes and income', p: '32,056 dwellings in 2025, 19,234 owner-occupied and 12,822 rented, which add to the total, with an estimated average value of 333,000 euro. Average income was 33,700 euro per resident and 40,600 per income recipient in 2024, and 3.4 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: '29 primary establishments teach 6,003 pupils, about 207 each, and 9 secondary establishments teach 5,841, about 649 each, with 2,143 MBO students at institutions in the municipality. In 2025, 49,176 residents were of Dutch origin, 6,839 of European and 14,179 of non-European origin, adding to 70,194; 58,731 were born in the Netherlands.' },
          { h3: 'Every check', p: '70,691 minus 61,072 is 9,619. 6,003 over 29 is about 207 and 5,841 over 9 about 649. Men and women, the origin groups and the tenure groups each add to their totals. The age groups add to 70,692 against a published 70,691; both numbers are reported and neither is changed.' }
        ] },
        { kind: 'p', text: 'There is no connection between Modern Age Coders and the municipality of Bergen op Zoom, the Markiezenhof, the Gevangenpoort, the Sint-Gertrudiskerk or any school in the area, and nothing on this page suggests one. The statistics are those published for Bergen op Zoom for the years stated. The town rights, the sieges, the name La Pucelle, the Markiezenhof, the Gevangenpoort, the church and the addition of Halsteren and Lepelstraat in 1997 come from the encyclopaedia entry for Bergen op Zoom, whose infobox gives the town alone 54,440 residents in 2023, a different unit from the municipality and not compared with it.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Attack your own code before anyone else does',
      intro: 'The tests that matter most are the ones written to break the program. A learner can practise the whole discipline on a small function and a willingness to be surprised.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Write the obvious tests', p: 'Check the normal cases first: the inputs the program was built for. When they pass, record that honestly as what it is, evidence about the normal cases and nothing more.' },
          { h3: '2. Hunt for the siege nobody tried', p: 'Now try to break it: empty input, enormous input, negative numbers, strange characters, the same request twice, two requests at once. Let a program generate thousands of random inputs and check a property that must always hold.' },
          { h3: '3. Keep every failure as a test', p: 'When something breaks, fix it and add the breaking case to the test suite, so that the same attack can never succeed twice. The record grows, and it now includes the attacks that once worked.' }
        ] },
        { kind: 'table', caption: 'Ways of looking for the untried attack', head: ['Method', 'What it does', 'What it tends to find', 'What it still cannot promise'], rows: [
          ['Edge-case tests', 'tries the limits: zero, empty, largest, smallest', 'off-by-one errors and missing checks', 'anything between the edges nobody listed'],
          ['Generated inputs', 'feeds thousands of random or mutated inputs', 'crashes on input nobody imagined', 'that the random search found everything'],
          ['Property checks', 'asserts a rule that must hold for every input', 'cases that break a promise the code makes', 'rules nobody thought to state'],
          ['Red-teaming AI', 'people deliberately try to make a model misbehave', 'harmful, false or manipulable answers', 'that the next attacker will be no cleverer'],
          ['A fortress record', 'counts the sieges that failed', 'how strong the known defences were', 'the siege of 1747']
        ] },
        { kind: 'callout', h3: 'Why AI systems need their own sieges', p: 'AI models are usually described by scores on test sets: accuracy, pass rates, benchmark results. Those numbers are useful and exactly as limited as the Maiden\'s reputation. A test set is a collection of attacks someone thought of, and a model can do very well on it while failing on questions phrased a little differently, on rare cases, or on input deliberately designed to mislead it. That is why the companies building such systems employ people whose job is to break them, and why careful teams keep collecting the failures they find and adding them to the tests. For anyone using AI tools at work the lesson is the same as for the programmer: a tool that has never gone wrong in your hands has been tested only against the situations you happened to give it. Before trusting it with something important, try to break it on purpose. Bergen op Zoom was a strong fortress and its defenders were right to be proud. The year 1747 is the reminder that a record describes the past, and the next attack is not obliged to resemble it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for testing that tells the truth',
      intro: 'For programs, spreadsheets, AI tools and anything signed off because it has never failed. Practised in the town once called the Maiden.',
      body: [
        { kind: 'table', caption: 'What to do besides counting passes', head: ['Habit', 'How', 'What it guards against', 'What it yields'], rows: [
          ['Name what was tested', 'State which cases a result covers alongside every pass rate', 'A pass read as proof of everything', 'Claims that match the evidence'],
          ['Test to fail', 'Write tests aimed at the most likely weak points', 'Suites that only confirm what works', 'Bugs found before users find them'],
          ['Generate inputs', 'Use random and mutated inputs with a rule that must always hold', 'Blind spots in hand-written cases', 'Surprises found early'],
          ['Keep the failures', 'Turn every bug that was found into a permanent test', 'The same bug returning later', 'A record that remembers'],
          ['Check the sums', 'Actually add up totals that are supposed to agree', 'Assuming published parts match the whole', 'Discrepancies seen and reported']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A quiz game handed to a friend with one instruction: break it. The child watches what the friend types, fixes each problem, and keeps a list of every trick that worked.' },
          { h3: 'For teenagers', p: 'A small Python function tested first by hand, then with thousands of generated inputs and a rule it must obey. The teenager finds the input that breaks it and turns that into a permanent test.' },
          { h3: 'For adults', p: 'A report or AI tool used at work, tested deliberately with awkward cases before it is trusted. Adults often discover that the tool had simply never been given the input that breaks it.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s account of the sieges of Bergen op Zoom as an image and standard practice in software testing. It makes no claim about why the town fell in 1747 or how its defences were built.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From breaking a friend\'s quiz to red-teaming an AI model',
    intro: 'The starting level is decided in the free lesson by watching the learner on a real task. Age by itself does not decide it, and neither does living in Halsteren rather than the town.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Break my game', p: 'Children invite friends to break their games and fix each trick.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Edge cases', p: 'Learners test empty, huge and negative inputs in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Generated tests', p: 'Teenagers use random inputs and rules to find hidden bugs.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Red team', p: 'Adults try to break AI tools and systems before trusting them.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI model can pass every test it was given. Why should a teenager in Bergen op Zoom look for the test it was not given?',
    intro: 'Because the town was called unconquerable until the year someone tried something new.',
    p1: 'AI systems arrive with impressive scores: benchmark results, pass rates on coding tests, accuracy on large sets of questions. Each score is honest about the questions it contains and says nothing about questions outside it. Models that sail through a test set can be tripped up by a rephrased question, a rare case or input designed to mislead them, and AI assistants that write code will happily produce tests that the code passes, which proves only that the two agree with each other.',
    p2: 'A learner who has handed a working program to a friend with the instruction break it, and watched it fall to an input nobody had imagined, understands testing in a way that no pass rate conveys. Writing the tests most likely to fail, generating strange inputs and keeping every failure as a permanent test are habits a person chooses. A model can run the tests. Imagining the attack nobody has tried is still a human skill.',
    closer: 'So the case for a child in Bergen op Zoom learning to code in 2026 is not the fortress or the palace. It is that someone who looks for the untried attack will be needed wherever AI systems are trusted on the strength of tests they were built to pass.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The same class in the town, Halsteren and Lepelstraat',
    intro: 'From the Grote Markt to the villages north of the town, a learner in Bergen op Zoom joins the same live class from home.',
    cells: [
      { h3: 'No trip into town', p: 'A pupil in Lepelstraat and a pupil near the Markiezenhof start together, each at home, with no drive through the evening dark.' },
      { h3: 'Dutch terms untouched', p: 'Brugklas, groep, vmbo, havo, vwo and profielkeuze stay in Dutch as a Brabant school writes them, and the teaching is in English.' },
      { h3: 'A lesson, free', p: 'The first session is a full lesson on a real task. The teacher then suggests a level, a course and a regular time, without taking any payment details.' },
      { h3: 'Groups by stage', p: 'Five to ten learners at one point in one subject. Bergen op Zoom has 10,321 residents under fifteen, and five who match on subject, level and hour are rare in one municipality, so classmates may join from other countries.' },
      { h3: 'Regio Zuid holidays', p: 'Two lessons a week, about eight a month, at a fixed hour, breaking for the regio Zuid holidays of Noord-Brabant.' },
      { h3: 'Teachers in India', p: 'The teachers are three and a half hours ahead in Dutch summer and four and a half in winter, so late afternoons, evenings and weekend mornings all suit.' }
    ],
    spec: { title: 'Thirty-eight schools, three woonplaatsen, and one group online', p: 'Bergen op Zoom has 29 primary establishments teaching 6,003 pupils and 9 secondary establishments teaching 5,841. Five learners who match on subject, stage and hour at once are far easier to find across all ages from 6 to 67 and many countries than inside one municipality.' }
  },

  fees: {
    h2: 'Fees in Bergen op Zoom',
    intro: 'Three prices, shown in full.',
    first: 'A real lesson on a real task, finishing with a level and a course.',
    group: 'Each month, normally eight lessons, five to ten learners at one level.',
    private: 'Each month, normally eight lessons, one teacher for one learner.',
    closer: 'The dollar fee is the same for every country and there is no euro list, so a household in Halsteren pays exactly what one in the old town pays. Nothing is charged until the free lesson has settled the course and the hour, and then payment is arranged over WhatsApp. The pricing page explains pauses, a change of format and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, reproduced unedited',

  book: {
    h2: 'Tell us how far the learner has got',
    intro: 'The first task might be a quiz a friend is asked to break, a function tested with empty and enormous inputs, or a rule checked against thousands of generated cases.',
    success: 'Thank you. Your Bergen op Zoom class request has been sent.'
  },

  faq: {
    h2: 'Bergen op Zoom coding class questions',
    intro: 'The fortress town, its figures, and the lessons.',
    items: [
      { q: 'What does the municipality of Bergen op Zoom include?', a: 'The town and, to the north, the village of Halsteren with Lepelstraat, part of the municipality since 1997. The statistics office counts three woonplaatsen, six wijken and 38 buurten.' },
      { q: 'How many people live in Bergen op Zoom?', a: 'The national count was 70,691 on 1 January 2026, in 32,116 households in 2025. In 1995 it was 61,072.' },
      { q: 'Why was Bergen op Zoom called La Pucelle?', a: 'Because no enemy power had ever conquered it, according to the encyclopaedia. A siege was beaten off in 1588 and the town was besieged again in 1622, but in 1747, during the War of the Austrian Succession, the French took it.' },
      { q: 'What is the Markiezenhof?', a: 'A Brabant Gothic city palace that was the residence of the lords, and later the marquises, of Bergen op Zoom.' },
      { q: 'When did Bergen op Zoom get town rights?', a: 'Between 1198 and 1212, the encyclopaedia says; the exact year is not given.' },
      { q: 'How many schools are there in Bergen op Zoom?', a: 'The statistics count 29 primary establishments teaching 6,003 pupils and 9 secondary establishments teaching 5,841, with 2,143 MBO students at institutions in the municipality. This page rates no school.' },
      { q: 'What language are lessons in, and at what times?', a: 'English, with Dutch school words such as brugklas, havo and vwo kept as they are. The teachers work from India, three and a half hours ahead of Bergen op Zoom in summer and four and a half in winter, so late-afternoon, evening and weekend times are straightforward. The time is set in the free lesson, and regio Zuid holidays are observed.' },
      { q: 'Is there a Modern Age Coders classroom in Bergen op Zoom?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Bergen op Zoom coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore West-Brabant and beyond',
    h2: 'Next door to Roosendaal, across Brabant, and into Zeeland',
    html: 'The neighbouring town in the Markiezaat has its own page at <a class="cg-inline-link" href="/coding-classes-in-roosendaal">coding classes in Roosendaal</a>, and <a class="cg-inline-link" href="/coding-classes-in-breda">Breda</a>, the largest city of West-Brabant, has one too. Every Brabant page is gathered on <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>, and across the Scheldt the neighbouring province is covered on <a class="cg-inline-link" href="/coding-classes-in-zeeland">Zeeland</a>. For machine learning from the start there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is listed on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Write to us on WhatsApp'
  },

  footerHeading: 'Bergen op Zoom, Noord-Brabant and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-roosendaal', label: 'Roosendaal' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-boz .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.9vw, 2.35rem); }
.cg-root.cg-boz .cg-hero h1 { font-weight: 660; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-boz .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-boz .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-boz .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.017em; }
.cg-root.cg-boz .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.8rem); }
.cg-root.cg-boz .cg-card { border-radius: 7px; border-bottom: 3px solid var(--cg-accent-soft); }
.cg-root.cg-boz .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-boz .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-boz .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-boz .cg-ladder-col { border-top: 3px solid var(--cg-accent-soft); padding-top: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Bergen op Zoom, Noord-Brabant: 70,691 residents (statistics, 1 January 2026), 70,194 (2025), 66,287 (2013), 61,072 (1995); 34,971 men and 35,223 women (2025); ages (2026) 10,321 under fifteen, 7,530 fifteen to twenty-five, 17,107 twenty-five to forty-five, 19,183 forty-five to sixty-five, 16,551 sixty-five or over, summing to 70,692 against a published total of 70,691; 32,116 households (2025) averaging 2.14, 11,653 one-person, 10,258 with children; 9,313 hectares, 7,997 land, 1,316 water, published density 878; 32,056 dwellings (2025), 19,234 owner-occupied at 60 percent, 12,822 rented at 40 percent; estimated average value 333,000 euro; income 33,700 euro per resident and 40,600 per recipient (2024); 3.4 percent in poverty; origin (2025) 49,176 Dutch, 6,839 European, 14,179 non-European, 58,731 born in the Netherlands; 3 woonplaatsen, 6 wijken (including Bergen op Zoom-Noord, Halsteren, Lepelstraat), 38 buurten; 29 primary establishments with 6,003 pupils, 9 secondary with 5,841, 2,143 MBO students at institutions. Encyclopaedia: town rights between 1198 and 1212; the siege of 1588 was beaten off; in 1622 the Spanish under Spinola besieged the town again; known as La Pucelle (the Maiden) because no enemy power had ever conquered it; in the siege of 1747, during the War of the Austrian Succession, the French took the town; the Markiezenhof, a Brabant Gothic city palace, residence of the lords and later marquises; the Lievevrouwepoort or Gevangenpoort, a remnant of the mid-fourteenth-century town wall; the Sint-Gertrudiskerk, heavily damaged by fire in 1972, its tower over the Grote Markt; Halsteren with Lepelstraat part of the municipality since 1997; town infobox 54,440 (2023) and 65.52 square kilometres, not compared with the municipal row. Regio Zuid holidays. The city page teaches that tests show the presence of bugs, never their absence.',
    localProject: 'A clean record describes the attacks that were tried. Bergen op Zoom beat off the siege of 1588, was besieged again in 1622, was called La Pucelle because no enemy power had ever taken it, and was taken by the French in 1747. The programming form is testing: a passing suite shows the cases someone wrote down work and says nothing about the untried case (Dijkstra: testing shows the presence of bugs, never their absence); never having been hacked is not security; a strong test-set score is not robustness to rare or adversarial input; AI-written tests that the code passes prove only agreement. The page carries a real check of its own: the five published age groups sum to 70,692 against a published total of 70,691, and both are reported unchanged. The defences are naming what each pass covers, writing tests aimed at weak points, generated inputs with properties that must hold, keeping every found failure as a permanent test, and adding up totals that are supposed to agree. Chosen after a case-sensitive check found no page using Dijkstra, absence of bugs or track record. Distinct from Woensel-Zuid, where a check cannot see an error that leaves it unchanged, since here the checks are sound but incomplete; from Overijssel, which concerns per-year probabilities over a horizon; and from Segbroek, which checks values against a published ceiling.',
    requiredMentions: [
      '61,072',
      '66,287',
      '32,116',
      '11,653',
      '10,258',
      '32,056',
      '19,234',
      '16,551',
      '70,692',
      'Markiezenhof',
      'Gevangenpoort',
      'Pucelle',
      'Halsteren',
      'Lepelstraat'
    ],
    sources: [
      { claim: 'Gemeente Bergen op Zoom: 70,691 inwoners (2026), 70,194 (2025), 66,287 (2013), 61,072 (1995); mannen 34,971, vrouwen 35,223 (2025); 32,116 huishoudens, 11,653 eenpersoons (36 percent), 10,258 met kinderen (32 percent), gemiddeld 2.14; ages 0-15 10,321, 15-25 7,530, 25-45 17,107, 45-65 19,183, 65+ 16,551 (2026); 9,313 hectare, land 7,997, water 1,316; bevolkingsdichtheid 878; woningvoorraad 32,056, koop 19,234 (60 percent), huur 12,822 (40 percent) (2025); gemiddelde WOZ 333,000 euro; gemiddeld inkomen per inwoner 33,700 and per inkomensontvanger 40,600 euro (2024); personen in armoede 3.4 percent; basisonderwijs 29 vestigingen 6,003 leerlingen, voortgezet onderwijs 9 vestigingen 5,841 leerlingen, MBO 2,143; geboren in Nederland 58,731, herkomst Nederland 49,176, Europa 6,839, buiten Europa 14,179 (2025); 3 woonplaatsen, 6 wijken (including Bergen op Zoom-Noord, Halsteren, Lepelstraat), 38 buurten.', url: 'https://allecijfers.nl/gemeente/bergen-op-zoom/' },
      { claim: 'Bergen op Zoom (encyclopaedia): Tussen 1198 en 1212 kreeg Bergen op Zoom stadsrechten. Beleg van Bergen op Zoom (1588); dit beleg werd uiteindelijk afgeslagen. Inderdaad belegerden de Spanjaarden, nu onder leiding van Spinola, in 1622 de stad opnieuw. Maar tijdens de Oostenrijkse Successieoorlog lukte het de Fransen, bij het Beleg van Bergen op Zoom van 1747, om de stad in te nemen. Omdat de stad nog nooit veroverd was door een vijandelijke mogendheid stond Bergen op Zoom bekend als La Pucelle (de Maagd). Het Markiezenhof is een Brabants Gotisch stadspaleis en was residentie van de Heren en later de Markiezen van Bergen op Zoom. De Lievevrouwepoort of Gevangenpoort, een overblijfsel van de stadsomwalling uit het midden van de 14e eeuw. De Sint-Gertrudiskerk, die in 1972 bij een brand zware schade leed en waarvan de toren uitziet over de Grote Markt. Ten noorden ligt het dorp Halsteren met Lepelstraat dat sinds 1997 onder de gemeente Bergen op Zoom valt. Infobox: 65,52 km2, 54.440 inwoners (2023-01-01).', url: 'https://nl.wikipedia.org/wiki/Bergen_op_Zoom' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Why the town fell in 1747, or how its fortifications were designed. Not in the sentences read.',
      'The outcome of the 1622 siege beyond the town remaining unconquered until 1747.',
      'Any adjustment of the published age groups or total to make them agree. Both are reported as published.',
      'Higher-education student counts. The row read gave identical HBO and WO figures that look unreliable, so neither is used.',
      'Any comparison of the town infobox figure of 54,440 with the municipal count. Town against municipality is the Zeeland argument.',
      'The local name of the church tower, which another page in the series uses for a different tower.',
      'Anything the Roosendaal, Breda, Noord-Brabant and Zeeland pages own, including their figures and arguments.'
    ]
  }
};
