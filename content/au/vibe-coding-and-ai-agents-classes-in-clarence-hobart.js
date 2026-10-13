'use strict';
// Clarence, Hobart (cg- district page, Australia cluster Phase 8, row 344). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council page (ABS LGA61410, Clarence City Council) under Hobart and Tasmania.
// Spine: an agent writes scripts/report.py that opens data/clarence_roads.csv by a relative path. Run from the project
// folder it prints 14,374 segments and 1,837.0 km; run from the scripts folder it fails with FileNotFoundError. Building
// the path from Path(__file__) works from both. Our run in scratchpad au/b17/clrc_demo; agent turns are our scripts.
// Data: LIST Transport Segments statistics for LGA61410 (CC BY 3.0 AU). Lesson family: relative paths and the working
// directory; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CLARENCE',
    label: 'Clarence, Hobart',
    blurb: 'Vibe coding and AI agent classes for Clarence, where an agent\'s script found the road data from one folder and crashed from another.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-clarence-hobart',
  code: 'clrc',
  accent: '#5D5D36',
  accentRationale: 'Clarence: a dry-grass olive (hue 60.0), 5.53:1 on #EDE7DA; 34.8 RGB from the nearest Tasmanian accent, 13.0 from any other Australian accent and 7.9 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Clarence',
    eyebrow: 'Clarence City Council, Hobart, Tasmania',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Clarence City Council' },
      { type: 'City', name: 'Hobart' },
      { type: 'AdministrativeArea', name: 'Tasmania' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-tasmania', name: 'Tasmania' },
    { slug: 'best-coding-classes-in-hobart', name: 'Hobart' }
  ],
  nav: [
    { label: 'Hobart', href: '/best-coding-classes-in-hobart' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Clarence, Hobart',
  title: 'Vibe Coding and AI Agents Classes in Clarence, Hobart',
  description: 'Live online vibe coding and AI agent classes across Clarence for teenagers and adults, with Scratch and Python for children from six, in small groups or one to one.',
  ogDescription: 'Clarence agent project: one script, one data file, and a FileNotFoundError that depended only on which folder the script was run from.',
  twitterDescription: 'Vibe coding and AI agents for Clarence, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Clarence',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults across the Clarence council area, Hobart, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Clarence',
  capsuleQ: 'Why does code an AI agent writes for Clarence projects work once and then fail?',
  capsule: 'Often because it assumes where it will be run from, so file paths that worked in the agent\'s session break elsewhere. Our live online lessons cover building with AI and agents while watching for exactly that. The Clarence council area had 61,531 residents in 2021.',
  lead: 'An agent wrote a tidy script to total Clarence\'s road network from a small data file, ran it, and reported 14,374 road segments. Run the same script from its own folder and Python cannot find the file. Nothing in the code changed; only the folder it was started from.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Clarence.',
  picks: {
    eyebrow: 'Course picks for Clarence',
    h2: 'Courses for agent-built code that travels',
    intro: 'This project needs Python files, paths and a working knowledge of how scripts run. These courses cover them; a free first lesson picks the right one.',
    items: [
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents on real projects, including how and where their code runs.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Building with AI help and testing on more than one machine or folder.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Files, paths and pathlib, explained from the ground up.' },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Using AI tools well, including checking their assumptions.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Clarence in the Census',
      h2: 'Hobart\'s eastern shore',
      intro: 'Census 2021 figures for the Clarence local government area (ABS code LGA61410), with Tasmania alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Clarence council area, 2021',
          head: ['Measure', 'Clarence'],
          rows: [
            ['Residents', '61,531'],
            ['Median age', '41'],
            ['Families', '17,067'],
            ['Private dwellings', '25,855'],
            ['People per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Clarence and Tasmania compared',
          head: ['Indicator', 'Clarence', 'Tasmania'],
          rows: [
            ['Separate houses', '93.2% (21,987)', '87.7%'],
            ['Adults with a bachelor degree or higher', '25.8% (13,155)', '21.9%'],
            ['Workers who took a bus to work', '4.2% (1,227)', '2.5%'],
            ['Employed people in professional jobs', '23.6% (6,856)', '20.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School ages', p: 'Clarence had 3,546 residents aged 5 to 9, 3,726 aged 10 to 14 and 3,162 aged 15 to 19.' },
            { h3: 'Older residents', p: '1,673 residents were aged 85 or over.' },
            { h3: 'A large council', p: 'The council area covers about 378 square kilometres east of the Derwent.' }
          ]
        },
        { kind: 'p', text: 'Census cells carry small, deliberate privacy adjustments, so each figure is shown as published and none are combined.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'It worked on the agent\'s machine',
      intro: 'We exported road segment totals for the Clarence council area from the LIST into data/clarence_roads.csv. Our scripted agent wrote scripts/report.py, which opens "data/clarence_roads.csv" and adds up the rows. We ran it from two folders, then ran a corrected version.',
      body: [
        {
          kind: 'table',
          caption: 'The same script, started from different folders (our run)',
          head: ['Script and folder', 'Output'],
          rows: [
            ['report.py, from the project folder', 'segments 14374 km 1837.0'],
            ['report.py, from the scripts folder', 'FileNotFoundError: data/clarence_roads.csv'],
            ['report_fixed.py, from the scripts folder', 'segments 14374 km 1837.0'],
            ['report_fixed.py, from the project folder', 'segments 14374 km 1837.0']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What the data file holds (LIST, our query)',
          head: ['Road class', 'Segments', 'Recorded length'],
          rows: [
            ['Access Road', '6,141', '752.3 km'],
            ['Local Road', '4,877', '434.7 km'],
            ['Vehicular Track', '1,410', '398.3 km'],
            ['Collector Road', '746', '67.8 km'],
            ['Arterial Road', '549', '66.7 km'],
            ['Sub Arterial Road', '383', '53.8 km'],
            ['National/State Highway', '268', '63.4 km']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why it broke',
              p: 'A relative path is resolved from the folder Python was started in, not the folder the script lives in. The agent tested from one place; a person ran it from another.'
            },
            {
              h3: 'The tempting fix',
              p: 'Copying the data file into the scripts folder makes the error go away and leaves two copies that will drift apart. Agents sometimes do exactly that.'
            },
            {
              h3: 'The real fix',
              p: 'Build the path from the script\'s own location: Path(__file__).resolve().parent.parent / \'data\' / \'clarence_roads.csv\'. It works from anywhere.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Ask where it will run',
          p: 'Before accepting agent-written code, run it from a different folder, or ask the agent how it finds its files. Hidden assumptions about the working directory are among the most common reasons code works in a demo and fails in use.'
        },
        {
          kind: 'p',
          text: 'The road totals come from the LIST, State of Tasmania, via its map service\'s statistics query for segments intersecting the council boundary. The scripts, folders and outputs are our own; the agent is our own short script standing in for one, not a commercial AI model.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Agents and files',
      h2: 'Paths that do not depend on luck',
      intro: 'A short guide to finding files reliably in Python.',
      body: [
        {
          kind: 'table',
          caption: 'Ways to locate a data file',
          head: ['Approach', 'Works from any folder?', 'Note'],
          rows: [
            ['open(\'data/file.csv\')', 'No', 'Depends on the current folder'],
            ['Path(__file__).resolve().parent', 'Yes', 'Anchored to the script itself'],
            ['A path passed as an argument', 'Yes', 'The caller decides explicitly'],
            ['os.chdir() at the top of the script', 'Yes, but risky', 'Changes state for everything else']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Give directions to a toy box from the kitchen, then try the same directions from the garden.' },
            { h3: 'Secondary learners', p: 'Ask an AI tool for a script that reads a CSV, run it from two folders, and fix it with pathlib.' },
            { h3: 'Adults', p: 'Check scheduled jobs and agent-written tools at work for relative paths before they run unattended.' }
          ]
        },
        {
          kind: 'p',
          text: 'print(Path.cwd()) at the start of a script shows the working directory in one line. It is the quickest way to explain a FileNotFoundError that seems impossible.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Clarence',
      h2: 'Sealed streets and long rural tracks',
      intro: 'Council-wide markers from the LIST open data and the Tasmanian school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Surfaces', p: 'Of the 14,374 segments, 9,016 are sealed, 5,143 unsealed and 215 need four-wheel drive.' },
            { h3: 'Places and addresses', p: 'The LIST records 510 points of interest and 30,912 address points in or on the council boundary, counts only.' },
            { h3: 'Term 3, 2027', p: 'Tasmanian government school Term 3 of 2027 runs from 19 July to 24 September.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Clarence council area',
          p: 'Figures describe the Clarence local government area, not Greater Hobart. By the ABS boundaries it touches Brighton, Sorell and Southern Midlands on land; the City of Hobart lies across the river.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From giving directions to robust scripts',
    intro: 'Ages are a loose guide; a trial lesson finds the level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and play',
        p: 'Clear instructions and where things live in a project.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'Files, folders and first AI tools.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Building with AI, then testing outside the demo.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Coding agents',
        p: 'Agent-built tools that run reliably.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'If the agent ran it, why does it fail for you?',
    intro: 'Because the agent ran it from somewhere you may not be.',
    p1: 'Coding agents usually work inside one project folder and test from there. Their scripts pass every check they run. The first time a person double-clicks the file or a scheduler starts it elsewhere, a relative path points at nothing.',
    p2: 'Learners who have seen 14,374 become FileNotFoundError with no code change check how files are found in any script an agent writes. That small habit separates a demo from a tool people can rely on.',
    closer: 'In Clarence, the learner who anchors file paths ships scripts that run from anywhere.',
    blogAnchor: 'why knowing how code runs still matters alongside AI'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Clarence lessons online',
    intro: 'All lessons are live on video, with no trip across the bridge.',
    cells: [
      { h3: 'Run it twice', p: 'Learners test agent code from more than one folder while the teacher watches.' },
      { h3: 'Term-time classes', p: 'Lessons follow the Tasmanian school year and pause in holidays.' },
      { h3: 'A free start', p: 'One complete lesson without charge, then a written suggestion.' },
      { h3: 'Groups of fifteen to twenty', p: 'Learners matched by level, or private sessions.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons a week, about eight each month.' },
      { h3: 'India time', p: 'Teaching comes from India: a 7pm Clarence class is 1:30pm India time in summer and 2:30pm after April.' }
    ],
    spec: {
      title: 'Hobart clocks',
      p: 'Hobart changes to daylight saving on the first Sunday in October and back on the first Sunday in April (IANA time zone database); India stays on one time.'
    }
  },
  fees: {
    h2: 'Clarence class fees',
    intro: 'Three fixed prices, whichever suburb a learner lives in.',
    first: 'The first lesson is free and comes with written advice.',
    group: 'About eight group lessons a month with fifteen to twenty learners.',
    private: 'About eight private lessons a month.',
    closer: 'Clarence families pay in US dollars once the trial has fixed a course and time. The pricing page sets out holidays and missed lessons.'
  },
  reviewsH2: 'What Google reviewers say about our lessons',
  book: {
    h2: 'Book a free Clarence class',
    intro: 'Tell us the learner\'s age and interests. A teenager might fix the path in the agent\'s script; a younger child might write directions in Scratch that work from any starting point.',
    success: 'Thank you. We will contact you soon about a Clarence class.'
  },
  faq: {
    h2: 'Clarence vibe coding and agent questions',
    intro: 'Questions asked across the Clarence council area.',
    items: [
      {
        q: 'What is the population of the Clarence council area?',
        a: 'The 2021 Census QuickStats count 61,531 residents in the Clarence local government area, with 17,067 families and 25,855 private dwellings.'
      },
      {
        q: 'What is the working directory in Python?',
        a: 'The folder a program was started from. Relative file paths are resolved from it, not from the folder where the script file is saved.'
      },
      {
        q: 'How do I make a script find its data file from any folder?',
        a: 'Build the path from the script\'s location with pathlib, for example Path(__file__).resolve().parent, or pass the full path in as an argument.'
      },
      {
        q: 'How many road segments does the LIST record for Clarence?',
        a: 'The LIST transport layer returned 14,374 road segments intersecting the Clarence council area in October 2026, with 1,837.0 km of recorded length across its road classes.'
      },
      {
        q: 'What is an AI coding agent?',
        a: 'An AI system that writes, runs and edits code over several steps to complete a task, rather than answering a single message.'
      },
      { q: 'Which AI tools will a Clarence teenager use?', a: 'Tools suited to their age. Claude appears only in our adult courses, which start at 18.' },
      {
        q: 'Is there a classroom in Clarence?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Clarence learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Is Copilot Studio part of the Clarence group course?',
        a: 'No. We teach Copilot Studio only in private sessions, while group learners write their agents in Python.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Hobart and Tasmania',
    h2: 'More for Clarence learners',
    html: 'Across the river, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-sandy-bay-hobart">Sandy Bay</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-glenorchy-hobart">Glenorchy</a> have their own pages. <a class="cg-inline-link" href="/best-coding-classes-in-hobart">The Hobart page</a> covers the whole city and <a class="cg-inline-link" href="/coding-and-ai-classes-in-tasmania">the Tasmania guide</a> the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Clarence and Hobart',
  footerPlaces: [
    { href: '/best-coding-classes-in-hobart', label: 'Hobart' },
    { href: '/vibe-coding-and-ai-agents-classes-in-burnie', label: 'Burnie' },
    { href: '/best-coding-classes-in-launceston', label: 'Launceston' },
    { href: '/coding-and-ai-classes-in-tasmania', label: 'Tasmania' }
  ],
  personalityCss: `
.cg-root.cg-clrc .cg-hero-grid { align-items: center; gap: clamp(1.07rem, 3.14vw, 2.53rem); }
.cg-root.cg-clrc .cg-hero h1 { font-weight: 636; letter-spacing: -0.021em; line-height: 1.08; }
.cg-root.cg-clrc .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.56rem 0 0.56rem 1.1rem; }
.cg-root.cg-clrc .cg-eyebrow { letter-spacing: 0.117em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-clrc .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.016em; }
.cg-root.cg-clrc .cg-grid-3 { gap: clamp(0.71rem, 1.87vw, 1.47rem); }
.cg-root.cg-clrc .cg-table caption { font-weight: 611; text-align: left; letter-spacing: 0.019em; }
.cg-root.cg-clrc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-clrc .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.07rem; }
.cg-root.cg-clrc .cg-callout { border-left-width: 5px; border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Clarence local government area (LGA61410). ABS Census 2021 QuickStats (read 12 October 2026): 61,531 people; median age 41; 17,067 families; 25,855 private dwellings; 2.4 per household; separate houses 21,987 (93.2%, Tas 87.7%); bachelor or higher 13,155 (25.8%, Tas 21.9%); bus 1,227 (4.2%, Tas 2.5%); professionals 6,856 (23.6%, Tas 20.0%); aged 5-9 3,546; 10-14 3,726; 15-19 3,162; 85+ 1,673. ABS LGA area 377.9614 sq km. LIST Transport Segments intersecting the LGA (server-side statistics, 14 Oct 2026): 14,374 segments, 1,837.0 km summed from class totals; Access 6,141 (752.3 km), Local 4,877 (434.7), Vehicular Track 1,410 (398.3), Collector 746 (67.8), Arterial 549 (66.7), Sub Arterial 383 (53.8), National/State Highway 268 (63.4); Sealed 9,016, Unsealed 5,143, 4WD 215. LIST Points of Interest 510; Address Points 30,912 (counts only). Neighbouring LGAs (ABS touches): Brighton, Sorell, Southern Midlands. Tas 2027 Term 3 19 July to 24 September.',
    localProject: 'Relative paths. clrc_demo: data/clarence_roads.csv (class, segments, km) and scripts/report.py with open("data/clarence_roads.csv"). From project folder: segments 14374 km 1837.0; from scripts folder: FileNotFoundError: [Errno 2] No such file or directory: data/clarence_roads.csv; report_fixed.py using Path(__file__).resolve().parent.parent / data: same totals from both folders. Agent turns are our scripts.',
    requiredMentions: ['61,531', '25,855', '3,162', 'Southern Midlands', 'clarence_roads.csv', 'FileNotFoundError', '14,374', '30,912', 'working directory'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Clarence local government area (LGA61410), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA61410'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'the LIST, State of Tasmania, Transport Segments (All Transport layer), Creative Commons Attribution 3.0 Australia; queried from the LIST map service on 13 and 14 October 2026.',
        url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Public/TopographyAndRelief/MapServer/8'
      },
      {
        claim: 'the LIST, State of Tasmania, Address Points, Creative Commons Attribution 3.0 Australia; counts only, queried 13 October 2026.',
        url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Public/CadastreAndAdministrative/MapServer/43'
      },
      {
        claim: 'Python documentation, pathlib: Path.resolve() and Path.cwd() for absolute paths and the current working directory.',
        url: 'https://docs.python.org/3/library/pathlib.html'
      },
      {
        claim: 'Tasmanian Department for Education, Children and Young People, 2027 school term dates for school and college students.',
        url: 'https://www.decyp.tas.gov.au/learning/term-dates/'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Hobart, rule AT, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Figures for Greater Hobart from the Hobart page: not used.',
      'Exact road length inside the council: not claimed; crossing segments are counted whole.',
      'Any transcript from a commercial AI model: not claimed; the agent is our script.',
      'Any individual address: not published; counts only.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Clarence City Council or the LIST.'
    ]
  }
};
