'use strict';
// Knox, Melbourne (cg- district page, Australia cluster Phase 8, row 264). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page (ABS LGA23670, Knox City Council) under Melbourne and Victoria.
// Spine: an agent writes one sentence per Knox government school from a prompt template. One school has no value for a
// slot; string.Template substitute fails loudly, safe_substitute ships the raw placeholder, a defaultdict prints None.
// Script: scratchpad au/b8/knox.py. Lesson family: prompt templates with required slots; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'KNOX',
    label: 'Knox, Melbourne',
    blurb: 'Vibe coding and AI agents classes for Knox, with a project on prompt templates that fail safely when a field is missing.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-knox-melbourne',
  code: 'knox',
  accent: '#2E317E',
  accentRationale: 'Knox: a dark indigo (hue 238) chosen by hand at least 10 RGB units from 1,456 accent declarations in content, the shared stylesheets and the claims log, 11.3:1 on white and 9.2:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Knox',
    eyebrow: 'Knox City Council, Melbourne, Victoria',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Knox City Council' },
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Knox, Melbourne',
  title: 'Vibe Coding and AI Agents Classes in Knox, Melbourne',
  description: 'Live online vibe coding and AI agents classes for Knox learners: building with AI tools, prompt templates and Python, in groups or one to one, first lesson free.',
  ogDescription: 'A Knox AI agents project: 33 school sentences from one prompt template, and the single missing field that three methods handle very differently.',
  twitterDescription: 'Knox vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Knox',
    description: 'Level-matched vibe coding, AI agents and Python lessons for children, teenagers and adults in Knox City Council, taught live online in English.'
  },
  h1: 'Vibe coding and AI agents classes in Knox',
  capsuleQ: 'What does an AI agents class teach a Knox learner?',
  capsule: 'How to give an AI tool exact instructions and check what comes back. Most agents fill prompt templates with data, and our Knox project shows what happens when one field is empty: one method stops, one quietly sends a broken prompt, and one invents the word "None".',
  lead: 'Picture an agent that writes a one-line description of each of the 33 government schools Knox has in the 2025 state list. It fills a prompt template with each school\'s name, type, suburb and closest station. Thirty-two rows have every value. One does not, and how the code reacts to that single gap is the whole lesson.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Knox.',
  picks: {
    eyebrow: 'Course picks for Knox',
    h2: 'Vibe coding and agents courses',
    intro: 'Every course below pairs AI tools with real code the learner can read. Book the free lesson and we will recommend a level.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Build web and Python projects with AI help, and learn to check the output.'
      },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Games and stories with Scratch and friendly AI tools.' },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Python scripts, templates and AI calls that automate real tasks.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Working with AI coding agents on real repositories.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Knox at the 2021 Census',
      h2: 'Houses, families and a median age of 40',
      intro: 'Numbers for Knox (ABS LGA23670), copied from the QuickStats page for the 2021 Census on 10 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Knox in the 2021 Census',
          head: ['Statistic', 'Knox'],
          rows: [
            ['Residents counted', '159,103'],
            ['Median resident age', '40'],
            ['Families', '45,145'],
            ['Private dwellings', '61,956'],
            ['Average household', '2.7 people'],
            ['Average vehicles per dwelling', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Knox shares, with Victoria for scale',
          head: ['Proportion', 'Knox', 'Victoria'],
          rows: [
            ['Separate houses', '83.3% (47,854)', '73.4%'],
            ['Flats or apartments', '2.7% (1,531)', '12.1%'],
            ['Bachelor degree or higher', '28.0% (36,895)', '29.2%'],
            ['Professionals among workers', '23.5% (19,146)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Five to nine', p: 'Knox had 9,408 residents aged 5 to 9, which is 5.9% of the council.' },
            { h3: 'Under five', p: '8,428 children, 5.3% of residents, were aged 0 to 4.' },
            {
              h3: 'Working from home',
              p: '25.2% of Knox workers (20,582) worked at home on Census day, which fell during a Melbourne lockdown and is not a normal week.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds its published percentages and makes small random changes to protect privacy. We print values exactly as shown and never create totals by adding rows.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One missing field, three behaviours',
      intro: 'Each sentence comes from one template: "$name is $kind school in $town. In a straight line, the closest metropolitan station is $station, $dist km away." Our lookup gives $kind for primary, secondary and combined schools. The council\'s one specific-purpose school has no entry, on purpose, so one row is missing a slot.',
      body: [
        {
          kind: 'table',
          caption: 'What each method did with 33 rows (our test)',
          head: ['Method', 'Rows with a gap', 'What came out'],
          rows: [
            ['Template.substitute', '1', 'A KeyError; the run stops and names the missing slot.'],
            ['Template.safe_substitute', '1', 'A sentence still containing the literal text $kind.'],
            ['str.format_map with a defaultdict', '1', 'A sentence with the word None where the type should be.']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Closest station to each of the 33 schools, straight-line (our calculation)',
          head: ['Station', 'Schools', 'Inside Knox?'],
          rows: [
            ['Ferntree Gully', '11', 'yes'],
            ['Boronia', '8', 'yes'],
            ['Bayswater', '5', 'yes'],
            ['Heathmont', '4', 'no'],
            ['Upper Ferntree Gully', '3', 'yes'],
            ['Glen Waverley', '1', 'no'],
            ['Yarraman', '1', 'no']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Loud is good',
              p: 'substitute refuses to build a prompt with a hole in it. The run stops on the one bad row, so a person fixes the lookup before any model sees the text.'
            },
            {
              h3: 'Quiet is risky',
              p: 'safe_substitute is meant for partial templates and leaves the placeholder in place. In an agent, that raw $kind goes to the model, which may guess a type and write it confidently.'
            },
            {
              h3: 'Wrong is worse',
              p: 'The defaultdict route fills the gap with None. The sentence reads normally, so nothing flags it, and the error flows into every later step.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The rule we teach',
          p: 'Required fields fail loudly; optional fields get a deliberate default. Deciding which is which is the design work, and it happens before any prompt is sent.'
        },
        {
          kind: 'p',
          text: 'Distances are straight-line from each school\'s listed coordinates to the nearest of the 222 metropolitan stations, ranging from 0.6 km to 6.9 km. They are not travel distances. Six schools are closest to a station outside the council, which is why that column matters. The specific-purpose school is counted but not named.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Templates in Python',
      h2: 'Writing a template that fails safely',
      intro: 'string.Template is part of the standard library and uses $name placeholders, which keeps prompt text easy to read.',
      body: [
        {
          kind: 'table',
          caption: 'Steps in the Knox exercise',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Build one dictionary of values per school from the state file.'],
            ['2', 'Fill the template with substitute and catch KeyError.'],
            ['3', 'Print the school row that failed and the missing slot.'],
            ['4', 'Decide: fix the lookup, or make that slot optional on purpose.']
          ]
        },
        {
          kind: 'p',
          text: 'One Knox example of a finished sentence: "Scoresby Primary School is a primary school in Scoresby. In a straight line, the closest metropolitan station is Glen Waverley, 6.0 km away." Every value in it comes from a file, not from a model.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Fill-the-gap stories in Scratch, where a missing word makes the sprite stop and ask.' },
            { h3: 'Teenagers', p: 'Write the template, find the gap, and compare the three behaviours on screen.' },
            { h3: 'Adults', p: 'Add required-field checks to the prompts in a work automation before it runs unattended.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'In the council',
      h2: 'Knox schools and stations',
      intro: 'From the 2025 Victorian school locations list and the department\'s station entries for FY24-25.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: '33 government schools',
              p: 'Knox has 26 primary, 5 secondary, 1 combined primary and secondary, and 1 specific-purpose government school in the 2025 file.'
            },
            { h3: 'Four stations', p: 'Boronia (462,850 entries in FY24-25), Bayswater, Ferntree Gully and Upper Ferntree Gully are inside the council boundary.' },
            { h3: 'Term 1 of 2027', p: 'Victorian government school students go back on Thursday 28 January 2027, and Term 1 ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Boundary used',
          p: 'Counts use the ABS outline of Knox City Council, about 113.9 square kilometres. School addresses inside it include Ferntree Gully, Rowville, Bayswater, Wantirna, Boronia and Knoxfield.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From stories with gaps to agents',
    intro: 'Age bands are only a guide; the first lesson shows where to begin.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Blocks first',
        p: 'Scratch projects and simple ideas about how AI tools follow instructions.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'Vibe coding for kids',
        p: 'Making games with AI help while reading the code it suggests.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Building with AI',
        p: 'Python, web projects and careful use of AI tools.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Agents and automation',
        p: 'Templates, AI calls and coding agents for real work.',
        courses: ['python-ai-automation-masterclass-college', 'complete-generative-ai-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why do Knox learners need code if agents can write it?',
    intro: 'Because an agent is only as reliable as the instructions and data it is given.',
    p1: 'Vibe coding means describing what you want and letting an AI tool draft the code. It is fast, and it works well when the person describing the job can read the result and spot a placeholder that never got filled.',
    p2: 'The Knox exercise is small on purpose. One empty field among 33 rows is easy to miss, and an agent repeating that mistake across thousands of rows is how real systems publish nonsense. Learners who have seen it once write the check without being asked.',
    closer: 'In our Knox classes, learners direct the AI and verify its work.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Knox learners join',
    intro: 'All lessons run live on video, for learners in Rowville, Wantirna or anywhere else in Knox.',
    cells: [
      { h3: 'Code on screen', p: 'Learners share their screen and the teacher works through their own project with them.' },
      { h3: 'School-term calendar', p: 'Classes follow the Victorian term pattern and rest in the school holidays.' },
      { h3: 'Trial lesson free', p: 'One complete lesson free of charge, then a course recommendation.' },
      { h3: 'Five to ten per group', p: 'Groups match level and goals, and bring together learners from many places.' },
      { h3: 'Two sessions a week', p: 'Lessons happen twice weekly, about eight in a month.' },
      { h3: 'Teachers in India', p: 'A 5:30pm Knox class is noon India time during Melbourne daylight saving and 1pm once it finishes.' }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving runs in Melbourne from Sunday 4 October 2026 to Sunday 4 April 2027. India does not use it, so every time we send is in Melbourne time.'
    }
  },
  fees: {
    h2: 'Knox class fees',
    intro: 'Plain fees that apply to every family.',
    first: 'The first lesson is on us, and it ends with a clear plan.',
    group: 'Groups: a month of about eight lessons, five to ten learners per group.',
    private: 'One to one: a month of about eight lessons, alone with a teacher.',
    closer: 'Knox families are charged in US dollars. Payment starts only after the trial has set a course and a time; holiday and missed-lesson rules are on the pricing page.'
  },
  reviewsH2: 'Google reviews from our learners and parents',
  book: {
    h2: 'Book a free Knox class',
    intro: 'Tell us the learner\'s age and what they enjoy. A child might start with a Scratch story; a teenager might build the school template and find its gap.',
    success: 'Thank you. We will be in touch shortly about a Knox class.'
  },
  faq: {
    h2: 'Knox vibe coding and AI agents questions',
    intro: 'Asked by Knox parents and adult learners before booking.',
    items: [
      { q: 'How many people live in Knox?', a: 'Knox City Council counted 159,103 residents in the 2021 Census, with a median age of 40.' },
      {
        q: 'What is vibe coding?',
        a: 'Vibe coding is building software by describing what you want to an AI tool, which drafts the code. The learner still reads, tests and fixes that code.'
      },
      {
        q: 'What is an AI agent?',
        a: 'An AI agent is a program that uses a language model to take steps towards a goal, such as filling templates, calling tools and checking results.'
      },
      {
        q: 'What is the difference between substitute and safe_substitute?',
        a: 'In Python\'s string.Template, substitute raises a KeyError when a placeholder has no value. safe_substitute leaves the placeholder text in place instead.'
      },
      {
        q: 'Are AI agents classes suitable for children?',
        a: 'Younger children learn the ideas through Scratch and kid-safe tools. Building agents with real AI services suits teenagers and adults.'
      },
      { q: 'Can adults learn to use AI coding agents?', a: 'Yes. Our coding agents course is for adults aged 18 and over, in groups or one to one.' },
      {
        q: 'Do you have a centre in Knox?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Knox classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'How many government schools does Knox have?', a: 'The 2025 Victorian school locations file lists 33 government schools in Knox City Council.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Knox learners',
    html: 'Visit the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> for the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> for the state, and <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for kids in Melbourne</a> for young starters.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Knox and Melbourne',
  footerPlaces: [
    { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids in Melbourne' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-knox .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 2.8vw, 2.3rem); }
.cg-root.cg-knox .cg-hero h1 { font-weight: 660; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-knox .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-knox .cg-eyebrow { letter-spacing: 0.1em; font-weight: 600; font-size: 0.76rem; }
.cg-root.cg-knox .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.006em; }
.cg-root.cg-knox .cg-grid-3 { gap: clamp(0.95rem, 2.2vw, 1.7rem); }
.cg-root.cg-knox .cg-table caption { text-align: left; font-weight: 640; }
.cg-root.cg-knox .cg-table td:nth-child(2) { text-align: right; }
.cg-root.cg-knox .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-knox .cg-callout { border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Knox City Council, ABS Census 2021 QuickStats, LGA23670 (read 10 October 2026): 159,103 people; median age 40; 45,145 families; 61,956 private dwellings; 2.7 people per household; 2 vehicles per dwelling; aged 0-4 8,428 (5.3%); 5-9 9,408 (5.9%); bachelor or higher 36,895 (28.0%, Victoria 29.2%); professionals 19,146 (23.5%, Victoria 25.0%); worked at home 20,582 (25.2%, lockdown Census day); separate houses 47,854 (83.3%, Victoria 73.4%); flats 1,531 (2.7%, Victoria 12.1%). ABS LGA area 113.91 square kilometres. Victorian School Locations 2025: 33 government schools in Knox (C): 26 primary, 5 secondary, 1 Pri/Sec, 1 special. DTP FY24-25 metro stations inside the polygon: Boronia 462,850; Bayswater 446,150; Ferntree Gully 337,700; Upper Ferntree Gully 180,450. 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'string.Template prompt sentences for the 33 Knox government schools (Victorian School Locations 2025). Slots: name, kind (lookup covers Primary, Secondary, Pri/Sec; the 1 special school deliberately missing), town (title case), nearest of 222 FY24-25 metro stations by haversine from school X/Y, distance. substitute: 1 KeyError; safe_substitute: 1 sentence leaving the placeholder; format_map with defaultdict(lambda: None): 1 sentence with None. Nearest station counts: Ferntree Gully 11, Boronia 8, Bayswater 5, Heathmont 4, Upper Ferntree Gully 3, Glen Waverley 1, Yarraman 1 (6 schools nearest a station outside Knox). Straight-line distances 0.6 to 6.9 km. Example: Scoresby Primary School, Glen Waverley 6.0 km. Script: scratchpad au/b8/knox.py.',
    requiredMentions: ['159,103', '45,145', '61,956', '9,408', '47,854', '36,895', '462,850', 'Scoresby Primary School', '113.9'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Knox local government area (LGA23670).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA23670'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council polygons and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Python documentation, string.Template: substitute raises KeyError for missing placeholders; safe_substitute leaves them in place.',
        url: 'https://docs.python.org/3/library/string.html#template-strings-pep292'
      },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Year levels taught by each school: not claimed; the template uses only the school type in the file.',
      'Travel times or walking distances to stations: not claimed; distances are straight-line.',
      'Naming the specific-purpose school: counted only.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Sums of Census age bands into a child total: not computed.',
      'Any affiliation with Knox City Council or the Victorian Department of Education.'
    ]
  }
};
