'use strict';
// Washington, Tyne and Wear (cg- town page, UK cluster Phase 10, towns band B, row 506). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when should an agent stop
// looking and accept an answer that is good enough? (Satisficing, Herbert Simon's aspiration level.)
// Data (read 30 September 2026): ONS OA21 to BUA22 lookup and ONS population-weighted centroids (British National
// Grid) for the 179 output areas of the Washington built-up area in Sunderland (E08000024); Nomis Census 2021 TS017
// household totals, our sum 22,646, 59 to 233 per area.
// Our run (scratchpad wsh/sat.py): invented task, choose one area centre as a meeting point; score = household-weighted
// mean straight-line distance from all 179 centres. Lowest score 1,550 m, median 2,077 m, highest 3,503 m, mean 2,107 m.
// Centres scoring 1,600 m or less: 8; 1,700: 25; 1,800: 44; 2,000: 77. Satisficing agent examines centres in random
// order and stops at the first at or under its target; 10,000 random orders per target. Target 1,600: mean 19.9
// examined (median 15, 90th percentile 44), chosen centre on average 13 m worse than the lowest. Target 1,700: 6.9
// examined, 74 m worse. Target 1,800: 4.0 examined, 129 m worse. Target 2,000: 2.3 examined, 220 m worse. One random
// pick with no target: 557 m worse on average. Target 1,500 (unreachable): all 179 examined, every time.
// Lesson family: satisficing, aspiration level, bounded rationality. Screened: "satisfic", "aspiration level",
// "bounded rationality", "herbert simon" 0 hits in content/; claimed in claims.txt. Tyne and Wear county page = coupon
// collector; Sunderland = quadtrees; Weymouth (anytime algorithm) and the secretary problem pages are different
// families: here the stopping rule is a fixed quality target, not a time budget or a rank.
// Place facts: Sunderland TS001 274,172. ONS 2021 BUA (published): Washington 51,320. postcodes.io suburban areas whose
// closest postcode is in the Washington BUA: Blackfell, Concord, Donwell, Sulgrave, Usworth, Albany, Hertburn (NE37);
// Barmston, Biddick, Columbia, Fatfield, Glebe, Harraton, Lambton, Oxclose, Rickleton, Ayton, Teal Farm (NE38).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WASHINGTON', label: 'Washington', blurb: 'Vibe coding and AI agents classes for Washington, Tyne and Wear, with an agent that must decide when a meeting point among 179 centres is good enough.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-washington',
  code: 'wsh',
  accent: '#5C0909',
  accentRationale: 'Washington: a deep oxblood (14.0:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'Washington',
    eyebrow: 'Washington, Sunderland, Tyne and Wear',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Tyne and Wear' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-east-england', name: 'North East England' }],
  nav: [
    { label: 'Tyne and Wear', href: '/coding-classes-in-tyne-and-wear' },
    { label: 'North East', href: '/coding-and-ai-classes-in-north-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Washington, Tyne and Wear',
  title: 'Vibe Coding and AI Agents Classes in Washington, Tyne and Wear',
  description: 'Live online vibe coding, AI agents, Python and coding classes for Washington, Tyne and Wear: Concord, Oxclose, Biddick and Fatfield. Ages 6 to 67, first lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Washington, Tyne and Wear, with a project on when an agent should stop searching.',
  twitterDescription: 'Washington (Tyne and Wear) vibe coding, AI agents and Python lessons online. Ages 6 to 67, free trial.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Washington, Tyne and Wear',
    description: 'Live online lessons in vibe coding, AI agents, Python and maths for children, teenagers and adults in Washington and the city of Sunderland, centred on how an agent decides it has done enough.'
  },

  h1: 'Vibe coding and AI agents classes in Washington, Tyne and Wear',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Washington, Tyne and Wear?',
  capsule: 'Washington in Tyne and Wear is an ONS built-up area with 51,320 usual residents at the 2021 census, part of the city of Sunderland, which had 274,172. The gazetteer lists Concord, Oxclose, Biddick, Fatfield, Barmston, Usworth, Sulgrave and Rickleton among its suburban areas. Modern Age Coders runs lessons there in vibe coding, AI agents, Python, general coding and maths for anyone from six to 67. Lessons are live video sessions with tutors in India, either individual or in classes of five to ten pitched at one level. We teach learners to give an agent a stopping rule and to measure what that rule costs. The Washington project has an agent hunt for a meeting point among 179 census area centres, and compares checking every one with stopping at the first that is good enough. The first lesson is free; from there a group class costs USD 100 monthly and individual tuition USD 150 monthly.',
  lead: 'Herbert Simon, who later won a Nobel prize in economics, argued in the 1950s that real decision makers do not hunt for the perfect option. They set a bar, look until something clears it, and stop. He invented a word for it, satisficing, from satisfy and suffice. An AI agent faces the same choice on every task, because each extra look costs time, tokens or money. Set the bar too low and the answer is poor. Set it too high and the agent never stops. This project puts numbers on both mistakes using a real town.',
  wa: 'Hello Modern Age Coders, we are in Washington, Tyne and Wear, and would like a free trial lesson in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Starting courses',
    h2: 'Vibe coding and agent courses for Washington learners',
    intro: 'Here is one course for each age group. All begin with a free live lesson, and no card is taken.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children build Scratch games by directing an AI, then decide whether the result is good enough to keep.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: setting a goal, searching sensibly and knowing when to stop.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Vibe coding in Python for teenagers, with the Washington meeting-point agent as a project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first steps to agents with budgets, targets and tests.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Local detail',
      h2: 'Washington, Concord, Oxclose, Biddick and Fatfield',
      intro: 'Census populations and the suburb names recorded for the NE37 and NE38 postcode districts.',
      body: [
        { kind: 'table', caption: 'Usual residents at the 2021 census (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Washington built-up area', '51,320'],
          ['City of Sunderland', '274,172']
        ] },
        { kind: 'p', text: 'Washington is counted by the ONS as its own built-up area within the Sunderland council area; the second row is the whole council area, including Sunderland itself and Houghton-le-Spring, and is not a total of the first. postcodes.io lists Blackfell, Concord, Donwell, Sulgrave, Usworth, Albany and Hertburn as suburban areas in NE37, and Barmston, Biddick, Columbia, Fatfield, Glebe, Harraton, Lambton, Oxclose, Rickleton, Ayton and Teal Farm in NE38. For every one of them the closest postcode belongs to the Washington built-up area. Schools follow the English national curriculum, so a year group from Year 2 to Year 13 places a learner for us, and we can teach alongside GCSE and A level.' },
        { kind: 'callout', h3: 'Tyne and Wear pages', p: 'Also see the <a class="cg-inline-link" href="/coding-classes-in-tyne-and-wear">Tyne and Wear page</a>, <a class="cg-inline-link" href="/best-coding-class-in-sunderland">Sunderland</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-gateshead">Gateshead</a>. Our approach is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Washington project',
      h2: 'Satisficing: an agent that stops at good enough',
      intro: 'A made-up task on real data: choose a meeting point for the whole town.',
      body: [
        { kind: 'p', text: 'The ONS splits the Washington built-up area into 179 census output areas, each with a published centre and a household count; our sum of those counts is 22,646 households. The task we invent is to choose one of the centres as a meeting point. A centre\'s score is the average straight-line distance a household would travel to it, so lower is better. Working out one score means measuring 179 distances. The lowest score of all is 1,550 metres, the middle one is 2,077 metres and the highest is 3,503 metres.' },
        { kind: 'p', text: 'A thorough agent scores all 179 centres and takes the lowest. A satisficing agent is given a target instead. It scores centres one at a time in a random order and stops the moment one meets the target. The learner runs it 10,000 times for each target and records two things: how many centres were scored before stopping, and how far the chosen centre was from the true lowest.' },
        { kind: 'table', caption: 'Satisficing agent on 179 Washington centres, 10,000 random orders per row, our Python run', head: ['Target score', 'Centres that meet it', 'Scored before stopping (mean)', 'Worse than the lowest by (mean)'], rows: [
          ['1,600 m or less', '8', '19.9', '13 m'],
          ['1,700 m or less', '25', '6.9', '74 m'],
          ['1,800 m or less', '44', '4.0', '129 m'],
          ['2,000 m or less', '77', '2.3', '220 m'],
          ['No target, check all', '179', '179', '0 m']
        ] },
        { kind: 'p', text: 'A target of 1,700 metres gave up 74 metres on average, under 5% of the lowest score, and did about one twenty-sixth of the work. Tightening the target to 1,600 roughly tripled the work to save a further 61 metres. Taking a single centre at random with no target at all was 557 metres worse on average. The pattern in the third column is one the learner can predict before running anything: with 8 acceptable centres among 179, the expected wait is 180 divided by 9, which is 20.' },
        { kind: 'p', text: 'The dangerous case is a target nobody can meet. Ask for 1,500 metres or less, when the lowest score is 1,550, and the agent examines all 179 centres every time and still has nothing that passes. A real agent without a fallback would loop or give up. So the learner adds one: if nothing meets the target, return the lowest seen and say so. The meeting-point task and the targets are invented; the centres and household counts are real.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Turn over number cards one at a time and stop at the first one under ten. How many did you need? Try under five.' },
          { h3: 'Ages 11 to 15', p: 'Code the stopping rule in Python on a shuffled list and chart looks against target.' },
          { h3: 'Ages 15 and up', p: 'Score the 179 real centres, run 10,000 orders per target, and add the fallback for an impossible target.' }
        ] },
        { kind: 'callout', h3: 'What we used', p: 'Household counts are Census 2021 figures from Nomis and the centres are ONS population-weighted centroids, both Crown copyright under the Open Government Licence. Satisficing is Herbert Simon\'s idea (1956). The task, the targets and the results are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that know when to stop',
      h2: 'What satisficing teaches about vibe coding and AI agents',
      intro: 'Every agent needs a rule for when it is finished, and somebody has to write it.',
      body: [
        { kind: 'table', caption: 'From the Washington meeting point to AI agents', head: ['In the Washington run', 'For an AI agent'], rows: [
          ['A 1,700 m target saved about 96% of the work', 'A sensible bar is often worth a small loss in quality'],
          ['Tightening to 1,600 m tripled the work', 'The last few per cent are the expensive ones'],
          ['A 1,500 m target could never be met', 'Always set a limit on steps, and a fallback'],
          ['Results were averaged over 10,000 orders', 'One lucky run proves nothing'],
          ['The fallback reported that it had missed', 'An agent should say when it fell short']
        ] },
        { kind: 'p', text: 'In vibe coding you tell an AI what you want built and guide it as it writes. Ask for "an agent that finds a good meeting point" and you will be given one that checks everything, or one that stops early, and the assistant will not mention which. Washington learners practise stating the bar in the prompt, asking what happens when the bar cannot be met, and then testing that case. Agents that search the web, call tools or write code all run on the same decision. Building agents waits until a learner is fluent in Python, which in practice means sixth-formers and adults; Copilot Studio agent work is kept to private lessons. Two pages go deeper: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'This page has no association with the Office for National Statistics, Nomis or postcodes.io. Their data is open and we have used it as published; the scenario is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four stages',
    h2: 'Card games first, agents with stopping rules later',
    intro: 'We match the stage to the learner in the free lesson; the year group gets us close.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Goals, searching and stopping, played out as games.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch games built with AI help and judged by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Search, simulation and web projects, each with a test.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents with limits', p: 'Python agents with targets, budgets and honest fallbacks.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and stopping',
    h2: 'What is satisficing, and how does an AI agent know when to stop?',
    intro: 'Satisficing means accepting the first option that meets a set standard instead of searching for the ideal one, and an AI agent knows when to stop only if its builder gives it that standard, a limit on steps and a fallback.',
    p1: 'Choosing a meeting point among 179 centres in Washington, an agent with a 1,700-metre target scored 6.9 centres on average and landed 74 metres from the lowest possible score; checking all 179 found the lowest, and a 1,500-metre target could never be met.',
    p2: 'Learners who have run those numbers ask three things of any agent: what counts as done, what is the limit, and what happens if neither is reached.',
    closer: 'Washington teenagers who can write a stopping rule and test it are the ones who can put an AI agent to real use, which is a good reason to learn to code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons explained',
    h2: 'Live online lessons for Washington',
    intro: 'Learners need a computer, a webcam and a connection that holds a video call. No software has to be set up in advance of the trial.',
    cells: [
      { h3: 'Active from minute one', p: 'The learner writes and runs code while sharing their screen; the tutor guides with questions.' },
      { h3: 'We assess in the trial', p: 'A course is suggested only after the free lesson has shown what the learner can do.' },
      { h3: 'Nothing to pay upfront', p: 'The first lesson is free and we do not ask for a card.' },
      { h3: 'Five to ten in a group', p: 'Groups share a level, and their members live all over the UK.' },
      { h3: 'Two sessions a week', p: 'In term time; Sunderland school holidays are left out on request.' },
      { h3: 'Lesson time never drifts', p: 'Clock changes in the UK are handled at the tutor\'s end.' }
    ],
    spec: { title: 'Why online, why live', p: 'Online lets us put each learner with others at exactly their stage. Live means a tutor can stop, ask and explain in the moment, which a recording cannot.' }
  },

  fees: {
    h2: 'Washington lesson prices',
    intro: 'UK learners, including those in Washington, pay the rates we charge everywhere outside India.',
    first: 'A free first lesson of normal length that ends with our course advice.',
    group: 'A group place, with about eight lessons a month.',
    private: 'One-to-one teaching, with about eight lessons a month.',
    closer: 'Our prices are in US dollars and we publish no sterling amount. Nothing is due for the trial, and charging starts once a course and a weekly slot are agreed. The pricing page sets out what happens with holidays, missed lessons and changes of format.'
  },

  reviewsH2: 'North East families and UK learners in their own words on Google',

  book: {
    h2: 'Book a free Washington lesson',
    intro: 'Share an age or school year and one thing the learner enjoys. We might run the trial as a stop-or-continue card game, a Scratch game made with AI, first Python, or a small search agent.',
    success: 'Thank you. We have your Washington request.'
  },

  faq: {
    h2: 'Washington questions answered',
    intro: 'Satisficing, the meeting-point project, vibe coding, agents and the practical side.',
    items: [
      { q: 'What is the population of Washington, Tyne and Wear?', a: 'The ONS built-up area of Washington had 51,320 usual residents at the 2021 census. The city of Sunderland, which includes it, had 274,172.' },
      { q: 'Are there vibe coding and AI agents classes in Washington?', a: 'Yes. Lessons are live online for ages 6 to 67 in Washington, Concord, Oxclose, Biddick, Fatfield, Usworth and the rest of the town.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is making software by describing what you want to an AI and then testing and improving the code it writes.' },
      { q: 'What is bounded rationality?', a: 'It is Herbert Simon\'s idea that decision makers have limited time and information, so they aim for an acceptable choice and not a perfect one.' },
      { q: 'What did the Washington project find?', a: 'With a target of 1,700 metres the agent scored 6.9 of 179 centres on average and was 74 metres off the lowest score. With a target of 1,600 it scored 19.9 and was 13 metres off.' },
      { q: 'What goes wrong with satisficing?', a: 'If the target is impossible the agent never finds anything that passes. With a 1,500-metre target it checked all 179 centres every time, so it needs a step limit and a fallback.' },
      { q: 'When are learners ready to build agents?', a: 'Once Python comes easily without help, typically at sixteen or older. Copilot Studio agent lessons are private only.' },
      { q: 'Do lessons help with school computer science?', a: 'Yes, including GCSE and A level. We teach for understanding and make no promise about grades.' },
      { q: 'What does it cost?', a: 'Your first lesson costs nothing. A group place is USD 100 per month afterwards, and private lessons are USD 150 per month.' },
      { q: 'Can lessons pause over the holidays?', a: 'Yes. Give us the dates and we will skip them.' }
    ]
  },

  next: {
    eyebrow: 'More in the North East',
    h2: 'Tyne and Wear pages with other projects',
    html: 'Visit <a class="cg-inline-link" href="/best-coding-class-in-sunderland">Sunderland</a> (finding points fast with a tree of boxes), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-south-shields">South Shields</a> and <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a>. The <a class="cg-inline-link" href="/coding-classes-in-tyne-and-wear">Tyne and Wear page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list everything else.',
    waLabel: 'Reach us on WhatsApp'
  },

  footerHeading: 'Washington and Tyne and Wear',
  footerPlaces: [
    { href: '/coding-classes-in-tyne-and-wear', label: 'Tyne and Wear' },
    { href: '/coding-and-ai-classes-in-north-east-england', label: 'North East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wsh .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 2.6vw, 2.2rem); }
.cg-root.cg-wsh .cg-hero h1 { font-weight: 790; letter-spacing: -0.026em; line-height: 1.09; }
.cg-root.cg-wsh .cg-capsule { border-right: 3px solid var(--cg-accent); padding-right: 1.1rem; }
.cg-root.cg-wsh .cg-eyebrow { letter-spacing: 0.14em; font-weight: 640; font-size: 0.81rem; }
.cg-root.cg-wsh .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.02em; }
.cg-root.cg-wsh .cg-table caption { font-weight: 580; text-align: left; font-size: 0.91rem; }
.cg-root.cg-wsh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wsh .cg-table th { font-weight: 730; border-bottom: 3px solid var(--cg-accent); }
.cg-root.cg-wsh .cg-ladder-col { border-left: 2px solid var(--cg-accent); border-radius: 0 8px 8px 0; padding-left: 0.8rem; }
.cg-root.cg-wsh .cg-callout { border-left-width: 5px; border-radius: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Sunderland (E08000024), Census 2021 TS001 usual residents 274,172. ONS 2021 BUA (published): Washington 51,320. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Washington BUA: Blackfell, Concord, Donwell, Sulgrave, Usworth, Albany, Hertburn (NE37); Barmston, Biddick, Columbia, Fatfield, Glebe, Harraton, Lambton, Oxclose, Rickleton, Ayton, Teal Farm (NE38).',
    localProject: 'Invented meeting-point task on the 179 ONS centroids of the Washington BUA (our sum of OA household counts 22,646, TS017). Score = household-weighted mean straight-line distance; lowest 1,550 m, median 2,077 m, highest 3,503 m. Satisficing agent, random order, 10,000 runs per target: 1,600 m (8 centres qualify) 19.9 scored, 13 m worse than the lowest; 1,700 m (25) 6.9 scored, 74 m worse; 1,800 m (44) 4.0, 129 m; 2,000 m (77) 2.3, 220 m; one random pick 557 m worse; 1,500 m target unreachable, all 179 scored. Lesson family: satisficing, aspiration level, bounded rationality.',
    requiredMentions: [
      '51,320',
      'Concord',
      'Oxclose',
      'Biddick',
      'Fatfield',
      'Barmston',
      'Usworth',
      'Rickleton',
      'Satisficing',
      '22,646'
    ],
    sources: [
      { claim: 'Simon H. A. (1956), Rational choice and the structure of the environment, Psychological Review 63(2), 129 to 138.', url: 'https://doi.org/10.1037/h0042769' },
      { claim: 'ONS Census 2021 TS017 and TS001 via Nomis; ONS 2021 built-up area populations; ONS output area centroids and lookups (Open Geography Portal).', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Sunderland (NE37 and NE38).', url: 'https://api.postcodes.io/places?q=Oxclose' }
    ],
    rejectedClaims: [
      'That a real meeting point or venue exists at any centre: the task is invented and the page says so.',
      'Travel times or road distances: none used; straight lines only.',
      'The new town history of Washington and its numbered districts: not read from a source; not claimed.',
      'Any link with Washington in the United States: none drawn.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
