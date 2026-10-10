'use strict';
// Rouse Hill, Sydney (cg- district page, Australia cluster Phase 8, row 235). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*). Rouse Hill is an ABS suburb and locality (SAL13444) in north-west Sydney.
// Parents: Australia, NSW, Sydney.
// Spine: tests built from Rouse Hill station's 46 monthly rows give a station-count cleaner 100% line coverage. Why
// does it still crash on 745 rows of the statewide Opal file, and what does branch coverage show that line coverage hides?
// Data: Transport for NSW, Train, Metro and Light Rail Station Monthly Usage (Opal batch data, CC BY), October 2024 to
// August 2026, 17,218 rows, 23 months. Our checks (scratchpad au/b5/rsh_cov.py): Rouse Hill Station is type Metro, 46 rows
// (23 entry, 23 exit), all whole numbers; the three-line cleaner passes every Rouse Hill test with all body lines run;
// the False outcome of its if is never taken; on the full file 745 rows read "Less than 50" (722 Train, 23 Light rail;
// 368 entry, 377 exit) at 31 stations and each raises UnboundLocalError. Rouse Hill entries: lowest 101,049 (January
// 2025), highest 151,886 (August 2026); 23-month entries our sum 2,946,119, ninth of 16 Metro-type stations.
// Lesson family: line coverage vs branch coverage (code coverage); screened 0 location-page hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Rouse Hill (NSW) SAL13444; ABS ASGS 2021 SAL area.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health, journey to work (2021
// Census was taken during a lockdown period); enrolment, ICSEA, Indigenous, LBOTE and selective columns.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'ROUSE HILL',
    label: 'Rouse Hill, Sydney',
    blurb: 'Coding and AI classes for Rouse Hill, with a testing project on the metro station data that a fully covered function still gets wrong.'
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
  slug: 'best-coding-and-ai-classes-in-rouse-hill-sydney',
  code: 'rshl',
  accent: '#106944',
  accentRationale: 'Rouse Hill: a deep eucalyptus green (hue 156), chosen by hand at least 10 RGB units from every accent declared in content, the shared stylesheets and the claims log, with strong contrast on white and the paper tints',
  pageType: 'city',
  place: {
    name: 'Rouse Hill',
    eyebrow: 'Rouse Hill, north-west Sydney',
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
  routeLabel: 'Rouse Hill, Sydney',
  title: 'Best Coding and AI Classes in Rouse Hill, Sydney',
  description: 'Live online coding and AI classes for Rouse Hill kids, teens and adults, from Scratch at six to Python testing on real metro station data. First lesson free.',
  ogDescription: 'Coding and AI for Rouse Hill, with a testing project: 100% line coverage on the metro data, 745 crashes on the statewide file.',
  twitterDescription: 'Rouse Hill online coding and AI classes, live for ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Rouse Hill',
    description: 'Small-group and one-to-one online coding, Python and AI lessons for children, teenagers and adults in Rouse Hill, Sydney, taught live in English.'
  },
  h1: 'Coding and AI classes in Rouse Hill',
  capsuleQ: 'What makes the best coding and AI classes for Rouse Hill learners?',
  capsule: 'Live teaching, a group matched to the learner\'s level, and projects that are tested properly on real data. We run classes from Scratch at six through to Python and AI for adults. Rouse Hill is a suburb of about 12.8 square kilometres; the 2021 Census counted 11,349 residents there, median age 34.',
  lead: 'Write a tiny Python function that turns a station count such as "118601" into a number, test it on every monthly row Rouse Hill Station has, and every test passes. A coverage tool even reports that each line of the function ran. Then feed it the whole statewide usage file and it crashes 745 times. The function was never wrong for Rouse Hill. It was untested for a value Rouse Hill never produces, and only branch coverage says so.',
  wa: 'Hello Modern Age Coders, we would like a free coding or AI lesson for a learner in Rouse Hill.',
  picks: {
    eyebrow: 'Course picks for Rouse Hill',
    h2: 'Courses that teach code you can trust',
    intro: 'Every course here reaches testing: writing checks, choosing inputs and finding the cases a program has never seen. The free trial lesson sets the starting level, with no card details asked for.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python programs, with simple checks that prove each part works.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 17', note: 'Functions, files and unit tests, applied to public data files.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning projects where clean, tested data comes first.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Beginner to confident Python, including testing and debugging habits.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Rouse Hill in the Census',
      h2: 'A young suburb with more teenagers than the state average',
      intro: 'Figures from the statistics bureau\'s QuickStats for the Rouse Hill suburb and locality, beside New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Rouse Hill, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '11,349'],
            ['Median age', '34'],
            ['Families', '3,092'],
            ['Private dwellings', '4,159'],
            ['Suburb area', 'About 12.8 square kilometres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How Rouse Hill compares',
          head: ['Indicator', 'Rouse Hill', 'NSW', 'Australia'],
          rows: [
            ['Flats or apartments among occupied homes', '25.4% (932)', '21.7%', '14.2%'],
            ['Townhouses and semi-detached homes', '19.9% (732)', '11.7%', '12.6%'],
            ['Couple families with children', '57.8% (1,788)', '44.7%', '43.7%'],
            ['Residents aged 15 to 19', '8.1% (925)', '5.7%', '5.7%'],
            ['Bachelor degree or higher', '36.0% (3,238)', '27.8%', '26.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'A mix of home types',
              p: 'Separate houses are just over half the occupied homes, at 54.4%, so apartments and townhouses make up a larger share here than in much of north-west Sydney.'
            },
            { h3: 'Plenty of teenagers', p: 'One resident in twelve was aged 15 to 19, and 7.3% were aged 10 to 14, both above the state shares.' },
            {
              h3: 'Managers and professionals',
              p: 'Managers were 17.3% of employed residents and professionals 28.2%, against 14.6% and 25.8% across New South Wales.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'These numbers describe the suburb, not a council area. The bureau adjusts small counts for privacy, so the parts of a table may not reach its published total, and we never add parts together to make one.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Every test passed, every line ran, and the code still crashed',
      intro: 'Transport for NSW publishes monthly entries and exits for every train, metro and light rail station. We used the file covering October 2024 to August 2026.',
      body: [
        {
          kind: 'table',
          caption: 'The cleaner and its tests (our run)',
          head: ['Check', 'Result on Rouse Hill rows', 'Result on the whole file'],
          rows: [
            ['Rows tested', '46 (23 entry, 23 exit)', '17,218'],
            ['Values that are plain whole numbers', 'All 46', 'All but 745'],
            ['Tests passing', '46 of 46', 'Crashes on 745 rows'],
            ['Lines of the function that ran', '3 of 3', '3 of 3'],
            ['Outcomes of the if statement taken', '1 of 2 (only True)', '2 of 2']
          ]
        },
        {
          kind: 'callout',
          h3: 'The function under test',
          p: 'A three-line function body: <code>if value.isdigit(): n = int(value)</code>, then <code>return n</code>. When the text is a whole number it works. When it is anything else, <code>n</code> was never set and Python stops with an UnboundLocalError.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Line coverage',
              p: 'Asks only whether each line ran at least once. With Rouse Hill data every line runs, so a line report reads 100% and looks finished.'
            },
            {
              h3: 'Branch coverage',
              p: 'Asks whether each decision went both ways. The if was never False in the tests, so half of its outcomes are untested, and that is exactly where the bug lives.'
            },
            {
              h3: 'What the file contains',
              p: 'Busy stations publish exact counts. Some quieter stations publish the text "Less than 50" for a month, and the function has no answer for that text.'
            }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Where "Less than 50" appears (our count)',
          head: ['Group', 'Rows'],
          rows: [
            ['Train stations', '722'],
            ['Light rail stops', '23'],
            ['Entry rows', '368'],
            ['Exit rows', '377'],
            ['Stations involved', '31']
          ]
        },
        {
          kind: 'callout',
          h3: 'The fix, and the test that proves it',
          p: 'Give the False outcome its own path: return None for "Less than 50" and raise an error for any other text. Then add one test that feeds the function "Less than 50". Branch coverage rises to two of two, and the 745 rows become counted gaps instead of crashes.'
        },
        {
          kind: 'p',
          text: 'All counts above come from our own Python run on the published file. A count shown as "Less than 50" is the transport agency\'s own privacy rule for small numbers, not a missing record.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Rouse Hill Station in numbers',
      h2: 'What the metro file says about Rouse Hill',
      intro: 'Once the cleaner is fixed, the same file answers questions about the station at the end of the line.',
      body: [
        {
          kind: 'table',
          caption: 'Rouse Hill Station entries (our reading of the monthly file)',
          head: ['Question', 'Answer'],
          rows: [
            ['Quietest month for entries', 'January 2025, 101,049'],
            ['Busiest month for entries', 'August 2026, 151,886'],
            ['Entries over all 23 months', '2,946,119 (our sum)'],
            ['Rank among the 16 Metro-type stations by entries', 'Ninth']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Plot the 23 monthly entry counts as a bar chart and spot the quiet summer month.' },
            { h3: 'Teenagers', p: 'Write the cleaner, write tests that reach both branches, then rank every metro station.' },
            { h3: 'Adults', p: 'Run a coverage tool with branch measurement switched on over your own scripts and see what it was hiding.' }
          ]
        },
        {
          kind: 'p',
          text: 'The monthly entries are Opal tap-ons, so they count trips rather than people, and we give no reason for any rise or fall. Transport for NSW publishes the file and is not connected with Modern Age Coders.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'School year',
      h2: 'Rouse Hill\'s public schools and the 2027 calendar',
      intro: 'The education department\'s school list names four government schools with a Rouse Hill address.',
      body: [
        {
          kind: 'table',
          caption: 'Government schools with a Rouse Hill address (NSW Department of Education)',
          head: ['School', 'Level', 'First teacher'],
          rows: [
            ['Rouse Hill Public School', 'Primary', '1875'],
            ['Ironbark Ridge Public School', 'Primary', '2005'],
            ['Rouse Hill High School', 'Secondary', '2009'],
            ['Tallawong Public School', 'Primary', '2024']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Two councils on one list',
              p: 'The department places three of the four schools in The Hills council area and Tallawong Public School in Blacktown.'
            },
            { h3: '2027 Term 1', p: 'Students in the Eastern division start on Wednesday 3 February 2027 and finish the term on Friday 9 April.' },
            { h3: 'Our classes', p: 'Weekly lessons pause for state school holidays and restart at each learner\'s agreed time.' }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Scratch games to tested Python',
    intro: 'The ages are a guide. The free first lesson decides where a learner begins.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games with if blocks, and checking that every path through the game has been played.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'First Python',
        p: 'Functions, loops and simple tests written beside the code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'Testing real data',
        p: 'Files, edge cases, unit tests and coverage reports.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Reliable software',
        p: 'Test design, data pipelines and AI projects that survive messy input.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant have written the missing test?',
    intro: 'It can, but only if somebody asks for the case nobody has seen.',
    p1: 'Ask an assistant for a function that cleans station counts and a few tests to go with it, and the tests usually mirror the examples you gave. Give it Rouse Hill\'s numbers and the suite passes, the coverage report looks complete, and the "Less than 50" rows are still waiting.',
    p2: 'A learner who understands branch coverage asks a sharper question: which decision has only ever gone one way? That question finds the gap in seconds, whether the code came from a person or a model.',
    closer: 'In 2026 generating code is quick; Rouse Hill learners who know how to test it are the ones whose programs keep working on the next file.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online lessons for Rouse Hill homes',
    intro: 'There is no travel: every Rouse Hill learner joins the class by video from home.',
    cells: [
      { h3: 'A teacher watching the screen', p: 'Mistakes are spotted and explained as they happen, not marked a week later.' },
      { h3: 'NSW school language', p: 'Teachers use NSW stage and syllabus terms and plan around state school holidays.' },
      { h3: 'Free first lesson', p: 'A complete class at no cost, ending with a suggested course, level and time.' },
      { h3: 'Groups by level', p: 'Five to ten learners of similar ability, or one-to-one teaching where that suits better.' },
      { h3: 'A steady rhythm', p: 'Two lessons a week at fixed times, about eight a month.' },
      { h3: 'Teachers in India', p: 'A 5pm Rouse Hill lesson is 11:30am India time during Sydney summer time and 12:30pm after it ends.' }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Sydney clocks run on daylight saving from Sunday 4 October 2026 to Sunday 4 April 2027, while India keeps one time all year, so the gap moves between 5 hours 30 minutes and 4 hours 30 minutes. We always quote lesson times in Sydney time.'
    }
  },
  fees: {
    h2: 'Rouse Hill lesson fees',
    intro: 'One simple price list, the same for every course.',
    first: 'The first full lesson is free, with a course and timetable suggested afterwards.',
    group: 'About eight lessons a month, two a week, with five to ten learners at one level.',
    private: 'One-to-one lessons on the same weekly rhythm, roughly eight a month.',
    closer: 'Families outside India are invoiced in US dollars. Nothing is charged until the trial has settled a course and a time, and the pricing page covers holidays, missed lessons and switching formats.'
  },
  reviewsH2: 'What families say on Google',
  book: {
    h2: 'Tell us an age and an interest',
    intro: 'That is enough for a teacher to plan the first lesson. A seven-year-old might build a Scratch game with a high score; a teenager or adult might write the station cleaner and the test that breaks it.',
    success: 'Thank you. We will contact you soon about a Rouse Hill class.'
  },
  faq: {
    h2: 'Rouse Hill coding and AI questions',
    intro: 'The questions Rouse Hill families ask most.',
    items: [
      {
        q: 'How many people live in Rouse Hill?',
        a: 'The 2021 Census QuickStats for the Rouse Hill suburb and locality counted 11,349 residents, median age 34, in 3,092 families and 4,159 private dwellings.'
      },
      {
        q: 'What is the difference between line coverage and branch coverage?',
        a: 'Line coverage reports whether each line of code ran during the tests. Branch coverage reports whether each decision, such as an if statement, was tested both ways. Code can reach full line coverage while half of its decisions are untested.'
      },
      {
        q: 'What does the Rouse Hill project find?',
        a: 'A three-line cleaner passes all 46 tests built from Rouse Hill Station\'s monthly rows and runs every line, yet crashes on 745 rows of the statewide file that read "Less than 50", spread over 31 stations.'
      },
      {
        q: 'Which schools are in Rouse Hill?',
        a: 'The NSW Department of Education lists Rouse Hill Public School, Ironbark Ridge Public School, Rouse Hill High School and Tallawong Public School with Rouse Hill addresses.'
      },
      {
        q: 'Can lessons support HSC computing subjects?',
        a: 'Teachers use NSW syllabus terms and explain programming and testing ideas that appear in senior computing subjects. All assessed work remains the student\'s own.'
      },
      {
        q: 'What age can my child start?',
        a: 'Six is a good starting age for Scratch. Projects like this testing one usually suit learners from about 12 or 13.'
      },
      {
        q: 'What does a learner need at home?',
        a: 'A laptop or desktop computer, a microphone and headphones or speakers, and a steady internet connection. A tablet makes typing Python slow.'
      },
      {
        q: 'Do you hold classes in Rouse Hill?',
        a: 'No. We teach only online and have no premises in Australia, Rouse Hill included. Our contact phone number is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do classes cost for Rouse Hill learners?',
        a: 'The first lesson is free. A group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one is USD 150 a month on the same rhythm. Payment starts only after a course and time are agreed.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Between five and ten, grouped by level and goals rather than by age. If no group suits the learner\'s timetable, we offer one-to-one lessons.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Nearby guides',
    h2: 'More for Rouse Hill learners',
    html: 'For the wider council area read <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-the-hills-shire-sydney">coding and AI classes in The Hills Shire</a>, and for the neighbouring suburb to the east see <a class="cg-inline-link" href="/online-coding-and-python-classes-in-castle-hill-sydney">online coding and Python classes in Castle Hill</a>. The whole city is covered on <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>, and testing habits are the theme of <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a>.',
    waLabel: 'Send a WhatsApp'
  },
  footerHeading: 'Rouse Hill and north-west Sydney',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/best-coding-and-ai-classes-in-the-hills-shire-sydney', label: 'The Hills Shire' },
    { href: '/online-coding-and-python-classes-in-castle-hill-sydney', label: 'Castle Hill' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-rshl .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.6vw, 2.3rem); }
.cg-root.cg-rshl .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.08; }
.cg-root.cg-rshl .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1.05rem; }
.cg-root.cg-rshl .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-rshl .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.012em; }
.cg-root.cg-rshl .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.6rem); }
.cg-root.cg-rshl .cg-table caption { font-weight: 700; text-align: left; padding-bottom: 0.4rem; }
.cg-root.cg-rshl .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-rshl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-rshl .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Rouse Hill, ABS Census 2021 QuickStats, Rouse Hill (NSW) suburb and locality SAL13444 (read 10 October 2026): 11,349 people; median age 34; 3,092 families; 4,159 private dwellings; separate houses 54.4% (2,000), semi-detached or townhouse 19.9% (732), flats or apartments 25.4% (932); couple families with children 57.8% (1,788); bachelor degree or higher 36.0% (3,238); managers 17.3% (1,087); professionals 28.2% (1,772); aged 10 to 14 7.3% (828); aged 15 to 19 8.1% (925). ABS ASGS 2021 SAL area 12.8226 square kilometres. NSW Department of Education 2027 term dates, Eastern division: students Term 1 Wednesday 3 February to Friday 9 April 2027. NSW Department of Education master dataset: Rouse Hill Public School (1875), Ironbark Ridge Public School (2005), Rouse Hill High School (2009) under The Hills; Tallawong Public School (2024) under Blacktown.',
    localProject: 'Line coverage vs branch coverage. Transport for NSW monthly station usage (Opal batch data, CC BY), October 2024 to August 2026, 17,218 rows. Rouse Hill Station (Metro): 46 rows, all whole numbers; a three-line cleaner passes all 46 tests with 3 of 3 body lines run and 1 of 2 if outcomes; on the full file 745 rows read "Less than 50" (722 Train, 23 Light rail; 368 entry, 377 exit) across 31 stations, each raising UnboundLocalError. Rouse Hill entries: lowest 101,049 (January 2025), highest 151,886 (August 2026), 23-month sum 2,946,119 (ours), ninth of 16 Metro-type stations by entries.',
    requiredMentions: [
      '11,349',
      '3,092',
      '4,159',
      '2,946,119',
      '151,886',
      '101,049',
      'Ironbark Ridge Public School',
      'Tallawong Public School',
      '12.8 square kilometres'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Rouse Hill (NSW) suburb and locality (SAL13444): people, median age, families, dwellings, dwelling structure, family composition, education, occupation, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13444'
      },
      {
        claim: 'Transport for NSW, Train, Metro and Light Rail Station Monthly Usage, Opal batch data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations (Creative Commons Attribution); school name, suburb, council and first-teacher date only.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) suburbs and localities: Rouse Hill area.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why Rouse Hill Station entries rose or fell in any month: not stated by the publisher, so no cause is given.',
      'How Rouse Hill splits between The Hills and Blacktown councils by area: not verified; only the school list\'s council column is quoted.',
      'Journey to work and working at home figures from the 2021 Census: excluded because the Census was taken during a lockdown period.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective columns of the school dataset: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, Sydney Metro, the NSW Department of Education or the ABS.'
    ]
  }
};
