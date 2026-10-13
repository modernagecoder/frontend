'use strict';
// Ipswich, Queensland (cg- regional city page, Australia cluster Phase 7, row 198). Shaped page (vibe coding and AI
// agents). Slug suffixed -qld because Ipswich is also a UK town. Spine: when an AI agent averages a column in which a
// zero means "not recorded", how far off is its answer? Data: City of Ipswich, Ipswich City Road Bridges (data.gov.au,
// CC BY 3.0 AU), WFS GeoJSON read 10 October 2026 (scratchpad au/r8/dl/ips_bridges.geojson): 190 records, 186 typed
// Pedestrian Bridge and 4 Bridge. Our code (au/r8/ips_zero.py): BRIDGE_HEI zero in 158 of 190, mean over all 0.523 m,
// over the 32 non-zero 3.103 m (median 1.60); BRIDGE_LEN zero in 22, mean 15.156 vs 17.141; BRIDGE_WID zero in 17,
// mean 2.106 vs 2.313; SPANS zero in 99; SPAN_LENGT zero in 101, mean 6.112 vs 13.047; SPANS x SPAN_LENGT equals
// BRIDGE_LEN for 73 records and differs for 11; DIVISION -9999 for 2; TYPE_CONST "." for 6; construction year blank
// for 8, otherwise 1940 to 2023; 129 timber. Lesson family: zero used as an unknown placeholder skewing an agent's
// averages (sentinel values); changed from GTFS timepoints because the SEQ feed times every stop. Screened free
// site-wide on 10 October 2026 and claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Ipswich LGA (LGA33960), with Queensland and
// Australia: 229,208 people; median age 33; 60,293 families; 87,287 private dwellings; 2.8 people per household;
// separate house 69,218 (88.7 percent; Qld 74.8; Australia 72.3); flat or apartment 1,346 (1.7; Qld 12.5; Australia
// 14.2); Professionals 17,051 (16.4; Qld 21.4; Australia 24.0); Technicians and Trades Workers 14,898 (14.3; Qld
// 13.7; Australia 12.9); Bachelor Degree level and above 27,224 (15.5; Qld 21.9; Australia 26.3); aged 15 to 19:
// 15,085 (6.6; Qld 6.1); aged 20 to 24: 15,512 (6.8; Qld 6.3). ABS ERP Ipswich LGA (33960) 30 June 2025: 268,272.
// Queensland term dates from education.qld.gov.au. Excluded by the cluster rules: income, rent, mortgage, ancestry,
// birthplace, language, religion, health; bridge condition and safety not discussed.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'IPSWICH', label: 'Ipswich', blurb: 'Ipswich, Queensland, where a council bridge register teaches an AI agent that a zero is not always a number.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-ipswich-qld',
  code: 'ipsq',
  accent: '#8C3A46',
  accentRationale: 'Ipswich, Queensland: a dark heritage-brick red (HSV saturation 0.59, value 0.55, hue 351), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 7.2:1 on white and 5.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Ipswich',
    eyebrow: 'Ipswich, south east Queensland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Queensland', href: '/coding-and-ai-classes-in-queensland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ipswich, Queensland',
  title: 'Vibe Coding and AI Agents Classes in Ipswich, Queensland',
  description: 'Live online vibe coding and AI agents classes for Ipswich teenagers and adults, with a project where an agent averages council bridge data full of hidden zeros.',
  ogDescription: 'Vibe coding and AI agents for Ipswich learners, tested on a council bridge register where 158 of 190 heights are recorded as zero.',
  twitterDescription: 'Ipswich vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Ipswich Learners',
    description: 'Level-matched online vibe coding, AI coding agents, data checking and Python for teenagers and adults in Ipswich, Queensland, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Ipswich',
  capsuleQ: 'How should an Ipswich learner check what an AI agent tells them about data?',
  capsule: 'By asking what every value in the data means before trusting any average, which is exactly what these live classes train. An Ipswich teenager or adult directs AI agents on real council data and learns to catch the answers that look fine but are not. The council area held 229,208 people in 2021. Lessons run online, in small groups or one to one, with the first one free.',
  lead: 'The City of Ipswich publishes a register of its bridges as open data: 190 structures, almost all of them footbridges, each with a length, a width, a height and a year built. Ask an AI agent for the average bridge height and it reads the column, adds it up and replies 0.523 metres, roughly knee height. The problem is that 158 of the 190 heights are recorded as zero, which for a bridge is not a measurement at all. Leave those out and the average of the 32 real values is 3.103 metres. Our Ipswich learners find out how a single silent zero can turn a confident agent into a confidently wrong one.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding and AI agents class for a learner in Ipswich, Queensland.',

  picks: {
    eyebrow: 'Course picks for Ipswich',
    h2: 'Working with AI agents, from Ipswich',
    intro: 'All four lead to the bridge register project below. The free trial chooses between them, and nobody asks for card details.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Building small Python and web projects with AI help, checking every result from week one.' },
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 17', note: 'Handing real tasks to coding agents, using tools whose terms allow the learner\'s age, and reviewing the output line by line.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Loading council data, finding blanks in disguise and summarising it honestly.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults and professionals', note: 'Agents for real work, with the data checks that stop a quick answer becoming a costly one.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ipswich in the Census',
      h2: 'A fast-growing city of 229,208 west of Brisbane',
      intro: 'The 2021 Census for the City of Ipswich council area, compared with Queensland and Australia.',
      body: [
        { kind: 'p', text: 'Ipswich recorded 229,208 residents and a median age of 33. They made up 60,293 families in 87,287 private dwellings, with 2.8 people in the average household.' },
        { kind: 'table', caption: 'Ipswich next to Queensland and Australia (2021 Census shares)', head: ['Indicator', 'Ipswich', 'Queensland', 'Australia'], rows: [
          ['Separate houses (69,218 dwellings)', '88.7%', '74.8%', '72.3%'],
          ['Flats and apartments (1,346 dwellings)', '1.7%', '12.5%', '14.2%'],
          ['Professionals (17,051 people)', '16.4%', '21.4%', '24.0%'],
          ['Bachelor degree or above (27,224 people)', '15.5%', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trades', p: 'Technicians and trades workers totalled 14,898, 14.3% of workers, a little above the Queensland share of 13.7%.' },
          { h3: 'Late teens', p: 'There were 15,085 residents aged 15 to 19, 6.6% of the population against 6.1% statewide.' },
          { h3: 'Early twenties', p: 'A further 15,512 residents were aged 20 to 24, 6.8% of the total.' }
        ] },
        { kind: 'p', text: 'By 30 June 2025 the ABS estimated 268,272 people in the council area. Census tables are adjusted slightly at random for privacy, so parts need not match totals; we reproduce each published figure and never present a sum of rows as a total.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What happens when an AI agent averages Ipswich\'s bridge register?',
      intro: 'The City of Ipswich road bridges layer, 190 records published on data.gov.au, summarised once by an agent taking every value literally and once by a learner who checked what the zeros mean.',
      body: [
        { kind: 'table', caption: 'Zeros in the bridge register and what they do to an average (our code, 10 October 2026)', head: ['Column', 'Records holding zero', 'Average with the zeros', 'Average without'], rows: [
          ['Height', '158 of 190', '0.523 m', '3.103 m'],
          ['Span length', '101 of 190', '6.112 m', '13.047 m'],
          ['Length', '22 of 190', '15.156 m', '17.141 m'],
          ['Width', '17 of 190', '2.106 m', '2.313 m']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. The agent\'s answer', p: 'Asked for typical bridge dimensions, an agent that averages each column as it stands reports a height of half a metre and spans of six metres. Nothing errors and the numbers are formatted beautifully.' },
          { h3: '2. What the zeros are', p: 'No bridge has zero height. A zero here most likely marks a value that was never entered. Treating it as a measurement drags the height average down to a sixth of the real figure.' },
          { h3: '3. Other disguises', p: 'Two records give their council division as -9999, an old programmer\'s way of saying unknown, and six list their construction material as a single full stop.' }
        ] },
        { kind: 'callout', h3: 'A cross-check that exposes the gaps', p: 'Each record also states a number of spans and a span length. Where all three are filled in, multiplying the first two should give the bridge length. It does, within half a metre, for 73 records and does not for 11, while 99 records list zero spans. A learner who writes this check learns more about the register in a minute than an agent learns by averaging it, and finds exactly where the data cannot be taken at face value.' },
        { kind: 'p', text: 'Of the 190 records, 186 are pedestrian bridges and 4 are listed simply as bridges; 129 are timber, and construction years run from 1940 to 2023, with 8 left blank. All counts and averages are our own, computed from the council\'s open data. We make no claim about the condition of any bridge.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Checking an agent\'s data work',
      h2: 'Habits that catch a blank pretending to be a number',
      intro: 'Learned on Ipswich\'s bridges, then used on sales exports, sensor feeds and any spreadsheet an agent is asked to summarise.',
      body: [
        { kind: 'table', caption: 'What each habit found in the Ipswich register', head: ['Habit', 'In code', 'Found'], rows: [
          ['Count suspicious values per column', 'Zeros, -9999 and lone punctuation', '158 zero heights, 2 divisions of -9999, 6 full stops'],
          ['Ask whether zero is possible', 'A bridge cannot be zero metres high', 'The height zeros are missing values'],
          ['Cross-check related columns', 'Spans times span length against length', '73 agree, 11 disagree'],
          ['Report what was excluded', 'State the count left out of each average', 'Height from 32 records only']
        ] },
        { kind: 'p', text: 'The fix is not a cleverer prompt. It is telling the agent, in writing, which values mean unknown, and then checking that its summary says how many records it actually used. An average that does not state its count is not finished.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Have an agent summarise the register, then find the zeros yourself and explain why its height answer is wrong.' },
          { h3: 'University students', p: 'Missing-data conventions, NaN handling in pandas and writing validation rules an agent must pass.' },
          { h3: 'Adults at work', p: 'Before an agent\'s summary goes into a report, ask what it did with blanks, zeros and codes like -9999.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not connected with the City of Ipswich, the ABS or the Queensland Government. The bridge register and statistics belong to them; the summaries and checks are our own.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Ipswich',
      h2: 'Queensland time and the end of the school year',
      intro: 'What shapes the hours an Ipswich learner can take a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'No daylight saving', p: 'Ipswich runs on Queensland time, UTC plus 10, every day of the year.' },
          { h3: 'India time', p: 'India time sits four and a half hours behind Ipswich, all year round.' },
          { h3: 'When the south changes', p: 'From October to April, New South Wales and Victoria are an hour ahead of Ipswich; lesson times here do not move.' }
        ] },
        { kind: 'spec', title: 'The rest of the 2026 school year', p: 'Queensland\'s education department gives Term 4 as ten weeks, Tuesday 6 October to Friday 11 December 2026, followed by 46 days of summer holidays ending on Tuesday 26 January 2027.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first prompt to agents trusted with data',
    intro: 'Bands are approximate; the free lesson finds the real level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Prompt and check', p: 'Asking an AI for small programs and testing whether each answer is true.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Agents on real data', p: 'Directing coding agents on open datasets and auditing their summaries.', courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Validation and pipelines', p: 'Data validation rules, tests and agent workflows that fail loudly.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'data-science-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Delegating analysis to agents while keeping control of what the numbers mean.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If the agent does the arithmetic, what is left for the learner?',
    intro: 'The part that decides whether the arithmetic means anything.',
    p1: 'An agent will happily average 190 bridge heights and report 0.523 metres. It will not stop to ask whether a zero-metre bridge exists unless someone tells it to ask. That judgement is the skill.',
    p2: 'Our Ipswich learners use agents for speed, then audit the data themselves: counting zeros, spotting codes like -9999 and cross-checking columns. They write their findings into the next prompt, so the agent\'s second answer is one they can defend.',
    closer: 'An Ipswich learner who has caught a sixfold error hiding behind a zero will treat every agent summary as a draft, a habit that matters more with each new tool after 2026.',
    blogAnchor: 'what vibe coding gets right and wrong'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Every Ipswich suburb, one live class',
    intro: 'Online lessons reach every Ipswich suburb without a drive into Brisbane.',
    cells: [
      { h3: 'On Queensland time', p: 'Lessons are booked in Ipswich time, which never shifts for daylight saving.' },
      { h3: 'Queensland year levels', p: 'Teachers know the Queensland curriculum years, senior QCE students included, and teach in English.' },
      { h3: 'Build something first', p: 'The free session is hands-on work with a teacher and an AI tool. You then get a suggested course and time, and we never take payment details.' },
      { h3: 'Groups at one level', p: 'Fifteen to twenty learners at the same stage, drawn from many places so every level has a workable slot.' },
      { h3: 'Twice every week', p: 'About eight sessions a month, with breaks for holidays and exams planned early.' },
      { h3: 'Agents with age limits respected', p: 'Younger learners only use AI tools whose terms allow their age, and teachers choose the tools accordingly.' }
    ],
    spec: { title: 'One clock for everyone', p: 'Every time we send is in Queensland time, so there is nothing to convert when southern states change their clocks.' }
  },

  fees: {
    h2: 'Fees for vibe coding and AI agents classes in Ipswich',
    intro: 'Three choices, in full.',
    first: 'A free session that ends with our recommended level, course and time.',
    group: 'About eight group sessions a month, with fifteen to twenty learners sharing your level.',
    private: 'About eight private sessions a month with one teacher.',
    closer: 'Ipswich families pay the same US dollar fee as families in any other part of Australia. Nothing is charged until the trial confirms a course and slot, and the pricing page covers breaks, missed sessions and moving between formats.'
  },

  reviewsH2: 'What our learners have written on Google',

  book: {
    h2: 'Tell us about the learner and we will set the first task',
    intro: 'The trial exercise is picked ahead: a prompt-and-check game for a Year 8 beginner, the bridge register audit for a Year 11 student, or an agent validation workflow for an adult.',
    success: 'Thank you. We will be in touch soon about a vibe coding and AI agents class in Ipswich.'
  },

  faq: {
    h2: 'Ipswich vibe coding and AI agents questions',
    intro: 'Questions Ipswich parents and adult learners raise before starting.',
    items: [
      { q: 'How many people live in Ipswich?', a: 'The 2021 Census counted 229,208 people in the City of Ipswich council area. The ABS estimate at 30 June 2025 is 268,272.' },
      { q: 'What is a sentinel value in data?', a: 'A sentinel value is a stand-in such as 0, -1 or -9999 used to mean that a value is missing or unknown. If software treats it as a real number, averages and totals are quietly distorted.' },
      { q: 'What is the Ipswich bridge register project?', a: 'Learners load the City of Ipswich road bridges dataset from data.gov.au, ask an AI agent to summarise it, then find the zeros and codes it treated as measurements and compare its averages with corrected ones.' },
      { q: 'What is vibe coding?', a: 'Vibe coding means building software by describing what you want to an AI tool and steering its output, rather than typing every line. Our classes teach it alongside the checking that makes the result reliable.' },
      { q: 'Which AI tools can teenagers use?', a: 'Only tools whose terms allow the learner\'s age. Teachers choose suitable tools for under-18s, and some agent tools are used only with adult learners.' },
      { q: 'What times suit Ipswich learners?', a: 'After school, in the evening or at weekends, agreed during the trial and written in Queensland time. India time is four and a half hours behind Ipswich.' },
      { q: 'Do you teach primary school children?', a: 'Yes, from age 6 with visual coding tools, though the agent project here is meant for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Ipswich?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do vibe coding and AI agents classes in Ipswich cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'More in Queensland',
    h2: 'Other south east Queensland pages',
    html: 'Next door is <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">a Brisbane coding classes page</a>, with <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding classes for kids in Brisbane</a> for younger learners. Up the range there is <a class="cg-inline-link" href="/best-coding-classes-in-toowoomba">a Toowoomba page</a>, and the statewide guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ipswich and Queensland',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/best-coding-classes-in-toowoomba', label: 'Toowoomba' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-ipsq .cg-hero-grid { align-items: center; gap: clamp(1.05rem, 3vw, 2.45rem); }
.cg-root.cg-ipsq .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-ipsq .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-ipsq .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-ipsq .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.013em; }
.cg-root.cg-ipsq .cg-grid-3 { gap: clamp(0.9rem, 2.1vw, 1.65rem); }
.cg-root.cg-ipsq .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-ipsq .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ipsq .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-ipsq .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Ipswich LGA, ABS Census 2021 QuickStats, area code LGA33960, with Queensland and Australia (read 10 October 2026): 229,208 people; median age 33; 60,293 families; 87,287 private dwellings; 2.8 people per household; separate house 69,218 (88.7 percent; Qld 74.8; Australia 72.3); flat or apartment 1,346 (1.7 percent; Qld 12.5; Australia 14.2); Professionals 17,051 (16.4 percent; Qld 21.4; Australia 24.0); Technicians and Trades Workers 14,898 (14.3 percent; Qld 13.7; Australia 12.9); Bachelor Degree level and above 27,224 (15.5 percent; Qld 21.9; Australia 26.3); aged 15 to 19: 15,085 (6.6 percent; Qld 6.1); aged 20 to 24: 15,512 (6.8 percent; Qld 6.3). ABS ERP Ipswich LGA (33960) 30 June 2025: 268,272. Queensland Department of Education: 2026 Term 4 Tuesday 6 October to Friday 11 December (10 weeks); holidays Saturday 12 December to Tuesday 26 January 2027 (46 days). IANA tz Australia/Brisbane UTC+10, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Zero used as an unknown placeholder (sentinel values) skewing an agent\'s averages. City of Ipswich, Ipswich City Road Bridges (data.gov.au dataset ipswich-city-road-bridges, CC BY 3.0 AU), WFS GeoJSON read 10 October 2026: 190 records; TYPE Pedestrian Bridge 186, Bridge 4. BRIDGE_HEI zero 158, mean all 0.523 m, non-zero n 32 mean 3.103 m median 1.60. SPAN_LENGT zero 101, mean all 6.112, non-zero n 89 mean 13.047. BRIDGE_LEN zero 22, mean all 15.156, non-zero 17.141. BRIDGE_WID zero 17, mean all 2.106, non-zero 2.313. SPANS zero 99. SPANS x SPAN_LENGT equals BRIDGE_LEN for 73 records, differs for 11. DIVISION -9999 for 2 records (others 1 to 4). TYPE_CONST "." for 6; timber 129. Construction year blank 8, range 1940 to 2023.',
    requiredMentions: [
      '229,208',
      '60,293',
      '87,287',
      '268,272',
      '0.523 metres',
      '3.103 metres',
      '158 of the 190',
      '-9999',
      'Every Ipswich suburb, one live class'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Ipswich LGA (LGA33960): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA33960' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Ipswich LGA 33960, total persons, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.33960.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'City of Ipswich, Ipswich City Road Bridges, data.gov.au (CC BY 3.0 AU).', url: 'https://data.gov.au/data/dataset/ipswich-city-road-bridges' },
      { claim: 'Queensland Department of Education, school holidays and term dates (2026).', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' }
    ],
    rejectedClaims: [
      'The condition, safety or load rating of any Ipswich bridge: not part of the data and not discussed.',
      'What the council intends a zero height to mean: no data dictionary was found, so zeros are described as most likely unrecorded, not as a confirmed convention.',
      'Names of individual bridges: several records are unnamed and one name contains a spelling error, so none are quoted.',
      'Why the register titled road bridges holds mostly pedestrian bridges: no explanation was found, so only the counts are given.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the City of Ipswich, the ABS or the Queensland Government.'
    ]
  }
};
