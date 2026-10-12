'use strict';
// Aspley, Brisbane (cg- district page, Australia cluster Phase 8, row 296). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL30095, City of Brisbane) under Brisbane and Queensland.
// Spine: an agent writes JavaScript to count Aspley parks with a bus stop within 400 m. The inner loop redeclares
// var i, so the outer loop stops after one park and the code reports 1. Asked to explain its own code line by line
// (rubber-duck debugging), the agent reaches the second var i and finds the bug; the fixed code reports 15 of 16.
// Data: BCC Park Locations (16 Aspley parks) + Translink GTFS (61 stop records inside the boundary). Measured by
// running scratchpad au/b12/aspl_bug.js in node. Both agent turns are our scripts.
// Lesson family: rubber-duck debugging, agent explains its own code line by line; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'ASPLEY',
    label: 'Aspley, Brisbane',
    blurb: 'Vibe coding and AI agent classes for Aspley, where an agent explaining its own park-and-bus-stop code line by line finds the bug that made 16 parks look like 1.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'vibe-coding-and-ai-agents-classes-in-aspley-brisbane',
  code: 'aspl',
  accent: '#52382D',
  accentRationale: 'Aspley: a dark walnut brown (hue 17.8), 8.69:1 on #EDE7DA; 35.6 RGB from the nearest Queensland accent, 13.6 from any other Australian accent and 8.3 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Aspley',
    eyebrow: 'Aspley, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Aspley' },
      { type: 'AdministrativeArea', name: 'City of Brisbane' },
      { type: 'City', name: 'Brisbane' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-brisbane', name: 'Brisbane' }
  ],
  nav: [
    { label: 'Brisbane', href: '/best-coding-classes-in-brisbane' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Aspley, Brisbane',
  title: 'Vibe Coding and AI Agents Classes in Aspley, Brisbane',
  description: 'Live online vibe coding and AI agent classes for Aspley teenagers and adults, plus Scratch and Python for children from six, taught in small groups or one to one.',
  ogDescription: 'Aspley agent project: 16 parks, 61 bus stop records, a loop that quietly stopped after one park, and the line-by-line explanation that caught it.',
  twitterDescription: 'Vibe coding and AI agent classes for Aspley, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Aspley',
    description: 'Level-matched online lessons in vibe coding, AI agents and programming for teenagers and adults in Aspley, Brisbane, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Aspley',
  capsuleQ: 'How can Aspley learners catch bugs in code an AI agent writes?',
  capsule: 'By making the agent explain its own code one line at a time, the rubber-duck method, and checking each explanation against what the line really does. Live online classes teach this alongside vibe coding and agent projects. Aspley counted 12,871 residents in the 2021 Census.',
  lead: 'The question was simple: how many of Aspley\'s 16 council parks have a bus stop within 400 metres? The agent\'s JavaScript ran without an error and answered 1. Asked to talk through its code line by line, it stopped at the second loop and spotted why. The corrected answer is 15.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Aspley.',
  picks: {
    eyebrow: 'Course picks for Aspley',
    h2: 'Courses for coding with an AI partner',
    intro: 'The park project needs loops, a distance formula and the patience to read code aloud. These courses build all of that; the trial lesson picks the starting point.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'AI-assisted app building with every generated line read and explained.'
      },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Using AI tools well, including checking and correcting their output.' },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents on real projects, with review habits that catch silent bugs.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Generative AI and agents, from prompts to evaluated tools.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Aspley in the Census',
      h2: 'An older suburb with every generation',
      intro: 'Census 2021 QuickStats for the suburb of Aspley (ABS code SAL30095), compared with Queensland wherever the bureau reports a state figure.',
      body: [
        {
          kind: 'table',
          caption: 'Aspley residents and homes, 2021',
          head: ['Measure', 'Aspley'],
          rows: [
            ['Residents', '12,871'],
            ['Median age', '43'],
            ['Families', '3,543'],
            ['Private dwellings', '5,463'],
            ['People per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How Aspley compares with Queensland',
          head: ['Indicator', 'Aspley', 'Queensland'],
          rows: [
            ['Semi-detached, row or townhouse homes', '23.8% (1,209)', '11.7%'],
            ['Employed residents working from home', '19.4% (1,196)', '14.1%'],
            ['Workers commuting by train', '1.5% (94)', '1.1%'],
            ['Adults with a bachelor degree or higher', '29.2% (3,122)', '21.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Aged 85 and over', p: 'Aspley had 586 residents aged 85 or older, 4.5% of the suburb.' },
            { h3: 'And the young', p: 'Children aged 5 to 9 numbered 779, with 732 aged 10 to 14.' },
            { h3: 'Boundary', p: 'Aspley\'s ABS outline covers about 6.4 square kilometres of Brisbane\'s north.' }
          ]
        },
        {
          kind: 'p',
          text: 'Because the bureau slightly randomises small Census cells for privacy, we show its figures unchanged and do not combine them into totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Sixteen parks, one answer of 1',
      intro: 'Inputs: the 16 parks Brisbane City Council lists for Aspley, each with one map point, and the 61 Translink stop records inside the suburb by our boundary check. The agent was asked to count parks with a stop within 400 metres.',
      body: [
        {
          kind: 'table',
          caption: 'The agent\'s loop, as first written',
          head: ['Line', 'Code'],
          rows: [
            ['1', 'for (var i = 0; i < parks.length; i++) {'],
            ['2', '  var park = parks[i]; var near = false;'],
            ['3', '  for (var i = 0; i < stops.length; i++) {'],
            ['4', '    if (metres(park, stops[i]) <= 400) near = true;'],
            ['5', '  }'],
            ['6', '  if (near) count++;'],
            ['7', '}']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What actually ran, measured in Node.js (our run)',
          head: ['Version', 'Parks checked', 'Count reported'],
          rows: [
            ['As written (var i twice)', '1 of 16', '1'],
            ['Fixed (let i outside, let j inside)', '16 of 16', '15']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The explanation',
              p: 'Talking through line 3, our scripted agent says: "this declares i again, but var does not make a new variable, so the inner loop reuses the outer counter." That sentence is the bug report.'
            },
            {
              h3: 'Why only one park',
              p: 'The inner loop leaves i at 61. The outer loop adds one, sees 62 is not below 16, and stops. No error appears; the code simply ends early.'
            },
            {
              h3: 'The real figure',
              p: 'With separate counters, 15 of the 16 parks have a stop within 400 metres, and all 16 have one within 800 metres. The furthest park\'s nearest stop is 410 metres away.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why explaining works',
          p: 'Rubber-duck debugging means describing code aloud, line by line, to someone who knows nothing, even a toy duck. Saying "line 3 declares i" forces the question "which i?", and the bug appears. An agent asked to do the same with its own code often finds its own mistake, but only if a person asks it to and then checks the explanation.'
        },
        {
          kind: 'p',
          text: 'Park points come from Brisbane City Council open data and stop positions from the Translink feed. Membership of the suburb, the distances and both program runs are our calculation; distances are straight-line, not walking routes. The agent turns described are scripts we wrote, not output from a commercial AI model.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Debugging with agents',
      h2: 'Making an agent read its own code',
      intro: 'A good review prompt is specific. These steps turn a vague "check your code" into a review that catches bugs like Aspley\'s.',
      body: [
        {
          kind: 'table',
          caption: 'A line-by-line review routine',
          head: ['Step', 'Ask the agent', 'Aspley example'],
          rows: [
            ['Explain each line', 'What does this line do, and to which variables?', 'Line 3 reuses i'],
            ['Predict a value', 'What is i after the inner loop ends?', '61'],
            ['Check against a run', 'Log how many parks were checked', '1, not 16'],
            ['Fix and rerun', 'Rename the inner counter and use let', '15 parks within 400 m']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Read a Scratch script aloud to a toy, one block at a time, and find the block that does not do what they said.' },
            { h3: 'Secondary learners', p: 'Vibe-code the park count with an AI tool, then make it explain every line and test its claims with console.log.' },
            { h3: 'Adults', p: 'Add an explain-then-verify step to every agent-written change before it reaches a shared codebase.' }
          ]
        },
        {
          kind: 'p',
          text: 'Modern JavaScript declares loop counters with let, which gives each loop its own variable, and linters warn about redeclared names. Tools help, but the habit of reading code aloud catches the bugs that tools are not set up to look for.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Aspley',
      h2: 'Gympie Road and a hypermarket bus station',
      intro: 'Markers that belong to Aspley itself, from the Translink timetable and the Queensland school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Wednesday buses',
              p: 'On Wednesday 21 October 2026 the 61 stop records inside Aspley had 2,240 scheduled bus visits on 15 routes, by our count. No train stops in the suburb.'
            },
            { h3: 'Busiest stop', p: 'Gympie Rd at Aspley topped the day with 135 visits; Aspley Hypermarket station has four platforms, A to D.' },
            { h3: 'Mid-year break', p: 'Queensland state schools end Term 2 of 2027 on Friday 25 June and start Term 3 on Monday 12 July.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Aspley on its own',
          p: 'Each number here is for the suburb of Aspley. Bridgeman Downs, Carseldine, Chermside, Chermside West, Geebung, McDowall and Zillmere border it and are counted separately; none of their figures are added in.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading blocks aloud to reviewing agents',
    intro: 'Where a learner starts depends on skill more than age; the trial shows it.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch stories',
        p: 'Programs built and explained block by block.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python and AI',
        p: 'Typed code plus a grounded idea of what AI does.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Building with AI help, then reading and testing every line.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Coding agents',
        p: 'Agents for real work, with review built in.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'If the agent writes the loop, why learn loops?',
    intro: 'Because a loop that ends early raises no alarm. Only someone who understands loops will notice.',
    p1: 'Vibe coding is fast: describe the park question and an agent produces working-looking code in seconds. That code ran cleanly and reported one park. Nothing crashed, no warning appeared, and an answer of 1 is not obviously absurd to someone who has never walked around Aspley.',
    p2: 'A learner who knows how var and let behave reads line 3 and frowns. A learner who knows the rubber-duck routine asks the agent to explain itself and finds the same bug. Both are skills we teach before handing over the keyboard.',
    closer: 'In Aspley, the learner who makes the agent explain itself ships code that counts all 16 parks.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online lessons for Aspley',
    intro: 'Classes take place on video, so Aspley learners log in from home.',
    cells: [
      { h3: 'Learner types, teacher reads', p: 'Every prompt and every generated line is visible on the shared screen.' },
      { h3: 'Term structure', p: 'Plans follow Queensland school terms, with holidays off.' },
      { h3: 'Trial lesson', p: 'A full first class at no cost, followed by a straight recommendation.' },
      { h3: 'Small, level groups', p: 'Five to ten learners at the same stage, or one to one.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons a week, around eight each month.' },
      { h3: 'Teachers in India', p: 'A 7:30pm Aspley lesson starts at 3pm India time, every week of the year.' }
    ],
    spec: {
      title: 'No daylight saving here',
      p: 'Brisbane\'s clocks have not changed since March 1992 (IANA time zone database), and India\'s never change, so a lesson booked in Brisbane time keeps its slot.'
    }
  },
  fees: {
    h2: 'Aspley class fees',
    intro: 'One set of three prices.',
    first: 'The first class is free and leaves you with a written next step.',
    group: 'About eight live group lessons a month, five to ten learners per class.',
    private: 'About eight live private lessons a month with one teacher.',
    closer: 'Aspley learners pay in US dollars, after the trial, once course and timing are settled. See the pricing page for holiday, absence and format-change rules.'
  },
  reviewsH2: 'Google reviews from our learners and families',
  book: {
    h2: 'Book a free Aspley class',
    intro: 'Let us know the learner\'s age and goals. A teenager or adult might start by asking an agent to explain the park loop; a child might start reading a Scratch script aloud.',
    success: 'Thank you. We will be in touch soon about an Aspley class.'
  },
  faq: {
    h2: 'Aspley vibe coding and agent questions',
    intro: 'Questions from Aspley teenagers, parents and adult learners.',
    items: [
      {
        q: 'How many people live in Aspley?',
        a: 'The 2021 Census QuickStats record 12,871 people in the suburb of Aspley, with a median age of 43 and 3,543 families.'
      },
      {
        q: 'What is rubber-duck debugging?',
        a: 'Explaining code line by line, out loud, to a listener who knows nothing about it, traditionally a rubber duck. Putting each line into words exposes the places where the code does something different from what you meant.'
      },
      {
        q: 'What is the difference between var and let in JavaScript?',
        a: 'A var variable belongs to the whole function, so declaring it again reuses the same variable. A let variable belongs to its block, so each loop gets its own.'
      },
      {
        q: 'How many Aspley parks have a bus stop within 400 metres?',
        a: 'By our straight-line calculation, 15 of the 16 parks Brisbane City Council lists for Aspley have a Translink stop record within 400 metres, and all 16 within 800 metres.'
      },
      {
        q: 'What is an AI coding agent?',
        a: 'An AI system that writes and runs code toward a goal, often across several steps, instead of only answering one question.'
      },
      {
        q: 'Can teenagers use Claude in your classes?',
        a: 'No. Claude-based courses are for learners aged 18 and over only; teenagers work with other AI tools.'
      },
      {
        q: 'Is there a classroom in Aspley?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Aspley learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio available in Aspley groups?', a: 'No. Copilot Studio is taught one to one only; group learners build agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Brisbane and Queensland',
    h2: 'More for Aspley learners',
    html: 'Start from <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">the Brisbane guide</a>, or see <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding for Brisbane children</a>. Just north, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-moreton-bay">Moreton Bay</a> has its own page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">the Queensland guide</a> covers every region.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Aspley and Brisbane',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/online-coding-and-python-classes-in-moreton-bay', label: 'Moreton Bay' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' }
  ],
  personalityCss: `
.cg-root.cg-aspl .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.3vw, 2.65rem); }
.cg-root.cg-aspl .cg-hero h1 { font-weight: 630; letter-spacing: -0.023em; line-height: 1.08; }
.cg-root.cg-aspl .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.62rem 0 0.62rem 1.25rem; }
.cg-root.cg-aspl .cg-eyebrow { letter-spacing: 0.125em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-aspl .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.015em; }
.cg-root.cg-aspl .cg-grid-3 { gap: clamp(0.7rem, 1.85vw, 1.45rem); }
.cg-root.cg-aspl .cg-table caption { font-weight: 600; text-align: left; letter-spacing: 0.02em; }
.cg-root.cg-aspl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aspl .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-aspl .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Aspley (SAL30095), ABS Census 2021 QuickStats (read 12 October 2026): 12,871 people; median age 43; 3,543 families; 5,463 private dwellings; 2.4 per household; semi-detached 1,209 (23.8%, Qld 11.7%); worked at home 1,196 (19.4%, Qld 14.1%); train to work 94 (1.5%, Qld 1.1%); bachelor or higher 3,122 (29.2%, Qld 21.9%); aged 85+ 586 (4.5%); 5-9 779; 10-14 732. ABS SAL area 6.4114 sq km. Translink GTFS Wednesday 21 October 2026: 61 stop records with service inside the SAL polygon (our check); 2240 scheduled bus visits; 15 routes; no rail; busiest Gympie Rd at Aspley (135); Aspley Hypermarket station platforms A-D. BCC Park Locations: 16 parks. BCC adjacency: Bridgeman Downs, Carseldine, Chermside, Chermside West, Geebung, McDowall, Zillmere. Qld 2027: Term 2 ends Friday 25 June, Term 3 starts Monday 12 July. Brisbane no daylight saving since March 1992 (IANA).',
    localProject: 'Rubber-duck debugging. 16 BCC parks with suburb ASPLEY (lat/long field per park) x 61 Translink stop records inside SAL30095 (our point-in-polygon). Haversine distance, R 6,371,008.8 m. Buggy JS (inner loop redeclares var i): 1 park checked, count 1, i ends at 62 (run in node, scratchpad au/b12/aspl_bug.js). Fixed (let i / let j): 16 checked, count 15 within 400 m; 16 within 800 m; max nearest-stop distance 410 m; median nearest 294 m; first park in file order Fred Campbell Park (nearest stop 174 m). The agent turns are our scripts, not model transcripts.',
    requiredMentions: ['5,463', '1,209', '586', 'Gympie Rd at Aspley', 'Aspley Hypermarket station', 'var i', 'rubber-duck', '410 metres', '16 of 16'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Aspley suburb and locality (SAL30095), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL30095'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities boundary service, used for our point-in-boundary checks and suburb areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Brisbane City Council open data, Park Locations (Creative Commons Attribution 4.0), dataset last modified 30 September 2026.',
        url: 'https://data.brisbane.qld.gov.au/explore/dataset/park-locations/'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'MDN Web Docs, var statement: var declarations are function-scoped and redeclaring a var does not create a new variable.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var'
      },
      {
        claim: 'David Thomas and Andrew Hunt, The Pragmatic Programmer (first edition 1999; 20th anniversary edition 2019), the rubber duck debugging technique; publisher page.',
        url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Queensland state school term dates.',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Walking distances or walking times to stops: not claimed; distances are straight-line.',
      'Any transcript from a commercial AI model: not claimed; the agent turns are our scripts.',
      'Passenger numbers at Aspley stops: not claimed.',
      'Any reason for the share of residents aged 85 and over: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Brisbane City Council or Translink.'
    ]
  }
};
