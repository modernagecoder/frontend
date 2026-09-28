'use strict';
// Stockton-on-Tees (cg- town page, UK cluster Phase 8, towns band A, row 366). Fourth page in the owner's 2026-09-28
// vibe-coding-and-ai-agents-classes-in-* rotation. Spine: what should an AI agent remember when its context window is
// small? Anchor data (read 28 September 2026): Nomis Census 2021 TS001 Stockton-on-Tees usual residents 196,595 (TS007A
// total identical); ONS 2021 built-up areas touching the borough (published): Stockton-on-Tees 84,815; Billingham 33,920;
// Ingleby Barwick 23,380; Thornaby-on-Tees 23,350; Egglescliffe 10,250; Yarm 9,600; Wynyard 4,040 (our OA sum inside the
// borough 2,799; the area spans the boundary); Stillington 1,405.
// Our run (scratchpad stk2/): messages arrive largest first, one built-up area per message. Agent A keeps only the last
// three messages: "largest?" -> Yarm 9,600 (wrong); "sum?" -> 15,045. Agent B keeps a running summary (largest, second
// largest, count, running sum): largest Stockton-on-Tees 84,815 and second Billingham 33,920, correct; sum of published
// figures 190,760, which is not the borough total 196,595 (areas under 1,000 people are missing, and Wynyard is counted
// whole although 2,799 of its 4,040 live inside); cannot answer "third largest" afterwards (Ingleby Barwick 23,380 vs
// Thornaby-on-Tees 23,350, 30 apart). Agent C with a top-three summary answers it.
// Lesson family: context window limits, streaming summaries (running max / top-k), what a memory summary loses, and not
// presenting a sum of parts as a total. Screened: context window, streaming, running max, scratchpad, forget 0 hits
// (Middlesbrough owns gazetteer disambiguation; West Bromwich straddling areas; Darlington verification loops).
// Place facts: TS007A: 5 to 9 12,429 (6.3%; England 5.9%); 10 to 14 13,021 (6.6%; 6.0%); 20 to 24 9,689 (4.9%; 6.0%); 25 to
// 29 11,918 (6.1%; 6.6%); 60 to 64 12,734 (6.5%; 5.8%); 65 to 69 10,793 (5.5%; 4.9%).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'STOCKTON-ON-TEES', label: 'Stockton-on-Tees', blurb: 'Vibe coding and AI agents classes for Stockton-on-Tees, with a project on what an AI agent forgets when its context window is small.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-stockton-on-tees',
  code: 'stt',
  accent: '#4C2225',
  accentRationale: 'Stockton-on-Tees: a dark riverside brick (10.83:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Stockton-on-Tees',
    eyebrow: 'Stockton-on-Tees, North East England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Stockton-on-Tees' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-east-england', name: 'North East England' }],
  nav: [
    { label: 'Middlesbrough', href: '/ai-and-programming-classes-in-middlesbrough' },
    { label: 'North East', href: '/coding-and-ai-classes-in-north-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Stockton-on-Tees, England',
  title: 'Vibe Coding and AI Agents Classes in Stockton-on-Tees | 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for Stockton, Billingham, Thornaby and Yarm learners aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Stockton-on-Tees, live online, with a project on what an AI agent forgets when its context window is small.',
  twitterDescription: 'Stockton-on-Tees vibe coding, AI agents and Python classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Stockton-on-Tees',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Stockton-on-Tees, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Stockton-on-Tees',
  capsuleQ: 'Where can Stockton-on-Tees learners find the best vibe coding and AI agents classes?',
  capsule: 'Stockton-on-Tees borough counted 196,595 residents at the 2021 census. The ONS gives the Stockton-on-Tees built-up area 84,815 people, Billingham 33,920, and Ingleby Barwick and Thornaby-on-Tees just over 23,000 each, with Egglescliffe and Yarm smaller. Children aged 5 to 14 are more common than across England, while people in their twenties are fewer. Whichever of these towns is home, a learner of 6, 16 or 66 can join our India-based tutors on live video for vibe coding, AI agents, Python, coding and maths, working privately or in a same-level group of five to ten. In vibe coding you describe the program and an AI drafts it; in an AI agent, the software itself decides which tools to use. Both sit on a foundation of careful thinking in our lessons. Try one lesson at no cost; staying on works out at USD 100 a month for a group place, or USD 150 for a tutor to yourself.',
  lead: 'Every AI chatbot has a context window: a limit on how much of the conversation it can see at once. When a chat grows long, the earliest messages fall out of view, and an AI agent working through a long task can quietly forget what it read at the start. Our Stockton-on-Tees project makes that limit visible with local data. The learner feeds an agent the borough\'s built-up areas one message at a time, from the Stockton-on-Tees built-up area itself down to Stillington, and gives it room to remember only three messages. Asked which town is largest, it confidently answers Yarm. Fixing that teaches exactly how real agents are given memory, and what memory still loses.',
  wa: 'Hello Modern Age Coders, we would love a free vibe coding or AI agents lesson for a Stockton-on-Tees learner.',

  picks: {
    eyebrow: 'Stockton-on-Tees course picks',
    h2: 'Vibe coding, AI agents and how-to-think courses',
    intro: 'Pair the course with the learner\'s age and enthusiasms. A complimentary live lesson comes first, and we never ask for card details to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: memory games, logic and step-by-step reasoning.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps created by describing them to AI and testing.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI builds for teenagers, including the forgetful agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Context windows, retrieval and AI agents, understood and built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stockton-on-Tees borough',
      h2: 'More school-age children, fewer twenty-somethings',
      intro: 'What Nomis shows for six age groups in the borough, measured against all of England.',
      body: [
        { kind: 'table', caption: 'Stockton-on-Tees and England, six age bands (Census 2021, TS007A)', head: ['Ages', 'Borough residents', 'Borough share', 'England share'], rows: [
          ['5 to 9', '12,429', '6.3%', '5.9%'],
          ['10 to 14', '13,021', '6.6%', '6.0%'],
          ['20 to 24', '9,689', '4.9%', '6.0%'],
          ['25 to 29', '11,918', '6.1%', '6.6%'],
          ['60 to 64', '12,734', '6.5%', '5.8%'],
          ['65 to 69', '10,793', '5.5%', '4.9%']
        ] },
        { kind: 'p', text: 'The early twenties sit more than a point below England, while children aged 10 to 14 and adults in their early sixties are clearly above. The borough is made up of several distinct towns, and the ONS publishes each as its own built-up area: Stockton-on-Tees, Billingham, Ingleby Barwick, Thornaby-on-Tees, Egglescliffe, Yarm and Stillington, plus part of Wynyard. Local pupils study the English national curriculum, and lessons simply skip the half-terms you mention.' },
        { kind: 'callout', h3: 'Reasoning comes first', p: 'Why learners build thinking skills before leaning on AI is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. Neighbouring <a class="cg-inline-link" href="/ai-and-programming-classes-in-middlesbrough">Middlesbrough</a> has its own page.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Stockton-on-Tees project',
      h2: 'An AI agent with a three-message memory',
      intro: 'Stream the borough\'s towns to an agent that forgets, then design what it should remember.',
      body: [
        { kind: 'p', text: 'The learner vibe codes a tiny agent and sends it one message per built-up area, largest first: Stockton-on-Tees 84,815, Billingham 33,920, Ingleby Barwick 23,380, Thornaby-on-Tees 23,350, Egglescliffe 10,250, Yarm 9,600, Wynyard 4,040 and Stillington 1,405. Like a chatbot with a very small context window, the agent can only see its last three messages. Asked "Which is the largest town?", it looks at what it can still see and answers Yarm. Asked for the total, it adds up three numbers and says 15,045. Both answers are delivered with complete confidence, because the agent has no idea what it has forgotten.' },
        { kind: 'table', caption: 'Three memory designs for the Stockton-on-Tees agent, our Python run, 28 September 2026', head: ['Agent memory', 'Largest town', 'Second largest', 'Third largest'], rows: [
          ['Last three messages only', 'Yarm (wrong)', 'Wynyard (wrong)', 'Stillington (wrong)'],
          ['Running summary: top two, count and sum', 'Stockton-on-Tees', 'Billingham', 'Cannot answer'],
          ['Running summary: top three, count and sum', 'Stockton-on-Tees', 'Billingham', 'Ingleby Barwick, by just 30 people'],
          ['Every message kept', 'Stockton-on-Tees', 'Billingham', 'Ingleby Barwick']
        ] },
        { kind: 'p', text: 'The fix is a scratchpad memory: after each message, the agent updates a short summary instead of relying on raw history. Keeping the two largest towns, a count and a running sum is enough to answer the first questions correctly. But when the learner later asks for the third largest, the summary cannot help, because nobody told the agent that question was coming. Ingleby Barwick and Thornaby-on-Tees differ by only 30 people, so the answer genuinely needs the stored detail. Keeping the top three solves it. The lesson is that a summary is a decision about which future questions matter.' },
        { kind: 'p', text: 'The running sum hides a final trap. Adding the published figures gives 190,760, not the borough total of 196,595. Smaller places and rural areas are not in the list, and Wynyard\'s 4,040 is counted whole even though only 2,799 of its residents live inside the borough. So the learner teaches the agent to report the official borough figure when asked for a total, and to describe its own sum as the sum of listed areas. Clear labels matter as much in memory as they do in answers.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Hear a list of numbers once, keep only three in your head, and see which questions you can still answer.' },
          { h3: 'Ages 11 to 15', p: 'Let an AI help write a one-message-at-a-time program, then limit how much it may store.' },
          { h3: 'Ages 15 and up', p: 'Design running summaries, test them against surprise questions and label totals honestly.' }
        ] },
        { kind: 'callout', h3: 'ONS figures, our agent', p: 'Population figures come from Census 2021 tables on Nomis and the ONS built-up area data. The agent, its memory designs and the results in the table are our own work.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Memory is a design choice',
      intro: 'What a context window means for anyone who uses or builds AI.',
      body: [
        { kind: 'table', caption: 'Built-up areas in Stockton-on-Tees borough, ONS 2021 published figures', head: ['Built-up area', 'People'], rows: [
          ['Stockton-on-Tees', '84,815'],
          ['Billingham', '33,920'],
          ['Ingleby Barwick', '23,380'],
          ['Thornaby-on-Tees', '23,350'],
          ['Egglescliffe', '10,250'],
          ['Yarm', '9,600']
        ] },
        { kind: 'p', text: 'Long chats with AI assistants and long-running AI agents both hit this limit. A learner who has watched an agent answer Yarm knows to restate key facts, ask for summaries, and test whether an agent still remembers the start of a task. That awareness grows in stages with us: memory and logic games for younger children in the how-to-think programme, self-tested vibe-coded projects for teenagers, and properly designed agent memory in Python for older students and adults. If Copilot Studio is the platform, those lessons are given individually. There is more on <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teenagers</a> and the <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">UK students\' AI agents course</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Office for National Statistics and Nomis. Credit for the statistics goes to them, and any slip in the forgetful agent is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From memory games to agent memory',
    intro: 'The school year is a first guess; the free lesson sets the real starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Memory games, logic and clear steps.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with AI help, always tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and AI systems', p: 'Data structures, streaming and AI beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents with memory', p: 'Context, retrieval and agent memory in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and memory',
    h2: 'Has your AI forgotten the start of the chat?',
    intro: 'It will not tell you if it has.',
    p1: 'The Stockton-on-Tees agent named Yarm as the largest town with no hint of doubt. It had simply lost sight of the first five messages.',
    p2: 'A learner who has built and fixed that agent knows to check what an AI can still see, and to design memory around the questions that matter.',
    closer: 'Knowing why an AI forgets, and how to design around it, gives Stockton-on-Tees teenagers an edge with every tool they use, and building that knowledge is a strong reason to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Billingham to Yarm, all online',
    intro: 'Every town in the borough is covered; a computer and broadband are all that is needed.',
    cells: [
      { h3: 'The learner builds', p: 'Students write prompts, code and tests; the tutor follows over screen share and asks rather than tells.' },
      { h3: 'Placed at the right step', p: 'A Year 5 or a Year 12 starts where the free lesson shows they are ready, with the exam board kept in mind.' },
      { h3: 'First lesson free', p: 'A full lesson with no charge, ending with clear advice.' },
      { h3: 'Classes by stage', p: 'Five to ten UK learners working at the same level.' },
      { h3: 'Twice a week', p: 'No lessons in the school holidays.' },
      { h3: 'One steady hour', p: 'Our tutors handle the UK clock changes.' }
    ],
    spec: { title: 'Why small groups meet online', p: 'Five learners across the borough at the same stage, free at the same hour, rarely share a street. Online, each joins a class that fits.' }
  },

  fees: {
    h2: 'Stockton-on-Tees fees',
    intro: 'The borough pays our single international rate, used everywhere except India.',
    first: 'A whole trial lesson free, followed by a course suggestion.',
    group: 'Approximately eight live small-group lessons each month.',
    private: 'Approximately eight live one-to-one lessons each month; Copilot Studio agents are one-to-one only.',
    closer: 'Fees are charged in US dollars rather than sterling. The first invoice follows only after the trial settles the course and the weekly slot. Our pricing page sets out how breaks, missed lessons and switching format are handled.'
  },

  reviewsH2: 'Google reviews from Teesside households and beyond',

  book: {
    h2: 'Book a free Stockton-on-Tees lesson',
    intro: 'Drop us a note with the learner\'s age or year group and a favourite pastime. We might open with a remember-the-list challenge, an AI-assisted Scratch build, some starter Python, or a pocket-sized agent with a memory problem.',
    success: 'Thank you. Your Stockton-on-Tees request has reached us.'
  },

  faq: {
    h2: 'Stockton-on-Tees questions',
    intro: 'AI agents, context windows, vibe coding and practical points.',
    items: [
      { q: 'What is the population of Stockton-on-Tees?', a: 'The 2021 census counted 196,595 in the borough; the ONS gives 84,815 for the Stockton-on-Tees built-up area itself.' },
      { q: 'What is a context window?', a: 'The amount of conversation or text an AI model can take into account at once; older material beyond it is effectively forgotten.' },
      { q: 'Do you teach vibe coding here?', a: 'Yes, live online for every age, with learners planning first and testing the code the AI writes.' },
      { q: 'When can a young person start on AI agents?', a: 'After a grounding in Python, typically mid-teens; our Copilot Studio agent lessons are private rather than group-based.' },
      { q: 'What is the forgetful agent project?', a: 'Learners stream the borough\'s built-up areas to an agent with a three-message memory, watch it name Yarm as largest, then design better memory.' },
      { q: 'Are lessons in person?', a: 'No. They take place live online.' },
      { q: 'Is there support for exam years?', a: 'Yes, for GCSE and A level computer science and maths. We teach for understanding and never guarantee a grade.' },
      { q: 'Is there an age range?', a: 'Our learners range from 6 to 67.' },
      { q: 'How much does it cost?', a: 'Lesson one is on us. Group study then runs at USD 100 monthly and private study at USD 150 monthly.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes; just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages around the Tees',
    html: 'Nearby, <a class="cg-inline-link" href="/ai-and-programming-classes-in-middlesbrough">Middlesbrough</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-darlington">Darlington</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hartlepool">Hartlepool</a> each have a page. For the whole region see <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East England</a>; the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> gathers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Stockton-on-Tees and the North East',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-middlesbrough', label: 'Middlesbrough' },
    { href: '/coding-and-ai-classes-in-north-east-england', label: 'North East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-stt .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-stt .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-stt .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-stt .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-stt .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-stt .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-stt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-stt .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-stt .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-stt .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Stockton-on-Tees (E06000004). Nomis Census 2021 TS001 196,595. TS007A: 5 to 9 12,429 (6.3%, England 5.9%); 10 to 14 13,021 (6.6%, 6.0%); 20 to 24 9,689 (4.9%, 6.0%); 25 to 29 11,918 (6.1%, 6.6%); 60 to 64 12,734 (6.5%, 5.8%); 65 to 69 10,793 (5.5%, 4.9%). ONS 2021 BUAs: Stockton-on-Tees 84,815; Billingham 33,920; Ingleby Barwick 23,380; Thornaby-on-Tees 23,350; Egglescliffe 10,250; Yarm 9,600; Wynyard 4,040 (2,799 inside); Stillington 1,405.',
    localProject: 'Streamed largest first. Last-3 memory: largest -> Yarm (wrong), sum 15,045. Running summary (top 2, count, sum): correct largest/second; third unanswerable (Ingleby Barwick 23,380 vs Thornaby 23,350). Top-3 summary answers it. Sum of listed areas 190,760 vs borough 196,595 (small places missing, Wynyard counted whole). Lesson family: context window, streaming summaries, top-k memory, labelling sums of parts.',
    requiredMentions: [
      '196,595',
      '84,815',
      'Billingham',
      'Ingleby Barwick',
      'Thornaby-on-Tees',
      'Egglescliffe',
      'Yarm',
      'context window',
      'scratchpad memory'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS001 and TS007A, Stockton-on-Tees and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS, built-up areas, Census 2021.', url: 'https://www.ons.gov.uk/' }
    ],
    rejectedClaims: [
      'Which ceremonial county the borough belongs to: it spans two; not claimed.',
      'Railway history: owned by the County Durham and Darlington pages; not used.',
      'Real context window sizes of named AI products: change often; not claimed.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
