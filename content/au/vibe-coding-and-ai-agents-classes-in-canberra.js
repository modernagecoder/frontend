'use strict';
// Canberra (cg- city page, Australia cluster Phase 6). Shaped page: vibe coding and AI agents for teenagers and
// adults; coding-classes-for-kids-canberra owns the primary and lower-secondary intent.
// Spine: how much should an AI agent remember? Data: ACT Government open data, "On Time Running By Week -
// First Stop Only" (dataset diwx-p2be, attribution Transport Canberra, Creative Commons Attribution 4.0),
// downloaded 7 October 2026 through the portal's JSON endpoint. Dataset description, read raw: "Measures the
// percentage of scheduled services commence trips on time from the first stop"; its note says "data remains
// unverified". 442 weekly rows from the week of 26 June 2017 to the week of 29 June 2026; no rows between the
// weeks of 30 September 2024 and 28 April 2025 (a 210-day gap); 49 weeks recorded as 0.00 percent on time (the
// week of 30 September 2024 and the 48 weeks from 28 April 2025 to 23 March 2026), treated by us as missing.
// The other 393 weeks average 80.17 percent on time; lowest 63.54 (week of 20 April 2020), highest 88.62
// (week of 3 July 2017); last 13 valid weeks average 82.28. Measured by us on 7 October 2026 (scratchpad
// au/c1/cnb_ring.py): an agent keeping the last N valid weeks in a ring buffer and alerting when a new week is
// more than 5 points below that average raises 11 alerts with N = 4, 26 with N = 13 and 45 with N = 52; the
// lowest 13-week average it ever holds is 67.25 (ending the week of 22 June 2020). An agent that keeps the
// zero weeks in memory sees its 13-week average fall to 0.0. The ring buffer mean matched a slice mean on every
// week. Lesson family: ring buffer as an agent's bounded memory; screened free site-wide on 7 October 2026
// ("ring buffer": 0 page hits; claimed by AU-C1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Australian Capital Territory (GCCSA
// 8ACTE, the capital city area that contains Canberra): 453,890 people; median age 35 (Australia 38); 119,752
// families; 186,963 private dwellings; 2.5 people per household; separate house 106,433 (63.2%); flat or
// apartment 32,669 (19.4%; Australia 14.2%); Professionals 78,121 (31.5%; Australia 24.0%); Bachelor Degree
// level and above 159,428 (43.0% of people aged 15 and over; Australia 26.3%); aged 15 to 19 26,286 (5.8%).
// IANA tz database (backward file): "Link Australia/Sydney Australia/Canberra", so Canberra follows NSW
// daylight saving, 4 October 2026 to 4 April 2027; Asia/Kolkata UTC+5:30. ACT education and BSSS pages
// returned 403 and were not circumvented.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'CANBERRA', label: 'Canberra', blurb: 'Vibe coding and AI agents for Canberra teens and adults, and an agent that watches nine years of bus punctuality with a short memory.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-canberra',
  code: 'cnb',
  accent: '#403080',
  accentRationale: 'Canberra: a deep lake indigo (HSV saturation 0.62, value 0.50, hue 251), chosen by hand at least 10 RGB units from every accent in content and the shared stylesheets, 10.8:1 on white and 8.7:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Canberra',
    eyebrow: 'Canberra, Australian Capital Territory',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Australian Capital Territory' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-australian-capital-territory', name: 'Australian Capital Territory' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Canberra, Australian Capital Territory',
  title: 'Vibe Coding and AI Agents Classes in Canberra | Live Online',
  description: 'Live online vibe coding and AI agents classes for Canberra teenagers and adults: build, test and steer AI tools in Python with a real teacher. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Canberra, with an agent that watches nine years of Transport Canberra punctuality data through a fixed-size memory.',
  twitterDescription: 'Canberra vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Canberra Learners',
    description: 'Level-matched online vibe coding, AI agents, Python and generative AI for teenagers and adults across the Australian Capital Territory, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Canberra',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Canberra?',
  capsule: 'For Canberra teenagers and adults, live classes where you describe a program to an AI, then read, test and steer what it writes until it truly works. The Australian Capital Territory counted 453,890 people at the 2021 Census and 43.0% of residents aged 15 and over hold a bachelor degree or higher, so our learners range from Year 10 students to public servants. Lessons are online, one to one or in small groups, and the first is free.',
  lead: 'An AI agent cannot remember everything, and it should not try. Our Canberra project shows why. Transport Canberra publishes a weekly figure for the share of services that leave their first stop on time, nine years of it, and we built a small agent to watch that number and raise an alert when a week looks unusually bad. The agent keeps only the last few weeks in a ring buffer, a fixed-size memory that overwrites its oldest entry with each new one. Learners discover two things quickly. The size of that memory changes how often the agent cries wolf. And when the data itself goes wrong, an agent that trusts every number it is fed will report a collapse that never happened.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Canberra.',

  picks: {
    eyebrow: 'Course picks for Canberra',
    h2: 'Four starting points for Canberra teenagers and adults',
    intro: 'Matched to what you want to build and pitched in the free lesson. There is no charge to begin and no card is asked for.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Build web and Python projects with an AI assistant, then learn to read and fix every line it produces.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Full-stack projects built alongside AI, with the data structures and testing that keep them reliable.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Adults', note: 'Large language models, retrieval and AI agents, built and evaluated rather than just used.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', band: 'Professionals, one to one only', note: 'Designing workplace agents in Copilot Studio, taught only in private lessons.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The capital in the Census',
      h2: 'A young, highly educated capital territory',
      intro: 'The Australian Bureau of Statistics treats the whole Australian Capital Territory as one capital city area. These QuickStats figures from the 2021 Census compare it with Australia.',
      body: [
        { kind: 'table', caption: 'Australian Capital Territory, 2021 Census QuickStats', head: ['Measure', 'Australian Capital Territory', 'Australia'], rows: [
          ['People', '453,890', 'Not compared'],
          ['Median age', '35', '38'],
          ['Families', '119,752', 'Not compared'],
          ['Private dwellings', '186,963', 'Not compared'],
          ['Residents aged 15 and over with a bachelor degree or higher', '159,428, or 43.0%', '26.3%'],
          ['Employed residents working as professionals', '78,121, or 31.5%', '24.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Degrees everywhere', p: '43.0% of residents aged 15 and over held a bachelor degree or higher, the territory figure towering over the national 26.3%.' },
          { h3: 'Younger than the nation', p: 'A median age of 35 makes the capital three years younger than Australia as a whole.' },
          { h3: 'Apartments rising', p: '19.4% of occupied private dwellings were flats or apartments, above the national share of 14.2%.' }
        ] },
        { kind: 'p', text: 'About our use of these numbers: the bureau makes tiny random changes to each table cell for privacy, which means rows do not always sum to the printed total. We quote the published totals and percentages exactly and never add rows together to produce new ones.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much should an AI agent remember?',
      intro: 'An agent watches Transport Canberra\'s weekly on-time figure, keeps the last few valid weeks in a ring buffer, and raises an alert when a new week falls more than 5 points below that recent average.',
      body: [
        { kind: 'table', caption: 'What the published series contains, read 7 October 2026 (our count)', head: ['Item', 'Figure'], rows: [
          ['Weekly rows in the dataset', '442, from June 2017 to June 2026'],
          ['Weeks recorded as 0.00% on time, treated as missing', '49'],
          ['Gap with no rows at all', '210 days, between September 2024 and April 2025'],
          ['Average of the 393 valid weeks', '80.17% on time'],
          ['Lowest and highest valid weeks', '63.54% and 88.62%'],
          ['Average of the latest 13 valid weeks', '82.28%']
        ] },
        { kind: 'table', mt: true, caption: 'Same data, same alert rule, three memory sizes (our calculation)', head: ['Weeks the agent remembers', 'Alerts raised', 'Lowest average it ever held'], rows: [
          ['4', '11', 'Not reported'],
          ['13', '26', '67.25%'],
          ['52', '45', 'Not reported'],
          ['13, but trusting the zero weeks', 'Floods with alerts', '0.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. The ring buffer', p: 'A fixed list of N slots and a pointer. Each new week overwrites the oldest one, so the agent\'s memory never grows, however long the series runs.' },
          { h3: '2. Memory changes behaviour', p: 'A 4-week memory adapts fast and raised 11 alerts. A 52-week memory adapts slowly, compares new weeks with an old average, and raised 45.' },
          { h3: '3. Bad data, bad agent', p: 'Feed the agent the 49 zero weeks and its 13-week average falls to 0.0. Telling it to skip impossible readings is part of the design, not an afterthought.' }
        ] },
        { kind: 'callout', h3: 'The publisher warns you, and the agent should too', p: 'The dataset carries its own note that the "data remains unverified" while reporting is restored. The zero weeks line up with that period. A careful agent treats a sudden run of zeros as a reporting problem to flag, not a fact to act on, and says so in its output. That single rule is the difference between a helpful assistant and an alarming one.' },
        { kind: 'p', text: 'These counts are our own, from the portal download of 7 October 2026. We make no claim about why on-time running rose or fell in any week; the project is about how an agent stores and reacts to numbers, not about the bus network. The alert threshold of 5 points is our choice for teaching.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Designing an agent\'s memory',
      h2: 'Five decisions every agent builder makes',
      intro: 'Worked out on one punctuality series, and the same for chat assistants, monitoring bots and coding agents.',
      body: [
        { kind: 'table', caption: 'Memory design choices and what they cost', head: ['Decision', 'In the Canberra agent', 'Why it matters'], rows: [
          ['How much to keep', 'N weeks in a ring buffer', 'Too little forgets context; too much reacts slowly'],
          ['What to throw away first', 'Always the oldest week', 'Older context fades unless you save it on purpose'],
          ['What not to store', 'Weeks reported as 0.00%', 'Bad inputs poison every later decision'],
          ['When to act', 'More than 5 points below the recent average', 'Thresholds decide how noisy the agent is'],
          ['How to explain itself', 'Report the week, the average and the memory size', 'People can only trust what they can check']
        ] },
        { kind: 'p', text: 'Chat assistants face the same trade-off with their context window: they keep a limited amount of the conversation and drop the rest. Learners who have tuned a ring buffer by hand understand why an assistant forgets something said an hour ago, and how to structure a long task so that the important parts stay in view.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the ring buffer and the alert rule in Python with an AI assistant, then prove the buffer\'s average matches a simple slice every week.' },
          { h3: 'University students', p: 'Compare ring buffers, exponential averages and full histories for monitoring agents, with alert counts and memory use measured.' },
          { h3: 'Adults', p: 'Design agents for workplace data that handle missing or suspect values gracefully and explain every alert they raise.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders works independently of Transport Canberra, the ACT Government and the statistics bureau, and implies no partnership with any of them. The census counts belong to the bureau; the alert counts and averages are our own calculations from the ACT open dataset.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the capital',
      h2: 'A territory counted as one city and a clock borrowed from Sydney',
      intro: 'Two quirks of the capital that matter to anyone writing software for it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One capital city area', p: 'The statistics bureau counts the whole Australian Capital Territory as a single capital city area, so the territory\'s figures are Canberra\'s figures.' },
          { h3: 'Same clock as Sydney', p: 'In the IANA time zone database, Australia/Canberra is simply a link to Australia/Sydney, so the capital follows the New South Wales clock changes.' },
          { h3: 'Open data by week', p: 'Transport Canberra publishes punctuality week by week on the ACT open data portal under a Creative Commons Attribution licence.' }
        ] },
        { kind: 'spec', title: 'Why a time zone link is worth knowing', p: 'Software should never hard-code an offset for Canberra. Look the zone up by name, let the database follow the link to Sydney\'s rules, and the clock changes on Sunday 4 October 2026 and Sunday 4 April 2027 take care of themselves.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From prompting an assistant to building agents you can trust',
    intro: 'Ages here are rough markers; the free lesson decides the real first step.',
    cols: [
      { band: 'Ages 13 to 15', h3: 'Vibe coding with care', p: 'Describing small programs to an AI assistant, running the result and learning to read every line before accepting it.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course'] },
      { band: 'Ages 16 to 18', h3: 'Agents and memory', p: 'Python agents that read data, remember a little and act on rules, with tests that show when they misbehave.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'University', h3: 'Building with models', p: 'Language models, retrieval and tool use, evaluated with held-out tests and measured error rates.', courses: ['complete-generative-ai-masterclass-college', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Coding agents and workplace agents that handle real records safely, with private lessons for Copilot Studio.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI agents can write code, why should a Canberra learner build one by hand?',
    intro: 'Because the hardest part of an agent is not the code that runs it, it is deciding what it remembers and what it ignores.',
    p1: 'Ask an assistant for a monitoring agent and you will get a loop that reads data and raises alerts. It will rarely ask how much history to keep, what to do with impossible values or how noisy the alerts should be. Those choices changed our Canberra agent from 11 alerts to 45 on the same data, and one missing rule let a reporting gap look like a total collapse. The generated code would have run without complaint either way.',
    p2: 'Building the agent yourself, even with an assistant writing much of the code, forces those decisions into the open. Learners leave able to question any agent they meet: what does it remember, what does it throw away, what does it do with suspect input, and can it explain why it acted. Those are the questions that make vibe coding safe rather than reckless.',
    closer: 'In 2026 anyone can generate an agent; the useful people are the ones who can decide what it should remember and prove it behaves, and a Canberra learner who has tuned a ring buffer by hand is one of them.',
    blogAnchor: 'why learning to code still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Belconnen, Tuggeranong or Gungahlin, the same live room',
    intro: 'The capital is spread across separate town centres, and an online lesson brings all of them to one virtual desk.',
    cells: [
      { h3: 'No trip across town', p: 'A learner near Lake Burley Griffin and one in Tuggeranong share the lesson from home, with nothing to travel to.' },
      { h3: 'Familiar year levels', p: 'Teachers use the year levels ACT schools use, from Year 7 to Year 12, and work around the territory\'s school terms. All teaching is in English.' },
      { h3: 'A genuine trial', p: 'You complete a real task with a teacher and leave with a suggested level, course and lesson time. No card details are taken.' },
      { h3: 'Level-matched groups', p: 'Fifteen to twenty learners at the same stage, from Canberra and further afield, so a suitable evening slot is easy to find.' },
      { h3: 'Two lessons a week', p: 'Roughly eight lessons a month at a regular time. Holidays and exam weeks are planned with the teacher ahead of time.' },
      { h3: 'India time, four and a half or five and a half hours behind', p: 'Canberra is 4 hours 30 minutes ahead of India time in winter and 5 hours 30 minutes ahead from Sunday 4 October 2026 until Sunday 4 April 2027.' }
    ],
    spec: { title: 'Daylight saving in the capital', p: 'The ACT changes its clocks on the same Sundays as New South Wales. India never does, so the gap to our teachers widens by an hour in summer, and every lesson time is confirmed in Canberra time.' }
  },

  fees: {
    h2: 'What classes cost in Canberra',
    intro: 'Three amounts and no surprises.',
    first: 'A complete lesson at no charge, followed by a recommended level, course and weekly time.',
    group: 'A month of classes, normally eight, with fifteen to twenty learners at a matching level.',
    private: 'About eight classes a month in the same pattern, with one learner and one teacher.',
    closer: 'Everyone outside India pays in US dollars at a single rate, so the inner north and the far south get the same invoice, and there is no Canberra price list. Payment starts only after the trial, once course and time are agreed; the pricing page covers holidays, missed classes and moving between group and private lessons. Copilot Studio agent lessons are one to one only.'
  },

  reviewsH2: 'Reviews our families have posted on Google',

  book: {
    h2: 'Tell us what you want your AI to do',
    intro: 'We shape the first task around you: a first vibe-coded web page for a Year 10 student, a small Python agent for a Year 12 student, or the punctuality-watching agent for an adult.',
    success: 'Thank you. The team will be in touch shortly about a Canberra class.'
  },

  faq: {
    h2: 'Canberra vibe coding and AI agents questions',
    intro: 'What Canberra learners and parents ask us first.',
    items: [
      { q: 'How many people live in the Australian Capital Territory?', a: 'The 2021 Census counted 453,890 people in the Australian Capital Territory, which the statistics bureau treats as Canberra\'s capital city area. Its median age was 35, against 38 nationally.' },
      { q: 'What is vibe coding?', a: 'Vibe coding means describing what you want a program to do in plain language and letting an AI assistant write the code. Done well, the human still reads, tests and corrects every part of it; done badly, nobody understands what was built.' },
      { q: 'What is an AI agent?', a: 'An AI agent is a program that takes in information, decides what to do and then acts, often repeatedly and with some memory of what happened before. A monitoring agent that reads weekly figures and raises alerts is a simple example.' },
      { q: 'What is a ring buffer?', a: 'A ring buffer is a fixed-size list that overwrites its oldest item each time a new one arrives. It lets a program keep a recent window of data, such as the last 13 weeks, using the same amount of memory however long it runs.' },
      { q: 'What is the Canberra punctuality project?', a: 'Learners build an agent that reads Transport Canberra\'s weekly on-time figures from the ACT open data portal, keeps the last few valid weeks in a ring buffer and alerts on unusually bad weeks. They compare memory sizes of 4, 13 and 52 weeks, which raise 11, 26 and 45 alerts, and handle 49 weeks reported as zero.' },
      { q: 'What time are lessons for Canberra learners?', a: 'After school, evenings or weekends, agreed during the trial and always stated in Canberra time. Canberra is four and a half hours ahead of India time in winter and five and a half during daylight saving.' },
      { q: 'Can younger students join?', a: 'Yes. We teach from age 6, and younger children begin with Scratch and simple AI activities. This page is aimed at teenagers and adults, but the free lesson suits any age.' },
      { q: 'Is there a Modern Age Coders centre in Canberra?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Canberra coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Canberra and Australian learners',
    html: 'For a look at testing an agent\'s answers rather than its memory, see <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">vibe coding and AI agents classes in Melbourne</a>. Learners who want to think critically about AI tools can read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>, and senior students weighing up computing subjects should see <a class="cg-inline-link" href="/choosing-year-11-computing-subjects-australia">choosing Year 11 computing subjects in Australia</a>. All our Australian pages are listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Canberra and Australia',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-cnb .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-cnb .cg-hero h1 { font-weight: 740; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-cnb .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent); padding: 0 1rem; }
.cg-root.cg-cnb .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-cnb .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.016em; }
.cg-root.cg-cnb .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.9rem); }
.cg-root.cg-cnb .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-cnb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cnb .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-cnb .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Australian Capital Territory, ABS Census 2021 QuickStats, GCCSA 8ACTE (read 7 October 2026): 453,890 people; median age 35 (Australia 38); 119,752 families; 186,963 private dwellings; average 2.5 people per household; dwelling structure, occupied private dwellings: separate house 106,433 (63.2 percent), flat or apartment 32,669 (19.4 percent; Australia 14.2); occupation, employed people aged 15 and over: Professionals 78,121 (31.5 percent; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 159,428 (43.0 percent; Australia 26.3); aged 15 to 19 26,286 (5.8 percent). IANA tz database, backward file: "Link Australia/Sydney Australia/Canberra"; daylight saving from Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30, so Canberra is 4 hours 30 minutes ahead of India time in winter and 5 hours 30 minutes in summer. ACT Education Directorate, act.gov.au and BSSS pages returned 403 on 7 October 2026 and were not circumvented.',
    localProject: 'Ring buffer as an agent\'s bounded memory. ACT open data diwx-p2be "On Time Running By Week - First Stop Only" (attribution Transport Canberra; Creative Commons Attribution 4.0; description "Measures the percentage of scheduled services commence trips on time from the first stop"; note ending "data remains unverified"), JSON endpoint downloaded 7 October 2026: 442 rows, fiscal weeks 2017-06-26 to 2026-06-29; one gap of 210 days between 2024-09-30 and 2025-04-28; 49 rows with total_on_time 0.00 (2024-09-30 and 2025-04-28 to 2026-03-23), treated as missing. 393 valid weeks: mean 80.17; minimum 63.54 (2020-04-20); maximum 88.62 (2017-07-03); last 13 valid weeks mean 82.28; last 52 valid weeks mean 80.81. Agent: alert when a new valid week is more than 5 points below the mean of the previous N valid weeks held in a ring buffer: N = 4: 11 alerts; N = 13: 26 alerts, minimum 13-week mean 67.25 ending 2020-06-22; N = 52: 45 alerts. Including the zero rows, the 13-week ring mean reaches 0.0. Ring mean equalled a slice mean for every week. Lesson family: ring buffer (bounded memory) for an agent; distinct from caching, moving-median filters and the testing-focused Melbourne agent page.',
    requiredMentions: [
      '453,890',
      '119,752',
      '186,963',
      '159,428',
      '78,121',
      '80.17',
      '67.25',
      '63.54',
      'a link to Australia/Sydney',
      'data remains unverified'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Australian Capital Territory (8ACTE): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/8ACTE' },
      { claim: 'ACT open data, On Time Running By Week - First Stop Only (Transport Canberra, CC BY 4.0).', url: 'https://www.data.act.gov.au/d/diwx-p2be' },
      { claim: 'ACT open data JSON endpoint used for the download.', url: 'https://www.data.act.gov.au/resource/diwx-p2be.json' },
      { claim: 'IANA time zone database, backward file: Australia/Canberra linked to Australia/Sydney.', url: 'https://data.iana.org/time-zones/tzdb/backward' }
    ],
    rejectedClaims: [
      'Any explanation of why on-time running changed in particular weeks: not part of the dataset and not researched.',
      'Treating the 49 zero weeks as real punctuality: the publisher marks the restored data as unverified and the zeros coincide with that period.',
      'ACT Education Directorate term dates and BSSS course details: the sites returned 403 and were not circumvented.',
      'Bureau of Meteorology station names: the observations feed returned 403 and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Transport Canberra, the ACT Government or the ABS.'
    ]
  }
};
