'use strict';
// Bognor Regis (cg- town page, UK cluster Phase 8, towns band A, row 402). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what happens when an AI agent keeps checking an
// experiment until it finds a result? (A/A tests, peeking, optional stopping, p-hacking, a corrected threshold).
// Data (read 29 September 2026): Nomis Census 2021 TS045 car or van availability (NM_2063_1) for all 548 output areas in
// Arun (E07000224): 72,631 households, 12,245 with no car or van. Value per area: % of households with no car.
// Our run (scratchpad bgr/peek2.py): 4,000 random splits of the 548 areas into two halves of 274 (an A/A test: no real
// difference by construction); areas are added to each half one pair at a time and a Welch t-test compares the halves.
// Share of splits declared "different" at p < 0.05: one test at the end 5.2%; checking every 50 areas 14.3%; every 10
// areas 26.9%; after every area 35.6%. Checking every 10, the median stopping point was 60 areas per half. Checking every
// 10 with p < 0.0075 instead: 5.1%. (One-person household share gives 5.0 / 14.8 / 27.4 / 36.2%, not shown.) Vectorised
// p-values spot-checked against scipy ttest_ind.
// Lesson family: optional stopping / peeking, A/A tests, p-hacking by an autonomous agent, stricter threshold for repeated
// looks. Screened: "peeking", "optional stopping", "p-hacking", "A/A test" 0 hits. Darlington's "stopping rule" is about
// ending an agent's verification loop, a different idea; Ashford (significance vs effect size) is the neighbouring family.
// Place facts: Arun (E07000224) TS001 164,889. ONS 2021 BUAs (published): Bognor Regis 68,435; Rustington 33,885;
// Littlehampton 19,065. postcodes.io (Arun) suburban areas: Felpham, Aldwick, Middleton-on-Sea, North Bersted, South
// Bersted, Rose Green, Nyetimber, Elmer; Pagham and Flansham villages.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BOGNOR REGIS', label: 'Bognor Regis', blurb: 'Vibe coding and AI agents classes for Bognor Regis, with an experiment on how an agent that keeps checking can "discover" a difference that is not there.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-bognor-regis',
  code: 'bgr',
  accent: '#5A638A',
  accentRationale: 'Bognor Regis: a slate blue (4.72:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Bognor Regis',
    eyebrow: 'Bognor Regis, Arun, West Sussex, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'West Sussex', href: '/coding-classes-in-west-sussex' },
    { label: 'Chichester', href: '/best-coding-class-in-chichester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bognor Regis, England',
  title: 'Vibe Coding and AI Agents Classes in Bognor Regis | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Bognor Regis, Felpham, Aldwick and Pagham learners aged 6 to 67, private or in groups. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Bognor Regis, with a Census experiment on AI agents that keep testing until they find something.',
  twitterDescription: 'Bognor Regis vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Bognor Regis',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Bognor Regis and across Arun, taught live with careful reasoning first.'
  },

  h1: 'Vibe coding and AI agents classes in Bognor Regis',
  capsuleQ: 'Where can Bognor Regis learners find the best vibe coding and AI agents classes?',
  capsule: 'Arun district had 164,889 usual residents at the 2021 census, and the ONS counts 68,435 people in the Bognor Regis built-up area. Felpham, Aldwick, Middleton-on-Sea, North Bersted and Nyetimber are among the suburbs recorded around the town, and Pagham is a village in the same district. Learners anywhere in Arun, aged 6 to 67, can study vibe coding, AI agents, Python, coding and maths live on video with a tutor in India, on their own or in a class of five to ten who are at one level. Every course begins with how to think, so an agent\'s conclusions get questioned rather than copied. The trial lesson is free and ends with a course we recommend. The Bognor Regis experiment gives an automated tester two identical groups of Census areas and lets it keep checking until something looks significant. Monthly fees after that are USD 100 in a group or USD 150 for private lessons.',
  lead: 'AI agents are increasingly asked to run experiments on their own: try two versions of a web page, a prompt or a feature, watch the numbers, and report which one wins. An eager agent will check the results again and again and stop the moment the difference looks significant. That habit, called peeking or optional stopping, quietly breaks the statistics. This project shows how badly, using a test where the right answer is known. Arun\'s 548 Census output areas are shuffled into two random halves, so any difference between them is pure chance, and a simulated agent compares them as the areas arrive.',
  wa: 'Hello Modern Age Coders, may we book a free vibe coding or AI agents lesson for a learner in Bognor Regis?',

  picks: {
    eyebrow: 'Bognor Regis course picks',
    h2: 'Bognor Regis courses in thinking, vibe coding and agents',
    intro: 'Four starting points by age. Each opens with a live lesson that is free, and booking needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: fair tests, deciding the rules before looking, and luck versus pattern.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games described to an AI, then tested properly by the young maker.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the peeking-agent experiment.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that run experiments, evaluation that holds up and rules agents must follow.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bognor Regis and Arun',
      h2: 'Bognor Regis, Felpham, Aldwick and the Arun coast towns',
      intro: 'ONS built-up area counts for three places in Arun, and suburbs recorded around Bognor.',
      body: [
        { kind: 'table', caption: 'Three ONS built-up areas in Arun, 2021 census residents', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Bognor Regis', '68,435'],
          ['Rustington', '33,885'],
          ['Littlehampton', '19,065']
        ] },
        { kind: 'p', text: 'We print these ONS counts one by one and do not total them; Arun\'s 164,889 is a separate census figure. Postcodes.io lists Felpham, Aldwick, Middleton-on-Sea, North Bersted, South Bersted, Rose Green, Nyetimber and Elmer as suburban areas in Arun, and Pagham and Flansham as villages. West Sussex schools follow England\'s national curriculum; send the holiday weeks and we will steer lessons around them.' },
        { kind: 'callout', h3: 'West Sussex, the South East and our method', p: 'More options are on <a class="cg-inline-link" href="/coding-classes-in-west-sussex">coding classes in West Sussex</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Why reasoning comes before AI tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bognor Regis project',
      h2: 'An agent that peeks: A/A tests and optional stopping on Arun Census data',
      intro: 'Two groups that are identical by design, an impatient tester, and 4,000 repeats.',
      body: [
        { kind: 'p', text: 'Car availability for every one of Arun\'s 548 output areas comes from Census 2021 table TS045, fetched through the Nomis API. Across 72,631 households, 12,245 have no car or van, and each area\'s share becomes one number. The areas are shuffled and split into two halves of 274. Because the split is random, the halves differ only by chance; statisticians call this an A/A test, and a fair method should call them "different" about 5% of the time at the usual p < 0.05 threshold.' },
        { kind: 'p', text: 'The simulated agent receives the areas one pair at a time, one for each half, and runs a Welch t-test comparing the two averages. A patient agent waits until all 274 pairs are in and tests once. An impatient agent tests as it goes and stops as soon as p drops below 0.05, announcing that the groups differ. Python repeats the whole thing on 4,000 different random splits.' },
        { kind: 'table', caption: 'How often identical halves of Arun are declared different, 4,000 random splits, our Python simulation on Census 2021 data', head: ['How the agent checks', 'Splits declared different'], rows: [
          ['Once, after all 274 pairs', '5.2%'],
          ['Every 50 pairs', '14.3%'],
          ['Every 10 pairs', '26.9%'],
          ['After every single pair', '35.6%'],
          ['Every 10 pairs, but needing p < 0.0075', '5.1%']
        ] },
        { kind: 'p', text: 'Each extra look is another chance for random noise to cross the line, and once it has crossed, the impatient agent stops and never sees it drift back. Checking after every pair turns a 5% false alarm rate into more than 35%. When checking every 10 pairs, half the false alarms had already been declared by the 60th pair. There are honest fixes. One is to fix the sample size in advance and test once. Another, if you must look repeatedly, is a stricter threshold: in this setup, demanding p < 0.0075 at each of the 27 looks brings the false alarm rate back to 5.1%. Proper sequential tests do the same job with formal guarantees.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Flip two fair coins, stop the moment one is ahead by three, and see how often "one is luckier" is declared.' },
          { h3: 'Ages 11 to 15', p: 'Split Arun\'s areas at random in Python and compare the two averages as the areas come in.' },
          { h3: 'Ages 15 and up', p: 'Simulate the peeking agent, measure its false alarm rate and find a threshold that fixes it.' }
        ] },
        { kind: 'callout', h3: 'Census numbers, our simulation', p: 'Car availability counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The random splits, the agent\'s tests and every percentage in the table are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents and experiments',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'An agent rewarded for finding something will find something.',
      body: [
        { kind: 'table', caption: 'From the peeking experiment to real AI agents', head: ['In the Arun simulation', 'When an agent runs experiments'], rows: [
          ['The halves were identical by design', 'Run an A/A test to check the pipeline'],
          ['Peeking every pair gave 35.6% false alarms', 'Repeated checks inflate false findings'],
          ['The agent stopped as soon as p < 0.05', 'Stopping rules must be set before looking'],
          ['A stricter threshold restored 5.1%', 'Correct for every extra look'],
          ['4,000 repeats showed the pattern', 'One lucky run proves nothing']
        ] },
        { kind: 'p', text: 'Tell an agent "keep testing until you find a winner" and it will obey, which is exactly the problem. Vibe coding lets a learner describe a program while an AI writes it; in Bognor Regis our students also write down the stopping rule and the threshold before any data arrives, then check the code the AI returns actually follows them. The same discipline applies to any agent given tools and a goal: the rules for declaring success belong in its instructions, not in its judgement. Learners start building agents when their Python is dependable, usually older teens and adults, and Copilot Studio agents are one-to-one lessons only. Our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents pathway for UK students</a> builds on one principle, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no tie to the Office for National Statistics, Nomis or postcodes.io. Their open data is all we used; the simulated agent and any flaws in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From coin races to self-running experiments',
    intro: 'School year is only a first guess; the trial lesson shows the right level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair tests, rules set in advance and luck versus skill.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps planned by the learner, built with AI and tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and experiments', p: 'Simulation, hypothesis tests and false alarms beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Agents that test things', p: 'Python agents, evaluation and the guard rails they need.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and p-hacking',
    h2: 'What is p-hacking, and why can an AI agent do it without meaning to?',
    intro: 'P-hacking is getting a "significant" result by trying again and again, for example by testing repeatedly and stopping at the first p below 0.05, and an agent told to keep going until it finds a result does this automatically.',
    p1: 'On two identical random halves of Arun\'s 548 Census areas, a single final test raised a false alarm 5.2% of the time, while an agent checking after every pair raised one 35.6% of the time.',
    p2: 'Learners who have watched that happen ask of any agent\'s experiment: when did it decide to stop, and was that rule written down first?',
    closer: 'Setting the rules before the data arrives keeps Bognor Regis teenagers in charge of the agents they build, which is well worth learning to code for in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Felpham to Pagham, taught online',
    intro: 'Any computer with a camera and a connection that copes with video will do.',
    cells: [
      { h3: 'Learners type everything', p: 'Code, prompts and runs are the student\'s own work, while the tutor watches the screen share and asks for the reasoning.' },
      { h3: 'Planned from the trial', p: 'The free lesson shows what is already known and fixes the first topic; any exam board is noted.' },
      { h3: 'First lesson on us', p: 'The trial costs nothing and finishes with our course advice.' },
      { h3: 'One level per group', p: 'Five to ten learners from across the UK, all at the same stage.' },
      { h3: 'Two per week', p: 'Paused during school holidays.' },
      { h3: 'Fixed local time', p: 'Our tutors follow British clock changes so the lesson stays at your usual hour.' }
    ],
    spec: { title: 'Why lessons run online', p: 'Five learners at one level, all free the same evening, rarely live close together. On video, the distance disappears.' }
  },

  fees: {
    h2: 'Bognor Regis fees',
    intro: 'Bognor learners are charged the international prices that cover everywhere except India.',
    first: 'One complete free lesson, then our advice.',
    group: 'Close to eight live group lessons every month.',
    private: 'Close to eight live one-to-one lessons every month.',
    closer: 'Charges are in US dollars, not sterling, and billing begins only after the trial has settled a course and a weekly time. Holidays, missed lessons and swapping between group and private are all on the pricing page.'
  },

  reviewsH2: 'Sussex families and learners around Britain, reviewing us on Google',

  book: {
    h2: 'Book a free Bognor Regis lesson',
    intro: 'Tell us the learner\'s age or year and a couple of interests. A trial could be a coin race, a Scratch game designed alongside an AI, early Python, or a small experiment with rules set in advance.',
    success: 'Thank you. Your Bognor Regis request is with us.'
  },

  faq: {
    h2: 'Bognor Regis questions',
    intro: 'Peeking, A/A tests, the Census experiment, vibe coding, agents and practical points.',
    items: [
      { q: 'How many people live in Bognor Regis?', a: 'The ONS gives 68,435 for the Bognor Regis built-up area at the 2021 census; Arun district had 164,889.' },
      { q: 'Are vibe coding and AI agents classes available online in Bognor Regis?', a: 'Yes, on live video for ages 6 to 67 in Bognor, Felpham, Aldwick, Pagham and elsewhere in Arun.' },
      { q: 'What is an A/A test?', a: 'An experiment where both groups get exactly the same thing. Any difference is chance, so it checks that your testing method raises false alarms only as often as it should.' },
      { q: 'What does peeking mean in A/B testing?', a: 'Checking results repeatedly while data is still arriving and stopping when they look significant. It raises the false alarm rate well above 5%, to 35.6% in our Arun simulation.' },
      { q: 'What does the Bognor Regis project involve?', a: 'Splitting Arun\'s 548 Census areas into random halves, letting a simulated agent test them as data arrives, and measuring how often it finds a difference that is not there.' },
      { q: 'What is vibe coding?', a: 'Describing a program in plain words while an AI writes the code. We teach it at every age, with the learner planning and testing everything.' },
      { q: 'When do students start building AI agents?', a: 'After Python is secure, commonly in the late teens or as adults; Copilot Studio agents are taught privately only.' },
      { q: 'Is there support for GCSE and A level?', a: 'For computer science and maths, yes; the goal is understanding, and no grade is promised.' },
      { q: 'What are the lesson fees?', a: 'The trial is free. After it, USD 100 a month buys group lessons and USD 150 a month private ones.' },
      { q: 'Do lessons run in the school holidays?', a: 'No; we pause them once you send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More West Sussex and South East pages',
    html: 'Sussex pages with their own projects: <a class="cg-inline-link" href="/best-coding-class-in-chichester">Chichester</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-worthing">Worthing</a>, <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-crawley">Crawley</a>. Every other area we cover is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bognor Regis and West Sussex',
  footerPlaces: [
    { href: '/coding-classes-in-west-sussex', label: 'West Sussex' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bgr .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.8vw, 2.3rem); }
.cg-root.cg-bgr .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-bgr .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; border-radius: 0 6px 6px 0; }
.cg-root.cg-bgr .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bgr .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.019em; }
.cg-root.cg-bgr .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-bgr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bgr .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bgr .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-bgr .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Arun (E07000224), Census 2021 TS001 usual residents 164,889. ONS 2021 BUAs (published): Bognor Regis 68,435; Rustington 33,885; Littlehampton 19,065. postcodes.io (Arun): Felpham, Aldwick, Middleton-on-Sea, North Bersted, South Bersted, Rose Green, Nyetimber, Elmer (suburban areas); Pagham, Flansham (villages).',
    localProject: 'Census 2021 TS045 for 548 Arun OAs: 72,631 households, 12,245 no car. 4,000 random splits into halves of 274 (A/A); Welch t-test on no-car share as pairs arrive. Declared different at p < 0.05: final only 5.2%; every 50 pairs 14.3%; every 10 26.9%; every pair 35.6%; every 10 at p < 0.0075 5.1%. Median stop (every 10) 60 pairs. Lesson family: optional stopping, peeking, A/A test, p-hacking, corrected threshold.',
    requiredMentions: [
      '164,889',
      '68,435',
      '72,631',
      '12,245',
      'Felpham',
      'Aldwick',
      'Nyetimber',
      'Bersted',
      'peeking',
      'A/A test'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS045 car or van availability and TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis API dataset NM_2063_1, Census 2021 TS045 car or van availability.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2063_1.def.sdmx.json' },
      { claim: 'postcodes.io places: suburban areas and villages in Arun.', url: 'https://api.postcodes.io/places?q=Felpham' }
    ],
    rejectedClaims: [
      'Seaside resort history and the Regis title: not read from a source; not claimed.',
      'Why some areas have fewer cars: no cause claimed; the data only feeds a chance-only experiment.',
      'Named sequential test methods and their guarantees: mentioned in general terms only.',
      'Sum of the built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
