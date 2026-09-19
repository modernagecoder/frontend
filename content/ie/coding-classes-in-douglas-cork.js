'use strict';
// Douglas, Cork (cg- district page, Ireland cluster, Phase 6). Named sources only (owner
// rule for districts), read 20 September 2026: OPW waterlevel.ie 5-minute levels at 19160
// Currach Club (the nearest OPW station, 3.09 km from Douglas Library), month file to
// 19 September 2026; Cork City Council library dataset; Cork City Council's page on the
// Douglas Flood Relief Scheme (including Togher Culvert); floodinfo.ie Douglas scheme page;
// Regina Mundi College's own site. Spine: sampling rate and aliasing. 10,061 readings,
// 15 Aug 06:00 to 19 Sep 06:15 2026, 23 slots missing; level -0.052 to 4.316 m;
// autocorrelation peak 12.35 h; 67 high waters, mean spacing 12.40 h (11.42 to 13.58),
// heights 2.824 to 4.316 m with their own autocorrelation peak at 28 high waters (about
// 14.5 days). One reading a day at 09:00: 35 values from 0.60 to 3.86 m, apparent cycle
// about 15 days (lag-15 correlation 0.94); a 12.42-hour rhythm read every 24 hours aliases
// to 14.77 days. Scratchpad dist/tide.js. The Cork city page owns Christ King Girls on the
// South Douglas Road; the County Cork page owns the 2019 boundary transfer.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'DOUGLAS', blurb: 'Read the tide once a day and it seems to rise and fall over a fortnight. A page on sampling rates and aliasing.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-douglas-cork',
  code: 'dgc',
  accent: '#173445',
  accentRationale: 'Douglas: a deep harbour blue from the widened solver search, apart from the Cork city plum, the Ballincollig brick and the Bray slate',
  pageType: 'district',
  place: {
    name: 'Douglas',
    eyebrow: 'Douglas, Cork',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cork City' },
      { type: 'AdministrativeArea', name: 'County Cork' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-cork', name: 'Cork' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Cork', href: '/best-coding-class-in-cork' },
    { label: 'Ballincollig', href: '/coding-classes-in-ballincollig-cork' }
  ],
  routeLabel: 'Douglas, Cork, Ireland',
  title: 'Coding Classes in Douglas, Cork | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for learners in Douglas, Cork, aged 6 to 67, taught live online in same-level groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Douglas, with a data project on the tide in Cork harbour and why reading it once a day tells the wrong story.',
  twitterDescription: 'Live online coding, Python and AI for Douglas, Cork, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Douglas',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Douglas, Cork, taught live in English to groups matched by level or one to one.'
  },

  h1: 'Coding classes in Douglas',
  capsuleQ: 'What are the best coding classes in Douglas?',
  capsule: 'A learner in Douglas has each lesson live on video with a teacher, sharing it with a few learners at the same level or having it one to one, generally on a pair of days each week, and the classes run for every age from six to sixty-seven. Nobody has to be driven anywhere. Lesson one costs nothing; then it is USD 100 a month for a group place or USD 150 a month for private lessons.',
  lead: 'The Office of Public Works records the water level at its Currach Club station every five minutes, about three kilometres from Douglas village, and the record shows the tide coming in and going out almost twice a day. Now imagine reading that same gauge only once a day, at nine in the morning. The 35 daily readings to 19 September 2026 would climb from 0.60 metres to 3.86 metres and back over about 15 days, a slow wave that looks like a feature of the water. It is mostly an artefact of reading too rarely: high water comes about 48 minutes later each day, so a fixed daily reading slides through the tide. This page teaches a learner to find the true rhythm in fast data and to see how slow sampling invents a false one.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Douglas.',

  picks: {
    eyebrow: 'Courses for Douglas',
    h2: 'First courses for Douglas learners',
    intro: 'Choose by age; the teacher uses the free first lesson to confirm the course or to suggest another.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and timing: a flashing light that looks still, or slow, when you only glance at it now and then.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with timed readings, taking every tenth or every hundredth value and seeing what changes.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Sensor series in Python: finding a period with autocorrelation, and showing what slow sampling hides.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults deciding how often to measure something at work, and what a monthly figure can miss.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Read the tide every five minutes, then once a day, and compare the stories',
      intro: 'Water levels at the OPW\'s Currach Club station from 15 August to 19 September 2026, in metres on the station\'s gauge. The fast record comes first; the once-a-day version keeps only the 09:00 reading from each day.',
      body: [
        { kind: 'table', caption: 'The same gauge, sampled two ways', head: ['Sampling', 'Readings', 'What it shows'], rows: [
          ['Every 5 minutes', '10,061', 'A rise and fall repeating every 12.35 hours'],
          ['Every high water', '67', 'Peaks 12.40 hours apart on average'],
          ['Once a day at 09:00', '35', 'A slow wave of about 15 days']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The real rhythm', p: 'Comparing the five-minute series with a copy of itself shifted in time, the match is strongest at a shift of 12.35 hours. The 67 separate high waters come, on average, 12.40 hours apart, never closer than 11.42 or further than 13.58.' },
          { h3: 'The invented one', p: 'Keep only the 09:00 reading and the level seems to rise and fall over about 15 days, between 0.60 and 3.86 metres. For a rhythm of about 12.42 hours read every 24 hours, the arithmetic predicts an apparent cycle of 14.77 days.' },
          { h3: 'Why it happens', p: 'Two high waters take about 24.8 hours, so each day\'s high water comes roughly 48 minutes after the day before. A reading fixed at 09:00 catches the tide a little later in its cycle every day, and that slow drift looks like a slow tide.' }
        ] },
        { kind: 'callout', h3: 'Measure faster than the thing you are studying changes', p: 'Any regular rhythm needs at least two readings per cycle before it can be seen at all, and in practice many more. Read a 12-hour tide once a day and the rhythm folds into a false slow wave, an effect called aliasing. The same trap catches monthly averages of weekly patterns, snapshots of a busy website taken at the same hour, and a school survey done on the same weekday every year. The fix is to match the sampling to the question, and when only slow data exist, to say plainly which rhythms they cannot see.' },
        { kind: 'p', text: 'There is a twist that makes this gauge a good teacher. The heights of the high waters themselves change too, from 2.824 metres to 4.316 metres in these 35 days, and they repeat on a rhythm of about 28 high waters, roughly 14.5 days. So the once-a-day series mixes two things, the tide\'s timing drifting past 09:00 and a real change in how high the tide climbs, and it has no way of separating them. The five-minute series separates them easily. The learner\'s program loads the file, lines the readings up on a five-minute grid so that the 23 missing slots stay missing, finds the period by autocorrelation, picks out each high water, and then rebuilds the once-a-day series to show the false wave appearing.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Unchecked readings', p: 'The OPW labels these readings provisional and not yet validated, and asks anyone reusing them to credit waterlevel.ie, which this page does. The lowest value, -0.052 metres, is a point on the station\'s own gauge scale, not a depth below the seabed.' },
          { h3: 'Which timestamps?', p: 'The file\'s times are used as published. Other fixed hours give the same slow wave: readings taken at 03:00, 15:00 or 21:00 each day also repeat most closely after 15 days, because every fixed hour drifts through the tide in the same way.' },
          { h3: 'Numbers will drift', p: 'waterlevel.ie replaces its month file as new readings arrive, so running the same code next month produces other values. What stays fixed is the method; the figures here stop on 19 September 2026.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Douglas, named',
      h2: 'Douglas, from the council, the school and the gauge',
      intro: 'Facts that each organisation publishes about itself, with the eircode where its own page or data gives one.',
      body: [
        { kind: 'table', caption: 'Named places in and near Douglas', head: ['Place', 'What its own source says'], rows: [
          ['Douglas Library', 'Douglas Community Centre, T12 C840'],
          ['Regina Mundi College', 'Endsleigh, Douglas Road, T12 HN93'],
          ['Douglas Flood Relief Scheme', 'Substantially complete in early March 2021'],
          ['Currach Club gauge', '3.09 km from the library, by haversine']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The flood scheme', p: 'Cork City Council says the Douglas works covered five areas, St Patrick\'s Mills, Douglas Community Park, Ravensdale, Ballybrack Woods and upstream of Donnybrook Commercial Centre, with planning permission from An Bord Pleanála in November 2017.' },
          { h3: 'Why it was built', p: 'The scheme\'s own site on floodinfo.ie says the Douglas area "was badly affected by flooding in June 2012", and that the works include measures along the Tramore River and Ballybrack stream.' },
          { h3: 'The library\'s hours', p: 'Cork City Council\'s library data lists Douglas Library as closed Monday to Wednesday, open from 2.30pm to 7.30pm on Thursday, 10am to 1pm on Friday and 10am to 4pm on Saturday.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Douglas, because the page uses only facts that named organisations publish about the place itself. The tide project uses provisional readings to teach sampling; it says nothing about flood risk, tides at any other place or the performance of the flood scheme.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Douglas learners, week by week',
      intro: 'Most weeks hold two lessons, each with a teacher live and teaching for the whole of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The youngest learners begin with block code and timing games, such as a light that seems to stop flashing if you only look at the right moments.' },
          { h3: 'Teenagers', p: 'Teenagers progress to Python, websites, AI projects and real sensor data like the Currach Club tide gauge.' },
          { h3: 'Adults', p: 'Adults may start with no coding at all; lesson one decides the route.' }
        ] },
        { kind: 'p', text: 'Currach Club readings come from the OPW through waterlevel.ie. We worked out the periods, counts and distance ourselves on 20 September 2026, and took the library, flood scheme and college details from those organisations directly.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a flashing light to an aliased tide',
    intro: 'These age bands are guidance; the first lesson shows where each learner fits.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Blink and miss', p: 'Block-coded animations that look different depending on how often you check them.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Every nth value', p: 'Python that thins out a list of readings and compares the result with the original.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Periods and aliasing', p: 'Autocorrelation, peak finding and rebuilding a slow sample from fast data.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'How often to measure', p: 'Choosing sampling rates at work and stating what a slow report cannot see.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant what the daily tide readings show',
    intro: 'Given only the 09:00 values, it will usually find the slow wave and explain it.',
    p1: 'Hand an AI assistant the 35 readings taken at 09:00 each day and ask what pattern they show, and it will likely describe a cycle of about two weeks and offer an explanation. The cycle is really there in those numbers. What the assistant cannot see is that most of it comes from reading a twelve-hour rhythm once a day.',
    p2: 'After building both versions, the learner asks the assistant how often the data were sampled, how long the fastest rhythm in the system might be, and whether the sampling is at least twice that fast. Those three questions catch aliasing before anyone draws a conclusion.',
    closer: 'Finding a cycle in data is easy. Knowing whether the data were collected fast enough to show it is the skill.',
    blogAnchor: 'why learning to code still counts in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Douglas',
    intro: 'The essentials, briefly.',
    cells: [
      { h3: 'Live instruction', p: 'A teacher is present for every minute, watching and guiding each learner\'s code as it is written.' },
      { h3: 'Level-matched', p: 'Groups of five to ten at one level, from Douglas, other Irish towns and further afield.' },
      { h3: 'Two set days', p: 'Roughly eight a month, fixed to two weekly times chosen together at the start.' },
      { h3: 'Holiday-aware', p: 'The course plan includes school holidays, mid-terms and exam weeks from the outset.' },
      { h3: 'Kit at home', p: 'A computer with a keyboard, a microphone and speakers or headphones, and broadband good enough for video.' },
      { h3: 'Solo lessons', p: 'One to one for learners who are ahead, need extra time, or can only attend at hours no group keeps.' }
    ],
    spec: { title: 'Taught remotely', p: 'We have no centre in Douglas, in Cork or anywhere in Ireland. Every lesson is given over video and runs the same way from any home.' }
  },

  fees: {
    h2: 'Lesson fees in Douglas',
    intro: 'Clear and complete.',
    first: 'A first lesson and level check, without charge.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of one-to-one lessons at the same weekly pace.',
    closer: 'Families outside India pay one monthly fee in US dollars, the same everywhere. The free lesson brings no obligation, billing starts with the course itself, and the pricing page explains holidays, missed lessons and a change between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews, reproduced as families wrote them',

  book: {
    h2: 'Book a free first lesson in Douglas',
    intro: 'Share the learner\'s age and what they are keen on, and the teacher will shape the first hour to fit. By the end there could be a small game, a program that runs, or one tide record seen two ways.',
    success: 'Thank you. We will be in touch soon to book the lesson.'
  },

  faq: {
    h2: 'Douglas coding class questions',
    intro: 'Questions Douglas families put to us.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Douglas?', a: 'No. Lessons are live on video and we have no premises in Ireland. A learner needs a computer, sound and a microphone, and a steady connection. The phone number here is in India.', boiler: true },
      { q: 'What does the tide project involve?', a: 'Taking 35 days of five-minute water levels from the OPW\'s Currach Club gauge, finding the tide\'s rhythm of about 12.4 hours, then keeping just one reading a day to show how it turns into a false wave of about 15 days.' },
      { q: 'Does the project say anything about flooding in Douglas?', a: 'No. It teaches sampling with provisional readings and says nothing about flood risk or the flood scheme\'s performance. Those are matters for the council and the OPW.' },
      { q: 'Why is there no population for Douglas here?', a: 'District pages carry only facts named bodies publish about the place, here the council, floodinfo.ie, the OPW and the college, and none of them publishes a head count for Douglas.' },
      { q: 'When are lessons?', a: 'On weekdays, from when school finishes into the evening; at weekends, during the day. Lessons are timetabled in Irish time, and because our teachers work from India, five and a half hours ahead in winter and four and a half in summer, only slots that suit both are offered.' },
      { q: 'Can adults sign up?', a: 'Yes, at any level, up to sixty-seven. Once the first lesson is done, an adult can pick a small group at their level or teaching on their own.' },
      { q: 'Will my child be with other Douglas children?', a: 'Maybe, but not by design. Groups follow level alone, which means classmates might live anywhere from Cork to another continent.' },
      { q: 'What do coding classes in Douglas cost?', a: 'The first lesson is free. A group place is then USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many are in a group?', a: 'Five to ten learners, grouped by level, pace and goals rather than age or address. When no group fits a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Douglas and Cork harbour',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> page covers the city Douglas is part of, <a class="cg-inline-link" href="/coding-classes-in-ballincollig-cork">Ballincollig</a> has its own river project upstream, and around the harbour there are pages for <a class="cg-inline-link" href="/best-coding-class-in-carrigaline">Carrigaline</a> and <a class="cg-inline-link" href="/best-coding-class-in-cobh">Cobh</a>. The <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> leads to the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Douglas, Cork and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/coding-classes-in-ballincollig-cork', label: 'Ballincollig' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-dgc .cg-hero-grid { align-items: start; gap: clamp(1.02rem, 3.21vw, 2.47rem); }
.cg-root.cg-dgc .cg-hero h1 { font-weight: 700; letter-spacing: -0.0181em; line-height: 1.05; }
.cg-root.cg-dgc .cg-capsule { border-top: 5px double var(--cg-accent); padding-top: 1.11rem; }
.cg-root.cg-dgc .cg-eyebrow { letter-spacing: 0.131em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dgc .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0147em; }
.cg-root.cg-dgc .cg-grid-3 { gap: clamp(1.05rem, 2.92vw, 2.18rem); }
.cg-root.cg-dgc .cg-table caption { letter-spacing: 0.027em; font-weight: 700; }
.cg-root.cg-dgc .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-dgc .cg-table th { letter-spacing: 0.018em; }
.cg-root.cg-dgc .cg-ladder-col { border-top: 5px double var(--cg-accent); padding-top: 1.04rem; }
.cg-root.cg-dgc .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Douglas, Cork, named sources only (owner rule for districts), read 20 September 2026. OPW waterlevel.ie station 19160 Currach Club, water level 0001, 5-minute month file: 10,061 readings 2026-08-15 06:00 to 2026-09-19 06:15, 23 missing slots on a 5-minute grid of 10,084; min -0.052, max 4.316, mean 2.100 m. Our arithmetic (dist/tide.js): autocorrelation peak between 10 and 14 hours at 148 steps (12.33 h), 12.35 h by parabolic interpolation, r 0.992; correlation at 6.21 h -0.979, at 24 h 0.920, at 24.84 h 0.979; 67 high waters (local maxima within 2 hours either side), mean spacing 12.40 h, minimum 11.42, maximum 13.58; heights 2.824 (2026-08-21 23:25) to 4.316 (2026-08-26 16:30); autocorrelation of heights peaks at 28 high waters (about 14.5 days, r 0.71). Daily 09:00 readings: 35 values, 0.60 (2026-09-09) to 3.86 (2026-09-02) m; correlation by lag in days peaks at 15 (0.94); alias of a 12.4206-hour rhythm sampled every 24 hours: 14.77 days. Station 51.9016 N 8.4438 W; Douglas Library 51.8741 N 8.4374 W; haversine 3.09 km. OPW disclaimer: "Data is provisional, unchecked, and has not been validated to remove invalid or improbable values."; CC-BY with reference to waterlevel.ie. Cork City Council library dataset: "Douglas Library", "Douglas Community Centre", Eircode printed "T12C840", Monday to Wednesday "Closed", Thursday 2.30 pm to 7.30 pm, Friday 10.00 am to 1.00 pm, Saturday 10.00 am to 4.00 pm (source uses dashes between the times). Cork City Council, Douglas Flood Relief Scheme (including Togher Culvert): works "in the townlands of Ardarrig, Ballybrack, Castletreasure, Douglas and Togher", "granted planning permission by An Bord Pleanála in November 2017"; Douglas works "in five distinct geographical areas as follows: St. Patricks Mills, Douglas Community Park, Ravensdale, Ballybrack Woods, and upstream of Donnybrook Commercial Centre"; "substantial completion was granted in early March 2021". floodinfo.ie Douglas scheme: "the Douglas area was badly affected by flooding in June 2012"; measures "along the Tramore River/Ballybrack stream". Regina Mundi College: "Regina Mundi College, Endsleigh, Douglas Road, Cork T12 HN93", registered charity.',
    localProject: 'Sampling rate and aliasing. From 35 days of 5-minute OPW water levels at Currach Club, the learner finds the tidal period by autocorrelation (12.35 hours) and by spacing of the 67 high waters (12.40 hours), then keeps only the 09:00 reading of each day: those 35 values rise and fall between 0.60 and 3.86 metres over about 15 days, matching the 14.77-day alias of a 12.42-hour rhythm sampled every 24 hours. High-water heights also vary (2.824 to 4.316 m) on about a 14.5-day rhythm, so the daily series mixes timing drift with a real change and cannot separate them. Lessons: sample at least twice per cycle, and in practice far more; say what a slow series cannot see. New family for the cluster: sampling rate and aliasing.',
    requiredMentions: [
      '10,061',
      '12.35',
      '12.40',
      '4.316',
      '2.824',
      '3.86',
      '14.77',
      '3.09',
      '48 minutes',
      '14.5 days',
      'T12 C840',
      'T12 HN93'
    ],
    sources: [
      { claim: 'OPW waterlevel.ie, station 19160 Currach Club, water level, 5-minute readings (month file).', url: 'https://waterlevel.ie/0000019160/0001/' },
      { claim: 'OPW waterlevel.ie disclaimer: "Data is provisional, unchecked, and has not been validated to remove invalid or improbable values."; reuse under CC-BY with reference to waterlevel.ie.', url: 'https://waterlevel.ie/' },
      { claim: 'Cork City Council library dataset: Douglas Library, Douglas Community Centre, T12 C840 (printed without the space), closed Monday to Wednesday, Thursday 2.30pm to 7.30pm, Friday 10am to 1pm, Saturday 10am to 4pm.', url: 'https://data.corkcity.ie/dataset/98f4a10c-7a31-49e2-bcd4-961bbbfa62d5/resource/db14a7fc-b9c8-4a24-b3f7-7987070dbb5e/download/library.csv' },
      { claim: 'Cork City Council, Douglas Flood Relief Scheme (including Togher Culvert): An Bord Pleanála permission November 2017; Douglas works in five areas (St Patrick\'s Mills, Douglas Community Park, Ravensdale, Ballybrack Woods, upstream of Donnybrook Commercial Centre); substantial completion early March 2021.', url: 'https://www.corkcity.ie/en/council-services/services/roads-and-traffic-management/sustainable-transport-schemes/projects-completed/douglas-flood-relief-scheme-including-togher-culvert/' },
      { claim: 'floodinfo.ie, Douglas Flood Relief Scheme: the Douglas area "was badly affected by flooding in June 2012"; measures along the Tramore River and Ballybrack stream.', url: 'https://www.floodinfo.ie/frs/en/douglas/home/' },
      { claim: 'Regina Mundi College: Endsleigh, Douglas Road, Cork, T12 HN93; registered charity.', url: 'https://www.reginamundicork.ie/' }
    ],
    rejectedClaims: [
      'Any flood-risk statement or claim about the flood scheme\'s performance: the page teaches sampling with provisional readings.',
      'Naming the tidal cycles (spring and neap) or giving astronomical causes: not sourced here; the page reports only what the readings show.',
      'Douglas Community School: its site could not be reached on 20 September 2026, so no details are printed.',
      'Christ King Girls Secondary School on the South Douglas Road: the Cork city page owns it; the 2019 boundary transfer belongs to the County Cork page.',
      'Any population figure for Douglas and any aggregation of census small areas: owner rule for district pages.'
    ]
  }
};
