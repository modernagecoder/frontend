'use strict';
// Macquarie Park, Sydney (cg- district page, Australia cluster Phase 8, row 227). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL12446) under Sydney and New South Wales.
// Spine: do as many people leave Macquarie Park's two metro stations as arrive? Flow conservation on Opal
// entries and exits, October 2024 to August 2026 (23 months, Transport for NSW, CC BY).
// Our sums of the published monthly rows: Macquarie Park Station entries 2,597,760, exits 2,566,270, net +31,490
// (1.21% of entries), entries above exits in 21 of 23 months (largest +3,176 in August 2026; deficits in May 2025,
// -865, and March 2026, -1,334). Macquarie University Station entries 8,678,337, exits 8,818,944, net -140,607
// (1.62% of entries), exits above entries in all 23 months (gap 1,865 in December 2024 to 8,177 in March 2025).
// Both stations together: -109,117 (our arithmetic). Scripts: scratchpad au/b4/mqpk.py.
// Lesson family: flow conservation (entries vs exits, cumulative net flow); 0 hits in content and claims.
// Place facts: ABS Census 2021 QuickStats, Macquarie Park SAL12446.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MACQUARIE PARK',
    label: 'Macquarie Park, Sydney',
    blurb: 'Coding and AI classes for Macquarie Park, with a project that checks whether the people tapping in at two metro stations ever tap out again.'
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
  slug: 'best-coding-and-ai-classes-in-macquarie-park-sydney',
  code: 'mqpk',
  accent: '#202C90',
  accentRationale: 'Macquarie Park: a deep signal blue (hue 234), chosen by hand at least 10 RGB units from all 1,272 accents in content, the shared stylesheets and the claims log, 11.5:1 on white and 9.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Macquarie Park',
    eyebrow: 'Macquarie Park, Sydney, New South Wales',
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
  routeLabel: 'Macquarie Park, Sydney',
  title: 'Best Coding and AI Classes in Macquarie Park, Sydney',
  description: 'Live online coding, Python and AI classes for Macquarie Park learners from age six to adult, taught by real teachers in small groups or one to one. First class free.',
  ogDescription: 'Coding and AI classes for Macquarie Park, with a data project on metro taps: Macquarie University Station recorded more exits than entries in all 23 months we checked.',
  twitterDescription: 'Macquarie Park coding and AI classes, live online, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Macquarie Park',
    description: 'Level-matched online coding, Python, data and AI lessons for children, teenagers and adults living in Macquarie Park, taught live in English.'
  },
  h1: 'Coding and AI classes in Macquarie Park',
  capsuleQ: 'Where do Macquarie Park learners find the best coding and AI classes?',
  capsule: 'In live online lessons where a teacher works through real code with the learner, from first Scratch projects to Python, data and AI. Macquarie Park is a young, highly qualified suburb: the 2021 Census counted 11,071 residents with a median age of 31, and 58.5% of adults (5,756 people) held a bachelor degree or higher.',
  lead: 'Every Opal tap at a station is recorded twice in the published figures, once as an entry and once as an exit somewhere. If every trip started and ended inside the same set of stations, the two totals would match. They do not, and the gap is a good first lesson in data: a conservation law tells you what should be true, and the mismatch tells you where people go that the data cannot see.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Macquarie Park.',
  picks: {
    eyebrow: 'Course picks for Macquarie Park',
    h2: 'Courses that start from real records',
    intro: 'Each pick below leads to the kind of work in the station project. The free trial decides the level, and nothing is charged until a course and a time are agreed.',
    items: [
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Lists, loops and running totals in Python, the tools behind the cumulative flow chart.'
      },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 18',
        note: 'Clean a published table, total it carefully and explain what a gap in the numbers can and cannot prove.'
      },
      {
        course: 'ai-ml-masterclass-teens',
        band: 'Ages 14 to 18',
        note: 'From summary statistics to models that learn from data, with checks against known totals.'
      },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Pandas, reconciliation of two data sources and honest reporting for work.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Macquarie Park in the Census',
      h2: 'A suburb of apartments and recent graduates',
      intro: 'QuickStats for the Macquarie Park suburb (ABS code SAL12446) from the 2021 Census, set against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Macquarie Park, 2021 Census headline counts',
          head: ['Headline', 'Macquarie Park'],
          rows: [
            ['Residents', '11,071'],
            ['Median age', '31'],
            ['Families', '2,736'],
            ['Private dwellings', '6,142'],
            ['Average people per household', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How Macquarie Park differs from the state',
          head: ['Measure', 'Macquarie Park', 'NSW', 'Australia'],
          rows: [
            ['Flats or apartments among occupied homes', '89.5% (4,282)', '21.7%', '14.2%'],
            ['Separate houses among occupied homes', '0.0%', '65.6%', '72.3%'],
            ['Bachelor degree or higher, aged 15 and over', '58.5% (5,756)', '27.8%', '26.3%'],
            ['Professionals among employed residents', '43.6%', '25.8%', '24.0%'],
            ['Residents aged 20 to 24', '13.5% (1,490)', '6.1%', '6.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Almost all apartments',
              p: 'The Census recorded no separate houses among occupied homes in the suburb, against close to two in three across the state.'
            },
            { h3: 'Few children', p: 'Only 204 residents were aged 10 to 14, 1.8% of the population, where the state figure is 6.2%.' },
            {
              h3: 'Census day 2021',
              p: 'The count was taken in August 2021, while Greater Sydney was in lockdown, so the share who worked from home that day (50.5%) reflects that week.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The statistics bureau adds small random adjustments to protect privacy, so the parts of a QuickStats table may not add up to its total. We quote each published figure as printed and do not build totals from parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Do as many people tap out as tap in?',
      intro: 'Transport for NSW publishes monthly Opal entries and exits for every metro, train and light rail station. We took the 23 months from October 2024 to August 2026 for the two metro stations in Macquarie Park and added each column ourselves.',
      body: [
        {
          kind: 'table',
          caption: 'Entries and exits over 23 months (our sums of the published monthly figures)',
          head: ['Station', 'Entries', 'Exits', 'Entries minus exits'],
          rows: [
            ['Macquarie Park Station', '2,597,760', '2,566,270', '+31,490'],
            ['Macquarie University Station', '8,678,337', '8,818,944', '-140,607'],
            ['Both stations together', 'not added', 'not added', '-109,117']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Month by month (our calculation)',
          head: ['Pattern', 'Macquarie Park Station', 'Macquarie University Station'],
          rows: [
            ['Months with more entries than exits', '21 of 23', '0 of 23'],
            ['Largest monthly gap', '+3,176 (August 2026)', '-8,177 (March 2025)'],
            ['Smallest monthly gap', '+244 (September 2025)', '-1,865 (December 2024)'],
            ['Gap as a share of all entries', '1.21%', '1.62%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The law',
              p: 'In a closed network every trip that starts must end somewhere in it, so over a long period total entries and total exits across the network should balance.'
            },
            {
              h3: 'One station is not closed',
              p: 'A single station can run a surplus or a deficit for ever, because people can arrive by metro and leave by bus, on foot or by car, which the station counts never see.'
            },
            {
              h3: 'The running total',
              p: 'Adding each month\'s gap to the last gives a cumulative flow. For Macquarie University Station it falls every single month, a pattern too steady to be noise.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What the gap does not tell us',
          p: 'The figures show where taps happen, not why. A steady deficit at one station is consistent with people arriving by metro and leaving another way, but the published table cannot say which way, and we do not guess at a cause.'
        },
        {
          kind: 'p',
          text: 'Opal counts cover tapped trips only. Trips on other tickets, or by people who did not tap, are not in the table, so the balance check is a check on the recorded data, not on every person who used the stations.'
        }
      ]
    },
    {
      id: 'method',
      tint: 'tint',
      eyebrow: 'How learners build it',
      h2: 'From two columns to a conservation check',
      intro: 'The project uses only lists, a loop and one running total, which is why we teach it early.',
      body: [
        {
          kind: 'table',
          caption: 'The build, step by step',
          head: ['Step', 'What the code does', 'What it teaches'],
          rows: [
            ['Read', 'Keep the rows for one station and one direction', 'Filtering a published file without changing it'],
            ['Pair', 'Match each month\'s entries with the same month\'s exits', 'Joining two columns on a shared key'],
            ['Difference', 'Entries minus exits for every month', 'Signed numbers and what the sign means'],
            ['Accumulate', 'Add each difference to a running total', 'State carried through a loop'],
            ['Check', 'Compare the final total with the sum of the columns', 'Testing a result two independent ways']
          ]
        },
        {
          kind: 'p',
          text: 'The last step is the habit we care about. The running total after 23 months must equal total entries minus total exits; if the two disagree, the code has a bug, and learners find it before trusting any chart.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Primary learners',
              p: 'Count taps in and taps out for a pretend school bus in Scratch, and spot when the bus ends the day with someone still on it.'
            },
            { h3: 'Secondary students', p: 'Write the Python version on the real station file, plot the cumulative flow and explain the shape in plain words.' },
            { h3: 'University and adult', p: 'Reconcile two stations, then a whole line, and write a short note on what the data supports and what it leaves open.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Macquarie Park',
      h2: 'A business park suburb with two metro stations',
      intro: 'More from the same sources and the NSW school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Busy months',
              p: 'In August 2026 Macquarie Park Station recorded 128,427 entries; the highest month in the 23 we read was March 2025, at 129,460.'
            },
            { h3: 'No school address', p: 'The NSW government schools file lists no school with a Macquarie Park street address; neighbouring Marsfield has one.' },
            { h3: 'Term 1, 2027', p: 'For schools in the Eastern division, Term 1 of 2027 runs from Wednesday 3 February to Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb, not council',
          p: 'Macquarie Park is a suburb inside the City of Ryde council area. Every Census number on this page is for the suburb alone; the council-wide figures are on our Ryde page.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting taps to modelling a network',
    intro: 'Ages are a guide; the trial lesson sets the actual starting point.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Counting in Scratch',
        p: 'Stories and games with counters that go up and down.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 11 to 14',
        h3: 'First Python',
        p: 'Loops, lists and running totals on small real tables.',
        courses: ['python-complete-masterclass-teens', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data and AI',
        p: 'Cleaning, checking and modelling public data.',
        courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Work-ready data',
        p: 'Reconciliation, reporting and machine learning for the workplace.',
        courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can total a column in a second. Why should a Macquarie Park learner check it?',
    intro: 'Because a total is only useful if you know what it should equal, and only a person who understands the data can say that.',
    p1: 'Ask an AI assistant for the net flow at Macquarie University Station and it may well return the right number, -140,607. It will not, unless asked, point out that the figure cannot be a closed-network balance, that it leaves out untapped trips, or that a steady deficit says nothing about cause. Those judgements come from knowing how the data was made.',
    p2: 'A learner who has written the running total and checked it against the column sums reads every AI answer the same way: what should this equal, and does it? That question catches mistakes in spreadsheets, dashboards and AI output alike.',
    closer: 'The Macquarie Park learner who can explain a balance check is the one an AI tool cannot mislead with a confident number.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons from an apartment desk',
    intro: 'With nearly nine in ten Macquarie Park homes counted as flats or apartments, most learners join from a desk at home, and an online class needs nothing more.',
    cells: [
      { h3: 'No commute', p: 'The learner logs in and the full hour goes on coding, with no travel at either end.' },
      { h3: 'NSW calendar', p: 'Plans follow the NSW stages and pause for state school holidays, with senior projects that suit computing subjects.' },
      { h3: 'Trial first', p: 'The free lesson is a real class, finishing with a suggested course, level and time and no payment taken.' },
      { h3: 'Small groups', p: 'Five to ten learners at a similar level, drawn from Macquarie Park and elsewhere.' },
      { h3: 'A steady rhythm', p: 'Two set lessons a week, about eight a month, with breaks agreed in advance.' },
      {
        h3: 'Teachers in India',
        p: 'A 7pm lesson in Macquarie Park during daylight saving begins at 1:30pm India time; once Sydney returns to standard time it begins at 2:30pm there.'
      }
    ],
    spec: {
      title: 'Sydney clock changes',
      p: 'Daylight saving starts on Sunday 4 October 2026 and ends on Sunday 4 April 2027, while India keeps the same time all year. Lesson times are always given in Sydney time.'
    }
  },
  fees: {
    h2: 'Macquarie Park class fees',
    intro: 'The full price list has three lines.',
    first: 'The first lesson is free and ends with a clear recommendation.',
    group: 'A month of small-group lessons, usually eight, with five to ten learners at one level.',
    private: 'About eight one-to-one lessons a month with a single teacher.',
    closer: 'Outside India, fees are invoiced in US dollars, so every Macquarie Park family pays the same rate. Payment starts only once the course and lesson time are settled after the trial; holidays, missed lessons and changes of format are explained on the pricing page.'
  },
  reviewsH2: 'Google reviews from the families we teach',
  book: {
    h2: 'Book a first Macquarie Park lesson',
    intro: 'Tell us the learner\'s age and one interest. A Year 9 student might start by counting taps in Python; an adult might begin with the station file itself.',
    success: 'Thank you. Our team will be in touch shortly about a Macquarie Park lesson.'
  },
  faq: {
    h2: 'Macquarie Park coding and AI questions',
    intro: 'What Macquarie Park families and adult learners tend to ask first.',
    items: [
      {
        q: 'How many people live in Macquarie Park?',
        a: 'The 2021 Census QuickStats for the Macquarie Park suburb record 11,071 residents with a median age of 31.'
      },
      {
        q: 'What is flow conservation in data?',
        a: 'It is the idea that, in a closed system, everything that goes in must come out somewhere. For a transport network it means total entries should match total exits over a long period, so a mismatch points to trips that leave or join the network unseen.'
      },
      {
        q: 'What does the Macquarie Park station project show?',
        a: 'Over 23 months, Macquarie University Station recorded 140,607 more exits than entries, with exits ahead in every month, while Macquarie Park Station recorded 31,490 more entries than exits. Learners compute both from the published monthly figures.'
      },
      {
        q: 'Does the project explain why the stations differ?',
        a: 'No. The published counts show where people tapped, not why, so the page describes the pattern and leaves the cause open.'
      },
      {
        q: 'Are there coding classes for younger children too?',
        a: 'Yes. Children can start at six with Scratch, games and counting puzzles, and move to Python when ready.'
      },
      {
        q: 'Are Copilot Studio agents taught in groups?',
        a: 'No. Copilot Studio agents are taught one to one only, since every workplace has its own data and permissions.'
      },
      {
        q: 'Do you have an office in Macquarie Park?',
        a: 'No. All lessons are live online, we have no premises in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'How much are coding classes for Macquarie Park learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many people are in a group?',
        a: 'Five to ten, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner\'s time.',
        boiler: true
      },
      {
        q: 'What does a learner need for lessons?',
        a: 'A computer with a keyboard, sound and a stable internet connection. No software has to be bought; the teacher sets up free tools in the first lesson.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Macquarie Park learners',
    html: 'The surrounding council area has its own page, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-ryde-sydney">Ryde</a>, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hornsby-sydney">Hornsby</a> is a short metro ride north. The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales guide</a> cover the wider city and state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Macquarie Park and Sydney',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-ryde-sydney', label: 'Ryde' },
    { href: '/vibe-coding-and-ai-agents-classes-in-lane-cove-sydney', label: 'Lane Cove' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-mqpk .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-mqpk .cg-hero h1 { font-weight: 760; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-mqpk .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.45rem 0 0.45rem 1.05rem; }
.cg-root.cg-mqpk .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-mqpk .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.012em; }
.cg-root.cg-mqpk .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.8rem); }
.cg-root.cg-mqpk .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-mqpk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mqpk .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-mqpk .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Macquarie Park, ABS Census 2021 QuickStats, Macquarie Park suburb SAL12446 (read 10 October 2026): 11,071 people; median age 31; 2,736 families; 6,142 private dwellings; average 2 people per household; flats or apartments 89.5% (4,282), separate houses 0.0%; bachelor degree or higher 58.5% (5,756); professionals 43.6%; aged 20 to 24 13.5% (1,490); aged 10 to 14 204 (1.8%); worked at home 50.5% (Census day in the 2021 lockdown). NSW Department of Education 2027 Eastern division Term 1: Wednesday 3 February to Friday 9 April. Sydney daylight saving 4 October 2026 to 4 April 2027 (IANA). NSW government schools file (Date_extracted 2026-10-02): no school with a Macquarie Park address; Marsfield has one.',
    localProject: 'Flow conservation on Transport for NSW Opal station usage (CC BY), October 2024 to August 2026, 23 months. Our sums: Macquarie Park Station entries 2,597,760, exits 2,566,270, net +31,490 (1.21%), entries above exits in 21 of 23 months, largest +3,176 (August 2026), deficits May 2025 (-865) and March 2026 (-1,334). Macquarie University Station entries 8,678,337, exits 8,818,944, net -140,607 (1.62%), exits above entries in 23 of 23 months, from -1,865 (December 2024) to -8,177 (March 2025). Both together -109,117. Running total checked against column sums. August 2026 entries: Macquarie Park 128,427; highest month March 2025, 129,460.',
    requiredMentions: ['2,597,760', '2,566,270', '8,678,337', '8,818,944', '140,607', '31,490', '5,756', '4,282', '109,117'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Macquarie Park suburb (SAL12446).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL12446' },
      {
        claim: 'Transport for NSW, Train, Metro and Light Rail Station Monthly Usage from November 2024, based on Opal batch data (Creative Commons Attribution), file updated 15 September 2026.',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution), Date_extracted 2026-10-02.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates (Eastern division).', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why Macquarie University Station records more exits than entries: the counts do not show cause, so none is claimed.',
      'That the two stations balance across the whole network: not tested; only the two stations were summed.',
      'That untapped or non-Opal trips are included: they are not in the published table.',
      'Any figure for the City of Ryde council area: kept to the Ryde page; this page uses the suburb only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education or the ABS.'
    ]
  }
};
