'use strict';
// Leeds (cg- city page, UK cluster Phase 4). Spine: a fair sample from a stream you cannot hold. Leeds City
// Council publishes city centre footfall on Data Mill North (dataset 2rlld, Open Government Licence v3,
// maintained by City Centre Management; the dataset notes name 8 cameras and map old camera names to new).
// Measured by us on 21 September 2026 from every resource whose name contains "weekly" (scratchpad lds/res3.py,
// dups.py, bad.py): 656,544 rows from June 2020 onward (earliest date 30 December 2019); 588,840 unique
// camera-hours, because 157 weeks were published twice ("Revised Weekly Data" beside "Weekly Data"), adding
// 67,704 duplicate rows (3 of them with conflicting values); seven files from 17 April to 4 June 2023 write
// dates as "29 May 2023" instead of "29-May-23", so a strict parser silently drops their 9,408 rows; 13
// camera names appear, the 8 current ones plus 5 former names that ran alongside them from June 2020 to
// June 2023 (two former names repeat a current camera's count in most hours: Dortmund Square matches Headrow
// at Broadgate in 22,124 of 26,376 hours). Means per camera-hour: 817.6 over all rows, 833.9 over unique
// camera-hours; first 1,000 rows of the stream 134.1, last 1,000 rows 993.2; reservoir samples of 1,000 rows
// (Algorithm R, five seeds) from the raw stream reproduce the raw stream's year mix (2021 about 21% of rows
// against 19.3% of unique hours), deduplicated samples track the unique mix. Lesson family: reservoir
// sampling, and why a sample fair to rows is only fair to reality once each row is one real thing. Screened
// free site-wide on 21 September 2026 (reservoir sampling: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 (811,956 usual residents; 790,515 in
// households; 21,441 in communal establishments), TS007A (70,459 aged 20 to 24, 8.7%; England 6.0%; band
// total 811,952, never summed), TS068 (184,538 schoolchildren and full-time students of 765,154 residents aged
// 5 and over, 24.1%; England 20.4%); University of Leeds about page (established 1904, Russell Group, more
// than 37,000 students, LS2 9JT); Canal & River Trust (the Leeds & Liverpool Canal, 127 miles).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'LEEDS', blurb: 'The city of Briggate and the Headrow, with a project that samples six years of footfall fairly.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-leeds',
  code: 'lds',
  accent: '#325343',
  accentRationale: 'Leeds: a deep Pennine green from the solver (6.95:1 on every paper tint, dE 7.1 from the nearest used accent), far from the Manchester purple and the Coventry olive',
  pageType: 'city',
  place: {
    name: 'Leeds',
    eyebrow: 'Leeds, West Yorkshire, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Leeds, England',
  title: 'Best Coding Classes in Leeds | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Leeds learners aged 6 to 67, from Headingley to Seacroft, with one teacher every week. First lesson free.',
  ogDescription: 'Coding and AI classes for Leeds, on a page that takes a fair sample of 656,544 hours of city centre footfall and finds 67,704 of them twice.',
  twitterDescription: 'Leeds coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Leeds Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Leeds, taught live in English.'
  },

  h1: 'Coding classes in Leeds',
  capsuleQ: 'What are the best coding classes in Leeds?',
  capsule: 'Leeds had 811,956 residents at the 2021 Census, and a large student population: 184,538 people aged five or older were in school or full-time education, 24.1% of that age group where England recorded 20.4%. The University of Leeds, founded in 1904, alone has more than 37,000 students. Modern Age Coders teaches Leeds learners of every age from six to sixty-seven in live online classes, grouped five to ten by ability or taught one to one, with the teacher in India and the weekly slot fixed on UK time. A trial lesson costs nothing; continuing costs USD 100 a month in a group or USD 150 a month one to one.',
  lead: 'Eight cameras in Leeds city centre count the people walking past, hour by hour, on Briggate, the Headrow, Albion Street, Commercial Street and Park Row. The council publishes the counts every week on Data Mill North, and the weekly files, which begin on 30 December 2019, add up to 656,544 rows. Suppose you want a quick, honest estimate of how busy a camera is in a typical hour, without loading six years of files at once. The usual shortcut, reading the first thousand rows, says 134 people an hour, because the stream happens to begin with a single week, 1 to 7 June 2020, at six cameras. The last thousand rows say 993. Reservoir sampling fixes that: it keeps a sample of a thousand rows as the stream goes past, giving every row the same chance of being chosen. But this stream holds a surprise. 157 weeks were published twice, so every row being equally likely is not the same as every hour being equally likely. Finding that out, and fixing it, is the lesson Leeds\'s own footfall teaches our teenage learners here.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Leeds.',

  picks: {
    eyebrow: 'Course picks for Leeds',
    h2: 'Four courses for a city that counts its footsteps',
    intro: 'Choose by the kind of thing the learner wants to make. Every course opens with a free live lesson, and card details are never requested.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games in Scratch, Roblox and Minecraft, including one where a counter on a busy street decides when the lights change.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python taken to GCSE depth and beyond, practised on the council\'s own weekly footfall files.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Sampling a stream fairly, finding the weeks published twice, and proving the sample matches reality.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'University and adult', note: 'Keys, duplicates and deduplication in SQL, so each row in a table stands for one real thing.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Leeds today',
      h2: 'A big city with a university at its heart',
      intro: 'Census 2021 figures for the Leeds local authority, from the Office for National Statistics as published on Nomis.',
      body: [
        { kind: 'table', caption: 'Leeds at the 2021 Census (ONS, via Nomis)', head: ['Counted', 'Leeds', 'England'], rows: [
          ['All usual residents', '811,956', 'Not compared'],
          ['Residents in households', '790,515', 'Not compared'],
          ['Residents in communal establishments', '21,441', 'Not compared'],
          ['Aged 20 to 24', '70,459, which is 8.7%', '6.0%'],
          ['In school or full-time education, of 765,154 aged five and over', '184,538, which is 24.1%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Education everywhere', p: 'At 24.1%, the share of Leeds residents aged five and over in school or full-time education sat well above England\'s 20.4% on Census day.' },
          { h3: 'Early twenties', p: 'People aged 20 to 24 were 8.7% of Leeds residents. The England figure was 6.0%.' },
          { h3: 'Tables that disagree by four', p: 'The age table adds up to 811,952, four short of the headline 811,956, because each census table is protected separately. We quote the headline and leave the bands alone.' }
        ] },
        { kind: 'p', text: 'The University of Leeds, established in 1904 and a member of the Russell Group, says more than 37,000 students study there, at LS2 9JT. We have no connection with it. We mention it because in a city this size, learners of every age are close to serious computing, and a good foundation before university or a first job makes that nearness count.' }
      ]
    },
    {
      id: 'counters', tint: 'tint', eyebrow: 'The footfall cameras',
      h2: 'Eight cameras, thirteen names, six years of weekly files',
      intro: 'Leeds City Council\'s city centre footfall data on Data Mill North, published under the Open Government Licence and maintained by City Centre Management. We downloaded every weekly file and read them all.',
      body: [
        { kind: 'table', caption: 'What we found in the weekly footfall files, read 21 September 2026', head: ['Measure', 'Figure'], rows: [
          ['Rows in all the weekly files', '656,544'],
          ['Unique camera-hours', '588,840'],
          ['Weeks published twice', '157, adding 67,704 duplicate rows'],
          ['Camera names used', '13: the 8 current ones and 5 older names'],
          ['Files with a different date format', 'Seven, from 17 April to 4 June 2023, holding 9,408 rows'],
          ['Average count per camera-hour', '833.9 over unique hours; 817.6 over all rows']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two versions of a week', p: 'From June 2020, many weeks exist as a Weekly Data file and a Revised Weekly Data file. Read both and every hour of those weeks is counted twice.' },
          { h3: 'A name and its old name', p: 'The council\'s notes map old camera names to new ones. For three years both appear, and two old names repeat a current camera\'s count in most hours: Dortmund Square matches Headrow at Broadgate in 22,124 of 26,376.' },
          { h3: 'A quiet format change', p: 'Seven weeks in spring 2023 write dates as 29 May 2023 rather than 29-May-23. A program that expects one format drops all 9,408 of those rows and reports no error.' }
        ] },
        { kind: 'p', text: 'We are not connected to Leeds City Council, Data Mill North or any business named in a camera\'s location, and no link is implied. Commercial Street at Sharps, Briggate at Swan Street and the others are simply the names the council gives its cameras.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A fair sample from a stream too long to hold',
      intro: 'Reservoir sampling keeps a fixed-size random sample while data streams past, without knowing in advance how long the stream will be.',
      body: [
        { kind: 'table', caption: 'Estimates of the average count per camera-hour, against the true value of 833.9', head: ['Method', 'Estimate', 'What it really measured'], rows: [
          ['First 1,000 rows of the stream', '134.1', 'Six cameras in one week, 1 to 7 June 2020'],
          ['Last 1,000 rows of the stream', '993.2', 'The final week in the files, ending 5 July 2026'],
          ['Reservoir of 1,000 rows, raw stream (five runs)', '796.5 to 828.6', 'Every row equally likely, including the duplicates'],
          ['Reservoir of 1,000 rows, deduplicated (five runs)', '784.2 to 848.0', 'Every real hour equally likely'],
          ['All rows', '817.6', 'Doubled weeks counted twice'],
          ['All unique camera-hours', '833.9', 'The target']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Keep a reservoir', p: 'Fill a list with the first thousand rows. For each later row number i, pick a random whole number up to i; if it lands inside the list, that row replaces the one at that position. Every row ends up with the same chance of being kept.' },
          { h3: '2. Check it is fair', p: 'Run it several times and compare the share of each year in the samples with the share in the stream. They match to within a percentage point, which is what fair to rows means.' },
          { h3: '3. Ask fair to what', p: 'Fair to rows is not fair to hours when 157 weeks appear twice. Keep one row per camera and hour first, then sample, and the year mix matches reality instead of the files.' }
        ] },
        { kind: 'callout', h3: 'The number that gives it away', p: 'In the raw files, 2021 makes up about 21% of all rows. In the unique camera-hours it is 19.3%. A reservoir sample of the raw stream reproduces the 21%, faithfully, because it is doing exactly what it promises. The doubled weeks come mainly from 2020 to 2023, so they also drag the average down, from 833.9 to 817.6. The algorithm was never wrong; the stream was not what it looked like.' },
        { kind: 'p', text: 'Reservoir sample estimates still vary from run to run, by around thirty people an hour at a sample of a thousand, because hourly counts range from near zero overnight to several thousand on a Saturday afternoon. Learners measure that spread, see it shrink as the sample grows, and learn to report an estimate with its range rather than as a single number.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Sampling a stream',
      h2: 'Five habits before trusting a sample',
      intro: 'Learned on footfall, used later on logs, transactions, social media feeds and any data that arrives faster than you can store it.',
      body: [
        { kind: 'table', caption: 'How to sample a stream so the sample means something', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Never take the first rows', 'Use a reservoir, or another method that gives every item a chance', 'A sample made of whatever happened to arrive first'],
          ['Define the unit', 'Decide what one row should stand for, such as one camera in one hour', 'Duplicates quietly weighting the sample'],
          ['Parse every format', 'Test the date parser on each file and count the rows it drops', 'Seven weeks vanishing without an error'],
          ['Check against the whole', 'Compare the sample\'s year mix with the stream\'s', 'A sample that is fair to the wrong thing'],
          ['Report the spread', 'Run several samples and give the range, not one figure', 'False precision from a single lucky draw']
        ] },
        { kind: 'p', text: 'The second habit carries the page. Deduplicating by camera name and hour removes the doubled weeks, but it cannot catch a camera that appears under two different names. Doing that properly needs the council\'s own mapping of old names to new, and we say so rather than pretend the 588,840 figure is perfect.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A bag of marbles drawn one at a time, and a game that keeps a fair handful without ever holding the whole bag.' },
          { h3: 'Teenagers', p: 'The real footfall files in Python: parse both date formats, remove duplicate hours, build a reservoir and test that it is fair.' },
          { h3: 'Adults', p: 'Sampling large logs or exports at work, with the unit of the sample written down before anything is summarised.' }
        ] }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the city',
      h2: 'A canal to Liverpool and a university since 1904',
      intro: 'A few facts about Leeds from the organisations that look after them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Leeds & Liverpool Canal', p: 'The Canal & River Trust describes the canal as spanning the North West and Yorkshire regions and offering 127 miles of walking, boating and wildlife watching.' },
          { h3: 'The University of Leeds', p: 'Established in 1904, part of the Russell Group, with more than 37,000 students, according to its own about page.' },
          { h3: 'City centre streets', p: 'The footfall cameras sit on streets every Leeds family knows: Briggate, the Headrow, Albion Street, Commercial Street and Park Row.' }
        ] },
        { kind: 'spec', title: 'Counting as a civic habit', p: 'A city that counts the people on its busiest streets every hour, and publishes the results, is handing its young people real practice material. The trick is to treat it with the same care the council took collecting it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a bag of marbles to a sample you can defend',
    intro: 'The ages are only a guide. The trial lesson shows where each learner should begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Chance and choosing', p: 'Programs that pick at random, and the idea that a fair pick gives everything the same chance.', courses: ['scratch-programming-complete-course', 'early-math-foundations'] },
      { band: 'Ages 11 to 13', h3: 'Reading real files', p: 'Opening a file, counting its rows and noticing when two rows describe the same thing.', courses: ['game-development-masterclass-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Streams and samples', p: 'Reservoir sampling, deduplication and checking a sample against the whole.', courses: ['data-science-course-for-teens-python-data', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'Sampling at work', p: 'Drawing reliable samples from large exports and logs, with the unit and the spread stated.', courses: ['mysql-database-complete-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can sample six years of footfall instantly. Why should a Leeds teenager learn how it works?',
    intro: 'Because a perfectly fair sample of the wrong stream is still the wrong answer.',
    p1: 'Ask an AI tool for a random sample of the Leeds footfall files and it will produce one quickly, and it will probably be fair in exactly the way reservoir sampling is fair: every row equally likely. It will not mention that 157 weeks are in the files twice, or that seven weeks use a date format its parser skipped, unless someone who understands the data thinks to ask. The sample will look sound, and the average it gives will be pulled towards the doubled years.',
    p2: 'The same question matters well beyond footfall. A survey that reaches some people twice, a dataset of customer records with repeated accounts, a training set for an AI model with near-identical examples: in each, a method that is fair to rows is not fair to reality. A learner who has found the doubled weeks in Leeds will look for them everywhere.',
    closer: 'That is the case for a Leeds teenager learning to program in 2026. Not because tools cannot sample, but because deciding what one row should mean, and checking that it does, is still a human job.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Headingley, Seacroft or Morley, joined from home',
    intro: 'Leeds is a large metropolitan district, and a live online lesson reaches every corner of it at the same moment.',
    cells: [
      { h3: 'From any room', p: 'A learner in Roundhay and another in Armley can sit in the same class, each at their own table, with no bus into town.' },
      { h3: 'The school words Leeds uses', p: 'Reception, Key Stages, Year 9 options, GCSEs and A levels keep their English names, and every lesson is in English.' },
      { h3: 'A trial that teaches', p: 'The first session is a genuine lesson on a genuine task, ending with honest advice on level, course and time. Nobody asks for card details.' },
      { h3: 'Level before age', p: 'Classes hold five to ten learners who work at the same pace, drawn from Leeds, elsewhere in the UK and abroad so every level finds a sensible slot.' },
      { h3: 'A steady rhythm', p: 'Two sessions a week at an agreed time, about eight a month, with gaps for school holidays and revision arranged with the teacher.' },
      { h3: 'Our teachers\' clock', p: 'Teaching happens from India, which keeps one time all year. That puts it four and a half hours ahead of Leeds in summer and five and a half in winter, and a Leeds after-school or evening slot sits comfortably in the teacher\'s day.' }
    ],
    spec: { title: 'Big enough for every level', p: 'A district of 811,956 people produces learners at every stage, from first Scratch projects to university programming, and pooling them with learners elsewhere means each finds a group at a workable hour.' }
  },

  fees: {
    h2: 'What classes cost in Leeds',
    intro: 'The whole price list, in three lines.',
    first: 'One complete lesson, free, finishing with a level, a course suggestion and a proposed weekly time.',
    group: 'A month of teaching, normally eight sessions, in a class of five to ten learners at one level.',
    private: 'Around eight sessions a month on the same pattern, with the teacher working with one learner.',
    closer: 'All fees are charged in US dollars at the one rate we use everywhere outside India, so a family in Headingley and a family in Seacroft are charged identically and no sterling list exists. Payment starts only after the trial lesson has set a course and a slot, and our pricing page describes breaks, missed sessions and moving between group and private lessons.'
  },

  reviewsH2: 'Six reviews from Google, reproduced without edits',

  book: {
    h2: 'Arrange a first lesson in Leeds',
    intro: 'The opening task is picked for the learner: a random-choice game for a younger child, a first program that counts a file\'s rows, or the footfall stream and a reservoir for a teenager who wants a real challenge.',
    success: 'Thanks. Someone from the team will contact you about a Leeds class soon.'
  },

  faq: {
    h2: 'Leeds coding class questions',
    intro: 'The questions Leeds families send us most.',
    items: [
      { q: 'How many people live in Leeds?', a: 'The 2021 Census counted 811,956 usual residents in the Leeds local authority area: 790,515 in households and 21,441 in communal establishments.' },
      { q: 'How many students live in Leeds?', a: 'In 2021, 184,538 Leeds residents aged five and over were in school or full-time education, 24.1% of that age group, against 20.4% for England. The University of Leeds alone reports more than 37,000 students.' },
      { q: 'What is the footfall project?', a: 'Learners use Leeds City Council\'s weekly city centre footfall files, 656,544 rows from 30 December 2019 onward, to build a reservoir sample and then discover that 157 weeks were published twice, so a sample fair to rows is not fair to hours.' },
      { q: 'What is reservoir sampling?', a: 'A way to keep a random sample of fixed size from a stream of unknown length, reading each item once. Every item ends up with the same chance of being in the sample.' },
      { q: 'Why does the average change after removing duplicates?', a: 'Because the doubled weeks come mostly from 2020 to 2023, when counts were lower. Counting them twice pulls the average down to 817.6 people an hour; one row per camera-hour gives 833.9.' },
      { q: 'When can Leeds learners have lessons?', a: 'Weekday afternoons after school, weekday evenings or at the weekend, agreed in UK time at the trial lesson. India is four and a half hours ahead of Leeds in summer and five and a half in winter.' },
      { q: 'Can we pause lessons around exams?', a: 'Yes. Families often stop for GCSE or A level revision and the exam weeks, and for school holidays, with the dates agreed with the teacher beforehand.' },
      { q: 'Is there a Modern Age Coders office in Leeds?', a: 'There is not, and we do not suggest otherwise. All lessons are online and live, and we have no UK premises. Learners need a laptop or desktop computer, working audio and a stable internet connection, and our phone number is an Indian one.', boiler: true },
      { q: 'How much do Leeds classes cost?', a: 'The first lesson is free. A group place then costs USD 100 a month for two live lessons a week, roughly eight a month, with five to ten learners, and one-to-one teaching on the same schedule costs USD 150 a month. Course, format and time are fixed before any payment.', boiler: true },
      { q: 'How big is each group?', a: 'Between five and ten learners, grouped by level, pace and what they want to achieve, not by age or area. Where no group at the right level meets at a suitable time, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'More cities and the national guide',
    html: 'Across the Pennines, <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> times its river between two gauges, and further south <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> groups its bus stops and <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> has its own page. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains what each school stage involves, and every UK page is gathered on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Leeds and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/best-coding-class-in-coventry', label: 'Coventry' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-lds .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.3vw, 2.8rem); }
.cg-root.cg-lds .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-lds .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-lds .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lds .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.011em; }
.cg-root.cg-lds .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.05rem); }
.cg-root.cg-lds .cg-table caption { letter-spacing: 0.012em; font-weight: 700; }
.cg-root.cg-lds .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lds .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-lds .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Leeds, Census 2021 via Nomis: TS001 Leeds local authority (E08000035) 811,956 usual residents, 790,515 in households, 21,441 in communal establishments; TS007A 70,459 aged 20 to 24, 8.7 percent, against 6.0 percent in England (band total 811,952, never summed on the page); TS068 184,538 schoolchildren and full-time students of 765,154 residents aged 5 and over, 24.1 percent, against 20.4 percent in England. University of Leeds about page: established in 1904, part of the Russell Group, more than 37,000 students, LS2 9JT. Canal & River Trust: the Leeds & Liverpool Canal spans the North West and Yorkshire regions, offering 127 miles of walking, boating and wildlife watching. Data Mill North dataset 2rlld, Leeds city centre footfall data, Leeds City Council, Open Government Licence v3, maintained by City Centre Management; the notes name eight cameras (Albion Street at Bond Street, Albion Street at McDonalds, Briggate at M&S, Briggate at Swan Street, Commercial Street at Sharps, Headrow at Broadgate, Headrow at Lands Lane, Park Row) and give older names in brackets.',
    localProject: 'A sample fair to rows is fair to reality only once each row is one real thing. From every Data Mill North resource named weekly in the Leeds footfall dataset, read 21 September 2026: 656,544 rows; 588,840 unique (camera, date, hour) keys; 157 weeks published twice as Weekly Data and Revised Weekly Data, 67,704 duplicate rows, 3 with conflicting values; seven files from 17 April to 4 June 2023 date rows as 29 May 2023 instead of 29-May-23, 9,408 rows a strict parser drops; 13 camera names, the 8 current plus Albion Street South, Briggate, Briggate at McDonalds, Dortmund Square and Headrow from June 2020 to June 2023, with Dortmund Square equal to Headrow at Broadgate in 22,124 of 26,376 shared hours and Headrow equal to Headrow at Lands Lane in 21,653. Means per camera-hour: 817.6 all rows, 833.9 unique; first 1,000 rows 134.1 (six camera names, 1 to 7 June 2020), last 1,000 rows 993.2 (final week, ending 5 July 2026); reservoir (Algorithm R, k 1,000, five seeds) raw 796.5 to 828.6, deduplicated 784.2 to 848.0; 2021 share 21 percent of raw rows, 19.3 percent of unique hours; raw reservoirs reproduce the raw mix. Lesson family: reservoir sampling and defining the sampling unit.',
    requiredMentions: [
      '811,956',
      '790,515',
      '21,441',
      '70,459',
      '184,538',
      '765,154',
      '656,544',
      '588,840',
      '67,704',
      'Dortmund Square',
      'LS2 9JT',
      '127 miles'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Leeds: 811,956 usual residents; 790,515 in households; 21,441 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000035&measures=20100' },
      { claim: 'Nomis, Census 2021 TS007A: Leeds 70,459 aged 20 to 24 (8.7 percent); England 6.0 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000035,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Leeds 184,538 students of 765,154 aged 5 and over (24.1 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000035,E92000001' },
      { claim: 'Data Mill North, Leeds city centre footfall data (Leeds City Council, OGL v3): cameras, name changes, weekly resources.', url: 'https://datamillnorth.org/dataset/2rlld' },
      { claim: 'University of Leeds about page: established 1904, Russell Group, more than 37,000 students, LS2 9JT.', url: 'https://www.leeds.ac.uk/about' },
      { claim: 'Canal & River Trust, Leeds & Liverpool Canal: 127 miles.', url: 'https://canalrivertrust.org.uk/enjoy-the-waterways/canal-and-river-network/leeds-and-liverpool-canal' }
    ],
    rejectedClaims: [
      'Leeds Kirkgate Market facts: the council market page returned 404, so none are used.',
      'That 588,840 is a perfect count of distinct physical camera-hours: two former camera names largely repeat current cameras, and resolving them needs the council\'s mapping, as the page says.',
      'Any reason for the doubled weeks: the dataset does not explain the revised files, so no reason is given.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Leeds City Council, Data Mill North, the University of Leeds, the Canal & River Trust or businesses named in camera locations.'
    ]
  }
};
