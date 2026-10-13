'use strict';
// Karratha (cg- regional city page, Australia cluster Phase 7, row 193). Shaped page (AI and programming).
// Spine: on which two days does the noon sun stand directly over Karratha, and can a program find them? Data: Main
// Roads WA, SLK Points for Road Network (CC BY 4.0), ArcGIS FeatureServer queried 10 October 2026 for the rectangle
// 116.76 to 116.92 E, 20.78 to 20.69 S: 2,003 points matched, 2,000 downloaded (scratchpad au/r8/dl/kar_slk.json);
// latitude -20.7796 to -20.7067, median -20.7414. Solar declination by the NOAA (Meeus) equations, our code
// (au/r8/kar_sun.py), obliquity 23.4381 degrees: declination equals the median latitude at 12:53 AWST on 17 January
// 2026 and 12:44 AWST on 25 November 2026 (2027: 17 January 18:37, 25 November 18:36); the north and south edges of
// the town cross on the same dates at different hours. Noon altitude 45.82 degrees at the June solstice and 87.30 at
// the December solstice (sun south of the zenith); 53 days in 2026 with the noon sun south of the zenith. sin(23.44)
// read as radians -0.9926 vs 0.3978 in degrees. Cooper's 1969 approximation 23.45 sin(360(284+n)/365): maximum error 1.10
// degrees, mean 0.40, crossing days 17 January and 22 November. Lesson family: solar declination and the days the sun passes directly
// overhead; screened free site-wide on 10 October 2026 and claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Karratha Significant Urban Area (5008), with
// Western Australia and Australia: 17,013 people; median age 32; 3,839 families; 7,610 private dwellings; 2.8 people
// per household; separate house 4,015 (79.3 percent; WA 79.7); flat or apartment 298 (5.9); Professionals 1,348
// (15.2; WA 22.0; Australia 24.0); Technicians and Trades Workers 2,203 (24.8; WA 15.3); Bachelor Degree level and
// above 2,111 (16.9; WA 23.8; Australia 26.3); aged 15 to 19: 924 (5.4); aged 20 to 24: 890 (5.2). ABS ERP Karratha
// LGA (54310) 30 June 2025: 25,429. WA Department of Education term dates. Excluded by the brief and the cluster rules:
// mining production, money and health figures; income, rent, mortgage, ancestry, birthplace, language, religion.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'KARRATHA', label: 'Karratha', blurb: 'Karratha, north of the Tropic, where a short program finds the two days the noon sun stands straight overhead.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-karratha',
  code: 'krth',
  accent: '#9E1C3C',
  accentRationale: 'Karratha: a deep Pilbara crimson (HSV saturation 0.82, value 0.62, hue 344), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 7.6:1 on white and 6.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Karratha',
    eyebrow: 'Karratha, Pilbara, Western Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Western Australia', href: '/coding-and-ai-classes-in-western-australia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Karratha, Western Australia',
  title: 'AI and Programming Classes in Karratha | Live Online Lessons',
  description: 'Live online AI and programming classes for Karratha teenagers and adults, with a project that calculates the two days a year the noon sun is directly overhead.',
  ogDescription: 'AI and programming for Karratha learners, starting from a question the town can answer for itself: when is the sun straight overhead?',
  twitterDescription: 'Karratha AI and programming classes, live online, with the first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Karratha Learners',
    description: 'Level-matched online Python, applied mathematics, AI tools and model checking for teenagers and adults in Karratha and the Pilbara, taught live in English.'
  },

  h1: 'AI and programming classes in Karratha',
  capsuleQ: 'What are the best AI and programming classes in Karratha?',
  capsule: 'Live lessons where a Karratha teenager or adult writes programs that calculate something checkable outside the window, and then tests what AI tools say against that result. The 2021 Census put the urban area at 17,013 residents. Lessons happen over video in a small group or one to one, and the opening lesson is free.',
  lead: 'Karratha lies north of the Tropic of Capricorn, which means that twice a year the noon sun climbs to the very top of the sky and shadows almost vanish beneath people\'s feet. Which two days? Take the latitude of the town from Main Roads WA\'s open road data, about 20.74 degrees south, and write a program that tracks the sun\'s declination through the year. It answers 17 January and 25 November. Use a popular one-line shortcut instead and November moves three days earlier. Feed degrees to a function expecting radians and the sun ends up on the wrong side of the sky. Karratha learners discover how much care hides inside a calculation that looks like a single line.',
  wa: 'Hello Modern Age Coders, I would like a free AI and programming class for a learner in Karratha.',

  picks: {
    eyebrow: 'Course picks for Karratha',
    h2: 'Where Karratha learners usually start',
    intro: 'All four lead towards the sun project on this page. A free first lesson picks the right one, and card details are never requested.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python basics, the math module and loops that step through every day of a year.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 16', note: 'Angles, trigonometry and graphs built with code instead of memorised.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning foundations, plus the habit of testing a model against known answers.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'AI from search and models to evaluation, with checks against physical ground truth.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Karratha in the Census',
      h2: 'A young Pilbara city of 17,013',
      intro: 'Census figures for the Karratha urban area from 2021, set against Western Australia and the whole country.',
      body: [
        { kind: 'p', text: 'There were 17,013 people on Census night, with a median age of just 32. They formed 3,839 families in 7,610 private dwellings, at 2.8 people per household on average.' },
        { kind: 'table', caption: 'Karratha against WA and Australia (2021 Census shares)', head: ['Share', 'Karratha', 'WA', 'Australia'], rows: [
          ['Technicians and trades workers (2,203 people)', '24.8%', '15.3%', '12.9%'],
          ['Professionals (1,348 people)', '15.2%', '22.0%', '24.0%'],
          ['Bachelor degree or above (2,111 people)', '16.9%', '23.8%', '26.3%'],
          ['Separate houses (4,015 dwellings)', '79.3%', '79.7%', '72.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Flats and units', p: 'Some 298 dwellings, 5.9% of the stock, were flats or apartments.' },
          { h3: 'Young adults', p: 'The count included 924 people aged 15 to 19 and 890 aged 20 to 24.' },
          { h3: 'The wider council', p: 'The ABS estimate for the City of Karratha council area on 30 June 2025 is 25,429, a larger area than the urban count above.' }
        ] },
        { kind: 'p', text: 'To protect privacy the ABS nudges Census cells by small random amounts, which means the pieces of a table seldom total exactly. We quote each value as published and never add rows together to make a total of our own.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'On which days is the noon sun straight over Karratha?',
      intro: 'Town latitude from Main Roads WA open data, the sun\'s position from published astronomical equations, and Python to bring them together.',
      body: [
        { kind: 'table', caption: 'What the calculation gives for latitude 20.74 degrees south (our code, 10 October 2026)', head: ['Question', 'Careful method', 'Common shortcut or slip'], rows: [
          ['First overhead day of 2026', '17 January', '17 January (the one-line formula agrees)'],
          ['Second overhead day of 2026', '25 November', '22 November (one-line formula)'],
          ['Sine of the tilt, 23.44', '0.3978 (degrees)', '-0.9926 (read as radians)'],
          ['Noon sun height in June', '45.82 degrees', 'Not computed'],
          ['Noon sun height in December', '87.30 degrees, just to the south', 'Not computed']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Find the latitude', p: 'Main Roads WA publishes thousands of reference points along the state\'s roads. Inside a box around Karratha we took 2,000 of them, spanning 20.71 to 20.78 degrees south, and used their median, 20.7414.' },
          { h3: '2. Track the sun', p: 'The sun\'s declination is how far north or south of the equator it sits. Standard equations give it for any moment; the overhead days are when it equals the town\'s latitude.' },
          { h3: '3. Solve for the moment', p: 'A simple search finds the crossings at 12:53 Karratha time on 17 January 2026 and 12:44 on 25 November 2026. The northern and southern edges of town cross on the same dates.' }
        ] },
        { kind: 'callout', h3: 'Fifty-three days with the sun to the south', p: 'Between those two dates the noon sun is actually south of overhead, so shadows at midday point north towards the equator, the opposite of what most Australians expect. Our program counts 53 such days in 2026. Errors of a degree in the sun\'s position would shift those boundaries by days, which is exactly what the popular shortcut does: its largest error over the year is 1.10 degrees, and its November date lands three days early.' },
        { kind: 'p', text: 'The equations are the NOAA solar calculator\'s, which follow Jean Meeus, with an obliquity of 23.4381 degrees for 2026; the shortcut is Cooper\'s 1969 sine formula. All results are our own calculations. In 2027 the same dates return, with the crossings at 18:37 on 17 January and 18:36 on 25 November.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Checking a calculation',
      h2: 'Making a short formula trustworthy',
      intro: 'Learned on the sun over Karratha, then applied to physics simulations, navigation and any code built on angles.',
      body: [
        { kind: 'table', caption: 'Checks run on the Karratha sun program', head: ['Check', 'How', 'Result'], rows: [
          ['Known values', 'Declination at the solstices should be near plus and minus 23.44 degrees', 'The program reaches 23.44 both ways'],
          ['Units', 'Print sin(23.44) with and without converting to radians', 'A sign flip shows the slip at once'],
          ['Shortcut against full method', 'Run both for every day of 2026 and compare', 'Average gap 0.40 degree, worst 1.10'],
          ['Edges of the area', 'Repeat for the town\'s northern and southern limits', 'Same two dates, different hours']
        ] },
        { kind: 'p', text: 'A formula that produces a believable number is the most dangerous kind, because nobody looks twice. Comparing against values you already know, the solstices here, is the cheapest way to catch a mistake before anyone relies on it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Plot declination through the year, find the two crossings with a loop and explain why the shadows reverse.' },
          { h3: 'University students', p: 'Root-finding on a periodic function, numerical precision and validating against an independent reference.' },
          { h3: 'Adults at work', p: 'Any spreadsheet or script that handles angles, bearings or solar data benefits from the same unit and edge checks.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not linked to Main Roads Western Australia, the ABS, NOAA or the WA Government. Their data and equations remain theirs; the code and results on this page are our own.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Karratha',
      h2: 'Western Australian time all year',
      intro: 'Local details that shape when a Karratha learner can join a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'No clock changes', p: 'Karratha keeps Western Australian time, UTC plus 8, every month of the year with no daylight saving.' },
          { h3: 'Close to India time', p: 'India time is two and a half hours behind Karratha throughout the year, so after-school slots line up easily.' },
          { h3: 'The East Coast gap', p: 'Sydney and Melbourne sit two hours ahead in winter and three hours ahead during their daylight saving.' }
        ] },
        { kind: 'spec', title: 'Western Australian term dates', p: 'The WA Department of Education lists Term 4 of 2026 from Monday 12 October to Thursday 17 December, and Term 1 of 2027 from Monday 1 February to Friday 9 April. Lessons pause around these dates on request.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From angles on paper to models that answer to reality',
    intro: 'The bands are rough; the free lesson finds the actual start.',
    cols: [
      { band: 'Ages 11 to 14', h3: 'Angles in code', p: 'Drawing shapes and shadows, converting degrees and seeing trigonometry move.', courses: ['maths-through-coding', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Formulas and searches', p: 'Putting equations into functions, looping over a year and finding where a value is crossed.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'University', h3: 'Numerical methods and AI', p: 'Precision, root-finding and testing learned models against physical ground truth.', courses: ['artificial-intelligence-complete-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Calculations at work', p: 'Scripts and AI tools for technical work, checked before anyone acts on them.', courses: ['python-ai-automation-masterclass-college', 'artificial-intelligence-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant put the sun in the right place?',
    intro: 'Usually close, which is the problem.',
    p1: 'Ask a chatbot when the sun is directly over Karratha and it may reach for the one-line shortcut, giving a November date a few days off, or write code that passes degrees to a function expecting radians. Both answers look reasonable on a screen.',
    p2: 'Our Karratha learners use AI to draft the program, then check it against what they can verify: the solstice values, a unit test on the sine of the tilt, and the shadows they can see at noon in January. The model saves typing; the learner decides what is true.',
    closer: 'A Karratha learner who has caught a three-day error with a solstice check will spot the same quiet mistakes in any AI output, whatever arrives after 2026.',
    blogAnchor: 'how AI changes what young programmers should learn'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Pilbara distance, no disadvantage',
    intro: 'A live online class reaches Karratha as easily as it reaches Perth.',
    cells: [
      { h3: 'Set in WA time', p: 'Lessons are scheduled on Western Australian time, which never shifts, so the slot is the same all year.' },
      { h3: 'Matched to WA year levels', p: 'Teachers follow the WA curriculum years, including ATAR students, and teach in English.' },
      { h3: 'A real first lesson', p: 'The free session is spent programming with a teacher; you then get a suggested course and time, and nobody asks for payment details.' },
      { h3: 'Groups of fifteen to twenty', p: 'Learners at one stage, gathered from several states and countries so a sensible hour exists.' },
      { h3: 'Two classes weekly', p: 'Roughly eight a month, with school holidays and exams planned around in advance.' },
      { h3: 'Swing shifts allowed for', p: 'Adults on rotating rosters can move between group times or choose one-to-one lessons.' }
    ],
    spec: { title: 'Times written for Karratha', p: 'Every lesson time is given in Western Australian time, so families never convert from the East Coast.' }
  },

  fees: {
    h2: 'Fees for AI and programming classes in Karratha',
    intro: 'Three options, plainly.',
    first: 'A free lesson that ends with a level, a course and a time we suggest.',
    group: 'About eight group lessons a month with fifteen to twenty learners at your stage.',
    private: 'About eight one-to-one lessons a month with a dedicated teacher.',
    closer: 'Remote postcodes pay nothing extra: Karratha is charged the same US dollar fee as every other Australian town. No payment is taken until the trial has settled a course and slot; the pricing page covers breaks, missed lessons and changes of format.'
  },

  reviewsH2: 'Learner and parent reviews from Google',

  book: {
    h2: 'Give us a few details and we will set up the free lesson',
    intro: 'We plan the opening exercise in advance: drawing an angle with code for a Year 7 beginner, the overhead-sun search for a Year 11 student, or a unit-checked solar model for an adult.',
    success: 'Thank you. We will be in touch soon about an AI and programming class in Karratha.'
  },

  faq: {
    h2: 'Karratha AI and programming questions',
    intro: 'Things Karratha families and adult learners ask before starting.',
    items: [
      { q: 'How many people live in Karratha?', a: 'The 2021 Census counted 17,013 people in the Karratha urban area. The ABS estimate for the wider City of Karratha council area on 30 June 2025 is 25,429.' },
      { q: 'What is solar declination?', a: 'Solar declination is the latitude at which the sun is directly overhead at noon. It moves between about 23.44 degrees north and 23.44 degrees south over a year, so places between the tropics have two days each year when the noon sun is straight above them.' },
      { q: 'When is the sun directly overhead in Karratha?', a: 'By our calculation for latitude 20.74 degrees south, on 17 January and 25 November. Between those dates the noon sun is slightly to the south, so midday shadows point north.' },
      { q: 'What does the Karratha sun project involve?', a: 'Learners take Karratha\'s latitude from Main Roads WA open data, compute the sun\'s declination for every day of the year in Python, find the two dates it matches the town, and compare a careful method with a popular shortcut.' },
      { q: 'Can ATAR students join?', a: 'Yes. Year 11 and 12 students fit the lessons around their ATAR courses, and all assessed school work stays their own.' },
      { q: 'What times suit Karratha?', a: 'After school, evenings or weekends, agreed in the trial and written in Western Australian time. India time is two and a half hours behind Karratha all year.' },
      { q: 'Are there classes for primary-aged children?', a: 'There are, from age 6, using visual coding tools; the sun project here is designed for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Karratha?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do AI and programming classes in Karratha cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'More in Western Australia',
    h2: 'Other pages for northern and western WA',
    html: 'Further down the coast there is <a class="cg-inline-link" href="/best-coding-classes-in-geraldton">a Geraldton coding page</a>, and inland <a class="cg-inline-link" href="/best-coding-classes-in-kalgoorlie">coding classes in Kalgoorlie</a>. Learners heading to the capital can read <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">online coding and Python in Perth</a>, and the state overview is <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">coding and AI classes in Western Australia</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Karratha and Western Australia',
  footerPlaces: [
    { href: '/best-coding-classes-in-geraldton', label: 'Geraldton' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-krth .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.4vw, 2.8rem); }
.cg-root.cg-krth .cg-hero h1 { font-weight: 740; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-krth .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-krth .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-krth .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.014em; }
.cg-root.cg-krth .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.8rem); }
.cg-root.cg-krth .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-krth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-krth .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-krth .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Karratha Significant Urban Area, ABS Census 2021 QuickStats, area code 5008, with Western Australia and Australia (read 10 October 2026): 17,013 people; median age 32; 3,839 families; 7,610 private dwellings; 2.8 people per household; separate house 4,015 (79.3 percent; WA 79.7; Australia 72.3); flat or apartment 298 (5.9 percent); Professionals 1,348 (15.2 percent; WA 22.0; Australia 24.0); Technicians and Trades Workers 2,203 (24.8 percent; WA 15.3; Australia 12.9); Bachelor Degree level and above 2,111 (16.9 percent; WA 23.8; Australia 26.3); aged 15 to 19: 924 (5.4 percent); aged 20 to 24: 890 (5.2 percent). ABS ERP Karratha LGA (54310) 30 June 2025: 25,429. WA Department of Education term dates: 2026 Term 4 Monday 12 October to Thursday 17 December; 2027 Term 1 Monday 1 February to Friday 9 April. IANA tz Australia/Perth UTC+8, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Solar declination and the days the sun passes directly overhead. Main Roads WA, SLK Points for Road Network (CC BY 4.0), FeatureServer layer 0, query 10 October 2026, envelope 116.76 to 116.92 E, -20.78 to -20.69: 2,003 points, 2,000 downloaded; latitude -20.7796 to -20.7067, median -20.7414. NOAA solar equations (Meeus), obliquity 23.4381: declination equals -20.7414 at 2026-01-17 12:53 and 2026-11-25 12:44 AWST; 2027-01-17 18:37 and 2027-11-25 18:36. Edges: -20.7067 crosses 2026-01-17 17:06 and 2026-11-25 08:29; -20.7796 crosses 2026-01-17 08:13 and 2026-11-25 17:26. Noon altitude 45.82 degrees (June solstice), 87.30 (December solstice, sun south of zenith). 53 days in 2026 with the noon sun south of the zenith. sin(23.44) radians -0.9926, degrees 0.3978. Cooper (1969) approximation 23.45 sin(360(284+n)/365): maximum error against NOAA 1.10 degrees, mean 0.40 (noon AWST samples); crossing days 17 January and 22 November 2026. NOAA declination extremes 2026: 23.438 and -23.438.',
    requiredMentions: [
      '17,013',
      '25,429',
      '24.8%',
      '20.7414',
      '45.82 degrees',
      '87.30 degrees',
      '-0.9926',
      '53 such days',
      'Pilbara distance, no disadvantage'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Karratha Significant Urban Area (5008): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5008' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Karratha LGA 54310, total persons, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.54310.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'Main Roads Western Australia, SLK Points for Road Network (CC BY 4.0), listed on data.wa.gov.au.', url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-slk-points-for-road-network' },
      { claim: 'NOAA Global Monitoring Laboratory, solar calculation details (equations after Meeus).', url: 'https://gml.noaa.gov/grad/solcalc/calcdetails.html' },
      { claim: 'WA Department of Education, future term dates.', url: 'https://www.education.wa.edu.au/future-term-dates' }
    ],
    rejectedClaims: [
      'Mining, gas or port production, revenue or employment figures for Karratha: excluded by the brief.',
      'Any health, heat-stress or ultraviolet exposure figure linked to the overhead sun: excluded by the cluster rules.',
      'Exact clock times of the overhead sun at a named landmark: only the median road latitude and the town\'s edges were computed.',
      'Weather or climate statistics: the Bureau of Meteorology is excluded as a source for this cluster.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Main Roads WA, the ABS, NOAA or the WA Government.'
    ]
  }
};
