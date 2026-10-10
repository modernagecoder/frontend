'use strict';
// Homebush, Sydney (cg- district page, Australia cluster Phase 8, row 225). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page under Sydney and New South Wales.
// Homebush suburb (ABS SAL11936): 4,000-point sample against ASGS LGA boundaries gives 99.38% Strathfield,
// 0.62% Canada Bay.
// Spine: stepping through monthly data with timedelta(days=30) instead of real calendar months.
// Data: Transport for NSW monthly station entries (CC BY), Homebush Station, 23 months October 2024 to
// August 2026. A loop that adds 30 days from 1 October 2024 lands in the intended month only once in 23 steps
// (the first); October 2024 is read twice and August 2026 never; the 23rd step lands on 23 July 2026, so the
// row labelled August 2026 holds July's 95,452 instead of 97,496. Correct add-months uses divmod on a month
// index. Subtracting 365 days from 1 March 2024 gives 2 March 2023 (leap year). Year on year (correct,
// our calculation): August 2026 97,496 vs August 2025 90,912, +7.24%; May +7.54%; November 2025 -2.50%.
// Highest month March 2026 101,807 (only month above 100,000); lowest January 2025 79,387.
// Lesson family: calendar month arithmetic vs fixed 30-day timedelta; screened 0 location-page hits.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'HOMEBUSH',
    label: 'Homebush, Sydney',
    blurb: 'Online coding and Python classes for Homebush, with a station data project where a loop that adds 30 days quietly skips a month.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'online-coding-and-python-classes-in-homebush-sydney',
  code: 'hmbs',
  accent: '#971F4F',
  accentRationale: 'Homebush: a muted raspberry (hue 336), at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 8.0:1 on white and 6.5:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Homebush',
    eyebrow: 'Homebush, Strathfield Council, Sydney',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Homebush, Sydney',
  title: 'Online Coding and Python Classes in Homebush, Sydney',
  description: 'Live online coding and Python classes for Homebush children, teens and adults, taught by real teachers in small groups or one to one. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Homebush, with a station data project: a loop that adds 30 days reads October 2024 twice and never reaches August 2026.',
  twitterDescription: 'Homebush online coding and Python classes, live, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Homebush',
    description: 'Level-matched online coding, Python, dates and data handling for children from six, teenagers and adults in Homebush, Sydney, taught live in English.'
  },
  h1: 'Online coding and Python classes in Homebush',
  capsuleQ: 'Where are the best online coding and Python classes for Homebush learners?',
  capsule: 'Live online classes where learners write Python that handles real data correctly, including dates. Homebush is an apartment suburb: the 2021 Census counted 11,660 residents, and 81.7% of occupied homes (3,595) were flats or apartments against 21.7% across NSW. Lessons run in small level-matched groups or one to one, and the first lesson is free.',
  lead: 'A month is not 30 days. Every programmer knows that, and almost every programmer has written a loop that forgets it. In this project learners step through Homebush Station\'s monthly entry counts, starting at 1 October 2024, by adding 30 days each time. Only the very first step lands in the month it should. October 2024 gets read twice, August 2026 never gets read at all, and the row labelled August 2026 quietly holds July\'s count of 95,452 instead of the real 97,496. Then they fix it with true month arithmetic.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python lesson for a learner in Homebush.',
  picks: {
    eyebrow: 'Course picks for Homebush',
    h2: 'Python courses that handle real data',
    intro: 'Each course works with real data at its own level. The free trial confirms the right one, with no card needed to book.',
    items: [
      {
        course: 'python-ai-kids-masterclass',
        band: 'Ages 8 to 12',
        note: 'First Python through games and small programs, including calendars and countdowns.'
      },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Python for data: loading files, cleaning dates and drawing honest charts.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from the start to advanced, with the standard library used properly.'
      },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Analysis of real data sets, with time series, joins and checks on every result.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Homebush in the Census',
      h2: 'An apartment suburb of young professionals',
      intro: 'What the 2021 Census recorded for the suburb, with state and national shares beside it.',
      body: [
        {
          kind: 'table',
          caption: 'Homebush, 2021 Census headline counts',
          head: ['Headline', 'Homebush'],
          rows: [
            ['Residents', '11,660'],
            ['Families', '3,049'],
            ['Private dwellings', '5,217'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How Homebush compares',
          head: ['Measure', 'Homebush', 'NSW', 'Australia'],
          rows: [
            ['Residents aged 25 to 29', '16.8% (1,957)', '6.9%', '7.0%'],
            ['Children aged 10 to 14', '3.4% (397)', '6.2%', '6.2%'],
            ['Residents 15 and over with a degree', '51.6% (5,131)', '27.8%', '26.3%'],
            ['Professionals among employed residents', '34.8% (2,224)', '25.8%', '24.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Few houses', p: 'Separate houses were just 539 of the suburb\'s occupied homes, 12.3%, against 65.6% across the state.' },
            { h3: 'Median age 31', p: 'Half of Homebush residents were 31 or younger at the Census, against a NSW median of 39.' },
            { h3: 'Mostly one council', p: 'Of 4,000 random points inside the suburb boundary, 99.38% fell in Strathfield and 0.62% in Canada Bay.' }
          ]
        },
        {
          kind: 'p',
          text: 'Small Census counts are randomly adjusted for privacy, which is why each figure here is copied as published rather than added up from other rows.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The loop that skipped August',
      intro: 'Transport for NSW publishes one row per station per month. The task: read 23 months of Homebush Station entries in order, then compare each month with the same month a year earlier.',
      body: [
        {
          kind: 'table',
          caption: 'Stepping from 1 October 2024 by 30 days (our calculation)',
          head: ['Step', 'Date reached', 'Month wanted', 'Month read'],
          rows: [
            ['0', '1 October 2024', 'October 2024', 'October 2024'],
            ['1', '31 October 2024', 'November 2024', 'October 2024'],
            ['2', '30 November 2024', 'December 2024', 'November 2024'],
            ['22', '23 July 2026', 'August 2026', 'July 2026']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'One step in 23',
              p: 'Only step 0 reads the intended month. Every later step lands one month behind, because the average month is longer than 30 days.'
            },
            {
              h3: 'A silent duplicate',
              p: 'The loop reads 22 distinct months, and October 2024, with 94,155 entries, is counted twice. Nothing crashes, so nothing warns the programmer.'
            },
            { h3: 'The wrong August', p: 'The last row is labelled August 2026 but holds 95,452, July\'s count. The real August figure, 97,496, never appears.' }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Homebush Station entries, correct month arithmetic (Transport for NSW data, changes are our calculation)',
          head: ['Month', 'Entries', 'Same month a year earlier', 'Change'],
          rows: [
            ['August 2026', '97,496', '90,912', '+7.24%'],
            ['May 2026', '97,300', '90,479', '+7.54%'],
            ['November 2025', '93,308', '95,699', '-2.50%']
          ]
        },
        {
          kind: 'callout',
          h3: 'The fix',
          p: 'Turn each date into a month number, year times 12 plus month minus one, add the months you want, and split it back with divmod. The same idea handles "a year earlier" safely: subtracting 365 days from 1 March 2024 gives 2 March 2023, because 2024 is a leap year.'
        },
        {
          kind: 'p',
          text: 'The counts are Transport for NSW\'s published monthly entries for Homebush Station. The step table and percentage changes are our own calculation; they describe the data, not the reasons behind any change.'
        }
      ]
    },
    {
      id: 'method',
      tint: 'tint',
      eyebrow: 'Why it matters',
      h2: 'Dates break more programs than maths does',
      intro: 'Billing runs, school timetables, payroll and dashboards all step through months. A 30-day shortcut fails quietly in each of them.',
      body: [
        {
          kind: 'table',
          caption: 'Three ways to move one month on',
          head: ['Method', 'From 31 January', 'Problem'],
          rows: [
            ['Add 30 days', '2 March in a normal year', 'Skips February entirely'],
            ['Replace the month number', 'Error: 31 February does not exist', 'Crashes on month ends'],
            ['Month index with divmod, on the first of the month', '1 February', 'None for monthly data']
          ]
        },
        {
          kind: 'p',
          text: 'Learners write all three, run them over two full years and write a test that asserts every month appears exactly once. The test fails for the first two methods and passes for the third. That habit, writing the check that would have caught the bug, is the real lesson.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Count the days in each month on a calendar and find why "every 30 days" drifts away from the 1st.' },
            { h3: 'Teenagers', p: 'Use Python\'s datetime module on the real station file and test the loop.' },
            { h3: 'Adults', p: 'Handle time zones, month ends and daylight saving in reporting code.' }
          ]
        },
        {
          kind: 'p',
          text: 'The station counts, Census tables and boundaries come from Transport for NSW and the statistics bureau. Neither body, nor Strathfield Council, is connected with Modern Age Coders.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Homebush',
      h2: 'A station busiest in March, and small families',
      intro: 'A few more facts from the station file and the Census.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Peak month', p: 'March 2026 was Homebush Station\'s busiest month in the file, 101,807 entries, the only month above 100,000.' },
            { h3: 'Quietest month', p: 'January 2025 had the fewest entries of the 23 months, 79,387.' },
            { h3: 'Small families', p: 'Families with children in Homebush had 1.5 children on average at the 2021 Census, and households held 2.5 people.' }
          ]
        },
        {
          kind: 'spec',
          title: 'No reasons claimed',
          p: 'The monthly file gives counts only. This page reports when Homebush Station was busier or quieter and does not guess why.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting calendar days to time-series code',
    intro: 'Treat the ages loosely; where a learner begins is decided in the trial lesson.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Coding foundations',
        p: 'Block coding with sequences, loops and simple counting games.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'First Python',
        p: 'Python programs with numbers, dates and small games.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Python with data',
        p: 'Complete Python and real data files, with tests on every loop.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Professional Python',
        p: 'Python and data analysis for work, including time series.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI writes the date loop, will a Homebush learner spot the bug?',
    intro: 'Only if they know what a month really is in code.',
    p1: 'Ask an assistant to step through monthly data and it may well write timedelta(days=30). The code runs, the chart draws, and one month is silently counted twice while another disappears.',
    p2: 'A learner who has watched August 2026 vanish knows to ask for a test that every month appears once. That one habit protects every report an AI helps to build.',
    closer: 'In 2026 the Homebush learners who test AI-written code against real data will be the ones whose numbers are trusted.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons for Homebush homes',
    intro: 'Every class is live with a teacher and joined from home, so there is no commute.',
    cells: [
      { h3: 'Joined from home', p: 'A laptop or desktop and headphones are all that is needed.' },
      { h3: 'School holidays', p: 'Families can pause lessons for the NSW school holidays.' },
      { h3: 'A free start', p: 'One full lesson free, then a recommended course and lesson time.' },
      { h3: 'Groups or private', p: 'Join five to ten learners at the same level, or learn alone with a teacher.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons a week, around eight in a month, with breaks planned ahead.' },
      { h3: 'India time', p: 'A 7pm Homebush lesson starts at 1:30pm India time in daylight saving and 2:30pm after it ends.' }
    ],
    spec: {
      title: 'Daylight saving dates',
      p: 'Sydney clocks move forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India keeps one time all year. Every timetable is written in Sydney time.'
    }
  },
  fees: {
    h2: 'Homebush class fees',
    intro: 'Three figures cover everything.',
    first: 'The first lesson is free and finishes with a clear recommendation.',
    group: 'Group places cover two lessons every week, so about eight a month, alongside five to ten classmates of similar level.',
    private: 'The same two lessons a week, taught to one learner only.',
    closer: 'Outside India all invoices are in US dollars. Payment begins only after the trial, once a course and times are agreed; the pricing page covers holidays and missed lessons.'
  },
  reviewsH2: 'Google reviews from families',
  book: {
    h2: 'Book a first lesson in Homebush',
    intro: 'Share an age and an interest. A Year 4 child might start with a countdown timer in Scratch; an adult might start by fixing the 30-day loop.',
    success: 'Thank you. We will contact you soon to arrange a lesson.'
  },
  faq: {
    h2: 'Homebush coding and Python questions',
    intro: 'The questions Homebush families and adults ask us first.',
    items: [
      {
        q: 'What is the population of Homebush?',
        a: 'Homebush had 11,660 residents at the 2021 Census, in 3,049 families and 5,217 private dwellings, according to the bureau\'s QuickStats.'
      },
      {
        q: 'Why is adding 30 days not the same as adding a month?',
        a: 'Adding 30 days to a date does not move it one calendar month, because months have 28 to 31 days. Stepping through months that way drifts, so some months are read twice and others are skipped.'
      },
      {
        q: 'What is the Homebush station project?',
        a: 'Learners read 23 months of Transport for NSW entry counts for Homebush Station with a 30-day loop, find that October 2024 is read twice and August 2026 never, and then fix the loop with true month arithmetic.'
      },
      {
        q: 'How should Python add a month to a date?',
        a: 'For monthly data, convert the year and month to a single month number, add the months, and split it back with divmod, keeping the day as the 1st. Libraries such as dateutil also provide relativedelta for this.'
      },
      {
        q: 'Is this linked to NSW school subjects?',
        a: 'Our Python teaching overlaps with what NSW students meet in Digital Technologies and often goes beyond it. We are not part of any school or the department.'
      },
      {
        q: 'Is any experience needed?',
        a: 'None. Six-year-olds start by dragging blocks, and teenagers or adults who have never coded start directly in Python.'
      },
      { q: 'Can adults learn Python with you?', a: 'Yes. Adults learn in their own groups or privately, often to automate reports or move into data roles.' },
      {
        q: 'Do you have a centre in Homebush?',
        a: 'No. All lessons are live online and we have no premises in Australia. The phone number on our site is Indian.',
        boiler: true
      },
      {
        q: 'What do classes cost in Homebush?',
        a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Five to ten, grouped by level and pace. One-to-one lessons are available if no group suits.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Homebush learners',
    html: '<a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-auburn-sydney">Auburn</a> to the west and <a class="cg-inline-link" href="/ai-and-programming-classes-in-rhodes-sydney">Rhodes</a> to the north have their own pages, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-strathfield-sydney">Strathfield</a> covers the council area Homebush sits in. For the wider picture, see the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Homebush and Sydney',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-auburn-sydney', label: 'Auburn' },
    { href: '/ai-and-programming-classes-in-rhodes-sydney', label: 'Rhodes' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-hmbs .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.2rem); }
.cg-root.cg-hmbs .cg-hero h1 { font-weight: 680; letter-spacing: -0.015em; line-height: 1.12; }
.cg-root.cg-hmbs .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.4rem 0 0.4rem 0.95rem; }
.cg-root.cg-hmbs .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-hmbs .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.008em; }
.cg-root.cg-hmbs .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.05rem); }
.cg-root.cg-hmbs .cg-table caption { font-weight: 600; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-hmbs .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-hmbs .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.75rem; }
.cg-root.cg-hmbs .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Homebush, ABS Census 2021 QuickStats, suburb Homebush SAL11936 (read 10 October 2026): 11,660 people; median age 31 (NSW 39, Australia 38); 3,049 families; 5,217 private dwellings; 2.5 people per household; age 10 to 14 397 (3.4 percent; NSW 6.2, Australia 6.2); age 25 to 29 1,957 (16.8 percent; NSW 6.9, Australia 7.0); flat or apartment 3,595 (81.7 percent; NSW 21.7); separate house 539 (12.3 percent; NSW 65.6); Bachelor Degree level and above 5,131 (51.6 percent; NSW 27.8, Australia 26.3); Professionals 2,224 (34.8 percent; NSW 25.8, Australia 24.0). ABS ASGS 2021: 4,000 random points in SAL11936, 99.38 percent Strathfield LGA, 0.62 percent Canada Bay LGA. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Calendar month arithmetic vs fixed 30-day timedelta. Transport for NSW monthly entries (CC BY), Homebush Station, 2024-10 to 2026-08 (23 months): 2024-10 94,155; 2024-11 95,699; 2025-01 79,387 (lowest); 2025-05 90,479; 2025-08 90,912; 2025-11 93,308; 2026-03 101,807 (highest, only month above 100,000); 2026-05 97,300; 2026-07 95,452; 2026-08 97,496. Python loop date(2024,10,1) + timedelta(days=30*k), k = 0 to 22: intended month only at k = 0; 22 distinct months; 2024-10 read twice; 2026-08 never read; k = 22 lands on 2026-07-23. Correct year on year (our calculation): August +7.24 percent, May +7.54 percent, November 2025 -2.50 percent. date(2024,3,1) - timedelta(days=365) = 2023-03-02. ABS QuickStats: average children per family, for families with children, 1.5.',
    requiredMentions: ['11,660', '3,049', '5,217', '1,957', '3,595', '94,155', '95,452', '101,807', '79,387'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Homebush (SAL11936).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL11936' },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'ABS ASGS Edition 3 boundaries (SAL and LGA), geo.abs.gov.au map services.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'Python documentation, datetime module (timedelta and date arithmetic).', url: 'https://docs.python.org/3/library/datetime.html' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Reasons for monthly changes in Homebush Station entries: not claimed.',
      'Homebush schools: not used; the Strathfield council page already carries Homebush Public School, and the only Homebush secondary school listed is single-sex.',
      'Homebush West, Homebush Bay and Sydney Olympic Park facts: not used; they are separate places.',
      'Worked at home and travel to work: not used, because Census day 2021 needs context we did not verify.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, Strathfield Council or the ABS.'
    ]
  }
};
