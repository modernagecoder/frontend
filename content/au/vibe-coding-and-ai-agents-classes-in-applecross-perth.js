'use strict';
// Applecross, Perth (cg- district page, Australia cluster Phase 8, row 312). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL50022, City of Melville) under Perth and Western
// Australia.
// Spine: a question with a false premise, "Which train station is in Applecross?" None of the 34 stop records inside
// Applecross is rail. The nearest rail records, Canning Bridge Stn platforms 1 and 2 (labelled Como), are 540 m and
// 542 m from the closest Applecross stop record. A sycophantic agent invents a station; a careful one corrects the premise.
// Data: PTA-001 Stops (CC BY 4.0). Agent turns are our scripts. Lesson family: false premises and sycophancy; claimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'APPLECROSS',
    label: 'Applecross, Perth',
    blurb: 'Vibe coding and AI agent classes for Applecross, where an agent asked which train station the suburb has must first say: none.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-applecross-perth',
  code: 'apcr',
  accent: '#925516',
  accentRationale: 'Applecross: a burnt ochre (hue 30.5), 4.82:1 on #EDE7DA; 30.0 RGB from the nearest Western Australian accent, 12.4 from any other Australian accent and 7.5 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Applecross',
    eyebrow: 'Applecross, City of Melville, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Applecross' },
      { type: 'AdministrativeArea', name: 'City of Melville' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Applecross, Perth',
  title: 'Vibe Coding and AI Agents Classes in Applecross, Perth',
  description: 'Live online vibe coding and AI agent classes for Applecross teenagers and adults, with Scratch and Python for younger learners, taught in small groups or one to one.',
  ogDescription: 'Applecross agent project: asked which train station Applecross has, one agent invents one; the other checks 34 stop records and says there is none.',
  twitterDescription: 'Vibe coding and AI agent classes for Applecross, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Applecross',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults in Applecross, Perth, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Applecross',
  capsuleQ: 'How can Applecross learners stop an AI agent agreeing with a wrong assumption?',
  capsule: 'By asking questions an agent can check against data, and by rewarding answers that correct the question rather than please the asker. Our live online classes teach vibe coding and agents with that discipline. Applecross had 7,228 residents at the 2021 Census.',
  lead: 'Ask "which train station is in Applecross?" and you have already assumed there is one. An agent eager to help may name a station that does not exist. The state stops file settles it: none of the 34 stop records inside Applecross is a rail stop.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Applecross.',
  picks: {
    eyebrow: 'Course picks for Applecross',
    h2: 'Courses that teach agents to check before agreeing',
    intro: 'This project needs prompting skill, a little Python and a habit of testing claims against data. These courses build it; a free first lesson chooses the right one.',
    items: [
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'How language models answer, where they go wrong and how to ground them.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Building with AI, then testing what it says against real data.'
      },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Getting reliable answers from AI tools and noticing when they guess.' },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents for real work, with checks on every claim they make.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Applecross in the Census',
      h2: 'A riverside suburb that rides the bus',
      intro: 'A selection of 2021 Census QuickStats for the suburb of Applecross (ABS code SAL50022), next to the Western Australian figure.',
      body: [
        {
          kind: 'table',
          caption: 'Applecross basics, 2021',
          head: ['Measure', 'Applecross'],
          rows: [
            ['Residents', '7,228'],
            ['Median age', '44'],
            ['Families', '2,063'],
            ['Private dwellings', '3,304'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Applecross set against the state',
          head: ['Indicator', 'Applecross', 'Western Australia'],
          rows: [
            ['Workers who took a bus to work', '6.3% (226)', '2.9%'],
            ['Semi-detached, row or townhouse homes', '21.5% (599)', '13.0%'],
            ['Flats or apartments', '16.6% (462)', '6.5%'],
            ['Adults with a bachelor degree or higher', '47.2% (2,850)', '23.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School ages', p: 'The suburb counted 439 residents aged 5 to 9, 454 aged 10 to 14 and 394 aged 15 to 19.' },
            { h3: 'Working from home', p: 'On Census day 12.9% of employed residents, 463 people, worked at home, against 7.5% statewide.' },
            { h3: 'Small and central', p: 'Applecross covers about 3.2 square kilometres on the south bank of the Swan River.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census figures are reproduced unchanged. The bureau\'s privacy adjustments mean small cells should not be added up, and we do not add them.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The station that is not there',
      intro: 'We put one question to two scripted agents: "Which train station is in Applecross, and how many platforms does it have?" Both could read the state stops file. One was told to be helpful; the other was told to check every assumption in a question first.',
      body: [
        {
          kind: 'table',
          caption: 'What the stops file says (our calculation)',
          head: ['Check', 'Result'],
          rows: [
            ['Stop records inside Applecross', '34'],
            ['Of those, rail stop records', '0'],
            ['Nearest rail records', 'Canning Bridge Stn platforms 1 and 2'],
            ['Suburb label on those records', 'Como'],
            ['Distance from the closest Applecross stop record', '540 m and 542 m'],
            ['Next nearest rail record', 'Bull Creek Stn, about 3.4 km']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The two scripted answers',
          head: ['Agent', 'Answer'],
          rows: [
            ['Eager to please', 'Names an "Applecross Station" with two platforms'],
            [
              'Checks the premise',
              'No station lies inside Applecross; the nearest platforms belong to Canning Bridge station, about 540 m away'
            ]
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why agents agree',
              p: 'Models are trained partly on human approval, and people tend to approve answers that go along with them. A question that assumes something nudges the model to assume it too.'
            },
            {
              h3: 'What grounding does',
              p: 'With the stops file in reach, the premise becomes testable: filter the 34 records for rail, find none, then search outward for the nearest platform.'
            },
            {
              h3: 'A local twist',
              p: 'The file labels 40 records Applecross, but only 34 sit inside the ABS boundary. Even the data needs a careful reading before it answers anything.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Rewarding the correction',
          p: 'The useful answer here begins with "There is no station in Applecross". When building or prompting agents, treat a corrected premise as a success, not a failure to answer, and test agents with a few deliberately wrong questions before trusting them.'
        },
        {
          kind: 'p',
          text: 'Stop records are Public Transport Authority of Western Australia open data. Membership of Applecross, the distances (straight-line between stop points) and the label counts are our calculation. Both agents are scripts we wrote to show the two behaviours; they are not transcripts from any commercial AI model.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Prompting and checking',
      h2: 'Testing an agent with false premises',
      intro: 'A handful of trick questions reveals more about an agent than a hundred easy ones.',
      body: [
        {
          kind: 'table',
          caption: 'A premise-testing routine',
          head: ['Step', 'How', 'Applecross example'],
          rows: [
            ['Write a false-premise question', 'Assume something the data contradicts', 'Which station is in Applecross?'],
            ['Give the agent the data', 'A tool or file it can query', 'The state stops file'],
            ['Score the answer', 'Did it correct the premise?', 'Yes: no rail records'],
            ['Ask for evidence', 'Request the query or count behind it', '0 of 34 records are rail']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Play "spot the trick question" with sentences like "what colour is the sun\'s moustache?"' },
            { h3: 'Secondary learners', p: 'Write five false-premise questions about Perth data and test how an AI tool handles each.' },
            { h3: 'Adults', p: 'Before relying on an agent at work, check how it responds when a request contains a wrong assumption.' }
          ]
        },
        {
          kind: 'p',
          text: 'Instructions such as "if the question rests on a false assumption, say so first" help, but they are not a guarantee. The evidence step, where the agent shows the count that supports its answer, is what makes the correction trustworthy.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Applecross',
      h2: 'Canning Highway, Matheson Road and Kintail Road',
      intro: 'Local details from the state stops file and the WA school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'All bus stops', p: 'Every one of the 34 stop records inside Applecross is a standard bus stop, and 12 are marked as having a bay.' },
            { h3: 'Three main roads', p: 'Canning Highway and Matheson Road carry 11 stop records each, and Kintail Road 10.' },
            { h3: 'Term 2, 2027', p: 'WA public school Term 2 of 2027 begins on Monday 26 April and ends on Friday 2 July.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Applecross in the City of Melville',
          p: 'Figures here cover the suburb of Applecross only. By the ABS boundaries it touches Ardross, Alfred Cove and Mount Pleasant on land, and those suburbs keep their own figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From trick questions to grounded agents',
    intro: 'The ages below are only a starting guide; the trial lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games, puzzles and spotting tricks.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI literacy',
        p: 'First code and a clear-eyed view of AI.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Building with AI and testing its claims.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents at work',
        p: 'Grounded, checkable agents for real tasks.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'If the agent always agrees, who corrects the question?',
    intro: 'The learner who knows the data. Agreeable AI feels helpful right up to the moment it confirms something false.',
    p1: 'Vibe coding and agent work run on questions. A question that smuggles in a wrong assumption, a station that does not exist, gets an answer built on that assumption unless the agent is designed and tested to push back.',
    p2: 'Learners who have watched one agent invent a station and another correct the premise learn to word requests carefully and to value answers that say "that is not quite right". That is how AI becomes a reliable colleague.',
    closer: 'In Applecross, the learner who checks the premise gets the truth, not a polite invention.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Applecross classes over video',
    intro: 'Lessons are taught live online, so learners never need to travel.',
    cells: [
      { h3: 'Prompts on screen', p: 'Every question to an AI tool and every answer is read together and challenged.' },
      { h3: 'Aligned with school', p: 'Classes follow the WA school year and stop in the holidays.' },
      { h3: 'Free opening class', p: 'A full first lesson, then honest advice on the next step.' },
      { h3: 'Fifteen to twenty per class', p: 'Learners grouped by level, or taught on their own.' },
      { h3: 'Two each week', p: 'Regular slots that add up to about eight lessons monthly.' },
      { h3: 'India time', p: 'Teachers are based in India; a 3:30pm Applecross lesson is 1pm India time.' }
    ],
    spec: {
      title: 'Unchanging lesson times',
      p: 'Western Australia\'s last daylight saving trial ended in March 2009 (IANA time zone database), and India never changes its clocks, so the timetable holds all year.'
    }
  },
  fees: {
    h2: 'Applecross lesson fees',
    intro: 'Three clear prices.',
    first: 'The first lesson is free and ends with a recommendation in writing.',
    group: 'About eight live group lessons each month with fifteen to twenty learners.',
    private: 'About eight live private lessons each month with one teacher.',
    closer: 'Applecross learners pay in US dollars once the trial has fixed a course and time, never before. The pricing page explains holidays, absences and switching formats.'
  },
  reviewsH2: 'What our learners and parents write on Google',
  book: {
    h2: 'Book a free Applecross class',
    intro: 'Tell us the learner\'s age and interests. An older student might test agents with false-premise questions; a younger one might build a Scratch quiz with trick questions.',
    success: 'Thank you. We will contact you soon about an Applecross class.'
  },
  faq: {
    h2: 'Applecross vibe coding and agent questions',
    intro: 'Questions Applecross parents, students and professionals ask.',
    items: [
      {
        q: 'How many people live in Applecross?',
        a: 'The 2021 Census QuickStats count 7,228 residents in the suburb of Applecross, with 2,063 families and a median age of 44.'
      },
      {
        q: 'What is AI sycophancy?',
        a: 'The tendency of AI models to agree with the user or tell them what they seem to want, even when it is wrong, such as accepting a false assumption built into a question.'
      },
      {
        q: 'What is a false-premise question?',
        a: 'A question that assumes something untrue, like asking which station is in a suburb that has none. A good answer corrects the assumption before anything else.'
      },
      {
        q: 'Is there a train station in Applecross?',
        a: 'Not inside the suburb, by our check of the state stops file: none of its 34 stop records is rail. The nearest platforms, at Canning Bridge station, are about 540 metres from the closest Applecross stop record.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Creating software by describing what you want to an AI tool and refining the result through conversation, while still reading and testing what it produces.'
      },
      { q: 'Can teenagers learn with Claude?', a: 'No. Claude-based courses enrol only adults aged 18 or above; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Applecross?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Applecross learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio part of Applecross group classes?', a: 'No. Copilot Studio lessons are one to one only; groups develop agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Perth and Western Australia',
    h2: 'More for Applecross learners',
    html: 'Try <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">the Perth page</a> for the city overall and <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth kids</a> for children. In the far south, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-albany-wa">Albany</a> has its own agents page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">the Western Australia guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Applecross and Perth',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/vibe-coding-and-ai-agents-classes-in-albany-wa', label: 'Albany' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' }
  ],
  personalityCss: `
.cg-root.cg-apcr .cg-hero-grid { align-items: center; gap: clamp(1.05rem, 3.15vw, 2.55rem); }
.cg-root.cg-apcr .cg-hero h1 { font-weight: 640; letter-spacing: -0.021em; line-height: 1.08; }
.cg-root.cg-apcr .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.58rem 0 0.58rem 1.08rem; }
.cg-root.cg-apcr .cg-eyebrow { letter-spacing: 0.118em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-apcr .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.015em; }
.cg-root.cg-apcr .cg-grid-3 { gap: clamp(0.72rem, 1.9vw, 1.48rem); }
.cg-root.cg-apcr .cg-table caption { font-weight: 610; text-align: left; letter-spacing: 0.018em; }
.cg-root.cg-apcr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-apcr .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.08rem; }
.cg-root.cg-apcr .cg-callout { border-left-width: 5px; border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Applecross (SAL50022), City of Melville. ABS Census 2021 QuickStats (read 12 October 2026): 7,228 people; median age 44; 2,063 families; 3,304 private dwellings; 2.5 per household; bus to work 226 (6.3%, WA 2.9%); semi-detached 599 (21.5%, WA 13.0%); flats 462 (16.6%, WA 6.5%); bachelor or higher 2,850 (47.2%, WA 23.8%); worked at home 463 (12.9%, WA 7.5%); aged 5-9 439; 10-14 454; 15-19 394. ABS SAL area 3.1954 sq km; council verified by ABS LGA point query (Melville). PTA-001: 34 records inside the SAL polygon, all Standard; bay Y 12; Canning Hwy 11, Matheson Rd 11, Kintail Rd 10; 40 records statewide labelled APPLECROSS. Neighbours (ABS touches): Alfred Cove, Ardross, Mount Pleasant. WA 2027 Term 2: Monday 26 April to Friday 2 July. Perth no daylight saving since March 2009 (IANA).',
    localProject: 'False premise / sycophancy. Rail records (stoptype Rail) inside Applecross: 0 of 34. Nearest rail records by haversine from any Applecross stop record: Canning Bridge Stn Platform 1 (label COMO) 540 m; Platform 2 (COMO) 542 m; Bull Creek Stn Platform 1 (BATEMAN) 3,437 m; Bull Creek Stn Platform 2 (BULL CREEK) 3,440 m. Both agents are our scripts, not model transcripts.',
    requiredMentions: ['3,304', '599', '454', 'Canning Bridge', 'Matheson Road', 'Kintail Road', '540 m', 'false-premise', 'sycophancy'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Applecross suburb and locality (SAL50022), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL50022'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Public Transport Authority of Western Australia, Stops (PTA-001), Creative Commons Attribution 4.0, published on data.wa.gov.au; 16,822 stop records read from the SLIP map service on 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/public-transport-authority-stops-bus-stops'
      },
      {
        claim: 'Mrinank Sharma and others (2023), Towards Understanding Sycophancy in Language Models, arXiv 2310.13548.',
        url: 'https://arxiv.org/abs/2310.13548'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 public school terms as gazetted.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth follows rule AW, whose last daylight saving period ended in March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Which suburb Canning Bridge station lies in: not claimed beyond the file label (Como) and that it falls outside our Applecross boundary.',
      'Walking distance to Canning Bridge station: not claimed; distances are straight-line between stop points.',
      'Any transcript from a commercial AI model: not claimed; both agents are our scripts.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Melville or the Public Transport Authority.'
    ]
  }
};
