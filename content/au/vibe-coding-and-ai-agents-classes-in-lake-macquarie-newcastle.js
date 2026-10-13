'use strict';
// Lake Macquarie, Newcastle (cg- district page, Australia cluster Phase 8, row 348). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council page (ABS LGA14650, Lake Macquarie City Council) under Newcastle and NSW.
// Spine: an agent asked for "last month" at the council's nine railway stations. With no date given it assumes its own sense of
// now and answers May 2025 (Cardiff 16,995). Told the date (14 October 2026) it asks for September 2026, which is not yet
// published. Checking the latest month in the file gives August 2026 (Cardiff 22,208). Agent turns are our scripts
// (au/b19/lkmq_agent.py). Charlestown figures kept off (own page). Lesson family: date grounding; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'LAKE MACQUARIE',
    label: 'Lake Macquarie, Newcastle',
    blurb: 'Vibe coding and AI agent classes for Lake Macquarie, where an agent answered for the wrong month because nobody told it the date.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-lake-macquarie-newcastle',
  code: 'lkmq',
  accent: '#2F3267',
  accentRationale: 'Lake Macquarie: a deep lake indigo (hue 236.8), 9.61:1 on #EDE7DA; 24.0 RGB from the nearest New South Wales accent, 13.0 from any other Australian accent and 8.2 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Lake Macquarie',
    eyebrow: 'Lake Macquarie City Council, Hunter, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Lake Macquarie City Council' },
      { type: 'City', name: 'Newcastle' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'online-coding-and-python-classes-in-newcastle-nsw', name: 'Newcastle' }
  ],
  nav: [
    { label: 'Newcastle', href: '/online-coding-and-python-classes-in-newcastle-nsw' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Lake Macquarie, Newcastle',
  title: 'Vibe Coding and AI Agents Classes in Lake Macquarie',
  description: 'Live online vibe coding and AI agent classes for teenagers and adults across Lake Macquarie, plus Scratch and Python for children from six, in groups or one to one.',
  ogDescription: 'Lake Macquarie agent project: asked about last month without being told the date, the agent answered with May 2025 station figures.',
  twitterDescription: 'Vibe coding and AI agents for Lake Macquarie, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Lake Macquarie',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults across the Lake Macquarie council area, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Lake Macquarie',
  capsuleQ: 'Why would an AI agent give Lake Macquarie figures for the wrong month?',
  capsule: 'Because an AI model has no clock. Unless the date is passed in, "last month" means whatever the model assumes now is. Our live online lessons teach agent building with that in mind. The Lake Macquarie council area had 213,845 residents at the 2021 Census.',
  lead: 'We asked an agent which Lake Macquarie railway station had the most entries last month. It answered quickly and confidently, with a real figure from the Transport for NSW file. The figure was for May 2025, sixteen months out of date, because nobody had told the agent what day it was.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Lake Macquarie.',
  picks: {
    eyebrow: 'Course picks for Lake Macquarie',
    h2: 'Courses for agents that know what day it is',
    intro: 'The project below needs Python dates, data files and agent design. These courses build those skills; the free first lesson chooses between them.',
    items: [
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Building and checking coding agents on real tasks.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Making things with AI help and checking what comes back.'
      },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'How AI tools work, including what they cannot know.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'datetime, files and the code agents call.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Lake Macquarie in the Census',
      h2: 'A big council wrapped around a lake',
      intro: 'Census 2021 figures for the Lake Macquarie local government area (ABS code LGA14650), with New South Wales alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Lake Macquarie council area, 2021',
          head: ['Measure', 'Lake Macquarie'],
          rows: [
            ['Residents', '213,845'],
            ['Median age', '42'],
            ['Families', '60,257'],
            ['Private dwellings', '88,815'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Lake Macquarie compared with the state',
          head: ['Indicator', 'Lake Macquarie', 'New South Wales'],
          rows: [
            ['Separate houses', '85.2% (68,750)', '65.6%'],
            ['Flats or apartments', '4.4% (3,589)', '21.7%'],
            ['Adults with a bachelor degree or higher', '19.0% (33,332)', '27.8%'],
            ['Employed people in professional jobs', '21.5% (20,897)', '25.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Under twenty', p: 'The council had 13,451 residents aged 5 to 9, 13,344 aged 10 to 14 and 12,340 aged 15 to 19.' },
            { h3: 'Over eighty-five', p: '6,305 residents were aged 85 or over.' },
            { h3: 'Area', p: 'The council area takes in about 649 square kilometres around the lake.' }
          ]
        },
        {
          kind: 'p',
          text: 'Each figure is the one QuickStats prints. The bureau nudges small cells to protect privacy, which is why we leave every number as published rather than combining them.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Last month, according to whom?',
      intro: 'Nine railway stations sit inside the council, going by the state mapping agency\'s station points. Transport for NSW publishes monthly entries for each, October 2024 to August 2026 in the file we downloaded. Our scripted agent was asked: which of these stations had the most entries last month?',
      body: [
        {
          kind: 'table',
          caption: 'Three versions of the same agent (our run)',
          head: ['Agent setup', 'Month it chose', 'Answer'],
          rows: [
            ['No date given; assumes 1 June 2025', 'May 2025', 'Cardiff, 16,995 entries'],
            ['Given today\'s date, 14 October 2026', 'September 2026', 'No rows found'],
            ['Given the date and told to check the file', 'August 2026, latest published', 'Cardiff, 22,208 entries']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'August 2026 entries at Lake Macquarie stations (Transport for NSW)',
          head: ['Station', 'Entries'],
          rows: [
            ['Cardiff', '22,208'],
            ['Morisset', '17,093'],
            ['Fassifern', '10,149'],
            ['Wyee', '6,850'],
            ['Cockle Creek', '1,560'],
            ['Dora Creek', '1,223'],
            ['Teralba', '1,146'],
            ['Booragul', '982'],
            ['Awaba', '612']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The first mistake',
              p: 'A language model learns from text up to a cut-off and has no clock. Without the date in its instructions, "last month" is a guess, and the guess can be over a year old.'
            },
            {
              h3: 'The second mistake',
              p: 'Given the real date, the agent asked for September 2026. Usage files are published after the month ends, so that month was not there yet.'
            },
            {
              h3: 'The fix',
              p: 'Pass the date in, and have the tool report the newest month it holds. The agent then says plainly that it is answering for August.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Put the date in the prompt',
          p: 'Any agent that answers questions with words like today, recent or last week needs the current date supplied by the program around it. It also needs to say which period its answer covers, so a person can see at once whether it is stale.'
        },
        {
          kind: 'p',
          text: 'Which stations count as Lake Macquarie is decided by our own boundary query; the monthly counts are Transport for NSW\'s Opal figures. The agent is a short script of ours standing in for an AI model, not a transcript from a commercial product.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Agents and time',
      h2: 'Words an agent should never guess',
      intro: 'Relative time words and how a well-built agent resolves them.',
      body: [
        {
          kind: 'table',
          caption: 'Resolving relative dates',
          head: ['Phrase', 'Needs', 'Good practice'],
          rows: [
            ['last month', 'Today\'s date', 'Pass the date in; state the month used'],
            ['the latest figures', 'What the data holds', 'Ask the tool for its newest period'],
            ['this school term', 'A calendar source', 'Look it up, never assume'],
            ['recently', 'A definition', 'Ask the person what they mean']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Ask a friend who has been asleep for a year what day it is, then talk about why they are wrong.' },
            { h3: 'Secondary learners', p: 'Write a function that turns "last month" into a year and month from a date passed in, and test it in January.' },
            { h3: 'Adults', p: 'Check the system prompt of any assistant at work for a date line before trusting its answers about time.' }
          ]
        },
        {
          kind: 'p',
          text: 'January is the case to test first. Last month is then December of the previous year, and code that only subtracts one from the month number breaks.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Lake Macquarie',
      h2: 'Rail, homes and the 2027 calendar',
      intro: 'A few council-wide markers from state open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Two busy stations', p: 'Cardiff and Morisset recorded 22,208 and 17,093 entries in August 2026, well ahead of the other seven.' },
            { h3: 'Address points', p: 'The state address register holds 109,432 points touching the council area; we use the count and nothing else.' },
            { h3: 'Term 3, 2027', p: 'NSW public school Term 3 of 2027 runs from 19 July to 24 September.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council figures',
          p: 'This page covers the whole Lake Macquarie local government area. Charlestown, inside it, has a page and figures of its own that are not repeated here. By the ABS boundaries the council meets Newcastle, Cessnock and Central Coast.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From calendars to grounded agents',
    intro: 'Ages are a starting point; the trial lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and play',
        p: 'Timers, days and simple games.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'Dates in Python and how AI tools learn.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Building with AI and checking its assumptions.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents',
        p: 'Agents grounded in today\'s date and real data.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'An answer that is true and still wrong',
    intro: 'The May 2025 figure was real. It answered a different question.',
    p1: 'Nothing in the first agent\'s reply looked broken. It named a real station and a real number taken straight from the file. Only someone who checked the month would notice it was over a year old, and agent replies rarely invite that check.',
    p2: 'Learners who build the three versions themselves start writing the date into every agent they make and asking each one to state the period it used. It is a small habit with a large effect on whether people can trust what an agent says.',
    closer: 'For Lake Macquarie learners, a grounded agent is one that knows the date and says which data it used.',
    blogAnchor: 'why understanding code still beats copying it'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lake Macquarie lessons online',
    intro: 'Lessons happen live on video, from Morisset to Belmont.',
    cells: [
      { h3: 'Build all three', p: 'Learners rebuild the agent and watch the answer change with the date.' },
      { h3: 'School year', p: 'Classes run in NSW term time and break for holidays.' },
      { h3: 'First lesson free', p: 'A full lesson without charge and a written recommendation after it.' },
      { h3: 'Class size', p: 'Between five and ten classmates working at about the same stage, unless one-to-one suits better.' },
      { h3: 'Regular times', p: 'Two lessons each week at fixed times, about eight a month.' },
      { h3: 'India time', p: 'Lessons are taught from India: a 6pm Lake Macquarie class is 12:30pm India time in summer and 1:30pm in winter.' }
    ],
    spec: {
      title: 'NSW clocks',
      p: 'Lake Macquarie follows New South Wales daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database); India keeps one time all year.'
    }
  },
  fees: {
    h2: 'Lake Macquarie fees',
    intro: 'Three fixed prices, the same around the lake.',
    first: 'The first lesson is free, followed by written advice.',
    group: 'Roughly eight group lessons a month, five to ten learners in each.',
    private: 'Roughly eight private lessons a month.',
    closer: 'Lake Macquarie families pay in US dollars after the trial has decided the course and lesson times. Holiday and missed-lesson rules are on the pricing page.'
  },
  reviewsH2: 'Google reviews from our learners',
  book: {
    h2: 'Book a free Lake Macquarie class',
    intro: 'Tell us roughly how old the learner is and what they like. A teenager could give the agent a sense of time; a younger learner could build a Scratch calendar game.',
    success: 'Thank you. We will be in touch soon about a Lake Macquarie class.'
  },
  faq: {
    h2: 'Lake Macquarie agent questions',
    intro: 'What learners around the lake ask us.',
    items: [
      {
        q: 'How many people live in the Lake Macquarie council area?',
        a: 'The 2021 Census QuickStats count 213,845 residents in the Lake Macquarie local government area, with 88,815 private dwellings and a median age of 42.'
      },
      {
        q: 'Does an AI model know today\'s date?',
        a: 'Not by itself. A model only knows what was in its training text and what it is told. Applications that need the date pass it into the instructions.'
      },
      {
        q: 'What is date grounding for an AI agent?',
        a: 'Giving the agent the current date and the dates its data covers, so relative words such as last month resolve correctly.'
      },
      {
        q: 'Which Lake Macquarie station had the most entries in August 2026?',
        a: 'Cardiff, with 22,208 entries in Transport for NSW\'s monthly usage file, ahead of Morisset with 17,093.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Building software by describing what you want to an AI tool and shaping what it produces, rather than typing every line yourself.'
      },
      { q: 'Will teenagers use Claude?', a: 'No. Our Claude-based courses are for adults aged 18 and over; teenagers use other tools.' },
      {
        q: 'Is there a classroom in Lake Macquarie?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Lake Macquarie learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Do Lake Macquarie groups learn Copilot Studio?',
        a: 'No. Copilot Studio is taught in one-to-one lessons only; group learners build their agents in Python.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Newcastle and the Hunter',
    h2: 'More for Lake Macquarie learners',
    html: '<a class="cg-inline-link" href="/ai-and-programming-classes-in-charlestown-newcastle">Charlestown</a> has its own page within the council area. <a class="cg-inline-link" href="/online-coding-and-python-classes-in-newcastle-nsw">The Newcastle page</a> is the city-wide view, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">our New South Wales guide</a> looks at the whole state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Lake Macquarie and Newcastle',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-charlestown-newcastle', label: 'Charlestown' },
    { href: '/online-coding-and-python-classes-in-maitland-newcastle', label: 'Maitland' },
    { href: '/online-coding-and-python-classes-in-newcastle-nsw', label: 'Newcastle' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-lkmq .cg-hero-grid { align-items: center; gap: clamp(1.04rem, 3.08vw, 2.49rem); }
.cg-root.cg-lkmq .cg-hero h1 { font-weight: 641; letter-spacing: -0.018em; line-height: 1.1; }
.cg-root.cg-lkmq .cg-capsule { border-left: 6px solid var(--cg-accent); padding: 0.58rem 0 0.58rem 1.08rem; }
.cg-root.cg-lkmq .cg-eyebrow { letter-spacing: 0.113em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-lkmq .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.012em; }
.cg-root.cg-lkmq .cg-grid-3 { gap: clamp(0.77rem, 1.97vw, 1.55rem); }
.cg-root.cg-lkmq .cg-table caption { font-weight: 623; text-align: left; letter-spacing: 0.014em; }
.cg-root.cg-lkmq .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lkmq .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.86rem; }
.cg-root.cg-lkmq .cg-callout { border-left-width: 6px; border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Lake Macquarie local government area (LGA14650). ABS Census 2021 QuickStats (read 14 October 2026): 213,845 people; median age 42; 60,257 families; 88,815 private dwellings; 2.5 per household; separate houses 68,750 (85.2%, NSW 65.6%); flats 3,589 (4.4%, NSW 21.7%); bachelor or higher 33,332 (19.0%, NSW 27.8%); professionals 20,897 (21.5%, NSW 25.8%); aged 5-9 13,451; 10-14 13,344; 15-19 12,340; 85+ 6,305. ABS LGA area 648.6393 sq km; LGAs intersecting: Central Coast (NSW), Cessnock, Newcastle. NSW Spatial Services TransportFacilityPoint inside LGA: 202 points, 9 RAILWAY STATION (Awaba, Booragul, Cardiff, Cockle Creek, Dora Creek, Fassifern, Morisset, Teralba, Wyee). AddressPoint count 109,432. TfNSW entry_exit.csv August 2026 entries: Cardiff 22,208; Morisset 17,093; Fassifern 10,149; Wyee 6,850; Cockle Creek 1,560; Dora Creek 1,223; Teralba 1,146; Booragul 982; Awaba 612. May 2025: Cardiff 16,995. Latest month in file 2026-08. NSW 2027 Term 3 19 July to 24 September.',
    localProject: 'Date grounding. lkmq_agent.py: last_month(date(2025,6,1)) = 2025-05 -> Cardiff 16,995; last_month(date(2026,10,14)) = 2026-09 -> None (not published); checking max MonthYear -> 2026-08 -> Cardiff 22,208. Agent turns are our scripts.',
    requiredMentions: ['213,845', '60,257', 'Morisset', 'Central Coast', 'Cardiff', '22,208', '16,995', '109,432', 'date grounding'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Lake Macquarie local government area (LGA14650), read 14 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA14650'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'NSW Spatial Services, NSW Transport Theme, TransportFacilityPoint layer (railway station points), (c) Spatial Services; spatial query against the ABS boundary on 14 October 2026.',
        url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Transport_Theme/MapServer/0'
      },
      {
        claim: 'Transport for NSW, Train, Metro and Light Rail Station Monthly Usage, based on Opal batch data (entry_exit.csv, October 2024 to August 2026, resource updated 15 September 2026), Creative Commons Attribution; downloaded 14 October 2026.',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Spatial Services, NSW Geocoded Addressing Theme, AddressPoint layer, counts only, queried 14 October 2026.',
        url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1'
      },
      {
        claim: 'Python documentation, datetime: date objects and timedelta arithmetic used to resolve the previous month.',
        url: 'https://docs.python.org/3/library/datetime.html'
      },
      {
        claim: 'NSW Department of Education, future and past NSW term and vacation dates: 2027 Term 1 (Eastern division) 28 January to 9 April, Term 2 27 April to 2 July, Term 3 19 July to 24 September, Term 4 11 October to 20 December.',
        url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Sydney, rule AN, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Charlestown suburb figures: kept to the Charlestown page.',
      'Any total of station entries for the council: not given.',
      'Any transcript from a commercial AI model or a claim about a particular model\'s cut-off date: not made; the agent is our script with an assumed date.',
      'Census work-from-home and travel-to-work figures: not used.',
      'Any individual address: not published; counts only.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Lake Macquarie City Council or Transport for NSW.'
    ]
  }
};
