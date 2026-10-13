'use strict';
// Helensvale, Gold Coast (cg- district page, Australia cluster Phase 8, row 340). Keyword slug vibe-coding-and-ai-agents-classes-in-*,
// suburb page (ABS SAL31315) in the City of Gold Coast, under Gold Coast and Queensland.
// Spine: an agent's itinerary checker for train to G:link connections at Helensvale station, Wednesday 21 October 2026 (Translink
// SEQ GTFS). 88 train stops, 125 southbound tram departures. Without a minimum connection time the first tram is within 4 minutes for
// 57 of 88 trains (median wait 3.0 min); with a 4-minute minimum (our assumption) the median wait is 9.5 min and rejected tight
// plans cost a median 7.5 extra minutes; the last 2 trains have no tram after them. Script: scratchpad au/b18/a_hlnv.py.
// Lesson family: connection-time constraints in an agent's trip plan; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'HELENSVALE',
    label: 'Helensvale, Gold Coast',
    blurb: 'Vibe coding and AI agent classes for Helensvale, where an agent planning train-to-tram changes must reject 57 connections that look perfect on paper.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-helensvale-gold-coast',
  code: 'hlnv',
  accent: '#92284E',
  accentRationale: 'Helensvale: a muted mulberry (hue 338.5, s 0.73, v 0.57), at least 20.6 RGB from every Queensland page accent and all claimed accents, 10.2 from other AU accents and 7.7 from every other site colour; 6.5:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Helensvale',
    eyebrow: 'Helensvale, City of Gold Coast, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Helensvale' },
      { type: 'AdministrativeArea', name: 'City of Gold Coast' },
      { type: 'City', name: 'Gold Coast' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-gold-coast', name: 'Gold Coast' }
  ],
  nav: [
    { label: 'Gold Coast', href: '/best-coding-classes-in-gold-coast' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Helensvale, Gold Coast',
  title: 'Vibe Coding and AI Agents Classes in Helensvale, Gold Coast',
  description: 'Live online vibe coding and AI agent classes for Helensvale, ages 6 to adult, with an agent that checks every train-to-tram change at Helensvale station.',
  ogDescription: 'An agent planning trips at Helensvale station offered 57 tram connections under four minutes. A rule that checks each change rewrote them.',
  twitterDescription: 'AI agents and vibe coding for Helensvale learners: live online, first session free.',
  ogImageCourse: 'complete-generative-ai-masterclass-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Helensvale',
    description: 'Agent, vibe coding and Python lessons for Helensvale children, teenagers and adults, matched to level after a free trial.'
  },
  h1: 'Vibe coding and AI agents classes in Helensvale',
  capsuleQ: 'What does the Helensvale agent project check?',
  capsule: 'Whether an agent\'s travel plan can actually be followed. At Helensvale station, trains meet the G:link tram. A naive agent offers the very next tram after each train, even when it leaves a minute later. Learners add a checker that rejects any change shorter than a minimum time and then measure what that does to real Wednesday timetables.',
  lead: 'Helensvale is the northern Gold Coast suburb where the heavy-rail Gold Coast line meets the G:link tram. On a Wednesday the timetable stops 88 trains and runs 125 southbound tram departures from the station. Families who make that change know that a two-minute gap on paper is not always two minutes on the platform.',
  wa: 'Hi, this is a Helensvale family. Could we arrange a trial lesson on building AI agents?',
  picks: {
    eyebrow: 'Course picks for Helensvale',
    h2: 'Agents, vibe coding and Python',
    intro: 'Courses for learners who want agents that make plans people can trust. The trial session decides.',
    items: [
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Planning agents, tools and checks on their output.' },
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 17', note: 'Agents built and tested by teenagers, step by step.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Times, sorting and searching in Python.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 6 to 12', note: 'First projects built with AI help, in blocks.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Helensvale in the Census',
      h2: 'Family houses near the interchange',
      intro: 'Helensvale\'s 2021 Census profile (ABS suburb code SAL31315), as the QuickStats page showed it on 13 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Helensvale counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '18,949'],
            ['Median age', '41'],
            ['Families', '5,335'],
            ['Private dwellings', '6,912'],
            ['People per household', '2.8'],
            ['Motor vehicles per dwelling', '2.2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Helensvale shares compared with Queensland',
          head: ['Share', 'Helensvale', 'Queensland'],
          rows: [
            ['Separate houses', '81.3% (5,181)', '74.8%'],
            ['Couple families with children', '48.5% (2,588)', '41.2%'],
            ['Residents aged 15 to 19', '7.3% (1,384)', '6.1%'],
            ['Worked at home', '15.1% (1,422)', '14.1%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Helensvale had a larger share of residents aged 15 to 19 than Queensland as a whole: 7.3% against 6.1%.' },
            { h3: 'Cars too', p: 'Homes averaged 2.2 motor vehicles, and 63.8% of workers drove to work in 2021.' },
            { h3: 'Census caveat', p: 'The 2021 Census ran during the pandemic, so travel and home-working answers describe that week.' }
          ]
        },
        { kind: 'p', text: 'Figures are as the bureau published them, rounded and with small counts lightly adjusted; we never add parts into totals.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A plan is only as good as its tightest change',
      intro: 'The agent answers "I am arriving at Helensvale by train; when can I catch the tram south?" Its tool reads the Translink timetable for Wednesday 21 October 2026: 88 train stops at platforms 1 and 2, and 125 southbound G:link departures. The naive version returns the first tram after the train. The checked version enforces a minimum connection time, which we set at four minutes.',
      body: [
        {
          kind: 'table',
          caption: 'Train arrivals and the next southbound tram (our calculation)',
          head: ['Rule', 'Median wait', 'Notes'],
          rows: [
            ['Any later tram', '3.0 minutes', '57 of 88 trains offered a tram within 4 minutes'],
            ['At least 2 minutes', '7.5 minutes', 'Many very tight changes removed'],
            ['At least 4 minutes', '9.5 minutes', 'Rejected tight plans cost a median 7.5 extra minutes'],
            ['After the last tram', 'none', 'The last 2 trains of the day have no tram after them']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why naive plans fail',
              p: 'A train can be a minute late, and walking from the rail platforms to the tram takes time. A plan that needs a 1-minute change is a gamble the agent should not offer as certain.'
            },
            {
              h3: 'The checker',
              p: 'Every leg of a plan is validated: the next leg must leave at least the minimum time after the previous one arrives, or the plan is rejected and searched again.'
            },
            { h3: 'Worst case', p: 'With the four-minute rule, the longest wait for a southbound tram after a train is 25.5 minutes, the same as without it.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Assumptions belong in the answer',
          p: 'The four-minute minimum is our assumption, not a Translink rule. A trustworthy agent says so, lets the person change it and shows how the plan moves when it does. Learners make the minimum a parameter and print it with every itinerary.'
        },
        {
          kind: 'p',
          text: 'Every departure time here is from the South East Queensland timetable file that Translink publishes on data.qld.gov.au under CC BY 4.0, covering 7 October to 6 December 2026. We match Helensvale station by its stop names; waits, rules and tallies come from our own scripts.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Building the checker',
      h2: 'Validate every leg before you answer',
      intro: 'The checker sits between the agent\'s plan and the person, and it is deliberately boring code.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load Helensvale station stop times for one Wednesday and split trains from trams.'],
            ['2', 'Write next_tram(arrival, minimum) with bisect on sorted departure times.'],
            ['3', 'Run it for minimums of 0, 2, 4 and 6 minutes and tabulate waits.'],
            ['4', 'Wrap it as a validator the agent must call before sending any plan.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 4 changes the agent\'s behaviour. When the validator rejects a plan, the agent must search again and explain the longer wait in plain words. Learners also handle the end of the day, where no valid tram exists and the honest answer is to say so rather than invent one.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Plan a two-step journey with a toy train and see what happens when one step runs late.' },
            { h3: 'Teenagers', p: 'Build the validator in Python and connect it to an agent that explains rejections.' },
            { h3: 'Adults', p: 'Add constraint checks to scheduling or logistics agents before their plans reach people.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Helensvale',
      h2: 'Routes, stops and the 2027 school year',
      intro: 'Local facts from the Translink feed and the Queensland Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Many routes',
              p: 'In the feed of 7 October 2026, 23 route names stop inside Helensvale, from G:link and Gold Coast line services to local buses.'
            },
            { h3: 'Stop records', p: 'Our map test places 87 Translink stop records inside the Helensvale outline.' },
            { h3: 'Mid-year start', p: 'In 2027 the second Queensland school term opens on Monday 12 April and closes on Friday 25 June, a sensible time to begin.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'We work within the bureau\'s Helensvale boundary, roughly 20.1 square kilometres; every one of its 87 stop records also falls inside the City of Gold Coast council area by our test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From toy trains to checked agents',
    intro: 'Ages give a starting point; the trial decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Steps and timing',
        p: 'Scratch projects about sequences and waiting.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI',
        p: 'Times, lists and first looks at AI planning.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Agents',
        p: 'Tools, validators and agents that explain.',
        courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents at work',
        p: 'Planning agents with constraints for real tasks.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'Won\'t a smarter model plan better on its own?',
    intro: 'It may plan more fluently. It still needs rules it cannot talk its way around.',
    p1: 'A language model can produce an itinerary that reads perfectly and still asks someone to cross a station in one minute. Nothing in the prose reveals the problem.',
    p2: 'Helensvale learners put a simple, tested validator between the model and the person. The model proposes; the code checks; only valid plans go out.',
    closer: 'Our agent classes teach that a good agent is a model plus guard rails.',
    blogAnchor: 'why coding is still worth learning alongside AI agents'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Helensvale sessions, online',
    intro: 'Sessions are live video calls, so nobody needs to catch a train to class.',
    cells: [
      { h3: 'Real-time teacher', p: 'A teacher leads each session and looks at learners\' code live.' },
      { h3: 'Term-based', p: 'Sessions follow Queensland school terms with holiday breaks.' },
      { h3: 'Free first session', p: 'A trial at no cost, then a written plan.' },
      { h3: 'Group or private', p: 'Groups of five to ten by level, or one-to-one.' },
      { h3: 'Weekly rhythm', p: 'Two sessions a week, about eight a month.' },
      { h3: 'India hours', p: 'A 4:30pm Helensvale session is noon in India every day of the year.' }
    ],
    spec: {
      title: 'No clock change',
      p: 'The time zone database maintained by IANA records Queensland\'s last switch away from daylight saving in March 1992, so session times stay put.'
    }
  },
  fees: {
    h2: 'Helensvale fees',
    intro: 'The same fees apply to all learners.',
    first: 'The first session is free and includes a plan.',
    group: 'Group: around eight sessions monthly, five to ten learners.',
    private: 'Private: around eight sessions monthly with one teacher.',
    closer: 'Fees are charged in US dollars once the trial has agreed a course and weekly slot. The pricing page explains holidays and missed sessions.'
  },
  reviewsH2: 'Parents on Google',
  book: {
    h2: 'Book a free Helensvale session',
    intro: 'Tell us the learner\'s age and interests. A child might plan a toy-train trip; a teenager might build the connection checker.',
    success: 'Thanks. We will contact you about a Helensvale session.'
  },
  faq: {
    h2: 'Helensvale agents and vibe coding questions',
    intro: 'Questions from Helensvale families and adult learners.',
    items: [
      { q: 'How many people live in Helensvale?', a: 'The 2021 Census counted 18,949 people in the Helensvale suburb, median age 41.' },
      { q: 'What is a minimum connection time?', a: 'The shortest change between two services a plan will accept. Here we use four minutes as an assumption.' },
      { q: 'Why not let the AI decide what is realistic?', a: 'Because its judgement cannot be tested. A written rule can, and the agent can explain it.' },
      {
        q: 'Does Translink publish a minimum transfer time here?',
        a: 'Not in the files we used, so the page labels the four-minute figure as our assumption.'
      },
      {
        q: 'Can children learn about agents?',
        a: 'Younger learners start with sequences and simple AI ideas; agents with validators suit teenagers and adults.'
      },
      {
        q: 'How many trains stop at Helensvale on a Wednesday?',
        a: 'The timetable for 21 October 2026 has 88 train stops at the station, 44 in each direction.'
      },
      {
        q: 'Do you have a centre in Helensvale?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Helensvale classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are learners grouped?',
        a: 'Groups of five to ten share a level and pace, whatever their age or suburb. If no group time suits, one-to-one lessons are an option.',
        boiler: true
      },
      { q: 'Can adults build agents here?', a: 'Yes. Adults study in their own groups or privately, often on planning problems from work.' }
    ]
  },
  next: {
    eyebrow: 'More for Gold Coast learners',
    h2: 'More to explore',
    html: 'Helensvale learners can also visit the <a class="cg-inline-link" href="/best-coding-classes-in-gold-coast">Gold Coast page</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teenagers</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Helensvale and the Gold Coast',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-gold-coast', label: 'Kids on the Gold Coast' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-hlnv .cg-hero-grid { align-items: start; gap: clamp(0.95rem, 2.3vw, 1.95rem); }
.cg-root.cg-hlnv .cg-hero h1 { font-weight: 635; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-hlnv .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-hlnv .cg-eyebrow { letter-spacing: 0.095em; font-weight: 695; font-size: 0.8rem; }
.cg-root.cg-hlnv .cg-section-head h2 { max-width: 23ch; }
.cg-root.cg-hlnv .cg-grid-3 { gap: clamp(1.05rem, 2.6vw, 1.8rem); }
.cg-root.cg-hlnv .cg-table caption { text-align: left; font-weight: 655; font-size: 0.88rem; }
.cg-root.cg-hlnv .cg-table td { hyphens: auto; }
.cg-root.cg-hlnv .cg-ladder-col { border-left: 3px double var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-hlnv .cg-callout { border-radius: 12px; }
`,
  dossier: {
    curriculumAuthority: 'Helensvale (SAL31315), ABS Census 2021 QuickStats (read 13 October 2026): 18,949 people; median age 41; 5,335 families; 6,912 private dwellings; 2.8 people per household; 2.2 vehicles per dwelling; separate houses 5,181 (81.3%, Queensland 74.8%); couple families with children 2,588 (48.5%, Queensland 41.2%); aged 15-19 1,384 (7.3%, Queensland 6.1%); worked at home 1,422 (15.1%, Queensland 14.1%); car as driver 6,005 (63.8%). ABS SAL area 20.1329 sq km. Translink SEQ GTFS (feed 7 October to 6 December 2026): 87 stop records in the SAL by our test, all inside the City of Gold Coast LGA outline; 23 route names. Helensvale station Wednesday 21 October 2026: rail platforms 1 and 2, 88 train stop events (44 towards Varsity Lakes, 37 Domestic Airport, 7 Bowen Hills); G:link platforms 4 and 5, 125 departures headed Burleigh Heads, 139 arrivals terminating. Queensland 2027 Term 2 Monday 12 April to Friday 25 June. Brisbane time, no DST since March 1992 (IANA 2026e).',
    localProject: 'For each of 88 train arrivals at Helensvale station (Wednesday 21 October 2026), next G:link departure towards Burleigh Heads (125) with minimum connection 0, 2, 4, 6 minutes (bisect on sorted times): 86 trains have a later tram (last 2 trains after the last tram at 23:47); median wait 3.0 (0 min), 7.5 (2 min), 9.5 (4 min), 9.5 (6 min); max 25.5. With 0 minimum, 57 of 88 trains get a tram within 4 minutes; rejecting those under a 4-minute rule adds median 7.5, max 15 minutes. Four-minute minimum is our assumption. Our calculation. Script: scratchpad au/b18/a_hlnv.py.',
    requiredMentions: [
      '18,949',
      '6,912',
      '81.3% (5,181)',
      '48.5% (2,588)',
      '125 southbound tram departures',
      '57 of 88 trains',
      '9.5 minutes',
      'four-minute minimum',
      '87 Translink stop records'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Helensvale suburb and locality (SAL31315), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL31315'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Term 1 Wednesday 27 January to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Tuesday 5 October to Friday 10 December.',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'An official Translink minimum transfer time: not claimed; the four-minute figure is our assumption.',
      'Walking times between platforms: not measured or claimed.',
      'Reliability or punctuality of trains or trams: not claimed; the feed gives scheduled times.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Gold Coast, Translink or the Queensland Department of Education.'
    ]
  }
};
