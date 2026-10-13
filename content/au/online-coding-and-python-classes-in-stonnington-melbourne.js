'use strict';
// Stonnington, Melbourne (cg- district page, Australia cluster Phase 8, row 269). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page (ABS LGA26350, City of Stonnington) under Melbourne and Victoria.
// Spine: a Python script builds seven years of entries for every metropolitan station; what does a too-broad
// "except" hide, and why do Stonnington's own 15 stations never reveal the bug?
// Data: Department of Transport and Planning annual metropolitan station entries FY18-19 to FY24-25 (CC BY 4.0,
// rounded to 50). Our measurements (scratchpad au/b9/stnn.py): 225 names x 7 years = 1,575 cells; except Exception
// -> 20 silent zeros (McKinnon 6 + Mckinnon 1, East Pakenham 5, Union 4, Mont Albert 2, Surrey Hills 2); a column
// typo under except Exception -> all 1,575 cells zero, no error; narrow except KeyError -> immediate KeyError 'Pax_Annual'.
// Lesson family: Python exception handling, too-broad except hiding errors; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'STONNINGTON',
    label: 'Stonnington, Melbourne',
    blurb: 'Online coding and Python classes for Stonnington, with a project on how one careless line of error handling turned 20 station figures into silent zeros.'
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
  slug: 'online-coding-and-python-classes-in-stonnington-melbourne',
  code: 'stnn',
  accent: '#3B2088',
  accentRationale: 'Stonnington: a deep ultramarine (hue 254.5), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 11.2:1 on white',
  pageType: 'city',
  place: {
    name: 'Stonnington',
    eyebrow: 'City of Stonnington, Melbourne, Victoria',
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
  routeLabel: 'Stonnington, Melbourne',
  title: 'Online Coding and Python Classes in Stonnington, Melbourne',
  description: 'Live online coding and Python classes for Stonnington children, teens and adults, with real data projects and careful error handling, in small groups or one to one.',
  ogDescription: 'Stonnington Python classes, with a project: one broad except clause silently turned 20 of 1,575 station-year figures into zeros.',
  twitterDescription: 'Python and coding for Stonnington learners, live online with a teacher, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Stonnington',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in the City of Stonnington, taught live in English.'
  },
  h1: 'Online coding and Python classes in Stonnington',
  capsuleQ: 'What do Stonnington learners get from live online Python classes?',
  capsule: 'A teacher who writes and runs real Python with them, then shows how programs fail and how to make failures visible. Children start with Scratch at six; teenagers and adults work on public data. The City of Stonnington counted 104,703 residents in the 2021 Census, more than half of them living in flats or apartments.',
  lead: 'Victoria publishes yearly entry counts for every metropolitan train station, one file per year. A short Python script can stitch seven files into one table. Wrap the lookup in a broad try and except to "skip bad rows", though, and the script stops telling you when something is wrong. We measured exactly what it hid.',
  wa: 'Hello Modern Age Coders, I would like a free Python or coding class for a learner in Stonnington.',
  picks: {
    eyebrow: 'Course picks for Stonnington',
    h2: 'Courses that treat errors as information',
    intro: 'The station project depends on reading files, dictionaries and exceptions properly. These courses build each skill, and the trial lesson places the learner.',
    items: [
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Python from the ground up, including try, except, else and finally used with care.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Robust scripts for work: error handling, logging and tests.'
      },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Cleaning and checking public datasets before anyone draws conclusions.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python projects where error messages are explained, not hidden.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Stonnington in the Census',
      h2: 'Apartments, short commutes and many professionals',
      intro: 'Headline figures for the City of Stonnington (ABS code LGA26350) from the 2021 Census QuickStats, alongside Victoria.',
      body: [
        {
          kind: 'table',
          caption: 'Stonnington at a glance (Census 2021)',
          head: ['Count', 'City of Stonnington'],
          rows: [
            ['Residents', '104,703'],
            ['Median age', '37'],
            ['Families', '25,493'],
            ['Private dwellings', '59,509'],
            ['People per household', '2.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How Stonnington differs from the state',
          head: ['Indicator', 'Stonnington share', 'State share'],
          rows: [
            ['Homes that are flats or apartments', '53.1% (25,059)', '12.1%'],
            ['Adults with a bachelor degree or higher', '53.1% (49,196)', '29.2%'],
            ['Workers employed as professionals', '41.1% (25,201)', '25.0%'],
            ['Workers who took the train to work', '4.0% (2,429)', '1.6%'],
            ['Workers who drove to work', '28.4% (17,438)', '49.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School-age residents', p: 'The Census counted 3,859 residents aged 5 to 9 and 4,206 aged 10 to 14.' },
            { h3: 'Lockdown Census day', p: 'In August 2021, during a lockdown, 44.0% of employed residents, 27,006 people, worked from home.' },
            { h3: 'A small, dense council', p: 'The ABS boundary covers about 25.7 square kilometres from South Yarra to Glen Iris.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau slightly adjusts table cells for confidentiality, so figures appear exactly as published and are never added together to form our own totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'What did a broad except hide?',
      intro: 'Seven yearly files, FY18-19 to FY24-25, name 225 different stations between them. A table of every station against every year has 1,575 cells. We filled it three ways and compared what each version admitted to.',
      body: [
        {
          kind: 'table',
          caption: 'Three versions of the same loop (our measurement)',
          head: ['Version', 'What it does on a problem', 'Result'],
          rows: [
            ['except Exception: value = 0', 'Swallows any error and writes zero', '20 cells silently become 0'],
            ['Same, with a typo: Pax_Annual', 'Swallows the KeyError on every row', 'All 1,575 cells become 0, no message'],
            [
              'except KeyError around the name only',
              'Skips missing stations, lets other errors through',
              'Stops at once: KeyError \'Pax_Annual\''
            ]
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Where the 20 silent zeros came from',
          head: ['Name in the table', 'Years with no matching row', 'Why'],
          rows: [
            ['McKinnon', '6', 'Spelled Mckinnon in every file before FY24-25'],
            ['East Pakenham', '5', 'First appears in FY23-24'],
            ['Union', '4', 'First appears in FY22-23'],
            ['Mont Albert, Surrey Hills', '2 each', 'No row in FY23-24 or FY24-25'],
            ['Mckinnon', '1', 'The older spelling, absent from FY24-25']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Zero is a claim',
              p: 'Writing 0 says "nobody entered the station". For a station that had no row that year, the honest value is missing, not zero.'
            },
            { h3: 'Catch narrowly', p: 'Catch only the error you expect, at the line where you expect it, and let everything else crash loudly.' },
            {
              h3: 'Count what you skipped',
              p: 'A script that skips records should report how many and which ones, so a person can decide whether that is acceptable.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why Stonnington never showed the bug',
          p: 'All 15 stations inside the Stonnington boundary, from South Yarra to Heyington, have a row in every one of the seven files. A learner who tested the script only on local stations would see perfect output and ship it. The problems sat at stations elsewhere on the network, which is why testing must include the awkward cases.'
        },
        {
          kind: 'p',
          text: 'The entry figures are the publisher\'s, rounded to 50; the table, the three versions of the loop and every count above are our own work. We do not claim any reason why a station appears or disappears between files.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Python habits',
      h2: 'Four habits that keep errors honest',
      intro: 'Error handling is where tidy-looking code most often lies. These are the habits learners practise until they are automatic.',
      body: [
        {
          kind: 'table',
          caption: 'Habits, with the Stonnington example',
          head: ['Habit', 'In code', 'In the station project'],
          rows: [
            ['Catch the specific error', 'except KeyError, not except Exception', 'Missing stations are expected; typos are not'],
            ['Keep the try block small', 'Wrap only the lookup that can fail', 'The column name sits outside the try'],
            ['Record what was skipped', 'Append to a list, print the count', '20 skipped cells, listed by name'],
            ['Use None for unknown', 'value = None rather than 0', 'Averages and totals stop pretending']
          ]
        },
        {
          kind: 'p',
          text: 'A Stonnington station such as Windsor makes the point: 915,800 entries in FY18-19 and 586,800 in FY24-25, 64.1% of the earlier figure. Every one of those numbers is real; a zero hidden among them would distort any average built from the table.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Read real Scratch and Python error messages aloud and guess what each one means before fixing it.' },
            { h3: 'Secondary students', p: 'Run all three versions of the loop and explain every difference in the output.' },
            { h3: 'Adults', p: 'Search a work script for bare except clauses and replace each one with something specific.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Stonnington',
      h2: 'Fifteen stations, twenty-four schools',
      intro: 'A few local markers, taken from rail patronage data, the Victorian schools file and the 2027 calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'The busiest local station',
              p: 'South Yarra recorded 4,367,150 entries in FY18-19 and 3,199,050 in FY24-25, 73.3% of the earlier year, both rounded by the publisher.'
            },
            {
              h3: 'The state list',
              p: 'The 2025 file gives 24 schools a Stonnington address: 11 primary, 3 secondary, 8 combined and 2 special. Prahran High School is among the government secondaries.'
            },
            {
              h3: 'Term 1, 2027',
              p: 'For government schools across Victoria, the 2027 school year opens on Thursday 28 January, and the first term wraps up on Thursday 25 March.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Council-wide figures',
          p: 'The Census numbers on this page cover the whole City of Stonnington, including Prahran, Windsor, Toorak, Armadale and Malvern; each suburb has its own separate figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading error messages to robust scripts',
    intro: 'Treat the ages as rough; a first free lesson tells us where to begin.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and debugging',
        p: 'Games that break on purpose so children learn to find and fix the problem.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Variables, loops and files, with every error message explained.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Reading public files, handling missing values and testing edge cases.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Reliable scripts',
        p: 'Error handling, logging and automated tests for work tasks.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools write Python fast. Why should a Stonnington student learn error handling?',
    intro: 'Because AI-written scripts often wrap risky code in a broad except to make it "robust", and that is exactly the pattern that hid 20 wrong values here.',
    p1: 'Ask an assistant to make the station loop "not crash on bad data" and a common answer is try followed by except Exception with a default value. The script then runs without complaint whatever happens, including the typo that turned all 1,575 cells into zeros. It looks finished and is quietly broken.',
    p2: 'A learner who has watched that happen reads AI-generated code differently. They look for broad catches, ask what each default value claims, and insist that skipped records are counted. Those questions make AI a faster helper instead of a hidden source of errors.',
    closer: 'The Stonnington learner who questions an AI\'s error handling is the one whose results can be trusted.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live from a Stonnington apartment or study',
    intro: 'Every class is on screen, so a learner in Toorak joins the same way as one in Windsor.',
    cells: [
      { h3: 'Code from the first minute', p: 'Teacher and learner share a screen and edit the same program together.' },
      { h3: 'Victorian terms', p: 'Plans follow the state school terms and pause over the holidays.' },
      { h3: 'A real trial lesson', p: 'The free first class teaches proper content and ends with a recommendation.' },
      { h3: 'Fifteen to twenty per group', p: 'Learners matched on level and pace, sometimes from several states.' },
      { h3: 'Two lessons each week', p: 'Fixed times, about eight lessons a month, with breaks planned ahead.' },
      { h3: 'Teachers in India', p: 'A 5:30pm Stonnington lesson in daylight saving begins at noon India time; after April it begins at 1pm there.' }
    ],
    spec: {
      title: 'Daylight saving and India time',
      p: 'Melbourne clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India keeps the same time all year. Lesson times are given in Melbourne time.'
    }
  },
  fees: {
    h2: 'Stonnington class fees',
    intro: 'Three prices, with nothing extra later.',
    first: 'The first lesson is free and ends with an honest suggestion.',
    group: 'One month of group lessons, typically eight, with fifteen to twenty learners at a matched level.',
    private: 'Around eight lessons a month with one teacher and one learner.',
    closer: 'Outside India, every family is billed in US dollars, and no money changes hands before the trial is done and a course and slot are settled. The pricing page covers holidays, missed classes and switching between group and private.'
  },
  reviewsH2: 'Google reviews from families and learners we teach',
  book: {
    h2: 'Book a first Stonnington lesson',
    intro: 'Which year level is the learner in, and what do they like doing? Secondary students often begin by opening one of the station files in Python, while primary children usually debug a small Scratch game first.',
    success: 'Thank you. Our team will be in touch soon about a Stonnington lesson.'
  },
  faq: {
    h2: 'Stonnington Python and coding questions',
    intro: 'Questions Stonnington families and adult learners tend to ask first.',
    items: [
      {
        q: 'What is the population of Stonnington?',
        a: 'The 2021 Census QuickStats for the City of Stonnington record 104,703 residents, a median age of 37 and 25,493 families.'
      },
      {
        q: 'What is exception handling in Python?',
        a: 'It is the try and except mechanism that lets a program respond when something goes wrong, such as a missing key or a bad number. Good handling catches only the errors you expect and reports the rest.'
      },
      {
        q: 'What did the Stonnington station project find?',
        a: 'Filling a 1,575-cell table of station entries, a broad except clause silently wrote zero into 20 cells, and with one typo it wrote zero into all of them. Catching only KeyError made the typo crash immediately instead.'
      },
      {
        q: 'Why is a bare except a problem?',
        a: 'It catches every error, including mistakes in your own code, and lets the program carry on as if nothing happened. Results can be wrong with no warning at all.'
      },
      {
        q: 'When do children start Python?',
        a: 'Most start with Scratch at six and move to Python between about nine and twelve, depending on reading and typing.'
      },
      {
        q: 'Are Copilot Studio agents part of group classes?',
        a: 'No. We run Copilot Studio as private one-to-one tuition; Stonnington group learners build their agents in plain Python instead.'
      },
      {
        q: 'Is there a classroom in Stonnington?',
        a: 'No. Every lesson is live online, we have no premises in Australia, and the phone number shown is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do classes cost for Stonnington learners?',
        a: 'The first lesson is free. Group lessons then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'How big is each group?',
        a: 'Fifteen to twenty learners, grouped by level, pace and goal. When no group suits the learner\'s time, one-to-one lessons are offered.',
        boiler: true
      },
      {
        q: 'Can adults learn Python with you?',
        a: 'Yes. Grown-ups study in adult groups or privately, and many arrive wanting to tidy a report or a spreadsheet they deal with weekly.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Stonnington learners',
    html: 'To the south, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-glen-eira-melbourne">Glen Eira</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-bayside-melbourne">Bayside</a> have their own pages. Inner-city families comparing options can also read our <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne-wide overview</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victorian state guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Stonnington and Melbourne',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-glen-eira-melbourne', label: 'Glen Eira' },
    { href: '/best-coding-and-ai-classes-in-bayside-melbourne', label: 'Bayside' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-stnn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.4rem); }
.cg-root.cg-stnn .cg-hero h1 { font-weight: 700; letter-spacing: -0.014em; line-height: 1.09; }
.cg-root.cg-stnn .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1.05rem; }
.cg-root.cg-stnn .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-stnn .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.011em; }
.cg-root.cg-stnn .cg-grid-3 { gap: clamp(0.85rem, 2.1vw, 1.65rem); }
.cg-root.cg-stnn .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-stnn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-stnn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-stnn .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'City of Stonnington, ABS Census 2021 QuickStats, Stonnington LGA26350 (read 11 October 2026): 104,703 people; median age 37; 25,493 families; 59,509 private dwellings; 2.1 people per household; flats 53.1% (25,059; Victoria 12.1%); bachelor degree or higher 53.1% (49,196; Victoria 29.2%); professionals 41.1% (25,201; Victoria 25.0%); train to work 4.0% (2,429); drove to work 28.4% (17,438; Victoria 49.9%); worked at home 44.0% (27,006, lockdown Census day); aged 5-9 3,859; aged 10-14 4,206. ABS area 25.651 sq km. Victorian School Locations 2025: 24 schools with LGA_Name Stonnington (C): 11 primary, 3 secondary, 8 Pri/Sec, 2 special; Prahran High School named. 15 stations inside the LGA boundary by our point-in-polygon check (Glen Iris, Darling, East Malvern, Holmesglen, Heyington, Kooyong, Tooronga, Gardiner, Malvern, Armadale, Toorak, Hawksburn, Windsor, Prahran, South Yarra); South Yarra 4,367,150 (FY18-19) and 3,199,050 (FY24-25); Windsor 915,800 and 586,800. Victorian 2027 Term 1 starts Thursday 28 January, ends Thursday 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Python exception handling. Seven metropolitan station-entry files FY18-19 to FY24-25; 225 distinct Stop_name values; table of 1,575 station-year cells. Version A, try: int(look[fy][name][Pax_annual]) except Exception: 0 -> 20 silent zeros: McKinnon 6 (spelled Mckinnon before FY24-25), Mckinnon 1, East Pakenham 5 (first in FY23-24), Union 4 (first in FY22-23), Mont Albert 2 and Surrey Hills 2 (no rows in FY23-24, FY24-25). Version B, same with typo Pax_Annual -> all 1,575 cells zero, no error. Version C, except KeyError around the name lookup only -> KeyError Pax_Annual raised immediately. All 15 Stonnington stations have rows in all 7 files. No cause claimed for any station appearing or disappearing. Script: scratchpad au/b9/stnn.py.',
    requiredMentions: ['104,703', '25,493', '25,059', '4,206', '1,575 cells', '4,367,150', '915,800', 'Prahran High School', 'Heyington'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Stonnington local government area (LGA26350).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA26350'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) LGA boundary LGA26350, geo.abs.gov.au map service, used for our point-in-boundary checks.',
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
      { claim: 'Python documentation, Errors and Exceptions (handling exceptions, try and except).', url: 'https://docs.python.org/3/tutorial/errors.html' },
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
      'Any reason why a station appears, disappears or changes spelling between files: not claimed.',
      'That the published files contain errors: not claimed; the missing cells reflect stations without rows in some years.',
      'A total of entries across Stonnington stations: not computed; published parts are never summed.',
      'Names of selective, special or non-government schools: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Stonnington City Council, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
