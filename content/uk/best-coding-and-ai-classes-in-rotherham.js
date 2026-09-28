'use strict';
// Rotherham (cg- town page, UK cluster Phase 8, towns band A, row 369). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what does a chatbot's "temperature"
// setting actually do? Anchor (read 28 September 2026): Nomis Census 2021 TS044 Accommodation type (NM_2062_1), Rotherham
// households 113,924: detached 25,415 (22.31%); semi-detached 56,050 (49.20%); terraced 20,689 (18.16%); purpose-built flats
// 9,957 (8.74%); part of a converted or shared house 723 (0.63%); part of another converted building 378 (0.33%); in a
// commercial building 670 (0.59%); caravan or other mobile or temporary structure 42 (0.04%). England 23,436,085 households.
// Our run (scratchpad rot/): softmax with temperature on the log shares. T 0 (greedy): semi-detached 100%. T 0.5: detached
// 15.0, semi 72.8, terraced 9.9, flats 2.3, others about 0 (entropy 1.203 bits). T 1: the census shares (entropy 1.862).
// T 2: 22.2, 33.0, 20.0, 13.9, 3.7, 2.7, 3.6, 0.9 (caravan 0.9%, entropy 2.422). T 5: caravan 4.9% (entropy 2.862).
// 1,000 synthetic households (random.Random(2026)): T 0.5 -> 143 / 735 / 101 / 21 / 0 / 0 / 0 / 0; T 1 -> 217 / 521 / 154 /
// 95 / 6 / 2 / 4 / 1; T 2 -> 216 / 347 / 206 / 121 / 35 / 26 / 42 / 7. Top-3 sampling renormalised: semi 54.9, detached
// 24.9, terraced 20.3.
// Lesson family: softmax with temperature, greedy vs sampled generation, top-k truncation, entropy of the output.
// Screened: softmax, sampling temperature, temperature scaling, top-k sampling, TS044 0 hits (Dewsbury showed greedy loops
// in a bigram model but not temperature).
// Place facts: TS001 Rotherham 265,807; TS007A: 15 to 19 14,472 (5.4%; England 5.7%); 20 to 24 14,098 (5.3%; 6.0%); 40 to 44
// 15,280 (5.7%; 6.3%); 50 to 54 19,466 (7.3%; 6.9%); 60 to 64 16,408 (6.2%; 5.8%); 75 to 79 10,626 (4.0%; 3.6%). ONS 2021
// BUAs: Rotherham 71,535; Wickersley and Bramley 24,655; Swinton 15,910; Swallownest and Aston 14,910; Dinnington 10,960;
// Brinsworth 8,760; Kiveton Park 7,100.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ROTHERHAM', label: 'Rotherham', blurb: 'Coding and AI classes for Rotherham, with a project that shows what a chatbot\'s temperature setting does, using the borough\'s real housing data.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-rotherham',
  code: 'rhm',
  accent: '#17325C',
  accentRationale: 'Rotherham: a deep steel blue (10.27:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Rotherham',
    eyebrow: 'Rotherham, South Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'South Yorkshire', href: '/coding-classes-in-south-yorkshire' },
    { label: 'Yorkshire', href: '/coding-and-ai-classes-in-yorkshire-and-the-humber' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Rotherham, England',
  title: 'Coding and AI Classes in Rotherham | Vibe Coding, Python, 6 to 67',
  description: 'Online coding, AI, vibe coding and Python classes for Rotherham, Wickersley, Swinton and Dinnington learners aged 6 to 67, live and online. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Rotherham, and a Python project showing what a chatbot\'s temperature setting does, using real housing data.',
  twitterDescription: 'Rotherham coding, AI, vibe coding and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Rotherham',
    description: 'Online coding, AI, vibe coding, Python and mathematics for children, teenagers and adults in Rotherham borough, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Rotherham',
  capsuleQ: 'Where can Rotherham learners find the best coding and AI classes?',
  capsule: 'Rotherham borough recorded 265,807 usual residents in 2021. The ONS gives the Rotherham built-up area 71,535 people and Wickersley and Bramley 24,655, while Swinton, Swallownest and Aston, and Dinnington are each over 10,000. People in their fifties and sixties make up more of the borough than of England, and people in their late teens and twenties less. From Wickersley and Swinton to Dinnington and Brinsworth, learners of any age from 6 to 67 can take live online lessons in coding, AI, vibe coding, Python and maths with tutors based in India, either alone or with five to ten others who share their stage. Clear reasoning is the first thing we teach, so AI becomes a tool the learner directs. We charge nothing for the first lesson, then USD 100 a month for classes in a group, or USD 150 a month for personal lessons.',
  lead: 'The language models behind many AI chatbots have a setting called temperature. Turn it down and the answers become safe and repetitive; turn it up and they become varied, then strange. Behind that dial is one small formula, the softmax with temperature, and a learner can see exactly what it does with real data. The 2021 census records the kind of home every one of Rotherham\'s 113,924 households lives in: almost half semi-detached, only 42 in a caravan or other temporary structure. Our Rotherham project turns those shares into a tiny "generator" of households and turns the temperature dial, watching the caravans appear.',
  wa: 'Hello Modern Age Coders, could we have a free coding or AI lesson for a learner in Rotherham?',

  picks: {
    eyebrow: 'Rotherham course picks',
    h2: 'Courses for thinking, vibe coding and AI',
    intro: 'Pick according to the learner\'s age and what fascinates them. We start every course with a free live lesson, and no card is required.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: chance, logic and careful step-by-step plans.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps written with AI help and checked by the learner.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and AI projects for teenagers, including the temperature dial.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How language models generate text, and how AI agents use them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Rotherham borough',
      h2: 'Older than England in mid-life, younger groups thinner',
      intro: 'Six 2021 census age bands for Rotherham, from Nomis, placed next to England.',
      body: [
        { kind: 'table', caption: 'How Rotherham\'s age mix compares, six bands from Census 2021 table TS007A', head: ['Ages', 'People', 'Borough share', 'National share'], rows: [
          ['15 to 19', '14,472', '5.4%', '5.7%'],
          ['20 to 24', '14,098', '5.3%', '6.0%'],
          ['40 to 44', '15,280', '5.7%', '6.3%'],
          ['50 to 54', '19,466', '7.3%', '6.9%'],
          ['60 to 64', '16,408', '6.2%', '5.8%'],
          ['75 to 79', '10,626', '4.0%', '3.6%']
        ] },
        { kind: 'p', text: 'The early twenties are 0.7 points below England and the early fifties 0.4 above. Beyond the town itself, the ONS lists Wickersley and Bramley, Swinton, Swallownest and Aston, Dinnington, Brinsworth and Kiveton Park among the borough\'s built-up areas. Rotherham pupils follow the English national curriculum; tell us which weeks are holidays and no lesson will be booked in them.' },
        { kind: 'callout', h3: 'Thinking comes first', p: 'Our reasons for teaching reasoning before AI are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. County pages sit under <a class="cg-inline-link" href="/coding-classes-in-south-yorkshire">South Yorkshire</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Rotherham project',
      h2: 'Turning the temperature dial on Rotherham\'s homes',
      intro: 'Treat the census shares as a model, reshape them with softmax, and sample synthetic households.',
      body: [
        { kind: 'p', text: 'The learner downloads the census accommodation table and turns the eight counts into probabilities: 49.20 percent semi-detached, 22.31 detached, 18.16 terraced, 8.74 in purpose-built flats, and small shares for converted buildings, homes in commercial buildings and caravans, which are just 0.04 percent. A language model does something very similar with words: it gives every possible next word a probability. The temperature formula takes the logarithm of each probability, divides it by a number T, and turns the results back into probabilities with the softmax function. At T equal to 1 nothing changes. The learner then tries lower and higher values.' },
        { kind: 'table', caption: 'Share of synthetic Rotherham households at different temperatures, TS044, our Python run, 28 September 2026', head: ['Temperature', 'Semi-detached', 'Detached', 'Caravan or temporary', 'Output variety (bits)'], rows: [
          ['0 (always the top choice)', '100%', '0%', '0%', '0'],
          ['0.5', '72.8%', '15.0%', 'about 0%', '1.203'],
          ['1 (the census shares)', '49.2%', '22.3%', '0.04%', '1.862'],
          ['2', '33.0%', '22.2%', '0.9%', '2.422'],
          ['5', '20.8%', '17.7%', '4.9%', '2.862']
        ] },
        { kind: 'p', text: 'At temperature 0 the generator becomes greedy and every household is semi-detached, the most common answer, which is exactly why chatbots at low temperature repeat themselves. At 0.5 the big categories grow and the small ones vanish: of 1,000 sampled households, 735 are semi-detached and not one is a caravan or a converted building. At 2 the distribution flattens, and caravans jump from 0.04 to 0.9 percent, more than twenty times their real share; in 1,000 samples there are 7 of them where the census predicts almost none. At 5 nearly one household in twenty is a caravan. Higher temperature means more variety, and also more answers that are simply unrealistic.' },
        { kind: 'p', text: 'The learner finally tries top-k sampling, a common safeguard: keep only the three most likely categories and share the probability among them. Semi-detached becomes 54.9 percent, detached 24.9 and terraced 20.3, and nothing unusual can ever appear, not even the real flats. Every setting is a trade-off between faithful, boring and surprising, and the learner writes down which one they would choose for a data generator and which for a story-writing tool, and why.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw coloured counters from bags with more or fewer rare colours and compare the results.' },
          { h3: 'Ages 11 to 15', p: 'Write a Python generator that draws homes from the census mix, then change its temperature and compare.' },
          { h3: 'Ages 15 and up', p: 'Code softmax with temperature and top-k, measure entropy and justify a setting.' }
        ] },
        { kind: 'callout', h3: 'Census housing, our generator', p: 'Counts come from the Census 2021 table TS044, Accommodation type, on Nomis. The temperature experiments and all sampled households are our own work.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'What temperature means for vibe coding and agents',
      intro: 'The same dial shapes AI-written code and AI agents\' decisions.',
      body: [
        { kind: 'table', caption: 'Rotherham households by accommodation type, Census 2021 TS044', head: ['Accommodation type', 'Households'], rows: [
          ['Semi-detached', '56,050'],
          ['Detached', '25,415'],
          ['Terraced', '20,689'],
          ['Purpose-built flats', '9,957'],
          ['Caravan or other temporary structure', '42'],
          ['All households', '113,924']
        ] },
        { kind: 'p', text: 'When a learner vibe codes, the AI writing the code is choosing each word and symbol with settings like these; a more adventurous setting can produce inventive solutions or invented functions that do not exist. AI agents face the same trade-off when they choose actions. Knowing what the dial does helps a learner read AI output with the right amount of suspicion. We build that understanding in stages: probability games in the how-to-think programme for younger children, tested vibe coding projects for teenagers, and Python-built AI agents for older students and adults, with Copilot Studio agents taught only one-to-one. See <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our UK students\' AI agents course</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no tie to the Office for National Statistics or Nomis. The household counts are theirs, while the generator and anything it gets wrong are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counters in a bag to language models',
    intro: 'School year is a starting guess that the free lesson refines.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Chance, patterns and logic.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with AI, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Probability and AI', p: 'Probability, sampling and AI beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Generative AI', p: 'How models generate, and how agents act.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and randomness',
    h2: 'Why does the same question get different answers?',
    intro: 'Because the AI is sampling, and temperature decides how boldly.',
    p1: 'At a low setting the Rotherham generator made every home semi-detached; at a high one it filled the borough with caravans. Chatbots do the same with words.',
    p2: 'A learner who has turned the dial on real data understands why AI answers vary, and why more creative settings need more checking.',
    closer: 'A Rotherham teenager who understands why AI answers wander will use these tools with more judgement than most adults, which makes coding well worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Wickersley to Dinnington, online',
    intro: 'Any home across the borough needs only a computer and a stable connection.',
    cells: [
      { h3: 'Learner at the helm', p: 'Students do the writing, prompting and testing while the tutor follows on screen share and prompts with questions.' },
      { h3: 'Starting point set by the trial', p: 'Year 4 or Year 13, the free lesson shows where to begin, keeping the exam board in mind.' },
      { h3: 'Free first lesson', p: 'A full session at no charge, closing with clear advice.' },
      { h3: 'Stage-matched classes', p: 'Five to ten UK learners at a similar level.' },
      { h3: 'Two sessions a week', p: 'School holidays stay free.' },
      { h3: 'Steady local time', p: 'Our tutors shift with the UK clocks.' }
    ],
    spec: { title: 'Why small groups work online', p: 'Five Rotherham learners at the same stage, free at the same hour, rarely live near each other. Online, each gets a well-matched class.' }
  },

  fees: {
    h2: 'Rotherham fees',
    intro: 'Rotherham pays the same international rate we charge in every country but India.',
    first: 'A full trial lesson free, followed by advice on a course.',
    group: 'Around eight live small-group lessons a month.',
    private: 'Around eight live one-to-one lessons a month.',
    closer: 'Fees are set in US dollars rather than sterling. Billing starts when the trial has settled a course and weekly time, and the pricing page covers holidays, missed sessions and switching between group and private study.'
  },

  reviewsH2: 'What South Yorkshire and UK families say on Google',

  book: {
    h2: 'Book a free Rotherham lesson',
    intro: 'A line about the learner\'s age or school year, plus a hobby, is all we need. A first lesson might be a counters-and-chance game, a Scratch project built with AI, beginner Python, or a mini household generator.',
    success: 'Thank you. The Rotherham request is with us.'
  },

  faq: {
    h2: 'Rotherham questions',
    intro: 'Temperature, vibe coding, AI agents and the practical side.',
    items: [
      { q: 'What is the population of Rotherham?', a: 'The 2021 census counted 265,807 in Rotherham borough; the ONS gives 71,535 for the Rotherham built-up area.' },
      { q: 'Can Rotherham learners take coding and AI classes online?', a: 'Yes. All lessons are live on video, open to ages 6 to 67 across the borough.' },
      { q: 'What does temperature mean in AI?', a: 'A setting that controls how adventurous an AI is when choosing its next word or action; low is repetitive, high is varied and riskier.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, with learners planning first, then reading and testing every piece of AI-written code.' },
      { q: 'Is there a route into building AI agents?', a: 'Yes. After some Python, older learners build agents with us, and Copilot Studio is covered through private sessions.' },
      { q: 'Do you teach in person?', a: 'No, everything is online and live.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes: computer science and maths, taught so the ideas make sense, with no promise of particular grades.' },
      { q: 'What ages can join?', a: 'Learners aged 6 to 67.' },
      { q: 'How much are lessons?', a: 'Nothing for the trial. From then on: USD 100 per month for group classes, USD 150 per month for one-to-one.' },
      { q: 'Do lessons stop in school holidays?', a: 'Yes; share the dates with us.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More South Yorkshire pages',
    html: 'For another AI experiment, <a class="cg-inline-link" href="/ai-and-programming-classes-in-barnsley">Barnsley</a> scores models in bits, and <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> and <a class="cg-inline-link" href="/best-coding-class-in-doncaster">Doncaster</a> have their own pages. Zoom out to <a class="cg-inline-link" href="/coding-classes-in-south-yorkshire">all of South Yorkshire</a> or the wider <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a> region, or browse every town from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Rotherham and South Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-south-yorkshire', label: 'South Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rhm .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-rhm .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-rhm .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-rhm .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rhm .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-rhm .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-rhm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rhm .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-rhm .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-rhm .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Rotherham (E08000018). Nomis Census 2021 TS001 265,807. TS007A: 15 to 19 14,472 (5.4%, England 5.7%); 20 to 24 14,098 (5.3%, 6.0%); 40 to 44 15,280 (5.7%, 6.3%); 50 to 54 19,466 (7.3%, 6.9%); 60 to 64 16,408 (6.2%, 5.8%); 75 to 79 10,626 (4.0%, 3.6%). ONS 2021 BUAs: Rotherham 71,535; Wickersley and Bramley 24,655; Swinton 15,910; Swallownest and Aston 14,910; Dinnington 10,960; Brinsworth 8,760; Kiveton Park 7,100. TS044 (NM_2062_1) households 113,924: detached 25,415; semi 56,050; terraced 20,689; purpose-built flats 9,957; converted house 723; other converted 378; commercial building 670; caravan or temporary 42.',
    localProject: 'Softmax with temperature on log shares: T0 semi 100%; T0.5 semi 72.8, detached 15.0, caravan ~0 (1.203 bits); T1 census (1.862); T2 semi 33.0, caravan 0.9 (2.422); T5 caravan 4.9 (2.862). 1,000 samples (seed 2026): T0.5 735 semi, 0 caravans; T2 7 caravans. Top-3: 54.9/24.9/20.3. Lesson family: softmax temperature, greedy vs sampled, top-k, output entropy.',
    requiredMentions: [
      '265,807',
      '71,535',
      'Wickersley',
      'Swinton',
      'Dinnington',
      'Brinsworth',
      '113,924',
      'softmax',
      'top-k'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS044 Accommodation type, Rotherham and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'Nomis Census 2021 TS001 and TS007A, Rotherham and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' }
    ],
    rejectedClaims: [
      'The temperature settings of any named chatbot: not claimed; the page explains the general idea only.',
      'Industrial and steel history: not read from a source; not claimed.',
      'Anything about the people living in caravans: not analysed; only the count is used.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
