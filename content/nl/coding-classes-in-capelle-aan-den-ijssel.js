'use strict';
// Capelle aan den IJssel: a Rotterdam growth town beside the first of the
// Delta Works. 69,698 residents.
// Spine (modest, per the Phase 5 method): the storm barrier in the Hollandse
// IJssel stays open almost always and lowers its gates only at very high
// water, zero to six times a year. Software has the same device, the circuit
// breaker: when a service it depends on is failing, a program stops sending
// it requests, protects everything behind it, and reopens carefully.

module.exports = {
  slug: 'coding-classes-in-capelle-aan-den-ijssel',
  code: 'cij',
  accent: '#204817',
  accentRationale: 'Capelle aan den IJssel: a deep river-dike green, placed by the solver close to twenty-eight units from every page it links to, the Rotterdam teal and the Zuid-Holland ochre among them, with an unlinked town as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Capelle aan den IJssel',
    eyebrow: 'Capelle aan den IJssel, Zuid-Holland',
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
  routeLabel: 'Capelle aan den IJssel, Netherlands',
  title: 'Coding Classes in Capelle aan den IJssel | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Capelle aan den IJssel, ages 6 to 67, from Schollevaar to Oostgaarde and Fascinatio. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics beside the first Delta Work, on a page about barriers that close when a failure is coming.',
  twitterDescription: 'Capelle aan den IJssel classes, ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Capelle aan den IJssel Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Capelle aan den IJssel, taught in English.'
  },

  h1: 'Coding classes in Capelle aan den IJssel, beside the barrier that closes zero to six times a year',
  capsuleQ: 'What are the best coding classes in Capelle aan den IJssel?',
  capsule: 'Capelle aan den IJssel, 69,698 residents on 1 January 2026 in the national count, grew from the 1950s onwards as wijk after wijk was built, largely for people moving out of Rotterdam. On its river edge stands the oldest of the Delta Works, the storm surge barrier in the Hollandse IJssel, begun in January 1954 and opened on 22 October 1958. It stays open almost all the time and lowers its gates only at very high water, zero to six times a year. Programs that depend on other systems need exactly such a barrier. It is called a circuit breaker: when a service downstream starts failing, the program stops sending it requests, keeps the rest of the system working, and reopens carefully once the danger is past. Lessons are taught live and online, in English, for learners aged 6 to 67; the first costs nothing, and a group place then costs USD 100 a month, private tuition USD 150.',
  lead: 'Most of the time the barrier in the Hollandse IJssel does nothing at all, and that is the point. Ships pass, the river flows, the Algerabrug carries its traffic. When the water rises very high, the gates come down and close the river completely, so that the flood outside cannot reach the land behind. When the danger passes they rise again. Software faces the same situation whenever it depends on something it does not control. A payment provider slows to a crawl, a database stops answering, an AI service times out. A program that keeps sending requests to a failing service ties itself up waiting, piles up retries, and can bring down everything around it. A circuit breaker watches for failures, and when they pass a threshold it closes the way, answering at once with a sensible fallback instead of waiting. After a pause it lets a single test request through; if that succeeds, normal traffic resumes. Capelle, beside a barrier that closes only a handful of times a year, is a good place to learn why the rarely used protection must be built as carefully as the everyday path.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Capelle aan den IJssel.',

  picks: {
    eyebrow: 'Course picks for Capelle aan den IJssel',
    h2: 'Four courses for the town beside the first Delta Work',
    intro: 'A child in Schollevaar building a game that keeps running when something goes wrong, a teenager in Oostgaarde whose app depends on a weather service, a student in Middelwatering connecting a program to an AI model that sometimes stops answering, and an adult in Capelle-West whose team relies on three outside systems every day. For each of them the first lesson is free.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games that carry on sensibly when a piece fails, so a child learns early to plan for the day something breaks.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Apps that call outside services with a breaker in front, showing a helpful message instead of freezing when a service is down.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python integrations with time limits, back-off, fallbacks and circuit breakers around every external and AI call.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Workflows mapped for the outside systems they rely on, with a plan for what happens while each one is down.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Capelle today',
      h2: 'A growth town of the 1950s, a metro since 1994, and the oldest Delta Work',
      intro: 'Capelle is a single woonplaats of nine wijken and 79 buurten; among the wijken the encyclopaedia names Schollevaar, Schenkel, Oostgaarde, Middelwatering, Capelle-West, \'s-Gravenland and Fascinatio, together with a business park. On 1,414 hectares of land and 126 of water it is one of the densest municipalities in the series, at a published 4,853 residents per square kilometre.',
      body: [
        { kind: 'table', caption: 'The storm surge barrier in the Hollandse IJssel, from its encyclopaedia entry', head: ['Fact', 'As the entry gives it'], rows: [
          ['Work began', 'January 1954, less than a year after the flood disaster of 1953'],
          ['Opened', '22 October 1958, the oldest structure of the Delta Works'],
          ['When it closes', 'at very high water the gates are lowered to shut the river completely'],
          ['How often', 'zero to six times a year'],
          ['The gates', 'two separately movable gates between lifting towers, whose independent operation limits the chance of failure; the second was only added in 1976, for budget reasons'],
          ['For shipping', 'the Algerasluis beside it, 23.9 metres wide and 139 metres long'],
          ['For traffic', 'the Algerabrug between the gates, opened at the same time, with three lanes including one that changes direction']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Built for Rotterdammers', p: 'From the 1950s onwards, the encyclopaedia says, wijk after wijk was built in Capelle, mostly occupied by people from Rotterdam.' },
          { h3: 'On the metro', p: 'Since 1994 the east-west metro line from Rotterdam has had a branch to the centre of Capelle aan den IJssel.' },
          { h3: 'Beside the bridge', p: 'East of the Van Brienenoord bridge lies the business park, home among other things to the sewage treatment works, as the entry notes.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Open, closed, testing',
      h2: 'A barrier for code, in three states',
      intro: 'A software circuit breaker is usually described as having three states. The table sets each one beside the barrier in the river, which the page uses as an image and not as a technical description.',
      body: [
        { kind: 'table', caption: 'The three states of a circuit breaker', head: ['State', 'What the program does', 'When it changes', 'The barrier as an image'], rows: [
          ['Normal', 'passes every request to the outside service', 'when failures pass a set threshold, for example five in thirty seconds', 'gates up, river flowing, ships and traffic moving'],
          ['Tripped', 'answers at once with a fallback and sends nothing to the failing service', 'after a cooling-off period', 'gates down at very high water, the land behind protected'],
          ['Testing', 'lets one trial request through', 'back to normal if it succeeds, back to tripped if it fails', 'the gates rise once it is safe to let the river through again']
        ] },
        { kind: 'p', text: 'Software engineers confusingly call the normal state closed and the tripped state open, after electrical breakers, where a closed circuit carries current; the table avoids those words because a river barrier works the other way round. What matters is the behaviour. Without a breaker, a program facing a failing service waits for each request to time out, retries, waits again, and ties up its own resources until it fails too, spreading the outage outwards. With a breaker, the failure stays contained: users get a fast, honest answer such as try again in a minute, the struggling service gets breathing room to recover, and the rest of the system keeps working. The barrier in the Hollandse IJssel protects the land behind it by accepting that, for a few hours, the river is closed. A breaker makes the same trade in code.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Capelle in the national figures',
      intro: 'The statistics published for the municipality, year by year, then the history from the encyclopaedia, then what this page worked out.',
      body: [
        { kind: 'table', caption: 'Capelle aan den IJssel in the statistics', head: ['Measure', 'Figure', 'Year'], rows: [
          ['Residents', '60,500; 66,024; 68,624; 69,698', '1995, 2013, 2025, 2026'],
          ['Men and women', '33,268 and 35,356', '2025'],
          ['Under fifteen, sixty-five and over', '10,749 and 15,764', '2026'],
          ['Aged 15 to 25, 25 to 45, 45 to 65', '7,903; 17,914; 17,368', '2026'],
          ['Households, single-person, with children', '32,486; 13,084; 10,821', '2025'],
          ['Dwellings, owner-occupied, rented', '31,893; 17,222; 14,671', '2025'],
          ['Primary establishments and pupils', '20 and 5,439', 'latest'],
          ['Secondary establishments and pupils', '5 and 3,114', 'latest']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Income and value', p: 'Average income was 34,500 euro per resident and 42,300 per income recipient in 2024, and the estimated average home value 362,000 euro in 2025. The site reports 6.9 percent of households at or around the social minimum, a different measure from the poverty share used on some other pages.' },
          { h3: 'Origin', p: 'In 2025, 39,311 residents were of Dutch origin, 6,178 of European and 23,135 of non-European origin, together making up the 2025 total of 68,624; 52,422 were born in the Netherlands. The site also records 221 MBO students at institutions in the town.' },
          { h3: 'Worked out here', p: '69,698 minus 60,500 is 9,198. 5,439 pupils over 20 establishments is about 272, and 3,114 over 5 about 623. Every group in the table was totalled against its whole, and each one matches.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of the municipality of Capelle aan den IJssel, Rijkswaterstaat, the metro operator and every school in the town, and the page implies no link with any of them. The statistics are those published for Capelle for the years shown. The growth of the town, the metro, the wijken and the business park come from the encyclopaedia entry for Capelle aan den IJssel, which gives 69,644 residents for 1 January 2026 from a different source; the barrier, its gates, the Algerasluis and the Algerabrug come from the entry for the barrier.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Build the breaker, then trip it on purpose',
      intro: 'A learner can write a working circuit breaker in an afternoon, and learn more from switching off the service behind it than from any diagram.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Wrap the outside call', p: 'Put every call to an outside service behind one small function that counts failures and remembers its state. Give each call a time limit, so a slow service counts as a failed one.' },
          { h3: '2. Decide the thresholds', p: 'Choose how many failures in how long should trip it, how long it stays tripped, and what the fallback says. Write the numbers down, because they are design decisions, not accidents.' },
          { h3: '3. Pull the plug', p: 'Switch the outside service off while the program runs and watch: requests should fail fast, users should see the fallback, and when the service returns, one trial request should reopen the way.' }
        ] },
        { kind: 'table', caption: 'Where breakers protect everyday systems', head: ['System', 'What it depends on', 'What happens without a breaker', 'What the breaker does instead'], rows: [
          ['A shop website', 'a payment provider', 'checkout pages hang and the whole site slows down', 'shows a clear message and keeps the rest of the shop working'],
          ['A travel app', 'an outside timetable service', 'every screen waits on a service that is down', 'shows the last known timetable, marked as possibly out of date'],
          ['A chatbot built on an AI model', 'the model provider', 'requests pile up, costs rise, users wait', 'switches to a simpler answer or a queue until the model recovers'],
          ['A reporting job', 'a database under strain', 'repeated heavy queries make the strain worse', 'stops querying, lets the database recover, tries once later'],
          ['The Hollandse IJssel', 'the river', 'extreme high water reaches the land', 'the gates close, zero to six times a year']
        ] },
        { kind: 'callout', h3: 'Why AI features need circuit breakers most', p: 'Applications built on AI services depend on something far away, expensive and not always available. Model providers have busy periods, rate limits and outages, and a single request can take many seconds even when all is well. An app that simply waits and retries whenever a model is slow can multiply its own costs, frustrate every user at once and even add to the overload that caused the problem. A circuit breaker turns that chaos into a decision made in advance: after this many failures, stop asking, tell users plainly, fall back to something simpler, and test gently before resuming. The hard part is not the code but the choices, which a person has to make: how many failures are enough to trip, what the fallback should say, and how the breaker will be tested, because a protection used only a few times a year is exactly the kind nobody checks until the day it is needed. Rijkswaterstaat built the barrier with two independent gates to limit the chance of failure, and the lesson carries over: the rarely used path deserves the same care as the everyday one.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five rules for depending on systems you do not control',
      intro: 'For payment providers, outside data services, databases under load and AI models. Worked through beside the first Delta Work.',
      body: [
        { kind: 'table', caption: 'Failing safely when something outside fails', head: ['Rule', 'Put into practice', 'Hazard removed', 'Outcome'], rows: [
          ['Time-limit every call', 'Give each outside request a maximum wait', 'Threads stuck waiting forever', 'Slowness treated as failure'],
          ['Back off, do not hammer', 'Space retries out and cap how many there are', 'Retries that deepen an outage', 'A service allowed to recover'],
          ['Trip on a threshold', 'Stop calling after a set number of recent failures', 'One failure spreading to the whole system', 'Contained outages'],
          ['Answer with a fallback', 'Decide in advance what users see while the breaker is tripped', 'Frozen screens and vague errors', 'Honest, fast responses'],
          ['Drill the rare path', 'Switch services off in testing and watch the breaker work', 'A protection that fails when finally needed', 'Confidence in the day it matters']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A game that asks a helper character for hints. When the helper stops answering, the child makes the game say the helper is resting and carry on, instead of freezing.' },
          { h3: 'For teenagers', p: 'A small Python breaker around a fake weather service the teenager can switch on and off. They log every state change and tune the thresholds until the behaviour feels right.' },
          { h3: 'For adults', p: 'A list of the outside systems a team depends on, each with a written answer to what happens while it is down. Adults often find several with no answer at all.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s description of the storm surge barrier as an image, together with standard practice in building reliable software. It says nothing about how the barrier is actually operated or decided upon.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a helper who rests to a breaker around an AI model',
    intro: 'A learner\'s starting point comes out of the free lesson, from watching them tackle something real. It is not fixed by age, nor by which wijk the family lives in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The resting helper', p: 'Children make a game carry on when one part stops answering.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Time limits', p: 'Learners give every outside call a maximum wait in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'A working breaker', p: 'Teenagers build a breaker and trip it by switching a service off.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Failing safely', p: 'Adults plan what each system does while its suppliers are down.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI feature is only as reliable as the service behind it. Why should a teenager in Capelle learn to build a barrier?',
    intro: 'Because the town sits beside one that closes only a few times a year and has to work every time it does.',
    p1: 'More and more apps call an AI model for part of their work: a summary, a suggestion, an answer. That model runs somewhere else, shared with millions of other users, and it will sometimes be slow, rate-limited or down. An assistant asked to add an AI feature to an app will generally write the happy path, the request that works, because that is what the prompt described. What happens on the bad afternoon, when every request hangs for thirty seconds, is left for later, which usually means for the users.',
    p2: 'A learner who has built a breaker, switched off the service behind it and watched the app answer instantly with a sensible message instead of freezing understands resilience in a way that no description conveys. Choosing the thresholds, the fallback and the drill are decisions a person has to make before the code is written. The model can generate the wrapper. Deciding how a system should behave on its worst day stays with people.',
    closer: 'So the case for a child in Capelle aan den IJssel learning to code in 2026 is not the metro or the business park. It is that someone who plans for the day a service fails will be needed wherever products are built on AI services that no one in the building controls.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons reach Capelle homes',
    intro: 'Capelle packs almost seventy thousand people into fourteen square kilometres of land, and every one of its wijken is equally close to a lesson that runs on a laptop.',
    cells: [
      { h3: 'The laptop is the classroom', p: 'Whether home is in Schenkel or \'s-Gravenland, the class begins on screen at the agreed minute. Nobody takes the metro in for it, and nobody waits to be picked up after.' },
      { h3: 'Dutch school words, English lesson', p: 'The terms a Capelle school uses, from groep and brugklas to vmbo, havo, vwo and the profielkeuze, stay in Dutch; the explaining is done in English.' },
      { h3: 'What the free hour includes', p: 'A complete lesson on a genuine problem, watched by the teacher, followed by a suggested level, a course and a regular time. There is no card to enter and nothing to sign.' },
      { h3: 'How groups are formed', p: 'Each group is five to ten learners at one stage of one subject. Capelle has 10,749 residents under fifteen, and five of them matching on subject, level and hour is rare, so groups also draw on learners in other countries.' },
      { h3: 'The regio Midden calendar', p: 'Lessons run twice a week, about eight times a month, at one fixed hour, and stop for the regio Midden school holidays that Zuid-Holland follows.' },
      { h3: 'Why evenings work', p: 'The teaching team is based in India, three and a half hours ahead in the Dutch summer and four and a half in winter, which leaves late afternoons, evenings and weekend mornings open all year.' }
    ],
    spec: { title: 'Twenty-five schools in a compact town, and one group online', p: 'Capelle has 20 primary establishments teaching 5,439 pupils and 5 secondary establishments teaching 3,114. Assembling five learners who share a subject, a stage and an hour is far easier across all ages from 6 to 67 and many countries than inside one town, however close together its wijken are.' }
  },

  fees: {
    h2: 'Capelle fees in full',
    intro: 'Everything a family pays is listed below.',
    first: 'A genuine lesson on a genuine task, closing with a level and the course to match.',
    group: 'Monthly, usually eight lessons, in a group of five to ten learners at one level.',
    private: 'Monthly, usually eight lessons, with a teacher for one learner only.',
    closer: 'Every country pays one dollar price, and no euro list sits beside it, so a household in Fascinatio pays what a household in Schollevaar pays. Payment starts only after the free lesson has fixed the course and the hour, and it is arranged on WhatsApp. For breaks, a change of format or missed lessons, the pricing page has the details.'
  },

  reviewsH2: 'Six Google reviews, quoted in their authors\' words',

  book: {
    h2: 'What can the learner do today?',
    intro: 'The first task might be a game whose helper can go quiet without the game freezing, a time limit on an outside call, or a small circuit breaker tripped by switching a service off.',
    success: 'Thank you. Your Capelle aan den IJssel class request has been sent.'
  },

  faq: {
    h2: 'Capelle aan den IJssel coding class questions',
    intro: 'The town, its barrier, its figures, and the lessons.',
    items: [
      { q: 'Which wijken does Capelle aan den IJssel have?', a: 'The municipality is one woonplaats with nine wijken and 79 buurten. The encyclopaedia names Schollevaar, Schenkel, Oostgaarde, Middelwatering, Capelle-West, \'s-Gravenland and Fascinatio, along with a business park.' },
      { q: 'How many people live in Capelle aan den IJssel?', a: 'The national count was 69,698 on 1 January 2026, in 32,486 households in 2025. It was 60,500 in 1995.' },
      { q: 'How did Capelle grow?', a: 'From the 1950s onwards wijk after wijk was built, mostly lived in by people from Rotterdam, according to the encyclopaedia. Since 1994 the east-west metro line has had a branch to the centre of Capelle.' },
      { q: 'What is the barrier in the Hollandse IJssel?', a: 'The storm surge barrier begun in January 1954 and opened on 22 October 1958, the oldest structure of the Delta Works. At very high water its gates are lowered to close the river completely, which happens zero to six times a year.' },
      { q: 'Why does the barrier have two gates?', a: 'The encyclopaedia says the two gates move separately and their independent operation limits the chance of failure. The second gate was only added in 1976, for budget reasons. Beside the barrier are the Algerasluis for shipping and the Algerabrug for road traffic.' },
      { q: 'How many schools are there in Capelle?', a: 'The statistics count 20 primary establishments teaching 5,439 pupils and 5 secondary establishments teaching 3,114, with 221 MBO students at institutions in the town. No school is rated on this page.' },
      { q: 'Are the lessons in English, and what times are possible?', a: 'Yes, lessons are in English, and school words like brugklas, havo and vwo stay Dutch. With the teachers in India, three and a half hours ahead of Capelle in summer and four and a half in winter, late-afternoon, evening and weekend slots are all realistic. The slot is chosen in the free lesson, and the regio Midden holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Capelle aan den IJssel?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Capelle aan den IJssel coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Rijnmond and beyond',
    h2: 'Along the metro into Rotterdam, and out to the province',
    html: 'The metro branch that reached Capelle in 1994 runs into the city covered by <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, whose district pages include <a class="cg-inline-link" href="/coding-classes-in-prins-alexander">Prins Alexander</a>, next door, and <a class="cg-inline-link" href="/coding-classes-in-ijsselmonde">IJsselmonde</a>, across the river. Every town and city in the province with a page is gathered on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. For machine learning straight away there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the full series is listed on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Send a WhatsApp message'
  },

  footerHeading: 'Capelle aan den IJssel, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-cij .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.6vw, 2.15rem); }
.cg-root.cg-cij .cg-hero h1 { font-weight: 630; letter-spacing: -0.016em; line-height: 1.09; }
.cg-root.cg-cij .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1.15rem; }
.cg-root.cg-cij .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cij .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.014em; }
.cg-root.cg-cij .cg-grid-3 { gap: clamp(1.05rem, 2.4vw, 1.9rem); }
.cg-root.cg-cij .cg-card { border-radius: 11px; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-cij .cg-table caption { letter-spacing: 0.045em; font-weight: 700; }
.cg-root.cg-cij .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cij .cg-table td:first-child { font-weight: 700; }
.cg-root.cg-cij .cg-ladder-col { border-bottom: 3px solid var(--cg-accent-soft); padding-bottom: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Capelle aan den IJssel, Zuid-Holland: 69,698 residents (statistics, 1 January 2026), 68,624 (2025), 66,024 (2013), 60,500 (1995); 33,268 men and 35,356 women (2025); ages (2026) 10,749 under fifteen, 7,903 fifteen to twenty-five, 17,914 twenty-five to forty-five, 17,368 forty-five to sixty-five, 15,764 sixty-five or over; 32,486 households (2025) averaging 2.09, 13,084 one-person, 10,821 with children; 1,540 hectares, 1,414 land, 126 water, published density 4,853; 31,893 dwellings (2025), 17,222 owner-occupied at 54 percent, 14,671 rented at 46 percent; estimated average value 362,000 euro; income 34,500 euro per resident and 42,300 per recipient (2024); 6.9 percent of households at or around the social minimum; origin (2025) 39,311 Dutch, 6,178 European, 23,135 non-European, 52,422 born in the Netherlands; 1 woonplaats, 9 wijken, 79 buurten; 20 primary establishments with 5,439 pupils, 5 secondary with 3,114, 221 MBO students at institutions. Encyclopaedia (Capelle): from the 1950s wijk after wijk was built, mostly occupied by Rotterdammers; the east-west metro line has had a branch to the centre since 1994; wijken Schollevaar, Schenkel, Oostgaarde, Middelwatering, Capelle-West, s-Gravenland, Fascinatio and a business park east of the Van Brienenoord bridge with the sewage treatment works; infobox 69,644 on 1 January 2026 and 15.40 square kilometres, not combined with the statistics. Encyclopaedia (the barrier): dredging began in January 1954, less than a year after the flood disaster; opened 22 October 1958; the oldest structure of the Delta Works; at very high water the gates are lowered to close the river completely; it closes zero to six times a year; two separately movable gates between lifting towers, whose independent operation limits the chance of failure, the second added only in 1976 for budget reasons; the Algerasluis beside it, 23.9 metres wide and 139 long; the Algerabrug between the gates, opened at the same time, three lanes including a reversible lane. Regio Midden holidays. The city page teaches the circuit breaker pattern.',
    localProject: 'Close the way when a failure is coming, and reopen carefully. The storm surge barrier in the Hollandse IJssel stays open almost always and lowers its gates at very high water, zero to six times a year, protecting the land behind at the cost of closing the river for a while. The page uses it as an image for the software circuit breaker, described in three states (normal, tripped, testing) and avoiding the electrical terms closed and open, which run the other way round from a river barrier. Without a breaker, calls to a failing service wait, retry and tie up resources until the caller fails too; with one, failures are contained, users get a fast honest fallback and the service gets time to recover. The programming form covers payment providers, outside data services, databases under strain and above all AI model providers with slow periods, rate limits and outages. The defences are time limits on every call, backed-off and capped retries, a trip threshold, a planned fallback, and drills that switch services off in testing. Chosen after a case-sensitive check found no page using circuit breaker, kill switch or fail fast. The page says nothing about how the barrier is actually operated. Distinct from Lelystad, which removes single points of failure by adding second routes and mentions timeouts only as one habit, from Assen, which concerns simultaneous updates, and from Bergen op Zoom, which concerns what tests prove.',
    requiredMentions: [
      '60,500',
      '66,024',
      '32,486',
      '13,084',
      '31,893',
      '17,222',
      '14,671',
      '5,439',
      '3,114',
      '15,764',
      'Schollevaar',
      'Middelwatering',
      'Algerabrug',
      'Algerasluis'
    ],
    sources: [
      { claim: 'Gemeente Capelle aan den IJssel: 69,698 inwoners (2026), 68,624 (2025), 66,024 (2013), 60,500 (1995); mannen 33,268, vrouwen 35,356 (2025); ages 0-15 10,749, 15-25 7,903, 25-45 17,914, 45-65 17,368, 65+ 15,764 (2026); 32,486 huishoudens, 13,084 eenpersoons, 10,821 met kinderen, gemiddeld 2.09 (2025); 1,540 hectare, land 1,414, water 126; bevolkingsdichtheid 4,853; woningvoorraad 31,893, koop 17,222 (54 percent), huur 14,671 (46 percent) (2025); gemiddelde WOZ 362,000 euro; 1 woonplaats, 9 wijken, 79 buurten; gemiddeld inkomen per inwoner 34,500 and per inkomensontvanger 42,300 euro (2024); 6.9 percent huishoudens rond of onder het sociaal minimum; basisonderwijs 20 vestigingen 5,439 leerlingen, voortgezet onderwijs 5 vestigingen 3,114 leerlingen, MBO 221; herkomst Nederland 39,311, Europa 6,178, buiten Europa 23,135, geboren in Nederland 52,422 (2025).', url: 'https://allecijfers.nl/gemeente/capelle-aan-den-ijssel/' },
      { claim: 'Capelle aan den IJssel (encyclopaedia): Vanaf de jaren vijftig werd wijk na wijk gebouwd, die veelal werden bevolkt door Rotterdammers. De oost-westlijn heeft sinds 1994 een vertakking naar het centrum van Capelle aan den IJssel. De gemeente is verdeeld in een aantal wijken: Schollevaar, Schenkel, Oostgaarde, Middelwatering, Capelle-West, s-Gravenland, Fascinatio en het bedrijvenpark. Ten oosten van de Van Brienenoordbrug bevindt zich onder meer de afvalwaterzuiveringsinstallatie. Infobox: 69.644 inwoners (1 jan 2026), 15,40 km2.', url: 'https://nl.wikipedia.org/wiki/Capelle_aan_den_IJssel' },
      { claim: 'Hollandsche IJsselkering (encyclopaedia): In januari 1954, nog geen jaar na de Watersnoodramp, werd begonnen met de eerste baggerwerkzaamheden; geopend 22 oktober 1958; het oudste kunstwerk van de Deltawerken. Bij zeer hoog water worden de schuiven neergelaten om de rivier volledig af te sluiten. De kering in de Hollandse IJssel sluit nul tot zes keer per jaar. Twee afzonderlijk beweegbare schuiven tussen heftorens; de onafhankelijke bediening van de schuiven beperkt de faalkans. Om budgettaire redenen is de tweede schuif pas in 1976 aangebracht. De Algerasluis, breedte 23,9 meter, lengte 139 meter. De Algerabrug ligt tussen de schuiven, is tegelijk in gebruik genomen en telt drie rijstroken, waaronder een wisselstrook.', url: 'https://nl.wikipedia.org/wiki/Stormvloedkering_Hollandse_IJssel' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The water level at which the barrier closes, or how closures are decided. The source says only very high water.',
      'Any comparison of the 6.9 percent of households at or around the social minimum with poverty shares on other pages. Different measures under similar labels is the Alphen argument.',
      'Any claim that the barrier or its second gate ever failed or was needed urgently.',
      'The ParkShuttle or any feature of the business park beyond the sewage works named in the source.',
      'Any comparison of the encyclopaedia figure of 69,644 with the statistics figure of 69,698. Two sources that disagree is the Breda argument.',
      'Anything the Rotterdam, Prins Alexander, IJsselmonde and Zuid-Holland pages own, including their figures and arguments.'
    ]
  }
};
