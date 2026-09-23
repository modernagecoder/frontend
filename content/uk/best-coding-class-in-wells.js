'use strict';
// Wells, Somerset (cg- city page, UK cluster Phase 4). Spine: can an average month predict the full moon? Julian day
// numbers and a mean-lunation model tested against the US Naval Observatory's published full moons (Astronomical
// Applications API, moon/phases/year for 2000 to 2030, 383 full moons, times in Universal Time; read 23 September 2026;
// scratchpad wel/moon.py and moon2.py). Julian day check: our integer algorithm gives 2451545 for 1 January 2000 and
// 2460926.256250 for 7 September 2025 18:09 UT, both identical to the USNO juliandate API. Mean synodic month 29.53059
// days (29d 12h 44m 03s) from NASA GSFC eclipse site, moonorbit.html. Results: interval between consecutive full moons
// 29.280 days (23 June to 22 July 2013) to 29.818 days (19 November to 19 December 2021). Model anchored on the first
// full moon of 2000 with NASA month: 383 moons, right UT date 272 (71.0 percent), within 12 h 83.3 percent, worst 17.8 h
// late (15 April 2014). NASA month with start fitted on 2000 to 2015 moons, scored on 185 moons 2016 to 2030: right UT
// date 137 (74.1 percent), within 12 h 91.9 percent, worst 13.9 h early (9 October 2022). Least-squares month from
// 2000 to 2015: 29.530627 days; from all 31 years: 29.530557. Nineteen-year pairs (moon i with moon i+235): 148 pairs,
// 85 on the same UT calendar date, 63 one day off, none further. Years with 13 full moons (UT): 2001, 2004, 2007, 2009,
// 2012, 2015, 2018, 2020, 2023, 2026, 2028. 235 x 29.53059 = 6,939.689 days; 19 x 365.2425 = 6,939.6075.
// Lesson family: Julian day numbers, mean-lunation model, 19-year lunar cycle, train and test split on dates. Screened
// 23 September 2026: Metonic, Julian day, lunation, synodic and full moon all 0 hits in src/pages and content.
// Kill gate: passed. Wells is small (Wells Town MSOA 8,317 residents), but it has a primary heritage source rich enough
// for a unique page (the cathedral's own history pages: clock works about 1390, Quarter Jack) and an open, checkable
// dataset that fits the clock theme; like Ely and Armagh, it is a city with its own search demand.
// Place facts read raw 23 September 2026: Census 2021 via Nomis. Wells Town MSOA E02006054 (House of Commons Library
// name; ONS name Mendip 008): TS001 8,317 usual residents, 8,291 in households, 26 communal; TS007A total 8,324, 448
// aged 85 and over (5.4 percent; England 2.4; Mendip 3.1), 648 aged 70 to 74 (7.8 percent; England 5.0); TS068 1,102
// students of 7,965 aged 5 and over (13.8 percent; Mendip 17.5; England 20.4); TS006 2,146.2 per square km. Mendip 006
// (Oakhill, Horrington and Chewton Mendip) 7,747 residents, 15.5 percent students, 83.6 per square km. Mendip 005
// (Draycott, Westbury and Wookey) 8,473, 18.5 percent, 76.9. Mendip E07000187 116,089, 157.0 per square km. England
// 56,490,048, 433.5. OS Open Names ST44: Wells (City) in the Somerset unitary authority; Haybridge, Dulcote, Wookey
// Hole, Coxley, Dinder, East and West Horrington, Croscombe, Easton, Wookey, Priddy, Westbury-sub-Mendip within 6 km.
// Wells Cathedral, Historical Highlights and Timeline pages (raw text saved): begun about 1175; first English cathedral
// built entirely in the new Gothic style; clock works about 1390, "considered to be the second oldest clock mechanism in
// Britain, and probably in the world, to survive in original condition and still in use"; jousting knights, Quarter
// Jack; scissor arches 1338-48 by master mason William Joy; springs in the Bishop's Palace garden; about 705 King Ine;
// centre of the diocese for Somerset in 909; Vicars' Close "oldest continuously occupied medieval street in Europe",
// built over 650 years ago; Bishop Ralph decreed forty-two houses should be built. NHLE: Cathedral Church of St Andrew
// 1382901, The Bishop's Palace and Bishop's House 1382873, 1-13 Vicars' Close 1383197, 14-27 Vicars' Close 1383199, all
// Grade I, list date 12 November 1953.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'WELLS', blurb: 'The cathedral city of springs below the Mendips, with a project that asks how well an average month can predict the next full moon.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-wells',
  code: 'wel',
  accent: '#242239',
  accentRationale: 'Wells: a night-sky indigo for a page about the Moon, from the solver (12.51:1 on every paper tint, dE 7.6 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Wells',
    eyebrow: 'Wells, Somerset',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Somerset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wells, Somerset',
  title: 'Best Coding Classes in Wells, Somerset | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for learners aged 6 to 67 in Wells, Somerset, from Wookey Hole and Coxley to Dulcote. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Wells, on a page where teenagers count days as astronomers do and test how well an average month predicts 185 real full moons.',
  twitterDescription: 'Wells learners from six to sixty-seven can study coding, Python, maths and AI with us in live online lessons, and the first one is free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Wells Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, date and time calculation, mathematics and AI taught live online in English to children, teenagers and adults in Wells, Somerset, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Wells, Somerset',
  capsuleQ: 'What are the best coding classes in Wells, Somerset?',
  capsule: 'The middle-layer area the House of Commons Library calls Wells Town had 8,317 usual residents at the 2021 census, packed at 2,146.2 people per square kilometre among thinly settled Mendip villages. Wells Cathedral dates the works of its clock, with jousting knights and a Quarter Jack, to about 1390. Learners in Wells aged six to sixty-seven meet our teachers in India on live video, one to one or in a group of five to ten at the same level, at times that fit around the English school and working week. We charge nothing for the opening lesson; after that it is USD 100 a month in a group or USD 150 a month one to one.',
  lead: 'In Wells Cathedral a clock made about 1390 still marks every quarter hour, the Quarter Jack banging out the quarters with his heels while jousting knights rush round above. Our Wells project builds a clock of a different kind, one that predicts full moons. Teenagers learn to count time the way astronomers do, as a single running tally of days called the Julian day number, then add NASA\'s average month of 29.53059 days again and again. Set against the full moons the US Naval Observatory lists for 2016 to 2030, the simple model lands on the right date almost three times in four. Its worst miss is 13.9 hours, and working out why it misses is the real lesson.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Wells, Somerset.',

  picks: {
    eyebrow: 'Course picks for Wells',
    h2: 'Four courses for the city of springs',
    intro: 'Start with the course nearest to what the learner likes doing now. Every one begins with a free live lesson, and booking it asks for no card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children: loops, counters and timers, the parts that every clock and calendar is built from.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Remainders, averages and patterns written as short programs, the arithmetic behind counting days across months and leap years.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to turn a published list of full moons into a working prediction and test it fairly.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python for adults whose work runs on dates and schedules, and who need date arithmetic that does not slip a day at midnight.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wells today',
      h2: 'A compact city ringed by Mendip villages',
      intro: 'Census 2021 figures from the Office for National Statistics on Nomis, for Wells Town and the two neighbouring middle-layer areas as the House of Commons Library names them, with the Mendip census district and England for comparison.',
      body: [
        { kind: 'table', caption: 'Wells and its surroundings, Census 2021', head: ['Area', 'Usual residents', 'Students among those aged 5 and over', 'Residents per square kilometre'], rows: [
          ['Wells Town', '8,317', '13.8%', '2,146.2'],
          ['Oakhill, Horrington and Chewton Mendip', '7,747', '15.5%', '83.6'],
          ['Draycott, Westbury and Wookey', '8,473', '18.5%', '76.9'],
          ['Mendip census district', '116,089', '17.5%', '157.0'],
          ['England', '56,490,048', '20.4%', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Mostly at home', p: 'Of the 8,317 usual residents of Wells Town, 8,291 lived in households and 26 in communal establishments. Among the 7,965 aged five and over, 1,102 were in full-time education.' },
          { h3: 'Many older residents', p: 'In the census age table for Wells Town, 448 people were aged 85 or over, 5.4% of residents, against 2.4% across England, and 7.8% were aged 70 to 74.' },
          { h3: 'Close streets, open country', p: 'Wells Town holds 2,146.2 residents to the square kilometre, while the areas around Horrington and Wookey have fewer than 85, so the city sits as a dense centre in farmland.' }
        ] },
        { kind: 'p', text: 'The age table gives Wells Town 8,324 residents where the headline table gives 8,317, because the census adds small random changes to protect privacy; each percentage here is worked from its own table\'s total. Our Wells classes mix the city with the villages close by. A Dulcote nine-year-old building a first game, a Year 10 student in Wells working towards GCSE Computer Science and a Coxley grandparent learning Python to sort family photographs by date could each join a different group, matched by level rather than by postcode.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The cathedral and the springs',
      h2: 'A city named after its water, famous for its clock',
      intro: 'Dates and descriptions below are from Wells Cathedral\'s own history pages, Historical Highlights and the Wells Cathedral Timeline.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'About 705', p: 'The cathedral records that King Ine of Wessex gave permission for a minster church beside the springs, and that Wells became the centre of the new diocese for Somerset in 909.' },
          { h3: 'About 1175', p: 'Building of the present cathedral began on a new site north of the old minster. The cathedral describes Wells as the first English cathedral built entirely in the new Gothic style.' },
          { h3: 'About 1390', p: 'The clock works were made. The cathedral says the clock is considered the second oldest clock mechanism in Britain, and probably in the world, to survive in original condition and still in use.' }
        ] },
        { kind: 'p', text: 'The cathedral traces the city\'s name to the wells themselves, from the Anglo-Saxon wella: springs that still rise in the garden of the Bishop\'s Palace and that it calls the reason for the original settlement. Inside, the scissor arches built from 1338 to 1348 by the master mason William Joy were a repair for a tower that had begun to crack. When the clock strikes each quarter, jousting knights rush round above it and the Quarter Jack strikes the quarter hours with his heels, and an outside clock opposite Vicars\' Hall is connected with the inside mechanism. The cathedral calls Vicars\' Close, built over 650 years ago for the Vicars Choral, the oldest continuously occupied medieval street in Europe, and records that Bishop Ralph decreed forty-two houses should be built, one for each member of the Vicars Choral. We have no connection with Wells Cathedral, and its descriptions are quoted as its own.' },
        { kind: 'spec', title: 'Listed at Grade I', p: 'Historic England\'s National Heritage List for England holds the Cathedral Church of St Andrew (list entry 1382901), the Bishop\'s Palace and Bishop\'s House (1382873) and two entries for houses in Vicars\' Close (1383197 and 1383199), all at Grade I with a list date of 12 November 1953.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can an average month predict the full moon?',
      intro: 'A clock works because every tick is the same length. The Moon\'s month is not, so a model that steps forward by the average month will drift from the real full moons and then drift back. The question is by how much, and how to measure that honestly.',
      body: [
        { kind: 'table', caption: 'Predicting full moons with NASA\'s mean month of 29.53059 days, checked against the US Naval Observatory\'s full-moon times in Universal Time (UT)', head: ['How the model is started', 'Full moons scored', 'Predicted on the right UT date', 'Within 12 hours', 'Largest miss'], rows: [
          ['From the first full moon of 2000 only', '383 (2000 to 2030)', '71.0%', '83.3%', '17.8 hours late, 15 April 2014'],
          ['Start time fitted to the 2000 to 2015 moons, then scored on unseen years', '185 (2016 to 2030)', '74.1%', '91.9%', '13.9 hours early, 9 October 2022']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count in days', p: 'Turn every date and time into a Julian day number, one running count of days, so subtraction just works. Noon UT on 1 January 2000 is Julian day 2,451,545, exactly as the Naval Observatory\'s own converter gives it.' },
          { h3: '2. Step by the average', p: 'NASA gives the mean length of the synodic month, full moon to full moon, as 29.53059 days, or 29 days 12 hours 44 minutes 3 seconds. Add it again and again from a starting moon.' },
          { h3: '3. Score on unseen moons', p: 'Set the starting time using only the full moons from 2000 to 2015, then score the model on 2016 to 2030, which it never saw. A model scored on its own training data looks better than it is.' }
        ] },
        { kind: 'callout', h3: 'Why an average month misses', p: 'In the Naval Observatory list, the time from one full moon to the next ranges from 29.280 days (23 June to 22 July 2013) to 29.818 days (19 November to 19 December 2021), roughly six hours short of the average and seven hours long. A model that knows only the average cannot follow those swings, so about one date in four comes out wrong. Anchoring on a single moon is worse, because that one moon\'s own early or late timing is copied into every prediction after it. Learners who then fit the month length from the data get 29.530627 days from 2000 to 2015 and 29.530557 from all 31 years: neither matches NASA\'s long-run figure, which is the lesson that a short window cannot pin down a long average.' },
        { kind: 'p', text: 'The same arithmetic uncovers a 19-year rhythm. Two hundred and thirty-five average months come to 6,939.689 days, and nineteen years of the Gregorian calendar average 6,939.6075, about two hours apart. Pairing each full moon in the list with the one 235 months later gives 148 pairs: 85 fall on the same UT calendar date nineteen years on and the other 63 are one day away. The full moon of 7 September 2006 came at 18:42 UT, and the one of 7 September 2025 at 18:09 UT. Seven of the nineteen years from 2001 to 2019 held thirteen full moons (2001, 2004, 2007, 2009, 2012, 2015 and 2018), and the four of those years whose nineteen-years-later partner falls inside the list, 2020, 2023, 2026 and 2028, held thirteen too.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Dates and times',
      h2: 'Five checks before trusting a date calculation',
      intro: 'Learned on the full moons, then used for timetables, billing periods, delivery windows, sensor logs and any program that has to add or subtract dates.',
      body: [
        { kind: 'table', caption: 'Decisions behind the moon model', head: ['Question', 'For the Wells moon model', 'What goes wrong if you skip it'], rows: [
          ['Which time scale are the times in?', 'Universal Time, as the Naval Observatory states', 'A summer full moon late in the evening lands on the wrong day in Wells'],
          ['How are the days counted?', 'Julian day numbers, checked against the Naval Observatory\'s converter', 'Month lengths and leap years break simple subtraction'],
          ['Where does the average come from?', 'NASA\'s published 29.53059 days', 'A month length that only suits the years it was fitted to'],
          ['Is it tested on unseen data?', 'Started from 2000 to 2015, scored on 2016 to 2030', 'A model scored on the moons it was built from'],
          ['How large is the worst miss?', '13.9 hours, reported beside the hit rate', 'An average that hides the misses that matter']
        ] },
        { kind: 'p', text: 'The first row catches the most bugs. The Naval Observatory gives every time in Universal Time, while Wells keeps British Summer Time, one hour ahead, from late March to late October. The full moon at 18:09 UT on 7 September 2025 was 19:09 in Wells, the same evening, but a summer full moon at 23:30 UT would already be the next day on a Wells clock. So every date result on this page is a UT date, and a learner who forgets that will count some moons as misses that were really hits.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Counting the days between two birthdays across months of different lengths, then drawing a month of moon shapes and checking it against the sky.' },
          { h3: 'Teenagers', p: 'Julian day numbers, a mean-month model and a fair train and test split in Python, on 383 full moons published by the US Naval Observatory.' },
          { h3: 'Adults', p: 'Date and time arithmetic that survives time zones, leap years and the clocks changing, with every result tested against a trusted list.' }
        ] },
        { kind: 'p', text: 'We have no connection with the US Naval Observatory, NASA, Wells Cathedral, Historic England or Somerset Council. The full-moon list, the month length and the census tables are published openly; the Julian day conversions, predictions and pairings on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting days to forecasting the Moon',
    intro: 'Read the ages as rough bands; in the free lesson we see where a learner actually starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting time', p: 'Days, weeks and months in block code, with a timer or a calendar that the learner builds and tests.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Patterns in dates', p: 'Remainders, leap-year rules and averages in Python, with short programs that count days between dates.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Models that predict', p: 'Julian day numbers, a mean-month model and honest testing on data the model has not seen.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Dates at work', p: 'Reliable date, time zone and schedule logic in Python, checked against a trusted source before anyone relies on it.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant will write date code in seconds. Why should a teenager in Wells learn to count days?',
    intro: 'Because date and time mistakes look perfectly reasonable on screen, and only someone who understands the counting can spot them.',
    p1: 'Ask a chatbot to predict full moons and it may produce tidy code that steps forward by an average month. It will run, and it will look right. Whether it quietly reads Universal Time as local time, or scores itself on the very moons it was fitted to, is something only a learner who has built the model by hand will think to check.',
    p2: 'The habits here are the ones that matter most when working beside AI: know which source a number came from, test on data the model has not seen, and report the worst miss next to the average. A learner who has done that with 383 full moons will ask the same questions of any prediction a machine hands them.',
    closer: 'So yes, a Wells teenager should keep learning to code in 2026, in a city whose cathedral clock works date from about 1390: machines can produce the code, but someone still has to check that it keeps good time.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Wookey Hole, Dulcote or the Horringtons, and one lesson for all',
    intro: 'Wells is small, and many of its learners live in the villages around it. Online, a village a few miles out is exactly as close to the lesson as a street beside the cathedral.',
    cells: [
      { h3: 'City and villages alike', p: 'A learner in Haybridge and another in East Horrington can share a class without anyone waiting for a lift or a bus.' },
      { h3: 'English school years', p: 'We place learners by English school years and key stages and use GCSE and A level course names, with every lesson taught in English.' },
      { h3: 'A free lesson with a plan', p: 'The opening session works on a real task and finishes with our advice on level, course and a weekly time. No card is ever requested.' },
      { h3: 'Groups set by level', p: 'Classes of five to ten learners at one stage, from Wells, elsewhere in the UK and abroad, so there are sensible times for every level.' },
      { h3: 'A steady weekly rhythm', p: 'Two set lessons each week, roughly eight a month, with half terms and exams agreed with the teacher ahead of time.' },
      { h3: 'Teachers who shift their day', p: 'A 5 pm lesson in Wells is 9.30 pm for our teachers in India during British Summer Time and 10.30 pm in winter, because India does not change its clocks; they plan their evenings around families here.' }
    ],
    spec: { title: 'Across Mendip and Somerset', p: 'Learners in Glastonbury, Street, Shepton Mallet or Frome join exactly the same groups, since every lesson is online and classes are formed by level.' }
  },

  fees: {
    h2: 'Wells lesson fees',
    intro: 'A free first lesson, and after that one fee each month.',
    first: 'A complete lesson at no cost, finishing with our advice on level, course and a weekly time.',
    group: 'Roughly eight live lessons each month, in a class of five to ten learners at one level.',
    private: 'Roughly eight live lessons each month, with a teacher working with your learner alone.',
    closer: 'Families in Croscombe or Westbury-sub-Mendip pay in US dollars, as every family outside India does, and our site shows no pound prices. Billing begins only once the free lesson is over and you have chosen a course and a weekly time with us; the pricing page covers pausing, missed lessons and switching between a class and one-to-one teaching.'
  },

  reviewsH2: 'Six Google reviews from families, word for word',

  book: {
    h2: 'Book a free lesson for a Wells learner',
    intro: 'The first lesson fits the learner: a days-between-birthdays counting game for a young child, a short Python program that finds the next leap year for a beginner, or real full-moon times and a Julian day converter for a teenager ready to test a model.',
    success: 'Thank you. We will contact you shortly to arrange the lesson for your Wells learner.'
  },

  faq: {
    h2: 'Questions from Wells families',
    intro: 'The questions families in and around Wells ask us most.',
    items: [
      { q: 'How many people live in Wells?', a: 'Census 2021 counted 8,317 usual residents in the middle-layer area the House of Commons Library names Wells Town, at 2,146.2 people per square kilometre. The Mendip census district, which included Wells, had 116,089.' },
      { q: 'How does Wells compare with England?', a: 'It has a larger share of older residents: 5.4% of people in Wells Town were aged 85 or over in 2021, against 2.4% across England. Among residents aged five and over, 13.8% were students, against 20.4% nationally.' },
      { q: 'What is a Julian day number?', a: 'A single running count of days used by astronomers, so the gap between two moments is found by subtraction without worrying about month lengths or leap years. Noon UT on 1 January 2000 is Julian day 2,451,545.' },
      { q: 'How accurate is an average-month model of the full moon?', a: 'Using NASA\'s mean month of 29.53059 days and a start time set from the 2000 to 2015 full moons, it put 74.1% of the 185 full moons from 2016 to 2030 on the right UT date. Its largest miss was 13.9 hours, on 9 October 2022.' },
      { q: 'Where do the full-moon times come from?', a: 'From the US Naval Observatory\'s Astronomical Applications data service, which lists the dates and Universal Time of every full moon for each year. We are not connected with the Naval Observatory.' },
      { q: 'How old is the Wells Cathedral clock?', a: 'Wells Cathedral says the original works were made about 1390 and that it is considered the second oldest clock mechanism in Britain, and probably in the world, to survive in original condition and still in use. We are not connected with the cathedral.' },
      { q: 'When do Wells lessons happen?', a: 'Families in Wells usually pick an after-school time, a weekday evening or a weekend morning, and we settle it in the free lesson. India runs four and a half hours ahead of Somerset in British Summer Time and five and a half hours ahead in winter, and our teachers plan around that.' },
      { q: 'Do you have a centre in Wells?', a: 'No. There is no centre in Wells or anywhere else in the UK, because every lesson is live online. A learner needs a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Wells lessons cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same pattern costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are classes put together?', a: 'By level, pace and goals rather than by age or address, with five to ten learners at the same stage. When no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'Somerset and further afield',
    html: 'Over the hills, the <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath page</a> asks whether Jane Austen\'s two Bath novels sound alike to a computer, and <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a> divides its city between the libraries nearest each street. For another look at the sky, <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a> sorts a catalogue of star clusters and nebulae. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out how our levels fit English schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> reaches every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wells and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-bath', label: 'Bath' },
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-wel .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.3vw, 2.6rem); }
.cg-root.cg-wel .cg-hero h1 { font-weight: 720; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-wel .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-wel .cg-eyebrow { letter-spacing: 0.13em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-wel .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.012em; }
.cg-root.cg-wel .cg-grid-3 { gap: clamp(1.05rem, 2.7vw, 2.2rem); }
.cg-root.cg-wel .cg-table th { letter-spacing: 0.03em; }
.cg-root.cg-wel .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wel .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-wel .cg-callout { border-left-width: 6px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Census 2021 via Nomis. Wells Town MSOA E02006054 (ONS name Mendip 008): TS001 8,317 usual residents, 8,291 in households, 26 communal; TS007A total 8,324, 448 aged 85 and over (5.4 percent; England 2.4), 648 aged 70 to 74 (7.8 percent; England 5.0); TS068 1,102 students of 7,965 aged 5 and over (13.8 percent); TS006 2,146.2 per square kilometre. Mendip 006 (Oakhill, Horrington and Chewton Mendip) 7,747, 15.5 percent students, 83.6; Mendip 005 (Draycott, Westbury and Wookey) 8,473, 18.5 percent, 76.9; Mendip census district E07000187 116,089, 17.5 percent, 157.0; England 56,490,048, 20.4 percent, 433.5. OS Open Names places Wells in the Somerset unitary authority. Wells Cathedral: about 705 King Ine; 909 diocese; about 1175; clock works about 1390; scissor arches 1338-48, William Joy; Vicars\' Close. NHLE Grade I entries 1382901, 1382873, 1383197, 1383199, list date 12 November 1953.',
    localProject: 'Can an average month predict the full moon? US Naval Observatory full moons 2000 to 2030 (383, Universal Time). Julian day numbers checked against the USNO converter (2451545 for 1 January 2000 noon; 2460926.25625 for 7 September 2025 18:09 UT). NASA mean synodic month 29.53059 days. Anchored on the first moon: 71.0 percent right UT date, 83.3 percent within 12 hours, worst 17.8 hours late (15 April 2014). Start fitted on 2000 to 2015, scored on 185 moons 2016 to 2030: 74.1 percent, 91.9 percent, worst 13.9 hours early (9 October 2022). Month length range 29.280 to 29.818 days. Fitted month 29.530627 (2000 to 2015), 29.530557 (all). 235-month pairs: 148, 85 same date, 63 one day off. Thirteen-moon years 2001, 2004, 2007, 2009, 2012, 2015, 2018 and 2020, 2023, 2026, 2028. Lesson family: Julian day numbers, mean-lunation model, 19-year cycle, train and test split.',
    requiredMentions: [
      '8,317',
      '7,965',
      '2,146.2',
      '29.53059',
      'Julian day',
      'Quarter Jack',
      'jousting',
      'Wookey Hole',
      'Dulcote',
      'Coxley',
      'Horrington',
      'Haybridge'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Wells Town 8,317; Mendip 006 7,747; Mendip 005 8,473; Mendip 116,089; England 56,490,048.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E02006054,E02006052,E02006051,E07000187,E92000001' },
      { claim: 'Nomis, Census 2021 TS007A: five-year age bands for Wells Town and England.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E02006054,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: students among usual residents aged 5 and over.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E02006054,E02006052,E02006051,E07000187,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E02006054,E02006052,E02006051,E07000187,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: Wells Town; Oakhill, Horrington and Chewton Mendip; Draycott, Westbury and Wookey.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'US Naval Observatory, Astronomical Applications API: moon phases by year (times in Universal Time) and Julian date converter.', url: 'https://aa.usno.navy.mil/data/api' },
      { claim: 'NASA GSFC, Eclipses and the Moon\'s Orbit: mean synodic month 29.53059 days (29d 12h 44m 03s).', url: 'https://eclipse.gsfc.nasa.gov/SEhelp/moonorbit.html' },
      { claim: 'Wells Cathedral, Historical Highlights: about 1175, first English cathedral entirely Gothic; clock works about 1390; Quarter Jack; scissor arches 1338-48 by William Joy; springs; King Ine about 705.', url: 'https://www.wellscathedral.org.uk/heritage-conservation/historical-highlights' },
      { claim: 'Wells Cathedral Timeline: wella; 909 diocese; Vicars\' Close; Bishop Ralph and forty-two houses.', url: 'https://www.wellscathedral.org.uk/heritage-conservation/wells-cathedral-timeline' },
      { claim: 'Historic England, National Heritage List for England: Grade I entries 1382901, 1382873, 1383197, 1383199.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1382901' },
      { claim: 'Ordnance Survey, OS Open Names: Wells and nearby settlements.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' }
    ],
    rejectedClaims: [
      'The name Metonic cycle: no fetched raw source used it, so the page says a 19-year cycle and states only what the full-moon list shows.',
      'A general rule that the 13-full-moon years repeat every 19 years: only the four pairs inside 2000 to 2030 were checked, and the page says so.',
      'Accuracy figures from a month length fitted to all 383 moons: that fit was scored on its own data, so the page reports the NASA month with an out-of-sample test instead.',
      'That the Wells clock shows the phase of the Moon: not in the fetched cathedral text, so not claimed.',
      'The date Mendip district was replaced by Somerset Council: legislation.gov.uk returned a 202 challenge for the Somerset (Structural Changes) Order 2022, not circumvented; the page says only that OS Open Names places Wells in the Somerset unitary authority.',
      'The number of houses in Vicars\' Close today: the cathedral records that forty-two should be built; NHLE entries were not summed or compared with it.',
      'That Wells is the smallest city in England: not taken from a fetched source.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the US Naval Observatory, NASA, Wells Cathedral, Historic England or Somerset Council.'
    ]
  }
};
