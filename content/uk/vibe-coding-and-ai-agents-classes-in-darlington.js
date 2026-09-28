'use strict';
// Darlington (cg- town page, UK cluster Phase 8, towns band A, row 362). Third page in the owner's 2026-09-28
// vibe-coding-and-ai-agents-classes-in-* rotation. Spine: how should an AI agent check its own answers when official
// sources disagree slightly? Anchors (read 28 September 2026): Nomis Census 2021 TS001 (NM_2021_1) Darlington usual residents
// 107,799; TS007A (NM_2020_1) total 107,801, and its 18 age bands sum to exactly 107,801; our sum of the 372 output areas
// (scratchpad p7/county.py) 107,815. ONS methodology "Protecting personal data in Census 2021 results" (read raw): cell key
// perturbation; "The noise can be positive or negative and, across a dataset, should approximately balance out. However,
// the randomness may mean small changes to totals. Where two or more different datasets are constructed, the totals of all
// cells may in turn be different." Share aged 65 and over: 22,040 / 107,801 = 20.4451% (same table) vs 22,040 / 107,799 =
// 20.4455% (mixed tables). Colour quote: Smiles, Project Gutenberg 46229, "Tuesday, the 27th of September, 1825, was a great
// day for Darlington."
// Lesson family: agent self-check / verification loop with a tolerance, stopping rule, never mixing tables in one ratio,
// citing the publisher's explanation. Screened: self-check, verification loop, tolerance, cell key perturbation 0 hits
// (Basildon noted an OA-sum mismatch only as a trap; West Bromwich owns straddling areas).
// Place facts: TS007A, Darlington E06000005: 20 to 24 5,426 (5.0%; England 6.0%); 25 to 29 6,379 (5.9%; 6.6%); 55 to 59
// 7,855 (7.3%; 6.7%); 60 to 64 7,004 (6.5%; 5.8%); 65 to 69 5,958 (5.5%; 4.9%); 80 to 84 3,121 (2.9%; 2.5%). ONS 2021 BUAs:
// Darlington 93,015; Middleton St George 4,755; Hurworth-on-Tees 2,665; Heighington 1,545.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'DARLINGTON', label: 'Darlington', blurb: 'Vibe coding and AI agents classes for Darlington, with a project that teaches an AI agent to check its own answers when official figures disagree.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-darlington',
  code: 'dar',
  accent: '#10166B',
  accentRationale: 'Darlington: a deep railway-livery navy (12.54:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Darlington',
    eyebrow: 'Darlington, County Durham, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Durham' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-east-england', name: 'North East England' }],
  nav: [
    { label: 'County Durham', href: '/coding-classes-in-county-durham' },
    { label: 'North East', href: '/coding-and-ai-classes-in-north-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Darlington, England',
  title: 'Vibe Coding and AI Agents Classes in Darlington | 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for Darlington, Middleton St George and Hurworth learners aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Darlington, live online, with a project that teaches an AI agent to check itself when official figures disagree.',
  twitterDescription: 'Darlington vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Darlington',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Darlington, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Darlington',
  capsuleQ: 'Where can Darlington learners find the best vibe coding and AI agents classes?',
  capsule: 'Darlington borough had 107,799 usual residents at the 2021 census, and the ONS gives 93,015 for the Darlington built-up area, with Middleton St George, Hurworth-on-Tees and Heighington among the smaller places. People aged 55 to 69 are more common than across England, and people in their twenties less so. Whether a learner is six or sixty-seven, from Hurworth or from the town centre, they can study vibe coding, AI agents, Python, coding and maths over live video with our India-based tutors, privately or with five to ten classmates at the same stage. Vibe coding means asking an AI to write code from a plain description; an AI agent goes further and uses tools by itself. We teach both with thinking first. Nothing is charged for the trial; carrying on means USD 100 monthly in a shared class or USD 150 monthly with a personal tutor.',
  lead: '"Tuesday, the 27th of September, 1825, was a great day for Darlington," wrote Samuel Smiles of the opening of the railway there. Today the town offers a very modern puzzle. Ask how many people live in Darlington borough and the official census tables give three slightly different answers: 107,799 in one table, 107,801 in another, and 107,815 if you add up the smallest census areas. None of them is a mistake. Our Darlington project builds an AI agent that answers questions from these tables, and teaches it the skill every trustworthy agent needs: checking its own work, knowing how much disagreement is acceptable, and explaining it instead of guessing or looping forever.',
  wa: 'Hello Modern Age Coders, please could we book a free vibe coding or AI agents lesson for a Darlington learner?',

  picks: {
    eyebrow: 'Darlington course picks',
    h2: 'Vibe coding, AI agents and how-to-think courses',
    intro: 'Start from how old the learner is and what grabs them. A free live session comes before anything else, and booking it takes no payment card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: checking answers, logic and careful steps.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games first, then small apps built by talking to AI and testing them.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects for teenagers, including the self-checking agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Language models, retrieval and AI agents, built and evaluated in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Darlington borough',
      h2: 'Fewer twenty-somethings, more people near retirement',
      intro: 'Six census age bands for Darlington from Nomis, set beside England.',
      body: [
        { kind: 'table', caption: 'Darlington and England, six age bands (TS007A, 2021)', head: ['Age band', 'Darlington residents', 'Darlington share', 'England share'], rows: [
          ['20 to 24', '5,426', '5.0%', '6.0%'],
          ['25 to 29', '6,379', '5.9%', '6.6%'],
          ['55 to 59', '7,855', '7.3%', '6.7%'],
          ['60 to 64', '7,004', '6.5%', '5.8%'],
          ['65 to 69', '5,958', '5.5%', '4.9%'],
          ['80 to 84', '3,121', '2.9%', '2.5%']
        ] },
        { kind: 'p', text: 'The early twenties are a full point below England while the early sixties are 0.7 points above. Alongside the main town, the ONS lists Middleton St George at 4,755, Hurworth-on-Tees at 2,665 and Heighington at 1,545 as built-up areas in the borough. Local schools work to the English national curriculum, and we simply skip the half-term and holiday weeks you send us.' },
        { kind: 'callout', h3: 'Thinking first', p: 'Our <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a> page explains why every learner builds reasoning skills before relying on AI. The county page is <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Darlington project',
      h2: 'An AI agent that checks its own answers',
      intro: 'Give the agent several census tools, let them disagree, and design how it should respond.',
      body: [
        { kind: 'p', text: 'The learner vibe codes a small agent with three tools. One returns the borough total from the census population table. One returns the eighteen age bands from the age table. One adds up the population of Darlington\'s 372 output areas, the smallest census building blocks. The first version answers "How many people live in Darlington?" by calling whichever tool it thinks of first. Asked twice with slightly different wording, it can give 107,799 one time and 107,801 the next. Neither answer is wrong, but an agent that changes its answer without saying why is hard to trust.' },
        { kind: 'table', caption: 'Darlington borough population from three official routes, Census 2021, our Python run, 28 September 2026', head: ['Tool', 'Source', 'Total'], rows: [
          ['Population table', 'TS001 usual residents', '107,799'],
          ['Age table', 'TS007A, sum of 18 bands', '107,801'],
          ['Smallest areas added up', '372 output areas', '107,815'],
          ['Largest gap', 'Output areas against TS001', '16 people, about 0.015%']
        ] },
        { kind: 'p', text: 'So the learner adds a verification loop: call two tools, compare, and only answer if they agree. The loop never ends, because they never agree exactly. The reason is published by the ONS itself. To protect privacy, census tables have small random noise added, and "the randomness may mean small changes to totals. Where two or more different datasets are constructed, the totals of all cells may in turn be different." The fix has three parts. The agent accepts a difference below a tolerance, here 0.1 percent. It stops after a fixed number of checks. And it reports the official headline figure, 107,799, with a short note explaining the others.' },
        { kind: 'p', text: 'One more rule comes out of it. Asked what share of Darlington is aged 65 and over, a careless agent divides the age table\'s 22,040 older residents by the population table\'s 107,799, mixing two tables with different noise, and gets 20.4455 percent. Using the age table for both numerator and denominator gives 20.4451 percent. The difference is tiny, but the principle matters: a ratio should come from one consistent source. The learner writes that rule into the agent\'s instructions and tests it on another borough where the tables differ more.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Count the class two different ways and decide how close is close enough.' },
          { h3: 'Ages 11 to 15', p: 'Ask an AI to help write a two-number checker, then test it with cases you designed.' },
          { h3: 'Ages 15 and up', p: 'Assemble the census agent, then tune its tolerance and check limit on other boroughs.' }
        ] },
        { kind: 'callout', h3: 'ONS figures and words, our agent', p: 'Population figures come from Census 2021 tables on Nomis and ONS output area data; the quoted explanation is from the ONS methodology on protecting personal data in Census 2021 results. The agent and its rules are our own work.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'What makes an AI agent trustworthy',
      intro: 'Rules the Darlington agent needed, and why every agent needs them.',
      body: [
        { kind: 'table', caption: 'Rules the learner adds to the Darlington agent', head: ['Problem', 'Rule the agent follows'], rows: [
          ['Tools disagree slightly', 'Accept gaps under a stated tolerance'],
          ['Checking never finishes', 'Stop after a fixed number of checks'],
          ['Several correct-looking totals', 'Give the official headline figure, note the others'],
          ['Ratios from mixed tables', 'Take numerator and denominator from one source'],
          ['User asks why', 'Quote the publisher\'s own explanation']
        ] },
        { kind: 'p', text: 'Vibe coding makes it quick to build an agent like this, and just as quick to build one that loops forever or quietly changes its answers. So we sequence it: children practise checking and reasoning in the how-to-think programme, teenagers vibe code projects that must pass their own tests, and older students and adults write Python agents with tolerances, stopping rules and sources. Anything on Copilot Studio is taught in one-to-one sessions. Two pages go deeper: <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teenagers</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">building AI agents as a UK student</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Office for National Statistics or Nomis. Their figures and words are theirs; the agent and any error in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From checking sums to trustworthy agents',
    intro: 'A school year is a starting point; the free lesson finds the right level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Checking answers, logic and careful steps.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps made with AI help, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, data and AI', p: 'Data handling and AI projects beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Adults', h3: 'Building AI agents', p: 'Agents with tools, checks and citations, in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and trust',
    h2: 'Would your AI agent loop forever?',
    intro: 'Without a tolerance and a stopping rule, it might.',
    p1: 'The Darlington agent was right every time and still behaved badly: changing its answer between runs, then checking endlessly for an agreement that could never come.',
    p2: 'A learner who has fixed that with a tolerance, a stopping rule and a cited explanation knows what separates a demo from an agent people can rely on.',
    closer: 'Darlington teenagers who can build an AI agent that checks itself sensibly will be trusted with real tools, which is why learning to code still matters in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Middleton St George to Heighington, online',
    intro: 'All a Darlington home needs is a computer and a dependable internet connection.',
    cells: [
      { h3: 'Their prompts, their code', p: 'The learner writes everything, and the tutor, seeing the same screen, steps in with a question rather than a fix.' },
      { h3: 'Right level from the start', p: 'Whether Year 4 or Year 13, the free lesson decides where to begin, with the exam board in mind.' },
      { h3: 'Try before paying', p: 'The opening lesson is free and closes with advice on which course fits.' },
      { h3: 'Same-level groups', p: 'Five to ten UK learners at a similar stage.' },
      { h3: 'Two a week', p: 'Nothing scheduled in school holidays.' },
      { h3: 'Steady UK time', p: 'Tutors move with the clock changes so your slot holds.' }
    ],
    spec: { title: 'Why online groups', p: 'Five Darlington learners at the same level, free at the same hour, seldom live side by side. Online, each joins a class that suits them.' }
  },

  fees: {
    h2: 'Darlington fees',
    intro: 'Our fee for Darlington is the international one, identical in every country apart from India.',
    first: 'A whole trial lesson at no charge, then a suggested course.',
    group: 'Roughly eight live small-group lessons a month.',
    private: 'Roughly eight live one-to-one lessons a month; Copilot Studio agents are one-to-one only.',
    closer: 'Fees are in US dollars, not sterling. Nothing is billed until the trial has chosen a course and a weekly slot, and the pricing page covers holidays, absences and switching format.'
  },

  reviewsH2: 'Reviews on Google from North East families and beyond',

  book: {
    h2: 'Book a free Darlington lesson',
    intro: 'A line about the learner\'s age or school year and what they like is plenty. The trial could be a spot-the-error puzzle, an AI-assisted Scratch game, some first Python, or a mini agent that double-checks itself.',
    success: 'Thank you. The Darlington request has reached us.'
  },

  faq: {
    h2: 'Darlington questions',
    intro: 'AI agents, vibe coding, the census project and practical details.',
    items: [
      { q: 'What is the population of Darlington?', a: 'The 2021 census counted 107,799 usual residents in Darlington borough; the ONS gives 93,015 for the Darlington built-up area.' },
      { q: 'Why do census tables give slightly different totals?', a: 'The ONS adds small random noise to protect privacy, so totals built from different tables can differ a little.' },
      { q: 'Do you teach vibe coding in Darlington?', a: 'Yes, live online for all ages, with learners planning, reading and testing whatever the AI writes.' },
      { q: 'At what age can someone start building AI agents?', a: 'Yes, once they know some Python; Copilot Studio agent courses are taught one-to-one only.' },
      { q: 'What is the self-checking agent project?', a: 'Learners build an agent with three census tools, add a tolerance and a stopping rule, and make it explain small disagreements.' },
      { q: 'Do you teach face to face in Darlington?', a: 'No; the teaching happens entirely over live video.' },
      { q: 'Is there help for GCSE and A level students?', a: 'Yes, across computer science and maths. We work on understanding and make no promises about grades.' },
      { q: 'Is there an age limit?', a: 'We teach learners from 6 up to 67.' },
      { q: 'How much are lessons?', a: 'The first lesson is free; then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons pause in school holidays?', a: 'Yes; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Neighbouring pages',
    html: 'The cathedral city of <a class="cg-inline-link" href="/best-coding-class-in-durham">Durham</a> and Teesside\'s <a class="cg-inline-link" href="/ai-and-programming-classes-in-middlesbrough">Middlesbrough</a> each have a page. For the whole county there is <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a>, for the region <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East England</a>, and our <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> connects them all.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'Darlington and County Durham',
  footerPlaces: [
    { href: '/coding-classes-in-county-durham', label: 'County Durham' },
    { href: '/coding-and-ai-classes-in-north-east-england', label: 'North East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-dar .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-dar .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.03; }
.cg-root.cg-dar .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-dar .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dar .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-dar .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-dar .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dar .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-dar .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-dar .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Darlington (E06000005). Nomis Census 2021 TS001 usual residents 107,799; TS007A total 107,801 (bands sum 107,801); OA sum 107,815 (372 OAs). TS007A: 20 to 24 5,426 (5.0%, England 6.0%); 25 to 29 6,379 (5.9%, 6.6%); 55 to 59 7,855 (7.3%, 6.7%); 60 to 64 7,004 (6.5%, 5.8%); 65 to 69 5,958 (5.5%, 4.9%); 80 to 84 3,121 (2.9%, 2.5%); 65 and over 22,040. ONS 2021 BUAs: Darlington 93,015; Middleton St George 4,755; Hurworth-on-Tees 2,665; Heighington 1,545. ONS, Protecting personal data in Census 2021 results: "the randomness may mean small changes to totals. Where two or more different datasets are constructed, the totals of all cells may in turn be different." Smiles (Gutenberg 46229): "Tuesday, the 27th of September, 1825, was a great day for Darlington."',
    localProject: 'Three-tool agent: TS001 107,799; TS007A 107,801; OA sum 107,815 (max gap 16, 0.015%). Naive: answers vary by run; exact-match verification loops forever. Fix: tolerance 0.1%, stop after N checks, headline figure + note, cite ONS. 65+ share 20.4451% (same table) vs 20.4455% (mixed). Lesson family: agent self-check / verification loop, tolerance, stopping rule, consistent-source ratios.',
    requiredMentions: [
      '107,799',
      '107,815',
      '93,015',
      'Middleton St George',
      'Hurworth-on-Tees',
      'Heighington',
      'verification loop',
      'tolerance',
      'stopping rule'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS001 and TS007A, Darlington and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 output area populations and built-up area lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS methodology, Protecting personal data in Census 2021 results.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/methodologies/protectingpersonaldataincensus2021results' },
      { claim: 'Project Gutenberg, Samuel Smiles, The Life of George Stephenson (ebook 46229).', url: 'https://www.gutenberg.org/ebooks/46229' }
    ],
    rejectedClaims: [
      'Railway history beyond Smiles\'s one sentence: owned by the County Durham page; not repeated.',
      'Why the output-area sum differs from TS001 by exactly 16: not explained by the ONS page beyond the general method; not claimed.',
      'The 0.1% tolerance is our teaching choice, not an ONS rule.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
