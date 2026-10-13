'use strict';
// Moonee Valley, Melbourne (cg- district page, Australia cluster Phase 8, row 270). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council-area page (ABS LGA25060, City of Moonee Valley) under Melbourne and Victoria.
// Spine: fit a straight line of FY24-25 station entries on FY18-19 entries across the network; one station drags the
// line, and leverage plus Cook's distance show which one. Moonee Valley's six stations barely move it.
// Data: DTP annual metropolitan station entries FY18-19 and FY24-25 (CC BY 4.0, rounded to 50). Our measurements
// (scratchpad au/b9/mnvl.py): 220 stations in both years; slope 0.7197, R squared 0.9924; Flinders Street leverage
// 0.493 (mean 0.0091), Cook's distance 22.34; slope without it 0.748; median station ratio 0.7524.
// Lesson family: influential points in linear regression (leverage and Cook's distance); claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MOONEE VALLEY',
    label: 'Moonee Valley, Melbourne',
    blurb: 'AI and programming classes for Moonee Valley, with a regression project in which one city station outweighs two hundred others.'
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
  slug: 'ai-and-programming-classes-in-moonee-valley-melbourne',
  code: 'mnvl',
  accent: '#28106A',
  accentRationale: 'Moonee Valley: a dark indigo violet (hue 254.9), picked by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, about 15:1 on white',
  pageType: 'city',
  place: {
    name: 'Moonee Valley',
    eyebrow: 'City of Moonee Valley, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Moonee Valley, Melbourne',
  title: 'AI and Programming Classes in Moonee Valley, Melbourne',
  description: 'Live online AI and programming classes for Moonee Valley children, teens and adults, with machine learning built on public data, in small groups or one to one.',
  ogDescription: 'Moonee Valley AI classes, with a regression project: one station carries a Cook\'s distance of 22.34 while local stations stay below 0.005.',
  twitterDescription: 'AI and programming for Moonee Valley learners, taught live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Moonee Valley',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in the City of Moonee Valley, taught live in English.'
  },
  h1: 'AI and programming classes in Moonee Valley',
  capsuleQ: 'What do AI and programming classes offer Moonee Valley learners?',
  capsule: 'Live online lessons where learners write the code behind machine learning and check what each model is really doing. Children begin with Scratch at six; teenagers and adults fit models to public data. The City of Moonee Valley had 121,851 residents in the 2021 Census, 6,727 of them aged 10 to 14.',
  lead: 'A straight line fitted to two years of station entries looks like a clean result: R squared of 0.9924. But a single point can hold a regression line almost by itself. We measured how much one Melbourne station decides the answer, and how little Essendon, Moonee Ponds and Newmarket do.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Moonee Valley.',
  picks: {
    eyebrow: 'Course picks for Moonee Valley',
    h2: 'Courses that check a model before trusting it',
    intro: 'The station regression uses Python, a little algebra and a habit of questioning results. These courses teach all three; the free first lesson finds the right level.',
    items: [
      {
        course: 'ai-ml-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Machine learning from first principles, starting with straight-line fits you build yourself.'
      },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Regression, classification and diagnostics on real datasets.' },
      {
        course: 'statistics-probability-maths-course',
        band: 'Secondary and adult',
        note: 'The statistics underneath: spread, correlation and why outliers matter.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI projects with patterns children can see and test.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Moonee Valley in the Census',
      h2: 'A council of houses, townhouses and young families',
      intro: 'Headline 2021 Census QuickStats figures for the City of Moonee Valley (ABS code LGA25060), set against Victoria.',
      body: [
        {
          kind: 'table',
          caption: 'Moonee Valley population snapshot, 2021',
          head: ['Item', 'Value'],
          rows: [
            ['Residents', '121,851'],
            ['Median age', '39'],
            ['Families', '32,394'],
            ['Private dwellings', '55,057'],
            ['People per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Moonee Valley set against the Victorian figure',
          head: ['Topic', 'Council', 'Victoria overall'],
          rows: [
            ['Semi-detached, row or townhouse homes', '21.3% (10,166)', '13.9%'],
            ['Separate houses', '55.4% (26,470)', '73.4%'],
            ['Adults with a bachelor degree or higher', '36.7% (37,489)', '29.2%'],
            ['Workers employed as professionals', '31.3% (20,066)', '25.0%'],
            ['Workers who drove to work', '40.6% (26,078)', '49.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children in the Census', p: 'Residents aged 5 to 9 numbered 6,710; those aged 10 to 14 numbered 6,727.' },
            { h3: 'Census night in lockdown', p: 'With Melbourne in lockdown, 34.1% of employed residents, 21,883 people, worked at home that August.' },
            {
              h3: 'Size of the council',
              p: 'The ABS boundary encloses about 43.1 square kilometres, from Flemington and Ascot Vale to Airport West and Keilor East.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau perturbs small cells for privacy, so every figure is shown as published and none is added to another to make a total of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which station decides the regression line?',
      intro: 'We took the 220 stations with entry counts in both FY18-19 and FY24-25 (joining McKinnon across a spelling change) and fitted FY24-25 entries against FY18-19 entries with ordinary least squares.',
      body: [
        {
          kind: 'table',
          caption: 'The fitted line and what it hides (our calculation)',
          head: ['Measure', 'Value'],
          rows: [
            ['Slope, all 220 stations', '0.7197'],
            ['Intercept', '53,922 entries'],
            ['R squared', '0.9924'],
            ['Slope without Flinders Street', '0.748'],
            ['Slope without the two most influential stations', '0.737'],
            ['Median of each station\'s own FY24-25 to FY18-19 ratio', '0.7524']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Leverage and Cook\'s distance, the four largest (our calculation)',
          head: ['Station', 'Cook\'s distance', 'Note'],
          rows: [
            ['Flinders Street', '22.34', 'Leverage 0.493 against an average of 0.0091'],
            ['Melbourne Central', '2.39', 'Also far above the usual cut-off'],
            ['Southern Cross', '2.28', 'Also far above the usual cut-off'],
            ['Parliament', '1.19', 'The last station above 1']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Leverage', p: 'How far a point sits from the others along the x-axis. Flinders Street alone holds almost half of the total leverage in the fit.' },
            { h3: 'Cook\'s distance', p: 'How much every fitted value would move if that one point were removed. Values above 1 are a common warning sign.' },
            { h3: 'A rule of thumb', p: 'Seven stations exceed the stricter 4 divided by n threshold of 0.0182; the other 213 do not.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Where Moonee Valley sits',
          p: 'Essendon and Moonee Ponds each kept 91.1% of their FY18-19 entries, Newmarket 67.2%, Ascot Vale 82.7%, Strathmore 77.8% and Glenbervie 71.5%. Each of the six local stations has leverage of about 0.005 and a Cook\'s distance no higher than 0.0045. Delete any one and the line barely moves; delete Flinders Street and the slope jumps from 0.7197 to 0.748.'
        },
        {
          kind: 'p',
          text: 'Entry counts are published by the Department of Transport and Planning, rounded to 50. The regression, the diagnostics and the ratios are our calculation. The headline R squared is high mostly because a few huge stations stretch the range; the simple median ratio of 0.7524 tells the typical story just as well.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'AI and programming',
      h2: 'From a fitted line to machine learning',
      intro: 'Fitting a line is the smallest machine learning model. Checking which points control it is a habit every model needs.',
      body: [
        {
          kind: 'table',
          caption: 'The same habit at three levels',
          head: ['Level', 'Task', 'What the learner checks'],
          rows: [
            ['Primary school', 'Draw a line through dots on paper', 'Does one far-away dot pull the line?'],
            ['Secondary school', 'Fit the station line in Python with NumPy', 'Leverage and Cook\'s distance for every station'],
            ['Adult', 'Train a model on work data', 'Which records the model leans on most']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Plot before fitting', p: 'A scatter plot shows Flinders Street sitting far from the rest before any formula is run.' },
            { h3: 'Refit without it', p: 'Removing a point and refitting is the simplest test of influence, and anyone can do it.' },
            { h3: 'Report both answers', p: 'Honest work gives the slope with and without the influential point and explains the choice.' }
          ]
        },
        {
          kind: 'p',
          text: 'None of this calls a station wrong. Flinders Street\'s figures are real; the lesson is that a model fitted to all stations mostly describes the biggest ones, which matters when the same model is used for small local stops.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Moonee Valley',
      h2: 'Six stations, thirty-six schools',
      intro: 'Local reference points from the rail entry series, the government school register and the term calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'The busiest local station', p: 'Essendon recorded 1,480,050 entries in FY18-19 and 1,347,950 in FY24-25, both rounded by the publisher.' },
            {
              h3: 'Thirty-six schools',
              p: 'In the 2025 list, 36 schools carry a Moonee Valley address: 24 primary, 8 secondary, 2 combined and 2 special. Government secondaries include Rosehill Secondary College, Buckley Park College and Strathmore Secondary College.'
            },
            { h3: 'Term 1, 2027', p: 'Thursday 28 January 2027 is the first day of Term 1 at Victorian government schools, and Thursday 25 March is the last.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council-wide figures',
          p: 'Every Census figure here covers the whole City of Moonee Valley; suburbs such as Essendon, Moonee Ponds and Ascot Vale also have their own separate QuickStats.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From patterns to models',
    intro: 'Age bands are only a starting guess; the trial class confirms the right rung.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and patterns',
        p: 'Games and animations that build sequencing and early reasoning.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and simple AI',
        p: 'First programs, then tiny models that learn from a handful of examples.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Regression, classification and the diagnostics that keep models honest.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Models, evaluation and deployment for study or work.',
        courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can fit the model, what does a Moonee Valley learner add?',
    intro: 'The judgement. An assistant will fit the station line and report R squared of 0.9924 without mentioning that one station carries the result.',
    p1: 'Ask an AI tool to "model the change in station entries" and it will usually produce a tidy regression with a confident summary. Unless someone asks, it rarely mentions leverage, refits without the extreme point or compares the slope with a simple median ratio. Those steps are where a learner earns their place.',
    p2: 'Learners who have watched Flinders Street dominate a fit know to ask which records a model leans on. That question transfers to every AI system they will use, from school projects to workplace dashboards, and it is learned by doing, not by reading.',
    closer: 'The Moonee Valley learner who asks what drives a model is the one who can safely use AI to build it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Essendon, Ascot Vale and Airport West homes',
    intro: 'Lessons happen on screen, so every Moonee Valley suburb is equally close.',
    cells: [
      { h3: 'Shared code and notebooks', p: 'The teacher sees the learner\'s code and plots as they are written.' },
      { h3: 'Victorian calendar', p: 'Lesson plans follow state school terms and break for holidays.' },
      { h3: 'A genuine first class', p: 'The free trial is a full lesson that ends with a level and a course suggestion.' },
      { h3: 'Small, matched groups', p: 'Groups of fifteen to twenty are formed by level and pace, sometimes across states.' },
      { h3: 'Twice a week', p: 'Two fixed lessons each week, about eight a month, with planned breaks.' },
      { h3: 'Teachers in India', p: 'A 4pm Moonee Valley class in daylight saving starts at 10:30am India time, and at 11:30am there after April.' }
    ],
    spec: {
      title: 'Clocks in Melbourne and India',
      p: 'Melbourne daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027; India does not change its clocks. Lesson times are always agreed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Moonee Valley class fees',
    intro: 'Three straightforward prices.',
    first: 'The first lesson is free and ends with a clear recommendation.',
    group: 'One month of group lessons, usually eight, with fifteen to twenty learners at a similar level.',
    private: 'About eight lessons a month with a dedicated teacher.',
    closer: 'International learners are invoiced in US dollars. Billing waits until the trial has happened and you have chosen a course and time; the pricing page explains breaks, absences and format swaps.'
  },
  reviewsH2: 'What families and learners say on Google',
  book: {
    h2: 'Book a first Moonee Valley lesson',
    intro: 'Give us an age and a hobby or subject the learner enjoys. Older students tend to open the first session with a scatter plot of the stations; children under ten more often build a Scratch game that spots a repeating pattern.',
    success: 'Thank you. Our team will contact you soon about a Moonee Valley lesson.'
  },
  faq: {
    h2: 'Moonee Valley AI and programming questions',
    intro: 'Questions Moonee Valley families and adults often ask.',
    items: [
      {
        q: 'How large is the Moonee Valley population?',
        a: 'The 2021 Census QuickStats record 121,851 residents in the City of Moonee Valley, with a median age of 39 and 32,394 families.'
      },
      {
        q: 'What is an influential point in regression?',
        a: 'It is a data point that changes the fitted line a lot when removed. It usually combines high leverage, being far from the other x values, with not lying exactly on the line.'
      },
      {
        q: 'What is Cook\'s distance?',
        a: 'A number for each point that measures how much all fitted values shift if that point is left out. In our station fit, Flinders Street scored 22.34 while 213 of the 220 stations scored below 0.0182.'
      },
      {
        q: 'What did the Moonee Valley project show?',
        a: 'Across 220 stations the slope was 0.7197, but removing Flinders Street alone raised it to 0.748. Moonee Valley\'s six stations had almost no influence on the line.'
      },
      {
        q: 'How do AI and programming classes differ from coding classes?',
        a: 'They cover the same programming foundations, then go further into how models learn from data and how to test whether they can be trusted.'
      },
      {
        q: 'Are Claude-based courses open to teenagers?',
        a: 'No. Anything built on Claude is restricted to learners who are 18 or older, so secondary students learn with different tools.'
      },
      {
        q: 'Is there a centre in Moonee Valley?',
        a: 'No. All classes are live online, there is no office in Australia, and the number we list is an Indian phone number.',
        boiler: true
      },
      {
        q: 'What do classes cost for Moonee Valley learners?',
        a: 'The first lesson is free. Group classes are USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one classes are USD 150 a month. Course, format and time are agreed before anything is paid.',
        boiler: true
      },
      {
        q: 'How many learners are in each group?',
        a: 'Five to ten, matched by level, pace and goal. If no group suits the learner\'s schedule, one-to-one lessons are offered instead.',
        boiler: true
      },
      {
        q: 'Do I need a powerful computer?',
        a: 'No. A laptop or desktop with a current browser handles every project here, including the station regression.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Moonee Valley learners',
    html: 'Across the north, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-darebin-melbourne">Darebin</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-banyule-melbourne">Banyule</a> have their own pages, and the west has <a class="cg-inline-link" href="/ai-and-programming-classes-in-point-cook-melbourne">Point Cook</a>. For the whole metropolitan area there is <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">our Melbourne overview</a>, and for the state, <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI across Victoria</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Moonee Valley and Melbourne',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-darebin-melbourne', label: 'Darebin' },
    { href: '/ai-and-programming-classes-in-point-cook-melbourne', label: 'Point Cook' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-mnvl .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.4vw, 2.6rem); }
.cg-root.cg-mnvl .cg-hero h1 { font-weight: 650; letter-spacing: -0.017em; line-height: 1.07; }
.cg-root.cg-mnvl .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-mnvl .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-mnvl .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.009em; }
.cg-root.cg-mnvl .cg-grid-3 { gap: clamp(0.8rem, 2.3vw, 1.7rem); }
.cg-root.cg-mnvl .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-mnvl .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-mnvl .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-mnvl .cg-callout { border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'City of Moonee Valley, ABS Census 2021 QuickStats, Moonee Valley LGA25060 (read 11 October 2026): 121,851 people; median age 39; 32,394 families; 55,057 private dwellings; 2.4 per household; separate house 55.4% (26,470; Victoria 73.4%); semi-detached 21.3% (10,166; Victoria 13.9%); bachelor or higher 36.7% (37,489); professionals 31.3% (20,066); drove 40.6% (26,078); worked at home 34.1% (21,883, lockdown); aged 5-9 6,710; aged 10-14 6,727. ABS area 43.1384 sq km. Victorian School Locations 2025: 36 schools (24 primary, 8 secondary, 2 Pri/Sec, 2 special); Rosehill SC, Buckley Park College, Strathmore SC named. 6 stations inside boundary by our point-in-polygon check: Strathmore, Glenbervie, Essendon, Moonee Ponds, Ascot Vale, Newmarket. Essendon 1,480,050 (FY18-19), 1,347,950 (FY24-25). Vic 2027 Term 1: 28 January to 25 March. DST 4 Oct 2026 to 4 Apr 2027 (IANA).',
    localProject: 'Influential points in linear regression. 220 stations present in both FY18-19 and FY24-25 (McKinnon/Mckinnon joined). OLS FY24-25 ~ FY18-19: slope 0.7197, intercept 53,922, R squared 0.9924. Leverage: Flinders Street 0.493 vs mean 0.0091; Cook distance Flinders Street 22.34, Melbourne Central 2.39, Southern Cross 2.28, Parliament 1.19; 7 stations above 4/n = 0.0182. Slope without Flinders Street 0.748; without top two 0.737. Median per-station ratio 0.7524. Moonee Valley ratios: Essendon 91.1%, Moonee Ponds 91.1%, Newmarket 67.2%, Ascot Vale 82.7%, Strathmore 77.8%, Glenbervie 71.5%; leverages about 0.0046-0.0048, Cook distance at most 0.0045. Script: scratchpad au/b9/mnvl.py.',
    requiredMentions: ['121,851', '32,394', '10,166', '6,727', '22.34', '0.7524', '1,480,050', 'Rosehill Secondary College', 'Glenbervie'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Moonee Valley local government area (LGA25060).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA25060'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) LGA boundary LGA25060, geo.abs.gov.au map service, used for our point-in-boundary checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'R. Dennis Cook (1977), Detection of Influential Observation in Linear Regression, Technometrics 19(1), 15-18, DOI 10.1080/00401706.1977.10489493.',
        url: 'https://doi.org/10.1080/00401706.1977.10489493'
      },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Any cause for the change in entries at any station: not claimed.',
      'That Flinders Street figures are errors or outliers to be removed: not claimed; the point is influence, not wrongness.',
      'A total of entries across Moonee Valley stations: not computed; published parts are never summed.',
      'Names of special or non-government schools: not used.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Moonee Valley City Council, the Department of Education or the Department of Transport and Planning.'
    ]
  }
};
