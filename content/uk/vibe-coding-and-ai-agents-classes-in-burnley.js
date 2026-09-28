'use strict';
// Burnley (cg- town page, UK cluster Phase 8, towns band A, row 370). Fifth page in the owner's 2026-09-28
// vibe-coding-and-ai-agents-classes-in-* rotation. Spine: what should an AI agent be allowed to change? Anchor data (read
// 28 September 2026): Nomis Census 2021 TS001 Burnley usual residents 94,646 (TS007A total identical); ONS 2021 built-up
// areas inside the borough (published): Burnley 78,255; Padiham 10,125; Hapton 2,240; Worsthorne 970; Cliviger 570. Sum of
// the five 92,160; 2,486 residents live outside those built-up areas (derived: 94,646 minus 92,160). Our OA sum 94,653.
// Demonstration (scratchpad bur/): a learner-built rule-following "tidy the table" agent told to make the parts match the
// total. With write access to the original file it overwrites the total 94,646 with 92,160 (deleting 2,486 people from the
// record) or scales every town up by 2.7%; in a sandbox it may only read the original, write a copy, and log each change,
// and the change it proposes is an extra row "Outside the listed built-up areas: 2,486 (derived)", waiting for a person to
// approve it. 2,486 / 94,646 = 2.6%; 94,646 / 92,160 = 1.027.
// Lesson family: agent permissions (sandbox, read-only originals, audit log, human approval) on a real data table.
// Screened: sandbox, read-only, immutable, audit log 0 hits (Roosendaal owns least privilege with prompt injection;
// Stockton owns labelled sums inside agent memory).
// Place facts: TS007A: 0 to 4 5,760 (6.1%; England 5.4%); 5 to 9 6,174 (6.5%; 5.9%); 10 to 14 6,278 (6.6%; 6.0%); 20 to 24
// 5,171 (5.5%; 6.0%); 80 to 84 2,148 (2.3%; 2.5%); 85 and over 1,879 (2.0%; 2.4%).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BURNLEY', label: 'Burnley', blurb: 'Vibe coding and AI agents classes for Burnley, with a project on why an AI agent should never be allowed to rewrite official figures.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-burnley',
  code: 'brn',
  accent: '#314C2A',
  accentRationale: 'Burnley: a moorland green (7.70:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Burnley',
    eyebrow: 'Burnley, Lancashire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Lancashire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Lancashire', href: '/coding-classes-in-lancashire' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Burnley, England',
  title: 'Vibe Coding and AI Agents Classes in Burnley | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for Burnley, Padiham, Hapton and Worsthorne learners aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Burnley, live online, with a project on why an AI agent must never rewrite official figures.',
  twitterDescription: 'Burnley vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Burnley',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Burnley and Padiham, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Burnley',
  capsuleQ: 'Where can Burnley learners find the best vibe coding and AI agents classes?',
  capsule: 'Burnley borough had 94,646 usual residents at the 2021 census; the ONS gives 78,255 for the Burnley built-up area and 10,125 for Padiham, with Hapton, Worsthorne and Cliviger much smaller. It is a young borough, with every age band from birth to 14 well above the England share. Children, teenagers and adults up to 67 in Burnley, Padiham, Worsthorne or Cliviger meet our India-based tutors on live video for vibe coding, AI agents, Python, coding and maths, either one-to-one or within a same-level class of five to ten. Vibe coding is building software by describing it to an AI; an AI agent goes a step further and takes actions, such as editing files. Our courses build judgement first. We waive the fee for the first lesson; regular lessons then cost USD 100 monthly with a group or USD 150 monthly on your own.',
  lead: 'AI agents do more than talk. Given the right permissions they can edit spreadsheets, rename files and send messages, which makes the question of what they are allowed to touch as important as what they can say. Our Burnley project explores it with a small, real table. The census gives the borough 94,646 residents, but its five built-up areas, from Burnley itself to Cliviger, add up to only 92,160. A learner vibe codes an agent and gives it one instruction: make this table consistent. With full access, it quietly deletes 2,486 people from the official figure. In a sandbox, it does something far more sensible.',
  wa: 'Hello Modern Age Coders, we would like a free vibe coding or AI agents lesson for a Burnley learner.',

  picks: {
    eyebrow: 'Burnley course picks',
    h2: 'Vibe coding, AI agents and how-to-think courses',
    intro: 'Age and enthusiasm point to the right course. The first live lesson is free on every one, and no card details are taken.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: rules, logic and thinking before acting.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps made by describing them to AI and checking them.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects for teenagers, including the sandboxed agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Language models and AI agents with tools, permissions and safeguards, in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Burnley borough',
      h2: 'Plenty of children, fewer of the very old',
      intro: 'Nomis figures for six age bands in Burnley from the 2021 census, set against England.',
      body: [
        { kind: 'table', caption: 'Burnley borough and England, six age bands (Census 2021, TS007A)', head: ['Age band', 'Burnley residents', 'Burnley %', 'England %'], rows: [
          ['0 to 4', '5,760', '6.1%', '5.4%'],
          ['5 to 9', '6,174', '6.5%', '5.9%'],
          ['10 to 14', '6,278', '6.6%', '6.0%'],
          ['20 to 24', '5,171', '5.5%', '6.0%'],
          ['80 to 84', '2,148', '2.3%', '2.5%'],
          ['85 and over', '1,879', '2.0%', '2.4%']
        ] },
        { kind: 'p', text: 'The three youngest bands each run 0.6 or 0.7 points above England, while the over-80s are a little below. The ONS publishes Burnley, Padiham, Hapton, Worsthorne and Cliviger as separate built-up areas inside the borough. Lancashire schools teach the national curriculum for England, and lessons with us leave out the holiday weeks you tell us about.' },
        { kind: 'callout', h3: 'Judgement before automation', p: 'Why we teach thinking before AI tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. The county page is <a class="cg-inline-link" href="/coding-classes-in-lancashire">Lancashire</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Burnley project',
      h2: 'An agent, a spreadsheet and a sandbox',
      intro: 'Give an agent a real table and a vague instruction, then decide what it may change.',
      body: [
        { kind: 'p', text: 'The learner builds a small table: the five built-up areas the ONS publishes for Burnley borough, and the census total, 94,646. Then they vibe code a simple agent with two tools, one to read the table and one to write it, and give it the instruction "make the parts add up to the total". The five areas sum to 92,160. The agent\'s obvious fix is to overwrite the total with 92,160. Another version scales every town up by 2.7 percent so they reach 94,646. Both look tidy, both run without an error, and both damage official figures that were correct all along.' },
        { kind: 'table', caption: 'What the Burnley agent does with different permissions, our demonstration, 28 September 2026', head: ['Permission set', 'What the agent changes', 'Result'], rows: [
          ['Read and write the original file', 'Total overwritten: 94,646 becomes 92,160', '2,486 residents vanish from the record'],
          ['Read and write, "scale the parts"', 'Each town multiplied by 1.027', 'Every published figure is now wrong'],
          ['Sandbox: read original, write a copy, log changes', 'Adds a row: outside listed areas, 2,486 (derived)', 'Nothing official altered; a person approves'],
          ['Read only', 'Reports the gap and explains it', 'Safest, but the table stays incomplete']
        ] },
        { kind: 'p', text: 'The gap is not an error at all. Built-up areas only cover places that are built up, so the 2,486 people, 2.6 percent of the borough, live outside them, in smaller places and more scattered homes. The agent could not know that from the numbers, and it did not ask. So the learner redesigns its permissions. The original file becomes read-only. The agent may only write to a copy, every change goes into an audit log with the old and new value, and any change to a published figure is blocked outright. Faced with the same instruction, the sandboxed agent proposes adding a clearly labelled derived row and waits for a person to approve it.' },
        { kind: 'p', text: 'The final version also explains itself: it reports that the parts and the total come from different ONS products, that the difference is expected, and that it has changed nothing official. That behaviour, act cautiously, keep originals untouched, log everything and ask when unsure, is exactly what careful teams build into real AI agents that can edit documents, databases and code.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Write rules for a robot helper tidying a room, then find the rule that makes it throw away something important.' },
          { h3: 'Ages 11 to 15', p: 'Get an AI to help write a table-tidier, then check with Python whether the census total survives.' },
          { h3: 'Ages 15 and up', p: 'Add read-only originals, an audit log and an approval step to the agent.' }
        ] },
        { kind: 'callout', h3: 'ONS figures, our agent', p: 'The total comes from Census 2021 on Nomis and the built-up areas from the ONS. The agent, its permission designs and the derived row are our own demonstration.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Why permissions matter more as AI does more',
      intro: 'An AI that can act needs limits that are designed, not assumed.',
      body: [
        { kind: 'table', caption: 'Built-up areas in Burnley borough, ONS 2021 published figures', head: ['Built-up area', 'People'], rows: [
          ['Burnley', '78,255'],
          ['Padiham', '10,125'],
          ['Hapton', '2,240'],
          ['Worsthorne', '970'],
          ['Cliviger', '570'],
          ['Borough total (census)', '94,646']
        ] },
        { kind: 'p', text: 'Vibe coding an agent that edits files takes minutes. Deciding what it may edit, and making sure it asks before changing anything that matters, is the part that needs a thinking person. In our courses that responsibility starts young, with rules-and-consequences puzzles in the how-to-think programme; teenagers then vibe code projects they have to test and keep safe; older teenagers and adults progress to Python agents with sandboxes, logs and approval gates. Copilot Studio agent lessons are private sessions. For more, read about <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">building AI agents as a UK student</a> or <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">why understanding the code matters</a>.' },
        { kind: 'p', text: 'The Office for National Statistics and Nomis are separate from Modern Age Coders. We reproduce their published figures; the agent and any error in the demonstration are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From robot rules to safe AI agents',
    intro: 'Year group is a rough first guide, and the free lesson sharpens it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Rules, consequences and logic.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and AI safety', p: 'Files, data and careful automation beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'AI agents with guardrails', p: 'Tools, permissions and approvals in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and safety',
    h2: 'Would you give an AI agent your only copy?',
    intro: 'The Burnley agent shows why not.',
    p1: 'Told to make a table consistent, the agent removed 2,486 real people from an official figure, confidently and without a single error message.',
    p2: 'A learner who has sandboxed that agent knows to keep originals read-only, log every change and ask before anything important is altered.',
    closer: 'Burnley teenagers who can build AI agents that are safe to trust will be valued wherever AI is used, which is why coding still matters in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Padiham to Cliviger, online',
    intro: 'Every home in the borough can join with a computer and a steady connection.',
    cells: [
      { h3: 'The learner decides', p: 'Prompts, code and tests all come from the student; the tutor watches the shared screen and asks what should happen next.' },
      { h3: 'Pitched by the trial', p: 'Year 4 to Year 13, the free lesson sets the starting topic and notes the exam board.' },
      { h3: 'Free to start', p: 'The first lesson costs nothing and ends with clear advice.' },
      { h3: 'A class that fits', p: 'Each group has five to ten UK learners progressing together.' },
      { h3: 'Twice a week', p: 'No lessons in school holidays.' },
      { h3: 'A fixed time', p: 'The UK clock changes are ours to handle.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Burnley learners at the same level and free at one time rarely live side by side. Online, each joins the right class.' }
  },

  fees: {
    h2: 'Burnley fees',
    intro: 'Burnley pays the international rate we charge outside India.',
    first: 'A full trial lesson, free, then our suggestion.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live private lessons a month; Copilot Studio agent courses are private only.',
    closer: 'We charge in US dollars, not pounds. Billing begins after the trial has chosen the course and a weekly time; see the pricing page for holidays, absences and moving between formats.'
  },

  reviewsH2: 'Lancashire and UK families review us on Google',

  book: {
    h2: 'Book a free Burnley lesson',
    intro: 'Tell us the learner\'s age or school year and something they enjoy. We could begin with a rules-and-consequences puzzle, a Scratch game built with AI, some first Python, or a table-tidying agent that must be kept safe.',
    success: 'Thank you. Your Burnley request has arrived.'
  },

  faq: {
    h2: 'Burnley questions',
    intro: 'AI agents, sandboxes, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Burnley?', a: 'The 2021 census counted 94,646 usual residents in Burnley borough; the ONS gives 78,255 for the Burnley built-up area.' },
      { q: 'Why do the towns not add up to the borough total?', a: 'Built-up areas only include built-up places, so about 2,486 residents live outside the five listed areas.' },
      { q: 'What is an AI agent sandbox?', a: 'A limited space where an agent can work on copies, with originals read-only and every change logged, so it cannot damage real data.' },
      { q: 'Do you teach vibe coding in Burnley?', a: 'We do. The AI writes a draft, and the Burnley learner stays responsible for reading it, running it and fixing it.' },
      { q: 'Can teenagers build AI agents with you?', a: 'Yes, after some Python; Copilot Studio agents are taught in private lessons.' },
      { q: 'Are lessons in person?', a: 'No. We teach only online.' },
      { q: 'Can you help at GCSE and A level?', a: 'Yes, for computer science and maths, working on understanding rather than promising a grade.' },
      { q: 'How old do learners need to be?', a: 'Anywhere between 6 and 67.' },
      { q: 'How much are lessons?', a: 'Trial: free. After that, USD 100 per month in a class or USD 150 per month privately.' },
      { q: 'Are school holidays lesson-free?', a: 'Yes; just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Lancashire and North West pages',
    html: 'Nearby, <a class="cg-inline-link" href="/ai-and-programming-classes-in-blackburn">Blackburn</a> and <a class="cg-inline-link" href="/best-coding-class-in-preston">Preston</a> have their own pages, and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-stockton-on-tees">Stockton-on-Tees</a> has another AI agent project. Lancashire-wide options are on <a class="cg-inline-link" href="/coding-classes-in-lancashire">our Lancashire page</a>, the region sits under <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> leads to the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Burnley and Lancashire',
  footerPlaces: [
    { href: '/coding-classes-in-lancashire', label: 'Lancashire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-brn .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-brn .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.03; }
.cg-root.cg-brn .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-brn .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-brn .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-brn .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-brn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-brn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-brn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-brn .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Burnley (E07000117). Nomis Census 2021 TS001 94,646. TS007A: 0 to 4 5,760 (6.1%, England 5.4%); 5 to 9 6,174 (6.5%, 5.9%); 10 to 14 6,278 (6.6%, 6.0%); 20 to 24 5,171 (5.5%, 6.0%); 80 to 84 2,148 (2.3%, 2.5%); 85 and over 1,879 (2.0%, 2.4%). ONS 2021 BUAs: Burnley 78,255; Padiham 10,125; Hapton 2,240; Worsthorne 970; Cliviger 570 (sum 92,160).',
    localProject: 'Instruction "make the parts add up to the total": full access overwrites 94,646 with 92,160 (2,486 people removed) or scales parts by 1.027; sandbox (read-only original, write copy, audit log, published figures locked, human approval) proposes a derived row "outside listed built-up areas 2,486"; read-only reports the gap. 2,486 = 2.6% of the borough. Lesson family: agent permissions, sandbox, read-only originals, audit log, approval.',
    requiredMentions: [
      '94,646',
      '78,255',
      'Padiham',
      'Hapton',
      'Worsthorne',
      'Cliviger',
      'sandbox',
      'audit log',
      'read-only'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS001 and TS007A, Burnley and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS, built-up areas, Census 2021.', url: 'https://www.ons.gov.uk/' }
    ],
    rejectedClaims: [
      'Where exactly the 2,486 people live: not analysed beyond "outside the listed built-up areas".',
      'Textile and football history: not read from a source; not claimed.',
      'Behaviour of any named commercial AI agent: not claimed; the agent is a learner-built demonstration.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
