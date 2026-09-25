'use strict';
// Kensington and Chelsea (cg- London borough page, UK cluster Phase 5, row 180). Named sources only.
// Spine: a staircase that is one day short. Historic England list entry 1450124 (Cosmic House, 19 Lansdowne Walk,
// Grade I, first listed 4 May 2018): mid-C19 house remodelled 1979-1985 by Charles Jencks with Terry Farrell
// Partnership; at its centre the Solar Stair "which represents the solar year", 52 steps "one for each week of the
// year", each riser with seven subdivisions for the days. 52 x 7 = 364. Python's own calendar module (the reference
// the learners use): 2001-2400 has 97 leap years, 146,097 days = exactly 20,871 weeks, so the Gregorian calendar
// repeats every 400 years; the 13th of a month falls on Friday 688 times in those 4,800 months (Wed and Sun 687, Mon
// and Tue 685, Thu and Sat 684). Continued fraction of the Gregorian leap share 97/400 = [0; 4, 8, 12]; convergents 1/4
// (the every-fourth-year rule; one day apart from the Gregorian average every 133 years), 8/33 (one day per 13,200
// years), 97/400. A 364-day year falls 1.2425 days a year behind the Gregorian average and would slip a quarter of a
// year in about 73 years. No tropical-year value is quoted: NASA's fact sheet was unreachable and no other primary
// source was read. Debenham House (1080783, Grade I): 1905-7 by Halsey Ricardo; tiles by William de Morgan in the
// garden house. Lesson family: modular calendar arithmetic and continued fractions (closest simple fractions);
// screened 25 September 2026 (continued fraction 0; Wells taught Julian day and mean lunation, a different point).
// RBKC libraries page and the Science Museum sites returned 403 on 25 September 2026: not circumvented.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'KENSINGTON AND CHELSEA', blurb: 'Cosmic House\'s 52-step Solar Stair, the V&A and a project on why calendars need clever fractions.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-kensington-and-chelsea-london',
  code: 'knc',
  accent: '#39222B',
  accentRationale: 'Kensington and Chelsea: a near-black aubergine from the solver (11.86:1 on every paper tint), the darkest and most muted of the London borough colours',
  pageType: 'governorate',
  place: {
    name: 'Kensington and Chelsea',
    eyebrow: 'Royal Borough of Kensington and Chelsea',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kensington and Chelsea, London',
  title: 'Coding Classes in Kensington and Chelsea | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Kensington and Chelsea: South Kensington, Notting Hill, Chelsea, Earl\'s Court and Holland Park. Ages 6 to 67.',
  ogDescription: 'Kensington and Chelsea coding and Python classes, with a calendar project from Cosmic House\'s 52-step Solar Stair: leap years, weekday cycles and continued fractions.',
  twitterDescription: 'Kensington and Chelsea coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Kensington and Chelsea Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the Royal Borough of Kensington and Chelsea, taught live in English.'
  },

  h1: 'Coding classes in Kensington and Chelsea',
  capsuleQ: 'What are the best coding classes in Kensington and Chelsea?',
  capsule: 'Kensington and Chelsea is the west London borough of South Kensington, Notting Hill, Chelsea, Earl\'s Court, Holland Park, North Kensington and Kensal Green, with 143,375 residents at the 2021 Census and eighteen Grade I entries, from Kensington Palace and the V&A to Cosmic House with its Solar Stair. The classes to look for turn a small, curious fact into real mathematics, and this page does it with the calendar: a staircase of 52 steps is one day short of a year, and learners find out, with code, how leap years, weekday cycles and continued fractions keep our dates in line. The teaching is done live, over video, by teachers working from India; learners range from six to sixty-seven and learn alone or in a matched set of five to ten. Lesson one is on the house; staying on means USD 100 each month for a group seat, or USD 150 each month for private lessons.',
  lead: 'Historic England\'s list entry for Cosmic House, listed at Grade I in 2018, describes a staircase at its heart called the Solar Stair. It has 52 steps, one for each week of the year, and each step is divided into seven, one for each day. Count them: 52 times 7 is 364. The real calendar year is 365 days, or 366 in a leap year, so the stair is always a day or two short. That gap is where our learners start. They use Python\'s calendar to find that 400 years of our calendar contain exactly 97 leap years and exactly 20,871 weeks, so the whole pattern of weekdays repeats every four centuries. They discover that the 13th of the month is a Friday slightly more often than any other day. And they use continued fractions to find the neatest leap-year rules possible.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Kensington and Chelsea.',

  picks: {
    eyebrow: 'Course picks for Kensington and Chelsea',
    h2: 'Courses to start with here',
    intro: 'Think of a Year 2 child in Notting Hill who counts down the days to a birthday, a Year 8 pupil in Chelsea who wants to know why February is odd, a Year 12 student in South Kensington heading for maths or physics, and a retired architect in Holland Park fascinated by buildings that encode ideas. Each can begin with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch calendar that counts days and weeks, and a game that guesses what weekday a birthday falls on.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with dates: leap years, days between two dates and the weekday of any day in history.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including modular arithmetic and the continued fractions project on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who want to understand the arithmetic under every date calculation their software makes.' }
    ]
  },

  sections: [
    {
      id: 'knc', tint: '', eyebrow: 'The borough in numbers',
      h2: '143,375 residents and 1,339 listed entries',
      intro: 'Published figures appear as their owners publish them; where we counted from open data, we say so.',
      body: [
        { kind: 'table', caption: 'Four facts about the Royal Borough', head: ['About', 'Number', 'According to'], rows: [
          ['Residents at the 2021 Census', '143,375', 'ONS table TS001'],
          ['Listed entries within the borough, by our count', '1,339, including 18 at Grade I and 116 at Grade II*', 'Historic England, 25 September 2026'],
          ['Steps in the Solar Stair at Cosmic House', '52, each divided into seven', 'Historic England list entry 1450124'],
          ['Lines at South Kensington', 'Circle, District and Piccadilly', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Palaces and museums', p: 'Kensington Palace and its Orangery, the Victoria and Albert Museum, and the front lodge and gates of the Natural History Museum are Grade I.' },
          { h3: 'Houses', p: 'Holland House, the Tower House, Cosmic House and Debenham House, built in 1905 to 1907 by Halsey Ricardo with tiles by William de Morgan in its garden house, are Grade I.' },
          { h3: 'Chelsea', p: 'The Royal Hospital\'s main buildings, its entrance gates and the statue of Charles II in its courtyard are Grade I, as is Chelsea Old Church.' }
        ] }
      ]
    },
    {
      id: 'calendar', tint: 'tint', eyebrow: 'The data',
      h2: 'Our calendar, checked by a computer',
      intro: 'Python comes with a calendar that follows the leap-year rule used in the UK: every fourth year, except century years, unless the century divides by 400. Learners use it as their reference and test it.',
      body: [
        { kind: 'table', caption: 'What 400 years of the calendar contain, 2001 to 2400', head: ['Count', 'Result'], rows: [
          ['Leap years', '97'],
          ['Days', '146,097'],
          ['Weeks', 'exactly 20,871'],
          ['Months', '4,800'],
          ['Months whose 13th is a Friday', '688, more than any other weekday']
        ] },
        { kind: 'p', text: 'Because 146,097 days divide exactly into weeks, the weekday pattern repeats every 400 years: 13 September 2426 falls on the same weekday as 13 September 2026. Inside that cycle the seven weekdays are not quite equal. Fridays get the 13th 688 times, Wednesdays and Sundays 687, Mondays and Tuesdays 685, Thursdays and Saturdays 684. The differences are tiny, but they are real, and they come straight from the leap-year rule.' },
        { kind: 'p', text: 'We would have listed the borough\'s libraries here; the council\'s libraries page turned our automated reader away with an access error, and we never work around such blocks, so none are named. The Royal Borough\'s own website has the list.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'From a 364-day staircase to the neatest leap-year rules',
      intro: 'Learners measure how fast a calendar drifts, then use continued fractions to find the simplest rules that keep it in step.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. How far off?', p: 'A 364-day year falls about 1.24 days behind our calendar\'s average every year. In about 73 years that adds up to a quarter of a year: the seasons would slide by a whole season.' },
          { h3: '2. The leap share', p: 'Our calendar adds 97 leap days in 400 years, an average of 0.2425 extra days a year. The question is how to approximate that fraction with simple rules.' },
          { h3: '3. Continued fractions', p: 'Break 97/400 into a continued fraction and read off its convergents: the simplest fractions that come closest for their size.' }
        ] },
        { kind: 'table', caption: 'Convergents of 97/400, computed 25 September 2026', head: ['Rule', 'Leap years per cycle', 'Average extra days a year', 'Drifts one day from our calendar every'], rows: [
          ['Every fourth year', '1 in 4', '0.25', 'about 133 years'],
          ['8 in 33', '8 in 33', '0.2424...', 'about 13,200 years'],
          ['Our calendar', '97 in 400', '0.2425', 'never, by definition']
        ] },
        { kind: 'p', text: 'The continued fraction of 97/400 is 0; 4, 8, 12. Its first convergent, 1/4, is the simple every-fourth-year rule, which runs ahead by three days every four centuries. The next, 8/33, uses a 33-year cycle and stays within a day of our calendar for about 13,200 years, while needing a far shorter cycle than 400. This is exactly what continued fractions are for: finding the simplest fractions that approximate a number well. The same idea designs gear trains, tunes musical scales and approximates pi.' },
        { kind: 'callout', h3: 'Why an AI answer is not enough', p: 'An AI assistant can recite the leap-year rule. A learner who has counted 146,097 days in code, found the Friday the 13th surprise, and derived 8/33 from a continued fraction understands why the rule looks the way it does, and could design a new calendar rule themselves. Knowing where a rule comes from is what lets someone spot the date bugs that still catch out real software.' }
      ]
    },
    {
      id: 'modular', tint: 'tint', eyebrow: 'The maths underneath',
      h2: 'Clock arithmetic for days of the week',
      intro: 'Weekdays wrap round every seven days, just as hours wrap round every twelve. That makes the calendar a perfect playground for modular arithmetic.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Remainders', p: '365 days leave a remainder of 1 when divided by 7, so a date usually moves one weekday later each year; after 29 February it moves two.' },
          { h3: 'Cycles', p: '146,097 leaves no remainder when divided by 7, which is why the full cycle is exactly 400 years.' },
          { h3: 'Closest fractions', p: 'Continued fractions come from repeatedly taking the whole part and flipping the remainder, the same step used in Euclid\'s algorithm.' }
        ] },
        { kind: 'p', text: 'GCSE maths students can work with remainders, cycles and the drift calculation; A-level students can derive continued fractions and prove why convergents are the closest approximations of their size. The Solar Stair details come from Historic England\'s list entry; every count and fraction on this page was computed by us on 25 September 2026 with Python\'s standard calendar. Historic England, the Royal Borough of Kensington and Chelsea, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'South Kensington, and a laptop at home',
      intro: 'The borough\'s museums draw visitors from everywhere. Our learners do not need to travel at all.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'South Kensington', p: 'TfL\'s open data lists the Circle, District and Piccadilly lines at South Kensington.' },
          { h3: 'Kensal Green to Chelsea', p: 'A learner at the northern edge of the borough and one by the river in Chelsea can share a class from home.' },
          { h3: 'A weekly rhythm', p: 'Like the Solar Stair, our classes keep a steady weekly pattern: two evenings, a group of five to ten at one stage.' }
        ] },
        { kind: 'spec', title: 'Kensington and Chelsea among the boroughs', p: 'Kensington and Chelsea is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists them all with the City, linking each page when it goes live, including <a class="cg-inline-link" href="/coding-classes-in-hammersmith-and-fulham-london">Hammersmith and Fulham</a> to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting days to continued fractions',
    intro: 'We place each learner by what the free lesson shows, not by their year group alone.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Days and weeks', p: 'Children build Scratch calendars and countdowns and notice patterns in the days of the week.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Leap years', p: 'Python that tests leap years, counts days between dates and finds weekdays with remainders.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Cycles and fractions', p: 'Modular arithmetic, 400-year cycles and continued fractions, excellent preparation for maths competitions and A level.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Dates done right', p: 'Adults learn the arithmetic behind dates and why date calculations in software so often go wrong.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI knows the leap-year rule. Why should a Kensington and Chelsea teenager derive it?',
    intro: 'Because rules that are understood can be checked, and dates are where software quietly breaks.',
    p1: 'AI coding assistants handle dates by pattern: they will usually use a library, and usually get it right. When they do not, the bug can hide for years, surfacing on 29 February or at a century boundary. A learner who has counted the 400-year cycle, measured the drift of a 364-day year and derived the leap rules from continued fractions knows exactly what to test. That kind of understanding is how people catch the errors that automated code makes.',
    p2: 'Continued fractions and modular arithmetic also reach well beyond calendars, into cryptography, music and engineering. Tools will keep generating code; people who know the maths underneath will keep being the ones who trust it for good reason.',
    closer: 'Cosmic House built the year into a staircase. A learner from this borough who can build the calendar into code has understood something architects and astronomers have puzzled over for centuries.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Notting Hill to Chelsea, lessons live',
    intro: 'Wherever a learner lives in the Royal Borough, their lesson is a video call away.',
    cells: [
      { h3: 'From home', p: 'A laptop or desktop, headphones and a broadband connection that can carry video are enough to join.' },
      { h3: 'Stages in England', p: 'Reports talk the language of a Kensington school: Key Stage 2 or 3, GCSE, A level. The lessons themselves are always taught in English.' },
      { h3: 'A free lesson first', p: 'Real teaching, not a sales call, finishing with a suggested level and course. Card details are never requested for it.' },
      { h3: 'Groups by level', p: 'A class is formed from learners at one stage wherever they live, five to ten of them, and that wide net is what makes a good evening slot possible.' },
      { h3: 'Two evenings a week', p: 'Two lessons in the evening each week is normal; school holidays and exam weeks bring agreed breaks.' },
      { h3: 'UK clock', p: 'Teachers work from India; every time we send is in UK time.' }
    ],
    spec: { title: 'A smaller borough, a wider class', p: 'About 143,000 people live in Kensington and Chelsea, and a good class still needs five learners at the same stage free together, so ours draw from far beyond it.' }
  },

  fees: {
    h2: 'Fees for Kensington and Chelsea families',
    intro: 'The first lesson is free; then there is one monthly fee throughout the Royal Borough.',
    first: 'A full first lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'About eight live lessons a month in a class of five to ten at one stage.',
    private: 'About eight live lessons a month, one to one.',
    closer: 'The monthly fee is set in US dollars for every family outside India, so this site never shows a price in pounds. There is no bill at all until the free lesson has happened and you have settled on a course and a fixed weekly slot. The pricing page explains pausing, missed lessons and changing between group and private teaching.'
  },

  reviewsH2: 'Reviews from families, as posted on Google',

  book: {
    h2: 'Request a free lesson',
    intro: 'A year group and a favourite hobby let us prepare properly. The first lesson might be a Scratch countdown, a Python leap-year tester, or the calendar project on this page.',
    success: 'Thank you. Your Kensington and Chelsea lesson request is with us.'
  },

  faq: {
    h2: 'Kensington and Chelsea questions',
    intro: 'About the borough, the calendar project and our lessons.',
    items: [
      { q: 'How many people live in Kensington and Chelsea?', a: 'The 2021 Census counted 143,375 usual residents in the Royal Borough of Kensington and Chelsea, in ONS table TS001.' },
      { q: 'What is the Solar Stair?', a: 'A staircase at the centre of Cosmic House, a Grade I house remodelled by Charles Jencks with Terry Farrell Partnership. Historic England\'s list entry says it has 52 steps, one for each week, each divided into seven for the days.' },
      { q: 'Why does the calendar repeat every 400 years?', a: 'Because 400 years of our calendar contain 97 leap years and 146,097 days, which is exactly 20,871 weeks. After that, every date falls on the same weekday again.' },
      { q: 'Is Friday the 13th really more common?', a: 'Very slightly. In a 400-year cycle, the 13th falls on a Friday 688 times, one more than Wednesday or Sunday and up to four more than other days.' },
      { q: 'What is a continued fraction?', a: 'A way of writing a number as a whole part plus one over another whole part plus one over another, and so on. Stopping early gives the simplest fractions that approximate the number well; for 97/400 they are 1/4 and 8/33.' },
      { q: 'When are lessons held?', a: 'With the level known from the free lesson, we point you to a class that has a seat and meets on a fixed weekday evening, always quoted in UK time; the teacher is in India.' },
      { q: 'What equipment is needed?', a: 'Nothing unusual: any computer that plays sound, with an internet line that does not keep dropping. The calendar project needs only Python.' },
      { q: 'Is there a Modern Age Coders centre in Kensington and Chelsea?', a: 'No. There is no Kensington and Chelsea centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Kensington and Chelsea cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Other London boroughs',
    html: 'Every borough and the City has a place on the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, with a link as each page is published, from <a class="cg-inline-link" href="/coding-classes-in-greenwich-london">Greenwich</a> to <a class="cg-inline-link" href="/coding-classes-in-islington-london">Islington</a>. Pattern-spotting of this kind leads naturally to <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">machine learning, taught in our London classes</a>, and anyone moving between England and the other UK nations can line up school years on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kensington and Chelsea and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-hammersmith-and-fulham-london', label: 'Hammersmith and Fulham' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-knc .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-knc .cg-hero h1 { font-weight: 720; letter-spacing: -0.015em; line-height: 1.06; }
.cg-root.cg-knc .cg-capsule { border: 2px solid var(--cg-accent); padding: 0.9rem 1rem; }
.cg-root.cg-knc .cg-eyebrow { letter-spacing: 0.15em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-knc .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-knc .cg-grid-3 { gap: clamp(1rem, 2.7vw, 1.9rem); }
.cg-root.cg-knc .cg-table caption { font-weight: 700; letter-spacing: 0.018em; }
.cg-root.cg-knc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-knc .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-knc .cg-ladder-col { border-bottom: 4px double var(--cg-accent); padding-bottom: 0.75rem; }
.cg-root.cg-knc .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Kensington and Chelsea. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000020): 143,375 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 1,339 (I 18, II* 116, II 1,205); Grade I include 1223861 KENSINGTON PALACE, 1223783 ORANGERY AT KENSINGTON PALACE, 1190187 VICTORIA AND ALBERT MUSEUM, 1080675 Natural History Museum, Front Lodge and Gates, 1267135 HOLLAND HOUSE, 1225632 THE TOWER HOUSE, 1450124 Cosmic House, 1080783 DEBENHAM HOUSE, 1226301 THE ROYAL HOSPITAL MAIN HOSPITAL BUILDINGS, 1265915 ROYAL HOSPITAL ENTRANCE GATES AND LODGES, 1226477 STATUE OF CHARLES II, 1189649 CHELSEA OLD CHURCH (ALL SAINTS). List entry 1450124 (first listed 4 May 2018): remodelled 1979-1985 by Charles Jencks with Terry Farrell Partnership; Solar Stair represents the solar year, 52 steps one for each week, each riser seven subdivisions for the days. List entry 1080783: 1905-7 Halsey Ricardo; garden house with tiles by William de Morgan. TfL 940GZZLUSKS (South Kensington): Circle, District, Piccadilly. rbkc.gov.uk/libraries returned HTTP 403 on 25 September 2026: not circumvented, no list.',
    localProject: 'Python 3.13 calendar/datetime: years 2001-2400: 97 leap, 146,097 days, 20,871 weeks exactly; weekday of the 13th over 4,800 months: Mon 685, Tue 685, Wed 687, Thu 684, Fri 688, Sat 684, Sun 687. Continued fraction of 97/400 = [0; 4, 8, 12]; convergents 1/4 (diff +0.0075/yr, 1 day per 133.3 yr), 8/33 (diff -0.0000758/yr, 1 day per 13,200 yr), 97/400. Julian vs Gregorian: 3 days per 400 years. 364-day year: 1.2425 days/yr behind the Gregorian mean; a quarter-year (91.31 days) in 73.5 years. 1 January weekdays 2024-2030: Mon, Wed, Thu, Fri, Sat, Mon, Tue. No tropical year value quoted (no primary source read). Lesson family: modular calendar arithmetic and continued fractions, screened 25 September 2026.',
    requiredMentions: [
      '143,375',
      'Cosmic House',
      'Solar Stair',
      'continued fraction',
      '20,871 weeks',
      'Debenham House',
      'William de Morgan',
      'Holland House',
      'Chelsea Old Church'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Kensington and Chelsea E09000020: 143,375 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000020&measures=20100' },
      { claim: 'Historic England list entry 1450124, Cosmic House: Solar Stair, 52 steps, seven subdivisions each.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1450124' },
      { claim: 'Historic England list entry 1080783, Debenham House: 1905-7, Halsey Ricardo, tiles by William de Morgan.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1080783' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Kensington and Chelsea on 25 September 2026: 1,339 (18 I, 116 II*, 1,205 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUSKS (South Kensington): Circle, District, Piccadilly.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUSKS' }
    ],
    rejectedClaims: [
      'Length of the tropical (seasonal) year: NASA\'s fact sheet was unreachable and no other primary source was read, so no value is quoted; comparisons are with the calendar\'s own average.',
      'Babbage\'s Difference Engine at the Science Museum: the collection record was read, but no primary source placing the museum inside the borough was reachable (museum and group sites returned 403), so the project was not used here.',
      'RBKC library list: council page returned 403; no libraries named.',
      'Kensington and Chelsea schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
