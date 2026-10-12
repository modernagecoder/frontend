'use strict';
// North Lakes, Brisbane (cg- district page, Australia cluster Phase 8, row 288). Keyword slug vibe-coding-and-ai-agents-classes-in-*,
// suburb page (ABS SAL32178, City of Moreton Bay) under Brisbane and Queensland. Moreton Bay LGA figures belong to the Moreton Bay
// page and are kept off this one.
// Spine: our scripted agent keeps a commuter's stop watchlist as an append-only event log (8 events). Event 7 removes the wrong stop
// and morning coverage (06:30-08:30 Wednesday visits) drops from 90 to 48; replaying the log with event 7 corrected gives 89.
// Script: scratchpad au/b11/p6_nlk.py. Lesson family: event sourcing for an agent's action log; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'NORTH LAKES',
    label: 'North Lakes, Brisbane',
    blurb: 'Vibe coding and AI agents classes for North Lakes, with a project on keeping an agent\'s actions in a log you can replay.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-north-lakes-brisbane',
  code: 'nlks',
  accent: '#74203C',
  accentRationale: 'North Lakes: a muted claret chosen by hand, at least 20 RGB units from every Queensland page accent and 10 from every Australian page accent',
  pageType: 'city',
  place: {
    name: 'North Lakes',
    eyebrow: 'North Lakes, City of Moreton Bay, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'North Lakes' },
      { type: 'AdministrativeArea', name: 'City of Moreton Bay' },
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
  routeLabel: 'North Lakes, Brisbane',
  title: 'Vibe Coding and AI Agents Classes in North Lakes, Brisbane',
  description: 'Live online vibe coding and AI agents classes for North Lakes learners: AI tools, Python and agents whose every action is logged, in small groups or one to one.',
  ogDescription: 'A North Lakes AI agents project: one wrong step halves a watchlist\'s morning buses, and an event log puts it right.',
  twitterDescription: 'North Lakes vibe coding and AI agents classes, live online, first class free.',
  ogImageCourse: 'teens-ai-tools-mastery-course',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for North Lakes',
    description: 'Vibe coding, AI agents and Python lessons for North Lakes children, teenagers and adults, matched by level and taught live online in English.'
  },
  h1: 'Vibe coding and AI agents classes in North Lakes',
  capsuleQ: 'What should a North Lakes learner know about AI agents?',
  capsule: 'That an agent should keep a diary, not just a result. Our scripted agent edits a commuter\'s list of North Lakes bus stops in eight steps and slips on step seven, cutting the morning buses it covers from 90 to 48. Because every step was written to a log, replaying it with the slip fixed restores 89.',
  lead: 'North Lakes is a suburb in the City of Moreton Bay, with a bus station rather than a railway platform. On Wednesday 21 October 2026 the Translink timetable lists 2,242 stop visits inside it, all by bus, on 11 routes. That is a small enough network for an AI agent to manage a personal watchlist of stops, and a good place to ask what happens when the agent gets one step wrong.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in North Lakes.',
  picks: {
    eyebrow: 'Course picks for North Lakes',
    h2: 'Courses in AI tools and agents',
    intro: 'Each course mixes AI assistance with code the learner understands. The trial lesson picks the starting point.',
    items: [
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Practical AI tools with judgement about when to trust them.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Projects built with AI help, then tested and explained.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games and stories made with kid-safe AI.' },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents on real projects, with review and rollback.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'North Lakes in the 2021 Census',
      h2: 'Families, houses and school-age children',
      intro: 'Counts for the North Lakes suburb (ABS SAL32178) from its 2021 Census QuickStats page, read on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'North Lakes headline counts',
          head: ['Measure', 'North Lakes'],
          rows: [
            ['People', '23,030'],
            ['Median age', '35'],
            ['Families', '6,444'],
            ['Private dwellings', '8,135'],
            ['People per household', '2.9'],
            ['Motor vehicles per dwelling', '1.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'North Lakes shares compared with Queensland',
          head: ['Share', 'North Lakes', 'Queensland'],
          rows: [
            ['Aged 5 to 9', '8.3% (1,913)', '6.4%'],
            ['Aged 10 to 14', '8.8% (2,018)', '6.6%'],
            ['Separate house', '84.9% (6,499)', '74.8%'],
            ['Car as driver to work', '60.0% (6,995)', '59.5%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Train commuters', p: 'Although no train stops in the suburb, 264 workers (2.3%) said they took a train to work, against 1.1% across Queensland.' },
            { h3: 'Teen years', p: 'There were 1,749 residents aged 15 to 19, 7.6% of the suburb.' },
            { h3: 'Read with care', p: 'The August 2021 Census fell during the pandemic, so how people travelled that week may not be typical.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau publishes rounded percentages and nudges small counts for privacy. We show its numbers exactly and do not combine rows into totals of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Eight steps, one slip, one replay',
      intro: 'A commuter asks an agent to track the North Lakes stops with the most Wednesday buses. Our scripted agent records every change as an event, and the watchlist is rebuilt from those events. Coverage counts the scheduled visits at watched stops between 6:30am and 8:30am.',
      body: [
        {
          kind: 'table',
          caption: 'The event log and the morning visits it covers (our calculation)',
          head: ['Event', 'Action', 'Morning visits covered'],
          rows: [
            ['1', 'Add North Lakes station, platform 2', '42'],
            ['2', 'Add Endeavour Bvd near Bergin St', '67'],
            ['3', 'Add Endeavour Bvd near Kerr Rd East', '84'],
            ['4', 'Add North Lakes station, platform 1', '96'],
            ['5', 'Remove Endeavour Bvd near Kerr Rd East', '79'],
            ['6', 'Add Endeavour Bvd near Oxley St', '90'],
            ['7', 'Remove North Lakes station, platform 2 (the slip)', '48'],
            ['8', 'Add Endeavour Bvd near Astley Pde', '58']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The slip',
              p: 'At step seven the agent was meant to remove the Oxley St stop. It removed the busiest platform instead, and the watchlist lost almost half its morning coverage.'
            },
            {
              h3: 'State alone hides it',
              p: 'If the agent had only saved the final list, we would see four stops and 58 morning visits, with no way to tell which step went wrong.'
            },
            {
              h3: 'Replay with a fix',
              p: 'Because each action is stored, we replace event 7 with the intended removal and rebuild. The corrected list covers 89 morning visits.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why agents need this',
          p: 'Agents act in steps, and any step can be wrong. An append-only log lets a person audit what happened, undo a single action, and test a fix by replaying, instead of guessing.'
        },
        {
          kind: 'p',
          text: 'Stop names and visit counts come from the Translink timetable. The agent, its eight actions and the mistake are our own script, written to show the idea, and we left the North Lakes Health Precinct stops out of the watchlist.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Event sourcing in Python',
      h2: 'Save the events, derive the state',
      intro: 'Event sourcing stores each change as a record, such as ("add", stop) or ("remove", stop), and computes the current state by applying them in order.',
      body: [
        {
          kind: 'table',
          caption: 'Learner steps',
          head: ['Step', 'What learners build'],
          rows: [
            ['1', 'Count Wednesday visits per North Lakes stop from the feed.'],
            ['2', 'Write an apply function that turns one event into a state change.'],
            ['3', 'Replay the eight events and print coverage after each one.'],
            ['4', 'Correct event 7, replay again, and compare.']
          ]
        },
        {
          kind: 'p',
          text: 'Version control works in a similar spirit: Git keeps every commit, so a bad change can be found and reverted. Banking ledgers record transactions rather than overwriting balances for the same reason.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Kids', p: 'Keep a step-by-step diary while moving pieces on a board, then rewind.' },
            { h3: 'Teenagers', p: 'Build the log and the replay in Python, then add an undo command.' },
            { h3: 'Adults', p: 'Design audit trails for agents that change files, tickets or databases.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around North Lakes',
      h2: 'A bus station and the 2027 school year',
      intro: 'Translink counts for Wednesday 21 October 2026 plus Queensland Department of Education dates.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'North Lakes station', p: 'In the timetable feed this is a bus station; platform 2 takes 271 Wednesday visits and platform 1 takes 102.' },
            { h3: 'Eleven routes', p: 'All 11 routes in the suburb that day are bus routes numbered in the 600s.' },
            { h3: 'Term dates', p: 'Term 1 of 2027 for Queensland state schools runs from Wednesday 27 January to Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'North Lakes is the ABS suburb outline of about 11.73 square kilometres; it holds 47 stop records by our own point-in-polygon test. Figures for the wider City of Moreton Bay belong on our Moreton Bay page.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From step diaries to agent logs',
    intro: 'Age bands are rough; the free lesson sets the level.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Steps in order',
        p: 'Scratch programs that follow and undo instructions.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'Making with AI',
        p: 'Games built with AI help and checked by hand.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Tools and logs',
        p: 'Python programs that record and replay what they do.',
        courses: ['teens-ai-tools-mastery-course', 'vibe-coding-for-teens-python-web-ai-projects-course']
      },
      {
        band: 'University and adult',
        h3: 'Trustworthy agents',
        p: 'Auditing, rollback and review for working agents.',
        courses: ['python-ai-automation-masterclass-college', 'complete-generative-ai-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent can do the work, why learn to code?',
    intro: 'So you can check what it did.',
    p1: 'Vibe coding lets a learner describe a goal and get working code quickly. Agents go further and take actions on their own. Both are useful, and both make mistakes that look like success.',
    p2: 'Our watchlist agent never crashed; it just quietly removed the wrong stop. Learners who can read a log, find step seven and replay a fix are the ones who can safely hand real work to an agent.',
    closer: 'North Lakes learners practise directing AI and auditing its actions.',
    blogAnchor: 'whether learning to code is still worthwhile'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons for North Lakes',
    intro: 'Lessons run over live video, so learners join from home.',
    cells: [
      { h3: 'Live sessions', p: 'A teacher guides each lesson and reviews code as it is written.' },
      { h3: 'Queensland terms', p: 'Weekly classes follow the school terms and break for holidays.' },
      { h3: 'First class free', p: 'A complete trial lesson, then a written suggestion for next steps.' },
      { h3: 'Level groups', p: 'Five to ten learners at one level, or private lessons.' },
      { h3: 'Frequency', p: 'Two classes a week, about eight a month.' },
      { h3: 'Teachers in India', p: 'A 5:30pm North Lakes class is 1pm in India, every week.' }
    ],
    spec: {
      title: 'No daylight saving',
      p: 'According to the IANA time zone database, Queensland\'s last daylight saving ended in March 1992, so the time gap with India stays at four and a half hours.'
    }
  },
  fees: {
    h2: 'North Lakes class fees',
    intro: 'The same fees apply to everyone.',
    first: 'The first class is free and finishes with a plan.',
    group: 'Group classes: close to eight a month, five to ten learners.',
    private: 'Private classes: close to eight a month, one teacher, one learner.',
    closer: 'North Lakes fees are in US dollars and begin only when the trial has settled the course and weekly times. Holiday and missed-class rules are on the pricing page.'
  },
  reviewsH2: 'Google reviews from learners and parents',
  book: {
    h2: 'Book a free North Lakes class',
    intro: 'Tell us the learner\'s age and interests. A child could start with an undo game in Scratch; a teenager could build the replayable watchlist.',
    success: 'Thank you. We will be in touch soon about a North Lakes class.'
  },
  faq: {
    h2: 'North Lakes vibe coding and AI agents questions',
    intro: 'Questions we hear from North Lakes families and adult learners.',
    items: [
      {
        q: 'How many people live in North Lakes?',
        a: 'The 2021 Census counted 23,030 people in the North Lakes suburb, with a median age of 35 and 6,444 families.'
      },
      {
        q: 'What is event sourcing?',
        a: 'A way of storing data as the list of changes that happened, in order, and rebuilding the current state by replaying them.'
      },
      {
        q: 'Why should an AI agent keep a log?',
        a: 'So people can see every action it took, spot a wrong one, undo it and replay the rest, rather than trusting only the final result.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Describing a program in plain language to an AI tool, letting it draft the code, then reading, testing and correcting that draft.'
      },
      {
        q: 'Can younger children learn about agents?',
        a: 'They learn the ideas, such as steps, order and undo, through Scratch and kid-safe tools. Real agent building suits teenagers and adults.'
      },
      {
        q: 'Is there a train station in North Lakes?',
        a: 'Not inside the suburb outline. North Lakes station in the Translink feed is a bus station, and every Wednesday visit there is by bus.'
      },
      {
        q: 'Do you have a centre in North Lakes?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do North Lakes classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is the adult coding agents course open to teens?', a: 'No, it is for ages 18 and over. Teenagers take the teen AI tools and vibe coding courses.' }
    ]
  },
  next: {
    eyebrow: 'More nearby',
    h2: 'Related pages',
    html: 'Visit the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-moreton-bay">Moreton Bay page</a> for the council area, the <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane page</a> for the region, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> for the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'North Lakes and Brisbane',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-moreton-bay', label: 'Moreton Bay' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-nlks .cg-hero-grid { align-items: stretch; gap: clamp(1.2rem, 2.9vw, 2.4rem); }
.cg-root.cg-nlks .cg-hero h1 { font-weight: 690; letter-spacing: -0.022em; line-height: 1.04; }
.cg-root.cg-nlks .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-nlks .cg-eyebrow { letter-spacing: 0.085em; font-weight: 630; font-size: 0.79rem; }
.cg-root.cg-nlks .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.008em; }
.cg-root.cg-nlks .cg-grid-3 { gap: clamp(1.05rem, 2.6vw, 1.85rem); }
.cg-root.cg-nlks .cg-table caption { text-align: left; font-weight: 650; }
.cg-root.cg-nlks .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-nlks .cg-ladder-col { border-left: 1px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-nlks .cg-callout { border-radius: 1px; }
`,
  dossier: {
    curriculumAuthority: 'North Lakes (SAL32178), ABS Census 2021 QuickStats (read 12 October 2026): 23,030 people; median age 35; 6,444 families; 8,135 private dwellings; 2.9 people per household; 1.9 vehicles per dwelling; aged 5-9 1,913 (8.3%, Queensland 6.4%); aged 10-14 2,018 (8.8%, Queensland 6.6%); aged 15-19 1,749 (7.6%); separate houses 6,499 (84.9%, Queensland 74.8%); car as driver 6,995 (60.0%, Queensland 59.5%); train to work 264 (2.3%, Queensland 1.1%). ABS SAL area 11.7335 square kilometres. Translink SEQ GTFS, Wednesday 21 October 2026: 47 stop records in the SAL polygon; 2,242 stop visits, all bus; 11 routes (668, 676, 679-682, 684, 685, 687-689); North Lakes station (bus) platform 2 271 visits and platform 1 102. Queensland 2027 Term 1: Wednesday 27 January to Thursday 25 March. Brisbane: no daylight saving since March 1992 (IANA 2026e).',
    localProject: 'Our scripted agent edits a stop watchlist through 8 add/remove events over the six busiest North Lakes stops (Health Precinct stops excluded). Coverage = Wednesday visits 06:30-08:30 at watched stops: 42, 67, 84, 96, 79, 90, then event 7 wrongly removes North Lakes station platform 2 (intended: Endeavour Bvd near Oxley St): 48, then 58. Replay with event 7 corrected: 89. Script: scratchpad au/b11/p6_nlk.py.',
    requiredMentions: ['23,030', '6,444', '8,135', '8.3% (1,913)', '84.9% (6,499)', '2,242', 'North Lakes station', '90 to 48', '271 Wednesday visits'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, North Lakes suburb and locality (SAL32178), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32178'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Queensland term dates (Term 1 Wednesday 27 January to Thursday 25 March).',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'City of Moreton Bay LGA figures: kept on the Moreton Bay page, not used here.',
      'A real agent product or real user behaviour: not claimed; the agent and its mistake are our script.',
      'Passenger numbers: not claimed; the feed is a schedule.',
      'Health precinct stops: excluded from the watchlist; no health data used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any connection with Moreton Bay City Council, Translink or the Queensland Department of Education.'
    ]
  }
};
