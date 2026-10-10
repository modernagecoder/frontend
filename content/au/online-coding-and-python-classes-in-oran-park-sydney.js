'use strict';
// Oran Park, Sydney (cg- district page, Australia cluster Phase 8, row 237). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*). Oran Park is an ABS suburb and locality (SAL13102) in the Camden council
// area, south-west Sydney. Parents: Australia, NSW, Sydney.
// Spine: Oran Park's 18 Census age bands drawn as a text bar chart with Python format specifications. Which specs
// print the numbers exactly as the bureau publishes them, and which quietly print something else?
// Data: ABS Census 2021 QuickStats, Oran Park (NSW) SAL13102, age bands (count and published per cent). Our run
// (scratchpad au/b5/orp_fmt.py): share = count / 17,624 formatted with {:.1%} matches the published one-decimal
// value in all 18 bands; {:%} prints 12.471630% for ages 0 to 4; {:,} prints 2,198; {:_} prints 2_198; {:>6} and
// {:<6} align labels; round(2.5) gives 2 and round(3.5) gives 4 (round half to even); round(0.125, 2) gives 0.12.
// Bars: one hash per half a percentage point (share x 200, rounded): ages 0 to 4 get 25, 85 and over get 1.
// Lesson family: Python format specification mini-language; screened 0 location-page hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Oran Park (NSW) SAL13102; ABS ASGS 2021 SAL area.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health, journey to work; any sum
// of published age bands; enrolment, ICSEA, Indigenous, LBOTE and selective columns.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'ORAN PARK',
    label: 'Oran Park, Sydney',
    blurb: 'Online coding and Python for Oran Park, with a project that prints the suburb\'s 18 Census age bands exactly as the bureau does.'
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
  slug: 'online-coding-and-python-classes-in-oran-park-sydney',
  code: 'orpk',
  accent: '#4D420E',
  accentRationale: 'Oran Park: a dry-paddock olive (hue 51), chosen by hand at least 10 RGB units from every accent declared in content, the shared stylesheets and the claims log, with strong contrast on white and the paper tints',
  pageType: 'city',
  place: {
    name: 'Oran Park',
    eyebrow: 'Oran Park, south-west Sydney',
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
  routeLabel: 'Oran Park, Sydney',
  title: 'Online Coding and Python Classes in Oran Park, Sydney',
  description: 'Live online coding and Python classes for Oran Park learners aged 6 to 67, with a project that prints the suburb\'s Census age chart in Python. First lesson free.',
  ogDescription: 'Python classes for Oran Park: format specifications that print 18 Census age bands exactly as the bureau publishes them.',
  twitterDescription: 'Oran Park online coding and Python classes, live for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Oran Park',
    description: 'Level-matched online coding and Python lessons for children, teenagers and adults in Oran Park, Sydney, taught live in English.'
  },
  h1: 'Online coding and Python classes in Oran Park',
  capsuleQ: 'Which online coding and Python classes suit Oran Park families?',
  capsule: 'Classes taught live, in small groups at the learner\'s level, with projects on real local data. Ours begin with Scratch at six and continue to Python for teenagers and adults. Oran Park is a new suburb of about 13.2 square kilometres in the Camden council area; the 2021 Census counted 17,624 residents, median age 30.',
  lead: 'At the 2021 Census one Oran Park resident in eight was under five, more than double the share across New South Wales. Draw its 18 age bands in Python and the interesting work is not the chart but the printing. One format code gives 12.471630%, another gives 12.5%, and a rounding rule most people never meet decides whether 2.5 becomes 2 or 3. Get the specifications right and every one of the 18 shares matches the bureau\'s own figure to the last decimal place.',
  wa: 'Hello Modern Age Coders, we would like a free coding or Python lesson for a learner in Oran Park.',
  picks: {
    eyebrow: 'Course picks for Oran Park',
    h2: 'Python courses that make output readable',
    intro: 'Each course reaches formatted output: tables, charts and reports people can read. The free first lesson sets the starting point, with no card details asked for.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python with print, strings and simple text charts.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 17', note: 'f-strings, files and reports built from public data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Tables, percentages and charts from real datasets.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Confident Python for reports, data cleaning and automation.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Oran Park in the Census',
      h2: 'A suburb of young families and new houses',
      intro: 'QuickStats from the statistics bureau for the Oran Park suburb and locality, beside New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Oran Park, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '17,624'],
            ['Median age', '30'],
            ['Families', '4,741'],
            ['Private dwellings', '5,612'],
            ['Average people per household', '3.3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Oran Park against the state and the nation',
          head: ['Indicator', 'Oran Park', 'NSW', 'Australia'],
          rows: [
            ['Children aged 0 to 4', '12.5% (2,198)', '5.8%', '5.8%'],
            ['Adults aged 30 to 34', '12.2% (2,151)', '7.3%', '7.3%'],
            ['Separate houses among occupied homes', '86.9% (4,485)', '65.6%', '72.3%'],
            ['Flats or apartments', '1.1% (57)', '21.7%', '14.2%'],
            ['Couple families with children', '60.5% (2,866)', '44.7%', '43.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Under-fives', p: 'The 0 to 4 band is the largest single age band in the suburb, more than double its share across the state.' },
            { h3: 'Parents in their thirties', p: 'The 30 to 34 and 35 to 39 bands come next, at 12.2% and 11.5%: the classic shape of a new family suburb.' },
            { h3: 'Houses, not flats', p: 'Just 57 occupied homes were flats or apartments, while separate houses made up 86.9%.' }
          ]
        },
        {
          kind: 'p',
          text: 'These numbers are for the suburb and locality. The bureau adjusts small counts for privacy, so age bands may not add up exactly to the published total, and we never add them up to make one.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Eighteen age bands, printed exactly right',
      intro: 'The task: print each age band with its count, its share of 17,624 residents, and a bar of hash characters, in neat columns, with every share matching the bureau\'s one-decimal figure.',
      body: [
        {
          kind: 'table',
          caption: 'Format specifications on the 0 to 4 band (our Python run)',
          head: ['Specification', 'Printed', 'Verdict'],
          rows: [
            ['{share:%}', '12.471630%', 'Too many digits'],
            ['{share*100:.1f}%', '12.5%', 'Right, but easy to forget the *100'],
            ['{share:.1%}', '12.5%', 'Right, and it multiplies for you'],
            ['{count:,}', '2,198', 'Thousands separator'],
            ['{count:_}', '2_198', 'Python style, not for a report'],
            ['{label:>6}', '   0-4', 'Right-aligned in six characters']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'A slice of the finished chart (one hash for every half a percentage point)',
          head: ['Age band', 'Count', 'Share', 'Bar length'],
          rows: [
            ['0 to 4', '2,198', '12.5%', '25 hashes'],
            ['30 to 34', '2,151', '12.2%', '24 hashes'],
            ['35 to 39', '2,022', '11.5%', '23 hashes'],
            ['50 to 54', '647', '3.7%', '7 hashes'],
            ['85 and over', '71', '0.4%', '1 hash']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'All 18 match',
              p: 'Computing count divided by 17,624 and printing with .1% reproduces the published share in every one of the 18 bands. The check is part of the program, not done by eye.'
            },
            {
              h3: 'Round half to even',
              p: 'Python\'s round(2.5) is 2 and round(3.5) is 4, because exact halves go to the even neighbour. The bar lengths use round, so a learner has to know this.'
            },
            {
              h3: 'Binary fractions',
              p: 'round(0.125, 2) gives 0.12. The value 0.125 is exactly representable, so the half goes to the even digit, the same rule again.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why a format string is code',
          p: 'Inside the braces, the part after the colon is a tiny language of its own: alignment, width, separator, precision and type. Reading {share:>7.1%} aloud, right-align in seven characters and show one decimal place as a percentage, is the whole lesson in one line.'
        },
        {
          kind: 'p',
          text: 'Every count and share comes from the bureau\'s QuickStats page for Oran Park; the formatted output and the match check are our own Python run.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Extending the chart',
      h2: 'More you can print about Oran Park',
      intro: 'Once the specifications are right, the same program prints other QuickStats tables without new code.',
      body: [
        {
          kind: 'table',
          caption: 'Follow-on exercises',
          head: ['Task', 'Format idea', 'Example from QuickStats'],
          rows: [
            ['Compare with the state', 'Two shares side by side with {:>6.1%}', '0 to 4: 12.5% against 5.8%'],
            ['Home types', 'Left-aligned labels with {:<30}', 'Separate house 86.9%, flats 1.1%'],
            ['Large counts', 'Thousands separators with {:,}', '4,741 families'],
            ['A ratio', 'Fixed decimals with {:.1f}', '3.3 people per household']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Print a bar chart of the age bands with hashes and see the youngest bar win.' },
            { h3: 'Teenagers', p: 'Add the match check so the program fails loudly if any printed share differs from the published one.' },
            { h3: 'Adults', p: 'Reuse the same format strings in a report or invoice script and stop rounding by hand.' }
          ]
        },
        { kind: 'p', text: 'The statistics bureau publishes QuickStats and is not connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and the school year',
      h2: 'New schools for a new suburb',
      intro: 'The education department\'s list shows three government schools with an Oran Park address, all opened since 2014 and all in Camden council.',
      body: [
        {
          kind: 'table',
          caption: 'Government schools with an Oran Park address (NSW Department of Education)',
          head: ['School', 'Level', 'First teacher'],
          rows: [
            ['Oran Park Public School', 'Primary', '2014'],
            ['Oran Park High School', 'Secondary', '2020'],
            ['Barramurra Public School', 'Primary', '2021']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Winter break 2027', p: 'NSW Eastern division schools are on holiday from Monday 5 July to Friday 16 July 2027.' },
            { h3: 'Term 3 2027', p: 'Students return on Tuesday 20 July and the term ends on Friday 24 September.' },
            { h3: 'Our timetable', p: 'Weekly classes pause in state school holidays and resume at each learner\'s agreed time.' }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Scratch to Python reports',
    intro: 'The ages are approximate. The free trial lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and sprites',
        p: 'Games and animations, with numbers shown on screen as scores and timers.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'First Python',
        p: 'print, strings, loops and the first text charts.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'Data and reports',
        p: 'Reading files, computing shares and formatting tables properly.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python at work',
        p: 'Automation, data cleaning and reports other people can trust.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will an AI assistant print the percentages correctly?',
    intro: 'Often, but not always, and the mistakes look tidy.',
    p1: 'Ask an assistant to chart Oran Park\'s age bands and it will usually write working code. Sometimes it multiplies by 100 and then also uses the % type, printing 1247.2%; sometimes it rounds the bar lengths and is surprised that 2.5 becomes 2. Each version runs without an error message.',
    p2: 'A learner who can read a format specification spots these in seconds, and knows to add one line that compares every printed share with the published value.',
    closer: 'In 2026 code arrives quickly; Oran Park learners who can read what it prints, digit by digit, are the ones whose reports get trusted.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Oran Park learners at home',
    intro: 'Lessons are on live video, so nobody in Oran Park has to drive to a class.',
    cells: [
      { h3: 'A teacher in the session', p: 'Code is written and corrected together while the teacher watches the screen.' },
      { h3: 'Built for NSW schools', p: 'Lessons use NSW stage language and follow state school holidays.' },
      { h3: 'Free trial class', p: 'One full lesson at no charge, then a suggested course, level and time.' },
      { h3: 'Groups at one level', p: 'Five to ten learners of similar ability, or individual lessons if preferred.' },
      { h3: 'Fixed weekly times', p: 'Two lessons a week, about eight a month, with breaks planned ahead.' },
      { h3: 'Teachers in India', p: 'A 4pm Oran Park lesson is 10:30am India time under Sydney summer time and 11:30am outside it.' }
    ],
    spec: {
      title: 'Two clocks',
      p: 'Sydney is on daylight saving from Sunday 4 October 2026 to Sunday 4 April 2027, and India does not change its clocks, so the difference shifts between 5 hours 30 minutes and 4 hours 30 minutes. Lesson times are always set in Sydney time.'
    }
  },
  fees: {
    h2: 'Oran Park lesson fees',
    intro: 'Simple, flat prices, the same for every course.',
    first: 'The first lesson is free and ends with a recommended course and timetable.',
    group: 'Two lessons a week, around eight a month, in a group of five to ten learners at one level.',
    private: 'One-to-one teaching on the same schedule, roughly eight lessons a month.',
    closer: 'Families outside India pay in US dollars. Payment starts only once the trial has agreed a course and a time; the pricing page covers holidays, missed lessons and format changes.'
  },
  reviewsH2: 'Google reviews from families',
  book: {
    h2: 'Share an age and something the learner enjoys',
    intro: 'That is all a teacher needs to plan a first lesson. A six-year-old might make a Scratch game with a timer; a teenager or adult might print Oran Park\'s age chart and check every share.',
    success: 'Thank you. We will be in touch soon about an Oran Park class.'
  },
  faq: {
    h2: 'Oran Park coding and Python questions',
    intro: 'The questions Oran Park families ask most often.',
    items: [
      {
        q: 'How many people live in Oran Park?',
        a: 'The 2021 Census QuickStats for the Oran Park suburb and locality counted 17,624 residents, median age 30, in 4,741 families and 5,612 private dwellings.'
      },
      {
        q: 'What is a format specification in Python?',
        a: 'It is the part after the colon inside an f-string\'s braces, such as {share:.1%}. It controls alignment, width, thousands separators, decimal places and the type of output, all without extra code.'
      },
      {
        q: 'Why does round(2.5) give 2 in Python?',
        a: 'Python rounds exact halves to the nearest even number, so 2.5 becomes 2 and 3.5 becomes 4. This avoids pushing totals upwards when many halves are rounded.'
      },
      {
        q: 'What does the Oran Park project produce?',
        a: 'A text bar chart of the suburb\'s 18 Census age bands in which every printed share, computed from the counts, matches the bureau\'s published one-decimal figure.'
      },
      {
        q: 'Which schools are in Oran Park?',
        a: 'The NSW Department of Education lists Oran Park Public School, Oran Park High School and Barramurra Public School with Oran Park addresses, all in Camden council.'
      },
      { q: 'What age can my child start coding?', a: 'Scratch suits children from six. Python projects like this one usually start around 11 or 12.' },
      {
        q: 'What equipment is needed at home?',
        a: 'A laptop or desktop computer, a microphone and headphones or speakers, and a reliable internet connection. Tablets are not ideal for typing Python.'
      },
      {
        q: 'Do you run classes in Oran Park itself?',
        a: 'No. We teach only online and have no premises anywhere in Australia, including Oran Park. Our contact phone number is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do Oran Park lessons cost?',
        a: 'The first lesson is free. A group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one is USD 150 a month on the same plan. Nothing is charged before a course and time are agreed.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Five to ten learners, grouped by level and goals rather than age. If no group fits the learner\'s schedule, one-to-one lessons are offered instead.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Nearby guides',
    h2: 'More for Oran Park learners',
    html: 'The older town centre of the same council area is covered on <a class="cg-inline-link" href="/ai-and-programming-classes-in-camden-sydney">AI and programming classes in Camden</a>, and the city as a whole on <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. Families with younger children can start with <a class="cg-inline-link" href="/coding-classes-for-5-and-6-year-olds-australia">coding classes for 5 and 6 year olds</a>, and the next step after blocks is set out in <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">after Scratch: the next step to Python</a>.',
    waLabel: 'Send a WhatsApp'
  },
  footerHeading: 'Oran Park and the Camden area',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/ai-and-programming-classes-in-camden-sydney', label: 'Camden' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-orpk .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.5vw, 2.2rem); }
.cg-root.cg-orpk .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.12; }
.cg-root.cg-orpk .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.6rem 0 0.6rem 1.1rem; }
.cg-root.cg-orpk .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-orpk .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.009em; }
.cg-root.cg-orpk .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.55rem); }
.cg-root.cg-orpk .cg-table caption { font-weight: 700; text-align: left; padding-bottom: 0.45rem; }
.cg-root.cg-orpk .cg-table td:first-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-orpk .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-orpk .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Oran Park, ABS Census 2021 QuickStats, Oran Park (NSW) suburb and locality SAL13102 (read 10 October 2026): 17,624 people; median age 30; 4,741 families; 5,612 private dwellings; average 3.3 people per household; age bands (count, per cent): 0 to 4 2,198 12.5; 30 to 34 2,151 12.2; 35 to 39 2,022 11.5; 50 to 54 647 3.7; 85 and over 71 0.4; separate houses 86.9% (4,485), townhouses 11.7% (603), flats 1.1% (57); couple families with children 60.5% (2,866). ABS ASGS 2021 SAL area 13.2477 square kilometres. NSW Department of Education master dataset: Oran Park Public School (2014), Oran Park High School (2020), Barramurra Public School (2021), Camden council. NSW 2027 Eastern division: winter holidays Monday 5 July to Friday 16 July; Term 3 Tuesday 20 July to Friday 24 September.',
    localProject: 'Python format specification mini-language on Oran Park\'s 18 Census age bands: share = count / 17,624 printed with {:.1%} matches the published one-decimal share in all 18 bands (ours); {:%} prints 12.471630% for 0 to 4; {:,} 2,198; {:_} 2_198; {:>6} right-aligns labels; round(2.5) = 2, round(3.5) = 4; round(0.125, 2) = 0.12. Bars: share x 200 hashes, 0 to 4 gets 25, 85 and over 1.',
    requiredMentions: ['17,624', '4,741', '2,866', '12.471630%', 'Barramurra Public School', 'Oran Park High School', '2,198', '13.2 square kilometres', '4,485'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Oran Park (NSW) suburb and locality (SAL13102): people, median age, families, dwellings, age bands, dwelling structure, family composition.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13102'
      },
      {
        claim: 'Python documentation, Format Specification Mini-Language.',
        url: 'https://docs.python.org/3/library/string.html#format-specification-mini-language'
      },
      {
        claim: 'Python documentation, built-in round(): values are rounded to the closest multiple, ties to even.',
        url: 'https://docs.python.org/3/library/functions.html#round'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations (Creative Commons Attribution); names, suburbs, councils and first-teacher dates only.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'ABS ASGS Edition 3 (2021) suburbs and localities: Oran Park area.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer' }
    ],
    rejectedClaims: [
      'A total built by adding the 18 published age band counts: never printed, because the bureau perturbs small cells and published parts need not reach the published total.',
      'That Oran Park is the youngest suburb in Sydney: not checked against every suburb, so the page says one of the youngest.',
      'Journey to work and working at home figures from the 2021 Census: excluded because the Census was taken during a lockdown period.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective columns of the school dataset: excluded by the cluster rules.',
      'Any affiliation with the ABS, Camden Council or the NSW Department of Education.'
    ]
  }
};
