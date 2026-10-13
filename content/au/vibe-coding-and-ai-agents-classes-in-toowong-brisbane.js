'use strict';
// Toowong, Brisbane (cg- district page, Australia cluster Phase 8, row 292). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL32854, City of Brisbane) under Brisbane and Queensland.
// Spine: an agent asked how many city-bound trains leave Toowong between 7am and 9am on a weekday. A bare number
// cannot be checked; an agent that writes out each filtering step can be. Translink GTFS, Wednesday 21 October 2026.
// Our measurements (scratchpad au/b12, st_tw_bp.json): platform rows 2,362; Wednesday 189; 7-9am 29; city-bound 21.
// Lesson family: chain-of-thought, an agent showing step-by-step working; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'TOOWONG',
    label: 'Toowong, Brisbane',
    blurb: 'Vibe coding and AI agent classes for Toowong, where an agent counting morning trains must show every step of its working before anyone trusts the answer.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-toowong-brisbane',
  code: 'toow',
  accent: '#630F1D',
  accentRationale: 'Toowong: a deep claret (hue 350.0), 10.54:1 on #EDE7DA; 22.8 RGB from the nearest Queensland accent, 11.4 from any other Australian accent and 7.0 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Toowong',
    eyebrow: 'Toowong, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Toowong' },
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
  routeLabel: 'Toowong, Brisbane',
  title: 'Vibe Coding and AI Agents Classes in Toowong, Brisbane',
  description: 'Live online vibe coding and AI agent classes for Toowong students and adults, with Scratch and Python for children from six, in small groups or one to one.',
  ogDescription: 'Toowong agent project: 2,362 timetable rows, four filters written out step by step, and 21 city-bound morning trains a person can verify.',
  twitterDescription: 'Vibe coding and AI agents for Toowong learners, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Toowong',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults in Toowong, Brisbane, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Toowong',
  capsuleQ: 'How do Toowong learners make an AI agent\'s answers checkable?',
  capsule: 'By asking the agent to write out each step of its working, so a person can test every step against the data rather than trusting a final number. Live online lessons teach this through Python and agent projects. Toowong had 12,556 residents at the 2021 Census, median age 30.',
  lead: 'Four platforms, two directions and a timetable file listing every trip for two months. Ask an agent how many trains leave Toowong for the city on a weekday morning and you might get 202, or 29, or 21. Only one is right, and only an agent that shows its working lets you see which.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Toowong.',
  picks: {
    eyebrow: 'Course picks for Toowong',
    h2: 'Courses for building agents you can audit',
    intro: 'The train question needs Python, a little data handling and the discipline to make an agent explain itself. These courses cover all three; the trial lesson finds the right one.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Build apps with an AI partner while learning to read and test what it writes.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents for real projects, with plans and steps reviewed before changes land.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Prompting, tool use and evaluation of model output on real data.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python underneath every agent: files, filters and functions.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Toowong in the Census',
      h2: 'Apartments, students and a train station',
      intro: '2021 Census QuickStats for the suburb of Toowong (ABS code SAL32854), with the Queensland figure alongside where one is published.',
      body: [
        {
          kind: 'table',
          caption: 'Toowong in numbers, 2021',
          head: ['Measure', 'Toowong'],
          rows: [
            ['Residents', '12,556'],
            ['Median age', '30'],
            ['Families', '2,900'],
            ['Private dwellings', '6,203'],
            ['People per household', '2.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Toowong compared with Queensland',
          head: ['Indicator', 'Toowong', 'Queensland'],
          rows: [
            ['Dwellings that are flats or apartments', '67.9% (3,642)', '12.5%'],
            ['People in education who attend university', '49.5% (2,358)', '14.2%'],
            ['Workers who took the train to work', '5.7% (421)', '1.1%'],
            ['Workers who took a bus to work', '4.1% (301)', '1.7%'],
            ['Adults with a bachelor degree or higher', '53.4% (5,900)', '21.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Fewer young children', p: 'Residents aged 5 to 9 numbered 474 and those aged 10 to 14 numbered 533, small groups beside the student population.' },
            { h3: 'Small households', p: 'Households averaged 2.1 people, with 1.4 vehicles per dwelling across 6,203 private dwellings.' },
            { h3: 'A compact suburb', p: 'The ABS boundary covers about 4.1 square kilometres along the Brisbane River, west of the city centre.' }
          ]
        },
        {
          kind: 'p',
          text: 'Small random adjustments protect privacy in Census tables, so each figure appears exactly as the bureau published it and we do not total figures ourselves.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Twenty-one trains, four visible steps',
      intro: 'The question: how many trains leave Toowong station towards the city between 7am and 9am on Wednesday 21 October 2026? The Translink timetable feed answers it, but only after four filters, each easy to skip.',
      body: [
        {
          kind: 'table',
          caption: 'The working, one filter at a time (our calculation)',
          head: ['Step', 'Rule applied', 'Rows left'],
          rows: [
            ['1. Toowong platforms', 'Stop records for platforms 1 to 4', '2,362'],
            ['2. The right day', 'Trips whose service runs on Wednesday 21 October 2026', '189'],
            ['3. The right hours', 'Departures from 7:00am to before 9:00am', '29'],
            ['4. The right direction', 'Trips heading towards the city and the north', '21']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Where the 21 city-bound trains were going (our calculation)',
          head: ['Destination on the timetable', 'Trains'],
          rows: [
            ['Bowen Hills', '13'],
            ['Kippa-Ring', '4'],
            ['Caboolture', '3'],
            ['Nambour', '1']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Answer without working',
              p: 'Our scripted agent that skips step 2 counts city-bound trips from every day in the two-month feed and says 202. Skip step 4 instead and it says 29. Both sound plausible.'
            },
            {
              h3: 'Answer with working',
              p: 'Our scripted agent that prints each step and its row count lets a reader spot a wrong turn at once. Its answer, 21, is checkable line by line.'
            },
            {
              h3: 'The other eight',
              p: 'The 8 trains removed at step 4 were outbound: 4 to Springfield Central and 4 to Ipswich. The first city-bound train left at 7:03am, the last at 8:56am.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why the working matters',
          p: 'A timetable file lists every trip for every service pattern, weekends and public holidays included. Counting rows without filtering by day is the single most common slip with this kind of data, and a final number alone hides it completely. Written steps turn a guess you must trust into a claim you can verify.'
        },
        {
          kind: 'p',
          text: 'The timetable is Translink open data. The filters, row counts and destination totals are our calculation. Both agents described here are scripts we wrote to demonstrate the difference; they are not transcripts from any commercial AI model. Timetables give scheduled trains, not passengers.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Agents that explain',
      h2: 'Asking for the working, in practice',
      intro: 'Step-by-step output is not magic. It is a design choice in how an agent is prompted and how its tools report back.',
      body: [
        {
          kind: 'table',
          caption: 'Habits that make agent answers checkable',
          head: ['Habit', 'How', 'In the Toowong task'],
          rows: [
            ['Name each filter', 'Ask the agent to list its steps before the answer', 'Four filters, written out'],
            ['Report a count after each step', 'len() after every filter', '2,362, 189, 29, 21'],
            ['State assumptions', 'Write down the date and the time window', 'Wednesday 21 October, 7:00 to 8:59am'],
            ['Spot-check one row', 'Print a sample departure', 'A 7:03am train to Bowen Hills']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Explain a Scratch sprite\'s moves out loud, one block at a time, before pressing the green flag.' },
            { h3: 'Secondary learners', p: 'Build the four filters in Python, then prompt an AI to answer the same question and compare its steps with yours.' },
            { h3: 'Adults', p: 'Ask for working on every agent report at work, and reject any summary whose steps cannot be rerun.' }
          ]
        },
        {
          kind: 'p',
          text: 'Written steps are only useful if someone reads them. A model can also produce tidy-looking steps that do not match what it actually did, so the habit we teach is to rerun at least one step yourself rather than admire the explanation.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Toowong',
      h2: 'A rail and bus crossroads by the river',
      intro: 'Local markers drawn from the transit timetable, council open data and the Queensland school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Trains and buses',
              p: 'By our boundary check, 70 stop records inside the suburb had service on Wednesday 21 October 2026: 3,235 scheduled stop visits, 189 of them by train, on 35 routes.'
            },
            { h3: 'Busiest stop', p: 'Moggill Rd at BBC, stop 16, had 302 scheduled bus visits that Wednesday, tying with a temporary High Street stop.' },
            { h3: 'Term 2, 2027', p: 'Queensland state schools hold Term 2 of 2027 from Monday 12 April to Friday 25 June.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Toowong only',
          p: 'Council data places Toowong Library in the suburb, at Toowong Village. All counts here belong to Toowong alone; Auchenflower, St Lucia, Taringa and the other neighbours have their own figures, which we do not merge with these.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From explaining blocks to auditing agents',
    intro: 'Starting points depend on the learner, not the age; the trial lesson settles it.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and play',
        p: 'Games built block by block, with every move explained.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'First code and a clear sense of what AI can and cannot do.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Apps built with AI help, tested and explained by the learner.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents',
        p: 'Coding agents and generative AI for study and work.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'If the agent writes the code, what does a Toowong learner do?',
    intro: 'Decide what counts as a correct answer, and demand the working that proves it.',
    p1: 'Vibe coding lets a learner describe a goal and watch an AI produce the program. That is a real skill, and quick. But an agent that silently counts every trip in a feed will report 202 morning trains with the same confidence as the right figure.',
    p2: 'Learners who have built the four filters themselves know which step is easy to skip, so they read an agent\'s working for exactly that gap. That is the difference between using an agent and being used by one.',
    closer: 'In Toowong, the learner who asks "show me the steps" gets answers worth acting on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Toowong lessons run',
    intro: 'All lessons are live on video, so learners join from a flat, a college room or a family home.',
    cells: [
      { h3: 'Screens shared', p: 'Learners drive the keyboard while the teacher reads every prompt and output with them.' },
      { h3: 'Term-time plans', p: 'Lessons follow the Queensland school year and pause in its holidays.' },
      { h3: 'Trial at no cost', p: 'A full first class, with an honest suggestion at the end.' },
      { h3: 'Fifteen to twenty learners', p: 'Grouped by level and goal, with one-to-one lessons as the alternative.' },
      { h3: 'Twice each week', p: 'Fixed weekly times, roughly eight lessons a month.' },
      { h3: 'India time', p: 'Our teachers are in India: a 6pm Toowong class begins at 1:30pm India time, every week of the year.' }
    ],
    spec: {
      title: 'Fixed clocks',
      p: 'Brisbane has kept the same time all year since daylight saving last ended in March 1992 (IANA time zone database), and India keeps one time too, so the lesson hour never shifts.'
    }
  },
  fees: {
    h2: 'Toowong lesson fees',
    intro: 'Three prices apply to everyone.',
    first: 'The opening lesson costs nothing and ends with a written next step.',
    group: 'Group month: about eight live lessons with fifteen to twenty learners at one level.',
    private: 'Private month: about eight lessons, one learner and one teacher.',
    closer: 'Toowong learners pay in US dollars, never before the trial, and only once course and time are agreed. Holiday, absence and format-change rules are on the pricing page.'
  },
  reviewsH2: 'Google reviews from learners and parents',
  book: {
    h2: 'Book a free Toowong class',
    intro: 'Tell us the learner\'s age and goals. A university student might begin by making an agent show its working on the train question; a child might start with a Scratch game.',
    success: 'Thank you. We will contact you soon about a Toowong class.'
  },
  faq: {
    h2: 'Toowong vibe coding and agent questions',
    intro: 'Common questions from Toowong students, parents and working adults.',
    items: [
      {
        q: 'What is the population of Toowong?',
        a: 'The 2021 Census QuickStats count 12,556 people in the suburb of Toowong, with a median age of 30 and 6,203 private dwellings.'
      },
      {
        q: 'What is chain-of-thought prompting?',
        a: 'Asking an AI model to write out intermediate reasoning steps before its final answer. The steps can improve answers on multi-step problems and, more usefully for learners, give a person something concrete to check.'
      },
      {
        q: 'What is an AI agent?',
        a: 'A program in which an AI model plans and takes actions, such as reading files or running code, to reach a goal, rather than only replying to a single message.'
      },
      {
        q: 'How many morning trains leave Toowong for the city?',
        a: 'In the Translink timetable for Wednesday 21 October 2026, 21 trains departed Toowong towards the city between 7am and 9am, by our count; 8 more ran outbound.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Building software by describing what you want to an AI tool and refining its output in conversation. We teach it together with the skills to read and test the code produced.'
      },
      { q: 'Can under-18s use Claude in lessons?', a: 'No. Our Claude-based courses take learners aged 18 and over only; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Toowong?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Toowong learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio part of the group course?', a: 'No. Copilot Studio is taught one to one only; Toowong group learners build agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Brisbane and Queensland',
    h2: 'More for Toowong learners',
    html: 'See <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">the Brisbane guide</a> for the whole city or <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding for Brisbane children</a> for younger learners. West along the rail line, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-ipswich-qld">Ipswich</a> has a page too, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">the Queensland guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Toowong and Brisbane',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/vibe-coding-and-ai-agents-classes-in-ipswich-qld', label: 'Ipswich' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' }
  ],
  personalityCss: `
.cg-root.cg-toow .cg-hero-grid { align-items: center; gap: clamp(0.95rem, 2.9vw, 2.3rem); }
.cg-root.cg-toow .cg-hero h1 { font-weight: 620; letter-spacing: -0.024em; line-height: 1.09; }
.cg-root.cg-toow .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1.05rem; }
.cg-root.cg-toow .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-toow .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.014em; }
.cg-root.cg-toow .cg-grid-3 { gap: clamp(0.75rem, 1.9vw, 1.5rem); }
.cg-root.cg-toow .cg-table caption { font-style: italic; font-weight: 620; text-align: left; }
.cg-root.cg-toow .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-toow .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-toow .cg-callout { border-left-width: 4px; border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Toowong (SAL32854), ABS Census 2021 QuickStats (read 12 October 2026): 12,556 people; median age 30; 2,900 families; 6,203 private dwellings; 2.1 per household; 1.4 vehicles per dwelling; flats 3,642 (67.9%, Qld 12.5%); university 2,358 (49.5% of those attending education, Qld 14.2%); train to work 421 (5.7%, Qld 1.1%); bus 301 (4.1%, Qld 1.7%); bachelor or higher 5,900 (53.4%, Qld 21.9%); aged 5-9 474; 10-14 533. ABS SAL area 4.0658 sq km. Translink GTFS Wednesday 21 October 2026: 70 stop records with service inside the SAL polygon (our check); 3235 scheduled stop visits (bus 3046, train 189); 35 routes; busiest Moggill Rd at BBC, stop 16 (302). BCC Library Locations: Toowong Library at Toowong Village. Qld 2027 Term 2: Monday 12 April to Friday 25 June. Brisbane no daylight saving since March 1992 (IANA).',
    localProject: 'Chain-of-thought / visible working. Toowong station platforms 600287-600290 (parent place_twgsta), Translink SEQ GTFS feed 20261007-20261206 (CC BY 4.0). stop_times rows at platforms 2,362; active on Wednesday 21 Oct 2026 (calendar + calendar_dates) 189 (direction 0: 96, direction 1: 93); departures 07:00:00-08:59:59: 29; direction 1 (towards city, headsigns Bowen Hills 13, Kippa-Ring 4, Caboolture 3, Nambour 1) 21; direction 0 outbound 8 (Springfield Central 4, Ipswich 4). Without the date filter (direction kept) 202; without the direction filter 29; without both 308. First city-bound 07:03 headsign Bowen Hills. First city-bound 07:03, last 08:56. Both agents are our scripts, not model transcripts.',
    requiredMentions: ['6,203', '3,642', '7:03am', 'Auchenflower', '2,362', 'Moggill Rd at BBC', 'Toowong Library', 'Kippa-Ring', 'four filters'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Toowong suburb and locality (SAL32854), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32854'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities boundary service, used for our point-in-boundary checks and suburb areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Brisbane City Council open data, Library Locations (Creative Commons Attribution 4.0), dataset last modified 17 April 2025.',
        url: 'https://data.brisbane.qld.gov.au/explore/dataset/libraries-information-location/'
      },
      {
        claim: 'Jason Wei and others (2022), Chain-of-Thought Prompting Elicits Reasoning in Large Language Models, arXiv 2201.11903.',
        url: 'https://arxiv.org/abs/2201.11903'
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
      'Passenger numbers on Toowong trains or buses: not claimed; the feed gives scheduled services only.',
      'That written reasoning steps always reflect what a model actually did: rejected; the page says the steps must be rechecked.',
      'Any transcript from a commercial AI model: not claimed; both agents are our scripts.',
      'University enrolment figures for any named institution: not used.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Brisbane City Council, Translink or Queensland Rail.'
    ]
  }
};
