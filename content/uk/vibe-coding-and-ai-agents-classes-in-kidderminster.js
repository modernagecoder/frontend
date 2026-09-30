'use strict';
// Kidderminster (cg- town page, UK cluster Phase 10, towns band B, row 486). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if an agent can only afford to look at a
// few things, which should it look at, and how does it correct for having chosen unevenly? (importance sampling, in its
// survey form of probability-proportional-to-size sampling: sample where the quantity is likely to be large, then divide
// each observation by its chance of being picked).
// Data (read 30 September 2026): Nomis Census 2021 for all 338 output areas in Wyre Forest (E07000239): usual residents
// (101,617 by our OA sum), TS017 household size (45,307 households, 14,367 one-person), TS044 accommodation type
// (4,464 households in purpose-built flats; 120 areas have none).
// Our run (scratchpad kdm/is.py): an agent may inspect only a small number of areas and must estimate a district total.
// Uniform: pick areas with equal chance, scale up the mean. Weighted: pick with chance proportional to a cheap proxy,
// average (value / chance). 5,000 repeats each, numpy seed 2026; error = root mean square error as % of the true total.
// Residents, proxy = households, areas inspected 5 / 10 / 20 / 40 / 80: uniform 9.4 / 6.7 / 4.6 / 3.3 / 2.3; weighted
// 5.9 / 4.2 / 3.0 / 2.1 / 1.4. Residents with weights the wrong way round (1 / households), 20 areas: 9.1. Flats, 20
// areas: uniform 38.6; weighted by households 35.9; weighted by one-person households 26.9. Average error (bias) under
// 0.5% of the total in every case.
// Lesson family: importance sampling / probability-proportional-to-size sampling. Screened: "importance sampling",
// "proportional to size" 0 hits. East Riding teaches stratified sampling (fixed groups), a different design.
// Place facts: ONS 2021 BUAs (published): Kidderminster 57,560; Stourport-on-Severn 20,305; Bewdley 8,280.
// postcodes.io suburban areas whose nearest OA centroid lies in the Kidderminster BUA (our check): Franche, Habberley,
// Foley Park, Comberton, Aggborough, Spennells, Broadwaters, Offmore Farm, Greenhill, Hoobrook, Sutton Farm, Blakebrook,
// Birchen Coppice. Wolverley, Cookley and Blakedown are villages with their own BUAs.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KIDDERMINSTER', label: 'Kidderminster', blurb: 'Vibe coding and AI agents classes for Kidderminster, with an agent that must estimate a whole district from twenty glimpses.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-kidderminster',
  code: 'kdm',
  accent: '#8E2D44',
  accentRationale: 'Kidderminster: a madder red (7.59:1 contrast), hand-picked and unused elsewhere',
  pageType: 'city',
  place: {
    name: 'Kidderminster',
    eyebrow: 'Kidderminster, Wyre Forest, Worcestershire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Worcestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands' }],
  nav: [
    { label: 'Worcestershire', href: '/coding-classes-in-worcestershire' },
    { label: 'Worcester', href: '/best-coding-class-in-worcester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kidderminster, England',
  title: 'Vibe Coding and AI Agents Classes in Kidderminster | 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and maths classes for Kidderminster, Franche, Habberley, Spennells and Foley Park. Ages 6 to 67, first lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Kidderminster, with a project where an agent estimates all of Wyre Forest from 20 of its 338 Census areas and learns where to look.',
  twitterDescription: 'Kidderminster vibe coding, AI agents and Python classes on live video for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Kidderminster',
    description: 'Vibe coding, AI agents, Python, coding and maths lessons taught live online to children, teenagers and adults in Kidderminster and the Wyre Forest district.'
  },

  h1: 'Vibe coding and AI agents classes in Kidderminster',
  capsuleQ: 'What are the best vibe coding and AI agents classes for Kidderminster?',
  capsule: 'The Kidderminster built-up area had 57,560 residents at the 2021 census on the ONS count, and it sits in the Wyre Forest district of Worcestershire. Franche, Habberley, Spennells, Foley Park, Aggborough and Broadwaters are among the suburbs recorded inside it. We teach vibe coding, AI agents, Python, coding and maths to ages six to 67 by live video. The tutors are in India, and a learner can have them alone or share them with a class of five to ten at the same level. Whatever the course, the first thing taught is how to think a problem through, so that the AI is a helper and not a crutch. The opening lesson is free and includes a course recommendation, and tuition then costs USD 100 a month in a group or USD 150 a month privately. For the Kidderminster project, an agent is allowed to inspect just 20 of the district\'s 338 Census areas and has to estimate a total for all of them.',
  lead: 'Every agent works to a budget. It cannot read every document, call every tool or check every record, so it samples, and the quality of its answer depends on where it chooses to look. Looking at random is fair but wasteful, because most of what matters is often in a few places. Looking only where things seem large is efficient but dishonest, because the sample no longer represents the whole. Importance sampling is the way out. The agent looks more often where the quantity is probably big, and then corrects for its own favouritism by dividing each thing it sees by the chance it had of being chosen. The Kidderminster project shows how much that buys, and how much it costs when the hunch about where to look is wrong.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Kidderminster.',

  picks: {
    eyebrow: 'Kidderminster course picks',
    h2: 'Thinking, vibe coding and agent courses for Kidderminster',
    intro: 'A course for each age group. The first live lesson is always free and is booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Thinking skills first: fair samples, good guesses and what to do with limited looks.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: tell an AI about a game, build it in Scratch, test it properly.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects, including agents that must decide where to spend effort.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How generative AI and agents work, from sampling to tool use, with the maths explained.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kidderminster and Wyre Forest',
      h2: 'Kidderminster, Franche, Habberley, Spennells and Foley Park',
      intro: 'Three ONS built-up areas in Wyre Forest, and the suburbs recorded in Kidderminster.',
      body: [
        { kind: 'table', caption: 'ONS built-up areas in Wyre Forest, residents counted at the 2021 census', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Kidderminster', '57,560'],
          ['Stourport-on-Severn', '20,305'],
          ['Bewdley', '8,280']
        ] },
        { kind: 'p', text: 'The ONS publishes each of these separately, and we show them without adding them up. Thirteen places are listed by postcodes.io as suburban areas whose closest Census output area is in the Kidderminster built-up area: Franche, Habberley, Foley Park, Comberton, Aggborough, Spennells, Broadwaters, Offmore Farm, Greenhill, Hoobrook, Sutton Farm, Blakebrook and Birchen Coppice. Wolverley, Cookley and Blakedown are recorded as villages and each has a built-up area of its own. Worcestershire schools follow England\'s national curriculum on the way to GCSE and A level, and we schedule round the holiday dates families send.' },
        { kind: 'callout', h3: 'The county, the region and the idea behind the lessons', p: 'Wider pages cover <a class="cg-inline-link" href="/coding-classes-in-worcestershire">Worcestershire</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a>. We set out why thinking comes before AI tools on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Kidderminster project',
      h2: 'Importance sampling: an agent with twenty looks',
      intro: 'A known total, a small budget, and two ways of choosing where to look.',
      body: [
        { kind: 'p', text: 'The test bed is the Census. Wyre Forest has 338 output areas, and because the ONS has counted all of them we know the true totals: 101,617 residents by our sum of the areas, in 45,307 households. That lets us mark the agent\'s work. The agent is told the number of households in every area, which stands for the cheap information an agent usually has, and is allowed to "visit" only a few areas to learn how many residents each one holds. From those visits it must estimate the district total. It plays the game 5,000 times with each method so that its typical error can be measured.' },
        { kind: 'p', text: 'The uniform agent picks areas with equal chance and scales up the average. The weighted agent picks areas with a chance proportional to their household count, so bigger areas are visited more often, and then divides each area\'s residents by the chance that area had of being chosen before averaging. That division is the whole trick: it cancels the favouritism exactly, so the estimate stays fair on average.' },
        { kind: 'table', caption: 'Typical error in the agent\'s estimate of Wyre Forest\'s residents, as a percentage of the true total, over 5,000 repeats (our Python run on Census 2021 data)', head: ['Areas visited', 'Equal chance', 'Weighted by households'], rows: [
          ['5', '9.4%', '5.9%'],
          ['10', '6.7%', '4.2%'],
          ['20', '4.6%', '3.0%'],
          ['40', '3.3%', '2.1%'],
          ['80', '2.3%', '1.4%']
        ] },
        { kind: 'p', text: 'Twenty weighted visits beat forty unweighted ones. The agent has not worked harder; it has looked in better places and been honest about having done so. The method is only as good as the hunch behind it, though. When the agent must estimate the 4,464 households living in purpose-built flats, which 120 areas do not have at all, equal-chance sampling with 20 visits is off by 38.6% and weighting by households barely helps, at 35.9%, because large areas are not especially full of flats. Weighting by the number of one-person households, a better clue, brings it to 26.9%. And if the weights point the wrong way, favouring areas with few households, the error in the residents estimate rises to 9.1%, about three times the weighted result. In every one of these runs the average of the estimates stayed within half a percent of the truth: the correction keeps the agent unbiased even when its hunch is poor. What a poor hunch costs is reliability.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Estimate the sweets in ten jars by opening three, first at random, then choosing the big jars and adjusting.' },
          { h3: 'Ages 11 to 15', p: 'Simulate both agents in Python on a list of 30 numbers and compare how far off each tends to be.' },
          { h3: 'Ages 15 and up', p: 'Run 5,000 repeats on all 338 areas, try three different proxies and plot error against budget.' }
        ] },
        { kind: 'callout', h3: 'About the numbers', p: 'Resident, household and accommodation counts are Office for National Statistics Census 2021 data taken from Nomis under the Open Government Licence. The agents, the repeats and the error figures are ours. The 101,617 is our own total of 338 areas and is used only to score the agent; it is not an ONS headline figure.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Budgets and AI agents',
      h2: 'What twenty looks teach about vibe coding and AI agents',
      intro: 'Where an agent looks is a decision, and decisions can be examined.',
      body: [
        { kind: 'table', caption: 'From the Kidderminster sampling game to real agents', head: ['In the sampling project', 'In an agent you build or use'], rows: [
          ['20 weighted visits beat 40 random ones', 'Spend a limited budget where it counts'],
          ['Each value divided by its chance of selection', 'Correct for the way the evidence was chosen'],
          ['Household weights barely helped for flats', 'A proxy that suits one question may not suit another'],
          ['Backwards weights tripled the error', 'A wrong prior is worse than none'],
          ['Averages stayed fair throughout', 'Separate being unbiased from being reliable']
        ] },
        { kind: 'p', text: 'A research agent that reads ten search results out of ten thousand is sampling. So is a coding agent that opens five files in a large project, and so is a language model choosing its next word. None of them tells you how the ten or the five were picked unless asked. In vibe coding the learner states the task and the AI writes the code, and our Kidderminster students are taught to state the sampling plan too: what gets looked at, with what chance, and how the result is corrected. Building agents comes after a learner writes Python independently, which is usually at sixteen or beyond, and we keep Copilot Studio agents to one-to-one lessons. Further reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for students in the UK</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This is independent work. The ONS, Nomis and postcodes.io provide open data; they do not sponsor, review or endorse the page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages of learning',
    h2: 'From jars of sweets to agents on a budget',
    intro: 'Bands are indicative only, and the trial lesson decides.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Estimating, sampling fairly and checking a guess.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch projects described to an AI and then put through tests.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and simulation', p: 'Random sampling, repeats and error, next to GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'AI, agents and probability', p: 'Generative AI, agent design and the statistics beneath both.', courses: ['complete-generative-ai-masterclass-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and sampling',
    h2: 'What is importance sampling, and why do AI agents on a budget need it?',
    intro: 'Importance sampling means drawing more of your samples from where the quantity you care about is likely to be large and then weighting each sample by one over its chance of being drawn, and agents on a budget need it because, when the weights follow the quantity being measured, the same number of looks gives a more reliable estimate, while weights that point the wrong way make it worse.',
    p1: 'Estimating Wyre Forest\'s residents from 20 of its 338 Census areas, an agent sampling with equal chance was typically 4.6% out, while one sampling in proportion to household counts and reweighting was 3.0% out, better than equal-chance sampling managed with 40 areas.',
    p2: 'Learners carry one question away from it: how did the agent choose what to look at, and did it correct for that choice?',
    closer: 'A Kidderminster teenager who has coded both agents knows that a sample is a decision, and can only weigh such decisions because they learned to program them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Logistics',
    h2: 'Live on video for Franche, Spennells and Habberley',
    intro: 'The kit list is short: a laptop or desktop, and internet fast enough for a video call.',
    cells: [
      { h3: 'Student-led typing', p: 'With the screen shared, the learner writes prompts and code; the tutor steers by asking questions.' },
      { h3: 'Trial sets the start', p: 'We learn in the first lesson what can be taken as known, and ask about exam boards.' },
      { h3: 'Free opening lesson', p: 'It is a real lesson, without charge, that ends in a course suggestion.' },
      { h3: 'Same-level classes', p: 'Groups have five to ten UK learners who are at one stage together.' },
      { h3: 'Two lessons weekly', p: 'Holiday weeks are skipped when you let us know.' },
      { h3: 'Time that stays put', p: 'Clock changes in March and October do not move your slot.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Classes grouped by level need many learners to draw from. A single district rarely has five at one stage free on one night; the UK as a whole always does.' }
  },

  fees: {
    h2: 'Fees in Kidderminster',
    intro: 'Kidderminster learners are on the international tariff, used everywhere outside India.',
    first: 'One free lesson, full length, with course advice to finish.',
    group: 'About eight live lessons in each month, in a small group.',
    private: 'About eight live lessons in each month, on your own with a tutor.',
    closer: 'Everything is billed in US dollars and we publish no price in pounds. The first bill comes after the trial, once you have agreed a course and a day. The pricing page covers holidays, lessons missed and switching format.'
  },

  reviewsH2: 'What UK families, Worcestershire and the West Midlands included, have written on Google',

  book: {
    h2: 'Book a free Kidderminster lesson',
    intro: 'Let us know the learner\'s age or year and a hobby. The trial might be the jars-of-sweets estimate, a Scratch game built through an AI, a few lines of Python, or a small sampling agent.',
    success: 'Thank you. We have your Kidderminster request and will reply soon.'
  },

  faq: {
    h2: 'Kidderminster questions',
    intro: 'Importance sampling, the agent project, vibe coding and everyday details.',
    items: [
      { q: 'What is the population of Kidderminster?', a: 'The ONS figure for the Kidderminster built-up area at the 2021 census is 57,560 residents.' },
      { q: 'Do you run vibe coding and AI agents classes for Kidderminster?', a: 'Yes, as live online lessons for ages 6 to 67, reaching Franche, Habberley, Spennells, Foley Park and the rest of Wyre Forest.' },
      { q: 'What is probability-proportional-to-size sampling?', a: 'A sampling plan in which bigger units have a bigger chance of being picked, with each result divided by that chance afterwards. It is importance sampling applied to surveys.' },
      { q: 'Does importance sampling bias the answer?', a: 'Not if each sample is divided by its chance of selection. In our 5,000-repeat tests the average estimate stayed within half a percent of the true total even with badly chosen weights; what suffered was reliability.' },
      { q: 'What is the Kidderminster project?', a: 'A Python agent estimates totals for Wyre Forest from 20 of its 338 Census areas, once by equal-chance sampling and once by weighted sampling with correction, and the two errors are compared.' },
      { q: 'What does vibe coding mean for a child?', a: 'Describing a game or tool in their own words, letting an AI build a first version, then testing and changing it until it is right.' },
      { q: 'When can my teenager build AI agents?', a: 'Once they write Python independently, usually at sixteen or beyond. Copilot Studio agents are taught in private lessons only.' },
      { q: 'Are GCSE and A level topics included?', a: 'Yes, computer science and maths topics are taught for real understanding. No grade is promised.' },
      { q: 'What is the monthly fee?', a: 'After a free first lesson, USD 100 a month for a place in a group or USD 150 a month for private lessons.' },
      { q: 'Can lessons skip the school holidays?', a: 'Yes, just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'More Worcestershire and West Midlands pages',
    html: 'Each of these has a project of its own: <a class="cg-inline-link" href="/best-coding-class-in-worcester">Worcester</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-redditch">Redditch</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-dudley">Dudley</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-halesowen">Halesowen</a>. For everywhere else, start at the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Kidderminster and Worcestershire',
  footerPlaces: [
    { href: '/coding-classes-in-worcestershire', label: 'Worcestershire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-kdm .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 3.1vw, 2.4rem); }
.cg-root.cg-kdm .cg-hero h1 { font-weight: 790; letter-spacing: -0.031em; line-height: 1.03; }
.cg-root.cg-kdm .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-kdm .cg-eyebrow { letter-spacing: 0.17em; font-weight: 720; text-transform: uppercase; }
.cg-root.cg-kdm .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.023em; }
.cg-root.cg-kdm .cg-table caption { text-align: left; font-size: 0.89rem; font-weight: 600; font-style: italic; }
.cg-root.cg-kdm .cg-table td { font-variant-numeric: tabular-nums; text-align: left; }
.cg-root.cg-kdm .cg-table th { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }
.cg-root.cg-kdm .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-kdm .cg-callout { border-left-width: 7px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Wyre Forest (E07000239), Worcestershire. ONS 2021 BUAs (published): Kidderminster 57,560; Stourport-on-Severn 20,305; Bewdley 8,280. postcodes.io suburban areas (nearest OA centroid in the Kidderminster BUA, our check): Franche, Habberley, Foley Park, Comberton, Aggborough, Spennells, Broadwaters, Offmore Farm, Greenhill, Hoobrook, Sutton Farm, Blakebrook, Birchen Coppice; villages Wolverley, Cookley, Blakedown (own BUAs).',
    localProject: 'Census 2021 for 338 Wyre Forest OAs: residents 101,617 (our sum), households 45,307, one-person 14,367, purpose-built flats 4,464 (120 OAs none). Agent estimates a total from m OAs, 5,000 repeats, seed 2026, RMSE % of truth. Residents, uniform / household-weighted with 1/p correction: m=5 9.4/5.9; 10 6.7/4.2; 20 4.6/3.0; 40 3.3/2.1; 80 2.3/1.4; inverse weights m=20 9.1. Flats m=20: uniform 38.6; household-weighted 35.9; one-person-weighted 26.9. Bias under 0.5% throughout. Lesson family: importance sampling / PPS.',
    requiredMentions: [
      'importance sampling',
      '57,560',
      '101,617',
      '45,307',
      '4,464',
      '26.9%',
      'Franche',
      'Habberley',
      'Spennells',
      'Foley Park'
    ],
    sources: [
      { claim: 'ONS Census 2021 usual residents, TS017 and TS044 at output area level via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Area (2021) to Built-up Area (2022) lookup and population-weighted centroids, Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas and villages in Wyre Forest.', url: 'https://api.postcodes.io/places?q=Franche' }
    ],
    rejectedClaims: [
      'That 101,617 is the official population of Wyre Forest: it is our sum of output areas, used only as the target for the agent.',
      'Carpet industry, canal, railway or safari park claims: not read from a source; not claimed.',
      'That weighted sampling always helps: with household weights the flats estimate barely improved, and inverse weights made residents worse; both stated.',
      'Wolverley, Cookley and Blakedown as parts of Kidderminster: each has its own ONS built-up area.',
      'Sum of the three built-up areas: not added.',
      'Exam results and sterling prices: none.'
    ]
  }
};
