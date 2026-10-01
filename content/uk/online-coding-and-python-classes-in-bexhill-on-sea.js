'use strict';
// Bexhill-on-Sea (cg- town page, UK cluster Phase 10, towns band B, row 539). Keyword slug per the owner's rotation,
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: which Bexhill neighbourhoods really
// differ from the district, and which only look different because they are small? (funnel plot with exact binomial
// control limits).
// Data (read 30 September 2026): Census 2021 TS061 Method used to travel to work (Nomis NM_2078_1), output areas in
// Rother, category "Work mainly at or from home" against the total of usual residents aged 16 and over in employment.
// Output areas kept where the ONS OA21 to BUA22 lookup assigns them to Bexhill-on-Sea: 154. Published district and
// national figures: Rother 12,306 of 37,932 (32.44%); England 8,321,252 of 26,405,214 (31.51%).
// Our run (scratchpad bxh/funnel.py, bxh/f2.py): employed residents per OA 6 to 287, median 107; home-working share
// 7.1% to 54.5%, median 28.0%; 104 OAs below the Rother share, 50 above. Exact binomial limits around 32.44%: at 30
// people 95% 16.7% to 50.0%, 99.8% 10.0% to 60.0%; at 107 people 95% 23.4% to 41.1%; at 287 people 95% 27.2% to 38.0%.
// Outside the 95% limits 56 (10 above, 46 below); outside 99.8% 22 (1 above, 21 below). If every OA had the Rother
// share (500 simulated censuses, seed 7), the count outside 95% averaged 5.9 and never exceeded 13. Top ten OAs by raw
// share: median 67.5 employed residents (all OAs 107); 7 of the 10 outside the 95% limits, 1 outside 99.8%
// (E00107317: 43 of 81, 53.1%). Highest raw share E00107150: 24 of 44, 54.5%, inside the 99.8% limits.
// Lesson family: funnel plot (binomial control limits against denominator; chance vs real difference; overdispersion).
// Place facts: Rother (E07000064) TS001 93,108. ONS 2021 BUAs inside Rother (published): Bexhill-on-Sea 43,755;
// Battle 5,330; Rye 4,885. postcodes.io suburban areas with nearest postcode in the Bexhill-on-Sea BUA: Little Common,
// Sidley, Pebsham, Glenleigh Park, Old Town.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BEXHILL-ON-SEA', label: 'Bexhill-on-Sea', blurb: 'Online coding and Python classes for Bexhill-on-Sea in Rother, with a funnel plot that separates real differences from small-number noise.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-bexhill-on-sea',
  code: 'bxh',
  accent: '#964E3C',
  accentRationale: 'Bexhill-on-Sea: a muted brick red (6.08:1 contrast on white, 4.94:1 on the darkest paper tint), picked by hand under the muted-accent rule, at least 40 RGB steps from South East pages and neighbouring rows',
  pageType: 'city',
  place: {
    name: 'Bexhill-on-Sea',
    eyebrow: 'Bexhill-on-Sea, Rother, East Sussex',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'East Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'East Sussex', href: '/coding-classes-in-east-sussex' },
    { label: 'Hastings', href: '/online-coding-and-python-classes-in-hastings' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bexhill-on-Sea, East Sussex',
  title: 'Online Coding and Python Classes, Bexhill-on-Sea | Ages 6 to 67',
  description: 'Online coding and Python classes for Bexhill-on-Sea, Little Common, Sidley, Pebsham and Glenleigh Park, ages 6 to 67, plus vibe coding and AI. First lesson free.',
  ogDescription: 'Online coding and Python classes for Bexhill-on-Sea with a funnel plot project: 154 neighbourhoods, one district rate, and which differences are real.',
  twitterDescription: 'Bexhill-on-Sea: online coding, Python, AI and vibe coding classes on live video for ages 6 to 67, with a free first lesson.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Bexhill-on-Sea',
    description: 'Coding, Python, data analysis, vibe coding, AI and maths for children, teenagers and adults in Bexhill-on-Sea and across Rother, taught live online by tutors who teach learners to question a ranking before believing it.'
  },

  h1: 'Online coding and Python classes in Bexhill-on-Sea',
  capsuleQ: 'Which online coding and Python classes are best for Bexhill-on-Sea learners?',
  capsule: 'The Bexhill-on-Sea built-up area held 43,755 people at the 2021 census, according to the ONS, in a Rother district of 93,108. Little Common, Sidley, Pebsham, Glenleigh Park and Old Town are among the suburban areas that postcode data places in the town. Bexhill learners from six to 67 join us for online coding, Python, vibe coding, AI and maths; the teaching is live, the tutors work from India, and a learner either has a tutor alone or joins five to ten others at one level. Python is where our learners meet real data, and real data comes with traps worth learning early. The Bexhill project plots the share of working residents who mostly work from home in each of 154 small census areas and draws a funnel plot to show which areas genuinely stand out. You pay nothing for a first lesson, which ends in a course suggestion, and later months cost USD 100 in a class or USD 150 with a private tutor.',
  lead: 'Rank the neighbourhoods of any town by almost anything and the top and bottom of the list fill up with the smallest places. That is not because small places are special. With fewer people in them, chance alone pushes their percentages further from the middle. A funnel plot is the tool statisticians use to stop being fooled. It plots each area\'s rate against its size and draws limits that are wide for small areas and narrow for large ones, so only the points outside the funnel deserve a second look. Bexhill-on-Sea, with 154 census output areas holding from 6 to 287 working residents each, is an ideal place to draw one in Python.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python lesson for a learner in Bexhill-on-Sea.',

  picks: {
    eyebrow: 'Bexhill course picks',
    h2: 'Python, thinking and coding courses for Bexhill-on-Sea',
    intro: 'One suggestion per age band, each starting with a free live lesson booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: flip ten coins and a hundred coins, and see which gives the stranger share of heads.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Ask an AI for a Scratch dice game, then check whether its dice are fair by counting rolls.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from lists to charts, with the Bexhill funnel plot drawn in matplotlib as a project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Web and Python projects written with AI help, where every chart has to survive a chance check.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The district',
      h2: 'Bexhill-on-Sea, Battle and Rye in the district of Rother',
      intro: 'Three built-up areas that lie wholly inside Rother, as the ONS published them for 2021.',
      body: [
        { kind: 'table', caption: 'Built-up areas inside Rother, with ONS census 2021 populations', head: ['Built-up area', 'Residents (2021 census)'], rows: [
          ['Bexhill-on-Sea', '43,755'],
          ['Battle', '5,330'],
          ['Rye', '4,885']
        ] },
        { kind: 'p', text: 'These are the ONS\'s rounded figures for each built-up area, and they are not added together here; the Rother district count of 93,108 is its own figure and includes villages and open country. Part of the Hastings built-up area also falls inside Rother, but most of it lies in Hastings borough, so it is left out. In postcodes.io, Little Common, Sidley, Pebsham, Glenleigh Park and Old Town are suburban areas whose nearest postcode sits in the Bexhill-on-Sea built-up area. Local schools follow the national curriculum for England, and we avoid any holiday weeks you mention.' },
        { kind: 'callout', h3: 'East Sussex, the South East and our method', p: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-east-sussex">coding classes in East Sussex</a> and the regional page <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Why we teach reasoning before tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bexhill project',
      h2: 'A funnel plot of home working across 154 Bexhill output areas',
      intro: 'Take one census question, compare every small area with the district, and let Python decide which gaps are bigger than chance.',
      body: [
        { kind: 'p', text: 'The 2021 census asked people in work how they usually got there, and one answer was "work mainly at or from home". Across Rother, the published count is 12,306 of 37,932 working residents, or 32.44%; across England it is 31.51%. The learner downloads the same table for the 154 output areas that the ONS assigns to the Bexhill-on-Sea built-up area. Each holds between 6 and 287 working residents, 107 in the middle one. The raw home-working share runs from 7.1% to 54.5%, and 104 of the areas sit below the Rother figure while 50 sit above it.' },
        { kind: 'table', caption: 'Where the funnel limits sit around the Rother share of 32.44%, by number of working residents (exact binomial, our Python run)', head: ['Working residents in the area', '95% limits', '99.8% limits'], rows: [
          ['30', '16.7% to 50.0%', '10.0% to 60.0%'],
          ['107', '23.4% to 41.1%', '18.7% to 46.7%'],
          ['287', '27.2% to 38.0%', '24.0% to 41.1%']
        ] },
        { kind: 'p', text: 'Plot every area as a dot, with its number of working residents along the bottom and its home-working share up the side, then draw those limits as curves. They form a funnel, wide on the left where areas are small and narrow on the right. Now look at the ten areas with the highest raw shares. Their middle size is 67.5 working residents against 107 for all areas, so small places crowd the top of the list, just as the lead predicted. Seven of the ten fall outside the 95% funnel, but only one, where 43 of 81 people worked mainly from home, clears the 99.8% line. The very highest raw share, 24 of 44 or 54.5%, is inside the 99.8% funnel.' },
        { kind: 'p', text: 'The wider picture is more surprising. If every Bexhill area truly shared the Rother rate, chance would put about five of them outside the 95% limits: across 500 simulated censuses the count averaged 5.9 and never passed 13. The real count is 56, mostly on the low side: 46 below the funnel and 10 above it, with 21 below even the 99.8% line. So the areas really do differ from the district, and more strongly than a simple coin-flip model allows. Statisticians call that overdispersion, and it is a warning that the funnel\'s limits, not only the dots, rest on an assumption. The funnel shows where to look; it cannot say why an area differs.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Flip coins in sets of 10 and of 100, write down the share of heads, and see which sets give odd results.' },
          { h3: 'Ages 11 to 15', p: 'Load the Bexhill table in Python, compute each share, and plot the dots against size with matplotlib.' },
          { h3: 'Ages 15 and up', p: 'Compute exact binomial limits, simulate censuses, and test whether the spread is more than chance allows.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Counts are Census 2021 table TS061 from Nomis, published by the Office for National Statistics under the Open Government Licence. Census counts are adjusted slightly to protect privacy, and small areas are affected most. The centre line is the published Rother figure, not a Bexhill total we made by adding areas. The limits, the simulations and every percentage for a single area are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Signal or noise',
      h2: 'Why this matters for AI and vibe coding',
      intro: 'Any system that ranks things, human or AI, is fooled by small numbers unless someone checks.',
      body: [
        { kind: 'table', caption: 'From Bexhill census areas to AI practice', head: ['In the Bexhill run', 'In AI practice'], rows: [
          ['Small areas crowded the top ten', 'Rankings reward small samples with extreme scores'],
          ['Only one of the top ten cleared the 99.8% line', 'Test a difference before acting on it'],
          ['56 areas fell outside limits where about 6 were expected', 'Check whether your error model fits the data'],
          ['The centre line came from a published figure', 'Know where every reference number comes from'],
          ['The plot said where, never why', 'Correlation in a chart is not an explanation']
        ] },
        { kind: 'p', text: 'Machine learning is full of rates measured on small groups: accuracy on a handful of test examples, click rates on a new advert, error rates for a rare category. An AI assistant asked which group performs "worst" will happily sort a table and name the bottom row. A funnel plot, or the thinking behind it, is how a learner catches that mistake. It is also a fair test of vibe-coded charts. Ask an assistant for a funnel plot and it may draw the curves from a normal approximation that fails for tiny areas; knowing to ask for exact limits is the learner\'s contribution. After Python becomes second nature, usually from sixth form, learners can go on to build AI agents, with Copilot Studio work reserved for private lessons. See <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK students\' route into AI agents</a>.' },
        { kind: 'p', text: 'The Office for National Statistics, Nomis and postcodes.io publish the data used here and do not endorse this page. The analysis is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From coin flips to funnel plots',
    intro: 'We start from a school year and confirm the level in the free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair tests, lucky streaks and telling one from the other.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games made with an AI helper, checked by counting.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data', p: 'Tables, charts and chance, in step with GCSE and A level maths.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Data and AI', p: 'Working Python, then statistics for machine learning and generative AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Data and AI',
    h2: 'What is a funnel plot in statistics?',
    intro: 'A funnel plot is a chart of rates against the size of each group, with control limits that narrow as groups get larger, so that differences caused by small numbers can be told apart from differences that are bigger than chance.',
    p1: 'For 154 Bexhill-on-Sea output areas, the ten highest home-working shares came mostly from small areas, and only one of them, 43 of 81 working residents, lay beyond the 99.8% limit around the Rother figure of 32.44%.',
    p2: 'Across all the areas, 56 fell outside the 95% limits where chance alone would put about six, which says the areas genuinely differ and the simple model is too narrow.',
    closer: 'A Bexhill teenager who has drawn that funnel will not take a league table, or an AI\'s ranking, at face value again. That habit grows out of writing the code and testing it, and it is one more reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Little Common, Sidley and Pebsham on a live call',
    intro: 'A computer with a camera and a normal home connection covers everything.',
    cells: [
      { h3: 'Typing, not watching', p: 'The learner writes the code on a shared screen, and the tutor asks what should happen before anything runs.' },
      { h3: 'The first lesson sets the level', p: 'We see where a learner is in the free session and note any exam board.' },
      { h3: 'Free to try', p: 'The trial costs nothing, takes no card, and ends with our course advice.' },
      { h3: 'Classes by level', p: 'Five to ten learners in a group, all at one stage, from anywhere in the UK.' },
      { h3: 'Two lessons a week', p: 'Holiday weeks you send us stay empty.' },
      { h3: 'Same slot all year', p: 'British Summer Time starts and ends on our side of the call, not yours.' }
    ],
    spec: { title: 'Why online', p: 'Grouping learners by level needs a big pool. One seaside town is too small for that on its own; the whole UK is not.' }
  },

  fees: {
    h2: 'Bexhill-on-Sea fees',
    intro: 'Bexhill learners are on our international rates, used in every country outside India.',
    first: 'A free full lesson that finishes with a recommended course.',
    group: 'Around eight live lessons a month in a class.',
    private: 'Around eight live lessons a month alone with a tutor.',
    closer: 'We charge in US dollars and show no pound equivalent. No invoice is raised until a course and a weekly time are settled after the trial; holidays, absences and moving between group and private are on the pricing page.'
  },

  reviewsH2: 'Google reviews from East Sussex families and learners across the UK',

  book: {
    h2: 'Book a free lesson for Bexhill-on-Sea',
    intro: 'Tell us an age or year group and one interest. A trial might be a coin-flip experiment, a Scratch game made with AI, a first Python chart, or a quick look at real census data.',
    success: 'Thank you. Your Bexhill-on-Sea request is with us and we will reply.'
  },

  faq: {
    h2: 'Bexhill-on-Sea questions',
    intro: 'Funnel plots, the census project, Python and the practical side.',
    items: [
      { q: 'How many people live in Bexhill-on-Sea?', a: 'The ONS counted 43,755 residents in the Bexhill-on-Sea built-up area at the 2021 census; the Rother district had 93,108.' },
      { q: 'Are there online Python classes for Bexhill-on-Sea?', a: 'Yes. We teach live on video for ages 6 to 67, which covers Little Common, Sidley, Pebsham, Glenleigh Park and the rest of the town.' },
      { q: 'What is a good age to start learning Python?', a: 'In our experience most children are ready for typed Python at around 10 to 12, once reading and basic arithmetic are secure; younger learners start well with Scratch.' },
      { q: 'Why do small areas top league tables?', a: 'A percentage based on a few people swings further by chance, so small areas land at both extremes more often than large ones.' },
      { q: 'What happens in the Bexhill project?', a: 'Learners load home-working counts for 154 output areas in Python, compute exact binomial limits around the Rother share, draw the funnel and simulate censuses to test the spread.' },
      { q: 'Is vibe coding included?', a: 'Yes, at every level. The learner tells an AI what to build, then checks its work, here by comparing its chart with exact limits.' },
      { q: 'When do learners start on AI agents?', a: 'When they can write Python unaided, usually in sixth form or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Is there support for GCSE and A level?', a: 'Yes, in computer science and maths, aiming for understanding. We never promise grades.' },
      { q: 'What does it cost?', a: 'The trial lesson is free. Carrying on costs USD 100 per calendar month in a class, and USD 150 per calendar month for private tuition.' },
      { q: 'Can we skip school holidays?', a: 'Yes. Send the dates and we keep those weeks free.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Bexhill-on-Sea',
    h2: 'More pages for East Sussex and the South East',
    html: 'Other projects appear on the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hastings">Hastings</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-eastbourne">Eastbourne</a> and <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> pages, and the county page is <a class="cg-inline-link" href="/coding-classes-in-east-sussex">East Sussex</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the rest.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Bexhill-on-Sea and East Sussex',
  footerPlaces: [
    { href: '/coding-classes-in-east-sussex', label: 'East Sussex' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bxh .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-bxh .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.08; }
.cg-root.cg-bxh .cg-capsule { background: var(--cg-accent-soft); border-radius: 14px; padding: 1rem 1.1rem; }
.cg-root.cg-bxh .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-bxh .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-bxh .cg-table caption { text-align: left; font-size: 0.87rem; font-weight: 600; }
.cg-root.cg-bxh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bxh .cg-table th { font-size: 0.81rem; font-weight: 700; letter-spacing: 0.03em; }
.cg-root.cg-bxh .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-bxh .cg-callout { border-left-width: 5px; border-radius: 18px; }
`,

  dossier: {
    curriculumAuthority: 'Rother (E07000064), Census 2021 TS001 usual residents 93,108. ONS 2021 BUAs inside Rother (published): Bexhill-on-Sea 43,755; Battle 5,330; Rye 4,885. The Hastings BUA (91,490) lies mostly in Hastings borough and is excluded. postcodes.io suburban areas with nearest postcode in the Bexhill-on-Sea BUA: Little Common (Bexhill St Marks ward), Sidley (Bexhill Sidley), Pebsham (Bexhill Pebsham & St Michaels), Glenleigh Park (Bexhill St Stephens), Old Town (Bexhill Old Town & Worsham).',
    localProject: 'Census 2021 TS061 (Nomis NM_2078_1), category 1 "Work mainly at or from home" over category 0 (usual residents aged 16 and over in employment), 154 output areas in the Bexhill-on-Sea BUA (ONS OA21 to BUA22 lookup). Published centre line: Rother 12,306 of 37,932 (32.44%); England 8,321,252 of 26,405,214 (31.51%). OA sizes 6 to 287, median 107; shares 7.1% to 54.5%, median 28.0%; 104 below Rother, 50 above. Exact binomial limits around 32.44%: n 30 95% 16.7 to 50.0, 99.8% 10.0 to 60.0; n 107 23.4 to 41.1, 18.7 to 46.7; n 287 27.2 to 38.0, 24.0 to 41.1. Outside 95% 56 (10 above, 46 below); outside 99.8% 22 (1 above, 21 below). Simulation (500 censuses at the Rother share, seed 7): outside 95% mean 5.9, max 13. Top ten raw shares: median size 67.5; 7 outside 95%, 1 outside 99.8% (E00107317, 43 of 81, 53.1%); highest raw share E00107150, 24 of 44, 54.5%, inside 99.8%. Lesson family: funnel plot with exact binomial control limits; small-number extremes; overdispersion.',
    requiredMentions: [
      '93,108',
      '43,755',
      'Little Common',
      'Glenleigh Park',
      'Pebsham',
      'funnel plot',
      '12,306',
      '37,932',
      '32.44%',
      '54.5%',
      '31.51%'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS061 Method used to travel to work, output areas and local authorities, via Nomis.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts061' },
      { claim: 'ONS output area to built-up area lookup (OA21 to BUA22), ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 TS001 usual residents and 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas of Bexhill-on-Sea and the built-up area of the nearest postcode.', url: 'https://api.postcodes.io/places?q=Little%20Common' }
    ],
    rejectedClaims: [
      'Why some Bexhill areas have more or fewer home workers: not investigated; the funnel shows where, not why.',
      'A published Bexhill-on-Sea home-working total: not used; the centre line is the published Rother figure, and the 154 areas were not summed into a town total.',
      'That Bexhill has an older population than elsewhere: not claimed; not measured here.',
      'Seafront, pavilion or resort history: not read from a source; not claimed.',
      'Cooden, Collington and Worsham as suburbs: not listed; no postcodes.io suburban-area record found.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
