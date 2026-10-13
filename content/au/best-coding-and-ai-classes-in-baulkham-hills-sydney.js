'use strict';
// Baulkham Hills, Sydney (cg- district page, Australia cluster Phase 8, row 239). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*). Baulkham Hills is an ABS suburb and locality (SAL10233) in The Hills Shire.
// Parents: Australia, NSW, Sydney.
// Spine: build a command-line tool, schools --suburb "Baulkham Hills", over the NSW school locations file with
// argparse. Which three small mistakes make it return the wrong schools without any error message?
// Data: NSW Department of Education master dataset (CC BY): names, suburbs, councils, first-teacher dates only.
// Our run (scratchpad au/b5/bkh_cli.py): 7 schools list Baulkham Hills as suburb; 6 of the 7 suburb values carry a
// trailing space, so an exact match finds 1. type=bool: --secondary False gives bool("False") = True and returns
// the 3 high schools instead of the 4 primary schools; BooleanOptionalAction with --no-secondary returns the 4.
// --since left as text: "975" (a typo for 1975) compared as a string matches 0 schools; type=int matches all 7.
// --since 1970 returns 5 either way.
// Lesson family: argparse command-line tools; claimed 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Baulkham Hills (NSW) SAL10233; ABS ASGS 2021 SAL area 13.6507 square km.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health, journey to work and
// working at home; enrolment, ICSEA, Indigenous, LBOTE and selective columns (no school is described as selective).

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BAULKHAM HILLS',
    label: 'Baulkham Hills, Sydney',
    blurb: 'Coding and AI for Baulkham Hills, with a command-line tool project that finds the suburb\'s seven state schools without silent mistakes.'
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
  slug: 'best-coding-and-ai-classes-in-baulkham-hills-sydney',
  code: 'bkhl',
  accent: '#3B4974',
  accentRationale: 'Baulkham Hills: a slate blue (hue 225) for a settled hills suburb, chosen by hand at least 10 RGB units from every accent declared in content, the shared stylesheets and the claims log, with strong contrast on white and the paper tints',
  pageType: 'city',
  place: {
    name: 'Baulkham Hills',
    eyebrow: 'Baulkham Hills, The Hills Shire',
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
  routeLabel: 'Baulkham Hills, Sydney',
  title: 'Best Coding and AI Classes in Baulkham Hills, Sydney',
  description: 'Live online coding and AI classes for Baulkham Hills learners aged 6 to 67, with a Python command-line project on the local school list. First lesson free.',
  ogDescription: 'Coding and AI for Baulkham Hills: a Python command-line tool, three silent bugs, and the seven local state schools it should find.',
  twitterDescription: 'Baulkham Hills coding and AI classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Baulkham Hills',
    description: 'Small-group and one-to-one online coding, Python and AI lessons for children, teenagers and adults in Baulkham Hills, Sydney, taught live in English.'
  },
  h1: 'Coding and AI classes in Baulkham Hills',
  capsuleQ: 'How do Baulkham Hills families find the best coding and AI classes?',
  capsule: 'Look for live teaching, a group at the learner\'s own level, and projects that use real data. Ours run from Scratch at six to Python tools and AI for teenagers and adults. Baulkham Hills covers about 13.65 square kilometres of The Hills Shire; the 2021 Census counted 37,415 residents, median age 39.',
  lead: 'Seven state schools give Baulkham Hills as their suburb, and a short Python tool should be able to list them, or just the high schools, or only those opened since a given year. Written the obvious way it lists one school, then three instead of four, then none at all, and it never prints an error. Each fault sits in how the program reads its command line, and fixing them is a compact lesson in the argparse module that most real tools are built on.',
  wa: 'Hello Modern Age Coders, we would like a free coding or AI lesson for a learner in Baulkham Hills.',
  picks: {
    eyebrow: 'Course picks for Baulkham Hills',
    h2: 'Courses that end in tools people can run',
    intro: 'Each course reaches programs with options, input checks and clear output. The free first lesson places the learner, and no card is needed to book it.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python programs that ask questions and act on the answers.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 17', note: 'Functions, files and command-line options on public data.' },
      { course: 'git-github-version-control-course-for-teens', band: 'Ages 13 to 17', note: 'The terminal, Git and sharing tools other people can run.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Scripts and AI automation that run from a single command.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Baulkham Hills in the Census',
      h2: 'A family suburb of graduates and houses',
      intro: 'The bureau\'s QuickStats for the Baulkham Hills suburb and locality, compared with the state and the country.',
      body: [
        {
          kind: 'table',
          caption: 'Baulkham Hills, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '37,415'],
            ['Median age', '39'],
            ['Families', '10,574'],
            ['Private dwellings', '13,155'],
            ['Average people per household', '3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Baulkham Hills beside NSW and Australia',
          head: ['Indicator', 'Baulkham Hills', 'NSW', 'Australia'],
          rows: [
            ['Bachelor degree or higher (aged 15 and over)', '41.2% (12,081)', '27.8%', '26.3%'],
            ['Professionals among employed residents', '34.4% (6,204)', '25.8%', '24.0%'],
            ['Children aged 5 to 9', '8.3% (3,110)', '6.2%', '6.2%'],
            ['Couple families with children', '58.2% (6,158)', '44.7%', '43.7%'],
            ['Separate houses among occupied homes', '75.4% (9,256)', '65.6%', '72.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Degrees', p: 'Four residents in ten aged 15 and over held a bachelor degree or higher, well above the state rate of 27.8%.' },
            { h3: 'Primary-age children', p: 'The 5 to 9 band was 8.3% of residents against 6.2% in the state, and 10 to 14 was 7.4%.' },
            { h3: 'Mostly houses', p: 'Three occupied homes in four were separate houses; flats or apartments were 11.3%.' }
          ]
        },
        {
          kind: 'p',
          text: 'All figures are for the suburb and locality rather than The Hills Shire. Small counts are randomly adjusted by the bureau, so published parts are never added up here to make a new total.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A command-line tool with three silent bugs',
      intro: 'The tool reads the NSW government school locations file and takes three options: --suburb, --secondary and --since. Every run below finishes without an error; only some are right.',
      body: [
        {
          kind: 'table',
          caption: 'Runs of the tool for Baulkham Hills (our Python run on the NSW school list)',
          head: ['Command-line options', 'First version', 'Fixed version', 'Should be'],
          rows: [
            ['--suburb "Baulkham Hills"', '1 school', '7 schools', '7'],
            ['--secondary False', '3 high schools', 'not accepted; use --no-secondary', '4 primary schools'],
            ['--no-secondary', 'not accepted', '4 primary schools', '4'],
            ['--since 975 (typo for 1975)', '0 schools', '7 schools', '7, since every year is after 975'],
            ['--since 1970', '5 schools', '5 schools', '5']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The hidden space',
              p: 'Six of the seven suburb values in the file end with a space, "Baulkham Hills ", so an exact comparison finds only Model Farms High School. Stripping whitespace on both sides brings back all seven.'
            },
            {
              h3: 'type=bool',
              p: 'argparse hands the text "False" to bool(), and any non-empty string is True. The tool silently swaps the four primary schools for the three high schools. BooleanOptionalAction adds a proper --no-secondary flag instead.'
            },
            {
              h3: 'Years as text',
              p: 'Without type=int, the year arrives as a string and is compared letter by letter: "1967-01-01" is smaller than "975" because 1 comes before 9. Converting both sides to integers fixes it.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'One line that stops the second bug',
          p: 'Swap <code>type=bool</code> for <code>action=BooleanOptionalAction</code>, imported from argparse, in the --secondary line. The tool then understands --secondary and --no-secondary, and "--secondary False" becomes an error the user can see.'
        },
        {
          kind: 'p',
          text: 'School names, suburbs and first-teacher dates are from the NSW Department of Education\'s school locations file; the commands, counts and fixes are our own Python run.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Hardening the tool',
      h2: 'Making a tool other people can trust',
      intro: 'After the three fixes, learners add the habits that real command-line programs share.',
      body: [
        {
          kind: 'table',
          caption: 'Next steps for the tool',
          head: ['Addition', 'What it does', 'Baulkham Hills check'],
          rows: [
            ['--help text', 'Explains every option, written by argparse from the code', 'A parent can run it without reading Python'],
            ['choices=', 'Rejects levels the file does not contain', '"Secondary" accepted, "Senior" refused'],
            ['Exit codes', 'Returns 1 when nothing matches', 'A typo in the suburb is reported, not hidden'],
            ['A test per bug', 'Runs the tool with each option and checks the count', '7, 4, 3 and 5 schools']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Write a quiz in Python that asks a question and checks the typed answer, spaces and all.' },
            { h3: 'Teenagers', p: 'Build the school tool, break it on purpose and write a test for each of the three bugs.' },
            { h3: 'Adults', p: 'Turn a weekly spreadsheet job into a script with options, and stop editing code to change one setting.' }
          ]
        },
        { kind: 'p', text: 'The school locations file is published by the NSW Department of Education, which has no link with Modern Age Coders.' }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and the school year',
      h2: 'The seven schools the tool should find',
      intro: 'All seven are in The Hills Shire, and their first-teacher dates run from 1967 to 1982.',
      body: [
        {
          kind: 'table',
          caption: 'State schools listing Baulkham Hills as their suburb',
          head: ['School', 'Level', 'First teacher'],
          rows: [
            ['Baulkham Hills North Public School', 'Primary', '1967'],
            ['Jasper Road Public School', 'Primary', '1967'],
            ['Baulkham Hills High School', 'Secondary', '1971'],
            ['Crestwood Public School', 'Primary', '1972'],
            ['Model Farms High School', 'Secondary', '1975'],
            ['Crestwood High School', 'Secondary', '1981'],
            ['Matthew Pearce Public School', 'Primary', '1982']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Spring break 2027', p: 'Eastern division holidays run from Monday 27 September to Friday 8 October 2027.' },
            { h3: 'Term 4 2027', p: 'Pupils go back on Tuesday 12 October, and the year ends on Monday 20 December.' },
            { h3: 'Classes and holidays', p: 'Baulkham Hills groups take the same breaks and restart in their regular slot.' }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Scratch buttons to command-line tools',
    intro: 'Ages are a guide only; the trial lesson sets the starting rung.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and choices',
        p: 'Games where the player picks options and the program responds.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'First Python',
        p: 'input(), conditions and checking what the user typed.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'Tools and the terminal',
        p: 'Files, options, Git and tests for programs others will run.',
        courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens']
      },
      {
        band: 'University and adult',
        h3: 'Automation',
        p: 'Scripts with options, logging and AI steps for real work.',
        courses: ['python-ai-automation-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant wrote type=bool too',
    intro: 'The mistake is common enough in published code that assistants repeat it.',
    p1: 'Ask an assistant for a command-line tool with a yes or no option and it may well write type=bool. The tool runs, the help text looks right, and --secondary False quietly means True. Nothing on screen says the Baulkham Hills primary schools have been dropped.',
    p2: 'A learner who has watched bool("False") return True knows to try the false case before trusting any option, whoever wrote the code.',
    closer: 'In 2026 code is cheap to generate; Baulkham Hills learners who test each option are the ones whose tools are worth running.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Baulkham Hills learners at home',
    intro: 'Classes happen over live video, which suits busy Baulkham Hills households with no drop-offs.',
    cells: [
      { h3: 'Live, not recorded', p: 'The teacher talks through each line with the learner while it is being written.' },
      { h3: 'NSW terms', p: 'Stages, years and the school calendar match what local schools use.' },
      { h3: 'Trial before paying', p: 'The first class is free and ends with a clear plan for level and timing.' },
      { h3: 'Fifteen to twenty per group', p: 'Classmates are matched by ability; one-to-one is offered too.' },
      { h3: 'Twice a week', p: 'A regular pair of weekly slots, roughly eight sessions a month.' },
      { h3: 'Teachers in India', p: 'A 6pm Baulkham Hills lesson is 12:30pm India time in Sydney summer time and 1:30pm otherwise.' }
    ],
    spec: {
      title: 'Clock changes',
      p: 'Daylight saving in Sydney runs from Sunday 4 October 2026 to Sunday 4 April 2027. India stays on one time, so the gap is 5 hours 30 minutes in summer and 4 hours 30 minutes the rest of the year. Every lesson time we give is Sydney time.'
    }
  },
  fees: {
    h2: 'Baulkham Hills lesson fees',
    intro: 'Every course costs the same, whatever the subject or age.',
    first: 'Lesson one is free, and the teacher recommends a course and time at the end of it.',
    group: 'Two classes each week, about eight a month, with fifteen to twenty classmates at the same level.',
    private: 'Individual lessons on the same twice-weekly rhythm, about eight a month.',
    closer: 'Baulkham Hills families pay in US dollars, and only after the trial has settled a course and a time. The pricing page sets out holidays, missed classes and changes of format.'
  },
  reviewsH2: 'Families on Google',
  book: {
    h2: 'Book a free first lesson',
    intro: 'Tell us the learner\'s age and what they enjoy. A six-year-old might start with a Scratch game; a teenager or adult might write the school tool above and test every option.',
    success: 'Thank you. We will be in touch soon about a Baulkham Hills class.'
  },
  faq: {
    h2: 'Baulkham Hills coding and AI questions',
    intro: 'Answers to what Baulkham Hills families ask us.',
    items: [
      {
        q: 'How many people live in Baulkham Hills?',
        a: 'The 2021 Census QuickStats for the Baulkham Hills suburb and locality counted 37,415 residents, median age 39, in 10,574 families and 13,155 private dwellings.'
      },
      {
        q: 'What is argparse?',
        a: 'It is the Python standard-library module for reading command-line options. It turns text typed after a program\'s name into checked values and writes the --help message automatically.'
      },
      {
        q: 'Why is type=bool a mistake in argparse?',
        a: 'argparse passes the typed text to bool(), and every non-empty string, including "False", is True. Use action=argparse.BooleanOptionalAction or store_true instead.'
      },
      {
        q: 'What does the Baulkham Hills project build?',
        a: 'A Python tool that lists the seven state schools giving Baulkham Hills as their suburb, filtered by level and opening year, with tests for the three bugs it starts with.'
      },
      {
        q: 'Which state schools list Baulkham Hills as their suburb?',
        a: 'Baulkham Hills North, Jasper Road, Crestwood and Matthew Pearce public schools, and Baulkham Hills, Model Farms and Crestwood high schools, all in The Hills Shire.'
      },
      {
        q: 'What age can my child start?',
        a: 'Six is a good age for Scratch. Command-line Python projects like this one usually suit learners from about 13.'
      },
      {
        q: 'What computer is needed?',
        a: 'A Windows, Mac or Linux computer or a Chromebook, a microphone with headphones, and a dependable internet connection.'
      },
      {
        q: 'Do you run classes in Baulkham Hills itself?',
        a: 'No. We teach only online and have no premises anywhere in Australia, including Baulkham Hills. Our contact phone number is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do Baulkham Hills lessons cost?',
        a: 'The first lesson is free. A group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners; one-to-one is USD 150 a month on the same plan. Nothing is charged before a course and time are agreed.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Fifteen to twenty learners, grouped by level and goals rather than age. If no group fits the learner\'s schedule, one-to-one lessons are offered instead.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Nearby guides',
    h2: 'More for Baulkham Hills learners',
    html: 'The whole council area is covered on <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-the-hills-shire-sydney">coding and AI classes in The Hills Shire</a>, with neighbouring suburbs at <a class="cg-inline-link" href="/online-coding-and-python-classes-in-castle-hill-sydney">online coding and Python classes in Castle Hill</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-parramatta-sydney">coding and AI classes in Parramatta</a>. For the city as a whole see <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>.',
    waLabel: 'Send a WhatsApp'
  },
  footerHeading: 'Baulkham Hills and The Hills Shire',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-the-hills-shire-sydney', label: 'The Hills Shire' },
    { href: '/online-coding-and-python-classes-in-castle-hill-sydney', label: 'Castle Hill' },
    { href: '/best-coding-and-ai-classes-in-parramatta-sydney', label: 'Parramatta' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' }
  ],
  personalityCss: `
.cg-root.cg-bkhl .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.4vw, 2.1rem); }
.cg-root.cg-bkhl .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.1; }
.cg-root.cg-bkhl .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.85rem 1rem; border-radius: 6px; }
.cg-root.cg-bkhl .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-bkhl .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-bkhl .cg-grid-3 { gap: clamp(0.95rem, 2.2vw, 1.5rem); }
.cg-root.cg-bkhl .cg-table caption { font-weight: 700; text-align: left; padding-bottom: 0.4rem; }
.cg-root.cg-bkhl .cg-table td:first-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkhl .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-bkhl .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Baulkham Hills, ABS Census 2021 QuickStats, Baulkham Hills (NSW) suburb and locality SAL10233 (read 10 October 2026): 37,415 people; median age 39; 10,574 families; 13,155 private dwellings; average 3 people per household; bachelor degree or higher 41.2% (12,081); professionals 34.4% (6,204); aged 5 to 9 8.3% (3,110); aged 10 to 14 7.4%; couple families with children 58.2% (6,158); separate houses 75.4% (9,256); flats 11.3%. ABS ASGS 2021 SAL area 13.6507 square kilometres. NSW Department of Education master dataset, suburb Baulkham Hills, The Hills Shire: Baulkham Hills North Public School and Jasper Road Public School (1967), Baulkham Hills High School (1971), Crestwood Public School (1972), Model Farms High School (1975), Crestwood High School (1981), Matthew Pearce Public School (1982). NSW 2027 Eastern division: spring holidays Monday 27 September to Friday 8 October; Term 4 Tuesday 12 October to Monday 20 December.',
    localProject: 'argparse command-line tool on the NSW school locations file for Baulkham Hills (ours): 6 of 7 suburb values end in a space, exact match finds 1, stripped match 7; type=bool makes --secondary False return the 3 high schools instead of the 4 primary schools; BooleanOptionalAction --no-secondary returns 4; --since 975 as text matches 0, as int 7; --since 1970 returns 5 either way.',
    requiredMentions: [
      '37,415',
      '10,574',
      '13,155',
      'Model Farms High School',
      'Matthew Pearce Public School',
      'Jasper Road Public School',
      '13.65 square kilometres',
      'BooleanOptionalAction',
      '12,081'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Baulkham Hills (NSW) suburb and locality (SAL10233): people, median age, families, dwellings, qualifications, occupation, age, family and dwelling structure.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10233'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations (Creative Commons Attribution); names, suburbs, councils and first-teacher dates only.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'Python documentation, argparse: type, choices and BooleanOptionalAction.', url: 'https://docs.python.org/3/library/argparse.html' },
      {
        claim: 'Python documentation, truth value testing: non-empty strings are true.',
        url: 'https://docs.python.org/3/library/stdtypes.html#truth-value-testing'
      },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      {
        claim: 'ABS ASGS Edition 3 (2021) suburbs and localities: Baulkham Hills area.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      }
    ],
    rejectedClaims: [
      'Any description of a Baulkham Hills school as selective, or any enrolment, ICSEA, Indigenous or LBOTE figure: excluded by the cluster rules.',
      'Journey to work and working at home figures from the 2021 Census: excluded because the Census was taken during a lockdown period.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'A reason why the suburb values carry trailing spaces: not known, so not given.',
      'Any total built by adding published Census parts.',
      'Any affiliation with the ABS, The Hills Shire Council or the NSW Department of Education.'
    ]
  }
};
