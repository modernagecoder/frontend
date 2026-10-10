'use strict';
// Alice Springs (cg- city page, Australia cluster Phase 7, row 179). Shaped page: leads with teenagers and
// adults; younger learners are covered by the kids pages and the national hub.
// Spine: how often do you need to sample a curve to measure the area under it? Data: Australian Radiation
// Protection and Nuclear Safety Agency (ARPANSA), "Ultraviolet Radiation Index - Alice Springs" (data.gov.au,
// Creative Commons Attribution 2.5 Australia), one-minute UV Index readings, file uv-alice-springs-2025.csv
// downloaded 9 October 2026. Our calculation (scratchpad au/r6/py/asp_trap.py): 525,021 readings of the 525,600
// minutes in 2025, so 579 are missing: one gap of 578 minutes beginning after 3 June 23:30 and one of 1 minute on
// 11 December (timestamps as published). 362 days are complete. Highest reading 15.43 on 9 January 2025 at 12:23.
// Daily area under the curve by the trapezoidal rule on every minute, in index-hours: largest 82.75 (10 January),
// smallest 6.08 (27 May), median 42.39. Sampling every k minutes instead (trapezoids), error against the
// one-minute area over the 362 complete days, mean / median / worst: 5 min 0.219% / 0.028% / 2.01%; 10 min
// 0.471% / 0.050% / 4.86%; 30 min 1.088% / 0.093% / 12.98%; 60 min 1.907% / 0.155% / 16.85%; 120 min 3.334% /
// 0.293% / 48.8%. Mean daily peak by month: January 13.42, June 4.75, December 13.21. Median time of the daily
// peak by month in the file's timestamps: between 12:18 (November) and 12:50 (February).
// Lesson family: trapezoidal rule numerical integration and the effect of sampling step; screened free site-wide
// on 9 October 2026 ("trapezoid": 0 page hits; claimed by AU-R6).
// Place facts read raw on 9 October 2026: ABS Census 2021 QuickStats, Alice Springs Significant Urban Area
// (7001): 25,912 people; median age 34 (Northern Territory 33, Australia 38); 6,213 families; 11,621 private
// dwellings; 2.6 people per household; separate house 5,709 (64.2%; NT 66.8%; Australia 72.3%); semi-detached,
// row or terrace house, townhouse 2,482 (27.9%; NT 12.7%; Australia 12.6%); flat or apartment 375 (4.2%; NT
// 17.9%); Professionals 3,486 (25.4%; NT 22.0%; Australia 24.0%); Bachelor Degree level and above 5,582 (27.2%;
// NT 21.5%; Australia 26.3%); aged 5 to 9 1,817 (7.0%); aged 10 to 14 1,716 (6.6%); aged 15 to 19 1,490 (5.8%).
// IANA tz: Australia/Darwin UTC+9:30 with no daylight saving; Asia/Kolkata UTC+5:30.
// Not used: Northern Territory education department pages (403, not circumvented), so no NT school dates or
// curriculum facts appear. Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language,
// religion, health (the UV data is treated purely as a measured curve, with no health or sun-safety claims).

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'ALICE SPRINGS', label: 'Alice Springs', blurb: 'Alice Springs teens and adults, and a project that measures the area under a year of one-minute UV readings.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-alice-springs',
  code: 'alc',
  accent: '#9E3A3A',
  accentRationale: 'Alice Springs: a deep red ochre (HSV saturation 0.63, value 0.62, hue 0), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, and 5.5:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Alice Springs',
    eyebrow: 'Alice Springs, Northern Territory, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Northern Territory' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-northern-territory', name: 'Northern Territory' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Alice Springs, Northern Territory',
  title: 'Best Coding Classes in Alice Springs | Live Online Teacher',
  description: 'Live online coding, Python and maths-in-code classes for Alice Springs teenagers and adults, with a real teacher, in small groups or one to one. First lesson free.',
  ogDescription: 'Coding classes for Alice Springs teens and adults, with a project that measures a year of one-minute UV readings and asks how few samples still give the right answer.',
  twitterDescription: 'Alice Springs coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Data Classes for Alice Springs Learners',
    description: 'Level-matched online Python, numerical methods, data handling and problem solving for teenagers and adults in Alice Springs, taught live in English.'
  },

  h1: 'Coding classes in Alice Springs',
  capsuleQ: 'What are the best coding classes in Alice Springs?',
  capsule: 'Live online classes where an Alice Springs teenager or adult writes Python with a teacher and uses it to measure real data from the town itself. The 2021 Census counted 25,912 people in the Alice Springs urban area, a young town with a median age of 34. Every lesson runs on video, one to one or in a small group at the same level, and the first one is free.',
  lead: 'A sensor in Alice Springs has recorded the UV index every minute for years, and the national radiation agency publishes it openly: 525,021 readings for 2025 alone. Plot one day and you get a hill that rises after sunrise and falls in the afternoon. How big is that hill? Python can add up the area under it with trapezoids, one for each minute. Then comes the interesting question: how many readings could you throw away and still get the answer right? Our Alice Springs project finds out, and on the most changeable day the honest answer is far fewer than you would think.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Alice Springs.',

  picks: {
    eyebrow: 'Course picks for Alice Springs',
    h2: 'Four ways into coding from Alice Springs',
    intro: 'Each course ties back to the measurement project on this page. The free first lesson suggests which one fits, and no card details are needed.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the beginning, working with a real file of readings from the early lessons.' },
      { course: 'maths-through-coding', band: 'Ages 12 to 16', note: 'Areas, rates and graphs explored by writing code, so calculus ideas arrive with something to test.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A complete Python course for adults who want to analyse data themselves.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Cleaning, summarising and checking large time series so the numbers can be trusted.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Alice Springs in the Census',
      h2: 'A young town with many townhouses and degree holders',
      intro: 'Published 2021 Census results for the Alice Springs Significant Urban Area, compared with the Northern Territory and Australia.',
      body: [
        { kind: 'table', caption: 'Alice Springs urban area, 2021 Census QuickStats', head: ['Census figure', 'Alice Springs'], rows: [
          ['Residents', '25,912'],
          ['Families', '6,213'],
          ['Private dwellings', '11,621'],
          ['Average household size', '2.6 people']
        ] },
        { kind: 'table', mt: true, caption: 'Alice Springs next to the Territory and the country', head: ['Measure', 'Alice Springs', 'NT', 'Australia'], rows: [
          ['Median age', '34', '33', '38'],
          ['Semi-detached, terrace or townhouse homes', '27.9% (2,482)', '12.7%', '12.6%'],
          ['Professionals, share of employed residents', '25.4% (3,486)', '22.0%', '24.0%'],
          ['Bachelor degree or above, residents 15 and over', '27.2% (5,582)', '21.5%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Four years younger', p: 'A median age of 34 puts Alice Springs four years below the national median of 38.' },
          { h3: 'More than a quarter in townhouses', p: '2,482 occupied homes, 27.9%, were semi-detached, terrace or townhouses, more than double the national share.' },
          { h3: 'Children and teenagers', p: 'The Census counted 1,817 residents aged 5 to 9, 1,716 aged 10 to 14 and 1,490 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'On reading census tables: privacy rules mean the bureau perturbs small counts slightly at random, so rows may not reconcile exactly with totals. We give each total and percentage as the bureau published it and do not construct totals from the rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many readings do you need to measure the area under a curve?',
      intro: 'The Australian Radiation Protection and Nuclear Safety Agency publishes one-minute UV index readings from Alice Springs. For each day of 2025 we measured the area under the curve using every reading, then again using only one reading every 5, 10, 30, 60 or 120 minutes, and compared.',
      body: [
        { kind: 'table', caption: 'The 2025 file at a glance (our count)', head: ['Item', 'Value'], rows: [
          ['Readings in the file', '525,021'],
          ['Minutes in 2025', '525,600'],
          ['Missing minutes', '579, almost all in one 578-minute gap in early June'],
          ['Complete days', '362'],
          ['Highest reading', '15.43, on 9 January at 12:23']
        ] },
        { kind: 'table', mt: true, caption: 'Error in the daily area when sampling less often, trapezoidal rule, 362 complete days (our calculation)', head: ['One reading every', 'Average error', 'Typical day (median)', 'Worst day'], rows: [
          ['5 minutes', '0.22%', '0.03%', '2.0%'],
          ['10 minutes', '0.47%', '0.05%', '4.9%'],
          ['30 minutes', '1.09%', '0.09%', '13.0%'],
          ['60 minutes', '1.91%', '0.16%', '16.9%'],
          ['120 minutes', '3.33%', '0.29%', '48.8%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Read and check', p: 'Load the year of readings, convert the timestamps, and count what is missing before trusting anything. Three days are incomplete and are set aside.' },
          { h3: '2. Integrate', p: 'Treat each pair of neighbouring readings as the two sides of a trapezoid, add the areas, and get one number per day in index-hours.' },
          { h3: '3. Thin the data', p: 'Keep every fifth, tenth or sixtieth reading, recompute, and compare. Most days barely notice; a few changeable days are badly misjudged.' }
        ] },
        { kind: 'callout', h3: 'Smooth days forgive, changeable days do not', p: 'On a smooth day the curve is a clean hill, and even one reading an hour gets its area to within a fraction of a percent. On a changeable day the readings jump up and down from minute to minute, and with two-hourly samples the estimate can be wrong by almost half. That is the trapezoidal rule\'s real lesson: its error depends on how sharply the curve bends between samples, so the right sampling rate depends on the data, not on habit.' },
        { kind: 'p', text: 'Every figure in this section is our own calculation from the agency\'s published file, using the timestamps exactly as given. Areas are in index-hours, a measure of the curve\'s size for this exercise, and the project makes no statement about sun exposure or any health matter.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Thinking about sampling',
      h2: 'What one sensor teaches about every measurement',
      intro: 'Whether it is a fitness tracker, a factory sensor or the data used to train an AI model, the same questions apply: how often to sample, and what you lose when you sample less.',
      body: [
        { kind: 'table', caption: 'Questions the Alice Springs project raises', head: ['Question', 'What the code shows', 'Where it matters'], rows: [
          ['Is the file complete?', '579 minutes missing, one long gap in June', 'Checking data before analysis'],
          ['How coarse can samples be?', 'Hourly is fine on most days, poor on some', 'Choosing a sampling rate'],
          ['Is the average error enough?', 'Mean 1.91% at hourly, worst 16.9%', 'Reporting worst cases, not just averages'],
          ['Which days are hardest?', 'Changeable days with jumpy readings', 'Error depends on the signal']
        ] },
        { kind: 'p', text: 'The trapezoidal rule is simple enough for a Year 10 student to write in a few lines of Python, yet it opens directly onto calculus, signal processing and the way scientific and machine learning systems decide how much data to keep. Seeing a 48.8% error appear on a single changeable day makes the point better than any formula.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Load a day of readings, draw it, measure its area with trapezoids, then thin the data and track the error.' },
          { h3: 'University students', p: 'Error bounds, Simpson\'s rule, adaptive integration and sampling theory, tested on a real year of data.' },
          { h3: 'Adults', p: 'Working with sensor and time-series data at work, and knowing when a summary can be trusted.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link with ARPANSA, the Alice Springs Town Council, the Northern Territory Government or the Australian Bureau of Statistics. ARPANSA publishes the readings and the bureau the census figures; the gap counts, areas and errors on this page come from our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Alice Springs',
      h2: 'Strong summer readings and a midday peak',
      intro: 'More patterns from the same year of data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Summer and winter', p: 'The average daily peak was 13.42 in January and 4.75 in June, the high and low months of the 2025 file.' },
          { h3: 'The biggest day', p: 'The largest daily area, 82.75 index-hours, came on 10 January; the smallest, 6.08, on 27 May.' },
          { h3: 'Peak time', p: 'In the file\'s timestamps the median daily peak fell between 12:18 and 12:50 in every month of the year.' }
        ] },
        { kind: 'spec', title: 'A good next step', p: 'Simpson\'s rule fits parabolas instead of straight lines between readings. Coding it alongside the trapezoids and comparing the two on the same thinned data is a natural follow-up, and it shows when a cleverer formula helps and when it does not.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading a file to measuring with confidence',
    intro: 'Ages are only a guide; the free lesson finds the right starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Data in Python', p: 'Reading a file of readings, counting gaps and drawing a simple graph of one day.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Numerical thinking', p: 'Areas, rates and errors, computed by hand-written Python and checked two ways.', courses: ['problem-solving-dsa-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'University', h3: 'Methods and accuracy', p: 'Integration rules, error analysis and sampling theory on real time series.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Trustworthy summaries', p: 'Turning sensor and log data into figures that hold up when someone checks them.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can compute an area instantly. Why should an Alice Springs learner code it?',
    intro: 'Because the hard part is not the arithmetic but knowing whether the answer can be trusted.',
    p1: 'Ask an assistant for the area under a curve and it will produce a tidy result from whatever samples it is given. It will not tell you, unless asked, that hourly samples are fine on a smooth day and wrong by almost half on a changeable one, or that the file has a 578-minute hole in June that quietly shrinks one day\'s total.',
    p2: 'Learners who have built the Alice Springs calculation check those things by reflex: is the data complete, how fast does it change, and what is the worst error, not just the average? Those questions apply to every number an AI system produces from measured data.',
    closer: 'In 2026 any tool can integrate a curve, and the value lies in an Alice Springs learner who knows when the result deserves belief.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Anywhere in town, the same live lesson',
    intro: 'All our lessons are online, so where a learner lives in Alice Springs makes no difference to the class they join.',
    cells: [
      { h3: 'No travel at all', p: 'A teenager at home and an adult after work can join the same group from different parts of town, with nothing but a computer.' },
      { h3: 'Your year level', p: 'Lessons are planned around the learner\'s school year and pause for holidays. Older students can link projects to their computing and maths subjects.' },
      { h3: 'The first lesson', p: 'The trial is a full class with real code, after which you receive a recommended level, course and weekly time; no card is asked for.' },
      { h3: 'Groups by level', p: 'Five to ten learners working at the same stage, from Alice Springs and other places, so groups are always full enough to run.' },
      { h3: 'Two lessons weekly', p: 'Two set lessons each week, about eight a month, with holiday and exam breaks agreed in advance.' },
      { h3: 'Four hours apart', p: 'Alice Springs is four hours ahead of India all year, so a 5pm lesson in town starts at 1pm for our teachers.' }
    ],
    spec: { title: 'Central Australian time stays put', p: 'The Northern Territory keeps Australian Central Standard Time all year, half an hour behind the east-coast states in winter. With no daylight saving, an Alice Springs lesson time never shifts against India.' }
  },

  fees: {
    h2: 'Alice Springs class fees',
    intro: 'All of it, in three items.',
    first: 'A complete first lesson at no cost, followed by a suggested level, course and time.',
    group: 'Approximately eight lessons a month, in a group of five to ten at one level.',
    private: 'Approximately eight lessons a month with a teacher, one to one.',
    closer: 'Outside India we invoice in US dollars, so every Alice Springs family pays the same as families in any other Australian town and there is no local price list. Nothing is charged until the trial has settled a course and a time; the pricing page explains holidays, missed lessons and changing between formats.'
  },

  reviewsH2: 'Google reviews from families we teach',

  book: {
    h2: 'What would the learner like to make?',
    intro: 'We need only an age and an interest to plan a first lesson. A Year 9 student might begin by drawing one day of readings; an adult might start straight away on the full sampling project.',
    success: 'Thank you. We will contact you soon about an Alice Springs class.'
  },

  faq: {
    h2: 'Alice Springs coding class questions',
    intro: 'What people in Alice Springs most often ask us first.',
    items: [
      { q: 'How many people live in Alice Springs?', a: 'The 2021 Census QuickStats give 25,912 residents for the Alice Springs Significant Urban Area. Their median age was 34, four years below the national median.' },
      { q: 'What is the trapezoidal rule?', a: 'It is a way to estimate the area under a curve from a list of measured points. Neighbouring points are joined with straight lines, each slice becomes a trapezoid, and the trapezoid areas are added. Closer points usually give a better estimate.' },
      { q: 'What is the Alice Springs UV project?', a: 'Learners load ARPANSA\'s one-minute UV index readings for 2025, measure the area under each day\'s curve with trapezoids, then repeat it using fewer readings. Hourly samples are within 0.16% on a typical day but can be 16.9% out on the worst one.' },
      { q: 'Is the project about sun safety?', a: 'No. The readings are used only as a measured curve for practising numerical methods. Nothing on this page gives advice or makes claims about sun exposure or health.' },
      { q: 'Can senior students get help with computing or maths?', a: 'Yes. Year 11 and 12 learners get lessons planned around their subjects and school calendar. Any assessed work must be their own; we teach methods and never write marked work.' },
      { q: 'What time are lessons?', a: 'Times are agreed at the trial and written in Alice Springs time. Because the Northern Territory has no daylight saving, our teachers in India are always four hours behind.' },
      { q: 'Do you teach younger children?', a: 'Yes, from age six. Younger children begin with Scratch and visual programs; the sampling project on this page is meant for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Alice Springs?', a: 'No, and none is claimed. All lessons are live and online and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number shown is Indian.', boiler: true },
      { q: 'What do Alice Springs coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Alice Springs and Northern Territory learners',
    html: 'Territory learners can also read <a class="cg-inline-link" href="/online-coding-and-python-classes-in-darwin">online coding and Python classes in Darwin</a> and our <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-territory">Northern Territory page</a>. Anyone curious about contests will find the <a class="cg-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a> useful, and the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia hub</a> lists every other place and topic.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Alice Springs and Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-darwin', label: 'Darwin' },
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/coding-and-ai-classes-in-northern-territory', label: 'Northern Territory' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-alc .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.3vw, 2.6rem); }
.cg-root.cg-alc .cg-hero h1 { font-weight: 800; letter-spacing: -0.023em; line-height: 1.04; }
.cg-root.cg-alc .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-alc .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-alc .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.013em; }
.cg-root.cg-alc .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2rem); }
.cg-root.cg-alc .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-alc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-alc .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-alc .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Alice Springs, ABS Census 2021 QuickStats, Significant Urban Area 7001 (read 9 October 2026): 25,912 people; median age 34 (Northern Territory 33, Australia 38); 6,213 families; 11,621 private dwellings; average 2.6 people per household; dwelling structure, occupied private dwellings: separate house 5,709 (64.2 percent; NT 66.8; Australia 72.3), semi-detached, row or terrace house, townhouse 2,482 (27.9 percent; NT 12.7; Australia 12.6), flat or apartment 375 (4.2 percent; NT 17.9; Australia 14.2); occupation: Professionals 3,486 (25.4 percent; NT 22.0; Australia 24.0); Bachelor Degree level and above 5,582 (27.2 percent; NT 21.5; Australia 26.3); aged 5 to 9 1,817 (7.0 percent); aged 10 to 14 1,716 (6.6 percent); aged 15 to 19 1,490 (5.8 percent). IANA tz database: Australia/Darwin UTC+9:30, no daylight saving; Asia/Kolkata UTC+5:30. Northern Territory education department pages returned 403 and were not used.',
    localProject: 'Trapezoidal rule numerical integration and sampling step. ARPANSA, Ultraviolet Radiation Index - Alice Springs (data.gov.au dataset 532e300b-89a7-4b37-9ec1-f0476ccdce94, Creative Commons Attribution 2.5 Australia), resource uv-alice-springs-2025.csv (columns Date-Time, Lat -23.80, Lon 133.89, UV_Index), downloaded 9 October 2026. 525,021 one-minute readings of 525,600 minutes; gaps: 578 minutes after 2025-06-03 23:30 and 1 minute after 2025-12-11 05:18; 362 complete days. Maximum UV_Index 15.43 at 2025-01-09 12:23. Daily trapezoid area on 1-minute data, index-hours: maximum 82.75 (2025-01-10), minimum 6.08 (2025-05-27), median 42.39. Subsampled trapezoids (every k minutes, endpoint 23:59 included) versus 1-minute area over 362 complete days, mean / median / maximum absolute percent error: k=5 0.219 / 0.028 / 2.01; k=10 0.471 / 0.050 / 4.86; k=30 1.088 / 0.093 / 12.98; k=60 1.907 / 0.155 / 16.85; k=120 3.334 / 0.293 / 48.8. Mean daily maximum by month: Jan 13.42, Feb 13.15, Mar 11.15, Apr 8.70, May 5.69, Jun 4.75, Jul 5.24, Aug 6.78, Sep 8.85, Oct 9.80, Nov 11.60, Dec 13.21. Median minute of daily maximum by month (file timestamps): 12:18 (Nov) to 12:50 (Feb).',
    requiredMentions: [
      '25,912',
      '6,213',
      '11,621',
      '5,582',
      '2,482',
      '525,021',
      '82.75 index-hours',
      '48.8%',
      'trapezoidal rule'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Alice Springs Significant Urban Area (7001): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/7001' },
      { claim: 'ARPANSA, Ultraviolet Radiation Index - Alice Springs, one-minute UV Index data (Creative Commons Attribution 2.5 Australia).', url: 'https://data.gov.au/data/dataset/ultraviolet-radiation-index-alice-springs' },
      { claim: 'IANA time zone database, australasia file: Australia/Darwin.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any health, sun-safety or exposure advice based on UV readings: excluded by the cluster rules; the data is used only as a measured curve.',
      'The time zone of the file\'s timestamps: the dataset does not state it, so peak times are quoted as they appear in the file.',
      'Why the June gap occurred: not stated by the publisher, so no reason is given.',
      'Northern Territory school term dates and curriculum facts: the Territory\'s education pages returned 403 and were not circumvented.',
      'Bureau of Meteorology station facts: the Bureau\'s pages returned 403 and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language, religion and Indigenous status figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with ARPANSA, the Alice Springs Town Council, the Northern Territory Government or the ABS.'
    ]
  }
};
