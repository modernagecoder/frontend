'use strict';
// Central Coast, New South Wales (cg- regional city page, Australia cluster Phase 7, row 138). Shaped page (vibe coding
// and AI agents): leads with teenagers and adults. Spine: an AI agent has a limited context window; what should it be
// given so it can answer a parent's question well? Data: NSW Department of Education, NSW public schools master dataset
// (master_dataset.csv, Date_extracted 2026-10-02; Creative Commons Attribution on Data.NSW), downloaded 7 October 2026.
// Rows with LGA "Central Coast (NSW)": 77 public schools (54 primary, 17 secondary, 4 schools for specific purposes,
// 1 environmental education centre, 1 central or community school) in 61 distinct Town_suburb values; the file has 46
// columns. Measured by us on 7 October 2026 (scratchpad au/r1/ccs_tok.py), as CSV text: all 46 columns for the 77 rows
// 43,215 characters, 2,557 words; six columns (School_name, Town_suburb, Postcode, Level_of_schooling, Latitude,
// Longitude) 6,187 characters, 399 words; the five rows nearest Gosford Public School, six columns, 503 characters,
// 29 words. Average row 551.6 characters with all columns against 79.4 with six. Token estimates use the common rule of
// thumb of about four characters per token for English text and are labelled as estimates: 10,804, 1,547 and 126. In a
// 2,000-token allowance for data, about 14 full rows fit against about 100 six-column rows, so all 77 fit only in the
// slim form. Earliest first-teacher dates in these rows: Ourimbah Public School 1863-01-01, Gosford Public School
// 1865-02-01. Lesson family: context-window token budget (choosing columns and rows for an agent's context); screened
// free site-wide on 7 October 2026 ("token budget": 0 hits; claimed by AU-R1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Central Coast Significant Urban Area (1010),
// compared with New South Wales and Australia: 343,180 people; median age 43; 93,891 families; 151,482 private
// dwellings; 2.5 people per household; separate house 102,204 (78.2%; NSW 65.6%); flat or apartment 11,484 (8.8%; NSW
// 21.7%; Australia 14.2%); Professionals 30,404 (20.4%; NSW 25.8%; Australia 24.0%); Technicians and Trades Workers
// 21,775 (14.6%; NSW 11.9%); Bachelor Degree level and above 50,188 (17.8%; NSW 27.8%; Australia 26.3%); aged 15 to
// 19 20,002 (5.8%); aged 20 to 24 18,281 (5.3%). NSW Department of Education 2026 calendar (Eastern division): Term 4
// Tuesday 13 October to Thursday 17 December. IANA tz: Australia/Sydney daylight saving from the first Sunday in
// October to the first Sunday in April. Excluded: income, rent, mortgage, ancestry, birthplace, language, religion,
// health; the schools file's enrolment, student background and socio-economic columns are never sent or quoted.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'CENTRAL COAST', label: 'Central Coast', blurb: 'The Central Coast, 77 public schools in one open file, and an AI agent project on what fits in a context window.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-central-coast-nsw',
  code: 'ccag',
  accent: '#302086',
  accentRationale: 'Central Coast: a deep indigo (HSV saturation 0.76, value 0.53, hue 249), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 12.5:1 on white and 10.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Central Coast',
    eyebrow: 'Central Coast, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Central Coast, New South Wales',
  title: 'Vibe Coding and AI Agents Classes on the Central Coast NSW',
  description: 'Live online vibe coding and AI agent classes for Central Coast teenagers and adults: build agents, feed them the right data and check their work. First lesson free.',
  ogDescription: 'Vibe coding and AI agent classes on the Central Coast, with a project that squeezes 77 school records into an agent\'s context window.',
  twitterDescription: 'Vibe coding and AI agents classes on the Central Coast NSW, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Central Coast Learners',
    description: 'Level-matched online vibe coding, AI agents, Python and data handling for teenagers and adults across the Central Coast of New South Wales, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes on the Central Coast',
  capsuleQ: 'What is the best way for a Central Coast learner to start building AI agents?',
  capsule: 'Build a small agent yourself, give it real local data, and learn to decide exactly what it should read before it answers, because an agent can only reason about what fits in its context. The 2021 Census put the Central Coast urban area at 343,180 residents. We teach vibe coding and agents live online, one to one or in small groups, and the first lesson is free.',
  lead: 'Picture an AI agent built to answer parents\' questions about Central Coast public schools. The open NSW schools file has everything it needs: 77 schools, from Woy Woy to The Entrance, with names, suburbs, levels and map positions. The lazy approach is to paste the whole table into the agent\'s prompt. That table runs to 43,215 characters, roughly 10,800 tokens by the usual estimate, and most of it is columns the question never needs. Keep six columns and the same 77 schools take about 1,500 tokens. Send only the five schools nearest the family and it drops to about 130. Our Central Coast learners measure all three, then build an agent that chooses its own context sensibly.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner on the Central Coast.',

  picks: {
    eyebrow: 'Agent and vibe coding picks for the Central Coast',
    h2: 'Four ways in to building with AI',
    intro: 'Pick by what you want to make; the free lesson confirms the level. We never ask for card details.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 18', note: 'Describe an app, let AI draft it, then read, test and fix every line until it is genuinely yours.' },
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 18', note: 'Working with coding agents step by step, including what to put in their context and how to review their changes.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University students', note: 'Full-stack projects built with AI help, with the data handling and testing that keep them honest.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults at work', note: 'Agentic coding for real workflows, with deliberate choices about what data the agent may see.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The Central Coast in the Census',
      h2: 'A coast of 343,180 people between Sydney and the Hunter',
      intro: 'Selected counts for the Central Coast urban area from the 2021 Census, alongside the state and national shares the ABS prints next to them.',
      body: [
        { kind: 'table', caption: 'Central Coast, 2021 Census QuickStats', head: ['Measure', 'Central Coast', 'New South Wales', 'Australia'], rows: [
          ['People', '343,180', 'Not compared', 'Not compared'],
          ['Median age', '43', 'Not compared', 'Not compared'],
          ['Families', '93,891', 'Not compared', 'Not compared'],
          ['Private dwellings', '151,482', 'Not compared', 'Not compared'],
          ['Separate houses among occupied dwellings', '102,204, or 78.2%', '65.6%', 'Not compared'],
          ['Employed residents in technical and trades roles', '21,775, or 14.6%', '11.9%', 'Not compared'],
          ['Residents 15 or older with at least a bachelor degree', '50,188, or 17.8%', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A place of houses', p: 'Nearly four occupied dwellings in five are separate houses, 78.2% against 65.6% for the state, and 8.8% are flats or apartments.' },
          { h3: 'Working with their hands', p: 'Technicians and trades workers are 14.6% of employed residents, above the state share; professionals are 20.4% against 25.8% statewide.' },
          { h3: 'Teenagers and young adults', p: 'The Census counted 20,002 residents aged 15 to 19 and 18,281 aged 20 to 24, the main audience for this page.' }
        ] },
        { kind: 'p', text: 'One caution: the ABS lightly scrambles small census cells to protect privacy, so components can disagree with totals. We reproduce totals and percentages as published and never build a new total by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much should an AI agent be given to read?',
      intro: 'The 77 public schools with the council area "Central Coast (NSW)" in the NSW public schools master dataset, prepared three ways for an agent\'s context.',
      body: [
        { kind: 'table', caption: 'The same school data in three sizes (measured by us; token figures are estimates at about four characters per token)', head: ['What the agent receives', 'Characters', 'Words', 'Estimated tokens'], rows: [
          ['All 46 columns for all 77 schools', '43,215', '2,557', 'About 10,800'],
          ['Six useful columns for all 77 schools', '6,187', '399', 'About 1,550'],
          ['Six columns for the five schools nearest the family', '503', '29', 'About 130']
        ] },
        { kind: 'table', caption: 'What fits in a 2,000-token allowance for data (our estimate)', head: ['Format', 'Average characters per school', 'Schools that fit'], rows: [
          ['All 46 columns', '551.6', 'About 14'],
          ['Six columns', '79.4', 'About 100, so all 77 fit']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Drop columns first', p: 'Phone, fax, email, website, electorates and administrative codes take up most of each row and answer nothing a parent asked. Six columns keep the name, suburb, postcode, level and position.' },
          { h3: '2. Then choose rows', p: 'A question about the nearest high school needs a handful of nearby rows, not the whole coast. Choosing rows by distance before calling the model cuts the context again by a factor of twelve.' },
          { h3: '3. Leave out what is not needed', p: 'The full file also carries enrolment and student background columns. An agent answering "which school is closest" has no reason to see them, so our version never sends them.' }
        ] },
        { kind: 'callout', h3: 'Why smaller context gives better answers', p: 'A bigger prompt is not a better prompt. Every extra column costs time and money, crowds out instructions, and gives the model more irrelevant detail to misread. Learners compare the agent\'s answers with each version and find that the slim, filtered context is cheaper and easier to check, while answering the parent\'s actual question just as well.' },
        { kind: 'p', text: 'These are our measurements on the NSW file extracted on 2 October 2026. Token counts differ between models and tokenisers, so we report characters and words exactly and tokens only as an estimate. The earliest first-teacher dates in the Central Coast rows belong to Ourimbah Public School (1863) and Gosford Public School (1865).' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Building agents carefully',
      h2: 'Five decisions before an agent reads your data',
      intro: 'Worked out on the schools file, then used on any agent that reads documents, spreadsheets or databases.',
      body: [
        { kind: 'table', caption: 'Context design for agents', head: ['Decision', 'Question to ask', 'Result in our project'], rows: [
          ['Which columns?', 'What does the task actually need?', '6 of 46 columns'],
          ['Which rows?', 'Can a tool narrow the list before the model reads it?', '5 of 77 schools for a nearest-school question'],
          ['What must stay out?', 'Is any field sensitive or irrelevant?', 'Enrolment and background columns never sent'],
          ['How big is the budget?', 'How many tokens are left after instructions?', 'A 2,000-token allowance for data'],
          ['How will you check?', 'Can the answer be verified against the source?', 'Every answer traced to named rows']
        ] },
        { kind: 'p', text: 'Agents that call tools make this easier, not harder. Instead of reading the whole table, an agent can ask a small function for "the five schools nearest this point" and receive 503 characters. The skill is designing those tools and deciding what each one returns, which is where vibe coding turns into real engineering.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Build a first agent in Python that answers questions from a filtered table, and measure how big its prompt really is.' },
          { h3: 'University students', p: 'Tool design, retrieval and context budgets for agents that work with larger datasets and documents.' },
          { h3: 'Adults at work', p: 'Decide what company data an assistant should see, and how to keep sensitive fields out of its reach entirely.' }
        ] },
        { kind: 'p', text: 'Neither the education department nor the statistics bureau has any part in our classes. They publish the source files; the measurements of characters, words and estimated tokens in this project were made by us.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Along the coast',
      h2: 'Sixty-one suburbs and two clocks a year',
      intro: 'Facts that matter when you write software for the region.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Spread across 61 suburbs', p: 'The 77 Central Coast public schools in the file sit in 61 different suburbs, so a question like "nearest school" really does depend on where the family lives.' },
          { h3: 'The last term of 2026', p: 'Coast public schools return for the final term on Tuesday 13 October and finish on Thursday 17 December, according to the state education department calendar.' },
          { h3: 'Daylight saving', p: 'New South Wales moves its clocks forward on the first Sunday in October and back on the first Sunday in April, as recorded in the IANA time zone database.' }
        ] },
        { kind: 'spec', title: 'Clocks and agents', p: 'An agent that books lessons or reminders for Central Coast families must know that local time jumps twice a year while India time does not. Storing every time in UTC and converting at the end is the safe pattern our learners build into their tools.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first prompt to agents you can trust',
    intro: 'Ages are rough markers; the trial lesson sets the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Vibe coding basics', p: 'Describing a small app to an AI, reading what it writes, and fixing what is wrong.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'First agents', p: 'Agents that call simple tools, with measured prompts and answers checked against the data.', courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'python-complete-masterclass-teens'] },
      { band: 'University', h3: 'Agents and retrieval', p: 'Tool design, retrieval, context budgets and evaluation on larger datasets.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Agentic workflows that respect data boundaries and can be audited afterwards.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If agents can write the code, why should a Central Coast learner understand data at all?',
    intro: 'Because an agent is only as good as what it is given to read, and choosing that is a human decision.',
    p1: 'Vibe coding lets you describe what you want and watch an AI produce it, and agents can go further by running tools on your behalf. But nothing in that process decides, on its own, which data the agent should see. Paste the whole Central Coast schools table into a prompt and you spend about 10,800 tokens, mostly on fax numbers and electorate names, and you hand the model columns it never needed to see.',
    p2: 'Learners who have measured the three versions of the same data make better choices by habit: trim columns, filter rows with a tool, keep sensitive fields out, and check each answer against named source rows. That is the difference between someone who uses agents and someone who can build them responsibly.',
    closer: 'Agents will keep getting more capable, and a Central Coast learner who knows exactly what to feed them and how to check what comes back will be in demand in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Woy Woy to The Entrance, one online class',
    intro: 'The Central Coast spreads along beaches, lakes and valleys, and a live online lesson reaches every part of it.',
    cells: [
      { h3: 'Every suburb included', p: 'A learner in Gosford and another near Tuggerah Lake join the same class at the same moment, each from home.' },
      { h3: 'Year levels as NSW uses them', p: 'Teachers talk about Year 7 to Year 12 and the NSW stages as local schools do; all lessons are in English.' },
      { h3: 'A trial with a real build', p: 'The first lesson is an actual vibe coding or agent task with a teacher, finishing with a suggested level, course and time. No payment details are taken.' },
      { h3: 'Five to ten in a group', p: 'Learners at the same stage from the coast, the rest of Australia and overseas, so every level has a workable slot.' },
      { h3: 'A regular rhythm', p: 'Usually two lessons a week, around eight a month, with school holidays and exam periods planned with the teacher.' },
      { h3: 'One hour shifts twice a year', p: 'A 5pm lesson on the coast lands at 12:30pm in India in winter and at 11:30am once daylight saving starts in October.' }
    ],
    spec: { title: 'Always agreed in local time', p: 'Since New South Wales changes its clocks and India does not, every lesson is set in Central Coast time, so October and April never catch anyone out.' }
  },

  fees: {
    h2: 'What agent and vibe coding classes cost on the Central Coast',
    intro: 'Three figures and that is all.',
    first: 'A full first lesson free of charge, ending with a level, a course and a time.',
    group: 'A month of lessons, normally eight, with five to ten learners at your stage.',
    private: 'Roughly eight lessons a month, one teacher and one learner.',
    closer: 'Outside India every family is billed in US dollars at one rate, from the peninsula to the northern lakes, with no separate coastal price. Payments begin only after the trial confirms a course and slot; breaks, missed lessons and switching format are on the pricing page.'
  },

  reviewsH2: 'Posted on Google by our families, in their words',

  book: {
    h2: 'Tell us what you would like to build',
    intro: 'We set the first task to suit: a small app made with AI help for a Year 8, a first tool-using agent for a Year 11, or the full schools file and a context budget for an adult.',
    success: 'Thank you. We will be in touch soon about a vibe coding or AI agents class on the Central Coast.'
  },

  faq: {
    h2: 'Central Coast vibe coding and AI agents questions',
    intro: 'What Central Coast learners and families ask us first.',
    items: [
      { q: 'What is the population of the Central Coast?', a: 'The urban area held 343,180 residents in 2021, and half of them were 43 or older.' },
      { q: 'What is a context window?', a: 'A context window is the amount of text an AI model can take in at once, counted in tokens. Instructions, conversation history and any data you give it all share that space, so an agent can only reason about what fits inside it.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is building software by describing what you want to an AI and letting it draft the code, then reading, testing and fixing that code yourself. We teach it with the checking built in from the first lesson.' },
      { q: 'What is the Central Coast schools project?', a: 'Learners take the 77 Central Coast public schools from the NSW open schools file, measure how large the data is when given to an agent in three forms, and build an agent that sends only the columns and rows a question needs. The full table is about 10,800 tokens; the filtered version for a nearest-school question is about 130.' },
      { q: 'Are AI agents safe for teenagers to build?', a: 'Building agents in our classes uses tools and accounts suited to each learner\'s age, and teenagers work on projects like the schools agent rather than open-ended bots. Age rules set by each AI provider are followed.' },
      { q: 'When do Central Coast lessons happen?', a: 'After school, in the evening or at weekends, settled during the free lesson and always quoted in coast time. From April to October our teachers in India are four and a half hours behind; through the summer months the gap grows to five and a half.' },
      { q: 'Do you teach younger children on the Central Coast?', a: 'Yes, from age 6, starting with Scratch and simple AI experiments. Here we concentrate on teenagers and grown-ups.' },
      { q: 'Is there a Modern Age Coders centre on the Central Coast?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Central Coast coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Central Coast and New South Wales learners',
    html: 'Learners who want to think rather than copy should read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>, and teenagers ready for agents can compare <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>. Up the highway there is <a class="cg-inline-link" href="/online-coding-and-python-classes-in-newcastle-nsw">a Newcastle page on Python</a>, down it <a class="cg-inline-link" href="/best-coding-classes-in-sydney">one for Sydney</a>, and the state summary sits at <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Central Coast and New South Wales',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/online-coding-and-python-classes-in-newcastle-nsw', label: 'Newcastle' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-ccag .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.3rem); }
.cg-root.cg-ccag .cg-hero h1 { font-weight: 730; letter-spacing: -0.019em; line-height: 1.08; }
.cg-root.cg-ccag .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ccag .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-ccag .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-ccag .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.6rem); }
.cg-root.cg-ccag .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-ccag .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ccag .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-ccag .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Central Coast Significant Urban Area, ABS Census 2021 QuickStats, area code 1010, compared with New South Wales and Australia (read 7 October 2026): 343,180 people; median age 43; 93,891 families; 151,482 private dwellings; average 2.5 people per household; dwelling structure: separate house 102,204 (78.2 percent; NSW 65.6), flat or apartment 11,484 (8.8 percent; NSW 21.7; Australia 14.2); occupation: Professionals 30,404 (20.4 percent; NSW 25.8; Australia 24.0), Technicians and Trades Workers 21,775 (14.6 percent; NSW 11.9); Bachelor Degree level and above 50,188 (17.8 percent; NSW 27.8; Australia 26.3); aged 15 to 19: 20,002 (5.8 percent); aged 20 to 24: 18,281 (5.3 percent). NSW Department of Education 2026 calendar, Eastern division: Term 4 Tuesday 13 October to Thursday 17 December. IANA tz database: Australia/Sydney daylight saving from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Context-window token budget for an agent. NSW public schools master dataset (Date_extracted 2026-10-02), 46 columns; LGA "Central Coast (NSW)": 77 rows; Level_of_schooling: Primary School 54, Secondary School 17, Schools for Specific Purposes 4, Environmental Education Centre 1, Central/Community School 1; 61 distinct Town_suburb values. Written as CSV (Python csv.writer, LF line endings): all columns 43,215 characters, 2,557 whitespace words; six columns (School_name, Town_suburb, Postcode, Level_of_schooling, Latitude, Longitude) 6,187 characters, 399 words; five rows nearest Gosford Public School by equirectangular distance, six columns, 503 characters, 29 words. Mean characters per row: 551.6 (all columns), 79.4 (six). Token estimate = ceil(characters / 4), labelled as a rule of thumb: 10,804, 1,547, 126. In a 2,000-token data allowance: 14 full rows, 100 slim rows. Enrolment, Indigenous, language-background and socio-economic columns are present in the file and deliberately excluded from every version sent. Earliest Date_1st_teacher: Ourimbah Public School 1863-01-01, Gosford Public School 1865-02-01. Lesson family: context budget, column and row selection, data minimisation for agents.',
    requiredMentions: [
      '343,180',
      '93,891',
      '151,482',
      '102,204',
      '50,188',
      '21,775',
      '43,215',
      '6,187',
      'Woy Woy to The Entrance',
      'About 10,800'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Central Coast Significant Urban Area (1010): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1010' },
      { claim: 'NSW Department of Education, NSW public schools master dataset, Creative Commons Attribution, on Data.NSW.', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, school calendar 2026: Eastern division term dates.', url: 'https://education.nsw.gov.au/schooling/calendars/2026' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Exact token counts for any named model: tokenisers differ, so tokens are given only as an estimate at about four characters per token, with characters and words exact.',
      'Any figure from the enrolment, Indigenous, language background or socio-economic columns of the schools file: not used or quoted.',
      'Non-government schools: the NSW master dataset covers public schools only.',
      'OpenStreetMap data: the Overpass API returned 406 to this machine on 7 October 2026 and no mirror was tried.',
      'Bureau of Meteorology observations: the observations feed returned 403 and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education or the ABS.'
    ]
  }
};
