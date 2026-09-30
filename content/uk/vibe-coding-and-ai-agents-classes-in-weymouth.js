'use strict';
// Weymouth (cg- town page, UK cluster Phase 10, towns band B, row 490). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: how good is an agent's answer if you stop it early?
// (anytime algorithm: an answer is always ready, it improves with budget, and the gains flatten.)
// Data (read 30 September 2026): ONS OA21 to BUA22 lookup and ONS population-weighted centroids (British National Grid)
// for the 192 output areas of the Weymouth built-up area in Dorset (E06000059); Nomis Census 2021 TS017 totals: 25,576
// households in those areas.
// Our run (scratchpad wym/any.py): closed loop through all 192 centroids, straight-line distance. Start = areas in code
// order, 135.5 km. One "try" = pick two positions at random, reverse the stretch between them, keep it only if shorter.
// Median loop length over 5 seeds after N tries: 100: 134.3 km; 1,000: 118.6; 3,000: 99.4; 10,000: 75.2; 30,000: 59.0;
// 100,000: 51.4; 300,000: 51.4; 1,000,000: 51.4. Last improving try in the five runs fell between try 93,887 and try
// 162,402; final lengths 50.3 to 55.9 km. Nearest-unvisited-stop route from the first area: 64.0 km. 300,000 tries took
// about 2 seconds on our laptop (1.87 to 2.19 s).
// Lesson family: anytime algorithm (answer quality against budget, interruptibility, diminishing returns, stopping rule).
// Screened: "anytime algorithm" 0 hits in content/; claimed in claims.txt. Dorset county page = exponential decay and
// float underflow; Poole = number partitioning; Bournemouth has its own family. Route improvement by reversal is used as
// the vehicle only; the lesson is the budget curve, and the page does not teach tour construction.
// Place facts: Dorset TS001 379,579. ONS 2021 BUA (published): Weymouth 55,535. postcodes.io (Dorset) suburban areas:
// Wyke Regis, Radipole, Westham, Melcombe Regis, Southill, Rodwell (DT4); Upwey, Broadwey, Littlemoor, Preston, Sutton
// Poyntz (DT3).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WEYMOUTH', label: 'Weymouth', blurb: 'Vibe coding and AI agents classes for Weymouth, with a project that stops a route-planning agent early and measures how good its answer already is.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-weymouth',
  code: 'wym',
  accent: '#1A5FA0',
  accentRationale: 'Weymouth: a clear harbour blue (6.59:1 contrast), chosen by hand to stand apart from recent accents',
  pageType: 'city',
  place: {
    name: 'Weymouth',
    eyebrow: 'Weymouth, Dorset, South West England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dorset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Dorset', href: '/coding-classes-in-dorset' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Weymouth, Dorset',
  title: 'Vibe Coding and AI Agents Classes in Weymouth | Ages 6 to 67',
  description: 'Vibe coding, AI agents, Python and coding lessons, live online for Weymouth, Wyke Regis, Radipole and Upwey learners aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Weymouth, with an anytime algorithm project on a route through 192 census areas.',
  twitterDescription: 'Weymouth vibe coding, AI agents and Python classes online for ages 6 to 67. Try a lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Weymouth',
    description: 'Online vibe coding, AI agents, Python and maths for children, teenagers and adults in Weymouth and Dorset, taught live with projects that measure how programs behave.'
  },

  h1: 'Vibe coding and AI agents classes in Weymouth',
  capsuleQ: 'Where can Weymouth learners find the best vibe coding and AI agents classes?',
  capsule: 'Weymouth\'s built-up area held 55,535 people at the 2021 census on the ONS count. Wyke Regis, Radipole, Westham, Melcombe Regis, Upwey, Broadwey, Littlemoor and Sutton Poyntz are all recorded as suburbs in the DT3 and DT4 districts. We teach vibe coding, AI agents, Python, coding and maths to people there aged six through 67. Each lesson is a live call with a tutor based in India, taken solo or alongside five to ten others at a similar stage. Our teaching aim is a learner who can judge an AI\'s work, not only request it. The first lesson is on us, and it closes with a course suggestion. For the Weymouth project, a simple planning agent draws a loop through 192 census areas, and the learner interrupts it at different moments to see how good the answer is each time. Afterwards the monthly fee is USD 100 in a group, or USD 150 for lessons on your own.',
  lead: 'Ask an AI agent to plan something and you face a choice nobody mentions: how long to let it think. Some programs give nothing useful until they finish. Others are built so that a usable answer exists at every moment and simply gets better the longer they run. Computer scientists call the second kind an anytime algorithm. It suits agents well, because an agent usually works under a budget of time, money or patience. The catch is that improvement is never steady. It is fast at first, then slow, then it stops. This project draws that curve for a route around Weymouth and asks where a sensible agent should call a halt.',
  wa: 'Hello Modern Age Coders, please could you arrange a free vibe coding or AI agents lesson? We live in Weymouth.',

  picks: {
    eyebrow: 'Courses for Weymouth',
    h2: 'Pick a Weymouth starting point by age',
    intro: 'All four begin the same way: a live lesson with a tutor, free of charge, and no card to enter.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding in Scratch: say what the game should do, try the AI\'s version, improve it step by step.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Learning how to think: good-enough answers, better answers, and knowing when to stop.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects built with AI assistance, including the Weymouth route experiment.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Generative AI and agents in Python, with attention to cost, time limits and checking results.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town',
      h2: 'Weymouth, Wyke Regis, Radipole and Upwey',
      intro: 'Two census counts and the suburb names in the postcode gazetteer.',
      body: [
        { kind: 'table', caption: 'Weymouth and Dorset in the 2021 census (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Weymouth built-up area', '55,535'],
          ['Dorset council area', '379,579']
        ] },
        { kind: 'p', text: 'The first row is the ONS built-up area and the second is the whole Dorset unitary authority; they are separate publications. In the postcodes.io gazetteer, Wyke Regis, Radipole, Westham, Melcombe Regis, Southill and Rodwell are suburban areas in DT4, and Upwey, Broadwey, Littlemoor, Preston and Sutton Poyntz are suburban areas in DT3. Weymouth pupils are on the English national curriculum, so we plan by school year, Year 2 through Year 13, and link lessons to GCSE or A level topics where that is wanted.' },
        { kind: 'callout', h3: 'Dorset and the South West', p: 'Related pages: <a class="cg-inline-link" href="/coding-classes-in-dorset">coding classes in Dorset</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-poole">Poole</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-bournemouth">Bournemouth</a>. For the thinking behind our approach, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Weymouth project',
      h2: 'An anytime algorithm: stop the agent and see what it has',
      intro: 'A loop through 192 areas that is always complete and keeps getting shorter, until it cannot.',
      body: [
        { kind: 'p', text: 'The ONS divides the Weymouth built-up area into 192 census output areas and publishes a centre point for each; our sum of the household counts for those areas is 25,576. The learner\'s agent must draw one closed loop that visits all 192 centres, measured in straight lines. It starts with the areas in the order of their codes, a route nobody planned, which is 135.5 km long. Then it repeats one small step: choose two positions in the loop at random, reverse the stretch between them, and keep the change only if the loop got shorter. Because every step leaves a complete loop, the agent can be stopped at any time and still hand over a valid route.' },
        { kind: 'table', caption: 'Loop length when the agent is stopped after a given number of tries, median of five runs, our Python experiment', head: ['Tries allowed', 'Loop length', 'Saved since the row above'], rows: [
          ['0', '135.5 km', 'start'],
          ['1,000', '118.6 km', '16.9 km'],
          ['10,000', '75.2 km', '43.4 km'],
          ['30,000', '59.0 km', '16.2 km'],
          ['100,000', '51.4 km', '7.6 km'],
          ['300,000', '51.4 km', '0 km'],
          ['1,000,000', '51.4 km', '0 km']
        ] },
        { kind: 'p', text: 'In the median run, the first 100,000 tries cut the loop from 135.5 km to 51.4 km and the next 900,000 left that figure unchanged. Single runs went on finding small gains a little longer: one stalled at try 93,887, and the last successful step in any of the five came at try 162,402. After that every agent was stuck on a route that no single reversal could shorten. The five runs did not end in the same place, either: their final loops ranged from 50.3 km to 55.9 km, because each had wandered into a different dead end. Running longer would not fix that. Starting again would.' },
        { kind: 'p', text: 'Two comparisons keep the result honest. A different, instant method, always walking to the closest area not yet visited, gives 64.0 km with no waiting; the anytime agent only beats that somewhere between 10,000 and 30,000 tries. And on our laptop 300,000 tries took about two seconds, so here patience is cheap. With an AI agent that pays for every step, the same curve decides real money. These are straight-line distances between area centres, not road journeys, and no route here is proved to be the shortest possible.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Untangle a string loop on a pinboard map of Weymouth one crossing at a time, measuring after each move.' },
          { h3: 'Ages 11 to 15', p: 'Code the reverse-and-keep step in Python and plot loop length against the number of tries.' },
          { h3: 'Ages 15 and up', p: 'Add a stopping rule and restarts, then compare the cost and quality of each budget.' }
        ] },
        { kind: 'callout', h3: 'Data and method', p: 'Area centres are ONS population-weighted centroids and household counts are Census 2021 figures from Nomis, both under the Open Government Licence. The loop, the tries and every length are our own calculation. The table shows the median of five runs with different random seeds.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents on a budget',
      h2: 'What an anytime algorithm teaches about AI agents',
      intro: 'Every agent is given some limit. The skill is spending it where it still buys something.',
      body: [
        { kind: 'table', caption: 'From the Weymouth loop to agent design', head: ['Seen in the experiment', 'Carried into vibe coding and agents'], rows: [
          ['A valid loop existed at every moment', 'Design agents that can be interrupted safely'],
          ['Most of the gain came early', 'A short run often gets most of the value'],
          ['Nothing improved after try 162,402', 'Detect a plateau and stop paying'],
          ['Five runs ended between 50.3 and 55.9 km', 'Several short runs can beat one long one'],
          ['An instant method gave 64.0 km', 'Compare against a cheap baseline first']
        ] },
        { kind: 'p', text: 'Vibe coding means steering an AI with plain-English requests while it writes the program. Left alone, an AI will happily write a loop that runs "until done" with no idea what done costs. Our Weymouth learners ask for three things whenever they prompt for an agent: a result it can return early, a log of how the result improved, and a rule for stopping. AI agents that plan, search or revise their own drafts behave like the route loop, improving quickly and then stalling. Full agent projects are for learners who already write Python confidently, mostly sixth formers and adults, and Copilot Studio agents are covered in one-to-one lessons only. Read more at <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no affiliation with the Office for National Statistics, Nomis or postcodes.io. Open data from each was used as published; the experiment and its conclusions are ours alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From string puzzles to budgeted AI agents',
    intro: 'We use school year as a rough guide and the trial lesson as the real test.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Improve an answer bit by bit and decide when it is good enough.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch projects made with an AI partner and tested by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding with Python', p: 'Web and Python builds, with experiments that measure the code.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI agents', p: 'Agents that plan, check themselves and stop on a rule.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and time',
    h2: 'What is an anytime algorithm, and how long should an AI agent run?',
    intro: 'An anytime algorithm is one that can be stopped at any point and still return a valid answer, with the answer improving the longer it runs; an agent should run until the improvement no longer justifies the cost.',
    p1: 'On a loop through 192 Weymouth census areas, 100,000 tries shortened the median route from 135.5 km to 51.4 km, and in five runs of 1,000,000 tries no gain of any size came after try 162,402.',
    p2: 'Having drawn that curve, a learner asks of any agent how its answer changed over time and what evidence says it should keep going.',
    closer: 'Weymouth teenagers who can set a budget for an agent and defend it are doing engineering, not just prompting, and that starts with code they wrote and measured.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In practice',
    h2: 'How lessons work from Weymouth',
    intro: 'Everything happens on a video call, so the only equipment is a computer, a camera and a reliable connection.',
    cells: [
      { h3: 'They build, we guide', p: 'The keyboard belongs to the learner. A tutor watches the shared screen, asks why, and steps in only when needed.' },
      { h3: 'A trial sets the level', p: 'One free session shows us what the learner already knows and which course should come next.' },
      { h3: 'Free to begin', p: 'There is no fee and no card for that session.' },
      { h3: 'Groups of five to ten', p: 'Learners from across the UK, grouped by what they can do and not by where they live.' },
      { h3: 'Twice a week', p: 'In school terms only; tell us the Dorset holiday dates and we skip them.' },
      { h3: 'Fixed UK hour', p: 'Your lesson stays at the same local time through both clock changes.' }
    ],
    spec: { title: 'Why a video call', p: 'One town cannot always fill a class at each level on each evening. Teaching online means a Weymouth learner joins the right group without waiting for one to form locally.' }
  },

  fees: {
    h2: 'Fees for Weymouth',
    intro: 'The fees below are our standard ones for learners outside India.',
    first: 'The whole first lesson is free and ends with a recommendation.',
    group: 'A place in a small class, about eight lessons monthly.',
    private: 'One learner with one tutor, about eight lessons monthly.',
    closer: 'We charge in US dollars and publish no pound price. Payment starts after the trial, when the course and the time of the week are settled. Holiday pauses, missed lessons and swapping format are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from Dorset households and learners around the UK',

  book: {
    h2: 'Arrange a free Weymouth lesson',
    intro: 'We need an age or year group and a hint of what the learner likes. From that we choose a trial: a string-loop puzzle, a vibe-coded Scratch game, some first Python, or a small agent that improves a route.',
    success: 'Thank you. We have received your Weymouth request.'
  },

  faq: {
    h2: 'Questions from Weymouth',
    intro: 'Anytime algorithms, the route project, vibe coding, agents and the practical details.',
    items: [
      { q: 'What is the population of Weymouth?', a: 'At the 2021 census the ONS counted 55,535 usual residents in the Weymouth built-up area. The Dorset council area had 379,579.' },
      { q: 'Can Weymouth learners take vibe coding and AI agents classes online?', a: 'Yes. We teach by live video to ages 6 to 67 in Weymouth, Wyke Regis, Radipole, Upwey and the rest of Dorset.' },
      { q: 'What is vibe coding?', a: 'It is building software by describing what you want to an AI in ordinary language, then reading, testing and correcting what it writes.' },
      { q: 'What is an AI agent?', a: 'An AI agent is a program that uses a language model to choose and carry out a series of steps towards a goal, often calling tools along the way.' },
      { q: 'What did the Weymouth project measure?', a: 'How the length of a loop through 192 census areas fell as the agent was allowed more tries: from 135.5 km to 51.4 km by 100,000 tries in the median run, with no run improving after try 162,402 of 1,000,000.' },
      { q: 'Why did the agent stop improving?', a: 'It reached a route that no single change of the kind it was allowed could shorten. Different runs got stuck at different lengths, from 50.3 km to 55.9 km.' },
      { q: 'What age is right for AI agents?', a: 'Agent projects need confident Python first, so they suit most learners from sixth form age. Copilot Studio agents are one-to-one only.' },
      { q: 'Do younger children do vibe coding too?', a: 'Yes, in Scratch from about eight, always with the child checking what the AI suggested.' },
      { q: 'How much do lessons cost?', a: 'After a free first lesson, USD 100 a month for a group or USD 150 a month for private lessons.' },
      { q: 'Are lessons held in the holidays?', a: 'No. We stop for school holidays when you send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere in Dorset',
    h2: 'More Dorset pages, each with its own experiment',
    html: 'Different towns, different projects: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-poole">Poole</a> (sharing out teams fairly), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-bournemouth">Bournemouth</a> and the county page for <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a>. Everything else is listed on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Weymouth and Dorset',
  footerPlaces: [
    { href: '/coding-classes-in-dorset', label: 'Dorset' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wym .cg-hero-grid { align-items: end; gap: clamp(1rem, 4vw, 3.25rem); }
.cg-root.cg-wym .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.07; }
.cg-root.cg-wym .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-wym .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-wym .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.018em; }
.cg-root.cg-wym .cg-table caption { font-weight: 500; text-align: left; font-size: 0.88rem; }
.cg-root.cg-wym .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wym .cg-table th { font-weight: 700; border-bottom: 1px solid var(--cg-accent); }
.cg-root.cg-wym .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-wym .cg-callout { border-radius: 14px 2px 14px 2px; }
`,

  dossier: {
    curriculumAuthority: 'Dorset (E06000059), Census 2021 TS001 usual residents 379,579. ONS 2021 BUA (published): Weymouth 55,535. English national curriculum, GCSE and A level. postcodes.io (Dorset) suburban areas: Wyke Regis, Radipole, Westham, Melcombe Regis, Southill, Rodwell (DT4); Upwey, Broadwey, Littlemoor, Preston, Sutton Poyntz (DT3).',
    localProject: 'Closed loop through the 192 ONS population-weighted centroids of the Weymouth BUA (our sum of OA household counts 25,576, TS017), straight-line. Start (code order) 135.5 km. Random reversal kept if shorter; median of 5 seeds: 1,000 tries 118.6 km; 10,000: 75.2; 30,000: 59.0; 100,000: 51.4; 300,000: 51.4; 1,000,000: 51.4. Last improvement between try 93,887 and try 162,402; finals 50.3 to 55.9 km. Nearest-unvisited route 64.0 km. 300,000 tries about 2 s. Lesson family: anytime algorithm, budget against quality.',
    requiredMentions: [
      '55,535',
      '25,576',
      'Wyke Regis',
      'Radipole',
      'Upwey',
      'Broadwey',
      'Littlemoor',
      'Melcombe Regis',
      'Sutton Poyntz',
      'anytime algorithm'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS017 and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area to built-up area lookup and output area population-weighted centroids, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas in Dorset.', url: 'https://api.postcodes.io/places?q=Wyke%20Regis' }
    ],
    rejectedClaims: [
      'That 51.4 km or 50.3 km is the shortest possible loop: not proved, not claimed.',
      'Road, walking or driving distances: none used; straight lines between centroids only.',
      'Harbour, beach, sailing or resort history: not read from a source; not claimed.',
      'Timings as a general benchmark: one laptop, stated as such.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
