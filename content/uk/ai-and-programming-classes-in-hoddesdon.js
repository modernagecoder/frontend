'use strict';
// Hoddesdon (cg- town page, UK cluster Phase 10, towns band B, row 556). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can you rank things fairly from nothing but
// noisy "which is more?" judgements, and what does the order of the judgements do to the answer? (Elo rating.)
// Data (read 30 September 2026): Nomis Census 2021 TS006 population density for the 120 output areas of the Hoddesdon
// built-up area that lie in Broxbourne (E07000095), per the ONS OA21 to BUA22 lookup. Density 114 to 17,778 residents per
// square kilometre, median 5,592. This is the hidden truth; the judge is simulated: it names the denser of two areas with
// probability 1/(1+exp(-(ln a - ln b)/0.5)), right 78.3% of the time over 19,827 random pairs (seed 2026).
// Our run (scratchpad hdd/elo.py, elo2.py): Elo from 1,000, 30 repeats per cell. Spearman correlation with true density
// and true top 10 found: 600 judgements K16 0.811 / 4.0, K64 0.817 / 4.2; 1,200: 0.891 / 4.5, 0.889 / 4.6; 2,400: 0.934 /
// 6.0, 0.917 / 5.7; 4,800: 0.964 / 7.3, 0.934 / 6.3. Same 2,400 judgements in 100 orders: rank spread median 13.5 (K16,
// max 30, one leader), 24 (K32, 6 leaders), 41 (K64, 11 leaders). Matched pairs only (within 10 places): 4,800
// judgements K16 rho -0.004, top 10 found 2.0.
// Lesson family: Elo rating from pairwise judgements. Screened: "elo rating", "k-factor", "chatbot arena" 0 hits;
// claimed in claims.txt. Hertfordshire county page = latency; Cheshunt = anti-aliasing.
// Place facts: ONS 2021 BUA (published): Hoddesdon 40,615 (spans Broxbourne and East Hertfordshire). Broxbourne TS001
// 99,009 (a required mention on the Cheshunt page; printed only). postcodes.io suburban areas whose nearest postcode is
// in the Hoddesdon BUA: Rye Park (EN11), Wormley, Broxbourne, Turnford (EN10). Stanstead Abbotts, St Margarets and
// Great Amwell fall in other built-up areas and are left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HODDESDON', label: 'Hoddesdon', blurb: 'AI and programming classes for Hoddesdon, with a project that ranks 120 census areas using only noisy head-to-head judgements and the Elo rating.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-hoddesdon',
  code: 'hdd',
  accent: '#9C4E30',
  accentRationale: 'Hoddesdon: a terracotta (5.92:1 contrast on white), chosen by hand as a muted tone kept clear of the other Hertfordshire pages',
  pageType: 'city',
  place: {
    name: 'Hoddesdon',
    eyebrow: 'Hoddesdon, Broxbourne, Hertfordshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hertfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Hertfordshire', href: '/coding-classes-in-hertfordshire' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hoddesdon, Hertfordshire',
  title: 'AI and Programming Classes in Hoddesdon | Ages 6 to 67',
  description: 'AI, programming and Python classes live online for Hoddesdon, Rye Park, Wormley and Turnford, with vibe coding and AI agents for ages 6 to 67. First lesson free.',
  ogDescription: 'AI and programming lessons for Hoddesdon, with a project that ranks the town using only head-to-head judgements, the way AI chatbots are ranked.',
  twitterDescription: 'Hoddesdon AI and programming classes, live online for ages 6 to 67. Book the free first lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'AI and Programming Classes for Hoddesdon',
    description: 'Live online AI, programming, Python and maths lessons for children, teenagers and adults in Hoddesdon and Broxbourne, including a project on ranking from pairwise comparisons with Elo ratings.'
  },

  h1: 'AI and programming classes in Hoddesdon',
  capsuleQ: 'Where can Hoddesdon learners find the best AI and programming classes?',
  capsule: 'Hoddesdon had 40,615 usual residents as an ONS built-up area in the 2021 census; that area reaches from Broxbourne borough, population 99,009, a little way into East Hertfordshire. Gazetteer suburbs in the town include Rye Park, Wormley, Broxbourne and Turnford. From age six up to 67, Hoddesdon learners can study AI, programming, Python, vibe coding or maths with Modern Age Coders; lessons are live on camera with an India-based tutor, solo or in a class of five to ten at matching level. The Hoddesdon project borrows the method public leaderboards have used to rank AI chatbots: nobody scores anything directly, people just say which of two is better, and an Elo rating turns thousands of those verdicts into a league table. Learners build one and discover how fragile it can be. We charge nothing for a first lesson; regular tuition then runs at USD 100 monthly in a shared class or USD 150 monthly on your own.',
  lead: 'Arpad Elo designed his rating for chess, where the only evidence is who beat whom. After every game the winner takes points from the loser, more if the win was a surprise and fewer if it was expected. The same arithmetic has since spread well beyond chess, and in 2023 it was used to rank large language models, which volunteers compare two at a time. Hoddesdon learners test it where they can see the right answer: 120 census areas of their own town, a judge who is right about four times in five, and the question of which areas are the most densely populated.',
  wa: 'Hello Modern Age Coders, we are in Hoddesdon and would like a free AI or programming lesson.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'AI and programming courses for Hoddesdon',
    intro: 'Pick the band that matches. The opening live lesson of every course is free, with no card required.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: running a fair knockout and asking whether the winner really is the strongest.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: a Scratch game designed by the child and built with an AI helper.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'AI and machine learning for teenagers, with the Hoddesdon rating project and honest evaluation.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Generative AI, how models are compared, and building agents on top of them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hoddesdon facts',
      h2: 'Hoddesdon, Rye Park, Wormley and Turnford',
      intro: 'Two census counts and four gazetteer suburbs, with sources.',
      body: [
        { kind: 'table', caption: 'Census 2021, usual residents (ONS)', head: ['Area', 'Residents'], rows: [
          ['Hoddesdon built-up area', '40,615'],
          ['Broxbourne borough', '99,009']
        ] },
        { kind: 'p', text: 'The two counts use different boundaries: the borough also covers Cheshunt and Waltham Cross, while the built-up area of Hoddesdon crosses slightly into East Hertfordshire. Our project uses the 120 census areas of the town that lie inside Broxbourne. In the postcode gazetteer Rye Park is listed under EN11 and Wormley, Broxbourne and Turnford under EN10, and in each case the nearest postcode belongs to the Hoddesdon built-up area; Stanstead Abbotts, St Margarets and Great Amwell belong to other built-up areas and are not included. Hertfordshire schools work to the English national curriculum; quote us a year group between Year 2 and Year 13 and we can pitch the trial, with GCSE and A level computer science covered alongside school.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'See <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-cheshunt">Cheshunt</a>, the other large town in Broxbourne, and the <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire page</a>. For our view of what AI tools cannot replace, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hoddesdon project',
      h2: 'Elo ratings: ranking 120 areas from noisy head-to-head judgements',
      intro: 'A true answer the learner can check, a simulated judge who makes mistakes, and a rating that updates after every verdict.',
      body: [
        { kind: 'p', text: 'Census table TS006 gives the population density of every output area. Across the 120 areas of Hoddesdon in Broxbourne it runs from 114 to 17,778 residents per square kilometre, with a median of 5,592. That list is the truth, and the rating system never sees it. Instead a simulated judge is shown two areas and says which is denser. The judge is almost always right when the difference is large and close to guessing when two areas are similar; over 19,827 random pairs it was right 78.3 per cent of the time.' },
        { kind: 'p', text: 'Every area starts on 1,000 points. Before each verdict the program works out how likely each side was to win from the gap in their ratings; afterwards the winner gains, and the loser drops, the same amount: a fixed number K times the difference between what happened and what was expected. A large K makes ratings jump quickly; a small K makes them steady but slow. In Python the whole update is three lines inside a loop.' },
        { kind: 'table', caption: 'How well Elo recovers the true order, average of 30 runs of random pairs, our simulation', head: ['Judgements', 'Rank match, K 16', 'True top 10 found, K 16', 'Rank match, K 64', 'True top 10 found, K 64'], rows: [
          ['600', '0.81', '4.0', '0.82', '4.2'],
          ['1,200', '0.89', '4.5', '0.89', '4.6'],
          ['2,400', '0.93', '6.0', '0.92', '5.7'],
          ['4,800', '0.96', '7.3', '0.93', '6.3']
        ] },
        { kind: 'p', text: 'Rank match here is the Spearman correlation between the ratings and the true densities, where 1 would be perfect. More judgements helped steadily: with 4,800, about 80 appearances per area, a steady K of 16 found 7.3 of the true top 10 on average. A jumpy K of 64 kept pace at first but fell behind later, because each fresh result kept knocking the ratings around.' },
        { kind: 'p', text: 'The learner then takes one fixed set of 2,400 judgements and replays them in 100 different orders. The verdicts are identical; only the sequence changes. With K 16 the typical area moved 13.5 places between its highest and lowest finish, and the same area finished top every time. With K 64 the typical area moved 41 places and 11 different areas finished top. Elo remembers recent results more than old ones, so the answer depends on when things happened, not only on what happened. The final test compares areas only with near neighbours in the true order, the way many online games try to pair players of similar strength. After 4,800 such judgements the rank match was about zero: when every contest is between near-equals, the verdicts are close to coin tosses and carry almost no information.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Rank six mystery jars by weight using only a balance, two at a time, and count the weighings needed.' },
          { h3: 'Ages 11 to 15', p: 'Code the Elo update in Python, run a league of eight teams and watch the table change after each match.' },
          { h3: 'Ages 15 and up', p: 'Simulate the noisy judge, sweep K and the number of judgements, and measure how order changes the result.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Densities are Census 2021 table TS006 from Nomis, under the Open Government Licence. The judge and all verdicts are simulated by us, not collected from people, and every figure is from our own runs, which is why they are averages over repeats. Chatbot Arena is described in a 2023 post by LMSYS.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'The AI connection',
      h2: 'What an Elo experiment teaches about ranking AI models',
      intro: 'Leaderboards of chatbots are built from exactly this kind of pairwise vote.',
      body: [
        { kind: 'table', caption: 'From the Hoddesdon ratings to AI leaderboards', head: ['In the project', 'For AI rankings'], rows: [
          ['600 judgements found only 4 of the true top 10', 'A new leaderboard with few votes is mostly noise'],
          ['Replaying the same verdicts in a new order changed the leader', 'A rating can depend on when votes arrived, not only on the votes'],
          ['K 64 fell behind K 16 in the long run', 'Settings that make a ranking lively also make it less reliable'],
          ['Near-equal contests told us almost nothing', 'Comparisons between very similar systems say little; mix the pairings'],
          ['The judge was right 78.3 per cent of the time', 'Human and AI judges make mistakes too; allow for them']
        ] },
        { kind: 'p', text: 'When LMSYS launched Chatbot Arena in 2023, it asked visitors to chat with two anonymous models side by side and vote for the better answer, and it turned those votes into Elo ratings. Knowing how that arithmetic behaves makes a learner a sharper reader of every AI league table they meet. The same habit carries into vibe coding, where the learner describes a program to an AI and then checks its work: an assistant asked to "rank these" will quietly choose a method, and the learner should ask which one and why. AI agents come after learners write Python independently, typically older teenagers and adults, and Copilot Studio agents are one-to-one only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither LMSYS nor Nomis, the ONS or postcodes.io has any tie to Modern Age Coders; their public material fed a simulation that we designed and ran ourselves.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From balance scales to rating systems in Python',
    intro: 'We place by school year and confirm in the free lesson.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Fair tests, comparisons and what counts as evidence.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and checked by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and AI', p: 'Simulation, probability and evaluation of models in Python.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Generative AI and agents', p: 'How models are built and compared, then agents that use them.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Ratings and AI',
    h2: 'What is an Elo rating, and how is it used to rank AI models?',
    intro: 'An Elo rating is a score that rises when you win and falls when you lose, by an amount that depends on how surprising the result was, and it is used to rank AI models by turning many human votes between two anonymous answers into a single league table.',
    p1: 'In our Hoddesdon simulation, 4,800 noisy judgements between 120 census areas recovered the true density order with a rank match of 0.96, but replaying 2,400 identical judgements in different orders with a large K produced 11 different leaders.',
    p2: 'After building the rating, learners ask of any AI leaderboard: how many votes, in what order, and between which pairs?',
    closer: 'A Hoddesdon teenager who has seen a league table change leader without a single new vote will read AI rankings with care, and coding the rating is how that sticks.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'How Hoddesdon learners are taught',
    intro: 'Sessions happen at home, on any laptop or desktop that has a webcam. Broadband that stays connected beats broadband that is merely quick.',
    cells: [
      { h3: 'Code by the learner', p: 'Every line is typed and run by the person learning; the tutor asks the questions.' },
      { h3: 'A level found in the trial', p: 'We see the learner work first, then recommend a course that fits.' },
      { h3: 'Trial lesson at no cost', p: 'A complete lesson, free of charge, booked without payment details.' },
      { h3: 'Five to ten, same level', p: 'Groups are formed by ability from learners all over the UK.' },
      { h3: 'Twice a week in term', p: 'Tell us the Hertfordshire holidays you follow and we skip them.' },
      { h3: 'Same UK time all year', p: 'The tutor shifts when the clocks change; your slot stays put.' }
    ],
    spec: { title: 'Why live and online', p: 'A tutor watching live notices confusion before it sets in. Recruiting across the UK means groups can be matched closely by level, which one town alone seldom supports.' }
  },

  fees: {
    h2: 'Fees for Hoddesdon',
    intro: 'Hoddesdon learners pay our standard international fees.',
    first: 'The first lesson in full, at no charge, with a course suggestion afterwards.',
    group: 'Group lessons, around eight per month.',
    private: 'Private lessons, around eight per month.',
    closer: 'We bill in US dollars; there is no sterling price list. The trial is not billed, and invoices start after a course and a regular slot are agreed. The pricing page explains holidays, missed lessons and changes between group and private.'
  },

  reviewsH2: 'Google verdicts from Broxbourne-area parents and learners across Britain',

  book: {
    h2: 'Book a free lesson in Hoddesdon',
    intro: 'Mention how old the learner is, or their year group, plus one thing they are into. We will shape the trial around it: ranking jars with a balance, an AI-assisted Scratch game, a first Python script, or a small league table that updates its own ratings.',
    success: 'Thank you. We have received your Hoddesdon request.'
  },

  faq: {
    h2: 'Hoddesdon: common questions',
    intro: 'About Elo ratings, the project, AI and how lessons work.',
    items: [
      { q: 'What is the population of Hoddesdon?', a: 'The ONS built-up area had 40,615 usual residents at the 2021 census. Broxbourne borough had 99,009.' },
      { q: 'Do you teach AI and programming in Hoddesdon?', a: 'We do. Learners aged 6 to 67 from Rye Park, Wormley, Broxbourne, Turnford and every other corner of town take part over live video.' },
      { q: 'What is the K factor in an Elo rating?', a: 'The largest number of points a single result can move a rating. A big K reacts fast to new results; a small K is steadier but slower.' },
      { q: 'What did the Hoddesdon project show?', a: 'With 4,800 simulated judgements, Elo recovered the true density order with a rank match of 0.96. Replaying 2,400 identical judgements in 100 orders with K 64 produced 11 different leaders.' },
      { q: 'Why did comparing only close neighbours fail?', a: 'Between near-equal areas the judge is nearly guessing, so each verdict carries little information. After 4,800 such judgements the rank match was about zero.' },
      { q: 'What is vibe coding?', a: 'Asking an AI to write code from your description, then reading, running and fixing what it produces. We teach it alongside the coding skills needed to judge the result.' },
      { q: 'When do learners start on AI agents?', a: 'Once they can write Python unaided, usually older teenagers and adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Does this help with GCSE or A level?', a: 'Yes, through programming, algorithms and data handling. We do not promise grades.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free, then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Are there lessons in the school holidays?', a: 'Only if you would like them. Send the dates you want off.' }
    ]
  },

  next: {
    eyebrow: 'Hertfordshire',
    h2: 'More Hertfordshire towns',
    html: 'Down the Lea valley, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-cheshunt">Cheshunt</a> has a page of its own; so do <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-harlow">Harlow</a> in Essex and <a class="cg-inline-link" href="/ai-and-programming-classes-in-stevenage">Stevenage</a>. Every other town we cover is listed from the <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Hoddesdon and Hertfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hdd .cg-hero-grid { align-items: stretch; gap: clamp(1.5rem, 3.8vw, 3.1rem); }
.cg-root.cg-hdd .cg-hero h1 { font-weight: 700; letter-spacing: -0.031em; line-height: 1.03; }
.cg-root.cg-hdd .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.2rem 0 0.2rem 0.95rem; }
.cg-root.cg-hdd .cg-eyebrow { letter-spacing: 0.17em; font-weight: 640; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-hdd .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.017em; }
.cg-root.cg-hdd .cg-table caption { font-weight: 550; text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-hdd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hdd .cg-table th { font-weight: 690; border-bottom: 1px solid var(--cg-accent); }
.cg-root.cg-hdd .cg-ladder-col { border-radius: 8px; border-top: 5px solid var(--cg-accent); padding-top: 0.55rem; }
.cg-root.cg-hdd .cg-callout { border-left-width: 6px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Broxbourne (E07000095), Census 2021 TS001 usual residents 99,009 (printed; a required mention on the Cheshunt page). ONS 2021 BUA (published): Hoddesdon 40,615, spanning Broxbourne and East Hertfordshire. English national curriculum, GCSE and A level. postcodes.io suburban areas whose nearest postcode is in the Hoddesdon BUA: Rye Park (EN11), Wormley, Broxbourne, Turnford (EN10).',
    localProject: 'Census 2021 TS006 density for the 120 Hoddesdon BUA output areas in Broxbourne: 114 to 17,778 per sq km, median 5,592 (hidden truth). Simulated judge P(correct) logistic in log density ratio, scale 0.5; right 78.3% over 19,827 random pairs. Elo from 1,000, 30 repeats: 600 judgements K16 rho 0.811 top-10 4.0, K64 0.817 / 4.2; 1,200 0.891 / 4.5, 0.889 / 4.6; 2,400 0.934 / 6.0, 0.917 / 5.7; 4,800 0.964 / 7.3, 0.934 / 6.3. Same 2,400 judgements, 100 orders: median rank spread 13.5 (K16, 1 leader), 24 (K32, 6 leaders), 41 (K64, 11 leaders). Matched pairs within 10 places: 4,800 judgements rho about 0, top 10 found 2.0. Lesson family: Elo rating, K factor, order dependence, uninformative matchmaking.',
    requiredMentions: [
      '40,615',
      'Rye Park',
      'Wormley',
      'Turnford',
      'Elo rating',
      'Chatbot Arena',
      '17,778',
      '78.3 per cent',
      '0.96',
      '11 different areas'
    ],
    sources: [
      { claim: 'LMSYS Org (3 May 2023), Chatbot Arena: Benchmarking LLMs in the Wild with Elo Ratings.', url: 'https://lmsys.org/blog/2023-05-03-arena/' },
      { claim: 'ONS Census 2021 TS006 population density and TS001 via Nomis; ONS OA21 to BUA22 lookup and 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for Broxbourne suburban areas.', url: 'https://api.postcodes.io/places?q=Rye%20Park' },
      { claim: 'Elo A. E. (1978), The Rating of Chessplayers, Past and Present, the origin of the rating method (catalogue record).', url: 'https://openlibrary.org/search?q=The+Rating+of+Chessplayers+Past+and+Present' }
    ],
    rejectedClaims: [
      'That the judgements are real human opinions about Hoddesdon: the judge is simulated and the page says so.',
      'That Chatbot Arena still uses plain Elo today: only the 2023 launch post is cited, and the page describes that post.',
      'That density says anything about quality of life in an area: used only as a checkable number.',
      'Any ranking of named Hoddesdon streets or neighbourhoods: output areas are not named on the page.',
      'Suburbs outside the Hoddesdon BUA (Stanstead Abbotts, St Margarets, Great Amwell, Wormley West End): left out.',
      'Sterling prices: none.'
    ]
  }
};
