'use strict';
// Armadale, Perth (cg- district page, Australia cluster Phase 8, row 308). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL50026, Armadale (WA), City of Armadale) under Perth and
// Western Australia.
// Spine: an agent asked to count Armadale's stop records by type suggests installing helper packages. We checked each
// suggested name against the PyPI JSON API on 12 October 2026: five do not exist. The working script needs only
// requests and the standard library: 109 records, Standard 104, Rail 4, regional coach 1.
// Data: PTA-001 Stops (CC BY 4.0). Agent turns are our scripts. Lesson family: hallucinated package names; claimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'ARMADALE',
    label: 'Armadale, Perth',
    blurb: 'Vibe coding and AI agent classes for Armadale, where an agent suggested five Python packages that turned out not to exist.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-armadale-perth',
  code: 'arwa',
  accent: '#81312F',
  accentRationale: 'Armadale: a deep brick red (hue 1.5), 7.06:1 on #EDE7DA; 25.7 RGB from the nearest Western Australian accent, 13.0 from any other Australian accent and 7.7 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Armadale',
    eyebrow: 'Armadale, City of Armadale, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Armadale' },
      { type: 'AdministrativeArea', name: 'City of Armadale' },
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
  routeLabel: 'Armadale, Perth',
  title: 'Vibe Coding and AI Agents Classes in Armadale, Perth',
  description: 'Live online vibe coding and AI agent classes for Armadale teenagers and adults, plus Scratch and Python for children from six, in small groups or one to one.',
  ogDescription: 'Armadale agent project: an AI agent proposed five Python packages that do not exist; the working script counts 109 stop records without any of them.',
  twitterDescription: 'Vibe coding and AI agents for Armadale, taught live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Armadale',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults in Armadale, Perth, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Armadale',
  capsuleQ: 'What should Armadale learners check before running code an AI agent writes?',
  capsule: 'That every package the agent asks to install really exists and is the one intended, because agents sometimes invent plausible names. Our live online classes teach vibe coding and agent work with that habit built in. Armadale had 13,415 residents at the 2021 Census.',
  lead: 'We asked for something simple: count the public transport stop records inside Armadale, grouped by type. The scripted agent opened with a pip install command for a package named after the stops data. That package does not exist, and neither do four other names it went on to suggest. The job needed none of them.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Armadale.',
  picks: {
    eyebrow: 'Course picks for Armadale',
    h2: 'Courses for working safely with coding agents',
    intro: 'This project needs Python, a little knowledge of packages and the discipline to verify what an agent proposes. These courses cover it; a free trial lesson picks the right one.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Building with AI help, and checking every install command before it runs.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents on real projects, with dependency and change review.'
      },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Getting good results from AI tools and spotting when they guess.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python foundations, including pip, imports and the standard library.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Armadale in the Census',
      h2: 'Townhouses, young children and the end of the line',
      intro: 'Figures from the 2021 Census QuickStats for the suburb of Armadale (ABS code SAL50026), set against Western Australia as a whole.',
      body: [
        {
          kind: 'table',
          caption: 'Armadale headline counts, 2021',
          head: ['Measure', 'Armadale'],
          rows: [
            ['Residents', '13,415'],
            ['Median age', '39'],
            ['Families', '3,275'],
            ['Private dwellings', '6,549'],
            ['People per household', '2.2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Armadale beside the state figure',
          head: ['Indicator', 'Armadale', 'Western Australia'],
          rows: [
            ['Semi-detached, row or townhouse homes', '30.7% (1,683)', '13.0%'],
            ['Workers who drove to work', '66.7% (3,127)', '62.1%'],
            ['Workers who took the train to work', '3.0% (142)', '1.8%'],
            ['Adults with a bachelor degree or higher', '8.0% (880)', '23.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Under-tens', p: 'There were 920 children under five and 820 aged 5 to 9, with 727 more aged 10 to 14.' },
            { h3: 'Older residents', p: 'At the other end, 347 residents were aged 85 or older.' },
            { h3: 'Footprint', p: 'The ABS outline of the suburb covers roughly 8.3 square kilometres in Perth\'s south-east.' }
          ]
        },
        {
          kind: 'p',
          text: 'Every Census number above is copied as the bureau released it. Its small privacy adjustments mean cells should not be summed, and we have not summed any.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Five packages that were never there',
      intro: 'Request to the agent: "Count the stop records inside Armadale and group them by stop type." Before writing any code, our scripted agent proposed packages to install. We looked up each name on PyPI, the main Python package index, using its JSON API on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'What PyPI returned (our check)',
          head: ['Names checked', 'PyPI response', 'Meaning'],
          rows: [
            ['Five names the agent invented, each echoing the transport data or the state', '404 for all five', 'No such packages'],
            ['requests', '200', 'Exists, widely used'],
            ['shapely and pyshp', '200', 'Exist, but were not needed']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What the working script found (our calculation)',
          head: ['Stop type', 'Records inside Armadale'],
          rows: [
            ['Standard', '104'],
            ['Rail', '4'],
            ['Regional coach', '1'],
            ['All types', '109']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why agents invent names',
              p: 'A language model predicts likely-looking text. A package named after the stops data sounds exactly like something that ought to exist for this task, so the model offers it with confidence.'
            },
            {
              h3: 'Why it matters',
              p: 'An install that fails is only annoying. The real risk comes later, if someone registers an invented name and fills it with harmful code, so the next person who trusts the agent installs it.'
            },
            {
              h3: 'What the job needed',
              p: 'Only requests, to call the state\'s map service, and the standard library. The four rail records are platforms at Armadale and Sherwood stations; one record is a regional coach stop.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A name that exists is not proof',
          p: 'A 200 response only says some package uses that name. Before installing, check who publishes it, when it was last updated and whether it does what you expect. On this task the safest dependency list was the shortest: one well-known package.'
        },
        {
          kind: 'p',
          text: 'Stop records are Public Transport Authority of Western Australia open data; membership of Armadale is our point-in-boundary check and the counts are ours. The agent turns are scripts we wrote to show the pattern, not transcripts from a commercial AI model. PyPI responses can change as packages are published.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Agents and dependencies',
      h2: 'Checking a package before pip install',
      intro: 'A thirty-second routine catches invented or wrong packages before anything runs on your machine.',
      body: [
        {
          kind: 'table',
          caption: 'A dependency check routine',
          head: ['Step', 'How', 'Armadale result'],
          rows: [
            ['Ask why', 'Make the agent say what each package is for', 'Five could not justify themselves'],
            ['Look it up', 'GET pypi.org/pypi/name/json', 'Five 404 responses'],
            ['Prefer the standard library', 'json, csv and urllib come with Python', 'Plus requests was enough'],
            ['Pin what you keep', 'Write exact versions in requirements.txt', 'One line']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Before using a Scratch extension, ask a grown-up where it came from and what it does.' },
            { h3: 'Secondary learners', p: 'Write a tiny script that checks a list of package names against PyPI and flags any that are missing.' },
            { h3: 'Adults', p: 'Add a dependency review step to every agent-written change before it reaches a shared project.' }
          ]
        },
        {
          kind: 'p',
          text: 'Agents are improving at this, and many now search before suggesting. The habit still pays: an agent that checks is a bonus, a person who checks is a guarantee.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Armadale',
      h2: 'Two stations and the Albany Highway',
      intro: 'Details that belong to Armadale rather than its neighbours, from the stops file and the WA school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Rail and coach',
              p: 'Inside the suburb, by our check, are rail platform records for Armadale and Sherwood stations, plus a stop for regional coaches at Armadale station.'
            },
            { h3: 'Busiest roads', p: 'Seventh Road carries 14 of the 109 stop records, and Armadale Road and Forrest Road 11 each.' },
            { h3: 'Term 2, 2027', p: 'WA public schools hold Term 2 of 2027 from Monday 26 April to Friday 2 July.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Armadale the suburb',
          p: 'These figures describe the suburb of Armadale, not the wider City of Armadale. Kelmscott, Mount Nasura, Seville Grove, Haynes and the other neighbouring suburbs have separate counts that we leave out.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From asking where things come from to reviewing agents',
    intro: 'Starting points depend on skill as much as age; the trial lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and play',
        p: 'Games built block by block, with every piece understood.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'Typed code and a realistic picture of what AI can do.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Building with AI and verifying what it produces.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Coding agents',
        p: 'Agents for real work, with reviews built in.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'If the agent picks the tools, who checks them?',
    intro: 'The person at the keyboard. An agent will propose packages as readily as it writes code.',
    p1: 'Vibe coding hands the typing to an AI, and that is a genuine speed-up. But an install command is different from a line of code: it pulls someone else\'s software onto your computer. Five of the names suggested for the Armadale task pointed to nothing at all.',
    p2: 'Learners who have looked names up on PyPI themselves develop a reflex: no install without a reason and a check. That reflex is worth more than any single package.',
    closer: 'In Armadale, the learner who checks the install list keeps the project and the computer safe.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Armadale lessons, live and online',
    intro: 'Classes are taught over video, so the learner stays at home.',
    cells: [
      { h3: 'Every command visible', p: 'Prompts, installs and outputs all appear on the shared screen for the teacher to question.' },
      { h3: 'Built around terms', p: 'Lessons pause in WA school holidays and resume each term.' },
      { h3: 'Free trial', p: 'A real first lesson, then an honest view of the right course.' },
      { h3: 'Five to ten in a group', p: 'Grouped by level and goal, or taught privately.' },
      { h3: 'Twice a week', p: 'Regular times, close to eight lessons each month.' },
      { h3: 'India time', p: 'With our teachers in India, a 6pm Armadale class starts at 3:30pm India time.' }
    ],
    spec: {
      title: 'A fixed time difference',
      p: 'Perth has not changed its clocks since March 2009 (IANA time zone database) and India keeps one time all year, so the gap stays two and a half hours.'
    }
  },
  fees: {
    h2: 'Armadale lesson fees',
    intro: 'Three prices, applied to everyone.',
    first: 'Lesson one costs nothing and ends with a suggested next step.',
    group: 'Group month: about eight live lessons with five to ten learners at one level.',
    private: 'Private month: about eight live lessons with one teacher.',
    closer: 'Armadale families pay in US dollars and only after the trial, once course and time suit them. The pricing page sets out holidays, absences and changes of format.'
  },
  reviewsH2: 'Google reviews left by our learners and their parents',
  book: {
    h2: 'Book a free Armadale class',
    intro: 'Say how old the learner is and what interests them. A teenager might begin by checking an agent\'s package list; a child might begin with a Scratch game.',
    success: 'Thank you. We will contact you shortly about an Armadale class.'
  },
  faq: {
    h2: 'Armadale vibe coding and agent questions',
    intro: 'Common questions from Armadale teenagers, parents and adults.',
    items: [
      {
        q: 'What is the population of Armadale, WA?',
        a: 'The 2021 Census QuickStats count 13,415 people in the suburb of Armadale, with 6,549 private dwellings and a median age of 39.'
      },
      {
        q: 'What is a hallucinated package?',
        a: 'A software package name an AI tool suggests that does not actually exist. The install fails, or worse, someone later publishes a harmful package under that name.'
      },
      {
        q: 'How do I check a Python package exists?',
        a: 'Look it up on PyPI. The address pypi.org/pypi/name/json returns details if the package exists and a 404 error if it does not.'
      },
      {
        q: 'How many stop records are in Armadale?',
        a: 'By our boundary check of the state stops file, 109: 104 standard stops, 4 rail platform records at Armadale and Sherwood stations, and 1 regional coach stop.'
      },
      {
        q: 'What is an AI coding agent?',
        a: 'An AI system that plans and carries out programming steps, such as writing files, installing packages and running tests, rather than answering a single question.'
      },
      {
        q: 'Do teenagers use Claude in lessons?',
        a: 'No. Claude-based courses are open to adults aged 18 and above only, and teenagers work with other AI tools.'
      },
      {
        q: 'Is there a classroom in Armadale?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Armadale learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Will Armadale groups learn Copilot Studio?', a: 'No. Copilot Studio is reserved for private lessons; groups build agents in Python code.' }
    ]
  },
  next: {
    eyebrow: 'Explore Perth and Western Australia',
    h2: 'More for Armadale learners',
    html: 'For the city as a whole, read <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">the Perth page</a>; for younger children, <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth kids</a>. South of the city, <a class="cg-inline-link" href="/ai-and-programming-classes-in-mandurah">Mandurah</a> has its own page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">the Western Australia guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Armadale and Perth',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/ai-and-programming-classes-in-mandurah', label: 'Mandurah' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' }
  ],
  personalityCss: `
.cg-root.cg-arwa .cg-hero-grid { align-items: center; gap: clamp(0.95rem, 2.9vw, 2.3rem); }
.cg-root.cg-arwa .cg-hero h1 { font-weight: 630; letter-spacing: -0.022em; line-height: 1.09; }
.cg-root.cg-arwa .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.52rem 0 0.52rem 1.05rem; }
.cg-root.cg-arwa .cg-eyebrow { letter-spacing: 0.105em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-arwa .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.014em; }
.cg-root.cg-arwa .cg-grid-3 { gap: clamp(0.75rem, 1.95vw, 1.5rem); }
.cg-root.cg-arwa .cg-table caption { font-style: italic; font-weight: 620; text-align: left; }
.cg-root.cg-arwa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-arwa .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-arwa .cg-callout { border-left-width: 4px; border-radius: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Armadale (SAL50026, Armadale (WA)), City of Armadale. ABS Census 2021 QuickStats (read 12 October 2026): 13,415 people; median age 39; 3,275 families; 6,549 private dwellings; 2.2 per household; semi-detached 1,683 (30.7%, WA 13.0%); drove 3,127 (66.7%, WA 62.1%); train 142 (3.0%, WA 1.8%); bachelor or higher 880 (8.0%, WA 23.8%); aged 0-4 920; 5-9 820; 10-14 727; 85+ 347. ABS SAL area 8.2826 sq km; council verified by ABS LGA point query. PTA-001 stops: 109 records inside the SAL polygon (Standard 104, Rail 4, regional coach 1); rail platform records Armadale Stn 1 and 3, Sherwood Stn 1 and 2; Seventh Rd 14, Armadale Rd 11, Forrest Rd 11. Neighbours (ABS touches): Bedfordale, Brookdale, Haynes, Hilbert, Kelmscott, Mount Nasura, Mount Richon, Seville Grove, Wungong. WA 2027 Term 2: Monday 26 April to Friday 2 July. Perth no daylight saving since March 2009 (IANA).',
    localProject: 'Hallucinated package names. PyPI JSON API (GET https://pypi.org/pypi/<name>/json), curl default UA, 12 October 2026: five invented names (listed in scratchpad au/b14 notes, deliberately not published so the page is not a list of names to register) all 404; requests 200 (also checked: shapely 200, pyshp 200, arcgis2geojson 200, arcgis-rest-query 200). Working script: requests + json against SLIP Transport MapServer layer 14, paged 5,000 at a time; Armadale point-in-polygon 109 records. Agent turns are our scripts, not model transcripts.',
    requiredMentions: ['6,549', '1,683', '920', 'Mount Nasura', 'Forrest Road', 'pip install', 'Sherwood', 'Seventh Road', 'hallucinated package'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Armadale (WA) suburb and locality (SAL50026), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL50026'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Public Transport Authority of Western Australia, Stops (PTA-001), Creative Commons Attribution 4.0, published on data.wa.gov.au; 16,822 stop records read from the SLIP map service on 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/public-transport-authority-stops-bus-stops'
      },
      { claim: 'PyPI documentation, JSON API: GET /pypi/<project>/json returns project metadata.', url: 'https://docs.pypi.org/api/json/' },
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
      'That any named commercial AI model suggested these packages: not claimed; the agent turns are our scripts.',
      'That a package name returning 200 is safe: rejected; existence is not proof of safety or suitability.',
      'Passenger or service numbers at Armadale stops: not claimed.',
      'Figures for the City of Armadale as a whole: not used.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Armadale, the Public Transport Authority or PyPI.'
    ]
  }
};
