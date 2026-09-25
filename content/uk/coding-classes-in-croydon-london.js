'use strict';
// Croydon (cg- London borough page, UK cluster Phase 5, row 164). Named sources only.
// Spine: ranking is not predicting. Learners fit a Bradley-Terry model (each team one strength number, plus one home
// advantage; P(home side beats away side) = logistic(h + s_home - s_away); a draw counts as half a win; maximum
// likelihood by BFGS, strengths summing to zero) to all 380 Premier League results of 2024-25 (football-data.co.uk E0
// CSV), then test it on the 380 of 2025-26. Ranking: strengths order matches the points table within one place for all
// 20 teams. Prediction, 276 decisive 2025-26 matches: home side always 58.7%, higher last-season finisher 59.1%,
// Bradley-Terry 60.9%. Confidence, log loss per match (draw target 0.5): coin 0.693, full model 0.717 (worse than a coin).
// Shrink factor k on the strengths chosen on the first 190 matches of 2025-26 (to 1 January 2026) = 0.5; on the last
// 190: full 0.738, shrunk 0.684, coin 0.693. Promoted sides get the average strength of the three relegated; Sunderland
// then finished 7th on 54 points. Points are worked out by us from the results.
// Selhurst Park: club contact page "Selhurst Park, Whitehorse Lane, London SE25 6PU"; postcodes.io SE25 6PU = Croydon,
// South Norwood ward. Lesson family: Bradley-Terry paired comparison + calibration and shrinkage. Screened 25 September
// 2026 (Bradley-Terry 0, Selhurst 0). Distinct from Elo pages (running updates) and Poisson goal models.
// No betting odds are used or mentioned, though the source file carries them.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'CROYDON', blurb: 'Selhurst Park, ten libraries and a project that ranks football teams and then asks how sure it should be.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-croydon-london',
  code: 'cry',
  accent: '#31726A',
  accentRationale: 'Croydon: a deep pitch teal from the solver (4.55:1 on every paper tint), chosen to avoid any club colours and kept apart from the Newham steel blue and the Hounslow green',
  pageType: 'governorate',
  place: {
    name: 'Croydon',
    eyebrow: 'London Borough of Croydon',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Croydon, London',
  title: 'Coding Classes in Croydon, Purley, Norbury | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Croydon: Thornton Heath, Norbury, South Norwood, Purley, Coulsdon and New Addington. Ages 6 to 67.',
  ogDescription: 'Croydon coding and Python classes, with a project where learners rank Premier League teams from their results and then test how far the ranking can predict.',
  twitterDescription: 'Croydon coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Croydon Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Croydon, taught live in English.'
  },

  h1: 'Coding classes in Croydon',
  capsuleQ: 'What are the best coding classes in Croydon?',
  capsule: 'Croydon is the south London borough of Thornton Heath, Norbury, South Norwood, Addiscombe, Purley, Coulsdon, Selsdon and New Addington, with 390,719 residents at the 2021 Census and Selhurst Park inside its boundary. A class worth paying for should teach a learner not only to build a model but to ask how much to trust it, and this page does that with football: a ranking of Premier League teams worked out from their results, then tested on a season it never saw. Lessons run live on video with teachers based in India, for learners aged 6 to 67, either privately or in a group of five to ten at the same stage. The first lesson is on us. From then on, USD 100 a month buys a group place and USD 150 a month buys private teaching.',
  lead: 'Selhurst Park, home ground of Crystal Palace, stands in South Norwood, in the north of Croydon. Our learners start from a question every supporter argues about: how good is each team, really? The Bradley-Terry model answers with one number per team, chosen so that the stronger side of any pair is more likely to win, plus a small bonus for playing at home. Fitted to all 380 results of 2024-25, it ranks the twenty clubs almost exactly as the league table does. The interesting part comes next. Asked to predict 2025-26, it picks the winner a little more often than "the home side wins", yet it is so sure of itself that a coin toss scores better on confidence. Learners then fix that, honestly, with one extra number.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Croydon.',

  picks: {
    eyebrow: 'Course picks for Croydon',
    h2: 'Where Croydon learners usually start',
    intro: 'Imagine a Year 4 child in Thornton Heath who keeps a sticker album of league tables, a Year 10 pupil in Addiscombe who argues about which team is really strongest, a Year 12 student in Purley thinking about statistics or computer science, and a parent in Coulsdon who fancies building their own fantasy-league model. The same free lesson opens the door for each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch penalty game with a score table that sorts itself, and a first taste of rules deciding a winner.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python: read a list of results, add up points, and sort teams into a table.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including this page\'s Bradley-Terry ranking and the test on a new season.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who meet rankings and ratings at work and want to know what they can and cannot predict.' }
    ]
  },

  sections: [
    {
      id: 'croydon', tint: '', eyebrow: 'Croydon at a glance',
      h2: '390,719 residents, 180 listed buildings and ten libraries',
      intro: 'Each figure comes from the organisation named next to it, or was counted by us from that organisation\'s data.',
      body: [
        { kind: 'table', caption: 'Croydon in figures, each with its publisher', head: ['Item', 'Figure', 'Published by'], rows: [
          ['Usual residents, 2021 Census', '390,719', 'ONS table TS001, via Nomis'],
          ['National Heritage List entries inside the borough', '180: 14 Grade I, 9 Grade II*, 157 Grade II', 'Historic England data, counted 25 September 2026'],
          ['Libraries on the council\'s list', '9 council libraries, plus the Upper Norwood Library Hub', 'Croydon Council, read 25 September 2026'],
          ['Services at West Croydon', 'Tram, Windrush line and Southern', 'TfL open data, checked 25 September 2026'],
          ['Premier League results used', '380 from 2024-25 and 380 from 2025-26', 'football-data.co.uk result files']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A palace in pieces', p: 'Eight of Croydon\'s fourteen Grade I entries are parts of Old Palace Croydon, among them its Great Hall, its Chapel and a southern range with a long gallery.' },
          { h3: 'Churches and an almshouse', p: 'The other Grade I entries include the Hospital of the Holy Trinity, known as the Whitgift Hospital, the Church of St Mary at Addington and the parish church of St John the Baptist.' },
          { h3: 'From airfield to memorial', p: 'Grade II* entries include Airport House, Addington Palace, the Croydon War Memorial and a house called Wrencote.' }
        ] },
        { kind: 'p', text: 'Croydon Council lists Ashburton, Central, Coulsdon, New Addington, Norbury, Purley, Selsdon, South Norwood and Thornton Heath libraries, and describes the Upper Norwood Library Hub as jointly funded with Lambeth and run by the Upper Norwood Library Trust.' }
      ]
    },
    {
      id: 'results', tint: 'tint', eyebrow: 'The data',
      h2: 'Two seasons of results, one file each',
      intro: 'Each Premier League season is a spreadsheet of 380 rows: date, home team, away team and the final score. That is all the model needs.',
      body: [
        { kind: 'table', caption: 'Points worked out by us from the results', head: ['Club', '2024-25 place and points', '2025-26 place and points'], rows: [
          ['Liverpool', '1st, 84', '5th, 60'],
          ['Arsenal', '2nd, 74', '1st, 85'],
          ['Crystal Palace', '12th, 53', '15th, 45'],
          ['Sunderland', 'not in the league', '7th, 54'],
          ['Southampton', '20th, 12', 'not in the league']
        ] },
        { kind: 'p', text: 'The ground\'s postal address on the club\'s own contact page is Selhurst Park, Whitehorse Lane, SE25 6PU, and the postcode directory places it in Croydon\'s South Norwood ward. In 2024-25 Crystal Palace won six league games at home and seven away, with seven draws in each, a small reminder that a single season is noisy.' },
        { kind: 'p', text: 'We work out places and points ourselves from the published scores rather than copying a table, so a learner can check every figure with a few lines of code. The source files also carry bookmakers\' prices; this project never uses them, and neither do our lessons.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One number per team: the Bradley-Terry model',
      intro: 'Learners build a ranking from nothing but who beat whom, then find out what it can and cannot predict.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Strengths', p: 'Give every team a strength. The chance that the home side wins depends only on the gap between the two strengths, plus a home bonus, passed through the S-shaped logistic curve.' },
          { h3: '2. Fit', p: 'Adjust all twenty strengths and the bonus until the results that really happened are as likely as possible. A draw counts as half a win for each side.' },
          { h3: '3. Test', p: 'Freeze the strengths, then predict every match of the next season and score the predictions two ways: how often the pick is right, and how confident it was.' }
        ] },
        { kind: 'table', caption: 'Predicting the 276 decisive matches of 2025-26, run 25 September 2026', head: ['Method', 'Winner picked correctly'], rows: [
          ['The home side always wins', '58.7%'],
          ['The side that finished higher in 2024-25 wins', '59.1%'],
          ['Bradley-Terry strengths from 2024-25, with home bonus', '60.9%']
        ] },
        { kind: 'p', text: 'Fitted to 2024-25, the strengths put all twenty clubs within one place of their position on the points table; the only swaps are between teams level or a point apart. So as a ranking it works. As a predictor it is only slightly better than the lazy rules: in a new season the home side wins nearly three decisive games in five anyway, and the model adds about two percentage points to that. Of the 380 matches, 104 were draws, which none of the three methods tries to call.' },
        { kind: 'callout', h3: 'Why a chatbot\'s prediction is not the same as understanding one', p: 'Ask an assistant who will win on Saturday and it will name a team with complete assurance. Our learners discover that their own model, built from a full season, is right about three times in five, and that its confidence was the weak point. Knowing that a correct pick and a well-judged probability are different things, and checking both on matches the model has never seen, is what separates a data scientist from someone pressing a button.' }
      ]
    },
    {
      id: 'confidence', tint: 'tint', eyebrow: 'How sure should it be?',
      h2: 'Worse than a coin toss, until we shrink it',
      intro: 'A score called log loss rewards a forecaster for being confident when right and punishes it hard for being confident when wrong. A coin toss, saying 50% every time, scores 0.693. Lower is better.',
      body: [
        { kind: 'table', caption: 'Log loss per match, draws counted as half, run 25 September 2026', head: ['Matches scored', 'Coin toss', 'Full-strength model', 'Shrunk model'], rows: [
          ['All 380 of 2025-26', '0.693', '0.717', 'not used here'],
          ['Last 190 of 2025-26, from 3 January 2026', '0.693', '0.738', '0.684']
        ] },
        { kind: 'p', text: 'The fitted strengths are too spread out: a season in which one team collects 84 points and another 12 makes the gaps look larger than they will be next year. The fix is a single shrink factor that pulls every team towards the average. We chose it using only the first 190 matches of 2025-26, up to 1 January 2026, where halving the strengths gave the lowest score, and then scored the last 190 matches. The halved model beats the coin; the untouched one does not.' },
        { kind: 'p', text: 'Three teams, Burnley, Leeds and Sunderland, had no 2024-25 results, so we gave each the average strength of the three sides that went down. Sunderland then finished seventh on 54 points. A model can only know what its data showed it, and learners are asked to say where that gap sits. The Premier League, the clubs, football-data.co.uk, Croydon Council, Historic England, TfL and the ONS have no connection with Modern Age Coders; the fitting, the tests and every percentage here are our own work.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Trams, trains and a lesson at home',
      intro: 'Croydon has London\'s tram network at its heart. Our classes need a laptop instead.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'West Croydon', p: 'TfL\'s open data lists the tram, the Windrush line and Southern at West Croydon.' },
          { h3: 'Norbury to New Addington', p: 'Learners at opposite ends of the borough can share the same class without a single tram stop between them.' },
          { h3: 'Matched, not drawn', p: 'Groups are built by level, not by lottery: five to ten learners at one stage, meeting at a UK evening hour.' }
        ] },
        { kind: 'spec', title: 'Croydon and the other boroughs', p: 'At the 2021 Census Croydon had more usual residents than any other London borough, just ahead of Barnet. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists all 32 and the City, adding a link to each as it goes live, including <a class="cg-inline-link" href="/coding-classes-in-newham-london">Newham</a> across the river in the east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a sorted table to a calibrated model',
    intro: 'A learner\'s first rung is decided in the free lesson by what they can already do; their school year is only a starting guess.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Scores and tables', p: 'Children keep score in Scratch games and sort players or teams from most points to fewest.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Results to a table', p: 'Python that reads match results, awards points and sorts a league, with ties broken by goal difference.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Rank, predict, calibrate', p: 'Logistic curves, maximum likelihood and a fair test on new data, rich material for a computing or maths project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Ratings at work', p: 'Adults learn how rating systems are built and why a confident prediction is not the same as a good one.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI will rank teams for you. Why should a Croydon teenager build the ranking?',
    intro: 'Because the hardest question about any prediction is not who, but how sure.',
    p1: 'Machine learning systems are, at heart, very large versions of this page\'s model: numbers adjusted until past data looks likely, then used on new cases. They share its weakness too. Our Bradley-Terry fit ranked last season almost perfectly and still scored worse than a coin on confidence, until one shrink factor, chosen on data it had not been scored on, pulled it back. Medical tests, credit scores and exam predictions all need the same check.',
    p2: 'A learner who has watched their own model be overconfident learns the habits that matter with any AI tool: keep a test set the model never sees, score confidence as well as correctness, and compare with the simplest rule first. Code can be generated in seconds. Judging whether its answers deserve belief is still human work.',
    closer: 'Every club, company and hospital now runs on ratings and predictions. A Croydon learner who can build one and then question it is ready for that world.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Norbury to Coulsdon, lessons at home',
    intro: 'Wherever a learner lives in Croydon, the classroom is a browser tab away.',
    cells: [
      { h3: 'At home', p: 'Learners join on a laptop or desktop with headphones and a steady broadband or mobile connection.' },
      { h3: 'Key Stages named', p: 'Progress is described in the stages used by schools in England, from Key Stage 1 to sixth form, with GCSE and A level mentioned where relevant. All lessons are in English.' },
      { h3: 'Free first lesson', p: 'A real teaching session rather than a pitch, finishing with a recommended level and course. We never ask for card details at this stage.' },
      { h3: 'Five to ten per class', p: 'Classmates share a stage of learning and come from across the UK and beyond, which keeps a suitable hour available.' },
      { h3: 'Two evenings a week', p: 'Classes usually meet twice weekly and pause for half terms, holidays and exams by agreement.' },
      { h3: 'London clock', p: 'Teachers are based in India, but every lesson time in our messages is given in UK time.' }
    ],
    spec: { title: 'Nearly 391,000 people, one right class', p: 'Croydon alone could fill many classes, yet a good one needs five learners at the same level and the same hour, so ours draw on learners well beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Croydon families',
    intro: 'A free first lesson, then one monthly fee that is the same from Norbury to New Addington.',
    first: 'A full lesson with a teacher, at no cost, that ends with our recommendation of level, course and time.',
    group: 'Roughly eight live lessons each month in a class of five to ten learners at one stage.',
    private: 'Roughly eight live lessons each month, taught one to one.',
    closer: 'Croydon families pay in US dollars, as all families outside India do, and the site shows no sterling prices. You pay nothing before the free lesson and before choosing a course and a regular slot. Pauses, missed lessons and switching between a class and private lessons are all explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, as families wrote them',

  book: {
    h2: 'Ask for a free lesson',
    intro: 'Tell us the learner\'s age or school year and something they are keen on. We could open with a Scratch penalty game, a Python league table, or the team ranking on this page.',
    success: 'Thank you. Our team has your Croydon lesson request.'
  },

  faq: {
    h2: 'Croydon families ask',
    intro: 'About the borough, the football project and how lessons work.',
    items: [
      { q: 'How many people live in Croydon?', a: 'The 2021 Census recorded 390,719 usual residents in the London Borough of Croydon, in Office for National Statistics table TS001.' },
      { q: 'Is Selhurst Park in Croydon?', a: 'Yes. The club gives the ground\'s address as Selhurst Park, Whitehorse Lane, London SE25 6PU, and the postcode directory places SE25 6PU in the London Borough of Croydon, South Norwood ward.' },
      { q: 'What is the Bradley-Terry model?', a: 'A way to rank competitors from head-to-head results. Each gets one strength number, and the chance that one beats another depends on the difference between their strengths. Our version adds a bonus for playing at home.' },
      { q: 'How well did it predict the 2025-26 season?', a: 'It picked the winner in 60.9% of the 276 matches that were not drawn, against 58.7% for always backing the home side and 59.1% for backing last season\'s higher finisher.' },
      { q: 'Why shrink the strengths?', a: 'The full-strength model was overconfident and scored worse than a 50-50 coin on log loss. Halving the strengths, a factor chosen on the first half of 2025-26, gave a better score than the coin on the second half: 0.684 against 0.693.' },
      { q: 'When would Croydon lessons take place?', a: 'After the free lesson we propose a regular weekly slot in a class at the right level with a place free. Teachers are in India, but every time we give you is UK time.' },
      { q: 'What does a learner need at home?', a: 'A laptop or desktop, headphones or speakers, and a reliable internet connection. For the football project, Python and two free result files are enough.' },
      { q: 'Is there a Modern Age Coders centre in Croydon?', a: 'No. There is no Croydon centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Croydon cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Elsewhere in London and the UK',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> brings together all 32 boroughs and the City, linking each new page as it is published, such as <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a> and <a class="cg-inline-link" href="/coding-classes-in-barnet-london">Barnet</a> north of the river. For learners who want to go deeper into prediction there are our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> explains how schooling differs across England, Scotland, Wales and Northern Ireland.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Croydon and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-newham-london', label: 'Newham' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-cry .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-cry .cg-hero h1 { font-weight: 780; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-cry .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-cry .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cry .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-cry .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.7rem); }
.cg-root.cg-cry .cg-table caption { font-weight: 700; letter-spacing: 0.01em; }
.cg-root.cg-cry .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cry .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-cry .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-cry .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Croydon. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000008): 390,719 usual residents (387,377 households, 3,342 communal); highest of the 33 London LADs E09000001-33 in the same table, Barnet second at 389,344. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 180 (I 14, II* 9, II 157); Grade I include eight Old Palace Croydon entries (1079296 Great Hall, 1493512 Chapel, 1493515 southern range including long gallery, 1493514, 1493516-1493519), 1188846 HOSPITAL OF THE HOLY TRINITY (WHITGIFT HOSPITAL), 1079343 CHURCH OF ST MARY ADDINGTON, 1079319 PARISH CHURCH OF ST JOHN THE BAPTIST, 1079297, 1079341, 1188464; II* include 1188970 Airport House, 1358819 Addington Palace, 1268438 Croydon War Memorial, 1079291 Wrencote. Croydon Council find-your-library page, 25 September 2026: Ashburton, Central, Coulsdon, New Addington, Norbury, Purley, Selsdon, South Norwood, Thornton Heath libraries; Upper Norwood Library Hub "Jointly funded by both Lambeth and Croydon councils ... run by the Upper Norwood Library Trust". TfL Unified API StopPoint 940GZZCRWCR (West Croydon), 25 September 2026: Tram, Windrush, Southern. cpfc.co.uk/contact-us: "Selhurst Park, Whitehorse Lane, London SE25 6PU"; postcodes.io SE25 6PU: Croydon, South Norwood.',
    localProject: 'football-data.co.uk mmz4281/2425/E0.csv and 2526/E0.csv, 380 results each. Points (3/1/0) and places (points, goal difference, goals for) computed by us. 2024-25: Liverpool 84, Arsenal 74, Crystal Palace 12th 53 (home W6 D7 L6, away W7 D7 L5), Southampton 20th 12. 2025-26: Arsenal 85, Liverpool 5th 60, Sunderland 7th 54, Crystal Palace 15th 45. Bradley-Terry: P(home win) = logistic(h + s_i - s_j), draw target 0.5, strengths sum to zero, scipy BFGS; 2024-25 fit h = 0.152 (equal teams 53.8%); order within one place of table for all 20 (swaps Aston Villa/Newcastle, Crystal Palace/Fulham). Test 2025-26: 276 decisive, 104 draws; home always 58.7%, higher 2024-25 finisher 59.1% (promoted ranked 17.5), BT 60.9% (promoted Burnley, Leeds, Sunderland given mean of relegated Leicester, Ipswich, Southampton). Log loss (draw 0.5): coin 0.6931, BT all 380 0.717. Shrink k grid 0-1: first 190 by date (to 01/01/2026) best k 0.5 (0.6615); last 190 (from 03/01/2026): k 1.0 0.7378, k 0.5 0.6844, coin 0.6931. Lesson family: Bradley-Terry paired comparison, calibration and shrinkage, screened free 25 September 2026.',
    requiredMentions: [
      '390,719',
      'Bradley-Terry',
      'Selhurst Park',
      'Whitehorse Lane',
      'Whitgift Hospital',
      'Addington Palace',
      'Airport House',
      'Wrencote',
      'Upper Norwood Library Hub'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Croydon E09000008: 390,719 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000008&measures=20100' },
      { claim: 'Premier League results 2024-25 and 2025-26, one CSV per season.', url: 'https://www.football-data.co.uk/englandm.php' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Croydon on 25 September 2026: 180 (14 I, 9 II*, 157 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Croydon Council, Find your library: nine council libraries and the Upper Norwood Library Hub.', url: 'https://www.croydon.gov.uk/libraries-leisure-and-culture/libraries/find-your-library' },
      { claim: 'TfL Unified API, StopPoint 940GZZCRWCR (West Croydon), 25 September 2026: Tram, Windrush, Southern.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZCRWCR' },
      { claim: 'Crystal Palace FC contact page: Selhurst Park, Whitehorse Lane, London SE25 6PU; postcodes.io places SE25 6PU in Croydon.', url: 'https://www.cpfc.co.uk/contact-us/' }
    ],
    rejectedClaims: [
      'Official Premier League tables (including any point deductions): not read at premierleague.com; places and points are computed from results and labelled as ours.',
      'Cup results and honours for Crystal Palace: not in the league result files and not verified at a primary source, so not mentioned.',
      'Betting odds in the source files: deliberately unused; the project never mentions gambling prices.',
      'Croydon Airport history (first air traffic control and similar claims): not verified at a primary source; only the NHLE entry name Airport House is used.',
      'Tram stop counts inside Croydon: the TfL line list covers the whole network and was not split by borough, so no count is given.',
      'Individual Croydon schools, including Whitgift School, and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth for Croydon: never a standout; used only to order the build.'
    ]
  }
};
