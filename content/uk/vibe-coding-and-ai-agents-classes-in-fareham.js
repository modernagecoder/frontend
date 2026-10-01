'use strict';
// Fareham (cg- town page, UK cluster Phase 10, towns band B, row 546). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: an agent has a list of errands, each with a
// deadline and a place; should it do the most urgent first or the nearest first? (Earliest deadline first against
// nearest-first when travel time depends on the order; hopeless jobs; overload.)
// Data (read 1 October 2026): one Overpass query for amenity=post_box nodes and highway ways trunk to service in 50.826
// to 50.882 N, 1.236 to 1.134 W. 87 post boxes; 67 carry a weekday collection_times tag: 37 at 09:00, 30 between 16:00
// and 18:30 (3 at 16:00 ... 4 at 18:30); 20 carry none. Road graph (scratchpad frh/sim.py): largest connected part
// 22,632 nodes, 410.5 km; footpaths not included. Start: the middle of West Street (node nearest the mean of its OSM
// nodes). The 30 afternoon boxes snapped to the nearest road node (worst snap 219 m). Walking 1.25 m/s (4.5 km/h), one
// minute at each box. Policies: nearest-first; earliest deadline first (EDF), stopped once the last collection time has
// passed; nearest box still reachable in time; EDF among boxes still reachable. Boxes reached on time (late) by start:
// 14:00 nearest 15 (4), EDF 2 (5), nearest reachable 16, EDF reachable 10, best of 20,000 randomised reachable runs 17;
// 15:00 nearest 10 (7), EDF 2 (3), nearest reachable 12, EDF reachable 10, best found 13; 16:00 nearest 7 (7), EDF 0 (3),
// nearest reachable 9, EDF reachable 9, best found 10. Walked at 15:00: 14.50, 16.36, 14.68, 13.14 km. Start to box:
// 0.04 to 5.25 km, median 2.68.
// Lesson family: earliest deadline first vs nearest-first. Screened: "earliest deadline" 0 hits; claimed in claims.txt.
// Oadby = contract net; Thundersley = orienteering (score within a distance budget, no deadlines); different families.
// Place facts: Fareham TS001 114,511. ONS 2021 BUA (published): Fareham 42,625. postcodes.io suburban areas with nearest
// postcode in the Fareham BUA: Funtley, Wallington, Catisfield, Hill Park, Heathfield. Titchfield (Locks Heath BUA) and
// Stubbington (Lee-on-the-Solent BUA) left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'FAREHAM', label: 'Fareham', blurb: 'Vibe coding and AI agents classes for Fareham, with an errand agent that must choose between the most urgent job and the nearest one.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-fareham',
  code: 'frh',
  accent: '#154C18',
  accentRationale: 'Fareham: a deep creek green (10.1:1 on white, 8.2:1 on the ledger beige), chosen by hand at least 40 RGB steps from every Hampshire and South East page',
  pageType: 'city',
  place: {
    name: 'Fareham',
    eyebrow: 'Fareham, Hampshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Hampshire', href: '/coding-classes-in-hampshire' },
    { label: 'Portsmouth', href: '/best-coding-class-in-portsmouth' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Fareham, Hampshire',
  title: 'Vibe Coding and AI Agents Classes in Fareham, Hampshire',
  description: 'Vibe coding, AI agents, Python and coding taught on live video for Fareham, Funtley, Wallington, Catisfield and Hill Park, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Fareham, with an agent that has to juggle deadlines and distances.',
  twitterDescription: 'Fareham vibe coding and AI agents lessons, live online for ages 6 to 67, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Fareham',
    description: 'Vibe coding, AI agent, Python and maths lessons online for children, teenagers and adults in Fareham and the borough around it, built on agents tested against local open data.'
  },

  h1: 'Vibe coding and AI agents classes in Fareham',
  capsuleQ: 'Which vibe coding and AI agents classes are best for Fareham?',
  capsule: 'At the 2021 census the ONS put 42,625 usual residents in the Fareham built-up area and 114,511 in the borough of Fareham. Funtley, Wallington, Catisfield, Hill Park and Heathfield are gazetteer suburbs whose nearest postcode lies inside the built-up area. Modern Age Coders runs live online lessons in vibe coding, AI agents, Python, coding and maths for learners from six to 67, with tutors in India teaching one-to-one or in groups of five to ten learners at a matched level. A free lesson always comes first, and our course suggestion follows it. The Fareham project gives a simple agent 30 real post boxes with afternoon collection times and asks whether it should chase the most urgent deadline or the nearest box. Regular lessons then cost USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Give an AI agent a to-do list and the first question it faces is not how to do each job but which job to do next. The textbook answer is to work in order of deadline, and for a single machine with no travelling that rule is provably hard to beat. An agent that moves around a town is in a different position: every choice changes how far away all the other jobs are. Fareham\'s post boxes, each with a collection time, turn that difference into a count.',
  wa: 'Hello Modern Age Coders, we are in Fareham and would like a free vibe coding or AI agents lesson.',

  picks: {
    eyebrow: 'Recommended starts',
    h2: 'Vibe coding and AI agents courses for Fareham learners',
    intro: 'A suggested first course for each age range, each beginning with a free live lesson and no card details.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games made with an AI helper, which the child then checks and improves.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Ordering tasks, spotting patterns and planning steps before any code is written.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects built with AI, including the Fareham errand agent.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first principles, the base every serious agent project stands on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Fareham in figures',
      h2: 'Fareham, Funtley, Wallington, Catisfield and Hill Park',
      intro: 'Census counts, and the suburbs we are confident belong to the town.',
      body: [
        { kind: 'table', caption: 'ONS Census 2021, usual residents', head: ['Area', 'Residents'], rows: [
          ['Fareham built-up area', '42,625'],
          ['Fareham borough', '114,511']
        ] },
        { kind: 'p', text: 'The borough reaches well beyond the town to Locks Heath, Portchester, Stubbington and Titchfield, so the two numbers describe different areas and are not meant to be combined. Titchfield and Stubbington appear in the gazetteer too, but their nearest postcodes fall in the Locks Heath and Lee-on-the-Solent built-up areas, so we leave them off the list of Fareham suburbs. Fareham schools follow the national curriculum for England; tell us the school year, from Year 2 to Year 13, and lessons can be matched to GCSE or A level computer science.' },
        { kind: 'callout', h3: 'Around the harbour', p: 'Nearby pages cover <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-gosport">Gosport</a>, <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton</a> and the <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire overview</a>. Our case for reasoning before relying on AI is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">why thinking comes before the tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Fareham agent',
      h2: 'Most urgent first, or nearest first?',
      intro: 'Thirty post boxes, thirty collection times, and an agent on foot that can only be in one place at once.',
      body: [
        { kind: 'p', text: 'One OpenStreetMap query returns 87 post boxes in a rectangle around Fareham, together with the road network, 410.5 km in its largest connected part. Volunteers have tagged 67 of the boxes with a weekday collection time: 37 at 09:00 and 30 in the afternoon, between 16:00 and 18:30. The other 20 have no time recorded. The project uses the 30 afternoon boxes as a list of errands with deadlines, and invents an agent to do them: it sets off from the middle of West Street, walks along roads at 4.5 km/h and spends a minute at each box. The boxes are real and so are the times on the map; the agent and its walk are a simulation, and footpaths are not in the network, so real walks could be shorter.' },
        { kind: 'p', text: 'Earliest deadline first, EDF, always heads for the box whose collection is soonest. Liu and Layland showed in 1973 that this is an optimal rule for scheduling jobs on one processor, where switching between jobs is free. Nearest-first ignores deadlines entirely and walks to the closest unvisited box. Two more careful versions look before they leap: each one only considers boxes it can still reach before their collection, then chooses either the nearest or the most urgent of those. As a yardstick the learner also runs 20,000 randomised versions of the careful agent and keeps the highest score, which is not proven to be the true maximum.' },
        { kind: 'table', caption: 'Post boxes reached before collection, out of 30 (late arrivals in brackets), our simulation', head: ['Setting off at', 'Nearest first', 'Earliest deadline first', 'Nearest still reachable', 'Most urgent still reachable', 'Top score in 20,000 tries'], rows: [
          ['14:00', '15 (4 late)', '2 (5 late)', '16', '10', '17'],
          ['15:00', '10 (7 late)', '2 (3 late)', '12', '10', '13'],
          ['16:00', '7 (7 late)', '0 (3 late)', '9', '9', '10']
        ] },
        { kind: 'p', text: 'Plain EDF is the worst agent on the list. The earliest deadlines belong to boxes scattered across the town, from 40 metres to more than 5 km from the start, so chasing them in order means criss-crossing Fareham and arriving late almost everywhere; setting off at 15:00 it makes 2 collections in time and walks 16.36 km. The domino effect is the lesson: once an EDF agent falls behind, every job it tries is already late, and it keeps trying. Filtering out boxes it can no longer reach fixes the lateness but not the zig-zag, which is why the reachable nearest-first agent does better than the reachable deadline-first one. The winning idea is to take deadlines seriously without letting them decide the route alone.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Plan a paper route to five marked points, each with a time on it, and see which order works.' },
          { h3: 'Ages 11 to 15', p: 'Write the nearest-first and deadline-first rules in Python on a small made-up map.' },
          { h3: 'Ages 15 and up', p: 'Run all four agents on the Fareham network, then design a fifth that beats them.' }
        ] },
        { kind: 'callout', h3: 'Sources and caveats', p: 'Post box positions, collection time tags and roads are from OpenStreetMap contributors under the Open Database Licence, read with one Overpass query on 1 October 2026. We did not check the tags against the plates on the boxes, so some may be out of date. The walking agent, its speed and the one-minute stops are our assumptions, and every count comes from our own Python.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents in practice',
      h2: 'What the post box agent teaches about AI agents',
      intro: 'Choosing the next step is most of what an agent does.',
      body: [
        { kind: 'table', caption: 'From Fareham post boxes to agent design', head: ['What happened in the simulation', 'What it means for an AI agent'], rows: [
          ['Pure deadline order managed 2 boxes from a 15:00 start', 'A rule proven in one setting can fail badly in another'],
          ['Late jobs kept pulling the agent onwards', 'Agents need a way to drop tasks that can no longer succeed'],
          ['Checking reachability first removed every late arrival', 'Test whether a step can work before taking it'],
          ['Nearest reachable beat most urgent reachable', 'The cost of moving between tasks belongs in the plan'],
          ['20,000 random tries found 13, with no proof that more is impossible', 'Say how good an answer is, and how you know']
        ] },
        { kind: 'p', text: 'AI agents that book, fetch or file things on someone\'s behalf make this choice constantly, usually without showing the rule they used. Fareham learners practise vibe coding by asking an AI to write each agent, then reading the code, running it on the real boxes and explaining why its score is what it is. Writing agents of their own starts once a learner handles Python independently, for most that is from the sixth form or as an adult, and Copilot Studio agents are one-to-one lessons only. See <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">why we ask for code to be understood, not pasted</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how our agents course for UK students is organised</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the ONS and postcodes.io supplied open data for this page. None of them is connected with Modern Age Coders, and the simulation and its conclusions are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From ordering tasks at seven to building agents as an adult',
    intro: 'The free lesson decides the entry point; the school years below are only a guide.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Plans and order', p: 'Sequencing, choices and routes worked out on paper and on screen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Building with AI', p: 'Scratch built with an AI assistant, then first Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python projects', p: 'Web and Python projects made with AI, and simulated agents.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Python, then agents', p: 'Confident Python first, then agents and generative AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Deadlines and agents',
    h2: 'What is earliest deadline first, and why can it let an AI agent down?',
    intro: 'Earliest deadline first is a scheduling rule that always does the job whose deadline is soonest, and it can let an AI agent down because it is only optimal when moving between jobs costs nothing, which is rarely true for an agent working in the real world.',
    p1: 'Setting off from West Street at 15:00, a pure deadline-first agent reached 2 of Fareham\'s 30 afternoon post boxes in time, nearest-first reached 10, and nearest-first limited to reachable boxes reached 12.',
    p2: 'A learner who has watched that happen asks of any agent which rule picks its next step, and what that rule leaves out.',
    closer: 'Fareham teenagers who can read and test an agent\'s decision rule are the ones who stay in charge of AI, and that ability comes from writing code.',
    blogAnchor: 'why programming is still a skill to build in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'How Fareham lessons are organised',
    intro: 'Teaching happens live over video. Learners need a laptop or desktop with a keyboard, because coding on a phone or tablet is too cramped.',
    cells: [
      { h3: 'The learner codes', p: 'Keyboard stays with the learner; the tutor asks questions rather than taking over.' },
      { h3: 'Trial sets the level', p: 'What the learner shows in the first lesson decides where they begin.' },
      { h3: 'Try before paying', p: 'No charge and no card for the trial lesson.' },
      { h3: 'Five to ten per class', p: 'Classmates at the same point, joining from all over the UK.' },
      { h3: 'Two a week, usually', p: 'About eight lessons a month in term time, pausing for the holidays you name.' },
      { h3: 'Steady lesson times', p: 'We adjust for the clock changes so your slot stays the same.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Drawing on the whole country makes it possible to form a group at exactly the right level, with nobody needing to travel.' }
  },

  fees: {
    h2: 'Fees for Fareham learners',
    intro: 'Fareham learners are charged our usual rate for students outside India.',
    first: 'First lesson: free, full length, ending with a course recommendation.',
    group: 'Group lessons, roughly eight a month.',
    private: 'Private one-to-one lessons, roughly eight a month.',
    closer: 'Prices are set in US dollars with no sterling version. The trial costs nothing, and billing only begins once you have chosen a course and a regular slot. Holidays, missed lessons and switching format are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from Hampshire families and learners across Britain',

  book: {
    h2: 'Book a free Fareham lesson',
    intro: 'Let us know the learner\'s age or school year and what they enjoy. The first lesson could be a timed route puzzle, a Scratch game made with an AI, some first Python, or a small agent working through a list.',
    success: 'Thank you. Your Fareham request has arrived.'
  },

  faq: {
    h2: 'Questions about Fareham lessons',
    intro: 'The deadline project, vibe coding, AI agents and the practical side.',
    items: [
      { q: 'How big is Fareham?', a: 'The ONS counted 42,625 usual residents in the Fareham built-up area at the 2021 census, and 114,511 across the borough.' },
      { q: 'Are vibe coding and AI agents classes available in Fareham?', a: 'Yes. Learners aged 6 to 67 in Fareham, Funtley, Wallington, Catisfield, Hill Park or elsewhere in the borough can join, since lessons are live video calls.' },
      { q: 'What does earliest deadline first mean?', a: 'A rule that always works on the task whose deadline comes soonest. On a single processor with no switching cost it is optimal; once travel between tasks matters, it can do badly.' },
      { q: 'What is the domino effect in scheduling?', a: 'When a deadline-first scheduler falls behind, each task it picks is already late or soon will be, so one missed deadline leads to many.' },
      { q: 'What did the Fareham agent show?', a: 'From a 15:00 start on West Street, deadline-first reached 2 of 30 post boxes before collection, nearest-first 10, and nearest-first among still reachable boxes 12.' },
      { q: 'What is vibe coding?', a: 'Telling an AI in plain language what program you want, then checking, running and correcting its code. We teach it together with Python written by hand.' },
      { q: 'When do learners start building AI agents?', a: 'Once they write Python independently, generally from the sixth form or as adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Does this connect with GCSE computer science?', a: 'Algorithms, decomposition and evaluating solutions are part of GCSE and A level computer science, and the agent project uses all three. We do not promise grades.' },
      { q: 'What do lessons cost?', a: 'The first is free. After that, USD 100 a month for a group or USD 150 a month for one-to-one.' },
      { q: 'Can we pause during school holidays?', a: 'Of course. Give us the dates and we will not schedule lessons in those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'More Hampshire and South East pages',
    html: 'There are also pages for <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-gosport">Gosport</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-havant">Havant</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-eastleigh">Eastleigh</a>. Everywhere else is linked from <a class="cg-inline-link" href="/coding-classes-in-hampshire">our Hampshire page</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">the South East summary</a> and <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">the UK directory</a>.',
    waLabel: 'Send a WhatsApp message'
  },

  footerHeading: 'Fareham and Hampshire',
  footerPlaces: [
    { href: '/coding-classes-in-hampshire', label: 'Hampshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-frh .cg-hero-grid { align-items: end; gap: clamp(0.9rem, 2.2vw, 1.9rem); }
.cg-root.cg-frh .cg-hero h1 { font-weight: 820; letter-spacing: -0.03em; line-height: 1.05; }
.cg-root.cg-frh .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 7%, transparent); padding: 0.95rem 1.05rem; border-radius: 4px; }
.cg-root.cg-frh .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-frh .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-frh .cg-table caption { font-weight: 620; text-align: left; font-size: 0.88rem; }
.cg-root.cg-frh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-frh .cg-table th { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-frh .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-frh .cg-callout { border-left-width: 3px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Fareham (E07000087), Census 2021 TS001 usual residents 114,511. ONS 2021 BUA (published): Fareham 42,625. English national curriculum, GCSE and A level. postcodes.io suburban areas with nearest postcode in the Fareham BUA: Funtley, Wallington, Catisfield, Hill Park, Heathfield; Titchfield (Locks Heath BUA) and Stubbington (Lee-on-the-Solent BUA) excluded.',
    localProject: 'Earliest deadline first vs nearest-first for a walking errand agent. One Overpass query: 87 post boxes (67 with weekday collection_times: 37 at 09:00, 30 from 16:00 to 18:30), roads trunk to service, largest part 22,632 nodes, 410.5 km. Start West Street, 4.5 km/h, one minute per box, 30 afternoon boxes. On time out of 30 from 15:00: nearest 10 (7 late), EDF 2 (3 late), nearest reachable 12, EDF reachable 10, top of 20,000 randomised 13; from 14:00: 15, 2, 16, 10, 17; from 16:00: 7, 0, 9, 9, 10. EDF walked 16.36 km from 15:00.',
    requiredMentions: [
      '42,625',
      'Funtley',
      'Catisfield',
      'Hill Park',
      'earliest deadline first',
      '87 post boxes',
      'Liu and Layland',
      '16.36 km',
      'domino effect'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors, post boxes with collection_times tags and roads via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Liu C. L. and Layland J. W. (1973), Scheduling algorithms for multiprogramming in a hard-real-time environment, Journal of the ACM 20(1), 46 to 61.', url: 'https://doi.org/10.1145/321738.321743' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output-area lookup.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for Fareham borough.', url: 'https://api.postcodes.io/places?q=Catisfield' }
    ],
    rejectedClaims: [
      'That the tagged collection times are current: not checked against the boxes; stated on the page.',
      'Any statement about Royal Mail policy or why many boxes show 09:00: not researched; not claimed.',
      'That 17 or 13 is the true maximum: only the top score of 20,000 randomised runs; stated as such.',
      'Walking times on footpaths: footpaths were not in the network; stated.',
      'Titchfield and Stubbington as Fareham suburbs: their nearest postcodes are in other BUAs; left out.',
      'Sterling prices: none.'
    ]
  }
};
