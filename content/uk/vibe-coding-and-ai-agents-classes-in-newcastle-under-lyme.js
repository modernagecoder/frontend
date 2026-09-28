'use strict';
// Newcastle-under-Lyme (cg- town page, UK cluster Phase 8, towns band A, row 374). Keyword slug per the owner's rotation,
// with the 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when should an AI agent ask
// a clarifying question instead of guessing? The name itself is the test: "Newcastle" is ambiguous.
// Data (read 28 September 2026): Nomis API, Census 2021, one batched call per table for both districts, Newcastle upon
// Tyne (E08000021) and Newcastle-under-Lyme (E07000195): TS001 (NM_2021_1) usual residents 300,125 / 123,299; TS007A
// (NM_2020_1) aged 65 and over 44,515 (14.83%) / 26,738 (21.69%); TS045 (NM_2063_1) households with no car or van
// 44,961 of 122,795 (36.61%) / 10,374 of 53,423 (19.42%); TS061 (NM_2078_1) of residents 16+ in employment 125,077 /
// 56,683: work mainly at or from home 37,529 (30.00%) / 13,009 (22.95%); bicycle 2,883 (2.30%) / 606 (1.07%); train
// 794 (0.63%) / 219 (0.39%); motorcycle, scooter or moped 235 / 256; TS058 (NM_2075_1) of 125,078 / 56,682: less than
// 2km 14,494 (11.59%) / 6,608 (11.66%); 30km to less than 40km 596 / 608.
// Rule (ours): ask when the two readings differ by more than 1 percentage point (shares) or 10% (counts). Result: ask on
// 5 of 9 questions (residents, 65+, no car, from home, bicycle); answer without asking on 4 (under 2km, 30 to 40km,
// motorcycle 8.9%, train 0.24 points but 1.6 times). An agent that silently assumes the Tyneside reading is wrong for a
// Staffordshire user on those 5.
// Lesson family: clarifying questions for agents, ambiguity cost, decision threshold (absolute vs relative tolerance).
// Screened: clarifying 0 hits, "ask before" 0 hits. Middlesbrough owns gazetteer disambiguation by context and refusal;
// this page is about asking vs answering and whether the ambiguity changes the answer.
// Place facts: ONS 2021 BUAs (published) mainly inside Newcastle-under-Lyme: Newcastle-under-Lyme 76,505; Kidsgrove
// 15,595; Talke and Talke Pits 3,435; Madeley 3,290; Bignall End 3,185. Stoke-on-Trent BUA and Harriseahead, Mow Cop
// and Newchapel straddle; excluded. District TS001 123,299.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'NEWCASTLE-UNDER-LYME', label: 'Newcastle-under-Lyme', blurb: 'Vibe coding and AI agents classes for Newcastle-under-Lyme, with a project on when an AI agent should stop and ask which Newcastle you mean.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-newcastle-under-lyme',
  code: 'nul',
  accent: '#8A2267',
  accentRationale: 'Newcastle-under-Lyme: a glazed-pottery plum (6.75:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Newcastle-under-Lyme',
    eyebrow: 'Newcastle-under-Lyme, Staffordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Staffordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Staffordshire', href: '/coding-classes-in-staffordshire' },
    { label: 'Stoke-on-Trent', href: '/best-coding-class-in-stoke-on-trent' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Newcastle-under-Lyme, England',
  title: 'Vibe Coding and AI Agents Classes in Newcastle-under-Lyme',
  description: 'Online vibe coding, AI agents and Python classes for Newcastle-under-Lyme, Kidsgrove, Talke and Madeley learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online vibe coding and AI agents classes for Newcastle-under-Lyme, and a Python project on when an AI agent should ask a clarifying question.',
  twitterDescription: 'Newcastle-under-Lyme vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Newcastle-under-Lyme',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Newcastle-under-Lyme and north Staffordshire, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Newcastle-under-Lyme',
  capsuleQ: 'Where can Newcastle-under-Lyme learners find the best vibe coding and AI agents classes?',
  capsule: 'Newcastle-under-Lyme borough counted 123,299 usual residents at the 2021 census, and the ONS gives the town\'s built-up area 76,505 and Kidsgrove 15,595, with Talke and Talke Pits, Madeley and Bignall End also listed. Our tutors in India teach vibe coding, AI agents, Python, coding and maths over live video to borough residents from age 6 up to 67, either solo or with five to ten classmates working at the same level. Thinking skills come first, so learners who build with AI can also question it. The free opening lesson finishes with a course recommendation. Here the project asks a question every AI agent faces: when a request is ambiguous, should it guess or ask? Continuing afterwards costs USD 100 monthly as part of a class, or USD 150 monthly with a tutor to yourself.',
  lead: 'Type "how many people live in Newcastle?" into an AI assistant and it has to make a choice, because the name fits more than one English place. Two of them are Newcastle upon Tyne and Newcastle-under-Lyme, in north Staffordshire. A careless agent picks one and answers confidently. A careful agent asks which you mean. But an agent that asks about everything is exhausting to use. This project finds the line between the two in Python, using real 2021 census figures for both districts, and discovers that the ambiguity matters enormously for some questions and hardly at all for others.',
  wa: 'Hello Modern Age Coders, we would like a free vibe coding or AI lesson for a learner in Newcastle-under-Lyme.',

  picks: {
    eyebrow: 'Newcastle-under-Lyme course picks',
    h2: 'Courses that build thinking, vibe coding and agents',
    intro: 'Let age and enthusiasm guide the choice. A free live lesson starts every course, and we never ask for a card to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: spotting when a question has two meanings and asking the right follow-up.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps described to an AI, with the learner checking every result.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Vibe coding in Python and on the web, including the ask-or-answer agent from this page.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Language models, tools and AI agents, with safe behaviour designed in from the start.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The borough',
      h2: 'Newcastle-under-Lyme, Kidsgrove and the villages',
      intro: 'How many people the 2021 census found in each built-up area.',
      body: [
        { kind: 'table', caption: 'Borough built-up areas with 3,000 or more people, as published by the ONS for 2021', head: ['Built-up area', 'People (2021)'], rows: [
          ['Newcastle-under-Lyme', '76,505'],
          ['Kidsgrove', '15,595'],
          ['Talke and Talke Pits', '3,435'],
          ['Madeley', '3,290'],
          ['Bignall End', '3,185']
        ] },
        { kind: 'p', text: 'The rows are shown exactly as the ONS published them and are not added up, because the borough figure of 123,299 comes from a separate census table and many residents live outside these areas. Built-up areas that cross into Stoke-on-Trent are left out. Staffordshire schools follow the English national curriculum, and if you send us your holiday dates we keep those weeks clear of lessons.' },
        { kind: 'callout', h3: 'County, region and our approach', p: 'More options across the county are on <a class="cg-inline-link" href="/coding-classes-in-staffordshire">coding classes in Staffordshire</a>, and the wider area on <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">the West Midlands region page</a>. Why we teach judgement before prompting is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Newcastle-under-Lyme project',
      h2: 'Which Newcastle? Teaching an agent when to ask',
      intro: 'Answer nine census questions both ways, then decide which ones are worth a clarifying question.',
      body: [
        { kind: 'p', text: 'The learner fetches Census 2021 tables from the Nomis API for both districts at once: population, age, cars, travel to work and distance to work. Then comes the key step. For each question, the program works out the answer under both readings of "Newcastle" and compares them. If the two answers are close enough for the user\'s purpose, the agent can reply without asking, mentioning that both places give about the same figure. If they are far apart, a wrong guess would mislead, and the agent should ask a clarifying question first.' },
        { kind: 'table', caption: 'Nine questions about "Newcastle", Census 2021 figures for each district via Nomis, our comparison, 28 September 2026', head: ['Question', 'Newcastle upon Tyne', 'Newcastle-under-Lyme', 'Ask first?'], rows: [
          ['Usual residents', '300,125', '123,299', 'Yes'],
          ['Share of residents aged 65 and over', '14.83%', '21.69%', 'Yes'],
          ['Share of households with no car or van', '36.61%', '19.42%', 'Yes'],
          ['Share of workers mainly at or from home', '30.00%', '22.95%', 'Yes'],
          ['Share of workers cycling to work', '2.30%', '1.07%', 'Yes'],
          ['Share of workers by train', '0.63%', '0.39%', 'Depends on the rule'],
          ['Share of workers travelling under 2 km', '11.59%', '11.66%', 'No'],
          ['Workers travelling 30 to 40 km', '596', '608', 'No'],
          ['Workers going by motorcycle, scooter or moped', '235', '256', 'No']
        ] },
        { kind: 'p', text: 'Our rule was to ask when two shares differ by more than one percentage point, or two counts by more than 10%. Five of the nine questions need a clarifying question. The contrast is sharp: 36.61% of households in Newcastle upon Tyne have no car or van, against 19.42% in Newcastle-under-Lyme, so an agent that silently assumed the Tyneside reading would give a Staffordshire user an answer almost twice too high. Four questions barely depend on which town is meant. About 11.6% of workers in both places travel less than 2 km, and the counts for 30 to 40 km commutes are 596 and 608.' },
        { kind: 'p', text: 'The train question shows why the rule itself is a design decision. The two shares, 0.63% and 0.39%, are only 0.24 percentage points apart, so the absolute rule says answer. Yet one is about 1.6 times the other, so a relative rule says ask. Neither is wrong; it depends on what the user will do with the number. The motorcycle counts, 235 and 256, differ by 8.9%, just inside our 10% line. Small census counts also carry deliberate tiny adjustments that the ONS adds to protect privacy, so a close call on small numbers deserves a note either way.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Find words and questions with two meanings, and practise asking one good follow-up question.' },
          { h3: 'Ages 11 to 15', p: 'Fetch figures for both towns in Python and print which questions give different answers.' },
          { h3: 'Ages 15 and up', p: 'Code the ask-or-answer rule, test absolute against relative tolerance and justify the choice.' }
        ] },
        { kind: 'callout', h3: 'Census figures, our rule', p: 'Every number in the table is a Census 2021 figure from the Office for National Statistics, read through Nomis. The percentages, the tolerance rule and the ask-or-answer decisions are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that ask',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Good agents check in at the right moments, and only then.',
      body: [
        { kind: 'table', caption: 'The ask-or-answer rule in everyday AI use', head: ['In the Newcastle project', 'In vibe coding and agents'], rows: [
          ['Two towns share one name', 'A request can mean two different programs'],
          ['Answers far apart: ask', 'Ask when a wrong guess would cost real work'],
          ['Answers close: reply and note it', 'Proceed, but state the assumption made'],
          ['The tolerance is a choice', 'Decide in advance how precise the task must be'],
          ['Small counts carry noise', 'Near a threshold, say so rather than sounding sure']
        ] },
        { kind: 'p', text: 'Vibe coding, where a learner describes what they want and an AI writes the code, runs into this constantly. "Make the score go up faster" could mean several things, and the AI will usually pick one without saying so. Learners who have built the Newcastle rule start adding the missing detail to their own requests, and they notice when an assistant has quietly assumed something. For AI agents, which act on their own over many steps, asking at the right moment matters even more. Agent building starts in Python for older teenagers and adults, while Copilot Studio agents are only taught in private lessons. Two pages go deeper: the <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">UK student course on AI agents</a> and our guide, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither the ONS nor Nomis is connected with Modern Age Coders. The census counts belong to them; the comparisons and the rule built on top, including any mistakes, belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From two-meaning puzzles to careful agents',
    intro: 'The school year is a rough guide; the free lesson decides the actual starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Logic, puzzles and noticing when a question could mean two things.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and apps made with AI, each one tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and agents', p: 'Data, rules and simple agents, studied alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Building agents', p: 'Tools, planning, clarifying questions and safe agent design in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and ambiguity',
    h2: 'Should an AI guess or ask?',
    intro: 'Ask when the guess could change the answer; otherwise say what was assumed.',
    p1: 'An assistant that answered the car question for the wrong Newcastle would sound just as confident as one that got it right. The words give no warning; only the check does.',
    p2: 'Learners who have measured where the two Newcastles differ learn to spot hidden assumptions in AI answers, and to give tools the detail they need up front.',
    closer: 'Judging when a machine ought to check with you is a skill Newcastle-under-Lyme teenagers can build now, and it is a big part of why coding is worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Kidsgrove to Madeley, online',
    intro: 'Every home in the borough with a computer and decent broadband can join.',
    cells: [
      { h3: 'Learner-led screens', p: 'All the typing, prompting and running is done by the student, while the tutor keeps an eye on their screen and steers with questions.' },
      { h3: 'Placed by the trial', p: 'A Year 5 or a Year 12 starts at the point the free lesson shows, with any exam board in mind.' },
      { h3: 'Start free', p: 'The first lesson is on us, and we finish it with a suggested course.' },
      { h3: 'Level-matched classes', p: 'Five to ten UK learners at one stage learn together.' },
      { h3: 'Two a week', p: 'Lessons break for the school holidays.' },
      { h3: 'Unmoving times', p: 'Tutors adjust for British Summer Time, so your lesson keeps its hour.' }
    ],
    spec: { title: 'Why the classes are online', p: 'Five north Staffordshire learners at the same level, all free on the same evening, are unlikely to be neighbours. Online, they can still be classmates.' }
  },

  fees: {
    h2: 'Newcastle-under-Lyme fees',
    intro: 'Learners here pay our international fee, the same in every country outside India.',
    first: 'The whole first lesson at no charge, ending with a course suggestion.',
    group: 'Roughly eight live group lessons per month.',
    private: 'Roughly eight live private lessons per month.',
    closer: 'We bill in US dollars, not sterling, and only once the free lesson has settled a course and a regular weekly time. Breaks, missed lessons and switching between group and private are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from Staffordshire families and across the UK',

  book: {
    h2: 'Book a free Newcastle-under-Lyme lesson',
    intro: 'Just give us an age or school year and a hobby or two. For the trial we might solve riddles with double meanings, build a Scratch game alongside an AI, write some first Python, or sketch an agent that checks before acting.',
    success: 'Thank you. Your Newcastle-under-Lyme request is with us.'
  },

  faq: {
    h2: 'Newcastle-under-Lyme questions',
    intro: 'Answers on the Newcastle agent project, vibe coding, agents, fees and timings.',
    items: [
      { q: 'What is the population of Newcastle-under-Lyme?', a: 'The ONS gives 76,505 for the town\'s built-up area and 123,299 usual residents for the borough at the 2021 census.' },
      { q: 'Do you teach vibe coding in Newcastle-under-Lyme?', a: 'Yes, live online for children, teenagers and adults, with the learner planning the program and testing whatever the AI writes.' },
      { q: 'Can learners here study AI agents?', a: 'Yes, after some Python, typically from the later teenage years onwards; Copilot Studio agent lessons are private only.' },
      { q: 'What is the clarifying question project?', a: 'Learners compare census answers for both Newcastles and code a rule that makes an agent ask which one you mean only when it changes the answer.' },
      { q: 'I am in Newcastle upon Tyne. Is there a page for me?', a: 'Yes. Our Newcastle upon Tyne page is linked at the bottom of this page, and the lessons are the same live online classes.' },
      { q: 'Do you hold lessons in person?', a: 'No. Every lesson is live and online.' },
      { q: 'What about exam years?', a: 'GCSE and A level computer science and maths are covered; we teach for understanding and give no grade guarantees.' },
      { q: 'Which ages can join?', a: 'Anyone from 6 to 67.' },
      { q: 'What are the fees?', a: 'Nothing for lesson one; from then on, USD 100 each month in a class or USD 150 each month for solo teaching.' },
      { q: 'Do you pause for school holidays?', a: 'Yes. Tell us your dates and we will skip those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Staffordshire pages, and the other Newcastle',
    html: 'Right next door, <a class="cg-inline-link" href="/best-coding-class-in-stoke-on-trent">Stoke-on-Trent</a> has its own page, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-stafford">Stafford</a> runs a different project. If you were looking for the city on the Tyne, <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> is the page you want. Every area we cover is reachable from <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">our UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newcastle-under-Lyme and Staffordshire',
  footerPlaces: [
    { href: '/coding-classes-in-staffordshire', label: 'Staffordshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-nul .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-nul .cg-hero h1 { font-weight: 740; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-nul .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-nul .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nul .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-nul .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-nul .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nul .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-nul .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-nul .cg-callout { border-left-width: 5px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Newcastle-under-Lyme (E07000195), Census 2021 TS001 usual residents 123,299. ONS 2021 BUAs (published): Newcastle-under-Lyme 76,505; Kidsgrove 15,595; Talke and Talke Pits 3,435; Madeley 3,290; Bignall End 3,185. Stoke-on-Trent and Harriseahead, Mow Cop and Newchapel straddle; excluded.',
    localProject: 'Nomis Census 2021, Newcastle upon Tyne E08000021 vs Newcastle-under-Lyme E07000195: residents 300,125 / 123,299; 65+ 14.83% / 21.69%; no car 36.61% / 19.42%; from home 30.00% / 22.95%; bicycle 2.30% / 1.07%; train 0.63% / 0.39%; under 2 km 11.59% / 11.66%; 30 to 40 km 596 / 608; motorcycle 235 / 256. Rule: ask if shares differ > 1 point or counts > 10%: ask on 5 of 9. Lesson family: clarifying questions, ambiguity cost, tolerance design.',
    requiredMentions: [
      '123,299',
      '76,505',
      '15,595',
      'Kidsgrove',
      'Talke',
      'Bignall End',
      'clarifying question',
      'Newcastle upon Tyne',
      'motorcycle'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS001, TS007A, TS045, TS058 and TS061 for Newcastle upon Tyne and Newcastle-under-Lyme, via the Nomis API.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS, cell key perturbation applied to Census 2021 counts to protect confidentiality.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/methodologies/protectingpersonaldataincensus2021results' }
    ],
    rejectedClaims: [
      'Why the two districts differ on cars, age or home working: not measured; not claimed.',
      'Keele University or any named institution: not read; not named.',
      'Pottery or mining history: not read from a source; not claimed.',
      'Sum of the five built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
