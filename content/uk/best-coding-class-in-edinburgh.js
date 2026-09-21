'use strict';
// Edinburgh (cg- city page, UK cluster Phase 4). Spine: why Edinburgh's summer nights never get properly dark.
// Solar geometry computed for Edinburgh Castle (55.9486 N, 3.1999 W) for every day of 2026 with the NOAA/Meeus
// solar position formulas (declination, equation of time, hour angle), minute by minute, sunrise and sunset at
// -0.833 degrees (scratchpad edi/sun.py, sun2.py), checked against the US Naval Observatory Astronomical
// Applications API on 21 September 2026: 12 rise and set times on six dates, largest difference 1 minute.
// Results: longest day 17 h 37 m (day length 1,056 to 1,057 minutes from 20 to 23 June at minute resolution);
// shortest 6 h 57 m (21 December); London (51.5074 N) 16 h 38 m and 7 h 50 m on 21 June and 21 December; lowest
// midsummer sun 10.61 degrees below the horizon (London 15.06); nights with no astronomical darkness (sun never
// below -18) 96, from 4 May to 7 August (London 60, 22 May to 20 July); nights where the sun stays above -12: 40,
// 1 June to 10 July (London none). Using 0 degrees instead of -0.833 shortens the day by 12 minutes at the
// equinox and 16 at the solstices. Lesson family: solar geometry (declination, hour angle, spherical trigonometry,
// model validation against an authority). Screened free site-wide on 21 September 2026 (sunrise, solar elevation,
// astronomical darkness: 0 hits).
// Place facts read raw on 21 September 2026: National Records of Scotland, Scotland's Census 2022 first results,
// rounded population estimates data (published 14 September 2023; figures rounded to the nearest hundred): City of
// Edinburgh S12000036 512,700 usual residents (2011: 476,626), 238,900 households (2011: 223,051), 48,600 aged 20
// to 24 (Scotland 5,436,600 and 337,000), age shares 13.7% aged 0 to 14, 70.3% aged 15 to 64, 16.0% aged 65 and
// over (Scotland 15.3%, 64.6%, 20.1%), 1,946.5 residents per square kilometre (Scotland 69.8); Demography and
// migration chart data: 21.1% of Edinburgh households with dependent children. Royal Observatory Edinburgh, home
// and history (astronomy taught since the town's college opened in 1583; first Chair of Astronomy 1786; Calton
// Hill became the Royal Observatory in 1822; Thomas Henderson first Astronomer Royal for Scotland in 1834, first
// to measure parallax; new observatory on Blackford Hill in 1896; today a university astronomy group, a UK
// research council establishment and a visitor centre on one site). Historic Environment Scotland, Edinburgh
// Castle history (St Margaret's Chapel, built by King David I in honour of Queen Margaret, who died there in 1093,
// is Edinburgh's oldest building; part of the Old and New Towns of Edinburgh World Heritage Site).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'EDINBURGH', blurb: 'Home of a Royal Observatory since 1822, with a project that computes why Edinburgh\'s summer nights never go properly dark.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-edinburgh',
  code: 'edi',
  accent: '#3E1F5C',
  accentRationale: 'Edinburgh: a deep heather violet from the solver (10.96:1 on every paper tint, dE 8.0 from the nearest used accent), apart from the Sheffield indigo and the Southampton plum',
  pageType: 'city',
  place: {
    name: 'Edinburgh',
    eyebrow: 'Edinburgh, Scotland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Edinburgh' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Edinburgh, Scotland',
  title: 'Best Coding Classes in Edinburgh | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Edinburgh learners aged 6 to 67, from Leith and Portobello to Morningside and Corstorphine. First lesson free.',
  ogDescription: 'Coding and AI lessons for Edinburgh, on a page that computes the city\'s sunrise and sunset for every day of 2026 and shows why its summer nights stay pale.',
  twitterDescription: 'Edinburgh learners from six to sixty-seven can learn coding and AI with us live online, and the first lesson is free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Edinburgh Live Online Coding, Maths and AI Classes',
    description: 'Live online coding, Python, AI, data and mathematics for Edinburgh children, teenagers and adults, taught in English in level-based groups or one to one.'
  },

  h1: 'Coding classes in Edinburgh',
  capsuleQ: 'What are the best coding classes in Edinburgh?',
  capsule: 'Scotland\'s Census 2022 counted about 512,700 usual residents in the City of Edinburgh, up from 476,626 in 2011, and 70.3% of them were aged 15 to 64 against 64.6% across Scotland. The city has had a Royal Observatory since 1822, first on Calton Hill and since 1896 on Blackford Hill. Modern Age Coders teaches Edinburgh learners aged six to sixty-seven in live online lessons, one to one or in a group of five to ten at one level, with teachers based in India and lesson times fixed in UK hours. The first lesson is free. From the second month on, a group place is USD 100 and private teaching USD 150, each per month.',
  lead: 'On Edinburgh\'s longest day in 2026 the sun is above the horizon for 17 hours 37 minutes, about an hour longer than in London; on the shortest it manages 6 hours 57 minutes. For 96 nights, from 4 May to 7 August, the sky never becomes truly dark, because the sun never sinks the 18 degrees below the horizon that astronomers call astronomical darkness. At midsummer it dips only 10.6 degrees. All of that follows from a few lines of spherical trigonometry: the sun\'s position in the sky, the time of day and Edinburgh\'s latitude of almost 56 degrees north. We wrote a program that works out the sun\'s height every minute of every day of the year, then checked its sunrises and sunsets against the United States Naval Observatory. On every date tested it agreed to within a minute. Building that model, and proving it right, is the lesson Edinburgh\'s sky teaches our teenage learners.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Edinburgh.',

  picks: {
    eyebrow: 'Course picks for Edinburgh',
    h2: 'Four courses for the observatory city',
    intro: 'Let the learner\'s interests guide the choice. Every course starts with a free live lesson, and no card is needed.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python and turtle graphics for 9 to 12 year olds, where a drawing of the sun climbing and setting is a natural first model.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Geometry, angles and coordinates built in Python, the groundwork for any calculation of where the sun is.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Secondary years', note: 'Algebra to calculus with trigonometry at its heart, the mathematics inside every sunrise calculation.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python from zero to advanced for adults, with models checked against real published data as a habit from the start.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Edinburgh today',
      h2: 'A dense capital with a large working-age population',
      intro: 'From Scotland\'s Census 2022, published by National Records of Scotland. Counts are rounded to the nearest hundred, so they are quoted as published and never added together.',
      body: [
        { kind: 'table', caption: 'City of Edinburgh council area, Scotland\'s Census 2022', head: ['Measure', 'Edinburgh', 'Scotland'], rows: [
          ['Usual residents, rounded', '512,700', '5,436,600'],
          ['Usual residents in 2011', '476,626', 'Not compared'],
          ['Households, rounded', '238,900', 'Not compared'],
          ['Aged 20 to 24, rounded', '48,600', '337,000'],
          ['Share aged 0 to 14', '13.7%', '15.3%'],
          ['Share aged 15 to 64', '70.3%', '64.6%'],
          ['Share aged 65 and over', '16.0%', '20.1%'],
          ['Residents per square kilometre', '1,946.5', '69.8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Working-age heavy', p: 'People aged 15 to 64 made up 70.3% of Edinburgh\'s residents in 2022, compared with 64.6% for Scotland as a whole.' },
          { h3: 'Fewer at both ends', p: 'Children aged 0 to 14 were 13.7% and people aged 65 and over 16.0%, both below Scotland\'s 15.3% and 20.1%.' },
          { h3: 'Tightly packed', p: 'With 1,946.5 residents per square kilometre, Edinburgh is far denser than Scotland\'s average of 69.8.' }
        ] },
        { kind: 'p', text: 'National Records of Scotland also reports that 21.1% of Edinburgh households had dependent children in 2022. Learners here can be at any stage, from a P5 pupil in Portobello making a first animation to an S4 student in Corstorphine working towards National 5 Computing Science, or an adult in Leith learning Python for work, and each joins a group of five to ten at their own level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Stars over the city',
      h2: 'Two observatories and a castle rock',
      intro: 'From the Royal Observatory Edinburgh and Historic Environment Scotland.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1583', p: 'The Royal Observatory Edinburgh says astronomy has been taught in the city since the town\'s college opened in 1583, and that the University\'s first Chair of Astronomy was established in 1786.' },
          { h3: '1822', p: 'Calton Hill became the Royal Observatory during George IV\'s visit to Scotland that year. In 1834 Thomas Henderson became the first Astronomer Royal for Scotland; the Observatory calls him the first astronomer to measure parallax and so the distance to the stars.' },
          { h3: '1896', p: 'A new Royal Observatory on Blackford Hill came into being. Today it brings together a university astronomy research group, a UK research council establishment and a visitor centre on a single site.' }
        ] },
        { kind: 'p', text: 'Down in the city, Historic Environment Scotland describes St Margaret\'s Chapel in Edinburgh Castle, built by King David I in honour of his mother Queen Margaret, who died at the castle in 1093, as Edinburgh\'s oldest building. We have no connection with the Royal Observatory, the University of Edinburgh or Historic Environment Scotland. We mention them because Edinburgh has been calculating the sky for centuries, and the project on this page is a small, modern piece of that tradition.' },
        { kind: 'spec', title: 'The authority we checked against', p: 'The United States Naval Observatory publishes sunrise and sunset times for any place and date through its Astronomical Applications service. We compared our program with it at Edinburgh Castle on six dates across 2026, twelve times in all, and the largest disagreement was one minute.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Sunrises, sunsets and pale summer nights',
      intro: 'Solar geometry turns the date, the time and a latitude into the sun\'s height above or below the horizon. We ran it for every minute of 2026 at Edinburgh Castle.',
      body: [
        { kind: 'table', caption: 'Edinburgh Castle in 2026, computed and checked against the US Naval Observatory', head: ['Measure', 'Result'], rows: [
          ['Longest day, around the June solstice', '17 hours 37 minutes'],
          ['Shortest day, 21 December', '6 hours 57 minutes'],
          ['London on 21 June and 21 December', '16 hours 38 minutes and 7 hours 50 minutes'],
          ['Lowest sun at midsummer', '10.6 degrees below the horizon'],
          ['Nights without astronomical darkness', '96, from 4 May to 7 August'],
          ['Nights when the sun stays within 12 degrees of the horizon', '40, from 1 June to 10 July'],
          ['Largest gap from the Naval Observatory', '1 minute, across 12 times tested']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Where is the sun?', p: 'Two angles fix it: the declination, which swings between about 23.4 degrees north and south over the year, and the hour angle, which turns 15 degrees every hour.' },
          { h3: '2. Tilt it to Edinburgh', p: 'One line of spherical trigonometry combines those angles with Edinburgh\'s latitude, 55.95 degrees north, to give the sun\'s height at any moment.' },
          { h3: '3. Scan and compare', p: 'Step through every minute of every day, note where the height crosses the sunrise line, and compare the times with the Naval Observatory\'s.' }
        ] },
        { kind: 'callout', h3: 'Why the nights stay pale', p: 'At midsummer the sun passes only 10.6 degrees below Edinburgh\'s northern horizon at the darkest point of the night. Astronomers need it 18 degrees down for true darkness, so for 96 nights the sky never quite goes black, and for 40 nights around midsummer the sun never even reaches 12 degrees down. London, about 4.4 degrees further south, loses astronomical darkness on only 60 nights and gets past 12 degrees every night of the year.' },
        { kind: 'p', text: 'Two details decide whether the program agrees with the observatory. Sunrise is defined as the moment the top edge of the sun appears, allowing for the air bending its light, which puts the sun\'s centre 0.833 degrees below the horizon; use zero instead and every day comes out 12 to 16 minutes too short. And times need one clock: the program works in UTC and converts to British Summer Time only for display, because mixing the two silently shifts half the year by an hour.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Checking a model against the sky',
      h2: 'Five checks for code that models the real world',
      intro: 'Learned on sunrise times, used afterwards on satellite passes, solar panel planning, navigation apps, game physics and any program that turns angles into positions.',
      body: [
        { kind: 'table', caption: 'Building a model you can prove', head: ['Check', 'What it looks like', 'What it prevents'], rows: [
          ['Test against an authority', 'Compare with an independent published source such as the Naval Observatory', 'A confident answer nobody has checked'],
          ['Use one clock', 'Compute in UTC and convert only when displaying', 'Half the year silently out by an hour'],
          ['Define the event', 'State what sunrise means, including the 0.833-degree allowance', 'Answers that differ by minutes for no visible reason'],
          ['Handle the edge cases', 'Allow for nights when the sun never reaches a threshold at all', 'Programs that crash or invent a time on midsummer nights'],
          ['Report the precision', 'Say the model agrees to within a minute, and claim no more', 'Seconds printed that the method cannot support']
        ] },
        { kind: 'p', text: 'The fourth check is where Edinburgh differs from cities further south. On midsummer nights here the sun simply never reaches 12 degrees below the horizon, so a program asking when nautical twilight ends has no answer to give. Code written and tested only in London would never meet that case; Edinburgh learners meet it in their first week.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Shadows measured in the playground through the day, and a short program that draws the sun rising and setting.' },
          { h3: 'Teenagers', p: 'The solar formulas coded in Python, a whole year computed, and every answer checked against the Naval Observatory.' },
          { h3: 'Adults', p: 'Physical models at work, from energy to logistics, validated against published data before anyone relies on them.' }
        ] },
        { kind: 'p', text: 'We are not connected with National Records of Scotland, the Royal Observatory Edinburgh, Historic Environment Scotland or the United States Naval Observatory. The census data and observatory times are published for public use; the model and its results are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From playground shadows to a checked solar model',
    intro: 'Ages are a first guess only; the free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Shadows and daylight', p: 'Watching shadows shorten and lengthen, timing daylight through the seasons and animating a simple sunrise.', courses: ['elementary-mathematics-complete-masterclass', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Angles and time', p: 'Degrees, compass bearings and clocks, and a first program that turns an angle into a position on screen.', courses: ['maths-through-coding', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Ages 14 to 18', h3: 'Solar geometry in Python', p: 'Trigonometry turned into code, a year of sunrises computed and a model tested against an authority.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Models checked against reality', p: 'Scientific and engineering calculations built carefully, with precision stated and validation part of the job.', courses: ['college-mathematics-complete-masterclass', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Your phone already knows when the sun sets. Why should an Edinburgh teenager calculate it?',
    intro: 'Because knowing how an answer is made is the only way to know when it is wrong.',
    p1: 'Every weather app shows sunrise and sunset, and an AI assistant will quote them in a moment. Ask why Edinburgh\'s June nights stay pale, though, or how the app decides the instant of sunrise, and a good answer needs the geometry underneath: declination, hour angle, a latitude of almost 56 degrees and a 0.833-degree allowance for the air. A learner who has built the calculation can check the app, and can spot an answer that is out by an hour because someone mixed up clocks.',
    p2: 'The same skills run through a great deal of software. Satellite tracking, solar panel planning, navigation and game physics all turn angles into positions with trigonometry and then check the results against measurement. Validating a model against an authority, as this project does with the Naval Observatory, is exactly how serious scientific code earns trust.',
    closer: 'So an Edinburgh teenager should still learn to program in 2026, in a city with a Royal Observatory since 1822: answers are cheap now, and the ability to build a model and prove it right is what makes a programmer worth trusting.',
    blogAnchor: 'why learning to code still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Leith, Morningside or Portobello, from home',
    intro: 'Edinburgh\'s hills and cobbles slow down every journey; a live online lesson skips the journey entirely.',
    cells: [
      { h3: 'Old Town to outer estates', p: 'A learner in Stockbridge and another in Gilmerton can share a lesson without either crossing the city.' },
      { h3: 'Scottish stages, Scottish names', p: 'P1 to P7, S1 to S6, National 5, Higher and Advanced Higher: we use the stage names Edinburgh schools use, and every lesson is in English.' },
      { h3: 'A first lesson that teaches', p: 'The free lesson covers a real task and ends by recommending a level, a course and a weekly time. No card details are needed.' },
      { h3: 'Groups built on level', p: 'Five to ten learners at one stage, from Edinburgh, elsewhere in the UK and abroad, so every level has a slot that works.' },
      { h3: 'Twice a week, fixed times', p: 'Two lessons a week at the same times, around eight a month, with holiday and exam breaks agreed with the teacher in advance.' },
      { h3: 'Taught from India', p: 'India Standard Time never shifts, so our teachers are four and a half hours ahead of Edinburgh in British Summer Time and five and a half in winter; after-school and evening lessons fall inside their day.' }
    ],
    spec: { title: 'Across the Lothians', p: 'Families in Musselburgh, Dalkeith or Livingston join exactly the same groups, because every lesson is online and groups are formed by level rather than postcode.' }
  },

  fees: {
    h2: 'Edinburgh lesson fees',
    intro: 'A free first lesson and then one monthly price.',
    first: 'A full lesson at no cost, ending with a level, a recommended course and a proposed weekly time.',
    group: 'Around eight live lessons a month, with five to ten learners working at one level.',
    private: 'Around eight live lessons a month for one learner and one teacher.',
    closer: 'Families outside India all pay the same US dollar fee, so Bruntsfield and Craigmillar pay exactly the same, and we do not publish prices in pounds. Nothing is billed until the free lesson has agreed a course and a time, and the pricing page covers pauses, missed lessons and moving between group and one-to-one teaching.'
  },

  reviewsH2: 'Six families\' Google reviews, printed in full',

  book: {
    h2: 'Book a free lesson for an Edinburgh learner',
    intro: 'We match the first task to the learner: shadows and an animated sunrise for a young child, a first Python program that works with angles, or a full year of Edinburgh sunrises checked against the Naval Observatory for a teenager ready for real science.',
    success: 'Thank you. The team will contact you soon about an Edinburgh lesson.'
  },

  faq: {
    h2: 'Edinburgh coding class questions',
    intro: 'The questions Edinburgh families ask us most.',
    items: [
      { q: 'How many people live in Edinburgh?', a: 'Scotland\'s Census 2022 counted about 512,700 usual residents in the City of Edinburgh, rounded to the nearest hundred, compared with 476,626 in 2011. There were about 238,900 households.' },
      { q: 'How does Edinburgh\'s population compare with Scotland\'s?', a: 'In 2022, 70.3% of Edinburgh residents were aged 15 to 64, against 64.6% across Scotland, while 13.7% were aged 0 to 14 and 16.0% were 65 or over.' },
      { q: 'Why do Edinburgh\'s summer nights not get dark?', a: 'Because at midsummer the sun dips only about 10.6 degrees below the horizon. True astronomical darkness needs 18 degrees, so on our calculation for 2026 it never arrives on 96 nights, from 4 May to 7 August.' },
      { q: 'How long is Edinburgh\'s longest day?', a: 'About 17 hours 37 minutes of sun above the horizon around the June solstice in 2026, roughly an hour more than London, and about 6 hours 57 minutes on 21 December.' },
      { q: 'Who was Thomas Henderson?', a: 'The first Astronomer Royal for Scotland, appointed in 1834, whom the Royal Observatory Edinburgh describes as the first astronomer to measure parallax and determine the distance to the stars. We are not connected with the Observatory.' },
      { q: 'Do you teach Scottish qualifications?', a: 'We use the Scottish stage names and support learners working towards National 5 and Higher Computing Science; our National 5 and Higher pages explain the courses. All teaching is in English.' },
      { q: 'When are Edinburgh lessons held?', a: 'After school, in the evening or at weekends, at a UK time chosen during the free lesson. Our teachers are four and a half hours ahead in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Edinburgh?', a: 'No. There is no Edinburgh centre and no premises anywhere in the UK; every lesson is taught live online. Learners need a computer with sound and a reliable connection, and our phone number is based in India.', boiler: true },
      { q: 'How much do Edinburgh lessons cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same timetable are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Edinburgh groups formed?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage. If no group meets at a suitable time, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Scotland and the UK',
    h2: 'Scottish guides and other cities',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland guide</a> explains coding across the Curriculum for Excellence, and exam help lives on the <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> pages. South of the border, <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> colours its wards with four colours. Every UK page is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Edinburgh and the UK',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/national-5-computing-science-help', label: 'National 5' },
    { href: '/best-coding-class-in-newcastle-upon-tyne', label: 'Newcastle' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-edi .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.75rem); }
.cg-root.cg-edi .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-edi .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-edi .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-edi .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-edi .cg-grid-3 { gap: clamp(1.15rem, 2.9vw, 2.35rem); }
.cg-root.cg-edi .cg-table caption { font-weight: 700; letter-spacing: 0.014em; }
.cg-root.cg-edi .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-edi .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-edi .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Edinburgh, National Records of Scotland, Scotland\'s Census 2022 first results rounded population estimates data (published 14 September 2023, rounded to the nearest hundred): City of Edinburgh S12000036 512,700 usual residents (2011: 476,626), 238,900 households (2011: 223,051), 48,600 aged 20 to 24 (Scotland 5,436,600 and 337,000), 13.7 percent aged 0 to 14, 70.3 percent 15 to 64, 16.0 percent 65 and over (Scotland 15.3, 64.6, 20.1), 1,946.5 residents per square kilometre (Scotland 69.8); Demography and migration chart data: 21.1 percent of households with dependent children. Royal Observatory Edinburgh: astronomy taught since 1583; first Chair of Astronomy 1786; Calton Hill Royal Observatory 1822; Thomas Henderson first Astronomer Royal for Scotland 1834, first to measure parallax; Blackford Hill 1896; UK ATC, the Institute for Astronomy and a visitor centre on one site. Historic Environment Scotland: St Margaret\'s Chapel is Edinburgh\'s oldest building; Queen Margaret died at the castle in 1093.',
    localProject: 'Why Edinburgh\'s summer nights never get properly dark. NOAA/Meeus solar position formulas at Edinburgh Castle (55.9486 N, 3.1999 W), every minute of 2026, sunrise and sunset at -0.833 degrees; checked against the US Naval Observatory Astronomical Applications API (12 times on six dates, largest difference 1 minute). Longest day 17 h 37 m; shortest 6 h 57 m (21 December); London 16 h 38 m and 7 h 50 m. Midsummer minimum elevation -10.61 (London -15.06). No astronomical darkness on 96 nights, 4 May to 7 August (London 60); sun above -12 on 40 nights, 1 June to 10 July (London none). Zero-degree rule shortens days by 12 to 16 minutes. Lesson family: solar geometry and model validation; distinct from Fourier analysis, datums and time-zone handling of GTFS.',
    requiredMentions: [
      '512,700',
      '476,626',
      '238,900',
      '48,600',
      '1,946.5',
      'Thomas Henderson',
      'Blackford Hill',
      'Calton Hill',
      'astronomical darkness',
      '17 hours 37 minutes',
      'Naval Observatory',
      '0.833'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 rounded population estimates: Edinburgh population, households, age groups, density.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 demography and migration chart data: households with dependent children.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-demography-and-migration-chart-data/' },
      { claim: 'US Naval Observatory Astronomical Applications API: sunrise and sunset at Edinburgh Castle for the validation dates.', url: 'https://aa.usno.navy.mil/api/rstt/oneday?date=2026-06-21&coords=55.9486,-3.1999&tz=0' },
      { claim: 'Royal Observatory Edinburgh, history: 1583, 1786, Calton Hill 1822, Thomas Henderson 1834, Blackford Hill 1896.', url: 'https://www.roe.ac.uk/roe/history.html' },
      { claim: 'Royal Observatory Edinburgh, home: the organisations on the site.', url: 'https://www.roe.ac.uk/' },
      { claim: 'Historic Environment Scotland, Edinburgh Castle history: St Margaret\'s Chapel, Queen Margaret 1093.', url: 'https://www.edinburghcastle.scot/the-castle/history/' }
    ],
    rejectedClaims: [
      'Student numbers for Edinburgh: the Scotland\'s Census 2022 education tables are behind an interactive tool, so no student share is stated.',
      'Shares calculated from rounded counts (for example 20 to 24 as a percentage): not computed; only published shares are quoted.',
      'University of Edinburgh facts and One O\'Clock Gun details: no primary page read for this build, so not stated.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with National Records of Scotland, the Royal Observatory Edinburgh, Historic Environment Scotland or the US Naval Observatory.'
    ]
  }
};
