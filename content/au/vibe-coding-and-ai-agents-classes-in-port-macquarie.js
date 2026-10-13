'use strict';
// Port Macquarie (cg- city page, Australia cluster Phase 7, row 158). Shaped page: vibe coding and AI agents for
// teenagers and adults.
// Spine: an AI agent may only call a paged tool a few times; when can it answer correctly? Data: NSW Department
// of Education, "Master dataset: NSW government school locations and student enrolment numbers"
// (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted
// 2026-10-02. Rows with LGA "Port Macquarie-Hastings": 21 schools (Level_of_schooling Primary School 17,
// Secondary School 4). Question for the agent: which school had its first teacher earliest? Answer: Port
// Macquarie Public School, Date_1st_teacher 1852-01-01; next Wauchope Public School 1868-01-01, Huntingdon
// Public School 1868-07-01, Beechwood Public School 1869-08-01. Simulated tool (our design, scratchpad
// au/r3/pmq_budget.py): returns 5 schools per call in alphabetical order, so 5 calls cover all 21; Port
// Macquarie Public School is 15th alphabetically, on page 3. An agent that stops after k calls and answers with
// the earliest date seen: k = 1 answers Beechwood Public School (1869), k = 2 Huntingdon Public School (1868), k
// = 3 correct. If the tool returns schools in random order, success over 10,000 shuffles (seed 20261007): 23.7%,
// 47.3%, 71.6%, 95.7%, 100.0% for k = 1 to 5 (exact 23.8%, 47.6%, 71.4%, 95.2%, 100%). A tool that sorts by
// first-teacher date answers in 1 call. Lesson family: tool-call budgets and early stopping for agents (push the
// sort into the tool); screened free site-wide on 7 October 2026 ("tool-call budget", "call budget": 0 page hits;
// claimed by AU-R3).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Port Macquarie Significant Urban Area
// (1028): 50,193 people; median age 47 (NSW 39, Australia 38); 13,754 families; 23,562 private dwellings; 2.3
// people per household; separate house 13,782 (67.1%; NSW 65.6%; Australia 72.3%); semi-detached, row or terrace
// house, townhouse 3,606 (17.6%; NSW 11.7%; Australia 12.6%); flat or apartment 3,011 (14.7%); Professionals
// 4,997 (23.5%; NSW 25.8%); Bachelor Degree level and above 8,208 (19.5%; NSW 27.8%; Australia 26.3%); aged 15
// to 19 2,897 (5.8%); aged 10 to 14 3,050 (6.1%). NSW Department of Education, 2027 term dates, Eastern
// division: Term 1 Wednesday 3 February to Friday 9 April; Term 4 Tuesday 12 October to Monday 20 December. IANA
// tz: Australia/Sydney daylight saving 4 October 2026 to 4 April 2027.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, and
// the dataset's ICSEA, Indigenous and LBOTE columns.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'PORT MACQUARIE', label: 'Port Macquarie', blurb: 'Vibe coding and AI agents for Port Macquarie teens and adults, and an agent that must answer within a strict budget of tool calls.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-port-macquarie',
  code: 'pmq',
  accent: '#1C642A',
  accentRationale: 'Port Macquarie: a deep coastal-forest green (HSV saturation 0.72, value 0.39, hue 132), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 7.2:1 on white and 5.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Port Macquarie',
    eyebrow: 'Port Macquarie, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Port Macquarie, New South Wales',
  title: 'Vibe Coding and AI Agents Classes in Port Macquarie | Live',
  description: 'Live online vibe coding and AI agents classes for Port Macquarie teens and adults: build agents in Python and make them efficient and correct. First lesson free.',
  ogDescription: 'AI agents classes for Port Macquarie, with a project in which an agent on a budget of tool calls gives the wrong answer twice before it gets it right.',
  twitterDescription: 'Port Macquarie vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Port Macquarie Learners',
    description: 'Level-matched online classes in vibe coding, building AI agents that use tools wisely, and Python, for teenagers and adults across Port Macquarie and the Hastings, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Port Macquarie',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Port Macquarie?',
  capsule: 'Lessons in which a Port Macquarie teenager or adult builds AI agents in Python and learns to make them careful as well as clever, with a teacher checking every step. The 2021 Census counted 50,193 people in the Port Macquarie urban area, with a median age of 47. We teach live over video, one to one or in a small group at your level, and the first lesson is free.',
  lead: 'Give an AI agent a question, which public school in the Port Macquarie-Hastings council area had its first teacher earliest, and a tool that lists the 21 schools five at a time in alphabetical order. Each tool call costs time and money, so the agent has a budget. With one call it confidently answers Beechwood Public School, 1869. With two it answers Huntingdon Public School, 1868. Only with a third call does it reach Port Macquarie Public School, 1852. Our Port Macquarie project builds that agent in Python and shows the fix that needs a single call: ask the tool to sort.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Port Macquarie.',

  picks: {
    eyebrow: 'Course picks for Port Macquarie',
    h2: 'Courses for building careful AI agents',
    intro: 'Each leads naturally to the budget experiment. The free first lesson recommends one, and no card is requested.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Describe programs to an AI, then read, test and correct its code in Python and on the web.' },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 18', note: 'How today\'s AI tools work, where they go wrong, and how to use them with judgement.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Building complete applications with AI help, plus the algorithms that keep them efficient.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', band: 'Professionals, one to one', note: 'Designing workplace agents in Copilot Studio, taught one to one, with attention to cost and control.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Port Macquarie in the Census',
      h2: 'An older coastal city with more townhouses than most',
      intro: 'Figures for the Port Macquarie Significant Urban Area from the 2021 Census QuickStats, alongside New South Wales and Australia.',
      body: [
        { kind: 'table', caption: 'Port Macquarie urban area, 2021 Census QuickStats', head: ['Total', 'Port Macquarie'], rows: [
          ['Residents', '50,193'],
          ['Families', '13,754'],
          ['Private dwellings', '23,562'],
          ['Average household size', '2.3 people']
        ] },
        { kind: 'table', mt: true, caption: 'Shares compared with New South Wales and Australia', head: ['Measure', 'Port Macquarie', 'NSW', 'Australia'], rows: [
          ['Median age', '47', '39', '38'],
          ['Semi-detached, terrace or townhouse homes', '17.6% (3,606)', '11.7%', '12.6%'],
          ['Separate houses', '67.1% (13,782)', '65.6%', '72.3%'],
          ['Bachelor degree or above, residents 15 and over', '19.5% (8,208)', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Eight years older', p: 'The median Port Macquarie resident was 47, eight years older than the median for New South Wales.' },
          { h3: 'Townhouse country', p: '3,606 occupied homes, 17.6%, were semi-detached, terrace or townhouses, a much higher share than the state\'s 11.7%.' },
          { h3: 'Teenagers', p: 'The Census counted 3,050 residents aged 10 to 14 and 2,897 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'Census numbers and privacy: small random changes are applied to every cell by the bureau, so a table\'s rows may not add exactly to its total. We print totals and percentages as published and never add rows to produce a total.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many tool calls does an agent need before it can be right?',
      intro: 'We gave a simulated agent the NSW Department of Education\'s list of the 21 public schools in the Port Macquarie-Hastings council area, served through a tool that returns five schools per call, and asked for the school with the earliest first-teacher date.',
      body: [
        { kind: 'table', caption: 'Answers from an agent that stops after a fixed number of calls, alphabetical paging (our calculation)', head: ['Calls allowed', 'Schools seen', 'Agent\'s answer', 'Correct?'], rows: [
          ['1', '5', 'Beechwood Public School, 1869', 'No'],
          ['2', '10', 'Huntingdon Public School, 1868', 'No'],
          ['3', '15', 'Port Macquarie Public School, 1852', 'Yes'],
          ['1, with the tool sorting by date', '5', 'Port Macquarie Public School, 1852', 'Yes']
        ] },
        { kind: 'table', mt: true, caption: 'If the tool returned schools in random order: share of correct answers over 10,000 trials (our calculation)', head: ['Calls allowed', 'Correct, simulated', 'Correct, exact'], rows: [
          ['1', '23.7%', '23.8%'],
          ['2', '47.3%', '47.6%'],
          ['3', '71.6%', '71.4%'],
          ['4', '95.7%', '95.2%'],
          ['5', '100.0%', '100%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the tool', p: 'A Python function returns five schools per call, sorted by name, with a page number. The agent loop calls it, keeps the earliest date seen so far, and stops when the budget runs out.' },
          { h3: '2. Run it on a budget', p: 'With one or two calls the agent answers wrongly but confidently. The true answer, the 15th school alphabetically, only appears on the third page.' },
          { h3: '3. Change the tool, not the agent', p: 'Add a sort option to the tool and the oldest school comes first. One call is enough, and no amount of cleverness in the agent could have matched that.' }
        ] },
        { kind: 'callout', h3: 'A minimum needs every item, unless the tool helps', p: 'To be sure which item is smallest, an agent has to look at all of them; there is no shortcut over unsorted pages. Random order gives exactly the odds in the table, about 4.8% per school seen. The real lesson is about design: when an agent is expensive to run, the biggest gains often come from giving it better tools, such as sorting and filtering, rather than more calls.' },
        { kind: 'p', text: 'The agent and its tool are our simulation, built on the department\'s open file; no real service is being described. Dates are first-teacher dates as recorded, and the project draws no conclusion about any school. The second-oldest date, Wauchope Public School in 1868, is sixteen years after Port Macquarie\'s 1852.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Agents that spend wisely',
      h2: 'Budget questions every agent designer should ask',
      intro: 'The school question is small, but the same trade-offs shape agents that book, search and plan in the real world.',
      body: [
        { kind: 'table', caption: 'Design choices for agents with limited tool calls', head: ['Question', 'In the Port Macquarie project', 'General lesson'], rows: [
          ['Can the answer be known early?', 'Not for an earliest date over unsorted pages', 'Some questions need everything'],
          ['Can the tool do more work?', 'A sort option makes one call enough', 'Push sorting and filtering to the source'],
          ['What does an early stop cost?', 'A confident but wrong school', 'Say how sure you are'],
          ['How should the budget be set?', 'Five calls guarantee the answer here', 'Match the budget to the question']
        ] },
        { kind: 'p', text: 'Vibe coding an agent like this takes minutes, and an assistant will usually suggest a budget of a few calls to keep it cheap. Nothing in the code warns that two calls produce the wrong school. Learners who run the experiment learn to ask, of every agent they build, what the budget is protecting and what it might be hiding.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the paged tool and the agent loop in Python, then vary the budget and the paging order and record what happens.' },
          { h3: 'University students', p: 'Search under cost constraints, probability of success and the design of tool interfaces for language-model agents.' },
          { h3: 'Adults', p: 'Planning workplace agents that stay within cost limits without quietly returning wrong answers.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of the NSW Department of Education, Port Macquarie-Hastings Council and the Australian Bureau of Statistics. The department\'s file supplies the schools; the tool, the agent and every result are our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Port Macquarie',
      h2: 'A school from 1852 and two campuses of one college',
      intro: 'More from the same open file and the NSW calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The oldest date', p: 'Port Macquarie Public School records a first teacher on 1 January 1852, the earliest date among the 21 schools in the council area.' },
          { h3: 'A college on two sites', p: 'Hastings Secondary College appears in the file as two campuses, Port Macquarie and Westport, each listed as its own school.' },
          { h3: 'Terms in 2027', p: 'NSW Eastern division students begin on Wednesday 3 February 2027 and finish Term 4 on Monday 20 December.' }
        ] },
        { kind: 'spec', title: 'Why paging is a good lesson in itself', p: 'Almost every real data service, from council portals to search engines, returns results a page at a time. An agent that forgets to ask for the next page, or stops too soon, gives answers that look complete but are not, and that mistake is far easier to understand after seeing it happen with 21 schools.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From prompting to agents that use tools well',
    intro: 'Ages are suggestions; the free lesson places each learner.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Code you can read', p: 'Vibe coding small Python programs, then reading and changing every line the AI produced.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Agents and tools', p: 'Agents that call functions, keep track of what they have seen and respect a budget.', courses: ['teens-ai-tools-mastery-course', 'ai-ml-masterclass-teens'] },
      { band: 'University', h3: 'Designing systems', p: 'Tool design, cost and correctness in AI-assisted applications.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Coding agents and workplace agents run with clear limits and honest checks.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Port Macquarie learner think about an agent\'s budget?',
    intro: 'Because the cheapest agent is often the one that answers wrongly with total confidence.',
    p1: 'AI agents are usually given limits on how many times they may call a tool, for good reasons of speed and cost. The danger is that an agent hitting its limit rarely says so. It answers with what it has, and in our project that means naming Beechwood Public School as the oldest when Port Macquarie Public School is sixteen years older. Nothing in the reply hints that the search was cut short.',
    p2: 'We teach learners to design around that risk: give agents tools that sort and filter, make them report how much they have checked, and set budgets from the question rather than habit. Those are the habits that turn a clever demonstration into an agent someone can rely on.',
    closer: 'Agents are easy to build in 2026; a Port Macquarie learner who knows how a budget can quietly change an answer is the one whose agents tell the truth.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Port Macquarie, Wauchope or Laurieton, the same lesson',
    intro: 'The council area runs from the coast to the hinterland, and an online class brings every part of it into one room.',
    cells: [
      { h3: 'Coast and hinterland', p: 'A learner in Lake Cathie and one in Wauchope can build the same agent together, live, without travelling.' },
      { h3: 'NSW schooling', p: 'Lessons follow NSW stages and the state\'s four terms, and Year 11 and 12 students can connect agent projects to their computing subjects. Teaching is in English.' },
      { h3: 'A trial that teaches', p: 'The first lesson is a proper class, after which you receive a suggested level, course and time, and we take no card details.' },
      { h3: 'Groups that match', p: 'Fifteen to twenty learners at one level, from the Hastings and beyond, so every group has enough members.' },
      { h3: 'Twice a week', p: 'Regular slots twice weekly, close to eight lessons a month, with breaks for holidays and exams set in advance.' },
      { h3: 'Teachers in India', p: 'A 6pm Port Macquarie lesson in August starts at 1:30pm in India, and at 12:30pm after NSW daylight saving begins.' }
    ],
    spec: { title: 'Time is always quoted locally', p: 'NSW changes its clocks on Sunday 4 October 2026 and again on Sunday 4 April 2027, and India does not, so the gap moves by an hour. Lesson times are always booked in Port Macquarie time.' }
  },

  fees: {
    h2: 'Port Macquarie class fees',
    intro: 'Three figures, clearly set out.',
    first: 'A full free lesson, ending with a recommended level, course and time.',
    group: 'A month of lessons, usually eight, with fifteen to twenty learners at the same level.',
    private: 'About eight lessons a month on the same pattern, one to one with a teacher.',
    closer: 'Families everywhere except India pay in US dollars, so a household in Port Macquarie and one in Laurieton receive the same invoice and there is no local price. We bill only after the trial has set a course and time; the pricing page explains breaks, absences and changes of format.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a first Port Macquarie lesson',
    intro: 'Send an age and an interest. A Year 9 student might build a simple paged tool; an adult could go straight to the budget experiment.',
    success: 'Thank you. We will be in touch shortly about a Port Macquarie class.'
  },

  faq: {
    h2: 'Port Macquarie AI agents class questions',
    intro: 'What Port Macquarie families and learners usually ask first.',
    items: [
      { q: 'How many people live in the Port Macquarie urban area?', a: 'The 2021 Census counted 50,193 residents in the Port Macquarie Significant Urban Area, with a median age of 47.' },
      { q: 'What is a tool-call budget for an AI agent?', a: 'A limit on how many times an agent may use a tool, such as a search or a database query, while answering one request. It controls cost and speed, but an agent that runs out of calls may answer from incomplete information.' },
      { q: 'What does the Port Macquarie project show?', a: 'A simulated agent asked for the earliest-opened of the 21 public schools in the council area, using a tool that returns five schools per call in name order, answers Beechwood Public School with one call and Huntingdon Public School with two. It reaches the correct answer, Port Macquarie Public School from 1852, on the third call, or on the first if the tool can sort by date.' },
      { q: 'What is vibe coding?', a: 'Creating software by describing it to an AI that writes the code. We teach it together with reading, testing and fixing that code, so learners understand what they have built.' },
      { q: 'Do you help HSC students?', a: 'Yes. Teachers work with NSW stages and terms and support senior students in computing and maths. Assessed school work must be the student\'s own; we teach the skills behind it.' },
      { q: 'What time are lessons for Port Macquarie learners?', a: 'Families usually choose an after-school or weekend slot at the trial, in NSW time. India runs 4.5 hours behind Port Macquarie in winter and 5.5 hours behind during daylight saving.' },
      { q: 'Can younger children join?', a: 'Yes, from six. Younger learners begin with Scratch and visual projects; the agent project here is aimed at teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Port Macquarie?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Port Macquarie AI agents classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Port Macquarie and New South Wales learners',
    html: 'Up the coast, <a class="cg-inline-link" href="/best-coding-classes-in-coffs-harbour">coding classes in Coffs Harbour</a> use the same schools file to study nearest neighbours. Learners interested in thinking alongside AI can read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a>, and the state page is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Port Macquarie and Australia',
  footerPlaces: [
    { href: '/best-coding-classes-in-coffs-harbour', label: 'Coffs Harbour' },
    { href: '/online-coding-and-python-classes-in-newcastle-nsw', label: 'Newcastle' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-pmq .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.45rem); }
.cg-root.cg-pmq .cg-hero h1 { font-weight: 780; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-pmq .cg-capsule { border-left: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0 0 0.8rem 0.9rem; }
.cg-root.cg-pmq .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-pmq .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.014em; }
.cg-root.cg-pmq .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-pmq .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-pmq .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pmq .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-pmq .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Port Macquarie, ABS Census 2021 QuickStats, Significant Urban Area 1028 (read 7 October 2026): 50,193 people; median age 47 (New South Wales 39, Australia 38); 13,754 families; 23,562 private dwellings; average 2.3 people per household; dwelling structure, occupied private dwellings: separate house 13,782 (67.1 percent; NSW 65.6; Australia 72.3), semi-detached, row or terrace house, townhouse etc 3,606 (17.6 percent; NSW 11.7; Australia 12.6), flat or apartment 3,011 (14.7 percent; NSW 21.7); occupation: Professionals 4,997 (23.5 percent; NSW 25.8); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 8,208 (19.5 percent; NSW 27.8; Australia 26.3); aged 10 to 14 3,050 (6.1 percent); aged 15 to 19 2,897 (5.8 percent). NSW Department of Education, 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April; Term 2 Thursday 29 April to Friday 2 July; Term 3 Tuesday 20 July to Friday 24 September; Term 4 Tuesday 12 October to Monday 20 December. IANA tz database: Australia/Sydney, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Tool-call budgets and early stopping for agents. NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA = Port Macquarie-Hastings: 21 (Primary School 17, Secondary School 4), including Hastings Secondary College, Port Macquarie Campus and Westport Campus as separate rows. Earliest Date_1st_teacher: Port Macquarie Public School 1852-01-01; then Wauchope Public School 1868-01-01, Huntingdon Public School 1868-07-01, Beechwood Public School 1869-08-01. Simulated paged tool: 5 rows per call sorted by School_name (5 calls for 21 rows); Port Macquarie Public School at alphabetical position 15 (page 3). Agent keeps the earliest date seen and stops after k calls: k = 1 answer Beechwood Public School (1869-08-01), k = 2 Huntingdon Public School (1868-07-01), k = 3 correct. Random page order, 10,000 shuffles, random.seed(20261007): success 23.7, 47.3, 71.6, 95.7, 100.0 percent for k = 1 to 5; exact min(1, 5k/21) = 23.8, 47.6, 71.4, 95.2, 100. Tool with a date sort: correct in 1 call. Lesson family: tool-call budgets, early stopping and tool design for agents.',
    requiredMentions: [
      '50,193',
      '13,754',
      '23,562',
      '3,606',
      '3,050',
      'Beechwood Public School, 1869',
      'Huntingdon Public School, 1868',
      'Port Macquarie Public School, 1852',
      '47.3%'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Port Macquarie Significant Urban Area (1028): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1028' },
      { claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That any real school information service pages results in this way: the paged tool is our simulation.',
      'That a 1 January first-teacher date means the school opened on New Year\'s Day: the date may record the year only.',
      'Port Macquarie-Hastings Council ArcGIS layers (parks, bridges, flood planning): licence terms unclear or flood topics excluded, so not used.',
      'Enrolment, ICSEA, Indigenous and LBOTE figures from the master dataset: excluded or not needed.',
      'Bureau of Meteorology facts for Port Macquarie: the Bureau returned 403 and was not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Port Macquarie-Hastings Council or the ABS.'
    ]
  }
};
