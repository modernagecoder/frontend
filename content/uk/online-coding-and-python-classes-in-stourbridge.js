'use strict';
// Stourbridge (cg- town page, UK cluster Phase 10, towns band B, row 487). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you sum up the position, spread and
// direction of a whole town in five numbers? (mean centre and standard deviational ellipse from a covariance matrix;
// what "one standard deviation" holds in two dimensions; when the direction is meaningful and when it is not).
// Data (read 30 September 2026): Census 2021 usual residents by output area for Dudley (E08000027, 1,033 OAs) via Nomis;
// ONS OA December 2021 population-weighted centroids (British National Grid); ONS OA21 to BUA22 lookup: 186 OAs in the
// Stourbridge built-up area, 56,961 residents by our OA sum (ONS published BUA figure 56,950).
// Our run (scratchpad sbg/sde.py): population-weighted mean centre 390495 E, 283903 N (grid reference SO 904 839);
// covariance matrix of the weighted centroids, eigenvectors give the ellipse. Semi-axes 1,409 m and 904 m (ratio 1.56),
// long axis at a bearing of 110.3 degrees from grid north; standard distance 1,675 m. The one-standard-deviation ellipse
// (4.0 sq km) holds 28.8% of residents; scaled by root two it holds 52.0%. Unweighted centre 73 m away, bearing 112.5.
// Dropping the five farthest areas: 1,370 m by 905 m, bearing 110.4. Other Dudley built-up areas (Dudley borough OAs
// only): Halesowen 1,733 by 974 (1.78), bearing 69.3; Sedgley 1,296 by 621 (2.09), bearing 4.5; Kingswinford 1,202 by
// 1,051 (1.14); Brierley Hill 909 by 769 (1.18).
// Lesson family: standard deviational ellipse / mean centre (directional distribution). Screened: "standard deviational
// ellipse", "mean centre" 0 hits. PCA pages exist for many-column data; here the two columns are map coordinates and the
// output is a shape on the map. Halesowen (conformal prediction) and Dudley used Dudley OA data for other questions.
// Place facts: ONS 2021 BUAs (published): Stourbridge 56,950; Kingswinford 51,910. postcodes.io suburban areas whose
// nearest OA centroid lies in the Stourbridge BUA (our check): Amblecote, Wollaston, Pedmore, Norton, Lye, Wollescote,
// Stambermill, Old Swinford. Wordsley falls in the Kingswinford BUA and is not claimed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'STOURBRIDGE', label: 'Stourbridge', blurb: 'Online coding and Python classes for Stourbridge, with a project that draws the town\'s shape from its Census centre points.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-stourbridge',
  code: 'sbg',
  accent: '#2F5D62',
  accentRationale: 'Stourbridge: a dark glass teal (6.92:1 contrast), hand-picked and unused elsewhere',
  pageType: 'city',
  place: {
    name: 'Stourbridge',
    eyebrow: 'Stourbridge, Dudley, West Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Dudley', href: '/online-coding-and-python-classes-in-dudley' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Stourbridge, England',
  title: 'Online Coding and Python Classes in Stourbridge | Ages 6 to 67',
  description: 'Python, coding, AI and vibe coding classes online and live for Stourbridge, Amblecote, Wollaston, Pedmore and Lye learners aged 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Stourbridge, with a project that reduces 186 Census areas to a centre, two axes and a bearing, and asks what that summary leaves out.',
  twitterDescription: 'Stourbridge coding, Python, AI and vibe coding classes by live video for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Stourbridge',
    description: 'Coding, Python, AI, vibe coding and maths, taught online and live to children, teenagers and adults in Stourbridge and the borough of Dudley.'
  },

  h1: 'Online coding and Python classes in Stourbridge',
  capsuleQ: 'Which online coding and Python classes are best for Stourbridge?',
  capsule: 'Stourbridge lies in the borough of Dudley, and the ONS gives its built-up area 56,950 residents at the 2021 census. Amblecote, Wollaston, Pedmore, Norton, Lye, Wollescote and Old Swinford are recorded suburbs within that area. Learners aged six to 67 take coding, Python, AI, vibe coding and maths with us online: the lessons are live, the tutors are in India, and the format is either private or a small class of five to ten at one level. We begin with reasoning, so that code and AI output are things a learner can check. The first lesson is on us and ends with a suggested course. After that the charge is USD 100 each month for a group place, or USD 150 each month for private lessons. In the Stourbridge project, Python boils the town\'s 186 Census areas down to five numbers, a centre, a length, a width and a direction, and then the learner tests how much those five numbers can be trusted.',
  lead: 'An average is a summary of a column of numbers. What is the summary of a map? If you know where everyone in a town lives, you can find the balance point of the population, which is called the mean centre. You can then ask how far people are spread around it, and the answer is different in different directions, because towns are not round. Put those together and you have the standard deviational ellipse: an oval, centred on the balance point, stretched along the direction in which the town is most spread out. It comes from one small table of numbers and a standard piece of linear algebra, and it is a fine first use of Python\'s numerical tools on real data.',
  wa: 'Hello Modern Age Coders, I am looking for a free coding or Python lesson for a learner in Stourbridge.',

  picks: {
    eyebrow: 'Stourbridge course picks',
    h2: 'Python, maths and thinking courses for Stourbridge',
    intro: 'Here are four, by age. A live first lesson comes free with each, and no card is needed to reserve it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Learning to think: balance points, fair summaries and what an average hides.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'A Scratch game from a spoken idea, built with an AI and checked by the child.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python to the point of using numpy on coordinates, averages and spread.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Teens and adults', note: 'Secondary maths in full, including the vectors and statistics this project leans on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stourbridge and Dudley borough',
      h2: 'Stourbridge, Amblecote, Wollaston, Pedmore and Lye',
      intro: 'Two ONS built-up areas in the borough, and the suburbs recorded within Stourbridge.',
      body: [
        { kind: 'table', caption: 'Two ONS built-up areas in the borough of Dudley, 2021 census residents', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Stourbridge', '56,950'],
          ['Kingswinford', '51,910']
        ] },
        { kind: 'p', text: 'Each figure is published by the ONS for that built-up area alone, and they are not combined here. Postcodes.io records Amblecote, Wollaston, Pedmore, Norton, Lye, Wollescote, Stambermill and Old Swinford as suburban areas, and in each case the Census output area closest to the recorded point is part of the Stourbridge built-up area. Wordsley, tested the same way, belongs to Kingswinford. Schools in Dudley borough teach England\'s national curriculum and prepare pupils for GCSE and A level; tell us the term dates and lessons will fit round them.' },
        { kind: 'callout', h3: 'Other Dudley borough pages and our approach', p: 'See <a class="cg-inline-link" href="/online-coding-and-python-classes-in-dudley">Dudley</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-halesowen">Halesowen</a>, the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands county page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a>. The thinking-first idea is laid out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Stourbridge project',
      h2: 'Mean centre and standard deviational ellipse: the shape of a town in five numbers',
      intro: 'A balance point, two axes and a bearing, from 186 centre points.',
      body: [
        { kind: 'p', text: 'The ONS publishes a population-weighted centre point for every Census output area, as an easting and a northing in metres. The Stourbridge built-up area has 186 of them, holding 56,961 residents when we add up the areas ourselves. The learner loads the points into Python and takes the average easting and the average northing, counting each area as many times as it has residents. That is the mean centre: 390495 east, 283903 north, or grid reference SO 904 839. Ignoring population and treating every area equally moves it by only 73 metres.' },
        { kind: 'p', text: 'Next comes spread. The program builds a two-by-two covariance matrix, which records how much the points vary east to west, how much north to south, and how far the two go together. Its eigenvectors are the directions of greatest and least spread, and the square roots of its eigenvalues are the spreads themselves. Python\'s numpy does this in one call. For Stourbridge the long axis of the ellipse is 1,409 metres either side of the centre and the short axis 904 metres, and the long axis points along a bearing of 110.3 degrees from grid north, a little south of due east.' },
        { kind: 'table', caption: 'Standard deviational ellipses for five built-up areas, from population-weighted output area centres inside Dudley borough (our Python run on Census 2021 data)', head: ['Built-up area', 'Long and short axis', 'Long divided by short', 'Bearing of long axis'], rows: [
          ['Stourbridge', '1,409 m and 904 m', '1.56', '110.3 degrees'],
          ['Halesowen', '1,733 m and 974 m', '1.78', '69.3 degrees'],
          ['Sedgley', '1,296 m and 621 m', '2.09', '4.5 degrees'],
          ['Brierley Hill', '909 m and 769 m', '1.18', 'not meaningful'],
          ['Kingswinford', '1,202 m and 1,051 m', '1.14', 'not meaningful']
        ] },
        { kind: 'p', text: 'Two lessons hide in that table. First, a direction only means something when the shape is stretched. Kingswinford and Brierley Hill are close to round, so their long axis could swing a long way with a small change in the data, and we decline to report it. Stourbridge is stretched enough to be stable: removing the five areas farthest from the centre changes the axes to 1,370 and 905 metres and the bearing to 110.4 degrees. Second, "one standard deviation" does not hold what most people expect. On a number line, about 68% of bell-shaped data lies within one standard deviation. On a map the matching figure is only about 39%, and Stourbridge\'s one-standard-deviation ellipse actually contains 28.8% of residents. Enlarging it by the square root of two, as some mapping software does, raises that to 52.0%. Two tools can draw different ovals from the same data and both call them the standard ellipse.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Find the balance point of coins on a ruler, then of counters on squared paper, by averaging their positions.' },
          { h3: 'Ages 11 to 15', p: 'Compute a weighted mean centre for 186 points in Python and plot it on a scatter of the town.' },
          { h3: 'Ages 15 and up', p: 'Build the covariance matrix, find its eigenvectors with numpy, draw the ellipse and count who is inside.' }
        ] },
        { kind: 'callout', h3: 'Sources and ownership', p: 'Resident counts are Office for National Statistics Census 2021 data from Nomis. Centre points and the area lookup come from the ONS Open Geography Portal. Both are used under the Open Government Licence. The centres, ellipses and percentages are calculated by us, and the ellipse is a statistical summary, not a boundary of any kind.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Summaries and AI',
      h2: 'What an ellipse teaches about vibe coding and AI agents',
      intro: 'A neat summary is a claim about the data. It deserves a test.',
      body: [
        { kind: 'table', caption: 'From the Stourbridge ellipse to AI-made summaries', head: ['In the ellipse project', 'When AI summarises or plots for you'], rows: [
          ['28.8% inside, where many expect 68%', 'Ask what a label such as "one standard deviation" covers'],
          ['Root-two scaling raised it to 52.0%', 'Two libraries can differ by an unstated convention'],
          ['Round shapes gave no usable bearing', 'Some outputs should be withheld, not printed'],
          ['Dropping five areas barely moved it', 'Check a result by removing a little data'],
          ['Weighting moved the centre 73 m', 'Know whether the summary counts places or people']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for "the directional distribution of these points" and it will return an ellipse and a bearing to one decimal place, whether or not the shape is stretched enough for the bearing to mean anything. In vibe coding the learner describes and the AI writes, and Stourbridge learners are taught to read the numbers back against the picture and to ask which convention the code used. AI agents that chain several tools together inherit each tool\'s silent conventions, and a factor of root two can pass unnoticed from one step to the next. Learners move on to building agents when they handle Python without support, commonly at sixteen or older, and Copilot Studio agents are taught privately, one learner at a time. There is more on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our page on AI agents for UK students</a> and on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The ONS, Nomis and postcodes.io are credited as data sources only. They are not partners in this page and have not approved it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'From balance points to numpy',
    intro: 'Year groups are guides, not gates. We place learners after a free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Averages, balance and asking what a summary leaves out.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch and starter Python, with an AI drafting and the child testing.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and maths', p: 'Coordinates, vectors and statistics to go with GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Python for data', p: 'Programming from scratch through to data analysis and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and spatial summaries',
    h2: 'What is a standard deviational ellipse, and how is the mean centre of a place calculated?',
    intro: 'A standard deviational ellipse is an oval that summarises where a set of points lies, centred on their mean centre and stretched along the direction of greatest spread, and the mean centre is calculated by averaging the eastings and the northings of the points, weighting each by its population if you want the centre of people and not of places.',
    p1: 'For the 186 Census areas of Stourbridge the population-weighted mean centre is at grid reference SO 904 839, and the ellipse around it measures 1,409 by 904 metres along a bearing of 110.3 degrees, yet holds only 28.8% of residents.',
    p2: 'After drawing it, a learner asks of any AI-made summary what it contains, which convention produced it and whether it would survive losing a few data points.',
    closer: 'Stourbridge teenagers who can derive an ellipse from raw coordinates do not mistake a tidy picture for a fact, and it is coding that gives them the means to check.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'Amblecote, Wollaston and Pedmore, by video',
    intro: 'What you need at home: a computer with a proper keyboard and a video-capable connection.',
    cells: [
      { h3: 'Code written by the learner', p: 'Our tutors follow along on a shared screen and ask for a reason behind each line, but do not take over.' },
      { h3: 'Assessment in lesson one', p: 'A free first session shows us the learner\'s level and, where it applies, the exam board.' },
      { h3: 'Try before paying', p: 'Lesson one is free of charge and concludes with a course we think fits.' },
      { h3: 'Level-based groups', p: 'Five to ten learners from anywhere in the UK, all at the same stage.' },
      { h3: 'A twice-weekly rhythm', p: 'We break when schools break.' },
      { h3: 'Hour held constant', p: 'Summer time and winter time make no difference to your slot.' }
    ],
    spec: { title: 'Why online works', p: 'Level matters more than location. There are seldom five learners at exactly one stage in one town on one evening, and online there always are.' }
  },

  fees: {
    h2: 'Stourbridge fees',
    intro: 'Stourbridge comes under the international fees that we charge outside India.',
    first: 'A free lesson, complete in itself, then a course recommendation.',
    group: 'Eight live group lessons a month, give or take.',
    private: 'Eight live private lessons a month, give or take.',
    closer: 'Our fees are in US dollars, and we do not publish them in pounds. You receive a first invoice only after the trial, with the course and weekly time agreed. How holidays, absences and format changes work is on the pricing page.'
  },

  reviewsH2: 'Google reviews by West Midlands families and learners around the UK',

  book: {
    h2: 'Book a free Stourbridge lesson',
    intro: 'Share the learner\'s age or year and one thing they are keen on. The trial could be a balance-point puzzle, a Scratch game drafted by an AI, some early Python, or the mean centre of a handful of real points.',
    success: 'Thank you. Your Stourbridge request has come through.'
  },

  faq: {
    h2: 'Stourbridge questions',
    intro: 'Ellipses, mean centres, the Census project, Python and arrangements.',
    items: [
      { q: 'What is the population of Stourbridge?', a: 'According to the ONS, the Stourbridge built-up area had 56,950 residents at the 2021 census.' },
      { q: 'Are online coding and Python classes offered in Stourbridge?', a: 'Yes. Lessons are live video sessions for ages 6 to 67, open to Amblecote, Wollaston, Pedmore, Lye and all of Dudley borough.' },
      { q: 'What is a mean centre?', a: 'The average position of a set of points: the mean of their eastings paired with the mean of their northings. Weighting by population gives the balance point of the people.' },
      { q: 'How much of the data does a standard deviational ellipse contain?', a: 'Less than people expect. For bell-shaped data in two dimensions a one-standard-deviation ellipse holds about 39%, not 68%. For Stourbridge it held 28.8%, and 52.0% when scaled by the square root of two.' },
      { q: 'What is the Stourbridge project?', a: 'Using Python and numpy to find the population-weighted mean centre and standard deviational ellipse of 186 Census areas, then comparing the result with four other built-up areas in the borough.' },
      { q: 'Where does vibe coding fit in?', a: 'Learners use it to draft programs: they describe, the AI writes, and they check the output against what they know should be true.' },
      { q: 'When does work on AI agents begin?', a: 'When Python no longer needs support, commonly at sixteen or older. Copilot Studio agents are private-lesson work.' },
      { q: 'Will lessons match GCSE and A level content?', a: 'They cover the computer science and maths involved, explained in depth. We cannot and do not promise grades.' },
      { q: 'What does it cost?', a: 'Your first lesson is free. Then it is USD 100 a month in a group or USD 150 a month for private lessons.' },
      { q: 'Do you stop for school holidays?', a: 'We do, for whichever dates you tell us.' }
    ]
  },

  next: {
    eyebrow: 'Also in the area',
    h2: 'More West Midlands pages',
    html: 'Separate pages and separate projects: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-dudley">Dudley</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-halesowen">Halesowen</a> (an agent that knows when it is unsure), <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kidderminster">Kidderminster</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links to all the rest.',
    waLabel: 'Reach us on WhatsApp'
  },

  footerHeading: 'Stourbridge and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-sbg .cg-hero-grid { align-items: stretch; gap: clamp(1.25rem, 3.3vw, 2.8rem); }
.cg-root.cg-sbg .cg-hero h1 { font-weight: 710; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-sbg .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding: 0 0 1rem 1.1rem; }
.cg-root.cg-sbg .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; }
.cg-root.cg-sbg .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-sbg .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 600; color: var(--cg-accent); }
.cg-root.cg-sbg .cg-table td { font-variant-numeric: tabular-nums; padding-block: 0.6rem; }
.cg-root.cg-sbg .cg-table th { font-size: 0.82rem; font-weight: 680; border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-sbg .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-sbg .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Dudley (E08000027), West Midlands. ONS 2021 BUAs (published): Stourbridge 56,950; Kingswinford 51,910. postcodes.io suburban areas (nearest OA centroid in the Stourbridge BUA, our check): Amblecote, Wollaston, Pedmore, Norton, Lye, Wollescote, Stambermill, Old Swinford. Wordsley falls in the Kingswinford BUA.',
    localProject: 'Census 2021 OA residents and ONS OA PWC for the 186 OAs of the Stourbridge BUA (56,961 residents, our sum). Weighted mean centre 390495, 283903 (SO 904 839); SDE semi-axes 1,409 m / 904 m (ratio 1.56), bearing 110.3; 28.8% of residents inside (52.0% at root-two scale); unweighted centre 73 m away; dropping 5 farthest OAs: 1,370 / 905, bearing 110.4. Dudley-borough parts of other BUAs: Halesowen 1,733 / 974 (1.78, 69.3); Sedgley 1,296 / 621 (2.09, 4.5); Kingswinford 1,202 / 1,051 (1.14); Brierley Hill 909 / 769 (1.18). Lesson family: mean centre and standard deviational ellipse.',
    requiredMentions: [
      'standard deviational ellipse',
      'mean centre',
      '56,950',
      '56,961',
      '1,409',
      '110.3',
      'Amblecote',
      'Wollaston',
      'Pedmore',
      'Old Swinford'
    ],
    sources: [
      { claim: 'ONS Census 2021 usual residents at output area level via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Areas (December 2021) population-weighted centroids and OA to built-up area lookup, Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas in the borough of Dudley.', url: 'https://api.postcodes.io/places?q=Amblecote' }
    ],
    rejectedClaims: [
      'That the ellipse is a boundary of Stourbridge: it is a statistical summary only; stated on the page.',
      'Bearings for Kingswinford and Brierley Hill: shapes too close to round for a stable direction; withheld.',
      'Glassmaking, canal or market history: not read from a source; not claimed.',
      'What stands at the mean centre: no building or street was identified or named.',
      'Wordsley as a Stourbridge suburb: its closest output area is in the Kingswinford built-up area.',
      'Sum of the borough\'s built-up areas: not added.',
      'Exam results and sterling prices: none.'
    ]
  }
};
