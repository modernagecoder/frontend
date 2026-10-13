'use strict';
// South Morang, Melbourne (cg- district page, Australia cluster Phase 8, row 280). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL22311, South Morang, City of Whittlesea) under Melbourne
// and Victoria. South Morang station's point lies inside the Mill Park SAL boundary, so it is not counted as inside.
// Spine: entity linking of free-text station names to canonical stop IDs for an agent tool, refusing when ambiguous.
// 222 canonical names from the FY24-25 metropolitan station patronage file; 1,540 test strings we generated (222 exact,
// 222 lower case, 222 + " Station", 222 + " Stn", 222 capitals, 216 one-letter typos, 191 two-letter typos, 23
// abbreviations). Exact lookup 222 right, 1,318 no answer. Normalise 1,133 right, 407 no answer. Fuzzy strict
// (difflib >= 0.85, refuse when top two within 0.05) 1,417 right, 0 wrong, 123 refused. Fuzzy loose (>= 0.6, no gap)
// 1,534 right, 6 wrong. Script: scratchpad au/b10/smrg.py, smrg2.py.
// Lesson family: entity linking with refusal; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SOUTH MORANG',
    label: 'South Morang, Melbourne',
    blurb: 'Vibe coding and AI agents classes for South Morang, with a project on teaching an agent to recognise station names and to refuse a guess.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-south-morang-melbourne',
  code: 'smrg',
  accent: '#623445',
  accentRationale: 'South Morang: a dark plum (hue 338), picked by a full search of the muted range: 31.8 RGB units from every Victorian page accent, 13.6 from every other Australian accent and 8.1 from every other colour in content, the stylesheets and the claims logs; 8.13:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'South Morang',
    eyebrow: 'South Morang, City of Whittlesea, Melbourne, Victoria',
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
  routeLabel: 'South Morang, Melbourne',
  title: 'Vibe Coding and AI Agents Classes in South Morang, Melbourne',
  description: 'Live online vibe coding and AI agents classes for South Morang teenagers and adults, plus coding for children, with projects on agents that know when not to guess.',
  ogDescription: 'AI agents classes for South Morang: a loose name matcher got 6 of 1,540 station names wrong. A strict one refused 123 and got none wrong. Which would you ship?',
  twitterDescription: 'South Morang vibe coding and AI agents classes, live online, first class free.',
  ogImageCourse: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for South Morang',
    description: 'Level-matched online lessons in vibe coding, AI agents, Python and data matching for learners in South Morang, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in South Morang',
  capsuleQ: 'What do South Morang learners build in an AI agents class?',
  capsule: 'Small agents that take a request in everyday words, match it to exact data, and say so plainly when they cannot be sure. South Morang is a newer family suburb: the 2021 Census counted 24,989 residents, three people per household on average and a median age of 36.',
  lead: 'Type "Sth Moran" into a journey app and you expect South Morang. Type "Morang" and there is a real question: South Morang, or somewhere else on the line? An AI agent that calls a timetable tool has to turn loose human text into one exact station ID first. Getting that step right, including knowing when to ask rather than guess, decides whether everything after it is right.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in South Morang.',
  picks: {
    eyebrow: 'Course picks for South Morang',
    h2: 'Courses for agents that check before they act',
    intro: 'These courses build tools that take messy input and must turn it into something exact, the problem at the heart of the station name project. The free first class decides where to begin.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Python and web projects built with AI, then tested on awkward inputs.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Strings, dictionaries and the standard library, difflib included.' },
      {
        course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
        band: 'University and adult',
        note: 'Full projects with AI help, including tool calls that must be exact.'
      },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Automations that clean and match real-world names before acting.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'South Morang in the Census',
      h2: 'Families, houses and cars',
      intro: 'Figures for the South Morang suburb (ABS code SAL22311) from the 2021 Census QuickStats, set beside the Victorian figure.',
      body: [
        {
          kind: 'table',
          caption: 'South Morang suburb, 2021 Census headline counts',
          head: ['Headline', 'South Morang'],
          rows: [
            ['Residents', '24,989'],
            ['Median age', '36'],
            ['Families', '6,813'],
            ['Private dwellings', '8,496'],
            ['Average people per household', '3.0']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'South Morang and the state',
          head: ['Measure', 'South Morang', 'Victoria'],
          rows: [
            ['Separate houses', '84.4% (6,781)', '73.4%'],
            ['Semi-detached, row or terrace houses and townhouses', '15.2% (1,217)', '13.9%'],
            ['Flats or apartments', '0.4% (34)', '12.1%'],
            ['Workers who drove to work', '57.5% (7,444)', '49.9%'],
            ['Workers who took the train', '2.0% (256)', '1.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Almost no flats', p: 'Only 34 South Morang homes were counted as flats or apartments, 0.4% of the total.' },
            { h3: 'Area', p: 'The bureau measures the suburb at 21.45 square kilometres, in the City of Whittlesea in Melbourne\'s north.' },
            { h3: 'Census in lockdown', p: 'The 2021 count took place in an August lockdown, when 20.8% of employed residents, 2,694 people, worked from home.' }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats makes small random changes to its cells to protect privacy, so parts may not sum to a total. We show each value as released and never total them ourselves.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Matching messy names to exact stations',
      intro: 'We took the 222 station names in the state\'s FY24-25 patronage file as the canonical list, each with its stop ID. Then we generated 1,540 test strings the way people actually type: the exact name, lower case, with "Station" or "Stn" added, in capitals, with one or two letters wrong, and with words like South or Park shortened. Four matchers tried to link each string back to the right station.',
      body: [
        {
          kind: 'table',
          caption: 'Results on 1,540 generated station names (our calculation)',
          head: ['Matcher', 'Right', 'Wrong', 'No answer or refused'],
          rows: [
            ['Exact lookup', '222', '0', '1,318'],
            ['Normalise case, suffixes and short forms', '1,133', '0', '407'],
            ['Fuzzy, strict: score 0.85 or more and a clear winner', '1,417', '0', '123'],
            ['Fuzzy, loose: top score above 0.6, no margin', '1,534', '6', '0']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Cheap wins first',
              p: 'Plain normalising, lower case, dropping "Station", expanding "Sth", lifted the right answers from 222 to 1,133 without any fuzzy matching at all.'
            },
            {
              h3: 'Where loose goes wrong',
              p: 'All six errors came from two-letter typos: "Esst Ruchmond" became West Richmond instead of East Richmond, and "Mattern" became Patterson instead of Malvern.'
            },
            {
              h3: 'Local tests',
              p: 'The strict matcher linked "Sth Moran" to South Morang and "Hawkstown" to Hawkstowe, and refused "Morang", "Park" and "Mill Park" rather than guess.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A refusal is an answer',
          p: 'For an agent, a wrong station ID is worse than no ID: it returns a confident timetable for the wrong place. A refusal lets the agent ask the person which they meant. The strict matcher gave up 117 correct answers compared with the loose one to remove all six errors, and for an agent tool that is usually the right trade.'
        },
        {
          kind: 'p',
          text: 'The test strings are ours, generated by script, not real searches; real typing errors are messier. The canonical names come from the patronage file. Even official files disagree: the same station is spelled McKinnon in one year\'s file and Mckinnon in another, which a matcher has to survive too.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The pattern',
      h2: 'Normalise, match, then decide',
      intro: 'Entity linking turns a loose mention into one exact record. A dependable linker works in layers, from cheap and certain to expensive and doubtful, and keeps the option of saying "not sure".',
      body: [
        {
          kind: 'table',
          caption: 'Layers of a station name linker',
          head: ['Layer', 'Handles', 'Risk'],
          rows: [
            ['Exact match on the canonical list', 'Names typed perfectly', 'None, but catches little'],
            ['Normalisation rules', 'Case, "Station", "Stn", Sth, Nth, Mt, Pk', 'Low, if the rules are tested'],
            ['Similarity score with a threshold', 'Typos and slips', 'Wrong matches below the threshold'],
            ['Margin check between the top two', 'Near-ties such as similar names', 'Some correct answers are refused']
          ]
        },
        {
          kind: 'p',
          text: 'Python\'s difflib computes the similarity ratio used here with no extra installs. An agent built on a language model can call this linker as a tool and pass its refusals back to the user as a question. The same layered approach links company names in invoices, product names in orders and place names in emergency logs.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'A Scratch quiz that accepts "sth morang" as well as "South Morang", and asks again when unsure.' },
            { h3: 'Teenagers', p: 'Code the four matchers in Python, generate the test strings and fill in the results table.' },
            { h3: 'Adults', p: 'Plug the linker into an agent as a tool and log every refusal for review.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around South Morang',
      h2: 'Two stations on the Mernda line',
      intro: 'Station entries from the state patronage file and school counts from the 2025 school locations file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Middle Gorge', p: 'Middle Gorge station recorded 222,950 entries in FY24-25, up from 192,700 in FY18-19.' },
            {
              h3: 'Hawkstowe',
              p: 'Hawkstowe recorded 208,500 entries, up from 193,600. South Morang station itself stands just over the boundary, inside the Mill Park suburb.'
            },
            {
              h3: 'Schools',
              p: 'Four open schools sit inside South Morang in the 2025 file, two of them government: Morang South Primary School and The Lakes South Morang College.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 3, 2027',
          p: 'Victorian government schools run Term 3 from Monday 12 July to Friday 17 September 2027, a natural point to start or change a course.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From forgiving quizzes to agent tools',
    intro: 'Ages are only a guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Quizzes and games that understand typed answers.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python with text',
        p: 'Strings, lower case and the first simple name matcher.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Vibe coding and agents',
        p: 'AI-built projects with tools that must be exact.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Agents for real data',
        p: 'Linking, cleaning and checking before an agent acts.',
        courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and AI',
    h2: 'Why teach a South Morang learner to make an agent say "I am not sure"?',
    intro: 'Because language models are built to answer, and the tools around them have to supply the doubt.',
    p1: 'A model asked for the next train from "Morang" will pick a station and carry on, as fluent when wrong as when right. The safeguard is a linking tool that returns either one exact stop ID or a clear refusal, and an agent design that turns the refusal into a question for the person.',
    p2: 'A learner who has watched a loose matcher send "Esst Ruchmond" to West Richmond understands why thresholds and margins exist, and can ask an AI to build them in from the start.',
    closer: 'In our South Morang classes, vibe coding goes hand in hand with deciding what the agent must never guess.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How South Morang learners attend',
    intro: 'Each class is a live video lesson, joined from home.',
    cells: [
      { h3: 'Code on screen', p: 'The learner writes the code and shares the screen; the teacher reads along and asks why each line is there.' },
      { h3: 'Victorian calendar', p: 'Courses run with the state school terms and break for holidays.' },
      { h3: 'Free trial lesson', p: 'The first lesson is free and complete, and ends with a suggested course and weekly time.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners at a similar level make up each group.' },
      { h3: 'Two sessions weekly', p: 'Two lessons a week on fixed days, about eight a month, with holidays planned in.' },
      {
        h3: 'Teachers in India',
        p: 'Our teachers are in India: a 5:15pm South Morang lesson in daylight saving is 11:45am India time, and 12:45pm during the Melbourne winter.'
      }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'South Morang class fees',
    intro: 'Free to try, then a monthly fee.',
    first: 'A free first lesson that finishes with a clear recommendation.',
    group: 'A month of group lessons, usually eight, with fifteen to twenty learners at the same stage.',
    private: 'Around eight one-to-one lessons each month with one teacher.',
    closer: 'We charge families outside India in US dollars, so South Morang pays the same rate as other families abroad. Payment waits until the trial has settled course and time; the pricing page covers holidays, missed lessons and format changes.'
  },
  reviewsH2: 'What Google reviewers write about our classes',
  book: {
    h2: 'Book a free South Morang class',
    intro: 'Send the learner\'s age and one interest. An eight-year-old could begin with a Scratch quiz that forgives typos; a Year 11 student could begin by building the station name linker.',
    success: 'Thank you. Our team will be in touch soon about a South Morang class.'
  },
  faq: {
    h2: 'South Morang vibe coding and agents questions',
    intro: 'What South Morang families and adult learners ask us.',
    items: [
      {
        q: 'How many people live in South Morang?',
        a: 'The 2021 Census QuickStats for the South Morang suburb count 24,989 residents, 6,813 families and 8,496 private dwellings, with a median age of 36.'
      },
      {
        q: 'What is entity linking?',
        a: 'Matching a mention in free text, such as "Sth Morang stn", to one exact record in a reference list, such as a station with its official stop ID. A good linker also reports when no single record clearly fits.'
      },
      {
        q: 'What is an AI agent tool?',
        a: 'A function an AI model can call to do something exact, such as look up a timetable. The model decides when to call it; the tool supplies precise results the model could not reliably produce alone.'
      },
      {
        q: 'What did the South Morang station name project find?',
        a: 'On 1,540 generated names, exact lookup linked 222, normalising 1,133, a strict fuzzy matcher 1,417 with no errors and 123 refusals, and a loose matcher 1,534 with 6 wrong.'
      },
      {
        q: 'Can teenagers build AI agents safely?',
        a: 'Yes, with limited tools, test data and a teacher reviewing the design. Learning where an agent must stop and ask is a core part of the course.'
      },
      {
        q: 'What do younger South Morang children start with?',
        a: 'Children from six begin with Scratch, making quizzes and games that respond to what they type.'
      },
      {
        q: 'Is there a South Morang venue?',
        a: 'No. All lessons are live online; there are no Modern Age Coders premises in Australia, and our phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do classes cost for South Morang learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one classes cost USD 150 a month. You confirm course, format and time before paying.',
        boiler: true
      },
      {
        q: 'How many learners are in a class?',
        a: 'Five to ten, grouped by level, pace and goals, with one-to-one lessons when no group time suits.',
        boiler: true
      },
      { q: 'Do adults take vibe coding classes?', a: 'Yes. Adults join their own groups or learn one to one, often to build small agents for tasks at work.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for South Morang learners',
    html: 'Our <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> sets out vibe coding and agents classes across the city, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> the state. A child new to coding may be better served by our <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">guide to kids coding in Melbourne</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'South Morang and Melbourne',
  footerPlaces: [
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-smrg .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.5vw, 2.7rem); }
.cg-root.cg-smrg .cg-hero h1 { font-weight: 670; letter-spacing: -0.019em; line-height: 1.05; }
.cg-root.cg-smrg .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1.15rem; }
.cg-root.cg-smrg .cg-eyebrow { letter-spacing: 0.14em; font-weight: 670; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-smrg .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.013em; }
.cg-root.cg-smrg .cg-grid-3 { gap: clamp(0.75rem, 2.1vw, 1.7rem); }
.cg-root.cg-smrg .cg-table caption { font-weight: 650; text-align: left; text-transform: none; }
.cg-root.cg-smrg .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-smrg .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-smrg .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'South Morang, ABS Census 2021 QuickStats, South Morang suburb SAL22311 (read 11 October 2026): 24,989 people; median age 36; 6,813 families; 8,496 private dwellings; 3.0 people per household; separate house 84.4% (6,781; Victoria 73.4%); semi-detached, row or terrace house, townhouse 15.2% (1,217; Victoria 13.9%); flat or apartment 0.4% (34; Victoria 12.1%); car as driver 57.5% (7,444; Victoria 49.9%); train 2.0% (256; Victoria 1.6%); worked at home 20.8% (2,694; lockdown Census). ABS SAL area 21.45 square kilometres, City of Whittlesea. Metropolitan stations inside the boundary: Middle Gorge 222,950 FY24-25 (FY18-19 192,700) and Hawkstowe 208,500 (FY18-19 193,600); South Morang station point falls inside the Mill Park SAL. Victorian School Locations 2025: 4 open schools (Government 2, Catholic 1, Independent 1); government: Morang South Primary School, The Lakes South Morang College. Victorian 2027 Term 3: Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Entity linking of free-text station names with refusal. Canonical list: 222 Stop_name values with Stop_ID from the FY24-25 metropolitan station patronage file. 1,540 generated test strings: 222 exact, 222 lower case, 222 + " Station", 222 + " Stn", 222 upper case + " STATION", 216 one-letter deletions, 191 two-letter substitutions, 23 abbreviations (Sth, Nth, E, W, Mt, Pk). Exact: 222 right, 1,318 none. Normalise: 1,133 right, 407 none. difflib strict (ratio >= 0.85 and top-two margin >= 0.05): 1,417 right, 0 wrong, 123 refused. difflib loose (>= 0.6, no margin): 1,534 right, 6 wrong (e.g. Esst Ruchmond to West Richmond, Mattern to Patterson, Glenrunoly to Glenroy). Probes: Sth Moran to South Morang, Hawkstown to Hawkstowe, Morang / Park / Mill Park refused. McKinnon spelling differs between yearly files. Script: scratchpad au/b10/smrg.py, smrg2.py.',
    requiredMentions: [
      '24,989',
      '208,500',
      '8,496',
      '21.45 square kilometres',
      'Middle Gorge',
      '222,950',
      '1,540',
      '1,417',
      'Morang South Primary School',
      'The Lakes South Morang College'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, South Morang suburb (SAL22311).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL22311' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL22311 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL21683 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'Python documentation, difflib module (SequenceMatcher ratio).', url: 'https://docs.python.org/3/library/difflib.html' },
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
      'Accuracy on real user searches: not measured; all test strings were generated by our script.',
      'Any claim about how journey planning apps match names: not made.',
      'South Morang station counted as inside the suburb: its point lies within the Mill Park SAL boundary.',
      'Names of the Catholic and independent schools: not used; counted only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Whittlesea, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
