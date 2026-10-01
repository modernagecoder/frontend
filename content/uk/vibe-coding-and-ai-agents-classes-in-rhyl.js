'use strict';
// Rhyl (cg- town page, UK cluster Phase 10, towns band B, row 566). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when an AI agent books four things and the
// third fails, who cancels the first two? (the saga pattern: compensating actions, retrying compensations, idempotency
// keys for retries after a lost reply, putting the riskiest step first.)
// Model (INVENTED, stated on the page): an agent arranges a group day out in four steps, each in a separate booking
// system: room (fails 3%), coach (8%), tickets (12%), lunch (5%). After a step succeeds its reply is lost 4% of the
// time, and the agent retries; without an idempotency key the system books twice. A compensation (cancel) call fails 10%
// of the time. 100,000 simulated runs per policy, seed 20261001 (scratchpad rhy/saga.py). All four succeed 74.6% of the
// time (0.97 x 0.92 x 0.88 x 0.95). No undo: 25,454 failed runs, 22,495 of them left bookings behind, 41,272 orphaned
// bookings. Compensate once: 4,279 orphaned (in 4,026 runs), 41,449 cancel calls (1.62 per failed run). Compensate with
// up to 3 tries: 40 orphaned, 45,967 calls (1.79 per failed run). Duplicate bookings from blind retries: 13,444; with
// idempotency keys 0. Riskiest step first (tickets, coach, lunch, room): 21 orphaned, 24,622 calls (0.97 per failed run).
// Lesson family: saga pattern / compensating transactions. Screened: saga (course syllabi only), compensating (Basingstoke:
// "compensating errors" in sentence splitting, different idea), two-phase commit (course only): 0 cluster pages or
// dossiers on sagas; claimed. Denbighshire county page = circle geometry; St Asaph, Conwy, Flintshire, Wrexham checked.
// Place facts: Denbighshire TS001 95,817. ONS 2021 BUA (published): Rhyl 26,990. Wards of postcodes.io LL18 postcodes in
// the BUA: Rhyl West, Rhyl South West, Rhyl East, Rhyl South, Rhyl Tŷ Newydd, Rhyl Trellewelyn. Kinmel Bay (Conwy),
// Rhuddlan, Prestatyn, Bodelwyddan and Dyserth have their own BUAs; left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'RHYL', label: 'Rhyl', blurb: 'Vibe coding and AI agents classes for Rhyl, with a project on what an agent must undo when one booking in a chain fails.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-rhyl',
  code: 'rhy',
  accent: '#245840',
  accentRationale: 'Rhyl: a muted sea green (8.25:1 contrast on white), chosen by hand and kept clear of the other North Wales pages',
  pageType: 'city',
  place: {
    name: 'Rhyl',
    eyebrow: 'Rhyl, Denbighshire, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Denbighshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Denbighshire', href: '/coding-classes-in-denbighshire' },
    { label: 'St Asaph', href: '/best-coding-class-in-st-asaph' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Rhyl, Denbighshire',
  title: 'Vibe Coding and AI Agents Classes in Rhyl | Ages 6 to 67',
  description: 'Live online vibe coding and AI agents classes for Rhyl and the wider Denbighshire coast, ages 6 to 67, with Python and maths. Your first lesson is free of charge.',
  ogDescription: 'Vibe coding and AI agents classes for Rhyl, with a project on sagas, cancellations and what an agent must undo.',
  twitterDescription: 'Rhyl vibe coding and AI agents lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Rhyl',
    description: 'Online vibe coding, AI agents, Python and maths lessons for children, teenagers and adults in Rhyl and Denbighshire, built on simulations the learner writes and stress-tests.'
  },

  h1: 'Vibe coding and AI agents classes in Rhyl',
  capsuleQ: 'Where are the best vibe coding and AI agents classes for Rhyl?',
  capsule: 'In the 2021 census the Rhyl built-up area held 26,990 usual residents, inside a Denbighshire county of 95,817. Its postcodes fall in six town wards: Rhyl West, Rhyl South West, Rhyl East, Rhyl South, Rhyl Tŷ Newydd and Rhyl Trellewelyn. Rhyl learners aged six to 67 come to Modern Age Coders for vibe coding, AI agents, Python, coding and maths, taught live on video by India-based tutors, one-to-one or with five to ten others at their level. A free trial lesson starts things off and ends with a course suggestion. The Rhyl project gives an AI agent a four-step job, booking a group day out, and asks the question every agent that acts in the world must answer: when step three fails, who cancels steps one and two? The trial is followed by monthly fees of USD 100 in a class or USD 150 with a dedicated tutor.',
  lead: 'An agent that only answers questions can be wrong without harm. An agent that does things, books, orders and pays, can leave a mess. Give one a four-step task and let the third step fail, and the first two bookings are still sitting there unless something cancels them. Database researchers met this problem decades ago and gave the fix a name in 1987: the saga, a chain of steps where every step comes with its own undo. In Rhyl we simulate a hundred thousand day outs to see what each kind of care is worth.',
  wa: 'Hello Modern Age Coders, we would like to book a free vibe coding or AI agents trial lesson. We are in Rhyl.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Vibe coding and AI agents courses for Rhyl learners',
    intro: 'Go by the learner\'s age. A free live first lesson opens every course, and nobody asks for card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Plans, steps and what-if puzzles: what do you do when part of a plan goes wrong?' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children describe a Scratch game to an AI, then test it and sort out the problems.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python with AI help, including the Rhyl day-out booking agent.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from scratch to automation and agents that clean up after themselves.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Rhyl in figures',
      h2: 'Rhyl West, Rhyl East, Tŷ Newydd and Trellewelyn',
      intro: 'Census headline counts for the town and county, and the wards inside the built-up area.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Rhyl built-up area', '26,990'],
          ['Denbighshire county', '95,817']
        ] },
        { kind: 'p', text: 'Denbighshire stretches inland to Denbigh, Ruthin and Llangollen, so the county is a separate count, not a sum of towns. Looking up every LL18 postcode in Denbighshire on postcodes.io, those inside the Rhyl built-up area belong to six wards: Rhyl West, Rhyl South West, Rhyl East, Rhyl South, Rhyl Tŷ Newydd and Rhyl Trellewelyn. Kinmel Bay, across the boundary in Conwy, and Rhuddlan, Prestatyn, Bodelwyddan and Dyserth each have built-up areas of their own, so this page does not count them in. Local pupils study under the Curriculum for Wales, with WJEC setting the GCSE and A level papers. We teach in English and use the Welsh school year only as a starting point that the trial lesson then adjusts.' },
        { kind: 'callout', h3: 'North Wales pages', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a>, <a class="cg-inline-link" href="/coding-classes-in-denbighshire">Denbighshire</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-colwyn-bay">Colwyn Bay</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. Why we want learners to reason before reaching for tools is explained in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Rhyl project',
      h2: 'Four bookings, one failure, and who cleans up',
      intro: 'An agent with a multi-step job, four ways of handling failure, and a hundred thousand simulated day outs.',
      body: [
        { kind: 'p', text: 'The scenario is invented, and so are its numbers. An agent is asked to arrange a group day out in Rhyl in four steps, each handled by a separate booking system: reserve a room, book a coach, buy attraction tickets, order lunch. We gave each step a chance of failing (3%, 8%, 12% and 5%), a 4% chance that a successful booking\'s confirmation gets lost on the way back, and a 10% chance that a cancellation request itself fails. No real business is modelled. With those numbers, all four steps succeed about three times in four, so roughly a quarter of all attempts fail somewhere along the way.' },
        { kind: 'p', text: 'The learner runs 100,000 day outs under four policies. The first agent does nothing when a step fails: it reports the error and stops. The second cancels every earlier booking, once each. The third cancels and, if a cancellation fails, tries again, up to three times. The fourth does the same and also attaches an idempotency key to every request, a unique label that lets a booking system recognise a repeated request and return the original booking instead of making a second one.' },
        { kind: 'table', caption: 'What 100,000 simulated day outs leave behind, our Python run', head: ['Agent policy', 'Bookings left behind', 'Duplicate bookings'], rows: [
          ['Stop on failure, undo nothing', '41,272', '13,564'],
          ['Cancel earlier steps, one try each', '4,279', '13,570'],
          ['Cancel, retrying up to three times', '40', '13,444'],
          ['Cancel with retries and idempotency keys', '40', '0']
        ] },
        { kind: 'p', text: 'Doing nothing left 41,272 stray bookings across 22,495 failed day outs: rooms reserved and coaches booked for trips that never happened. Cancelling once cut that to 4,279, and retrying the cancellations cut it to 40. Duplicates are a separate problem with a separate fix. Whenever a confirmation was lost, the agent assumed the booking had failed and asked again, and without a key each retry made a second booking, about 13,500 of them over the whole run. Idempotency keys removed every one.' },
        { kind: 'p', text: 'One more change costs nothing to try. If the riskiest step, the tickets, goes first, a failure there has nothing earlier to cancel. Re-ordering the steps from riskiest to safest cut the cancellation calls from 1.79 to 0.97 per failed day out, and the bookings left behind from 40 to 21. The success rate barely moves, since the same four steps still have to work; what changes is how much cleaning up a failure needs.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Plan a party in four steps on cards, then roll a dice to see which step fails and what must be undone.' },
          { h3: 'Ages 11 to 15', p: 'Simulate the four steps in Python with random failures and count the bookings left behind.' },
          { h3: 'Ages 15 and up', p: 'Add cancellations, retries and idempotency keys, then reorder the steps and measure what each change buys.' }
        ] },
        { kind: 'callout', h3: 'Where this comes from', p: 'The saga idea follows Garcia-Molina and Salem (1987). The day-out scenario, every failure rate, the seed (20261001) and all the counts above come from our own simulation; nothing on this page describes a real booking in Rhyl.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that act',
      h2: 'What a failed day out teaches about agents that take actions',
      intro: 'Once an agent can book, order or send, every step needs a way back.',
      body: [
        { kind: 'table', caption: 'From the simulation to real agents', head: ['What the simulation showed', 'What it means for agent builders'], rows: [
          ['Stopping on failure left 41,272 stray bookings', 'An agent that acts must be able to undo'],
          ['One cancellation attempt still left 4,279', 'The undo can fail too, so retry it'],
          ['Blind retries made duplicate bookings', 'Give every action an idempotency key'],
          ['Riskiest step first halved the cleanup', 'Order steps so failures happen early'],
          ['The scenario and rates were invented', 'Say clearly what is a model and what is real']
        ] },
        { kind: 'p', text: 'AI agents are increasingly given tools that change things: sending emails, filling in forms, making bookings. Vibe coding can produce such an agent in minutes, and the happy path usually works on the first try. The saga thinking in this project is what makes the unhappy path safe. Learners here progress to agents of their own when Python no longer needs propping up, generally in the sixth form years, while Copilot Studio stays a private-lesson topic. More on our approach in <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The ONS and postcodes.io are not connected with Modern Age Coders; their data gives the place figures. The simulation is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps ahead',
    h2: 'From party-planning puzzles at seven to safe action agents at seventeen',
    intro: 'The Welsh school year is our first estimate; the trial lesson sets the real starting point.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Plans and what-ifs', p: 'Sequencing, planning and fixing mistakes, often worked out on paper.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Building with AI', p: 'Scratch games made with an AI helper, then a first Python program.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Agents in Python', p: 'Multi-step agents, random failures and recovery, tested in simulation.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Automation that is safe', p: 'Python for work and agents designed to undo their own mistakes.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Undo for agents',
    h2: 'What is the saga pattern, and why does it matter for AI agents?',
    intro: 'The saga pattern splits a long task into steps that each have a matching compensating action, so that if a later step fails the agent runs the compensations for the steps already done, in reverse order, instead of leaving half-finished work behind.',
    p1: 'In our simulation of 100,000 four-step day outs, an agent with no undo left 41,272 bookings behind, one that retried its cancellations left 40, and idempotency keys removed about 13,500 duplicate bookings entirely.',
    p2: 'Learners who have counted those leftovers design every agent action with its undo, and they put the riskiest step first.',
    closer: 'For a Rhyl teenager, knowing how to make an agent clean up after itself is what keeps them in control of agents that act, and that grows out of building agents by hand.',
    blogAnchor: 'why learning to program still pays off in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'Lessons for a Rhyl learner',
    intro: 'Every lesson is live on video. Learners need a computer with a keyboard, because Python is hard to run on a tablet alone.',
    cells: [
      { h3: 'Learner writes it', p: 'The learner types, runs and explains every program while the tutor questions.' },
      { h3: 'Placement by trial', p: 'We see the learner\'s level in the first lesson before recommending a course.' },
      { h3: 'Free start', p: 'Session one costs nothing and no card is taken.' },
      { h3: 'Small level groups', p: 'Five to ten classmates at one stage, joining from across the UK.' },
      { h3: 'Two a week in term', p: 'About eight lessons a month, with Denbighshire holidays left clear on request.' },
      { h3: 'Same UK time', p: 'The lesson time holds steady through the clock changes.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Five to ten learners at exactly one level are much easier to group from the whole UK than from one seaside town, and video saves everyone the journey.' }
  },

  fees: {
    h2: 'Fees for Rhyl families',
    intro: 'Rhyl learners pay the same as all learners outside India.',
    first: 'First lesson: free, a full session, finishing with a course recommendation.',
    group: 'Group class, usually eight lessons a month.',
    private: 'One-to-one lessons, usually eight a month.',
    closer: 'We charge in US dollars and show no sterling price. You pay nothing for the trial; invoices start once the course and the weekly time are settled. Breaks for holidays, lessons you miss and swaps from group to private are all set out on the pricing page.'
  },

  reviewsH2: 'Google reviews from Welsh families and learners across the UK',

  book: {
    h2: 'Book a free Rhyl lesson',
    intro: 'Send us the learner\'s age or year group and a hobby or two. A trial could involve a party-planning puzzle, AI-assisted Scratch, opening lines of Python, or the booking agent itself.',
    success: 'Thank you. Your Rhyl request has reached us.'
  },

  faq: {
    h2: 'Rhyl questions',
    intro: 'The booking agent project, sagas, vibe coding and how lessons work.',
    items: [
      { q: 'How many people live in Rhyl?', a: 'The ONS counted 26,990 usual residents in the Rhyl built-up area at the 2021 census. Denbighshire had 95,817.' },
      { q: 'Are vibe coding and AI agents classes available in Rhyl?', a: 'Yes. Live online classes are open to ages 6 to 67 in Rhyl and across Denbighshire.' },
      { q: 'What is a compensating action?', a: 'An action that undoes the effect of an earlier completed step, such as cancelling a booking, used when a later step in the same task fails.' },
      { q: 'What is an idempotency key?', a: 'A unique label sent with a request so that, if the same request arrives twice, the system carries it out only once and returns the original result.' },
      { q: 'What did the Rhyl simulation show?', a: 'Over 100,000 invented day outs, an agent with no undo left 41,272 bookings behind; retried cancellations brought that down to 40, and idempotency keys stopped all duplicate bookings.' },
      { q: 'What is vibe coding?', a: 'Asking an AI to write code from a description, then running, reading and correcting it. We teach it in typed Python so learners can judge what the AI produced.' },
      { q: 'When do learners build their own AI agents?', a: 'Once their Python runs without support, for most from Year 12. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Does this help with WJEC GCSE computer science?', a: 'WJEC computer science at GCSE and A level asks for programming, algorithms and testing, and our lessons build all three thoroughly. Grades are not promised.' },
      { q: 'What do lessons cost?', a: 'Trial: free. From then on, USD 100 a month in a group or USD 150 a month privately.' },
      { q: 'Can lessons stop for school holidays?', a: 'Yes. Let us have the Denbighshire school calendar and lessons skip the breaks.' }
    ]
  },

  next: {
    eyebrow: 'Along the coast',
    h2: 'More pages for North Wales',
    html: 'Try <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-colwyn-bay">Colwyn Bay</a>, <a class="cg-inline-link" href="/coding-classes-in-flintshire">Flintshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-wrexham">Wrexham</a>. Other Welsh towns are gathered on <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">our Wales page</a>, and the rest of the UK on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Rhyl and Denbighshire',
  footerPlaces: [
    { href: '/coding-classes-in-denbighshire', label: 'Denbighshire' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rhy .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 2.55vw, 2.4rem); }
.cg-root.cg-rhy .cg-hero h1 { font-weight: 755; letter-spacing: -0.018em; line-height: 1.1; }
.cg-root.cg-rhy .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-rhy .cg-eyebrow { letter-spacing: 0.135em; font-weight: 695; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-rhy .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.011em; }
.cg-root.cg-rhy .cg-table caption { font-weight: 555; text-align: left; font-size: 0.93rem; }
.cg-root.cg-rhy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rhy .cg-table th { font-weight: 725; letter-spacing: 0.028em; }
.cg-root.cg-rhy .cg-ladder-col { border-left: 6px solid var(--cg-accent); padding-left: 0.7rem; }
.cg-root.cg-rhy .cg-callout { border-left-width: 5px; border-radius: 1px; }
`,

  dossier: {
    curriculumAuthority: 'Denbighshire (W06000004), Census 2021 TS001 usual residents 95,817. ONS 2021 BUA (published): Rhyl 26,990. Curriculum for Wales, WJEC GCSE and A level. Wards of postcodes.io LL18 postcodes in the Rhyl BUA: Rhyl West, Rhyl South West, Rhyl East, Rhyl South, Rhyl Tŷ Newydd, Rhyl Trellewelyn. Kinmel Bay, Rhuddlan, Prestatyn, Bodelwyddan and Dyserth are separate BUAs.',
    localProject: 'Invented four-step day-out agent: room 3%, coach 8%, tickets 12%, lunch 5% failure; 4% lost confirmations retried; cancellations fail 10%. 100,000 runs per policy, seed 20261001; all steps succeed 74.6%. No undo: 41,272 bookings left behind in 22,495 failed runs. Cancel once: 4,279 left (1.62 cancel calls per failed run). Cancel with up to 3 tries: 40 left (1.79 calls per failed run). Duplicates from blind retries about 13,500 (13,444 in the retry run); with idempotency keys 0. Riskiest step first: 21 left, 0.97 calls per failed run. Lesson family: saga pattern, compensating actions, retrying compensations, idempotency keys, step ordering.',
    requiredMentions: [
      '26,990',
      'Rhyl West',
      'Rhyl South West',
      'Trellewelyn',
      'Tŷ Newydd',
      'saga pattern',
      'idempotency key',
      '41,272',
      '4,279'
    ],
    sources: [
      { claim: 'Garcia-Molina H., Salem K. (1987), Sagas, Proceedings of the 1987 ACM SIGMOD international conference on management of data, 249 to 259.', url: 'https://doi.org/10.1145/38713.38742' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts001' },
      { claim: 'postcodes.io postcode lookups for LL18 in Denbighshire (wards and built-up areas).', url: 'https://api.postcodes.io/places?q=Rhyl' },
      { claim: 'Python documentation, random module (the simulation\'s random failures).', url: 'https://docs.python.org/3/library/random.html' }
    ],
    rejectedClaims: [
      'That the day-out scenario or its failure rates describe any real Rhyl business or booking system: invented and labelled; the page says so.',
      'That Kinmel Bay, Rhuddlan or Prestatyn are part of the Rhyl built-up area: each has its own; left out.',
      'That retries remove every leftover booking: 40 remained even with three tries; the page says so.',
      'Any tourism or seafront claims: none made.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
