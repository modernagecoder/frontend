'use strict';
// Liverpool (cg- city page, UK cluster Phase 4). Spine: hearing the moon in a month of Mersey water. Periodogram
// (direct Fourier sums on actual timestamps) of the Environment Agency flood-monitoring API tide gauge E70124
// "Liverpool" (SJ 32480 95252), measure E70124-level-tidal_level-Mean-15_min-m, readings 23 August 2026 00:00 UTC
// to 21 September 2026 13:45 UTC, downloaded 21 September 2026 (scratchpad lpl/tide.py). 2,828 readings, span
// 29.57 days, 7 gaps of 30 to 60 minutes, no duplicate timestamps. Heights are on the gauge's local scale (the API
// publishes a separate mAOD measure), so the page quotes only ranges and amplitudes. Peaks: 12.42 h amplitude
// 2.86 m; 12.05 h 1.52 m (the 12.00 h solar tide, blurred: frequency resolution 1/709.8 h = 0.0014 cph, and the
// two tides differ by 0.0028 cph, two resolution steps); 6.21 h 0.20 m (shallow-water overtide). 57 high waters,
// mean interval 12.42 h. Calendar-day (UTC) ranges: 8.42 m on 31 August and 8.83 m on 13 September (spring
// peaks); 4.50 m on 6 September and 2.76 m on 20 September (neaps); whole-window range 8.87 m. Beat of 12.4206 h
// and 12.0000 h: 14.77 days. Lesson family: Fourier analysis and periodicity (periodogram, frequency resolution,
// beats, overtides). Screened free site-wide on 21 September 2026 (fourier / periodogram: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Liverpool E08000012 (486,088 usual
// residents; 463,875 in households, 95.4%; 22,213 in communal establishments, 4.6%), TS007A (33,846 aged 15 to 19,
// 7.0%; 49,337 aged 20 to 24, 10.1%; 38,082 aged 25 to 29, 7.8%; England 5.7, 6.0 and 6.6%), TS068 (116,175
// schoolchildren and full-time students of 459,716 aged 5 and over, 25.3%; England 20.4%). National Tidal and Sea
// Level Facility, Doodson-Legé Tide Predicting Machine (predictions first carried out in 1924 at Bidston
// Observatory, University of Liverpool Tidal Institute; machine designed by Dr Arthur T. Doodson, built 1948-49 by
// Legé and Co. of London, in daily use until the early 1960s; up to 42 constituents, 42 pulley wheels; modern
// analyses 120 or more; constituents named by George Darwin; predictions from harmonic analysis of observed
// heights) and The River Mersey (begins in Stockport, 70 miles to the Irish Sea; second highest tidal range in the
// UK, 4 m at neaps to 10 m at springs; river flow about 1% of tidal flow; first Royal Charter 1207). University of
// Liverpool, About ("since 1881").

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'LIVERPOOL', blurb: 'Where Doodson\'s machine added 42 tides together, with a project that finds the moon\'s rhythm in a month of Mersey readings.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-liverpool',
  code: 'lpl',
  accent: '#14545D',
  accentRationale: 'Liverpool: a deep Mersey teal from the solver (6.94:1 on every paper tint, dE 6.5 from the nearest used accent), greener than the Oxford petrol blue and far from the Sheffield indigo',
  pageType: 'city',
  place: {
    name: 'Liverpool',
    eyebrow: 'Liverpool, Merseyside, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Merseyside' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Liverpool, England',
  title: 'Best Coding Classes in Liverpool | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Liverpool learners aged 6 to 67, from Wavertree and Woolton to Walton and Speke. First lesson free.',
  ogDescription: 'Coding and AI lessons for Liverpool, on a page that finds the moon\'s 12.42-hour rhythm in a month of Mersey tide readings, the way tide tables are made.',
  twitterDescription: 'Liverpool learners aged six to sixty-seven can learn coding and AI with us live online, starting with a free lesson.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Liverpool Online Coding, Maths and AI Lessons',
    description: 'Live online coding, Python, AI, data and mathematics for Liverpool children, teenagers and adults, taught in English in level-based groups or one to one.'
  },

  h1: 'Coding classes in Liverpool',
  capsuleQ: 'What are the best coding classes in Liverpool?',
  capsule: 'Liverpool had 486,088 usual residents at the 2021 Census, and 10.1% of them were aged 20 to 24 against 6.0% in England. The Mersey has the second-highest tidal range in the UK, according to the National Tidal and Sea Level Facility, and tide prediction at the University of Liverpool Tidal Institute began in 1924. Modern Age Coders teaches Liverpool learners aged six to sixty-seven live online, one to one or in groups of five to ten at a single level, with teachers in India and lessons timed in UK hours. We charge nothing for the first lesson. From then on a group place costs USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'Twice a day the Mersey rises and falls by several metres, and the rhythm is set by the moon. You can hear it in the numbers. The Environment Agency publishes a reading from its Liverpool tide gauge every 15 minutes, and a month of them, 2,828 readings from 23 August to 21 September 2026, is enough to ask a precise question: for every possible period, how strongly does the water swing at that rhythm? The answer, called a periodogram, has one towering peak at 12.42 hours, the moon\'s tide, and a second at about 12 hours, the sun\'s. Where the two waves fall into step the tides are big; where they fall out of step they are small. That beat repeats every 14.77 days, and it is the whole story of spring and neap tides. It is also how tide tables are made, and that is the lesson Liverpool\'s river teaches our teenage learners.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Liverpool.',

  picks: {
    eyebrow: 'Course picks for Liverpool',
    h2: 'Four courses for a city on the tide',
    intro: 'Choose by what the learner enjoys. Every course starts with a free live lesson, and no card is asked for.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from animations to games, where a boat that bobs up and down on a timer makes a natural first wave.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Secondary years', note: 'Algebra to calculus with trigonometry at the centre, the mathematics of every wave the project measures.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Pandas and real datasets for teenagers who know basic Python, a good home for a month of tide readings.' },
      { course: 'college-mathematics-complete-masterclass', band: 'University and adult', note: 'Calculus and linear algebra for adults, the foundations that Fourier analysis is built on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Liverpool today',
      h2: 'A city where study runs through every age',
      intro: 'From the 2021 Census tables for the Liverpool local authority, published by the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Liverpool, Census 2021', head: ['Census 2021 measure', 'Liverpool', 'England'], rows: [
          ['Usual residents', '486,088', 'Not compared'],
          ['In households', '463,875, 95.4%', 'Not compared'],
          ['In communal establishments', '22,213, 4.6%', 'Not compared'],
          ['Aged 15 to 19', '33,846, 7.0%', '5.7%'],
          ['Aged 20 to 24', '49,337, 10.1%', '6.0%'],
          ['Aged 25 to 29', '38,082, 7.8%', '6.6%'],
          ['Schoolchildren and full-time students, of 459,716 aged five and over', '116,175, 25.3%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Twenty-somethings', p: 'Residents aged 20 to 24 made up 10.1% of Liverpool and those aged 25 to 29 another 7.8%, against 6.0% and 6.6% nationally.' },
          { h3: 'In study', p: 'In 2021, 25.3% of residents aged five and over were schoolchildren or full-time students, compared with 20.4% across England.' },
          { h3: 'Halls counted', p: 'The 22,213 people in communal establishments, 4.6% of residents, include those living in student halls of residence.' }
        ] },
        { kind: 'p', text: 'Those figures describe a city where learning runs through every age. A Liverpool learner might be a seven-year-old in Aigburth making a first game, a Year 10 student in West Derby who has chosen GCSE Computer Science, or someone in their twenties in Kensington picking up Python for work, and each joins five to ten others at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Tides and the Tidal Institute',
      h2: 'A machine that added 42 waves together',
      intro: 'From the National Tidal and Sea Level Facility, part of the National Oceanography Centre, and the University of Liverpool.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1924', p: 'The National Tidal and Sea Level Facility says tidal predictions were first carried out that year at Bidston Observatory, the University of Liverpool Tidal Institute, by hand and then by early tide predicting machines.' },
          { h3: '1948 to 1949', p: 'The Doodson-Légé Tide Predicting Machine, designed by Dr Arthur T. Doodson, was built in those years by Légé and Co. of London and stayed in daily use until the early 1960s, when the electronic computer took over.' },
          { h3: '42 constituents', p: 'The machine could combine up to 42 tidal constituents on pulley wheels, each labelled with the name George Darwin gave its constituent. A modern analysis often resolves 120 or more.' }
        ] },
        { kind: 'p', text: 'The same source explains the method: a long run of observed heights, ideally a year of hourly readings, is analysed into its astronomical parts, each with an amplitude and a phase, and those parts are then added up to predict the tide at any time, past or future. The University of Liverpool describes itself as transforming lives since 1881, and the town received its first Royal Charter in 1207. We have no connection with the University or the National Oceanography Centre. We tell the story because the Doodson-Légé machine was, in effect, a computer built to run exactly the calculation on this page.' },
        { kind: 'spec', title: 'The river itself', p: 'The Mersey begins in Stockport, where the Tame and the Goyt meet, and flows 70 miles to the Irish Sea. The National Tidal and Sea Level Facility gives its tidal range as 4 metres at neaps to 10 metres at springs, the second highest in the UK, and puts the river\'s own flow at about 1% of the tidal flow.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Hearing the moon in a month of Mersey water',
      intro: 'A periodogram asks, for every possible rhythm, how strongly the data swings at that period. We ran one on 29.6 days of 15-minute readings from the Environment Agency\'s Liverpool tide gauge.',
      body: [
        { kind: 'table', caption: 'The strongest rhythms at the Liverpool gauge, 23 August to 21 September 2026', head: ['Period found', 'Swing either side of the mean', 'What it is'], rows: [
          ['12.42 hours', '2.86 m', 'The principal lunar tide'],
          ['12.05 hours', '1.52 m', 'The solar tide, truly 12.00 hours, blurred by a short record'],
          ['6.21 hours', '0.20 m', 'A shallow-water overtide at half the lunar period']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Clean the series', p: 'Check the 2,828 readings for repeats and gaps: there are no repeats and seven gaps, each under an hour. Because the method uses the actual time of every reading, short gaps do no harm.' },
          { h3: '2. Test every rhythm', p: 'For each trial period, multiply the readings by a sine wave and a cosine wave of that period and add the results. A large total means the water truly swings at that rhythm.' },
          { h3: '3. Read the peaks', p: 'The tallest peak sits at 12.42 hours, the same gap the program measures between the 57 high waters in the month, and the next at about 12 hours.' }
        ] },
        { kind: 'callout', h3: 'Two waves, one beat', p: 'A 12.42-hour wave and a 12-hour wave slide in and out of step every 14.77 days. In step, they add up to spring tides; out of step, they partly cancel into neaps. The gauge shows it plainly: the largest calendar-day range was 8.83 metres on 13 September and the smallest 2.76 metres on 20 September, after an earlier spring peak on 31 August and a neap on 6 September.' },
        { kind: 'p', text: 'Two cautions complete the lesson. A month is barely enough: the program places the solar tide at 12.05 hours instead of exactly 12, because with 29.6 days of data two rhythms must differ by about two steps of the natural frequency resolution to be separated, and these two differ by almost exactly that. And the gauge reports heights on its own local scale, so the page quotes ranges and swings, which do not depend on where zero sits, rather than heights above sea level. Calendar-day ranges can also split a tide across midnight, which is partly why the smallest here falls below the 4-metre neap range quoted for the Mersey.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Finding rhythms in data',
      h2: 'Five checks before trusting a peak',
      intro: 'Learned on tides, used afterwards on music and sound, daily electricity demand, website traffic, planetary orbits and anything else that repeats.',
      body: [
        { kind: 'table', caption: 'Reading a periodogram honestly', head: ['Check', 'What it looks like', 'What it prevents'], rows: [
          ['Use real timestamps', 'Compute with the actual time of each reading so gaps cannot shift the rhythm', 'A pattern bent out of shape by missing readings'],
          ['Know the resolution', 'Work out how close two periods can be and still be separated, given the record length', 'Claiming two tides from a record too short to split them'],
          ['Check against physics', 'Compare peaks with known periods such as 12.42 and 12.00 hours', 'Mistaking noise for a new cycle'],
          ['Expect overtides', 'Look for peaks at half and quarter periods and explain them', 'Inventing causes for shallow-water effects'],
          ['Mind the datum', 'Quote ranges and amplitudes when the zero point is local', 'Local heights read as metres above sea level']
        ] },
        { kind: 'p', text: 'The fourth check explains the small peak at 6.21 hours, exactly half the lunar period. In a shallow estuary the tide wave steepens as it travels, which adds rhythms at half and quarter periods. A program that reports them without that context invites invented explanations; one that names them shows it understands the water as well as the maths.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Waves in a bath or a tray, a stopwatch for the rhythm, and a short program that animates a bobbing boat.' },
          { h3: 'Teenagers', p: 'A month of gauge readings fetched from the Environment Agency, the periodogram coded from sines and cosines, and the spring-neap beat found.' },
          { h3: 'Adults', p: 'Seasonality and cycles in business or engineering data, with resolution limits and harmonics reported honestly.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Environment Agency, the National Oceanography Centre, its National Tidal and Sea Level Facility or the University of Liverpool. The gauge readings are published for public use; the periodogram, ranges and high-water count are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a bobbing boat to a periodogram',
    intro: 'Ages give a first guess; the free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Waves and patterns', p: 'Repeating patterns, timing a rhythm with a stopwatch and animating something that rises and falls.', courses: ['elementary-mathematics-complete-masterclass', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Rhythms in code', p: 'Loops that repeat on a timer, graphs of repeating data and a first look at how long a cycle lasts.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Sines and periodograms', p: 'Trigonometry turned into code, a real month of tide readings analysed and the beat between two waves explained.', courses: ['complete-high-school-mathematics-mastery', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Signals at work', p: 'Frequency analysis for engineers and analysts, with resolution, sampling and harmonics handled properly.', courses: ['college-mathematics-complete-masterclass', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can quote tomorrow\'s high tide. Why should a Liverpool teenager build a periodogram?',
    intro: 'Because a prediction is only as good as the rhythms inside it, and those have to be found first.',
    p1: 'Ask an AI tool when high water is at Liverpool and it may give a time, perhaps taken from a published table, perhaps guessed. Published predictions come from exactly the kind of analysis on this page: find the rhythms in a long record, then add them up into the future. A learner who has found the 12.42-hour tide in a month of real readings knows what a tide table is made of and how far to trust one.',
    p2: 'The same mathematics runs through modern computing. Audio compression, speech recognition, image processing and the signal handling inside phones all break signals into rhythms. The Doodson-Légé machine did it with 42 pulley wheels; a teenager can code the heart of it in Python in an afternoon.',
    closer: 'That is why a Liverpool teenager should still learn to program in 2026, beside the second-highest tidal range in the UK: machines now predict almost everything, and knowing how a prediction is built is what lets you judge it.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Wavertree, Woolton or Walton, straight from home',
    intro: 'From Speke to Croxteth, a live online lesson needs no journey at all.',
    cells: [
      { h3: 'North end or south end', p: 'A learner in Walton and another in Garston can share the same lesson without either crossing the city.' },
      { h3: 'Stages from Reception to A level', p: 'Reception, Key Stages 1 to 4, Year 9 options, GCSEs and A levels, as Liverpool schools name them, with teaching in English throughout.' },
      { h3: 'A first lesson worth having', p: 'The free lesson teaches something real and ends with a suggested level, course and weekly time. No card is needed to book.' },
      { h3: 'Level before age', p: 'Five to ten learners at one stage, from Liverpool, elsewhere in the UK and abroad, so every level can meet at a workable hour.' },
      { h3: 'Twice weekly, same time', p: 'Two lessons each week at fixed times, around eight a month, with breaks for holidays and exams agreed with the teacher ahead of time.' },
      { h3: 'Teaching from India', p: 'Our teachers use India Standard Time, which has no daylight saving: four and a half hours ahead of Liverpool in summer and five and a half in winter, so after-school and evening lessons fall in their working day.' }
    ],
    spec: { title: 'Across the river too', p: 'Families across the Mersey in Birkenhead or Wallasey join exactly the same groups, because every lesson is online and groups are formed by level rather than postcode.' }
  },

  fees: {
    h2: 'Liverpool lesson fees',
    intro: 'One free lesson, then a single monthly price.',
    first: 'A full lesson with nothing to pay, finishing with a level, a recommended course and a weekly time.',
    group: 'Around eight live lessons a month, in a group of five to ten learners working at one level.',
    private: 'Around eight live lessons a month, taught to your learner alone.',
    closer: 'Everyone outside India pays one US dollar fee, so a family in Allerton pays the same as a family in Mossley Hill, and we keep no pound price list. Nothing is billed until the free lesson has agreed a course and a slot; the pricing page covers pauses, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Six families on Google, in their own words',

  book: {
    h2: 'Book a free lesson for a Liverpool learner',
    intro: 'We pick the opening task by level: an animated bobbing boat for a young child, a first Python program that graphs a repeating pattern, or a month of Mersey tide readings and a periodogram for a teenager ready for real data.',
    success: 'Thank you. We will be in touch shortly to arrange a Liverpool lesson.'
  },

  faq: {
    h2: 'Liverpool coding class questions',
    intro: 'The questions Liverpool families ask most often.',
    items: [
      { q: 'How many people live in Liverpool?', a: 'The 2021 Census counted 486,088 usual residents in the Liverpool local authority: 463,875 in households and 22,213, or 4.6%, in communal establishments.' },
      { q: 'How many Liverpool residents are students?', a: 'In 2021, 116,175 of the 459,716 residents aged five and over were schoolchildren or full-time students, 25.3% against 20.4% in England.' },
      { q: 'What was the Doodson-Légé machine?', a: 'A mechanical tide predictor designed by Dr Arthur T. Doodson and built in 1948 and 1949, which combined up to 42 tidal constituents on pulley wheels and was used daily until the early 1960s, according to the National Tidal and Sea Level Facility.' },
      { q: 'What is a periodogram?', a: 'A chart of how strongly a set of readings swings at each possible period. For a month of Liverpool tide readings, its tallest peak is at 12.42 hours, the principal lunar tide.' },
      { q: 'What causes spring and neap tides?', a: 'Two tides with periods of 12.42 hours, from the moon, and 12 hours, from the sun, drift in and out of step every 14.77 days. In step they make large spring tides; out of step they make small neaps.' },
      { q: 'How big is the tide on the Mersey?', a: 'The National Tidal and Sea Level Facility gives a range of about 4 metres at neaps to 10 metres at springs, the second highest in the UK. In our month of readings the largest calendar-day range was 8.83 metres.' },
      { q: 'When are lessons for Liverpool learners?', a: 'After school, in the evening or at weekends, at a UK time set during the free lesson. Our teachers are four and a half hours ahead of Liverpool in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Liverpool?', a: 'No. There is no centre in Liverpool and no premises anywhere in the UK; every lesson is taught live online. Learners need a computer with audio and a reliable connection, and our phone number is based in India.', boiler: true },
      { q: 'How much do Liverpool lessons cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same timetable are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Liverpool groups formed?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage. If no group fits the learner\'s times, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'The North West and beyond',
    html: 'Along the M62, the <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester page</a> times a rise travelling down the River Medlock, and further east <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> samples a footfall record fairly. Over the Pennines, <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> fits straight lines to 140 years of temperatures. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lists every UK page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Liverpool and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/best-coding-class-in-sheffield', label: 'Sheffield' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-lpl .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.1vw, 2.7rem); }
.cg-root.cg-lpl .cg-hero h1 { font-weight: 700; letter-spacing: -0.019em; line-height: 1.08; }
.cg-root.cg-lpl .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-lpl .cg-eyebrow { letter-spacing: 0.21em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-lpl .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.012em; }
.cg-root.cg-lpl .cg-grid-3 { gap: clamp(1.05rem, 2.6vw, 2.2rem); }
.cg-root.cg-lpl .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-lpl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lpl .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-lpl .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Liverpool, Census 2021 via Nomis: TS001 Liverpool local authority (E08000012) 486,088 usual residents, 463,875 in households (95.4 percent), 22,213 in communal establishments (4.6 percent); TS007A 33,846 aged 15 to 19 (7.0 percent), 49,337 aged 20 to 24 (10.1 percent), 38,082 aged 25 to 29 (7.8 percent), against England 5.7, 6.0 and 6.6 percent; TS068 116,175 schoolchildren and full-time students of 459,716 residents aged 5 and over, 25.3 percent, against 20.4 percent in England. National Tidal and Sea Level Facility, Doodson-Légé Tide Predicting Machine: predictions first carried out in 1924 at Bidston Observatory (University of Liverpool Tidal Institute); machine designed by Dr Arthur T. Doodson, built 1948-49 by Légé and Co. of London, daily use until the early 1960s; up to 42 constituents on 42 pulley wheels; modern analyses 120 or more; constituents named by George Darwin; predictions from harmonic analysis of observed heights. The River Mersey: begins in Stockport, 70 miles to the Irish Sea; second highest tidal range in the UK, 4 m at neaps to 10 m at springs; river flow about 1 percent of tidal flow; first Royal Charter 1207. University of Liverpool: since 1881.',
    localProject: 'Hearing the moon in a month of Mersey water. Environment Agency flood-monitoring API, tide gauge E70124 Liverpool (SJ 32480 95252), 15-minute tidal level on the gauge\'s local scale, 23 August 2026 00:00 UTC to 21 September 2026 13:45 UTC: 2,828 readings, 29.57 days, 7 gaps under an hour, no duplicates. Direct Fourier sums on actual timestamps: 12.42 h 2.86 m; 12.05 h 1.52 m (true 12.00 h; resolution 0.0014 cph against a 0.0028 cph separation); 6.21 h 0.20 m. 57 high waters, mean interval 12.42 h. Calendar-day ranges: 8.42 m (31 August) and 8.83 m (13 September) spring peaks; 4.50 m (6 September) and 2.76 m (20 September) neaps. Beat 14.77 days. Only ranges and amplitudes quoted, never absolute heights. Lesson family: Fourier analysis and periodicity (periodogram, frequency resolution, beats, overtides); distinct from least squares trends, lagged correlation and moving averages.',
    requiredMentions: [
      '486,088',
      '463,875',
      '22,213',
      '49,337',
      '116,175',
      '459,716',
      'Doodson',
      'Bidston',
      '42 constituents',
      'periodogram',
      'Tidal Institute',
      '8.83'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Liverpool: 486,088 usual residents; 463,875 in households; 22,213 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000012' },
      { claim: 'Nomis, Census 2021 TS007A: Liverpool and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000012,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Liverpool 116,175 students of 459,716 aged 5 and over (25.3 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000012,E92000001' },
      { claim: 'Environment Agency flood-monitoring API, Liverpool tide gauge E70124, 15-minute tidal level readings.', url: 'https://environment.data.gov.uk/flood-monitoring/id/stations/E70124' },
      { claim: 'National Tidal and Sea Level Facility, Doodson-Légé Tide Predicting Machine: 1924, 1948-49, 42 constituents, harmonic analysis.', url: 'https://ntslf.org/tides/about-tides/doodson-lege-tide-predicting-machine' },
      { claim: 'National Tidal and Sea Level Facility, The River Mersey: 70 miles, 4 m to 10 m range, second highest in the UK, 1207 charter.', url: 'https://ntslf.org/tides/about-tides/river-mersey' },
      { claim: 'University of Liverpool, About: since 1881.', url: 'https://www.liverpool.ac.uk/about/' }
    ],
    rejectedClaims: [
      'Absolute tide heights above sea level: the gauge measure used is on a local scale, so only ranges and amplitudes are quoted.',
      'Liverpool UNESCO City of Music: the site did not respond, so not stated.',
      'That Bidston Observatory is in the city of Liverpool: the page names it only as the University of Liverpool Tidal Institute.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, the National Oceanography Centre, the National Tidal and Sea Level Facility or the University of Liverpool.'
    ]
  }
};
