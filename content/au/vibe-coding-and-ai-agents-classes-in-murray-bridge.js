'use strict';
// Murray Bridge (cg- regional city page, Australia cluster Phase 7, row 190). Shaped page: vibe coding and AI
// agents for teenagers and adults. Spine: when an orchestrating agent splits a job between sub-agents, which of
// their partial answers can be merged? Data: ABS Data API, dataflow ABS_ANNUAL_ERP_ASGS2021 (1.2.0), estimated
// resident population for every South Australian SA2, 2015 and 2025, read 10 October 2026. Our code (scratchpad
// au/r7/mbr.py): 166 SA2s in SA4s 401 to 407 with at least 100 residents in 2015 (8 left out); each SA4 plays one
// sub-agent and reports count, sums, mean and median of ten-year growth. Merged: sums exact (1,700,549 to 1,902,487
// over the kept areas, our sum; ABS publishes South Australia 2025 as 1,902,665); count-weighted mean of means
// 10.24 equals the true mean 10.24; plain mean of means 9.28; median of medians 7.54 against the true median 8.94;
// merged 1-point histograms locate the true median in the 8 to 9 percent bin. Murray Bridge SA2 (407031165): 17,963
// to 19,938, +10.99 percent, 65th of 166; Murray Bridge Surrounds +9.31 percent; SA4 407 median 5.22 percent.
// Lesson family: map-reduce with sub-agents, mergeable vs non-mergeable aggregates (medians of medians); screened
// 0 location-page hits and 0 claims on 10 October 2026 (distinct from Oman's weighted vs unweighted averages,
// which is about one table, and from Shalim's silent fallback); claimed by AU-R7.
// Place facts read raw 10 October 2026: ABS Census 2021 QuickStats, Murray Bridge SUA (4003): 18,243 people;
// median age 42; 4,708 families; 8,412 private dwellings; 2.3 per household; separate house 6,263 (87.3 percent; SA
// 78.0); Labourers 1,525 (21.6; SA 10.5; Australia 9.0); Professionals 688 (9.7; SA 21.5); car as driver 5,032 (71.2;
// SA 63.9). ABS SUA area 97.5456 square kilometres. ABS SAL polygons at least 80 percent inside the SUA: Murray
// Bridge, Murray Bridge East, Murray Bridge South, Northern Heights, Swanport, Mobilong, Riverglades, White Hill,
// Long Flat, Rocky Gully. IANA tz Australia/Adelaide, rule AS. SA education pages and data.sa.gov.au return 403 to
// automated reads, not circumvented. Excluded: income, rent, ancestry, religion, health, Indigenous status.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MURRAY BRIDGE', label: 'Murray Bridge', blurb: 'Vibe coding and AI agents for Murray Bridge, and an orchestrator that learns which sub-agent answers can safely be combined.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-murray-bridge',
  code: 'mbri',
  accent: '#32189E',
  accentRationale: 'Murray Bridge: a deep river-dusk blue (HSV saturation 0.85, value 0.62, hue 251), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with contrast above 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Murray Bridge',
    eyebrow: 'Murray Bridge, South Australia, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' }],
  nav: [
    { label: 'South Australia', href: '/coding-and-ai-classes-in-south-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Murray Bridge, South Australia',
  title: 'Vibe Coding and AI Agents Classes in Murray Bridge | Live',
  description: 'Live online vibe coding and AI agents classes for Murray Bridge teens and adults: build agent teams in Python and make their answers add up. First lesson free.',
  ogDescription: 'Murray Bridge AI agents classes, with a project where sub-agents summarise South Australian population data and the orchestrator must merge their answers correctly.',
  twitterDescription: 'Vibe coding and AI agents classes for Murray Bridge, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Murray Bridge Learners',
    description: 'Vibe coding, multi-agent design and Python, taught live online to teenagers and adults in Murray Bridge and the Murraylands of South Australia.'
  },

  h1: 'Vibe coding and AI agents classes in Murray Bridge',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Murray Bridge?',
  capsule: 'Classes where a Murray Bridge teenager or adult builds AI agents in Python, including teams of agents that share a job, and learns to check that their combined answer is right. The 2021 Census counted 18,243 people in the Murray Bridge urban area. Lessons are live online with a teacher, and the first one is free.',
  lead: 'Ask an AI system how fast South Australian neighbourhoods grew over the last ten years and a well-built one will split the work. An orchestrating agent hands each of the state\'s seven big statistical regions to a sub-agent, each sub-agent summarises its own area, and the orchestrator combines the replies. We built exactly that on the bureau\'s population estimates for 166 areas, Murray Bridge among them. Totals combined perfectly. Averages combined correctly only when each reply also carried its count. Medians did not combine at all: the median of the seven regional medians came out at 7.54 percent growth when the true median of all 166 areas is 8.94. Knowing which answers can be merged is a core skill for anyone building agent teams.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Murray Bridge.',

  picks: {
    eyebrow: 'Course picks for Murray Bridge',
    h2: 'Courses for building agent teams that add up',
    intro: 'Each course reaches projects like the sub-agent experiment. The free trial recommends one, and no card is requested.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Describing programs to an AI, then reading, testing and fixing what it writes, with Python underneath.' },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Using AI tools well, from prompting to small automated projects, with every result checked.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Large language models, retrieval and agents, built and evaluated from first principles.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python automation and AI tools for work, with checks so automated reports stay trustworthy.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Murray Bridge at the Census',
      h2: 'A river city in the Murraylands',
      intro: 'Figures for the Murray Bridge Significant Urban Area from the 2021 Census.',
      body: [
        { kind: 'table', caption: 'Murray Bridge urban area: core 2021 counts', head: ['Measure', 'Murray Bridge'], rows: [
          ['Residents', '18,243'],
          ['Median age', '42'],
          ['Families', '4,708'],
          ['Private dwellings', '8,412'],
          ['Average people per household', '2.3'],
          ['Area of the urban area', 'about 97.5 square kilometres']
        ] },
        { kind: 'table', mt: true, caption: 'How Murray Bridge compares with South Australia', head: ['Measure', 'Murray Bridge', 'SA', 'Australia'], rows: [
          ['Separate houses as a share of occupied homes', '6,263 (87.3%)', '78.0%', '72.3%'],
          ['Labourers among employed residents', '1,525 (21.6%)', '10.5%', '9.0%'],
          ['Professionals among employed residents', '688 (9.7%)', '21.5%', '24.0%'],
          ['Commuters who drove themselves', '5,032 (71.2%)', '63.9%', '52.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Separate houses', p: 'Close to nine in ten occupied homes in the urban area are separate houses, well above the state share.' },
          { h3: 'Hands-on work', p: 'Labourers make up 21.6% of employed residents, about double the South Australian figure.' },
          { h3: 'Localities inside', p: 'Bureau localities lying inside the urban area include Murray Bridge, Murray Bridge East, Murray Bridge South, Northern Heights, Swanport, Mobilong, Riverglades, White Hill, Long Flat and Rocky Gully.' }
        ] },
        { kind: 'p', text: 'Census counts carry small random adjustments for privacy, so rows may not add to totals. We print the bureau\'s numbers unchanged.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which sub-agent answers can be merged?',
      intro: 'Seven sub-agents, one per South Australian region, each summarise ten years of growth for their own areas. The orchestrator then tries to combine them.',
      body: [
        { kind: 'table', caption: 'What each sub-agent reported: growth in estimated resident population, 2015 to 2025, by statistical area level 4 (our calculation)', head: ['Region', 'Areas', 'Median growth', 'Mean growth'], rows: [
          ['Adelaide - Central and Hills', '24', '9.47%', '13.45%'],
          ['Adelaide - North', '32', '10.67%', '15.24%'],
          ['Adelaide - South', '33', '7.54%', '10.33%'],
          ['Adelaide - West', '17', '12.89%', '13.47%'],
          ['Barossa - Yorke - Mid North', '19', '7.00%', '7.89%'],
          ['South Australia - Outback', '13', '0.03%', '-2.77%'],
          ['South Australia - South East (includes Murray Bridge)', '28', '5.22%', '7.36%']
        ] },
        { kind: 'table', mt: true, caption: 'Merging the seven replies, against the answer computed on all 166 areas at once', head: ['Statistic', 'Merged from replies', 'True value', 'Safe to merge?'], rows: [
          ['Total residents of the kept areas, 2025', '1,902,487', '1,902,487', 'Yes, sums add'],
          ['Mean growth, plain average of the seven means', '9.28%', '10.24%', 'No'],
          ['Mean growth, means weighted by each area count', '10.24%', '10.24%', 'Yes, with counts'],
          ['Median growth, median of the seven medians', '7.54%', '8.94%', 'No'],
          ['Median growth, from merged 1-point histograms', 'between 8% and 9%', '8.94%', 'Yes, to the bin width']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Mergeable', p: 'Counts, sums, minimums and maximums combine exactly, because the whole is built from the parts by the same operation.' },
          { h3: 'Mergeable with care', p: 'A mean combines correctly only if each reply also sends how many areas it covered, so the orchestrator can take a count-weighted average.' },
          { h3: 'Not mergeable', p: 'A median needs the whole distribution. Sub-agents must send a histogram or the raw values, never just their own median.' }
        ] },
        { kind: 'callout', h3: 'Where Murray Bridge sits', p: 'The statistical area named Murray Bridge grew from 17,963 to 19,938 estimated residents between 2015 and 2025, a rise of 10.99%. That ranks 65th of the 166 areas, and ninth of 28 in its own South East region, whose median was 5.22%.' },
        { kind: 'p', text: 'We kept the 166 statistical areas in South Australia\'s seven regions that had at least 100 estimated residents in 2015, and left out eight. The 1,902,487 total is our sum over those 166 areas, not an official figure; the bureau publishes South Australia\'s own 2025 estimate as 1,902,665, and the gap is the areas we left out. Growth rates, medians and the histogram are our calculations.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Designing agent teams',
      h2: 'The contract between an orchestrator and its sub-agents',
      intro: 'Most multi-agent bugs are not in the model. They are in what each agent is asked to hand back.',
      body: [
        { kind: 'p', text: 'In this project the fix is a reply format. Instead of "send me your median", the orchestrator asks every sub-agent for its count, its sum and a histogram of growth in one-point bins. From those three things it can rebuild the exact total, the exact mean and the median to within a bin, whatever the split. Learners write the format as a small Python data class, test it on two splits of the same data, and confirm the merged answers never change when the regions are cut differently.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Split a list between two helper functions and find out by experiment which summaries survive being combined.' },
          { h3: 'University students', p: 'Implement map and reduce steps for an agent team, and prove which aggregates are associative and which are not.' },
          { h3: 'Adults', p: 'Design reply formats for AI assistants that report on separate teams or sites, so the overall dashboard stays correct.' }
        ] },
        { kind: 'p', text: 'The statistics bureau, the state government and the Rural City of Murray Bridge have no link with Modern Age Coders. The estimates are theirs; each split, merge and ranking above was worked out by us.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Murray Bridge planner',
      h2: 'Lesson times from the Murraylands',
      intro: 'South Australian time sits half an hour behind Melbourne and Sydney, and the gap to India changes with the season.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'South Australian time', p: 'Murray Bridge runs on the state\'s own time, nine and a half hours ahead of UTC through the cooler months.' },
          { h3: 'Summer time', p: 'Daylight saving begins on 4 October 2026 and finishes on 4 April 2027, adding an hour for the warmer half of the year.' },
          { h3: 'The gap to India', p: 'Our teachers in India are four hours behind Murray Bridge in winter and five in summer, so a 4pm lesson here is midday or 11am for them.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From one helper function to a team of agents',
    intro: 'These bands are a starting point; the free lesson finds the right level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Splitting work', p: 'Python functions that each handle part of a list, and simple ways to combine their results.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Agents with tools', p: 'Building agents that call tools, check their results and hand back structured replies.', courses: ['teens-ai-tools-mastery-course', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Agent systems', p: 'Orchestration, evaluation and the maths of combining partial results correctly.', courses: ['complete-generative-ai-masterclass-college', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Automation at work', p: 'AI assistants and scripts that gather numbers from many places without corrupting the total.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If agents can split up a job, why should a Murray Bridge learner check how?',
    intro: 'Because a team of agents can give a confident, wrong combined answer while every individual agent was right.',
    p1: 'Each of the seven sub-agents in the project reported its own median correctly. The error appeared only when the orchestrator took the median of those medians, a step that looks reasonable and is quietly wrong. Multi-agent systems are now common in research tools and business assistants, and this kind of merge error is easy to miss because nothing crashes and every number on the screen is plausible.',
    p2: 'Our Murray Bridge learners run the experiment themselves, see the 7.54 against 8.94 gap, and then redesign the replies so the merge is exact. That habit, asking what each agent hands back and whether it can be combined, carries over to any system where AI does part of the work.',
    closer: 'Building a team of agents takes an afternoon in 2026; making sure their answers add up is the part that still needs a person who understands the code.',
    blogAnchor: 'why learning to code still pays off for adults too'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Murray Bridge lessons run',
    intro: 'Every class is a live video lesson, so the drive to Adelaide never comes into it.',
    cells: [
      { h3: 'At your desk', p: 'Learners join from home with a computer, a headset and a dependable connection.' },
      { h3: 'South Australian levels', p: 'Teachers plan around South Australian year levels, and all teaching is in English.' },
      { h3: 'Trial lesson', p: 'The free first lesson is a full class that ends with a recommended course and a weekly slot.' },
      { h3: 'Groups by level', p: 'Each group has fifteen to twenty learners at the same stage, from the Murraylands and beyond.' },
      { h3: 'Two lessons a week', p: 'Group learners meet twice weekly on set days, about eight lessons a month.' },
      { h3: 'Where teachers are', p: 'Our teaching team is based in India, and every booking is written in Murray Bridge time.' }
    ],
    spec: { title: 'Murray Bridge time', p: 'We set every lesson in Murray Bridge time and handle South Australia\'s clock changes on our side.' }
  },

  fees: {
    h2: 'Murray Bridge class fees',
    intro: 'Pricing is short and identical across Australia.',
    first: 'The first lesson costs nothing and ends with a suggested level, course and weekly time.',
    group: 'A month of group classes, around eight, with fifteen to twenty learners matched by level.',
    private: 'About eight private lessons a month with one teacher.',
    closer: 'We bill in US dollars outside India, and Murray Bridge pays the same as any Australian town. Charges begin only once the trial has fixed what and when you study, and the pricing page explains holidays, absences and moving between group and private.'
  },

  reviewsH2: 'Reviews from families on Google',

  book: {
    h2: 'Book a free AI agents lesson in Murray Bridge',
    intro: 'Share the learner\'s age and interests. A beginner might vibe code a first game; a teenager or adult might build the sub-agent team and test its merges.',
    success: 'Thank you. We will contact you shortly about a Murray Bridge lesson.'
  },

  faq: {
    h2: 'Murray Bridge AI agents questions',
    intro: 'Quick answers for Murray Bridge families and adult learners.',
    items: [
      { q: 'What is an orchestrator agent?', a: 'An orchestrator is an AI agent that splits a task into parts, hands each part to a sub-agent, and combines the replies into one answer.' },
      { q: 'Why is the median of medians wrong?', a: 'A median depends on every value in the full list. Each regional median throws most of that information away, so the median of seven medians gave 7.54% instead of the true 8.94%.' },
      { q: 'How many people live in Murray Bridge?', a: 'The 2021 Census counted 18,243 people in the Murray Bridge urban area, and their median age was 42.' },
      { q: 'How much did Murray Bridge grow?', a: 'The bureau\'s estimate for the statistical area named Murray Bridge rose from 17,963 in 2015 to 19,938 in 2025, an increase of 10.99% by our calculation.' },
      { q: 'What is vibe coding?', a: 'Vibe coding means describing a program in plain language and letting an AI write the code. We teach it alongside reading and testing that code, so learners stay in control.' },
      { q: 'When do Murray Bridge lessons run?', a: 'Weekday after-school times and Saturday mornings are popular, always quoted in Murray Bridge time.' },
      { q: 'Can younger children start?', a: 'Yes. Children from six begin with Scratch and simple games; the agent team project is for teenagers and adults.' },
      { q: 'Do you have a centre in Murray Bridge?', a: 'No. We run no premises in Australia and claim none. Every class is live online, learners need a computer and a reliable connection, and our listed phone number is in India.', boiler: true },
      { q: 'What do Murray Bridge classes cost?', a: 'Your first lesson is free. Then a group place costs USD 100 a month for two live lessons a week, roughly eight a month, with fifteen to twenty learners, or USD 150 a month one-to-one. Nothing is charged until the details are agreed.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, grouped by level and aims rather than age or suburb. If no group time works, one-to-one lessons are available.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'Further reading from South Australia',
    html: 'Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">South Australian state guide</a> gathers every page for the state. Senior students will want <a class="cg-inline-link" href="/sace-digital-technologies-help">SACE Digital Technologies help</a>, and anyone curious about the thinking behind agents can read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Murray Bridge and South Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' },
    { href: '/online-coding-and-python-classes-in-whyalla', label: 'Whyalla' },
    { href: '/sace-specialist-mathematics-tutoring', label: 'SACE Specialist Maths' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mbri .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.4rem); }
.cg-root.cg-mbri .cg-hero h1 { font-weight: 760; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-mbri .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 1px solid rgba(50, 24, 158, 0.25); padding: 0.85rem 1rem; }
.cg-root.cg-mbri .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-mbri .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.012em; }
.cg-root.cg-mbri .cg-grid-3 { gap: clamp(0.95rem, 2.3vw, 1.8rem); }
.cg-root.cg-mbri .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.004em; }
.cg-root.cg-mbri .cg-table td + td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mbri .cg-ladder-col { border-left: 2px solid rgba(50, 24, 158, 0.3); padding-left: 0.9rem; }
.cg-root.cg-mbri .cg-callout { border-top: 3px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'Murray Bridge, ABS Census 2021 QuickStats, Significant Urban Area 4003 (read 10 October 2026): 18,243 people; median age 42; 4,708 families; 8,412 private dwellings; average 2.3 people per household; separate house 6,263 (87.3 percent; SA 78.0; Australia 72.3); Labourers 1,525 (21.6 percent; SA 10.5; Australia 9.0); Professionals 688 (9.7 percent; SA 21.5; Australia 24.0); car as driver 5,032 (71.2 percent; SA 63.9; Australia 52.7). ABS ASGS 2021 SUA layer area 97.5456 square kilometres. ABS SAL 2021 polygons at least 80 percent inside the SUA (our overlay): Murray Bridge, Murray Bridge East, Murray Bridge South, Northern Heights, Swanport, Mobilong, Riverglades, White Hill, Long Flat (SA), Rocky Gully (SA). IANA tzdb australasia: Australia/Adelaide 9:30, rule AS. SA Department for Education pages returned 403 to automated reads, so no SA term dates are printed.',
    localProject: 'Map-reduce with sub-agents: mergeable vs non-mergeable aggregates. ABS Data API dataflow ABS_ANNUAL_ERP_ASGS2021 1.2.0, ERP by SA2, all codes beginning 4, years 2015 and 2025, read 10 October 2026; state total STE 4 2025 = 1,902,665. Our code (scratchpad au/r7/mbr.py): kept 166 SA2s in SA4s 401 to 407 with at least 100 residents in 2015 (8 excluded). Ten-year growth per SA2 = 100 x (2025 - 2015) / 2015. Per SA4 (n, median, mean): 401 24, 9.47, 13.45; 402 32, 10.67, 15.24; 403 33, 7.54, 10.33; 404 17, 12.89, 13.47; 405 19, 7.00, 7.89; 406 13, 0.03, -2.77; 407 28, 5.22, 7.36. True median 8.94, median of SA4 medians 7.54; true mean 10.24, plain mean of means 9.28, count-weighted mean of means 10.24; sum of kept SA2s 2015 1,700,549, 2025 1,902,487 (our sum, not an official total); merged 1-point histograms put the median in the 8 to 9 bin. SA2 407031165 Murray Bridge 17,963 to 19,938, +10.99 percent, rank 65 of 166 and 9 of 28 in SA4 407; SA2 407031166 Murray Bridge Surrounds 3,653 to 3,993, +9.31 percent.',
    requiredMentions: [
      '18,243',
      '4,708',
      '8,412',
      '1,525',
      '19,938',
      '17,963',
      'median of medians',
      'Rocky Gully',
      'count-weighted'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Murray Bridge Significant Urban Area (4003): people, median age, families, dwellings, dwelling structure, occupation, travel to work.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/4003' },
      { claim: 'ABS Data API, Estimated Resident Population by SA2 and above (ASGS Edition 3), dataflow ABS_ANNUAL_ERP_ASGS2021, all South Australian SA2s and the state total.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA2..A?startPeriod=2015' },
      { claim: 'ABS ASGS 2021 Significant Urban Area and Suburbs and Localities boundaries (geo.abs.gov.au map services).', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer/0' },
      { claim: 'IANA time zone database, australasia file: Australia/Adelaide and rule AS.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Presenting 1,902,487 as South Australia\'s population: it is our sum over 166 kept areas; the page quotes the bureau\'s own state figure separately.',
      'Any reason why particular regions grew or shrank: the page reports growth rates only.',
      'South Australian school term dates: the SA education pages returned 403 and were not circumvented.',
      'Comparing the Census urban-area count with the SA2 estimates as if they were the same measure.',
      'Income, rent, ancestry, religion, health and Indigenous status figures: excluded by the cluster rules.',
      'Any affiliation with the ABS, the South Australian Government or the Rural City of Murray Bridge.'
    ]
  }
};
