'use strict';
// Goulburn (cg- city page, Australia cluster Phase 7, row 182). Shaped page: vibe coding and AI agents, leading
// with teenagers and adults; younger learners are covered by the kids pages and the national hub.
// Spine: should an AI agent write its whole plan before it looks at the data, or check after every step? Data:
// NSW Department of Education, "Master dataset: NSW government school locations and student enrolment numbers"
// (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted
// 2026-10-02. Rows with LGA "Goulburn Mulwaree": 14 (11 Primary School, 2 Secondary School, 1 other). Question
// put to both agents: how many of these schools are in the town of Goulburn? Our simulation (scratchpad
// au/r6/py/gbn_agents.py): Town_suburb holds 7 distinct raw labels, 11 of 14 with a trailing space ('Goulburn '
// x8), one 'GOULBURN' (Bradfordville Public School), one 'Goulburn North ' (Goulburn North Public School), one
// 'TALLONG'. Plan-and-execute (plan fixed first: load, keep Town_suburb == "Goulburn", count): 3 tool calls,
// answer 0. Same agent plus one validation and replan (strip spaces): 5 calls, answer 8. Interleaved agent that
// observes every result: 6 calls; exact 0, distinct labels 7, stripped 8, case-folded 9, prefix 'goulburn' 10.
// Oldest Date_1st_teacher 1858-07-01 Goulburn Public School; outside the town: Marulan 1860-09-01, Tallong
// 1865-09-01, Windellama 1871-05-01, Tarago 1878-03-01; Goulburn High School 1913-01-01, Mulwaree High School
// 1971-01-01. The agents are our own scripted simulation, not a test of any AI product.
// Lesson family: plan-and-execute agent versus an interleaved reason-act-observe agent; screened free site-wide on
// 9 October 2026 ("plan-and-execute": 0 page hits; claimed by AU-R6).
// Place facts read raw on 9 October 2026: ABS Census 2021 QuickStats, Goulburn Significant Urban Area (1014):
// 24,565 people; median age 40 (NSW 39, Australia 38); 6,245 families; 10,872 private dwellings; 2.3 people per
// household; separate house 8,002 (84.4%; NSW 65.6%); semi-detached, row or terrace house, townhouse 1,027
// (10.8%); flat or apartment 359 (3.8%; NSW 21.7%); Technicians and Trades Workers 1,560 (14.3%; NSW 11.9%);
// Bachelor Degree level and above 2,839 (14.1%); aged 5 to 9 1,534; 10 to 14 1,506; 15 to 19 1,294. NSW
// Department of Education, 2027 term dates, Eastern division. IANA tz: Australia/Sydney daylight saving Sunday
// 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, and
// the dataset's enrolment, ICSEA, Indigenous and LBOTE columns; one school's specific-purpose type is not printed.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'GOULBURN', label: 'Goulburn', blurb: 'Vibe coding and AI agents for Goulburn teens and adults, and a project where an agent that plans too early counts zero schools.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-goulburn',
  code: 'gbn',
  accent: '#821844',
  accentRationale: 'Goulburn: a deep mulberry (HSV saturation 0.82, value 0.51, hue 335), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, and 9.2:1 on the paper colour',
  pageType: 'city',
  place: {
    name: 'Goulburn',
    eyebrow: 'Goulburn, New South Wales, Australia',
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
  routeLabel: 'Goulburn, New South Wales',
  title: 'Vibe Coding and AI Agents Classes in Goulburn | Live Online',
  description: 'Live online vibe coding and AI agents classes for Goulburn and Mulwaree teens and adults, taught by a real teacher in a small group or one to one. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Goulburn teens and adults, with a project where an agent that plans before looking finds 0 schools in a town that has 8.',
  twitterDescription: 'Vibe coding and AI agents classes in Goulburn, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Goulburn Learners',
    description: 'Level-matched online classes in vibe coding, designing AI agents that look before they conclude, and Python, for teenagers and adults in Goulburn and the Goulburn Mulwaree area, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Goulburn',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Goulburn?',
  capsule: 'Lessons in which a Goulburn teenager or adult designs AI agents in Python, decides when an agent should stop and look at what it found, and tests the answers against open data with a teacher. The 2021 Census counted 24,565 people in the Goulburn urban area. Classes happen live over video, privately or in a small group at a matching level, and the opening lesson is free.',
  lead: 'Give an AI agent the state\'s school list and ask how many government schools are in the town of Goulburn. One design writes its whole plan first: load the rows, keep those whose town reads "Goulburn", count. It follows the plan faithfully and reports 0. Another design looks at every result before choosing the next step. Seeing zero, it lists the town labels, spots a hidden space after the word, then a row in capitals, and reaches 9, or 10 if Goulburn North counts. Our Goulburn project builds both agents and asks when planning ahead helps and when it blinds.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Goulburn.',

  picks: {
    eyebrow: 'Course picks for Goulburn',
    h2: 'Courses for agents that look before they answer',
    intro: 'Every course here builds the skills behind the two-agent project further down. Book the free first lesson and the teacher will name the one that suits; no card is needed.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Ask an AI for a program, then question, run and mend the code it produces, in Python and for the browser.' },
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 18', note: 'Coding agents that edit real projects, and the habit of checking each change they make.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Full applications made with AI assistance, plus the data structures and tests that keep them honest.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults and professionals', note: 'Directing coding agents through multi-step jobs, and catching the step where a plan stopped matching reality.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Goulburn in the Census',
      h2: 'Eight thousand houses and very few flats',
      intro: 'The 2021 QuickStats release for the Goulburn Significant Urban Area, set out as printed, with state and national rows for scale.',
      body: [
        { kind: 'table', caption: 'Goulburn urban area, 2021 Census QuickStats', head: ['Item', 'Goulburn'], rows: [
          ['People counted', '24,565'],
          ['Families', '6,245'],
          ['All private dwellings', '10,872'],
          ['Average household size', '2.3 people']
        ] },
        { kind: 'table', mt: true, caption: 'Goulburn beside New South Wales and Australia', head: ['Census item', 'Goulburn', 'NSW', 'Australia'], rows: [
          ['Median age', '40', '39', '38'],
          ['Homes that are a separate house', '84.4% (8,002)', '65.6%', '72.3%'],
          ['Homes that are a flat or apartment', '3.8% (359)', '21.7%', '14.2%'],
          ['Workers in technical and trade jobs', '14.3% (1,560)', '11.9%', '12.9%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Close to the state', p: 'A median age of 40 puts Goulburn one year above New South Wales as a whole.' },
          { h3: 'Detached living', p: '8,002 occupied homes were separate houses, 84.4%, against 65.6% across the state.' },
          { h3: 'Young people', p: 'QuickStats lists 1,534 residents aged 5 to 9, 1,506 aged 10 to 14 and 1,294 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'A note on the numbers: the bureau adds tiny random adjustments to its counts to protect privacy, so rows in one table may not add up exactly to the figure printed as their total. We copy each total and percentage as published and never build a total by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Plan first, or look after every step?',
      intro: 'Two scripted agents get the same question and the same tool, a function that reads the NSW Department of Education school list for the Goulburn Mulwaree council area, 14 rows. The only difference is when each one looks at what its tool returned.',
      body: [
        { kind: 'table', caption: 'How many government schools are in the town of Goulburn? (our simulation)', head: ['Agent design', 'Tool calls', 'Answer'], rows: [
          ['plan-and-execute, plan written before any data is seen', '3', '0'],
          ['plan-and-execute with one check and replan at the end', '5', '8'],
          ['Interleaved: reason, act, observe, repeat', '6', '9, or 10 with Goulburn North']
        ] },
        { kind: 'table', mt: true, caption: 'What the interleaved agent saw at each step', head: ['Step', 'What it tried', 'Rows matched'], rows: [
          ['1', 'Town label exactly "Goulburn"', '0'],
          ['2', 'List the distinct town labels', '7 labels'],
          ['3', 'Remove spaces around each label', '8'],
          ['4', 'Ignore capital letters as well', '9 (adds Bradfordville Public School)'],
          ['5', 'Any label starting with "Goulburn"', '10 (adds Goulburn North Public School)']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The hidden space', p: 'In 11 of the 14 rows the town label ends with an invisible space, so "Goulburn " never equals "Goulburn". A plan written in advance cannot know that.' },
          { h3: 'The capital letters', p: 'One school\'s label is typed GOULBURN and another TALLONG. A single replan that only strips spaces still misses the first, which is why the replanned agent stops at 8.' },
          { h3: 'The judgement call', p: 'Whether Goulburn North belongs in "the town of Goulburn" is a question about meaning, not data. A good agent reports both counts and says why, instead of picking one silently.' }
        ] },
        { kind: 'callout', h3: 'Planning is not the mistake', p: 'Writing a plan first is quick, cheap and easy to audit, and for familiar, clean data it works well. The failure here comes from never comparing the plan with what came back. Zero schools in a town that appears in the council\'s own name should have been a warning. Learners add that kind of check to the planning agent and watch it recover part of the way, then see why some messes only show up one observation at a time.' },
        { kind: 'p', text: 'Both agents are short Python scripts we wrote to make the two designs visible; neither is a commercial AI product, and the step counts describe our scripts only. The department\'s file is used as found, including its untidy labels, and nothing on this page rates any school.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Agent design',
      h2: 'Habits the Goulburn agents teach about any AI helper',
      intro: 'The same pattern appears whenever an assistant runs a sequence of actions: in spreadsheets, in code changes, in searches across a shared drive.',
      body: [
        { kind: 'table', caption: 'Design choices and what the Goulburn data shows', head: ['Choice', 'In this project', 'Rule of thumb'], rows: [
          ['When should the agent look?', 'The fixed plan never inspected its own result', 'Check every result that would surprise a person'],
          ['What counts as suspicious?', 'Zero matches for a town in the council\'s own name', 'Write expected ranges down before running'],
          ['How far should one replan go?', 'Stripping spaces gave 8 and missed GOULBURN', 'Inspect the data again after each fix'],
          ['Who settles definitions?', 'Goulburn North in or out', 'Return both figures and ask the person']
        ] },
        { kind: 'p', text: 'Ask a chat assistant to "count the Goulburn schools in this file" and it may well write the three-line filter our first agent used, then state 0 with confidence. Someone who has watched the interleaved agent work knows to ask for the list of distinct values first, and to treat a suspiciously round answer as a prompt to look again rather than a result.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Build both agents as plain Python loops, print every observation, and find the step where the plan went wrong.' },
          { h3: 'University students', p: 'Tool design, validation steps and the trade between planning cost and checking cost in agent frameworks.' },
          { h3: 'Adults', p: 'Supervising coding and office agents on multi-step jobs, and knowing which intermediate result to inspect.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of Goulburn Mulwaree Council, the NSW education department and the Australian Bureau of Statistics. They publish the school list and the census tables; the two agents and their answers belong to our teaching material.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Goulburn',
      h2: 'Schools from 1858 to 1971 across Goulburn Mulwaree',
      intro: 'Founding dates from the same department file, plus the NSW school calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'First in the list', p: 'Goulburn Public School has the earliest first-teacher date in the council area, July 1858.' },
          { h3: 'Outside the town', p: 'First teachers are recorded at Marulan in 1860, Tallong Public School in 1865, Windellama Public School in 1871 and Tarago in 1878.' },
          { h3: 'Two high schools', p: 'The file gives Goulburn High School a first-teacher date in 1913 and Mulwaree High School one in 1971.' }
        ] },
        { kind: 'spec', title: 'The 2027 school year', p: 'Term 1 for NSW Eastern division students begins on Wednesday 3 February 2027 and ends on Friday 9 April. We plan holiday breaks and exam weeks around the NSW calendar, so lessons pause when families expect them to.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first prompts to agents you can supervise',
    intro: 'Ages here are rough guides; the free first lesson sets the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Code you can question', p: 'Small Python programs written with an AI, read line by line and run on real files such as the school list.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Agents in loops', p: 'Agents that call a tool, print what came back and decide the next move from it, built step by step.', courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'teens-ai-tools-mastery-course'] },
      { band: 'University', h3: 'Planning and checking', p: 'Plan-then-act versus act-then-observe designs, validation, retries and cost in real agent systems.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Coding and workplace agents trusted with several steps, and the checkpoints that catch a plan going stale.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why does a Goulburn learner need to know how agents plan?',
    intro: 'Because more and more AI tools now take several actions in a row on our behalf, and each action rests on the one before.',
    p1: 'A chat reply can be read and judged in a moment. An agent that edits files, queries data and sends results does its work out of sight, and if its plan was fixed before it looked, one wrong assumption at step two carries all the way to a confident final answer, like the 0 our first agent gave for Goulburn.',
    p2: 'We teach learners to design agents that pause at the right moments, to read the trace of what an agent actually did, and to decide which questions are about data and which about meaning. Those skills transfer to every assistant they will use, whichever company makes it.',
    closer: 'In 2026 an agent can finish a task in seconds, and a Goulburn learner who can tell when it skipped a look is the one who gets the answer right.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Goulburn, Marulan or Tarago, one live lesson',
    intro: 'The schools in our project include Tallong, Windellama, Marulan and Tarago as well as Goulburn itself, and a video class reaches all of them equally.',
    cells: [
      { h3: 'No drive needed', p: 'A learner in Marulan and another in central Goulburn can debug the same agent together without anyone leaving home.' },
      { h3: 'Fits the NSW year', p: 'Plans move with the learner\'s school stage and the four NSW terms, and senior students can connect agent projects to the computing or maths they are taking.' },
      { h3: 'Trial with substance', p: 'The free lesson is a real class with working code; afterwards we propose a level, a course and a weekly slot, with no card details asked.' },
      { h3: 'Matched groups', p: 'Groups hold five to ten learners at the same stage, drawn from across Australia and further afield, so a suitable class always exists.' },
      { h3: 'A steady rhythm', p: 'Classes run on the same two weekdays at the same hour, close to eight sessions a month, with exam and holiday pauses set in advance.' },
      { h3: 'Teachers in India', p: 'A 6pm Goulburn class in winter begins at 1:30pm in India; once NSW daylight saving starts it begins at 12:30pm there.' }
    ],
    spec: { title: 'Clocks change, lesson times do not', p: 'NSW clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027, and India does not change at all. We always book in Goulburn time, so the hour on the timetable is the hour the lesson starts.' }
  },

  fees: {
    h2: 'Fees for Goulburn learners',
    intro: 'Three prices, nothing hidden.',
    first: 'A full lesson with no charge, ending with a suggested level, course and time.',
    group: 'Roughly eight lessons a month with five to ten learners at the same stage.',
    private: 'Roughly eight lessons a month, just the learner and a teacher.',
    closer: 'Billing outside India is always in US dollars, so a family in Tarago pays the same figure as one in central Goulburn and there is no separate local tariff. Payment waits until the trial has agreed a course and a regular time, and the pricing page sets out pauses, missed lessons and moves between group and private.'
  },

  reviewsH2: 'Families who reviewed us on Google',

  book: {
    h2: 'Which agent would they like to build?',
    intro: 'Tell us an age and what interests them, and we can sketch a first plan. A Year 10 student might start by printing every label in the Goulburn school list; an adult might go straight to building the interleaved agent.',
    success: 'Thank you. Our team will be in touch shortly about a Goulburn class.'
  },

  faq: {
    h2: 'Goulburn vibe coding and AI agents questions',
    intro: 'Questions Goulburn learners and parents most often send before a first class.',
    items: [
      { q: 'How many people live in Goulburn?', a: 'The 2021 Census QuickStats for the Goulburn Significant Urban Area recorded 24,565 people, 6,245 families and 10,872 private dwellings, with a median age of 40.' },
      { q: 'What is a plan-and-execute agent?', a: 'A plan-and-execute agent writes out all of its steps first and then carries them out in order. It is fast and easy to audit, but it cannot react to anything surprising in the results unless a checking step is added.' },
      { q: 'What is an interleaved agent?', a: 'An interleaved agent alternates between reasoning, taking one action and observing the result, then decides its next step from what it saw. The 2022 ReAct paper by Yao and colleagues describes this pattern for language-model agents.' },
      { q: 'What is the Goulburn agents project?', a: 'Learners build two small agents that count the government schools in the town of Goulburn from the NSW school list. The planning agent answers 0 because of a hidden space in the data; the agent that observes each step reaches 9, or 10 counting Goulburn North.' },
      { q: 'What is vibe coding?', a: 'Vibe coding means describing what you want in plain English and letting an AI write the code. We teach it together with reading, testing and fixing that code, because the AI is often confidently wrong.' },
      { q: 'When are lessons held?', a: 'Times are fixed at the trial and stated in Goulburn time, mostly after school or on weekends. India runs 4.5 hours behind Goulburn in winter and 5.5 hours behind during NSW daylight saving.' },
      { q: 'Can children younger than 13 join?', a: 'Yes, from age six. Younger learners begin with Scratch and visual projects, while the agent project on this page suits teenagers and adults.' },
      { q: 'Do you have a centre in Goulburn?', a: 'No, and none is claimed. All lessons are live and online and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number shown is Indian.', boiler: true },
      { q: 'What do Goulburn vibe coding and AI agents classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Goulburn Mulwaree learners',
    html: 'You may also like the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a> for state-wide courses and terms, or <a class="cg-inline-link" href="/ai-and-programming-classes-in-taree">AI and programming classes in Taree</a> for a machine learning project on the same school list. Every other place and subject sits on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Goulburn and Australia',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-taree', label: 'Taree' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-gbn .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.1vw, 2.6rem); }
.cg-root.cg-gbn .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.07; }
.cg-root.cg-gbn .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-gbn .cg-eyebrow { letter-spacing: 0.11em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-gbn .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-gbn .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.8rem); }
.cg-root.cg-gbn .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-gbn .cg-table td:first-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-gbn .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-gbn .cg-callout { border-left-style: dashed; }
`,

  dossier: {
    curriculumAuthority: 'Goulburn, ABS Census 2021 QuickStats, Significant Urban Area 1014 (read 9 October 2026): 24,565 people; median age 40 (New South Wales 39, Australia 38); 6,245 families; 10,872 private dwellings; average 2.3 people per household; dwelling structure, occupied private dwellings: separate house 8,002 (84.4 percent; NSW 65.6; Australia 72.3), semi-detached, row or terrace house, townhouse 1,027 (10.8 percent), flat or apartment 359 (3.8 percent; NSW 21.7; Australia 14.2); occupation: Professionals 1,656 (15.2 percent; NSW 25.8), Technicians and Trades Workers 1,560 (14.3 percent; NSW 11.9; Australia 12.9); Bachelor Degree level and above 2,839 (14.1 percent); aged 5 to 9 1,534; aged 10 to 14 1,506; aged 15 to 19 1,294. NSW Department of Education, 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April. IANA tz database: Australia/Sydney, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Plan-and-execute agent versus an interleaved reason-act-observe agent, our own scripted simulation. NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA = Goulburn Mulwaree: 14 (Primary School 11, Secondary School 2, other 1). Town_suburb raw labels: 7 distinct; 11 of 14 end in a space; Goulburn (with trailing space) 8, GOULBURN 1 (Bradfordville Public School), Goulburn North (trailing space) 1, Marulan 1, TALLONG 1, Tarago 1, Windellama 1. Question: how many schools are in the town of Goulburn. Plan-and-execute, plan fixed before data (load, Town_suburb == "Goulburn", count): 3 tool calls, answer 0. With one validation and replan (strip): 5 calls, answer 8. Interleaved: 6 calls; exact 0, distinct 7, strip 8, casefold 9, prefix "goulburn" 10. Date_1st_teacher: Goulburn Public School 1858-07-01 (oldest), Marulan Public School 1860-09-01, Tallong Public School 1865-09-01, Windellama Public School 1871-05-01, Tarago Public School 1878-03-01, Goulburn High School 1913-01-01, Mulwaree High School 1971-01-01.',
    requiredMentions: [
      '24,565',
      '10,872',
      'Bradfordville Public School',
      'Goulburn North Public School',
      'Tallong Public School',
      'Windellama Public School',
      'Mulwaree High School',
      'plan-and-execute',
      '1,534 residents aged 5 to 9'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Goulburn Significant Urban Area (1014): people, median age, families, private dwellings, dwelling structure, occupation, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1014' },
      { claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'Yao and others (2022), ReAct: Synergizing Reasoning and Acting in Language Models, arXiv 2210.03629.', url: 'https://arxiv.org/abs/2210.03629' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That Goulburn North is or is not part of the town of Goulburn: the page treats it as a question of definition and shows both counts.',
      'Any claim about how commercial AI agents behave: the two agents are our own scripts and the page says so.',
      'The specific-purpose classification of one Goulburn school, and enrolment, ICSEA, Indigenous and LBOTE figures from the master dataset: excluded by the cluster rules.',
      'Bureau of Meteorology station facts: the Bureau\'s pages returned 403 and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Goulburn Mulwaree Council or the ABS.'
    ]
  }
};
