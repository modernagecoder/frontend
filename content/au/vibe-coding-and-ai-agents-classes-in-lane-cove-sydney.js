'use strict';
// Lane Cove, Sydney (cg- district page, Australia cluster Phase 8, row 228). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page (ABS LGA14700) under Sydney and New South Wales.
// Spine: a question-answering agent gets follow-up questions ("and the median age?", "what about Mosman?",
// "which of those is youngest?"); how much conversation state does it need to answer them?
// Data the agent answers from: ABS Census 2021 QuickStats for Lane Cove LGA14700, Mosman LGA15350, Ryde
// LGA16700 and North Sydney LGA15950 (people, median age, flats share, worked-at-home share).
// Our scripted test (scratchpad au/b4/lncv3.py): 4 conversations, 21 user turns. Stateless agent 5 of 21;
// one-slot memory (last place, last measure) 13 of 21; topic-list memory 20 of 21 (fails the turn that drops
// North Sydney from the comparison).
// Lesson family: conversation state for an agent's follow-up questions; 0 hits in content and claims.
// Place facts: ABS QuickStats Lane Cove LGA14700; NSW government schools file (3 primary schools).

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'LANE COVE',
    label: 'Lane Cove, Sydney',
    blurb: 'Vibe coding and AI agents for Lane Cove, with a project on how much an agent must remember to answer follow-up questions.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-lane-cove-sydney',
  code: 'lncv',
  accent: '#9C3442',
  accentRationale: 'Lane Cove: a dusty brick red (hue 353), chosen by hand at least 10 RGB units from all 1,272 accents in content, the shared stylesheets and the claims log, 7.0:1 on white and 5.7:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Lane Cove',
    eyebrow: 'Lane Cove Council area, Sydney, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Lane Cove, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Lane Cove, Sydney',
  description: 'Live online vibe coding, AI agents and Python classes for Lane Cove teenagers and adults, taught by real teachers in small groups or one to one. First class free.',
  ogDescription: 'AI agents classes for Lane Cove, with a project on conversation memory: on 21 follow-up questions, an agent with no memory answered 5 and one with a topic list answered 20.',
  twitterDescription: 'Lane Cove vibe coding and AI agents classes, live online, first class free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Lane Cove',
    description: 'Level-matched online vibe coding, AI agents and Python for teenagers and adults in the Lane Cove council area, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Lane Cove',
  capsuleQ: 'Where do Lane Cove learners find the best vibe coding and AI agents classes?',
  capsule: 'In live online classes where a teacher shows Lane Cove teenagers and adults how to direct an AI to write code, then test what it produced and build agents that keep track of a conversation. The 2021 Census counted 39,438 people in the Lane Cove council area, and 56.7% of adults (18,279) held a bachelor degree or higher.',
  lead: 'People rarely ask an assistant one complete question. They ask "how many people live in Lane Cove?", then "and the median age?", then "what about Mosman?". Each follow-up leans on something said earlier. We wrote 21 such turns and ran three small agents over the same Census table to see how much memory a follow-up really needs.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Lane Cove.',
  picks: {
    eyebrow: 'Course picks for Lane Cove',
    h2: 'Courses for agents that follow a conversation',
    intro: 'Every course here leads somewhere in the memory project. The free trial settles the level, with no card details taken.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Describe a program, let an AI draft it in Python, then read and test it line by line.'
      },
      {
        course: 'teens-ai-tools-mastery-course',
        band: 'Ages 13 to 18',
        note: 'How chat assistants handle context, where they lose track and how to check their answers.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Language models, prompts, context windows and evaluating multi-turn assistants.'
      },
      {
        course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals',
        band: 'Professionals, one to one',
        note: 'Workplace agents in Copilot Studio that hold topics across a conversation, taught privately.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Lane Cove in the Census',
      h2: 'A small council area of graduates and apartments',
      intro: 'Lane Cove\'s 2021 Census QuickStats (ABS code LGA14700), compared with the state and national figures.',
      body: [
        {
          kind: 'table',
          caption: 'Lane Cove, 2021 Census headline counts',
          head: ['Headline', 'Lane Cove'],
          rows: [
            ['Residents', '39,438'],
            ['Median age', '37'],
            ['Families', '10,827'],
            ['Private dwellings', '17,320'],
            ['Average people per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Lane Cove set against NSW and Australia',
          head: ['Measure', 'Lane Cove', 'NSW', 'Australia'],
          rows: [
            ['Flats or apartments among occupied homes', '56.7% (8,750)', '21.7%', '14.2%'],
            ['Separate houses among occupied homes', '37.8% (5,832)', '65.6%', '72.3%'],
            ['Adults (15+) with a bachelor degree or higher', '56.7% (18,279)', '27.8%', '26.3%'],
            ['Employed residents working as professionals', '43.5% (9,507)', '25.8%', '24.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'More flats than houses', p: 'Flats and apartments made up 56.7% of occupied homes, well above the 21.7% recorded across the state.' },
            { h3: 'Home on Census day', p: 'In the August 2021 lockdown week, 12,160 employed residents, 55.7%, worked from home.' },
            { h3: 'Three government primaries', p: 'The NSW schools file lists three government schools in the council area, all primary schools.' }
          ]
        },
        {
          kind: 'p',
          text: 'Because the bureau perturbs table cells slightly to protect privacy, the components of a QuickStats table may not add to the printed total. We repeat each published figure as it appears and never construct a total by adding parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'How much does an agent need to remember?',
      intro: 'The agent answers from a small table of published Census figures for four neighbouring council areas. We scripted four conversations, 21 user turns in all, and scored three versions of the agent on the same turns.',
      body: [
        {
          kind: 'table',
          caption: 'The data the agent can look up (ABS Census 2021 QuickStats)',
          head: ['Council area', 'Residents', 'Median age', 'Homes that are flats', 'Worked from home'],
          rows: [
            ['Lane Cove', '39,438', '37', '56.7%', '55.7%'],
            ['Mosman', '28,329', '45', '52.0%', '58.8%'],
            ['Ryde', '129,123', '37', '44.6%', '46.0%'],
            ['North Sydney', '68,950', '38', '75.7%', '60.9%']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Turns answered correctly, out of 21 (our scripted test)',
          head: ['Agent', 'What it remembers', 'Correct'],
          rows: [
            ['Stateless', 'Nothing; each turn must name a place and a measure', '5'],
            ['One slot', 'The last place and the last measure mentioned', '13'],
            ['Topic list', 'Every place in the current topic, until the user changes subject', '20']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Where memory helps',
              p: '"And the median age?" names no place at all. Without remembering Lane Cove from the previous turn, the stateless agent can only ask again.'
            },
            {
              h3: 'Where one slot breaks',
              p: '"Is that higher than Mosman?" compares two places. An agent holding only the latest place answers for Mosman alone and silently drops Lane Cove.'
            },
            {
              h3: 'Where the list breaks',
              p: '"Leave North Sydney out" asks the agent to remove something from its memory. Ours could only add, so it kept all three councils.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A test we wrote ourselves',
          p: 'The 21 turns, the scoring and all three agents are our own teaching code. The topic-list agent was designed with these kinds of turns in mind, so its score flatters it; real conversations include turns none of the three would handle.'
        },
        {
          kind: 'p',
          text: 'The figures in the table are published values for whole council areas, quoted directly; the agents never add or average them, they only look them up and compare them.'
        }
      ]
    },
    {
      id: 'design',
      tint: 'tint',
      eyebrow: 'Designing memory',
      h2: 'Questions to ask of any assistant that holds a conversation',
      intro: 'Every chat assistant keeps some state between turns. These checks come straight from the Lane Cove failures.',
      body: [
        {
          kind: 'table',
          caption: 'Memory checks worth running on any assistant',
          head: ['Check', 'Failure it prevents', 'What to build'],
          rows: [
            ['What does "it" or "there" point to?', 'Answering about the wrong place', 'A record of recent entities, newest last'],
            ['Is the user comparing?', 'Dropping one side of a comparison', 'Keep every item named in the current topic'],
            ['Can items be removed?', 'Keeping a place the user excluded', 'Explicit remove and reset operations'],
            ['When does a topic end?', 'Old places leaking into new questions', 'Reset on phrases like "back to" or a new subject']
          ]
        },
        {
          kind: 'p',
          text: 'Writing these four rules down before coding is most of the work. Learners who skip it build an agent that passes the first conversation and fails the second.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Code the three agents in Python, run the 21 turns and add a remove operation that fixes the last failure.' },
            { h3: 'University students', p: 'Replace keyword matching with a language model, keep the same 21 turns as a test set and compare scores.' },
            { h3: 'Adults', p: 'Design the memory rules for a workplace assistant and write test conversations before it reaches users.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Lane Cove',
      h2: 'Two schools from 1876',
      intro: 'More from the schools file and the NSW calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'The oldest schools',
              p: 'Lane Cove Public School records its first teacher in February 1876 and Greenwich Public School in October 1876; Lane Cove West Public School followed in 1951.'
            },
            { h3: 'Children in the count', p: 'The Census recorded 2,245 residents aged 10 to 14, 5.7% of the population.' },
            { h3: 'Term 1, 2027', p: 'Eastern division schools start Term 1 of 2027 on Wednesday 3 February and finish it on Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council area, not suburb',
          p: 'Lane Cove here means the whole Lane Cove council area, which includes Greenwich and Lane Cove West; the Census figures are for that area as a whole.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a Scratch game made with AI help to agents that keep track',
    intro: 'Treat the ages as a rough guide; the trial lesson finds the real starting point.',
    cols: [
      {
        band: 'Ages 8 to 12',
        h3: 'Vibe coding for kids',
        p: 'Scratch games planned by the child, built with AI help and tested.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 15',
        h3: 'Reading what the AI wrote',
        p: 'Python projects drafted by an AI, then read, fixed and extended.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Agents with memory',
        p: 'Assistants that track a conversation, tested on scripted turns.',
        courses: ['teens-ai-tools-mastery-course', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Agents at work',
        p: 'Multi-turn assistants designed, tested and maintained properly.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Chat assistants already remember context. Why should a Lane Cove learner build the memory?',
    intro: 'Because when an assistant loses track of a conversation it rarely says so; it simply answers a different question.',
    p1: 'In our test the one-slot agent asked "Is that higher than Mosman?" replied with Mosman\'s figure alone, 58.8%, and stopped. Nothing in the reply warned that Lane Cove, the other half of the comparison, had been forgotten. Large assistants fail in the same quiet way when a conversation grows long or changes subject.',
    p2: 'A learner who has written the memory rules knows which questions to ask: what is the assistant carrying from earlier turns, how does it decide a topic has ended, and can it forget something on request? Those questions turn a fluent answer into a checked one.',
    closer: 'The Lane Cove learner who has built conversation memory by hand is the one who notices when an assistant has quietly changed the subject.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Greenwich to Lane Cove West, one online class',
    intro: 'The council area runs from Greenwich to Lane Cove West, and a live online lesson reaches each part of it the same way.',
    cells: [
      { h3: 'At home', p: 'Learners join from their own desk, so the whole lesson is coding rather than travelling.' },
      {
        h3: 'In step with NSW',
        p: 'Plans follow the NSW syllabus stages and stop for the state school holidays, with senior work that suits computing electives.'
      },
      { h3: 'A real first class', p: 'The free lesson is taught like any other, and ends with a suggested course, level and time.' },
      { h3: 'Groups of fifteen to twenty', p: 'Classmates are matched on level and pace, with Lane Cove learners mixed with others.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons a week, roughly eight a month, with breaks planned ahead.' },
      { h3: 'Teachers in India', p: 'A 6pm Lane Cove lesson during daylight saving is 12:30pm India time; in Sydney standard time it is 1:30pm there.' }
    ],
    spec: {
      title: 'When Sydney clocks change',
      p: 'Clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India does not change its clocks. We always quote Sydney time.'
    }
  },
  fees: {
    h2: 'Lane Cove class fees',
    intro: 'There are three prices and nothing else.',
    first: 'The first class is free and finishes with a recommendation.',
    group: 'A month of small-group lessons, normally eight, with fifteen to twenty learners at one level.',
    private: 'Roughly eight private lessons each month with one teacher.',
    closer: 'Outside India we invoice in US dollars, so every Lane Cove household is charged the same rate. Nothing is billed until the course and time are agreed after the trial; holidays, missed lessons and switching format are set out on the pricing page.'
  },
  reviewsH2: 'Google reviews from families and learners',
  book: {
    h2: 'Arrange a first Lane Cove class',
    intro: 'Send the learner\'s age and something they enjoy. A Year 10 student might begin by asking an AI to build a quiz; an adult might start with the memory test itself.',
    success: 'Thank you. Our team will contact you soon about a Lane Cove class.'
  },
  faq: {
    h2: 'Lane Cove vibe coding and AI agents questions',
    intro: 'What Lane Cove families and adult learners usually ask first.',
    items: [
      {
        q: 'How many people live in the Lane Cove council area?',
        a: 'The 2021 Census QuickStats for the Lane Cove local government area record 39,438 residents with a median age of 37.'
      },
      {
        q: 'What is conversation state in an AI assistant?',
        a: 'It is the information an assistant carries from one turn of a conversation to the next, such as which place or topic is being discussed. Follow-up questions like "and the median age?" can only be answered if that state is kept correctly.'
      },
      {
        q: 'What is the Lane Cove agent project?',
        a: 'Learners build three small agents that answer follow-up questions from published Census figures for Lane Cove, Mosman, Ryde and North Sydney, then score them on 21 scripted turns: 5 correct with no memory, 13 with one slot and 20 with a topic list.'
      },
      {
        q: 'Why did the topic-list agent still miss one question?',
        a: 'The user asked it to leave North Sydney out. The agent could add places to its memory but not remove them, so it answered for all three councils.'
      },
      {
        q: 'Can a group class build Copilot Studio agents?',
        a: 'Copilot Studio work happens only in one-to-one lessons, since every organisation\'s agent sits on its own documents and access rules. In group classes, teenagers build their agents in Python instead.'
      },
      {
        q: 'Can younger children join?',
        a: 'Yes, from age six. Younger learners start with Scratch and simple vibe coding; the agent projects suit older students.'
      },
      {
        q: 'Do you have an office in Lane Cove?',
        a: 'No. All lessons are live online, we have no premises in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'How much are AI agents classes for Lane Cove learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many people are in a group?',
        a: 'Five to ten, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner\'s time.',
        boiler: true
      },
      {
        q: 'Will my teenager just copy what the AI writes?',
        a: 'No. Every lesson asks the learner to read, run and explain the code an AI produces, and to change it when a test fails.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Lane Cove learners',
    html: 'Next door, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-ryde-sydney">Ryde</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-macquarie-park-sydney">Macquarie Park</a> have their own pages, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mosman-sydney">Mosman</a> sits across the harbour inlets. The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales guide</a> cover the wider picture.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Lane Cove and Sydney',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-macquarie-park-sydney', label: 'Macquarie Park' },
    { href: '/online-coding-and-python-classes-in-mosman-sydney', label: 'Mosman' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-lncv .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.4vw, 2.7rem); }
.cg-root.cg-lncv .cg-hero h1 { font-weight: 740; letter-spacing: -0.021em; line-height: 1.08; }
.cg-root.cg-lncv .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1.15rem; }
.cg-root.cg-lncv .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-lncv .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-lncv .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.95rem); }
.cg-root.cg-lncv .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-lncv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lncv .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-lncv .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Lane Cove, ABS Census 2021 QuickStats, Lane Cove local government area LGA14700 (read 10 October 2026): 39,438 people; median age 37; 10,827 families; 17,320 private dwellings; average 2.4 people per household; flats or apartments 56.7% (8,750); separate houses 37.8% (5,832); bachelor degree or higher 56.7% (18,279); professionals 43.5% (9,507); worked at home 55.7% (12,160, Census day in the 2021 lockdown); aged 10 to 14 2,245 (5.7%). NSW government schools file (Date_extracted 2026-10-02): 3 schools in the LGA, all primary: Lane Cove Public School (first teacher February 1876), Greenwich Public School (October 1876), Lane Cove West Public School (1951). NSW 2027 Eastern division Term 1: 3 February to 9 April. Sydney daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Conversation state for an agent. Data: ABS QuickStats for Lane Cove LGA14700 (39,438; 37; 56.7%; 55.7%), Mosman LGA15350 (28,329; 45; 52.0%; 58.8%), Ryde LGA16700 (129,123; 37; 44.6%; 46.0%), North Sydney LGA15950 (68,950; 38; 75.7%; 60.9%), columns residents, median age, flats share, worked-at-home share. Four scripted conversations, 21 user turns. Correct: stateless 5 of 21; one-slot memory 13 of 21 (fails comparisons and group questions); topic-list memory 20 of 21 (fails the turn asking to leave North Sydney out). Script: scratchpad au/b4/lncv3.py.',
    requiredMentions: ['39,438', '10,827', '17,320', '8,750', '5,832', '18,279', '9,507', '12,160', 'Greenwich Public School'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Lane Cove local government area (LGA14700).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA14700'
      },
      {
        claim: 'ABS Census 2021 QuickStats, Mosman local government area (LGA15350).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA15350'
      },
      {
        claim: 'ABS Census 2021 QuickStats, North Sydney local government area (LGA15950).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA15950'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution), Date_extracted 2026-10-02.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates (Eastern division).', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That the topic-list agent would score 20 of 21 on real conversations: not claimed; the test and the agent are our own.',
      'That large language model assistants fail on these exact turns: not tested; the page says only that they can lose context.',
      'Suburb-level figures for Greenwich or Lane Cove West: not used; all Census numbers are for the council area.',
      'Any total formed by adding council areas together: not computed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Lane Cove Council, the NSW Department of Education or the ABS.'
    ]
  }
};
