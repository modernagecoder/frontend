'use strict';
// Lincoln (cg- city page, UK cluster Phase 4). Spine: when the counts refuse to be random.
// Poisson counts and overdispersion on air frost days in the Met Office historic station record for Waddington
// (53.175 N 0.522 W, 68 m, about 6 km south of Lincoln city centre; waddingtondata.txt read 23 September 2026;
// scratchpad lin/pois.py). Monthly air frost days (column af) from January 1947; provisional 2026 months excluded;
// 24 of 948 months missing. January, 77 Januaries: mean 11.04, variance 31.30, variance to mean 2.84; highest 27
// (1963), then 26 (1979), 23 (1985 and 1959); no January without air frost. February ratio 4.03, March 4.41,
// December 3.36, November 2.88 (14 Novembers with none, Poisson expects 2.0), April 2.21 (24 with none, Poisson
// expects 10.6). January in bands against Poisson(11.04): 0 to 4 days observed 10, Poisson 1.1; 5 to 9 observed 23,
// Poisson 24.8; 10 to 14 observed 25, Poisson 39.6; 15 to 19 observed 15, Poisson 10.7; 20 or more observed 4,
// Poisson 0.7. Negative binomial by moments (r 6.01): 7.5, 26.6, 24.5, 12.3, 5.9. Complete years 1949 to 2025 (77):
// annual mean 42.61, variance 271.40, ratio 6.37; 1949 to 1985 mean 51.6 (ratio 3.68); 1986 to 2025 mean 34.3
// (ratio 5.99). January and February counts correlate at 0.39.
// Lesson family: Poisson distribution and overdispersion (constant rate and independence assumptions, variance to
// mean ratio, negative binomial, a changing rate). Screened 23 September 2026: Poisson, overdispersion and negative
// binomial 0 hits site-wide.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Lincoln E07000138: TS001 103,813 usual residents,
// 96,559 in households, 7,254 in communal establishments; TS007A 8,835 aged 15 to 19 (8.5 percent, England 5.7),
// 13,598 aged 20 to 24 (13.1, England 6.0), 7,943 aged 25 to 29 (7.7, England 6.6); TS068 27,544 students of 98,694
// aged 5 and over (27.9 percent, England 20.4); TS006 2,908.9 usual residents per square km (England 433.5). Lincoln
// Castle, Magna Carta: on display in the David P J Ross Magna Carta Vault, an original 1215 Magna Carta and the 1217
// Charter of the Forest; the only place in the world where the two can be seen side by side, on permanent loan from
// Lincoln Cathedral; in 1217 some original clauses went into a second charter, the Charter of the Forest, and the
// original took the name Magna Carta to tell it apart. Lincoln Cathedral website returned 403.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'LINCOLN', blurb: 'The cathedral city on the hill, with a project that tests whether frosty days arrive at random, and finds that they do not.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-lincoln',
  code: 'lnc',
  accent: '#2C5922',
  accentRationale: 'Lincoln: a Lincoln green from the solver (6.66:1 on every paper tint, dE 6.6 from the nearest used accent), a nod to the city\'s famous cloth colour and distinct from the Exeter and Plymouth greens',
  pageType: 'city',
  place: {
    name: 'Lincoln',
    eyebrow: 'Lincoln, Lincolnshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Lincoln' },
      { type: 'AdministrativeArea', name: 'Lincolnshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lincoln, England',
  title: 'Best Coding Classes in Lincoln | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Lincoln learners aged 6 to 67, from Uphill and the Bailgate to Birchwood and Boultham. First lesson free.',
  ogDescription: 'Coding and AI lessons for Lincoln, on a page that tests whether frosty days near the city arrive at random, and shows why the textbook model fails.',
  twitterDescription: 'Lincoln learners aged six to sixty-seven can learn coding, Python and AI with us in live online lessons, and the first is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Lincoln Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics, AI and mathematics taught live online in English to children, teenagers and adults in Lincoln, in small groups arranged by level or one to one.'
  },

  h1: 'Coding classes in Lincoln',
  capsuleQ: 'What are the best coding classes in Lincoln?',
  capsule: 'Census 2021 counted 103,813 usual residents in Lincoln, and 13.1% of them were aged 20 to 24, against 6.0% in England. Lincoln Castle says it is the only place in the world where an original 1215 Magna Carta and the 1217 Charter of the Forest can be seen side by side. Lincoln learners from six to sixty-seven meet their teacher on live video, in a group of five to ten who share their level or on their own, with our teaching team in India keeping to British hours. No fee applies to the first lesson; after that, a group place is USD 100 a month and private teaching USD 150.',
  lead: 'The Met Office station at Waddington, six kilometres south of Lincoln, has counted days of air frost every month since 1947. Counts of events like these often follow the Poisson distribution, the textbook model for things that happen independently at a steady rate, and it makes one sharp prediction: the variance should equal the mean. For January the mean is 11.04 days and the variance is 31.30. Poisson expects about one mild January with four frosty days or fewer in 77 years; there were ten. It expects less than one with twenty or more; there were four, led by 27 in 1963. Frosty days arrive in cold spells, not one by one. Our teenagers test the model, watch it fail, and fit a better one.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Lincoln.',

  picks: {
    eyebrow: 'Course picks for Lincoln',
    h2: 'Four courses for the city on the hill',
    intro: 'Pick the course that suits the learner\'s interests. Every one begins with a live lesson at no cost, and you will not be asked for a card.',
    items: [
      { course: 'mental-maths-mastery-kids', band: 'Ages 6 to 11', note: 'Quick, confident number work for younger children, including tallying and comparing counts from real charts.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real weather records in Python, fitting distributions and checking them against the data, as on this page.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', band: 'Ages 16 to 18', note: 'A level Maths including the statistics strand, where discrete distributions and hypothesis tests are examined.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Probability and statistics for adults, from counting models to judging whether a model fits.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Lincoln today',
      h2: 'A university city with a young population',
      intro: 'From the 2021 census for the City of Lincoln council area, as the Office for National Statistics published it through Nomis.',
      body: [
        { kind: 'table', caption: 'Lincoln, Census 2021', head: ['Measure', 'Lincoln', 'England'], rows: [
          ['Usual residents', '103,813', '56,490,048'],
          ['Living in households', '96,559', 'Not compared'],
          ['Living in communal establishments', '7,254', 'Not compared'],
          ['Aged 15 to 19', '8,835 (8.5%)', '5.7%'],
          ['Aged 20 to 24', '13,598 (13.1%)', '6.0%'],
          ['Aged 25 to 29', '7,943 (7.7%)', '6.6%'],
          ['Students among residents aged 5 and over', '27,544 (27.9%)', '20.4%'],
          ['Usual residents per square kilometre', '2,908.9', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Early twenties', p: 'People aged 20 to 24 made up 13.1% of Lincoln\'s residents in 2021, against 6.0% across England, with another 8.5% in their late teens.' },
          { h3: 'Study all around', p: 'Among 98,694 residents aged five and over, 27,544 were at school or in full-time study, 27.9% set against England\'s 20.4%.' },
          { h3: 'A compact city', p: 'The council area is small and built up, holding 2,908.9 residents per square kilometre, while its surrounding villages belong to neighbouring districts.' }
        ] },
        { kind: 'p', text: 'Our Lincoln learners reflect that mix. A Year 3 child in Birchwood might be learning to tally and compare, a Year 12 student near Uphill taking A level Maths, and a graduate in the city centre learning Python for a data role, each in a small group of learners at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Charters in the castle',
      h2: 'Magna Carta and the Charter of the Forest, side by side',
      intro: 'From Lincoln Castle\'s own account of the documents it displays.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '15 June 1215', p: 'Lincoln Castle says it is said that King John and the barons met at Runnymede on this day and agreed a charter of liberties, which enshrined the principle that the king had to act within the law.' },
          { h3: '1217', p: 'The charter was reissued, with some original clauses moved into a second charter, the Charter of the Forest. Only then did the original take the name Magna Carta, the Great Charter, to tell the two apart.' },
          { h3: 'Side by side', p: 'The castle describes itself as the only place in the world where an original 1215 Magna Carta and the 1217 Charter of the Forest can be seen together, on permanent loan from Lincoln Cathedral.' }
        ] },
        { kind: 'p', text: 'We have no connection with Lincoln Castle or Lincoln Cathedral. The charters open this page because they are about rules and exceptions: a principle written down, then tested against how people actually behaved. The project below does the same with a mathematical rule, writing down what randomness predicts and then testing it against seventy-seven years of Lincolnshire winters.' },
        { kind: 'spec', title: 'Where the counts come from', p: 'The Met Office publishes monthly records for a set of long-running stations as free text files. Waddington, about six kilometres south of Lincoln, reports monthly temperatures, rain, sunshine and the number of days with air frost, from 1947 to the present, with the latest months marked provisional.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Do frosty days near Lincoln arrive at random?',
      intro: 'The Poisson distribution describes counts of events that happen independently at a steady average rate. Its fingerprint is simple: the spread of the counts, measured as the variance, equals their average.',
      body: [
        { kind: 'table', caption: 'Januaries at Waddington by number of air frost days, 77 years, against a Poisson model with the same mean of 11.04', head: ['Air frost days in January', 'Januaries observed', 'Poisson expects', 'Negative binomial expects'], rows: [
          ['0 to 4', '10', '1.1', '7.5'],
          ['5 to 9', '23', '24.8', '26.6'],
          ['10 to 14', '25', '39.6', '24.5'],
          ['15 to 19', '15', '10.7', '12.3'],
          ['20 or more', '4', '0.7', '5.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Compare spread with average', p: 'Across 77 Januaries the average is 11.04 frosty days and the variance 31.30, nearly three times larger. February, March and December are even further from Poisson.' },
          { h3: '2. Look at the tails', p: 'Poisson squeezes counts close to the mean. Real Januaries are far more varied: ten had four frosty days or fewer, and 1963 had 27, a count the model puts at odds of about three in a hundred thousand.' },
          { h3: '3. Fit a better model', p: 'The negative binomial allows extra spread. Matched to the same mean and variance, it expects 7.5 mild Januaries and 5.9 severe ones, close to the 10 and 4 that happened.' }
        ] },
        { kind: 'callout', h3: 'Why the model fails', p: 'Poisson assumes each day\'s chance of frost is independent of the others and steady across the years. Neither holds. Frost comes in cold spells, so one frosty day makes the next more likely, and a cold January tends to lead into a cold February: the two months\' counts correlate at 0.39. The rate has also fallen, from an average of 51.6 frosty days a year in 1949 to 1985 to 34.3 in 1986 to 2025, and a shifting rate on its own adds spread.' },
        { kind: 'p', text: 'Months at the edges of winter show the gap most clearly in zeros. In 77 Aprils, 24 had no air frost at all, where Poisson with the same average would expect about 11; in November, 14 had none, where it would expect 2. A model that gets the zeros wrong would be dangerous for anyone planning around frost, from a gritting schedule to a farm.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Counting honestly',
      h2: 'Five checks before trusting a count model',
      intro: 'Learned on frosty days, then used on website visits, shop arrivals, goals in football matches, support calls and the counts inside many machine learning models.',
      body: [
        { kind: 'table', caption: 'Testing whether counts are Poisson', head: ['Check', 'For Waddington frost days', 'What it catches'], rows: [
          ['Variance against mean', 'January 31.30 against 11.04', 'Extra spread the model cannot explain'],
          ['Zeros', 'April: 24 without frost, 11 expected', 'A model that misjudges quiet periods'],
          ['Tails', 'Four Januaries with 20 or more, 0.7 expected', 'Underestimating extremes'],
          ['Independence', 'January and February correlate at 0.39', 'Events that cluster in spells'],
          ['A steady rate', 'Annual mean 51.6 before 1986, 34.3 after', 'A trend hiding inside the spread']
        ] },
        { kind: 'p', text: 'None of this means the Poisson distribution is wrong in general. It is an excellent model for many counts, and a learner who knows its fingerprint can spot at once when it applies. The skill is checking, not assuming: comparing the variance with the mean takes one line of code and settles more arguments than any amount of theory.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Rolling dice to see how counts usually cluster, then comparing with a real winter chart that does something very different.' },
          { h3: 'Teenagers', p: 'The Waddington file in Python, frost counts by month, a Poisson check, and a negative binomial fitted to the same data.' },
          { h3: 'Adults', p: 'Modelling counts at work, such as orders or calls, with the assumptions checked before the forecast is trusted.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Met Office, Lincoln Castle, Lincoln Cathedral or City of Lincoln Council. The station record and census tables are published openly; the fits, ratios and comparisons shown here are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From tally charts to overdispersion',
    intro: 'These age bands are approximate, and the free lesson shows where a learner fits.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Tallies and charts', p: 'Counting things over time, drawing tally charts, and noticing which months are busy and which are quiet.', courses: ['mental-maths-mastery-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Averages and spread', p: 'Mean and range in code, and the surprise of two sets with the same average but very different spread.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Distributions in Python', p: 'Poisson and negative binomial models fitted to real counts, with variance, zeros and tails checked.', courses: ['data-science-course-for-teens-python-data', 'a-level-maths-course-pure-mechanics-statistics'] },
      { band: 'Ages 18 to 67', h3: 'Count models at work', p: 'Modelling arrivals, orders and incidents, and knowing when the simplest model is not enough.', courses: ['statistics-probability-maths-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Software fits a Poisson model in one line. Why should a Lincoln teenager check whether it fits?',
    intro: 'Because the fit runs whether or not the data agree.',
    p1: 'Any statistics library will fit a Poisson model to frost days and report a rate of about eleven for January. It will not warn that the model thinks a 1963 winter is almost impossible. A learner who compares variance with mean, and looks at the zeros and the tails, knows in a minute that the model is the wrong shape, and knows what to try instead.',
    p2: 'AI systems lean on the same kinds of assumption. Models that predict demand, clicks or failures often start from a count distribution, and when real events cluster, predictions about rare busy days go badly wrong. People who can test the assumption, rather than just run the code, are the ones who notice before the mistake costs anything.',
    closer: 'So a Lincoln teenager should still learn to program in 2026, in a city whose most famous document is about rules and their limits: code applies a rule instantly, and it takes a person to ask whether the rule fits.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Uphill, Downhill or Birchwood, from home',
    intro: 'Steep Hill is famous for a reason, and crossing Lincoln after school is no easier. A lesson online spares the climb.',
    cells: [
      { h3: 'Uphill and downhill', p: 'A learner near the cathedral and another in Boultham can take the same lesson without anyone tackling Steep Hill.' },
      { h3: 'Key stages and exams', p: 'We track progress as Lincoln schools do, through Key Stages 1 to 4, GCSE options and A levels, and all our teaching is in English.' },
      { h3: 'A useful first lesson', p: 'The free session teaches a genuine piece of work and ends with our suggested level, course and weekly time. There is nothing to pay and no card to enter.' },
      { h3: 'Five to ten at one level', p: 'Classmates at the same stage, from Lincoln, elsewhere in the UK and overseas, so each level can meet at a sensible hour.' },
      { h3: 'Twice a week, all year', p: 'Two set lessons weekly, around eight a month, with holidays and exam leave agreed with the teacher beforehand.' },
      { h3: 'Teachers who stay late', p: 'Evening in Lincoln is night in India, four and a half hours ahead in summer and five and a half in winter. Our teachers work those hours so Lincoln learners can join after school or work.' }
    ],
    spec: { title: 'Across Lincolnshire', p: 'Families in North Hykeham, Gainsborough, Sleaford or Market Rasen join exactly the same groups, because all lessons run online and groups form by level.' }
  },

  fees: {
    h2: 'Lincoln lesson fees',
    intro: 'Start free, then pay one monthly fee.',
    first: 'A full lesson with nothing to pay, finishing with a recommended level, course and weekly time.',
    group: 'About eight live lessons a month, in a class of five to ten learners at one stage.',
    private: 'About eight live lessons a month, just your learner and the teacher.',
    closer: 'Families in Ermine and in Bracebridge, and everywhere else outside India, pay one fee in US dollars; there are no pound prices on our pages. The free lesson always comes first, and only when you have chosen a course and a lesson time does billing begin. The pricing page explains pauses, missed lessons and moving between group and one-to-one teaching.'
  },

  reviewsH2: 'What six families said on Google, word for word',

  book: {
    h2: 'Book a free lesson for a Lincoln learner',
    intro: 'The first task follows the learner\'s level: a tally-and-compare game for a young child, a short Python program that counts events for a beginner, or the Waddington file and a Poisson test for a teenager ready for real data.',
    success: 'Thank you. We will be in touch shortly to arrange a lesson for your Lincoln learner.'
  },

  faq: {
    h2: 'Lincoln coding class questions',
    intro: 'What Lincoln families ask us most often.',
    items: [
      { q: 'How many people live in Lincoln?', a: 'Census 2021 counted 103,813 usual residents in the City of Lincoln council area: 96,559 living in households and 7,254 in communal establishments such as student halls and care homes.' },
      { q: 'How does Lincoln compare with England?', a: 'Lincoln is a young, student-heavy city. In 2021, 13.1% of its residents were aged 20 to 24 (England 6.0%), 27.9% of those aged five and over were students (England 20.4%), and it had 2,908.9 residents per square kilometre (England 433.5).' },
      { q: 'What is the Poisson distribution?', a: 'A model for counts of events that happen independently at a steady average rate, such as calls to a helpline in an hour. Its signature is that the variance of the counts equals their mean.' },
      { q: 'Are frosty days near Lincoln random?', a: 'Not in the Poisson sense. At Waddington, January\'s variance of 31.30 is nearly three times its mean of 11.04, because frost comes in cold spells and the long-run rate has fallen. A negative binomial model fits far better.' },
      { q: 'Where does the frost data come from?', a: 'The Met Office publishes monthly records for Waddington, about six kilometres south of Lincoln, as a free text file running from 1947. We leave out months marked provisional and any with missing data.' },
      { q: 'Can I see Magna Carta in Lincoln?', a: 'Lincoln Castle says it displays an original 1215 Magna Carta alongside the 1217 Charter of the Forest, on permanent loan from Lincoln Cathedral. We are not connected with the Castle or the Cathedral.' },
      { q: 'When are Lincoln lessons held?', a: 'On weekday afternoons or evenings, or at weekends; the exact time is agreed in the free lesson. India is four and a half hours ahead of Lincoln in the summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Lincoln?', a: 'No. There is no centre in Lincoln and no premises anywhere in the UK, because we teach every lesson live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Lincoln lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Lincoln groups made up?', a: 'By level, pace and aims rather than age or address, with five to ten learners at one stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The East Midlands and beyond',
    html: 'Down the A46, the <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham page</a> wraps its landmarks in a convex hull, and east across the Wash <a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich</a> asks whether its churches are clustered. <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a> tests weather forecasts against the obvious guesses. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> walks through key stages, GCSEs and A levels, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lists every town and city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lincoln and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-nottingham', label: 'Nottingham' },
    { href: '/best-coding-class-in-norwich', label: 'Norwich' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-lnc .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.45rem); }
.cg-root.cg-lnc .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-lnc .cg-capsule { border-left: 4px solid var(--cg-accent); border-right: 4px solid var(--cg-accent); padding: 0 1rem; }
.cg-root.cg-lnc .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lnc .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-lnc .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-lnc .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-lnc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lnc .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-lnc .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Lincoln, Census 2021 via Nomis (E07000138): TS001 103,813 usual residents, 96,559 in households, 7,254 in communal establishments; TS007A 8,835 aged 15 to 19 (8.5 percent, England 5.7), 13,598 aged 20 to 24 (13.1 percent, England 6.0), 7,943 aged 25 to 29 (7.7 percent, England 6.6); TS068 27,544 students of 98,694 residents aged 5 and over (27.9 percent, England 20.4); TS006 2,908.9 usual residents per square kilometre (England 433.5). Lincoln Castle, Magna Carta: an original 1215 Magna Carta and the 1217 Charter of the Forest in the David P J Ross Magna Carta Vault, the only place in the world where the two can be seen side by side, on permanent loan from Lincoln Cathedral; in 1217 some clauses moved into the Charter of the Forest and the original took the name Magna Carta.',
    localProject: 'Do frosty days near Lincoln arrive at random? Met Office historic station data, Waddington (about 6 km south of Lincoln), monthly air frost days from 1947 (provisional months excluded; 24 of 948 months missing). January (77 years): mean 11.04, variance 31.30, ratio 2.84; bands 0-4, 5-9, 10-14, 15-19, 20+ observed 10, 23, 25, 15, 4 against Poisson 1.1, 24.8, 39.6, 10.7, 0.7 and negative binomial (r 6.01) 7.5, 26.6, 24.5, 12.3, 5.9; highest 27 in 1963. April: 24 with none against 10.6 expected; November 14 against 2.0. Annual (1949-2025): mean 42.61, variance 271.40; 1949-85 mean 51.6, 1986-2025 34.3. January-February correlation 0.39. Lesson family: Poisson distribution and overdispersion; distinct from Dundee forecast evaluation and Cambridge heap ranking.',
    requiredMentions: [
      '103,813',
      '96,559',
      '2,908.9',
      '13,598',
      '27,544',
      '98,694',
      'Waddington',
      'Charter of the Forest',
      'Poisson',
      'negative binomial',
      '31.30',
      'Steep Hill'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Lincoln: 103,813 usual residents; 96,559 in households; 7,254 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000138' },
      { claim: 'Nomis, Census 2021 TS007A: Lincoln and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000138,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Lincoln 27,544 students of 98,694 aged 5 and over (27.9 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000138,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Lincoln 2,908.9 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000138,E92000001' },
      { claim: 'Met Office, historic station data, Waddington: monthly air frost days from 1947.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/waddingtondata.txt' },
      { claim: 'Lincoln Castle, Magna Carta: 1215 Magna Carta and 1217 Charter of the Forest side by side, on permanent loan from Lincoln Cathedral.', url: 'https://www.lincolncastle.com/content/magna-carta' }
    ],
    rejectedClaims: [
      'Lincoln Cathedral history (including height records): the Cathedral website returned 403, so the Cathedral is mentioned only as the lender of the charters.',
      'A definition of air frost: the station file labels the column without defining it, so the page uses the term as published.',
      'Any claim about climate change from the frost trend: the page reports the change in the average and its effect on the spread, and makes no claim about causes.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Met Office, Lincoln Castle, Lincoln Cathedral or City of Lincoln Council.'
    ]
  }
};
