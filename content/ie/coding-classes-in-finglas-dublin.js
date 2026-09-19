'use strict';
// Finglas, Dublin 11 (cg- district page, Ireland cluster, Phase 6). Named sources only (owner
// rule for districts), read 20 September 2026: EPA AirQuality.ie station EPA-46 ("The Particulate
// Matter monitors are located in Finglas. They are operated by Dublin City Council."), hourly PM10
// and PM2.5 from the readings pages; AirQuality.ie "What We Monitor"; EPA "Air quality in Ireland
// 2023" page; DCC Finglas Library and Tolka Valley Park pages; the Luas Finglas project site.
// Spine: judging a spike (masking by the SD; baselines by hour of day). Scratchpad fgl/pm.js.
// 2024: 8,658 of 8,784 hours (98.6%); PM2.5 mean 7.05, sd 6.40, median 5.07, MAD 2.25, max
// 84.24 at 2024-01-07 20:00 (PM10 85.95). mean+3sd = 26.3 -> 170 hours; without the top 1% (87
// hours) sd 5.30, threshold 22.6 -> 275 hours. Hour-of-day medians: 20:00 6.09, 22:00 6.34;
// 7 Jan 20:00 = 13.8 x; 31 Oct 22:00 = 66.84 = 10.5 x, sixth highest hour. 162 hours over 5 x
// their hour's median, 9 over 10 x. Highest daily mean 9 March 2024 34.5 within 8-11 March.
// 2025: only 790 hours on the readings pages. PM2.5 never above PM10 in 14,304 paired hours
// (2024 + Jan-Aug 2026). Timestamps: the winter examples fall where Irish time equals UTC.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'FINGLAS', blurb: 'A year of hourly particle readings, and why a spike should be judged against its own hour of the day.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-finglas-dublin',
  code: 'fgl',
  accent: '#453017',
  accentRationale: 'Finglas: a smoke brown from the widened solver search, clear of the Castleknock and Castletroy browns',
  pageType: 'district',
  place: {
    name: 'Finglas',
    eyebrow: 'Finglas, Dublin 11',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dublin City' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-dublin', name: 'Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' },
    { label: 'Glasnevin', href: '/coding-classes-in-glasnevin-dublin' }
  ],
  routeLabel: 'Finglas, Dublin 11, Ireland',
  title: 'Coding Classes in Finglas, Dublin | Modern Age Coders',
  description: 'Coding, Python, AI and maths lessons for Finglas learners aged 6 to 67, taught live online to small same-level groups or one to one. The first lesson has no fee.',
  ogDescription: 'Coding and AI classes for Finglas, with a data project on hourly particle readings and how to tell a real spike from an ordinary evening.',
  twitterDescription: 'Live online coding, Python, AI and maths for Finglas, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Finglas',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Finglas, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Finglas',
  capsuleQ: 'What are the best coding classes in Finglas?',
  capsule: 'In Finglas a teacher leads every lesson live over video, for a small group at one level or for one learner, in two sessions most weeks, and the classes are open from age six right up to sixty-seven. There is no travelling. You pay nothing for lesson one; after it the fee is USD 100 a month for a group or USD 150 a month one to one.',
  lead: 'Dublin City Council runs particle monitors in Finglas, and the EPA publishes their readings hour by hour. In 2024 the monitor logged 8,658 hours of fine particles, PM2.5. Most hours were clean, with a middle value near 5 micrograms per cubic metre. A handful were not: at 8 in the evening on 7 January the reading reached 84.24, and at 10 at night on 31 October 66.84. How do you decide which hours are unusual? The usual rule, anything more than three standard deviations above the average, turns out to be blinded by the very spikes it is looking for. This page teaches a learner why, and a fairer yardstick: each hour compared with the same hour on an ordinary day.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Finglas.',

  picks: {
    eyebrow: 'Courses for Finglas',
    h2: 'Four first courses for Finglas',
    intro: 'Begin with the age band; the teacher checks the level in the free first lesson and suggests a better-fitting course if there is one.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and a surprise meter: a game that decides when a score is really out of the ordinary.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Averages, middles and spreads in code, and what one huge number does to each of them.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python with a year of hourly sensor readings: thresholds, baselines and the spikes they catch or miss.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who set alert levels at work and want them to fire at the right moments.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When is a spike a spike? A year at the Finglas particle monitor',
      intro: 'The readings are the EPA\'s hourly PM2.5 figures for its station 46, which it describes as Dublin City Council\'s particulate monitors in Finglas, for the calendar year 2024, in micrograms per cubic metre.',
      body: [
        { kind: 'table', caption: 'Finglas PM2.5, 2024: two ways of deciding what is unusual', head: ['Rule or reading', 'Figure'], rows: [
          ['Hours with a reading', '8,658 of 8,784, 98.6 percent'],
          ['Middle hour (median) and average', '5.07 and 7.05'],
          ['Standard deviation, all hours', '6.40'],
          ['Standard deviation without the top 1 percent', '5.30'],
          ['7 January, 20:00', '84.24, 13.8 times a normal 8 pm'],
          ['31 October, 22:00', '66.84, 10.5 times a normal 10 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Blinded by the spikes', p: 'The usual rule flags any hour more than three standard deviations above the average. But the spikes themselves inflate the standard deviation: with every hour included it is 6.40, and with the highest 1 percent set aside it is 5.30. The rule\'s line sits at 26.3 in the first case and 22.6 in the second, so it flags 170 hours or 275. The outliers raise the bar they are judged against.' },
          { h3: 'The right comparison', p: 'Readings are higher on an ordinary evening than at noon, so a fixed line treats a normal 10 pm and a strange 3 pm alike. Comparing each hour with the median for that same hour of the day fixes it. By that yardstick 162 hours of 2024 were more than five times their hour\'s normal level, and 9 were more than ten times.' },
          { h3: 'Two nights', p: 'At 20:00 on 7 January, the highest hour of the year, the reading was 84.24, 13.8 times the median for 8 pm. At 22:00 on 31 October it was 66.84, 10.5 times the median for 10 pm and the sixth highest hour of the year. The monitor records particles, not where they came from.' }
        ] },
        { kind: 'callout', h3: 'An alarm set from the data can be deafened by the data', p: 'Setting an alert at three standard deviations assumes the spread was measured on ordinary days. When the rare extreme hours are included, they widen the spread and push the alert line up, hiding some of themselves. Two habits help: measure the ordinary spread without the extremes, or with statistics that ignore them, and compare like with like, here each hour with the same hour on other days. The EPA names solid fuel burning in homes as the main source of fine particles nationally, which is one reason evenings and mornings differ.' },
        { kind: 'p', text: 'The learner\'s program reads the EPA\'s readings pages for the station, which carry the hourly PM10 and PM2.5 series as chart data, and turns them into a table of times and values. It first checks a rule that must always hold: PM2.5 counts the smaller particles, so it can never exceed PM10 in the same hour, and across 14,304 paired hours from 2024 and 2026 it never does. It then computes the average, median and standard deviation, tries the three-standard-deviation rule with and without the extreme hours, works out a median for each hour of the day, and lists the hours that stand furthest above their own hour\'s normal. Last, it notes coverage: 2024 is nearly complete, but the readings pages for 2025 hold only 790 hours, so 2025 is left out rather than compared.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'An episode, not a spike', p: 'The highest daily average of 2024 came on 9 March, 34.5, in a run of four high days from 8 to 11 March. A day-by-day view shows a sustained episode that an hour-by-hour alert would split into many separate alarms.' },
          { h3: 'Evenings run higher', p: 'The median reading rises from about 4.6 in the early afternoon to about 6.3 late in the evening. That rise is normal for this monitor, which is exactly why a fixed alert line misjudges evening hours.' },
          { h3: 'A missing year', p: 'For 2025 the EPA readings pages return only 790 hours for this station, about a tenth of the year. A comparison of 2025 with 2024 would compare a month with a year, so the program refuses to make it.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Finglas, named',
      h2: 'Finglas through its library, its park and its planned Luas line',
      intro: 'Each entry comes from the body responsible for it.',
      body: [
        { kind: 'table', caption: 'Named places in Finglas', head: ['Place', 'What its own source says'], rows: [
          ['Finglas Library', 'Seamus Ennis Road, Dublin 11, D11 C603'],
          ['Tolka Valley Park', 'Finglas South, Dublin 11, with wetlands built in 1999'],
          ['Luas Finglas (proposed)', 'A 3.9 kilometres Green Line extension with four new stops'],
          ['EPA station 46', 'Particulate monitors run by Dublin City Council']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The library', p: 'The council lists Finglas Library as open 13:00 to 20:00 on Monday and Wednesday and 10:00 to 17:00 on Tuesday and Thursday, with an accessible parking bay, an induction loop and dyslexia-friendly reading pens to borrow.' },
          { h3: 'The park', p: 'Dublin City Council says the wetlands in Tolka Valley Park were built in 1999 to treat the water arriving from the Finglaswood Stream, trapping pollution and creating new habitat, including for the common frog.' },
          { h3: 'The planned line', p: 'The project team describes Luas Finglas as a proposed extension of the Green Line from Broombridge to Charlestown, 3.9 kilometres long, with stops at St Helena\'s, Finglas Village, St Margaret\'s and Charlestown and a 350-space park and ride near the M50.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Finglas, because the page prints only what named bodies publish about the place. The particle readings come from one monitoring station, the page links no reading to a particular cause, and the Luas line is described as the project describes it: proposed.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'The week for a learner in Finglas',
      intro: 'Most weeks bring two lessons, and the teacher is live for the whole of each.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Younger learners begin in block code with games about what counts as surprising, learning that it depends on what is normal.' },
          { h3: 'Teenagers', p: 'Teenagers move to Python, websites, AI projects and real sensor data such as the particle monitor\'s, with the statistics made concrete in code.' },
          { h3: 'Adults', p: 'Adults can begin with no experience; lesson one sets the course.' }
        ] },
        { kind: 'p', text: 'Readings are the EPA\'s published hourly data for station 46; the coverage, averages, spreads, thresholds and hour-of-day comparisons were calculated by us on 20 September 2026. Library and park details are Dublin City Council\'s, and the Luas details the project team\'s.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a surprise meter to a fair alarm',
    intro: 'The bands are a first guess; the opening lesson decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'What is surprising?', p: 'Block-coded games that learn a normal score and react to an odd one.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Middle and spread', p: 'Python that finds the median, average and spread of a list and watches one big number move them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Alarms and baselines', p: 'Thresholds with and without extremes, and hour-of-day baselines on real sensor data.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Alerts that work', p: 'Setting alert levels on monitoring data so they catch the right moments.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to find the unusual hours',
    intro: 'It will usually reach for the three standard deviation rule.',
    p1: 'Hand an AI assistant a year of hourly readings and ask for the unusual ones, and a common answer computes the average and standard deviation and flags everything more than three deviations above. It is a sensible default, and on data like this it is blunted by the spikes it is hunting, and it treats every evening as suspicious because evenings are normally higher.',
    p2: 'Someone who has worked through this project instead requests the spread measured without the extremes and a baseline by hour of the day, and checks the rule that PM2.5 can never exceed PM10 before trusting any of it. With those instructions an assistant writes much better code.',
    closer: 'An outlier depends on what normal looks like. Code lets you define normal properly.',
    blogAnchor: 'why coding is still a skill worth building in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Finglas',
    intro: 'The essentials, in six lines.',
    cells: [
      { h3: 'Real-time lessons', p: 'Each lesson is taught live, with the teacher looking at every learner\'s code as it is typed.' },
      { h3: 'One level together', p: 'Five to ten learners at the same level, from Finglas, the rest of Ireland or further away.' },
      { h3: 'Predictable days', p: 'Two regular days a week, around eight lessons in a month.' },
      { h3: 'School-year aware', p: 'Holidays, mid-terms and exam weeks are accounted for in the plan.' },
      { h3: 'What to have', p: 'A laptop or desktop, a microphone, headphones or speakers, and internet that can carry video.' },
      { h3: 'Private teaching', p: 'One-to-one lessons for learners who are ahead, need more time or need hours no group offers.' }
    ],
    spec: { title: 'Online only', p: 'There is no Modern Age Coders centre in Finglas or anywhere in Ireland. Every lesson is live on video and the same wherever the learner joins from.' }
  },

  fees: {
    h2: 'Fees for Finglas',
    intro: 'Kept simple.',
    first: 'A first lesson at no cost, level check included.',
    group: 'A month in a same-level group of five to ten, about eight live lessons.',
    private: 'A month of one-to-one lessons at the same rhythm.',
    closer: 'Every family outside India pays one US dollar fee, charged monthly. The free lesson carries no obligation, the charge starts only when the course begins, and the pricing page explains holidays, missed lessons and changing between group and one-to-one teaching.'
  },

  reviewsH2: 'Six families\' Google reviews, as posted',

  book: {
    h2: 'Book a free first lesson in Finglas',
    intro: 'Tell us the learner\'s age and what they like, and we will plan the first lesson around it. The hour may end with a simple game, a working program, or an alarm that can tell an ordinary evening from a strange one.',
    success: 'Thank you. We will get back to you soon to arrange the lesson.'
  },

  faq: {
    h2: 'Finglas coding class questions',
    intro: 'Questions Finglas families ask most often.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Finglas?', a: 'No. We teach live on video and have no premises in Ireland. A learner needs a computer, a microphone and sound, and a reliable connection. The phone number on this page is Indian.', boiler: true },
      { q: 'What is the particle monitor project?', a: 'The learner takes the EPA\'s 2024 hourly PM2.5 readings for the Finglas station, 8,658 hours, and tests ways of spotting unusual hours: the usual three standard deviation rule is blunted by the spikes themselves (6.40 against 5.30 without them), while an hour-of-day baseline shows 84.24 at 8 pm on 7 January was 13.8 times a normal 8 pm.' },
      { q: 'Does the page say what caused the high readings?', a: 'No. The monitor measures particles, not their source. The page quotes the EPA\'s national statement about the main sources of fine particles and makes no claim about any particular hour.' },
      { q: 'Why is there no population figure for Finglas on this page?', a: 'This page sticks to facts that named bodies publish about Finglas, and the three it draws on, the EPA, Dublin City Council and the Luas Finglas team, publish no resident count for it.' },
      { q: 'At what times do lessons run?', a: 'On weekdays from after school into the evening, and at weekends during the day. Times are set in Irish time. The teachers are in India, five and a half hours ahead of Finglas in winter and four and a half in summer, and we only offer times that work at both ends.' },
      { q: 'Can I join as an adult?', a: 'Yes. Grown-up learners up to sixty-seven are welcome, complete beginners included, and they pick a same-level group or private lessons once the free lesson is done.' },
      { q: 'Will my child be with other Finglas children?', a: 'Only by chance, because groups are formed by level and classmates may be anywhere in Ireland or abroad.' },
      { q: 'What do coding classes in Finglas cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched by level, pace and goals rather than age or address. If no group runs at a time that suits, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Finglas',
    html: 'To the east, <a class="cg-inline-link" href="/coding-classes-in-glasnevin-dublin">Glasnevin</a> has a project on temperature records and <a class="cg-inline-link" href="/coding-classes-in-drumcondra-dublin">Drumcondra</a> one on noise readings. For the city as a whole see the <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page, and for every other place the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Finglas, Dublin and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-glasnevin-dublin', label: 'Glasnevin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-fgl .cg-hero-grid { align-items: end; gap: clamp(1.17rem, 3.11vw, 2.44rem); }
.cg-root.cg-fgl .cg-hero h1 { font-weight: 710; letter-spacing: -0.0181em; line-height: 1.07; }
.cg-root.cg-fgl .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.14rem; }
.cg-root.cg-fgl .cg-eyebrow { letter-spacing: 0.131em; font-weight: 620; text-transform: uppercase; }
.cg-root.cg-fgl .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0128em; }
.cg-root.cg-fgl .cg-grid-3 { gap: clamp(1.08rem, 2.81vw, 2.2rem); }
.cg-root.cg-fgl .cg-table caption { letter-spacing: 0.029em; font-weight: 680; }
.cg-root.cg-fgl .cg-table td { font-variant-numeric: tabular-nums slashed-zero; }
.cg-root.cg-fgl .cg-table tr:nth-last-child(-n+2) td { font-weight: 630; }
.cg-root.cg-fgl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.97rem; }
.cg-root.cg-fgl .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Finglas, named sources only (owner rule for districts), read 20 September 2026. EPA AirQuality.ie station list: "EPA-46":"The Particulate Matter monitors are located in Finglas. They are operated by Dublin City Council."; readings pages https://airquality.ie/readings?station=EPA-46&dateFrom=01+Jan+2024&dateTo=30+Jun+2024 and 01+Jul+2024 to 31+Dec+2024 (also 2025 and Jan-Aug 2026), series PM10 and PM2.5 in hourly chart data. AirQuality.ie What We Monitor: "PM are particles in the air typically measured as PM 10 and PM 2.5 with diameters of 10μm (microns) or 2.5μm. In Ireland, the main sources are solid fuel burning and vehicular traffic." EPA Air quality in Ireland 2023 page: "fine particulate matter (PM 2.5 ), mainly from burning solid fuel in our homes, and nitrogen dioxide (NO 2 ), chiefly from road traffic, continue to be the main threats to good air quality." Our arithmetic (fgl/pm.js): 2024 PM2.5 hours 8,658 of 8,784 (98.6%); mean 7.05, standard deviation 6.40, median 5.07, median absolute deviation 2.25, maximum 84.24 at 2024-01-07 20:00 (PM10 85.95); mean + 3 sd = 26.3, 170 hours above; top 1% = 87 hours; without them sd 5.30, mean + 3 sd = 22.6, 275 hours above; hour-of-day medians 6.09 at 20:00 and 6.34 at 22:00, about 4.6 early afternoon; 7 January 20:00 = 13.8 x, 31 October 22:00 = 66.84 = 10.5 x (sixth highest hour); 162 hours above 5 x their hour median, 9 above 10 x; highest daily mean 9 March 2024 34.5, 8 to 11 March all above 23. 2025: 790 hours in total on the readings pages. PM2.5 never exceeds PM10 in 14,304 paired hours (2024 and January to August 2026). Dublin City Council, Finglas Library: "Seamus Ennis Road Finglas Dublin 11 Co. Dublin D11 C603"; Monday 13:00 to 20:00, Tuesday 10:00 to 17:00, Wednesday 13:00 to 20:00, Thursday 10:00 to 17:00; accessible parking bay; induction loop; "Dyslexia-friendly C-Pens are available to borrow". Dublin City Council, Tolka Valley Park: "Wetlands were constructed in Tolka Valley Park in 1999 as a way of treating the incoming waters of the Finglaswood Stream"; "trapping pollution, reducing bad odours, making the pond more pleasant, and creating a new wetland habitat for local biodiversity, including the common frog"; "Tolka Valley Park Finglas South Dublin 11". Luas Finglas project site: "Luas Finglas is the next extension of the Luas Green Line, running from Broombridge to Charlestown through Tolka Valley and Finglas village"; "The proposed route is 3.9km in length and will include four new stops: St Helena\'s, Finglas Village, St Margaret\'s and Charlestown. A 350-vehicle park and ride facility will be provided near the St Margaret\'s Road stop, close to the M50."',
    localProject: 'When is a spike a spike? From the EPA\'s 2024 hourly PM2.5 readings for station 46 in Finglas (8,658 hours), the learner shows that the three standard deviation rule is masked by the spikes it seeks (sd 6.40 with them, 5.30 without; 170 against 275 hours flagged), builds an hour-of-day baseline, and finds 84.24 at 20:00 on 7 January (13.8 times a normal 8 pm) and 66.84 at 22:00 on 31 October (10.5 times a normal 10 pm). Side checks: PM2.5 never exceeds PM10 in 14,304 paired hours; 2025 has only 790 hours and is not compared; a four-day March episode is a different thing from a one-hour spike. Lessons: extremes inflate the spread that judges them; compare like with like; check hard constraints first; do not compare a month with a year. New family site-wide: MASKING AND CONDITIONAL BASELINES FOR ANOMALIES (masking, median absolute deviation, Halloween had no prior hits; Tutong owns midrange against median, Hengelo purpose-relative cleaning, Blanchardstown and Tallaght the earlier EPA lessons).',
    requiredMentions: [
      '8,658',
      '84.24',
      '13.8 times',
      '66.84',
      '10.5 times',
      '6.40',
      '5.30',
      '14,304',
      'D11 C603',
      '3.9 kilometres',
      '350-space',
      'Finglaswood Stream'
    ],
    sources: [
      { claim: 'EPA AirQuality.ie, station 46 (Finglas, Dublin City Council particulate monitors): hourly PM10 and PM2.5 readings for 2024, 2025 and January to August 2026.', url: 'https://airquality.ie/readings?station=EPA-46&dateFrom=01+Jan+2024&dateTo=30+Jun+2024' },
      { claim: 'EPA AirQuality.ie, What We Monitor: PM10 and PM2.5 by particle diameter; main sources in Ireland solid fuel burning and vehicular traffic.', url: 'https://airquality.ie/information/what-we-monitor' },
      { claim: 'EPA, Air quality in Ireland 2023: fine particulate matter mainly from burning solid fuel in homes.', url: 'https://www.epa.ie/publications/monitoring--assessment/air/air-quality-in-ireland-2023.php' },
      { claim: 'Dublin City Council, Finglas Library: Seamus Ennis Road, D11 C603; opening hours; accessibility.', url: 'https://www.dublincity.ie/libraries/find-library/finglas-library' },
      { claim: 'Dublin City Council, Tolka Valley Park: wetlands built in 1999 to treat the Finglaswood Stream.', url: 'https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/tolka-valley-park' },
      { claim: 'Luas Finglas project: proposed 3.9 km Green Line extension from Broombridge to Charlestown with four new stops and a 350-vehicle park and ride.', url: 'https://www.luasfinglas.ie/' }
    ],
    rejectedClaims: [
      'Any cause for a particular high hour, including Halloween bonfires or fireworks: no EPA source ties them to these readings.',
      'Comparing 2025 with 2024: only 790 hours of 2025 are published for this station.',
      'Rule windows, legal limits and bootstrap intervals: Blanchardstown and Tallaght own them.',
      'Any statement that Luas Finglas is built or under construction: the project site calls it proposed.',
      'Any population figure for Finglas and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
