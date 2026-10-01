'use strict';
// Haywards Heath (cg- town page, UK cluster Phase 10, towns band B, row 558). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: should an AI agent keep asking whether
// something has changed, or wait to be told? (polling vs event-driven notification: poll interval, detection delay,
// requests spent, short events missed, reading the latest value vs reading everything since the last check.)
// Local data (read 1 October 2026): Environment Agency hydrology service, rain gauge E9350, which the Agency names
// "Haywards Heath" (opened 15 October 2001, 50.9993 N 0.1437 W), 15-minute rainfall totals for calendar year 2025:
// 35,040 readings, 35,000 flagged Unchecked and 40 Good; none missing. Our run (scratchpad hwh/poll.py): 2,330 wet
// quarter-hours; 724 wet spells (runs of consecutive wet quarter-hours); 363 of them a single quarter-hour; longest 43.
// Poller that reads only the latest 15-minute value every P minutes: P 30: 17,520 requests, 16,358 dry, 188 spells
// never seen (27.2 mm); P 60: 8,760, 8,181, 357 (100.3 mm); P 120: 4,380, 4,089, 496 (194.4 mm); P 240: 2,190, 2,042,
// 590; P 360: 1,460, 1,361, 629 (452.5 mm). Mean delay over spells it did see: 5.3 / 14.7 / 27.0 / 45.9 / 55.4 min.
// Poller that reads every reading since its last check: never misses; mean delay 7.8 / 23.4 / 52.9 / 113.4 / 170.9 min.
// Event-driven: one message at the start and one at the end of each spell, 1,448 in the year.
// Lesson family: polling vs event-driven notification (webhooks, subscriptions). Screened: polling, webhook, pub/sub,
// publish-subscribe, event-driven, subscribe: 0 hits in cluster pages or dossiers (course syllabi only); claimed.
// West Sussex county page, Crawley, Worthing and Brighton families checked: none about polling.
// Place facts: Mid Sussex TS001 152,566. ONS 2021 BUA (published): Haywards Heath 40,185. Wards of the RH16 postcodes
// that postcodes.io places in the BUA: Haywards Heath Lucastes & Bolnore, Bentswood & Heath, Ashenground, North,
// Franklands, and Lindfield (Lindfield is also a gazetteer suburban area whose nearest postcode is in the BUA).
// Cuckfield and Scaynes Hill have their own BUAs; left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HAYWARDS HEATH', label: 'Haywards Heath', blurb: 'Vibe coding and AI agents classes for Haywards Heath, with a project that asks whether an agent should keep checking a rain gauge or wait to be told.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-haywards-heath',
  code: 'hwh',
  accent: '#45459C',
  accentRationale: 'Haywards Heath: a muted rain blue (8.13:1 contrast on white), chosen by hand and kept clear of the Sussex pages',
  pageType: 'city',
  place: {
    name: 'Haywards Heath',
    eyebrow: 'Haywards Heath, Mid Sussex, West Sussex',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Mid Sussex' },
      { type: 'AdministrativeArea', name: 'West Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-classes-in-west-sussex', name: 'West Sussex' }],
  nav: [
    { label: 'West Sussex', href: '/coding-classes-in-west-sussex' },
    { label: 'Crawley', href: '/online-coding-and-python-classes-in-crawley' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Haywards Heath, Mid Sussex',
  title: 'Vibe Coding and AI Agents Classes in Haywards Heath | 6 to 67',
  description: 'Live online vibe coding and AI agents classes for Haywards Heath, Lindfield and Mid Sussex, ages 6 to 67, with Python and maths. Your first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Haywards Heath, with a project on polling, notifications and a real rain gauge.',
  twitterDescription: 'Haywards Heath vibe coding and AI agents lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Haywards Heath',
    description: 'Online vibe coding, AI agents, Python and maths lessons for children, teenagers and adults in Haywards Heath and Mid Sussex, built around real data the learner questions.'
  },

  h1: 'Vibe coding and AI agents classes in Haywards Heath',
  capsuleQ: 'Where are the best vibe coding and AI agents classes for Haywards Heath?',
  capsule: 'The Haywards Heath built-up area held 40,185 usual residents in the ONS 2021 census, inside a Mid Sussex district of 152,566. Its postcodes fall in the Lucastes and Bolnore, Bentswood and Heath, Ashenground, Franklands and Haywards Heath North wards, with Lindfield alongside. Modern Age Coders teaches vibe coding, AI agents, Python, coding and maths to Haywards Heath learners from age six to 67. Lessons are live video classes with tutors in India, either one-to-one or in groups of five to ten at a matched level. Every learner starts with a free trial and leaves it with a course suggestion. The local project takes a year of quarter-hour readings from the Environment Agency rain gauge named Haywards Heath and asks a design question every agent builder meets: should the agent keep checking, or wait to be told? After the trial, a group place is USD 100 a month and private tuition USD 150 a month.',
  lead: 'An AI agent that has to react to the world has two choices. It can keep asking whether anything has changed, which programmers call polling, or it can sit quietly and wait for a message saying that something did. Most beginners write the first kind, because a loop with a sleep in it is easy. It also quietly burns requests, answers late and, if it only looks at the newest value, can miss short events altogether. We measured all three effects on real rainfall from a gauge beside Haywards Heath.',
  wa: 'Hello Modern Age Coders, we would like to book a free vibe coding or AI agents trial lesson. We are in Haywards Heath.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Vibe coding and AI agents courses for Haywards Heath learners',
    intro: 'Choose by age. The opening lesson on any of these is live, free and needs no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Thinking first: rules, loops and games about when to look and when to wait.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children describe a Scratch game to an AI, then play, test and fix what it made.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python with AI help, including the rain gauge agent from this page.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first steps to data handling and agents you can explain line by line.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Haywards Heath in figures',
      h2: 'Haywards Heath, Lindfield, Lucastes, Bentswood and Franklands',
      intro: 'Census counts for the town and the district, and the wards its postcodes sit in.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Haywards Heath built-up area', '40,185'],
          ['Mid Sussex district', '152,566']
        ] },
        { kind: 'p', text: 'Mid Sussex also takes in Burgess Hill, East Grinstead and a string of villages, so the district figure is a separate count and not a total of towns. Using postcodes.io, the postcodes inside the built-up area belong to five town wards (Lucastes and Bolnore, Bentswood and Heath, Ashenground, Franklands and Haywards Heath North) and to Lindfield, which is also listed as a suburban area of the town. Cuckfield and Scaynes Hill each have a built-up area of their own, so this page does not count them in. Local schools teach the national curriculum for England, from Key Stage 1 through to GCSE and A level computer science; the year group is our starting guess and the trial lesson decides.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'Read about <a class="cg-inline-link" href="/online-coding-and-python-classes-in-crawley">Crawley</a>, <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-worthing">Worthing</a> and the <a class="cg-inline-link" href="/coding-classes-in-west-sussex">West Sussex page</a>. Our case for thinking before tools is in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Haywards Heath project',
      h2: 'Keep asking, or wait to be told?',
      intro: 'A year of quarter-hour rainfall, three agents that try to notice it, and what each approach spends.',
      body: [
        { kind: 'p', text: 'The Environment Agency publishes rainfall from a gauge it names Haywards Heath, station E9350, open since October 2001. For every quarter of an hour it records how many millimetres fell. In calendar year 2025 that came to 35,040 readings with none missing, though nearly all are marked unchecked by the Agency, so we treat them as provisional. Rain fell in 2,330 of those quarter-hours. The learner groups back-to-back wet quarter-hours into spells and finds 724 of them. Half the spells, 363, lasted a single quarter-hour; the longest ran for 43 in a row, just under eleven hours.' },
        { kind: 'p', text: 'Now imagine an agent whose job is to notice rain, perhaps to warn a sports club or pause a garden watering system. The first version polls: every so many minutes it asks the service for the newest reading and acts if it shows rain. The learner runs that agent over the whole year at different intervals and counts three things. How many requests did it make? How many of those found nothing? And how many wet spells began and ended between two checks, so the agent never saw them at all?' },
        { kind: 'table', caption: 'An agent that checks only the newest reading, 2025, our Python run', head: ['Checks every', 'Requests', 'Found it dry', 'Spells never seen'], rows: [
          ['30 minutes', '17,520', '16,358', '188'],
          ['1 hour', '8,760', '8,181', '357'],
          ['2 hours', '4,380', '4,089', '496'],
          ['4 hours', '2,190', '2,042', '590'],
          ['6 hours', '1,460', '1,361', '629']
        ] },
        { kind: 'p', text: 'Checking hourly, the agent asked 8,760 times, found dry weather 8,181 times, and still missed 357 of the 724 spells, which between them held 100.3 mm of rain. There is a sneakier problem too. Its average delay, measured only over the spells it did catch, comes out at a flattering 14.7 minutes. That number looks good because the misses are left out: short showers are the ones it skips, and they are exactly the ones that would have dragged the average up. An average that silently drops its failures is one of the most useful things a young programmer can learn to distrust.' },
        { kind: 'p', text: 'The second version still polls, but on each check it asks for every reading since the last one instead of just the newest. It never misses a spell. It is simply late: an average of 23.4 minutes behind at hourly checks, 52.9 at two-hourly and 170.9 at six-hourly. The third version is event-driven. Instead of asking, the agent subscribes and is sent a message when a spell starts and another when it stops. Over 2025 that would have been 1,448 messages in total, fewer than a sixth of the hourly poller\'s requests, and each one arrives as soon as the reading exists.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'A classroom game: one child peeks at a hidden card every so often, another is told when it changes. Who notices first?' },
          { h3: 'Ages 11 to 15', p: 'Load the readings in Python, find the wet spells and count what an hourly checker misses.' },
          { h3: 'Ages 15 and up', p: 'Write all three agents, compare requests and delays, and explain why one average flatters itself.' }
        ] },
        { kind: 'callout', h3: 'Where the numbers come from', p: 'Rainfall is from the Environment Agency hydrology service, station E9350, 15-minute totals for 2025, used under the Open Government Licence. The spell definition, the three agents and every figure in the table come from our own Python run. We make no claim about flooding or about any official warning service.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents in practice',
      h2: 'What a rain gauge teaches about how agents watch the world',
      intro: 'Every agent that waits for something is making the same choice between asking and listening.',
      body: [
        { kind: 'table', caption: 'From the gauge to real agent design', head: ['What the run showed', 'What it means when you build an agent'], rows: [
          ['8,181 of 8,760 hourly checks found nothing', 'Each check an AI agent makes can cost time, money or tokens'],
          ['357 spells slipped between hourly checks', 'Reading only the latest state loses short events'],
          ['Reading all new data missed nothing', 'Ask for history since your last look, not a snapshot'],
          ['The catch-only average looked better than it was', 'Check which cases an average leaves out'],
          ['1,448 messages covered the whole year', 'Where a service offers notifications, subscribe']
        ] },
        { kind: 'p', text: 'Many real services offer both styles. A web service may let you poll an address or register a webhook, a web address it calls when something changes. Agent frameworks face the same choice when an agent waits for a file, an email or a reply from another agent. Vibe coding makes the polling version easy to get: ask an AI for "a script that checks the rain every hour" and a loop with a sleep is what usually comes back. The skill we teach is reading that loop and asking what it costs and what it cannot see. Building a full agent of their own comes later, when a learner\'s Python no longer leans on the tutor; for most that is sixth form or later, and Copilot Studio work is only ever taught privately. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The Environment Agency and postcodes.io have no connection with Modern Age Coders. We use their open data; the agents and their results are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From peek-and-wait games at seven to event-driven agents at seventeen',
    intro: 'School year gives us a first guess, and the trial lesson settles where a learner really starts.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Watching and waiting', p: 'Sequences, loops and games about noticing change, often played before any code.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Building with AI', p: 'Scratch projects made with an AI helper, then a first move into Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Data and agents in Python', p: 'Reading real data files, finding events in them and writing agents that react.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents for real work', p: 'Python for everyday automation, then agents designed around what they cost to run.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Polling and events',
    h2: 'What is the difference between polling and event-driven notification for an AI agent?',
    intro: 'Polling means an agent repeatedly asks a service whether anything has changed, while event-driven notification means the service sends the agent a message when something does change, so the agent spends nothing while it waits and hears about the change straight away.',
    p1: 'On the Haywards Heath gauge in 2025, an agent checking the newest reading every hour made 8,760 requests and still missed 357 of 724 wet spells, while notifications at the start and end of each spell would have needed 1,448 messages.',
    p2: 'Learners who produce those counts stop writing agents that poke a service on a timer and start asking what the service can tell them.',
    closer: 'For a teenager in Haywards Heath, knowing what an agent costs and what it cannot see is what keeps them in charge of the tools, and that knowledge is built by writing the code.',
    blogAnchor: 'why understanding code still matters in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'What lessons look like for a Haywards Heath learner',
    intro: 'Every class is live on video. The learner needs a computer with a keyboard, because a tablet on its own cannot run Python properly.',
    cells: [
      { h3: 'Learner at the controls', p: 'Every line is typed and run by the learner, with the tutor questioning as it goes.' },
      { h3: 'Level found by trial', p: 'We watch the first lesson before suggesting any course.' },
      { h3: 'Try before paying', p: 'The first lesson is free and asks for no card.' },
      { h3: 'Small matched groups', p: 'Five to ten classmates at the same stage, joining from around the UK.' },
      { h3: 'Two a week in term', p: 'About eight lessons a month, with West Sussex holidays kept free on request.' },
      { h3: 'Fixed UK hour', p: 'Your lesson keeps its UK time through both clock changes.' }
    ],
    spec: { title: 'Why online', p: 'A group of five to ten learners at exactly one level is much easier to form from the whole country than from one town, and video means nobody travels.' }
  },

  fees: {
    h2: 'Fees for Haywards Heath families',
    intro: 'The same prices apply to every learner outside India.',
    first: 'First lesson: free, full length, ending with a course recommendation.',
    group: 'Group class, usually eight lessons a month.',
    private: 'Private one-to-one tuition, usually eight lessons a month.',
    closer: 'We charge in US dollars and publish no sterling price. The trial costs nothing, and billing begins only after a course and a regular slot are agreed. The pricing page explains holiday breaks, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Google reviews from Sussex families and learners across the UK',

  book: {
    h2: 'Book a free Haywards Heath trial',
    intro: 'Tell us how old the learner is, or their year group, plus one thing they like doing. The trial might be a peek-and-wait game, an AI-assisted Scratch build, some opening lines of Python, or a first glance at the rain gauge file.',
    success: 'Thank you. Your Haywards Heath request has reached us.'
  },

  faq: {
    h2: 'Haywards Heath questions',
    intro: 'The rain gauge project, polling and notifications, vibe coding and how lessons run.',
    items: [
      { q: 'How many people live in Haywards Heath?', a: 'The ONS counted 40,185 usual residents in the Haywards Heath built-up area at the 2021 census. Mid Sussex district had 152,566.' },
      { q: 'Are vibe coding and AI agents classes available in Haywards Heath?', a: 'Yes. Learners aged 6 to 67 join live from Haywards Heath, Lindfield and anywhere else in Mid Sussex.' },
      { q: 'What is polling in programming?', a: 'Polling is when a program asks, again and again on a timer, whether something has changed. It is simple to write but spends requests even when nothing is happening.' },
      { q: 'What is a webhook?', a: 'A webhook is a web address you give to a service so that it can send you a message the moment something changes, instead of you asking it repeatedly.' },
      { q: 'What did the Haywards Heath rain project find?', a: 'Over 2025, an agent checking the newest reading every hour made 8,760 requests, found it dry 8,181 times and never saw 357 of the 724 wet spells.' },
      { q: 'What is vibe coding?', a: 'You tell an AI what the program should do, then run it, read it and repair it yourself. Our learners do this in typed Python, so they can tell good output from bad.' },
      { q: 'When do learners build their own AI agents?', a: 'When Python comes to them unaided, typically around sixth form or in adulthood. Copilot Studio is taught in private lessons only.' },
      { q: 'Does this help with GCSE computer science?', a: 'Working with data, loops and algorithms runs through GCSE and A level computer science, and lessons treat them carefully. No grade is ever promised.' },
      { q: 'What are the fees?', a: 'The trial is free. After it, group classes are USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Do lessons stop for half term?', a: 'Tell us the West Sussex holiday dates and we pause lessons for those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages for Sussex',
    html: 'Try <a class="cg-inline-link" href="/online-coding-and-python-classes-in-crawley">Crawley</a>, <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-worthing">Worthing</a> and <a class="cg-inline-link" href="/coding-classes-in-west-sussex">West Sussex</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other town and county we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Haywards Heath and Mid Sussex',
  footerPlaces: [
    { href: '/coding-classes-in-west-sussex', label: 'West Sussex' },
    { href: '/online-coding-and-python-classes-in-crawley', label: 'Crawley' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hwh .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.6vw, 2.3rem); }
.cg-root.cg-hwh .cg-hero h1 { font-weight: 760; letter-spacing: -0.021em; line-height: 1.09; }
.cg-root.cg-hwh .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-hwh .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; font-size: 0.82rem; }
.cg-root.cg-hwh .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-hwh .cg-table caption { font-weight: 560; text-align: left; font-size: 0.92rem; }
.cg-root.cg-hwh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hwh .cg-table th { font-weight: 690; letter-spacing: 0.02em; }
.cg-root.cg-hwh .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-hwh .cg-callout { border-left-width: 5px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Mid Sussex (E07000228), Census 2021 TS001 usual residents 152,566. ONS 2021 BUA (published): Haywards Heath 40,185. National curriculum for England; GCSE and A level computer science. Wards of postcodes.io RH16 postcodes in the Haywards Heath BUA: Haywards Heath Lucastes & Bolnore, Bentswood & Heath, Ashenground, North, Franklands; Lindfield (also a suburban area whose nearest postcode is in the BUA).',
    localProject: 'Environment Agency hydrology service, rain gauge E9350 named Haywards Heath, 15-minute rainfall totals, calendar year 2025: 35,040 readings, none missing, 35,000 Unchecked and 40 Good. 2,330 wet quarter-hours; 724 wet spells; 363 single quarter-hour; longest 43. Poller reading only the newest value every 30 / 60 / 120 / 240 / 360 min: requests 17,520 / 8,760 / 4,380 / 2,190 / 1,460; dry 16,358 / 8,181 / 4,089 / 2,042 / 1,361; spells never seen 188 / 357 / 496 / 590 / 629 (100.3 mm missed at hourly); mean delay over caught spells 5.3 / 14.7 / 27.0 / 45.9 / 55.4 min. Poller reading all readings since its last check: none missed; mean delay 7.8 / 23.4 / 52.9 / 113.4 / 170.9 min. Event-driven start and end messages: 1,448. Lesson family: polling vs event-driven notification, webhooks, subscriptions, survivorship in averages.',
    requiredMentions: [
      '40,185',
      'Lucastes',
      'Bentswood',
      'Franklands',
      'E9350',
      '8,181',
      '724',
      '1,448',
      'webhook'
    ],
    sources: [
      { claim: 'Environment Agency hydrology data service, station E9350 (Haywards Heath) 15-minute rainfall, 2025, Open Government Licence.', url: 'https://environment.data.gov.uk/hydrology/id/stations?stationReference=E9350' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts001' },
      { claim: 'postcodes.io postcode and place lookups for RH16 and the Haywards Heath built-up area.', url: 'https://api.postcodes.io/places?q=Lindfield' },
      { claim: 'Python standard library documentation for the time and datetime modules used in the polling loops.', url: 'https://docs.python.org/3/library/time.html' }
    ],
    rejectedClaims: [
      'Any flood risk or flood warning statement for Haywards Heath: none made; the page says so.',
      'That the gauge readings are quality checked: 35,000 of 35,040 are flagged Unchecked; the page calls them provisional.',
      'That the gauge sits in the town centre: the Agency names it Haywards Heath; no location claim beyond that is made.',
      'That Cuckfield or Scaynes Hill are part of the town: each has its own ONS built-up area; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
