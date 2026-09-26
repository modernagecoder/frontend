'use strict';
// Berkshire (cg- county index, UK cluster Phase 7, row 213). Six unitary councils, no county council.
// Spine: a forecast is a crowd, not a number. ECMWF is headquartered in Reading and runs an ensemble of 51
// forecasts (one control plus 50 with slightly altered starting conditions and physics) out to 15 days. Our run
// (scratchpad brk/ens.py) takes the free ECMWF IFS 0.25-degree ensemble through Open-Meteo for the grid point
// nearest Reading (51.5 N, 1.0 W, 41 m), as served at 06:37 UK time on 26 September 2026, 14 complete days
// (26 September to 9 October 2026). Daily maximum temperature, middle 80 per cent of members: 1.4 degrees wide on
// day one, 6.0 on 9 October. Days with 1 mm or more: 0 of 51 members on 26 September, 47 of 51 on 30 September,
// 11 of 51 on 5 October although one member gives 35.2 mm that day. The ensemble mean never exceeds 5.7 mm in a
// day (30 September), yet 38 of 51 members have at least one day wetter than that; the median member's wettest
// day is 8.8 mm. Fourteen-day totals range 5.3 to 65.0 mm, median 18.6. Lesson family: ensemble forecasts
// (probability as a count of members, spread growing with lead time, the mean smoothing away extremes). Screened
// site-wide 26 September 2026 (ensemble mean, control forecast, 51 forecasts: 0 hits); distinct from forecast
// baselines and walk-forward evaluation (Dundee), Holt-Winters (Newham) and the Markov wet-day chain (Oxford).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 for the six unitary authorities (total
// 949,778, our sum); ONS Census 2021 built-up areas with our OA-level split over the ONS OA21 to BUA22 lookup
// (Reading BUA 203,789 by OA sum: Reading 141,187, Wokingham 37,088, West Berkshire 25,514; Caversham 33,038 all
// in Reading borough; Crowthorne Wokingham 7,384 and Bracknell Forest 7,812; share of residents outside any ONS
// built-up area: West Berkshire 11.7 per cent, Reading 0); ECMWF "About", "Who we are" and "Medium-range
// forecasts" pages. BLOCKED: West Berkshire Council term dates (Cloudflare challenge, not retried); Reading,
// Wokingham and Bracknell Forest term-date URLs returned 404, so no term dates are printed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'BERKSHIRE', blurb: 'Six councils and no county council, the Reading that spills over three boundaries, and a weather forecast made of 51 guesses.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-berkshire',
  code: 'brk',
  accent: '#5C0E18',
  accentRationale: 'Berkshire: a deep claret from the solver (11.05:1 on the lightest paper), redder and darker than any other UK county accent',
  pageType: 'governorate',
  place: {
    name: 'Berkshire',
    eyebrow: 'Royal County of Berkshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Buckinghamshire', href: '/coding-classes-in-buckinghamshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Berkshire',
  title: 'Coding Classes in Berkshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, data science and maths classes across Berkshire, from Reading, Slough and Bracknell to Wokingham, Newbury and Windsor. Free first class.',
  ogDescription: 'Coding classes for every Berkshire town, and a project built on 51 weather forecasts for Reading: what a probability really is, and why the average never rains hard.',
  twitterDescription: 'Berkshire coding, Python and data classes for ages 6 to 67, live online. The first class is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Data Science Classes for Berkshire',
    description: 'Ability-placed online coding, Python, data science, AI and mathematics for children, teenagers and adults across the six Berkshire councils, taught live in English.'
  },

  h1: 'Coding classes in Berkshire',
  capsuleQ: 'What are the best coding classes in Berkshire?',
  capsule: 'Berkshire has no county council. It is six unitary authorities, Wokingham, Reading, West Berkshire, Slough, Windsor and Maidenhead, and Bracknell Forest, which held 949,778 people between them at the 2021 Census. Reading is the biggest place, and the town spreads well past its own borough. Our classes reach every corner of it the same way, taught live over video by teachers in India, with each learner placed by skill rather than age, from 6 up to 67. Choose a group of five to ten, or a teacher of your own. We teach programming, Python, data science, AI and maths. Because the European weather centre is based in Reading, the Berkshire project is a forecast. The opening class costs nothing; after it, a monthly group place is USD 100, and a teacher to yourself USD 150.',
  lead: 'Ask what the weather will do in Reading in ten days and a serious answer is not a number. It is a crowd. The European Centre for Medium-Range Weather Forecasts, which has its headquarters in Reading, runs its model 51 times from slightly different starting points, and the 51 answers agree closely about tomorrow and argue more and more about the week after. This page takes one of those runs, the free version published for anyone to use, and turns it into a lesson a teenager can build: count the members to get a probability, measure how the crowd spreads out as the days go by, and discover why the average of 51 forecasts is the one forecast that never sees a downpour coming.',
  wa: 'Hello Modern Age Coders, I am looking for a free class for a learner in Berkshire.',

  picks: {
    eyebrow: 'Courses for Berkshire',
    h2: 'Four starting points for Berkshire learners',
    intro: 'An eight-year-old in Thatcham who builds dens and games, an eleven-year-old in Woodley who keeps a rain gauge in the garden, a sixteen-year-old in Maidenhead thinking about data and A levels, and an office manager in Bracknell who lives in spreadsheets. Each begins with one free class.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games and animations, the gentlest way to learn that a program is a list of steps a computer follows exactly.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First real Python for children: variables, lists and loops, the three tools needed to count 51 forecasts.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'pandas, cleaning real datasets, matplotlib and statistics, which is this page\'s forecast project done at full size.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI done properly for working adults, and using AI assistants without being misled by them.' }
    ]
  },

  sections: [
    {
      id: 'berkshire', tint: '', eyebrow: 'Six councils, one county',
      h2: 'Berkshire in census figures: 949,778 people and a Reading larger than Reading',
      intro: 'Council totals come from the 2021 Census on Nomis. The town figures are the ONS built-up areas, and the split between councils is our own count from the same census.',
      body: [
        { kind: 'table', caption: 'The six Berkshire unitary authorities, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main places'], rows: [
          ['Wokingham', '177,503', 'Wokingham, Woodley, Earley, Crowthorne, Twyford'],
          ['Reading', '174,224', 'Reading, Caversham, Tilehurst in part'],
          ['West Berkshire', '161,448', 'Newbury, Thatcham, Hungerford, Burghfield Common'],
          ['Slough', '158,500', 'Slough, Langley, Cippenham'],
          ['Windsor and Maidenhead', '153,496', 'Maidenhead, Windsor, Ascot, Cookham'],
          ['Bracknell Forest', '124,607', 'Bracknell, Sandhurst, Crowthorne in part']
        ] },
        { kind: 'p', text: 'The six are almost the same size, which is unusual for a county and means none of them dominates. It also means the county\'s biggest town does not fit inside its own council. We summed the census counts for every small output area in Berkshire and grouped them by the ONS built-up area they fall in. The Reading built-up area comes to 203,789 people by that count: 141,187 in Reading borough, 37,088 in Wokingham and 25,514 in West Berkshire. Almost a third of urban Reading votes for a different council. Caversham, north of the river, is counted by the ONS as a separate built-up area of 33,040, entirely inside Reading borough.' },
        { kind: 'table', caption: 'Berkshire towns by ONS built-up area, Census 2021, largest first; Marlow straddles in from Buckinghamshire and is left out', head: ['Town', 'Usual residents', 'Town', 'Usual residents'], rows: [
          ['Reading', '203,795', 'Crowthorne', '15,190'],
          ['Slough', '166,855', 'Winnersh', '8,905'],
          ['Bracknell', '78,675', 'Twyford', '8,070'],
          ['Maidenhead', '67,375', 'Old Windsor and Wraysbury', '7,690'],
          ['Wokingham', '50,325', 'Spencers Wood and Three Mile Cross', '7,610'],
          ['Newbury', '42,260', 'Burghfield Common', '6,215'],
          ['Caversham', '33,040', 'Shinfield', '5,420'],
          ['Windsor', '31,560', 'Cookham', '5,215'],
          ['Woodley', '28,025', 'Hungerford', '5,185'],
          ['Thatcham', '25,550', 'Ascot', '23,995'],
          ['Sandhurst', '20,215', '', '']
        ] },
        { kind: 'p', text: 'Three more details from our count. Slough\'s built-up area reaches about 12,700 people into Buckinghamshire, so the table\'s 166,855 is larger than anything inside Berkshire alone; Maidenhead and Ascot also cross the county line, by a few hundred each. Crowthorne is split almost exactly in half, 7,384 residents in Wokingham and 7,812 in Bracknell Forest. And the county is not uniformly suburban: in West Berkshire, 11.7 per cent of residents live outside any ONS built-up area at all, in the villages and farms of the downs, while in Reading borough the figure is zero.' },
        { kind: 'callout', h3: 'Six councils means six sets of dates', p: 'Each of the six authorities publishes its own school calendar, and academies can set theirs independently. We could not read a 2026-27 calendar at a council\'s own site this week, so rather than print one second-hand we agree lesson breaks with every family directly. Slough and Reading also have selective secondary schools with their own entrance tests, covered on the <a class="cg-inline-link" href="/11-plus-maths-tuition-slough">Slough</a> and <a class="cg-inline-link" href="/11-plus-maths-tuition-reading">Reading</a> maths pages; nothing here is advice about schools.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Berkshire project',
      h2: 'Fifty-one forecasts for Reading, and what a crowd of guesses can tell you',
      intro: 'One real forecast, downloaded once and kept, so anyone repeating the project can check our numbers against the same file.',
      body: [
        { kind: 'p', text: 'ECMWF describes its medium-range ensemble as 51 forecasts: one control forecast, plus 50 others that each start from slightly altered initial conditions and use slightly altered model physics. The atmosphere is chaotic, so tiny differences at the start grow. Where the 51 agree, the forecast is confident; where they fan out, it is telling you honestly that it does not know. We took the free 0.25-degree version of that ensemble for the grid point nearest Reading, 51.5 degrees north and 1.0 west, as it was served at 06:37 UK time on 26 September 2026, and kept the fourteen complete days it covered.' },
        { kind: 'table', caption: 'Our run for Reading, 26 September 2026: how far apart the 51 members are, and how many bring rain', head: ['Day', 'Middle 80% of daily highs', 'Width', 'Members with 1 mm or more of rain'], rows: [
          ['Sat 26 September', '18.8 to 20.2 C', '1.4 degrees', '0 of 51'],
          ['Wed 30 September', '19.7 to 22.8 C', '3.1 degrees', '47 of 51'],
          ['Sat 3 October', '16.4 to 19.5 C', '3.1 degrees', '5 of 51'],
          ['Mon 5 October', '14.6 to 19.3 C', '4.7 degrees', '11 of 51, one of them 35.2 mm'],
          ['Fri 9 October', '12.9 to 18.9 C', '6.0 degrees', '12 of 51']
        ] },
        { kind: 'p', text: 'Three lessons come out of that table, and each is a few lines of Python. First, a probability is a count. "47 of 51 members bring at least a millimetre" is the honest meaning of "a 92 per cent chance of rain" for 30 September, and a learner who has done the counting will never again think a percentage in a weather app is a mystery. Second, the spread grows. The middle eighty per cent of forecast highs is 1.4 degrees wide on the first day and 6.0 degrees wide two weeks later, and plotting that width against the day number is a better picture of forecast skill than any sentence.' },
        { kind: 'p', text: 'The third lesson is the surprising one. Average the 51 rainfall forecasts day by day and the wettest day in that average is 30 September at 5.7 mm. Yet 38 of 51 members have at least one day wetter than that, and the typical member\'s wettest day is 8.8 mm. The average is smooth because the members disagree about when the heavy rain falls, and averaging timing disagreements flattens every peak. On 5 October only 11 members bring rain at all, but one of them brings 35.2 mm. The ensemble mean for that day is a light shower. A planner who read only the mean would never know the 35 mm scenario existed.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Count the rainy members for each day by hand from a printed table, then write a loop that does it, and turn counts into percentages.' },
          { h3: 'Ages 13 to 16', p: 'Plot all 51 temperature lines on one chart and watch them fan out, then plot the width of the middle eighty per cent day by day.' },
          { h3: 'Ages 16 and up', p: 'Compare the ensemble mean with every member, find the smoothing effect in the numbers, and write two sentences a flood planner could act on.' }
        ] },
        { kind: 'callout', h3: 'What we did not do', p: 'We did not check this forecast against what actually happened, because on the day we downloaded it that had not happened yet. Checking forecasts against the weather that followed is a different lesson with its own traps, and a good learner should do it next. Everything above describes a single run of a single model at a single grid point, and none of it is a forecast from us.' }
      ]
    },
    {
      id: 'ecmwf', tint: 'deep', eyebrow: 'Why Reading',
      h2: 'A European forecasting centre with its headquarters in Berkshire',
      intro: 'The Berkshire link is institutional. These facts are from the organisation\'s own pages.',
      body: [
        { kind: 'table', caption: 'ECMWF, as it describes itself', head: ['What', 'In ECMWF\'s words or figures'], rows: [
          ['Where it is', 'Headquartered in Reading, UK, with additional sites in Bologna, Italy, and Bonn, Germany.'],
          ['What it is', 'An independent intergovernmental organisation supported by 35 states, both a research institute and a 24/7 operational service.'],
          ['When it began', 'Established in 1975, now employing around 500 staff from more than 30 countries.'],
          ['The ensemble', '51 forecasts at a horizontal resolution of around 9 km: one control forecast plus 50 with slightly altered initial conditions and model physics.'],
          ['How far ahead', 'Forecasts up to 15 days, run from initial conditions valid at 00 and 12 UTC.']
        ] },
        { kind: 'p', text: 'The free forecast we used is not ECMWF\'s full-resolution product. It is the openly published 0.25-degree ensemble, served for convenience by Open-Meteo, and it is coarser than the 9 km runs ECMWF describes. For a classroom that is an advantage rather than a flaw: the file is small, the format is plain JSON, and a learner can download the same kind of data for any town in the world tomorrow morning.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with ECMWF, Open-Meteo or any of the six Berkshire councils, and nothing here implies one. Their figures are theirs; the counting, the charts and any mistake in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> is across the Thames to the north, <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> lies to the south-east, and <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> is up the river. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> lists the rest.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From counting to charts to decisions under uncertainty',
    intro: 'Where a learner starts is settled in the free class, by what they can already do.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Steps and loops', p: 'Scratch games that repeat, count and keep score, the building blocks of every program that ever counted anything.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Lists of numbers', p: 'Python lists and loops, and simple questions asked of real data: how many, how often, which is biggest.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Data you can question', p: 'pandas, charts and statistics on real datasets, including the habit of asking what an average is hiding.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Numbers people act on', p: 'Dashboards and analysis for work, with honest ranges instead of single figures, and AI used as help rather than an oracle.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Learning to code when AI can code',
    h2: 'If an AI can summarise a forecast, why should a Berkshire student learn to read 51 of them?',
    intro: 'Because a summary is a choice about what to leave out, and someone has to know what was left out.',
    p1: 'Hand a chatbot the 51-member file and ask for the rain forecast, and the most likely reply is built on the average: a light shower on 5 October, moderate rain on 30 September. That answer is not wrong. It is a summary, and summaries of ensembles are exactly where the 35 mm member disappears. The assistant did what it was asked; the question did not mention extremes, so the extremes were not in the answer.',
    p2: 'A student who has counted members, drawn the fan of 51 lines and compared the mean with the wettest runs knows to ask the follow-up questions: how many members bring heavy rain, what is the worst of them, how wide is the spread on the day that matters? Those questions turn a comfortable summary into a decision, and they come from understanding the data, not from typing faster.',
    closer: 'So the reason to learn to code in Berkshire in 2026 is not to beat the model at arithmetic. It is to know what to ask of any answer built from averages, including the ones a machine gives you.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The practical side',
    h2: 'Hungerford to Wraysbury, all on one screen',
    intro: 'Berkshire runs along the Thames and the M4 for about as far as a Saturday journey is worth. Online, that distance does not exist.',
    cells: [
      { h3: 'Wherever the learner is', p: 'A bedroom in Sandhurst, a dining table in Twyford, a study in Cookham. The teacher shares a screen, the learner types and talks.' },
      { h3: 'The words UK schools use', p: 'Key Stages, GCSE options and A levels are called what families here call them, and everything is taught in English.' },
      { h3: 'A free class to begin', p: 'A real session of work, ending with a clear view of the right level and course. No card details are needed.' },
      { h3: 'Classmates at your stage', p: 'A group holds five to ten people who can already do roughly the same things, drawn from many towns and countries, which is what makes an evening slot at the right level possible.' },
      { h3: 'Breaks agreed per family', p: 'Two lessons a week is typical. With six councils and many academies setting dates, holidays are fixed with each family, not assumed.' },
      { h3: 'Booked in UK time', p: 'Teaching happens from India, where the clock runs 4.5 hours ahead of British Summer Time and 5.5 ahead of Greenwich Mean Time; whatever the season, your slot is written in UK time.' }
    ],
    spec: { title: 'Why groups are formed by level here', p: 'Six mid-sized councils and a string of towns mean no single place has many learners at the same stage on the same evening. Grouping by level lets a Newbury teenager and a Slough teenager share a class that suits them both.' }
  },

  fees: {
    h2: 'Fees for Berkshire families',
    intro: 'The same prices apply in every Berkshire town, and in every country other than India.',
    first: 'A whole class of real work, ending with a recommended level and course.',
    group: 'Roughly eight classes a month, in a group of five to ten at the same level.',
    private: 'Roughly eight classes a month with a teacher working with one learner.',
    closer: 'Fees are in US dollars, our rate everywhere outside India, and there is no separate pound price list. You pay nothing until the free class has settled a course and a weekly time; the pricing page explains pauses, missed classes and moving between group and private teaching.'
  },

  reviewsH2: 'Reviews from Google, word for word',

  book: {
    h2: 'Ask for the free class',
    intro: 'An age or school year and one interest is enough to start. The first class might be a Scratch game, a first Python loop, or counting 51 forecasts to find a probability.',
    success: 'Thank you. Your Berkshire request has reached us.'
  },

  faq: {
    h2: 'Berkshire questions',
    intro: 'About the county, the forecast project and the classes themselves.',
    items: [
      { q: 'How many people live in Berkshire?', a: 'The six Berkshire unitary authorities held 949,778 usual residents at the 2021 Census, from Office for National Statistics figures on Nomis. Wokingham was the largest at 177,503 and Bracknell Forest the smallest at 124,607.' },
      { q: 'Does Berkshire have a county council?', a: 'No. Berkshire is governed by six unitary authorities: Wokingham, Reading, West Berkshire, Slough, Windsor and Maidenhead, and Bracknell Forest. Each runs its own services, including its own school calendar.' },
      { q: 'How big is Reading?', a: 'The ONS Reading built-up area had 203,795 residents in 2021, more than Reading borough\'s 174,224. By our count from the census, 141,187 of the built-up area live in Reading borough, 37,088 in Wokingham and 25,514 in West Berkshire, while Caversham is counted separately.' },
      { q: 'What is the forecast project?', a: 'Learners take one run of ECMWF\'s 51-member ensemble for Reading, count members to get probabilities, measure how the spread widens over two weeks, and find that the ensemble mean smooths away the heaviest rain. Our run is dated 26 September 2026.' },
      { q: 'Why is a Berkshire page about weather forecasting?', a: 'Because the European Centre for Medium-Range Weather Forecasts has its headquarters in Reading. It was established in 1975, is supported by 35 states and runs the 51-member ensemble the project uses.' },
      { q: 'Do you have a centre in Reading, Slough or Windsor?', a: 'No. Every class is live online, so a learner in a West Berkshire village has exactly the same class as one in central Reading, with no travel either way.' },
      { q: 'What ages do you teach?', a: 'Anyone from 6 to 67. The youngest learners use Scratch blocks; typed Python usually arrives somewhere around age ten to twelve; older students and adults choose between data, AI, web and software tracks. Where each person starts comes out of the free class.' },
      { q: 'Do you teach data science to teenagers?', a: 'Yes. The teen data science course is for ages 14 to 18 and covers pandas, cleaning real datasets, matplotlib charts, statistics and a first machine learning model with scikit-learn.' },
      { q: 'How much are classes?', a: 'Nothing for the first class. Monthly fees after that: USD 100 in a group, USD 150 one to one. There is no sign-up charge and you are not tied to a term.' },
      { q: 'When do Berkshire schools break up?', a: 'That depends on which of the six councils, and on whether the school is an academy. We could not read a 2026-27 calendar at a council site this week, so we arrange breaks with each family rather than publish dates.' }
    ]
  },

  next: {
    eyebrow: 'Across the UK',
    h2: 'Where to go from Berkshire',
    html: '<a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> has a cipher project and <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> a satellite clock. For the selective tests, see the <a class="cg-inline-link" href="/11-plus-maths-tuition-reading">Reading</a> and <a class="cg-inline-link" href="/11-plus-maths-tuition-slough">Slough</a> maths pages. Every other UK page hangs off the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>, and our guide to <a class="cg-inline-link" href="/best-online-coding-classes-uk">choosing an online class</a> sets out the questions worth putting to any provider.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Berkshire and around',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-buckinghamshire', label: 'Buckinghamshire' },
    { href: '/11-plus-maths-tuition-reading', label: 'Reading 11 plus' }
  ],

  personalityCss: `
.cg-root.cg-brk .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3.2vw, 2.8rem); }
.cg-root.cg-brk .cg-hero h1 { font-weight: 600; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-brk .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-brk .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-brk .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-brk .cg-table caption { font-style: italic; letter-spacing: 0.005em; }
.cg-root.cg-brk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-brk .cg-table th { font-weight: 700; letter-spacing: 0.03em; }
.cg-root.cg-brk .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-brk .cg-callout { border-left-width: 7px; border-radius: 0 4px 4px 0; }
`,

  dossier: {
    curriculumAuthority: 'Berkshire (six unitary authorities, no county council). ONS Census 2021 TS001 via Nomis: Wokingham 177,503; Reading 174,224; West Berkshire 161,448; Slough 158,500; Windsor and Maidenhead 153,496; Bracknell Forest 124,607; total 949,778 (our sum). ONS Census 2021 built-up areas (published, rounded): Reading 203,795; Slough 166,855; Bracknell 78,675; Maidenhead 67,375; Wokingham 50,325; Newbury 42,260; Caversham 33,040; Windsor 31,560; Woodley 28,025; Thatcham 25,550; Ascot 23,995; Sandhurst (Bracknell Forest) 20,215; Crowthorne 15,190; Winnersh 8,905; Twyford (Wokingham) 8,070; Old Windsor and Wraysbury 7,690; Spencers Wood and Three Mile Cross 7,610; Burghfield Common 6,215; Shinfield 5,420; Cookham 5,215; Hungerford 5,185. Our OA-level split (Nomis OA counts over the ONS OA21 to BUA22 lookup): Reading BUA 203,789 = Reading 141,187 + Wokingham 37,088 + West Berkshire 25,514; Caversham 33,038 all Reading; Crowthorne Wokingham 7,384 + Bracknell Forest 7,812; Slough BUA 154,191 in Slough, remainder about 12,700 in Buckinghamshire; Maidenhead 66,811 in Windsor and Maidenhead; Ascot 23,557 inside Berkshire; residents outside any BUA: West Berkshire 11.7 per cent, Reading 0. Marlow (14,645) excluded, 163 residents in Berkshire. ECMWF Who we are: "ECMWF is headquartered in Reading, UK, with additional sites in Bologna, Italy, and Bonn, Germany"; supported by 35 states; "established in 1975 and now employs around 500 staff from more than 30 countries". ECMWF Medium-range forecasts: "The ENS is an ensemble of 51 forecasts, all having a horizontal resolution of around 9 km. It comprises one control forecast (CNTL), plus 50 other forecasts that each have slightly altered initial conditions and slightly altered model physics"; forecasts up to 15 days, initial conditions valid at 00 and 12 UTC. Open-Meteo Ensemble API lists "ECMWF IFS 0.25° Ensemble" separately from "ECMWF IFS 9 km (O1280) Europe Ensemble".',
    localProject: 'Ensemble forecast as a crowd. Open-Meteo Ensemble API, model ecmwf_ifs025, grid point 51.5 N 1.0 W elevation 41 m, served 06:37 UK time 26 September 2026, 51 members (control plus member01 to member50), 14 complete days 26 September to 9 October 2026 (the 15th day empty). Daily max temperature middle 80 per cent (10th to 90th percentile of members): 26 Sep 18.8 to 20.2 (1.4); 30 Sep 19.7 to 22.8 (3.1); 3 Oct 16.4 to 19.5 (3.1); 5 Oct 14.6 to 19.3 (4.7); 9 Oct 12.9 to 18.9 (6.0). Members with 1 mm or more: 26 Sep 0 of 51; 30 Sep 47 of 51 (92 per cent); 3 Oct 5; 5 Oct 11, max member 35.2 mm; 9 Oct 12. Ensemble-mean daily rain maximum 5.7 mm (30 Sep); 38 of 51 members have at least one day above that; median member wettest day 8.8 mm; 14-day member totals 5.3 to 65.0 mm, median 18.6. AI angle: an assistant summarising the file reports the mean and loses the 35.2 mm member because the question never asked about extremes. Lesson family: ensemble forecasts (probability as a count of members, spread widening with lead time, the mean smoothing extremes); screened free 26 September 2026 and distinct from forecast baselines (Dundee), Holt-Winters (Newham) and the Markov wet-day chain (Oxford). Not verified against outcomes, stated on the page.',
    requiredMentions: [
      '949,778',
      '141,187',
      '25,514',
      '47 of 51',
      '38 of 51',
      '35.2 mm',
      '11.7 per cent',
      'control forecast',
      '0.25-degree',
      'ensemble mean'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the six Berkshire unitary authorities, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Berkshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22), used for the split of Reading across three councils.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ECMWF Who we are: headquartered in Reading, 35 states, established 1975, around 500 staff.', url: 'https://www.ecmwf.int/en/about/who-we-are' },
      { claim: 'ECMWF Medium-range forecasts: 51-member ensemble, one control forecast and 50 perturbed, around 9 km, up to 15 days.', url: 'https://www.ecmwf.int/en/forecasts/documentation-and-support/medium-range-forecasts' },
      { claim: 'Open-Meteo Ensemble API: ECMWF IFS 0.25-degree ensemble, the free data used in the project.', url: 'https://open-meteo.com/en/docs/ensemble-api' }
    ],
    rejectedClaims: [
      'West Berkshire Council term dates: the council site served a Cloudflare challenge on 26 September 2026, not retried.',
      'Reading, Wokingham and Bracknell Forest term dates: the URLs we tried returned 404 and site search gave no link, so no Berkshire school calendar is printed.',
      'ECMWF\'s street address at Shinfield Park: not stated on the ECMWF pages we read, so only "headquartered in Reading" is used.',
      'Marlow as a Berkshire town: its built-up area has only 163 residents in Windsor and Maidenhead by our count, so it is left to Buckinghamshire.',
      'Any claim about whether the 26 September 2026 forecast turned out right: the weather had not happened when the data was read.',
      'The date Berkshire County Council was abolished: not read at a primary source for this build, so the page says only that there is no county council.'
    ]
  }
};
