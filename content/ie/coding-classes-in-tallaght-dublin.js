'use strict';
// Tallaght, Dublin 24 (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: EPA airquality.ie station EPA-44
// Tallaght (Old Bawn Road, operated by South Dublin County Council), hourly NO2 for 2025
// (provisional); TII Luas stops list; South Dublin County Council's own site (County Hall
// address); Rua Red, South Dublin Arts Centre; Old Bawn Community School. TII's daily
// traffic-count files returned 403 (Access Denied) and were not worked around. Spine:
// uncertainty by resampling. 2025 daily-mean NO2 on days with at least 18 hourly values:
// 339 days (243 weekday, 96 weekend); weekday 12.20, weekend 10.05, difference 2.15;
// bootstrap (10,000 resamples of days, seed 20250101) 95% interval 0.39 to 3.92; by day
// Sun 9.2, Mon 10.8, Tue 12.6, Wed 12.6, Thu 12.9, Fri 12.2, Sat 10.9; of 44 complete weeks
// the weekend was higher in 14; January alone: difference 0.69, interval -6.02 to 7.28.
// Scratchpad dist/boot.js. The South Dublin page owns the Tallaght LEA figures, the added
// 79,822, TU Dublin Tallaght and Tallaght University Hospital. Blanchardstown owns EPA
// limit-rule windows and coverage; this page does not test limits.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'TALLAGHT', blurb: 'Weekday air in Tallaght carries more nitrogen dioxide than weekend air, but one week can say the opposite. A page on measuring uncertainty.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-tallaght-dublin',
  code: 'tlg',
  accent: '#9B276B',
  accentRationale: 'Tallaght: a deep plum from the widened solver search, apart from the South Dublin purple, the Lucan teal and the run of dark blues on nearby districts',
  pageType: 'district',
  place: {
    name: 'Tallaght',
    eyebrow: 'Tallaght, Dublin 24',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Dublin' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-south-dublin', name: 'South Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'South Dublin', href: '/coding-classes-in-south-dublin' },
    { label: 'Lucan', href: '/coding-classes-in-lucan-dublin' }
  ],
  routeLabel: 'Tallaght, Dublin 24, Ireland',
  title: 'Coding Classes in Tallaght, Dublin 24 | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Tallaght and Dublin 24, ages 6 to 67, in small groups at one level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Tallaght, with a data project on weekday and weekend air and how sure a year of readings can make us.',
  twitterDescription: 'Live online coding, Python and AI for Tallaght, Dublin 24, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Tallaght',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Tallaght, Dublin 24, taught live in English to small same-level groups or one to one.'
  },

  h1: 'Coding classes in Tallaght',
  capsuleQ: 'What are the best coding classes in Tallaght?',
  capsule: 'Tallaght classes are taught by a real teacher in real time over video, either to a small cluster of learners who share a level or to a single learner, normally twice a week, and learners from six to sixty-seven are all accepted. Nobody needs to leave home. The introductory lesson is free, and the monthly fee afterwards is USD 100 for group teaching or USD 150 for one-to-one teaching.',
  lead: 'On the Old Bawn Road, South Dublin County Council runs an air monitoring station that reports nitrogen dioxide to the Environmental Protection Agency every hour. Average its 2025 readings day by day and weekdays come out higher than weekends, 12.20 against 10.05 micrograms per cubic metre. That sounds settled, until you look at single weeks: in 14 of the 44 complete weeks of the year the weekend was the higher of the two. So is the weekday difference real, and how big might it be? This page teaches a learner to answer that with resampling, a technique that measures how much a result would wobble if the year had turned out slightly differently.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Tallaght.',

  picks: {
    eyebrow: 'Courses for Tallaght',
    h2: 'Starting points for Tallaght learners',
    intro: 'One course per age band, and the free first lesson, taken with its teacher, confirms the choice or changes it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and chance: rolling dice many times and watching the average settle down.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with random numbers and averages, and a first sense of how much results jump about.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real air readings in Python: daily averages, group comparisons and bootstrap intervals.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who compare groups at work and need to say how confident the difference is.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Weekdays look worse than weekends, but how sure is that?',
      intro: 'Daily average nitrogen dioxide at the EPA\'s Tallaght station in 2025, in micrograms per cubic metre, using only days with at least 18 hourly readings. The readings are provisional, as published on airquality.ie.',
      body: [
        { kind: 'table', caption: 'Tallaght nitrogen dioxide in 2025, weekdays against weekends', head: ['Measure', 'Weekdays', 'Weekends'], rows: [
          ['Days counted', '243', '96'],
          ['Average of daily means', '12.20', '10.05'],
          ['Difference, with 95% interval', '2.15 (0.39 to 3.92)', '']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Day by day', p: 'Sundays averaged 9.2 and Saturdays 10.9. Mondays sat at 10.8, and Tuesday to Thursday ran between 12.6 and 12.9, with Friday at 12.2. The pattern rises into the week and falls away at the weekend.' },
          { h3: 'A week at a time', p: 'Of 44 weeks with all seven days measured, the weekend was higher in 14. One week in early March showed the weekend ahead by 14.39; another two weeks later showed weekdays ahead by 12.21. Single weeks swing widely either way.' },
          { h3: 'A month at a time', p: 'January alone gives a weekday lead of just 0.69, and its resampled interval runs from -6.02 to 7.28, comfortably including zero. With 23 weekdays and 8 weekend days, a month cannot tell the two apart.' }
        ] },
        { kind: 'callout', h3: 'Put an interval on every difference you report', p: 'A difference between two averages is only half an answer; the other half is how much it could move with different luck in the data. Resampling gives that half without heavy formulas. Draw a new set of days, with replacement, from the ones you have, recompute the difference, and repeat ten thousand times. The middle 95 percent of those differences is the interval. For the full year it runs from 0.39 to 3.92, entirely above zero, so the weekday lead is unlikely to be luck. For January alone it straddles zero, so that month on its own proves nothing either way.' },
        { kind: 'p', text: 'The learner\'s program groups the hourly readings into days, keeps days with at least 18 hours of data, labels each as weekday or weekend, and averages each group. The bootstrap is a short loop: pick 243 weekdays and 96 weekend days at random from the real ones, allowing repeats, take the difference of the two averages, store it, and do that 10,000 times with a fixed random seed so the result can be repeated exactly. Sorting the stored differences and reading off the 2.5th and 97.5th percentiles gives the interval. Running the same code on a single month shows how much wider the interval becomes when there is less data.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What resampling assumes', p: 'The simple bootstrap treats days as independent, and they are not: one day\'s average and the next correlate at 0.59. Resampling whole weeks keeps neighbouring days together and gives an interval of 0.56 to 3.71, still entirely above zero. A good report says which version it used.' },
          { h3: 'Not a limit test', p: 'This page does not compare Tallaght with any legal limit and makes no statement about health. It asks a narrower question, whether weekdays differ from weekends, and how sure one year of readings lets us be.' },
          { h3: 'Provisional readings', p: 'The EPA publishes these as provisional data that may change after validation. Any learner repeating the project later should expect small differences in the numbers, and the same conclusion.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Tallaght, named',
      h2: 'Tallaght, in the words of its own institutions',
      intro: 'Facts that each body publishes itself, with an eircode where it gives one.',
      body: [
        { kind: 'table', caption: 'Named places in Tallaght', head: ['Place', 'What its own source says'], rows: [
          ['South Dublin County Council', 'County Hall, Tallaght, D24 A3XC'],
          ['Rua Red, South Dublin Arts Centre', 'Plás Pharthalán, Tallaght, D24 KV8N'],
          ['Old Bawn Community School', 'Dún An Óir, Old Bawn, D24 HP38'],
          ['EPA Tallaght station', 'Old Bawn Road, run by the county council'],
          ['Tallaght Luas stop', 'Park and ride, and cycle and ride']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The council\'s home', p: 'South Dublin County Council gives its own address as County Hall, Tallaght, Dublin 24. The same council operates the Old Bawn Road air station that supplies this page\'s data.' },
          { h3: 'The arts centre', p: 'Rua Red describes itself as the South Dublin Arts Centre, with a gallery open Monday to Saturday from 10am to 6pm and the building open to 9.30pm on weekdays.' },
          { h3: 'On the Red Line', p: 'TII\'s list of Luas stops flags Tallaght for both park and ride and cycle and ride. Old Bawn Community School sits in the Old Bawn area the air station is named for.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Tallaght, because the page uses only facts that named bodies publish about the place itself; the electoral area figures belong to the South Dublin page. The air project says nothing about health or legal limits.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'How Tallaght learners spend a week',
      intro: 'Two lessons in a usual week, and each is taught live by a teacher who stays for all of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children start with block code and dice games, rolling hundreds of times to see how averages settle, the first step towards resampling.' },
          { h3: 'Teenagers', p: 'Teenagers move on to Python, websites, AI projects and real monitoring data such as the Tallaght air station.' },
          { h3: 'Adults', p: 'Adults can begin as beginners; lesson one finds the right course.' }
        ] },
        { kind: 'p', text: 'Hourly readings come from the EPA\'s airquality.ie; the daily averages, intervals and weekly comparisons are our own calculations, run on 20 September 2026. The council, the arts centre, the school and TII are quoted from their own pages and data.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From rolling dice to a bootstrap interval',
    intro: 'Think of the bands as a first estimate; the first lesson shows the true starting level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Many rolls', p: 'Block-coded dice that roll hundreds of times and show the average settling.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Random samples', p: 'Python that draws random samples and compares their averages.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Bootstrap', p: 'Resampling real data to put an interval around a difference.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Confident comparisons', p: 'Group differences at work reported with an interval, not just a number.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant whether Tallaght\'s weekdays are more polluted',
    intro: 'It will usually compare two averages and say yes.',
    p1: 'Give an AI assistant a week of Tallaght readings and ask whether weekdays are worse, and it will compare the two averages and answer, sometimes yes, sometimes no, depending on the week. Each answer is arithmetic done correctly on too little data.',
    p2: 'Having run the bootstrap, the learner asks the assistant how many days lie behind each average, what interval surrounds the difference, and whether the interval includes zero. With those three questions the assistant\'s answer becomes a measured finding rather than a coin toss.',
    closer: 'Comparing two averages takes a line of code. Knowing how far to trust the gap is the skill.',
    blogAnchor: 'what makes coding worth learning now'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Tallaght',
    intro: 'The working arrangements.',
    cells: [
      { h3: 'With a teacher, live', p: 'The teacher stays on the call throughout, watching each learner\'s code and helping as it is written.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at the same stage, from Dublin 24, elsewhere in Ireland and abroad.' },
      { h3: 'A regular pair', p: 'About eight lessons a month, held at two weekly times fixed when the course starts.' },
      { h3: 'Holidays planned', p: 'Mid-term breaks, holidays and exam weeks are built into the plan in advance.' },
      { h3: 'Home kit', p: 'Any laptop or desktop that runs a browser, a headset or speakers with a mic, and broadband steady enough for a video call.' },
      { h3: 'One-to-one', p: 'Private lessons for a learner who is ahead of every group, needs a gentler pace, or has unusual free hours.' }
    ],
    spec: { title: 'No premises', p: 'We have no centre in Tallaght, in South Dublin or anywhere in Ireland. All lessons are on video and are the same wherever the learner logs in.' }
  },

  fees: {
    h2: 'Fees in Tallaght',
    intro: 'Nothing left out.',
    first: 'An opening lesson and level check, at no charge.',
    group: 'A month in a group of five to ten at one stage, roughly eight live lessons.',
    private: 'A month of one-to-one lessons on the same timetable.',
    closer: 'Families living outside India all pay one monthly fee in US dollars. The free lesson carries no commitment, the first charge comes with the start of the course, and holidays, missed lessons and changes between group and private teaching are set out on the pricing page.'
  },

  reviewsH2: 'What six families posted on Google, unedited',

  book: {
    h2: 'Book a free first lesson in Tallaght',
    intro: 'Tell us how old the learner is and what grabs their interest, and the first hour will be designed for them. It could end with a game, a program that runs, or a difference with an honest interval around it.',
    success: 'Thank you. We will be in touch shortly to arrange the lesson.'
  },

  faq: {
    h2: 'Tallaght coding class questions',
    intro: 'What Tallaght families tend to ask.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Tallaght?', a: 'No. Lessons happen live on video, and we have no premises in Ireland. A computer, working sound and a microphone, and a steady connection are all a learner needs. The phone number on this page is Indian.', boiler: true },
      { q: 'What is the air data project?', a: 'Comparing weekday and weekend nitrogen dioxide at the EPA\'s Tallaght station in 2025. Weekdays averaged 12.20 and weekends 10.05; a bootstrap puts the difference between 0.39 and 3.92, while a single month is too short to tell the two apart.' },
      { q: 'Is the air in Tallaght unhealthy?', a: 'The project does not say. It compares weekdays and weekends using provisional readings and makes no health or legal-limit claim; those questions belong to the EPA and the health authorities.' },
      { q: 'Why is there no population for Tallaght on this page?', a: 'Because none of the sources used here publishes one. The council, the EPA, TII, Rua Red and Old Bawn Community School each describe their own piece of Tallaght, and the electoral area counts live on the South Dublin page.' },
      { q: 'When do lessons run?', a: 'After school and into the evening on weekdays, and during weekend days. Every slot is given in Irish time. The teaching team works from India, where the clock reads five and a half hours later than Tallaght\'s in winter and four and a half later in summer, so the timetable only uses hours that work in both places.' },
      { q: 'Do you teach adults in Tallaght?', a: 'Yes, from beginners up, to the age of sixty-seven. An adult chooses a small group at their level or private lessons once the first lesson is done.' },
      { q: 'Will my child be grouped with local children?', a: 'Not deliberately. Groups are built on level, so classmates might be in Dublin 24 or a long way off.' },
      { q: 'What do coding classes in Tallaght cost?', a: 'The first lesson is free. Then a group place is USD 100 a month for around eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same timetable are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many learners are in each group?', a: 'Five to ten, grouped by level, pace and aim rather than age or address. When no group fits at a workable hour, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Tallaght and South Dublin',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-south-dublin">South Dublin</a> page covers the council area and its electoral figures, <a class="cg-inline-link" href="/coding-classes-in-lucan-dublin">Lucan</a> is the county\'s other district page, and <a class="cg-inline-link" href="/coding-classes-in-blanchardstown-dublin">Blanchardstown</a> has an air-monitoring project that tests legal limits instead. The <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lead everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tallaght, South Dublin and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-south-dublin', label: 'South Dublin' },
    { href: '/coding-classes-in-lucan-dublin', label: 'Lucan' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-tlg .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 3.14vw, 2.5rem); }
.cg-root.cg-tlg .cg-hero h1 { font-weight: 700; letter-spacing: -0.0176em; line-height: 1.06; }
.cg-root.cg-tlg .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.16rem; }
.cg-root.cg-tlg .cg-eyebrow { letter-spacing: 0.133em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tlg .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0128em; }
.cg-root.cg-tlg .cg-grid-3 { gap: clamp(1.06rem, 2.87vw, 2.2rem); }
.cg-root.cg-tlg .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-tlg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tlg .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-tlg .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 1.06rem; }
.cg-root.cg-tlg .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Tallaght, Dublin 24, named sources only (owner rule for districts), read 20 September 2026. EPA airquality.ie station EPA-44: "The Tallaght site is located on the The Old Bawn Road. This site is operated by South Dublin County Council. Monitoring is done using continuous monitors for Nitrogen Dioxide and Particulate Matter (PM10 and PM2.5)." (source repeats "the"). Hourly NO2 2025 downloaded in two six-month requests: 8,207 values. Our arithmetic (dist/boot.js): days with at least 18 hourly values 339 (243 weekday, 96 weekend); mean of daily means weekday 12.20, weekend 10.05, difference 2.15, ratio 1.214; by day Sun 9.2 (48 days), Mon 10.8 (49), Tue 12.6 (49), Wed 12.6 (50), Thu 12.9 (47), Fri 12.2 (48), Sat 10.9 (48); bootstrap 10,000 resamples of days with replacement, seed 20250101, 95% interval 0.39 to 3.92, share of resampled differences at or below zero 0.0084; 44 weeks with five weekday and two weekend days measured, weekend higher in 14, most negative week of 2025-03-03 (-14.39), most positive week of 2025-03-17 (+12.21), median +2.40; January only, 23 weekdays and 8 weekend days, difference 0.69, interval -6.02 to 7.28 (seed 7). Consecutive-day daily means: 334 pairs, lag-1 correlation 0.59. Block bootstrap resampling 52 calendar weeks (seed 20250102): 95% interval 0.56 to 3.71, share at or below zero 0.0047. TII Luas stops list: Tallaght (TAL) isParkRide 1, isCycleRide 1. South Dublin County Council own site: "County Hall Tallaght, Dublin 24, D24 A3XC". Rua Red: "Rua Red, South Dublin Arts Centre Plás Pharthalán Tallaght, D24 KV8N" (also printed Parthalán); gallery "Monday to Saturday: 10am" to "6pm"; building "Monday to Friday: 9.30am" to "9.30pm", Saturday 10am to 6pm (source separates times with dashes). Old Bawn Community School: "Dún An Óir, Old Bawn, Tallaght, Dublin 24, D24 HP38". TII daily traffic count files (data.tii.ie/Datasets/TrafficCountData) returned 403 Access Denied on 20 September 2026 and were not used.',
    localProject: 'Uncertainty by resampling. From a year of provisional hourly NO2 at the EPA\'s Tallaght station, the learner builds daily means (days with at least 18 hours), compares weekdays (243 days, 12.20) with weekends (96 days, 10.05), and bootstraps the difference 10,000 times with a fixed seed: 2.15 with a 95% interval of 0.39 to 3.92. Single weeks disagree (weekend higher in 14 of 44) and one month alone gives an interval of -6.02 to 7.28 that includes zero. Lessons: report an interval with every difference; less data means wider intervals; state the independence assumption (days are not fully independent). New family for the cluster: bootstrap and uncertainty intervals.',
    requiredMentions: [
      '12.20',
      '10.05',
      '2.15',
      '0.39',
      '3.92',
      '243',
      '96',
      '7.28',
      '14 of the 44',
      'D24 A3XC',
      'D24 KV8N',
      'D24 HP38'
    ],
    sources: [
      { claim: 'EPA airquality.ie, Tallaght station EPA-44: on the Old Bawn Road, operated by South Dublin County Council, continuous monitors for nitrogen dioxide and particulate matter; hourly readings for 2025, provisional.', url: 'https://airquality.ie/readings?station=EPA-44' },
      { claim: 'TII Luas stops list: Tallaght flagged park and ride and cycle and ride.', url: 'http://luasforecasts.rpa.ie/xml/get.ashx?action=stops&encrypt=false' },
      { claim: 'South Dublin County Council: County Hall, Tallaght, Dublin 24, D24 A3XC.', url: 'https://www.sdcc.ie/' },
      { claim: 'Rua Red, South Dublin Arts Centre: Plás Pharthalán, Tallaght, D24 KV8N; gallery open Monday to Saturday 10am to 6pm; building open to 9.30pm on weekdays.', url: 'https://www.ruared.ie/' },
      { claim: 'Old Bawn Community School: Dún An Óir, Old Bawn, Tallaght, Dublin 24, D24 HP38.', url: 'https://www.oldbawncs.ie/' }
    ],
    rejectedClaims: [
      'Any health or legal-limit statement about Tallaght\'s air: the page compares weekdays with weekends only; limits belong to the Blanchardstown page.',
      'Any cause for the weekday difference (traffic or otherwise): the data show the pattern, not its cause.',
      'TII traffic counts: the daily files returned 403 and were not worked around.',
      'Tallaght LEA figures, the added 79,822, TU Dublin Tallaght and Tallaght University Hospital: the South Dublin page owns them.',
      'Any population figure for Tallaght and any aggregation of census small areas: owner rule for district pages.'
    ]
  }
};
