'use strict';
// Chatswood, Sydney (cg- district page, Australia cluster Phase 8, row 220). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page under Sydney and New South Wales. Chatswood (ABS
// suburb SAL10891) lies wholly in Willoughby LGA by our point-in-polygon check.
// Spine: three agents answer "which month had the most entries at Chatswood Station?" and all three are
// right; why does grading the path (trajectory) catch two of them that grading the answer misses?
// Data: Transport for NSW monthly station entries (CC BY), Chatswood Station, Station_Type "Metro Shared",
// October 2024 to August 2026 (23 months). Agent A reads all 23 months as numbers; agent B reads only the
// last 3 months; agent C reads all 23 but compares them as text. Chatswood: all three answer August 2026,
// 949,108 (correct). Across the 338 stations with a number in every month: A 338/338 (7,774 tool calls),
// B 29/338 (1,014 calls), C 259/338, exactly the stations whose 23 counts all have the same number of
// digits. March 2026 is the busiest month at 177 of 338 stations.
// Lesson family: trajectory evaluation of agents (grading the tool-call path, not only the final answer);
// screened 0 location-page hits.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CHATSWOOD',
    label: 'Chatswood, Sydney',
    blurb: 'Vibe coding and AI agents for Chatswood, with a project showing why an agent that gets the right answer can still have taken a wrong path.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-chatswood-sydney',
  code: 'chsw',
  accent: '#21168B',
  accentRationale: 'Chatswood: a deep ultramarine (hue 245), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 13.5:1 on white and 11.0:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Chatswood',
    eyebrow: 'Chatswood, Willoughby, Sydney',
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
  routeLabel: 'Chatswood, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Chatswood, Sydney',
  description: 'Live online vibe coding, AI agents and Python classes for Chatswood teenagers and adults, taught by real teachers in small groups or one to one. First lesson free.',
  ogDescription: 'AI agents classes for Chatswood, with a project on judging agents by their path: three agents name the right busiest month at Chatswood Station, but only one would be right at all 338 stations.',
  twitterDescription: 'Chatswood vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Chatswood',
    description: 'Level-matched online vibe coding, AI agents, agent evaluation and Python for teenagers and adults in Chatswood, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Chatswood',
  capsuleQ: 'Where do Chatswood learners find the best vibe coding and AI agents classes?',
  capsule: 'In live online lessons that teach teenagers and adults to build agents and to test them properly, not only to prompt them. The 2021 Census counted 25,553 people in Chatswood, 67.6% of occupied homes flats or apartments and 52.7% of residents aged 15 and over holding a bachelor degree or higher. Lessons are private or in small level-matched groups, and the first is free.',
  lead: 'Here is a test that every AI agent builder should run. We asked three simple agents the same question: which month had the most entries at Chatswood Station? All three said August 2026, with 949,108 entries, and all three were right. One read every month. One read only the last three. One read every month but compared the numbers as text. Grading only the final answer gives all three full marks. Grading the path each agent took exposes two of them, and running them across every station proves why that matters.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Chatswood.',
  picks: {
    eyebrow: 'Course picks for Chatswood',
    h2: 'Courses for building agents you can trust',
    intro: 'Every course here touches agent testing at its own level. Book the free trial to find the fit, with no card details needed.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Build Python and web projects with AI help, then test every function before trusting it.'
      },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 18', note: 'How AI tools behave, where they fail, and how to check their work.' },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Language models, retrieval and agents, including how professional teams evaluate them.'
      },
      {
        course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals',
        band: 'Professionals, one to one',
        note: 'Workplace agents in Copilot Studio with testing built into the design, taught privately.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Chatswood in the Census',
      h2: 'Apartments, graduates and short walks to work',
      intro: 'Census 2021 QuickStats for the Chatswood suburb, measured against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Chatswood, 2021 Census headline counts',
          head: ['Headline', 'Chatswood'],
          rows: [
            ['Residents', '25,553'],
            ['Families', '6,937'],
            ['Private dwellings', '11,129'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Chatswood compared with NSW and Australia',
          head: ['Measure', 'Chatswood', 'NSW', 'Australia'],
          rows: [
            ['Flats or apartments among occupied homes', '67.6% (6,442)', '21.7%', '14.2%'],
            ['Bachelor degree or higher, aged 15 and over', '52.7% (11,221)', '27.8%', '26.3%'],
            ['Professionals among employed residents', '39.6% (4,821)', '25.8%', '24.0%'],
            ['Walked only to work on Census day', '7.0% (856)', '2.5%', '2.5%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Vertical living', p: 'Separate houses were only 27.9% of occupied homes, where across NSW they were 65.6%.' },
            { h3: 'Walkers', p: 'Nearly three times the state share walked to work on Census day, 856 people in all.' },
            { h3: 'Census day context', p: 'The Census was taken in August 2021 during lockdowns, and 49.9% of employed residents worked at home that day.' }
          ]
        },
        {
          kind: 'p',
          text: 'Privacy adjustments mean the bureau\'s cells may not sum exactly to its totals. We quote its published figures and never make a total by adding parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Three agents, one right answer, two bad paths',
      intro: 'Each agent has one tool: fetch the entry count for a given station and month from Transport for NSW\'s monthly data. The question is the busiest month at Chatswood Station from October 2024 to August 2026.',
      body: [
        {
          kind: 'table',
          caption: 'The three agents at Chatswood (our calculation)',
          head: ['Agent', 'What it does', 'Tool calls', 'Answer at Chatswood'],
          rows: [
            ['A', 'Reads all 23 months and compares numbers', '23', 'August 2026, correct'],
            ['B', 'Reads only the last 3 months', '3', 'August 2026, correct'],
            ['C', 'Reads all 23 months but compares them as text', '23', 'August 2026, correct']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The same agents on all 338 stations with a count in every month (our calculation)',
          head: ['Agent', 'Correct answers', 'Total tool calls'],
          rows: [
            ['A', '338 of 338', '7,774'],
            ['B', '29 of 338', '1,014'],
            ['C', '259 of 338', '7,774']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Agent B got lucky',
              p: 'Chatswood\'s record month happens to be the last one, so a three-month look finds it. At most stations the record is earlier; March 2026 was the busiest month at 177 of them.'
            },
            {
              h3: 'Agent C got lucky too',
              p: 'Text comparison puts 949,108 above 686,889 because both have six digits. It fails whenever counts have different lengths, which is why it was right at exactly the 259 stations whose counts all had the same number of digits.'
            },
            { h3: 'Agent A earned it', p: 'Reading every month and comparing numbers is the only path that would be right anywhere, and the trajectory shows it.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'What a trajectory check looks like',
          p: 'Instead of asking only whether the answer matched, the grader reads the agent\'s log: did it fetch every month in the range, did it parse each count as a number, did it compare the right values? Agent B fails the first check and agent C fails the second, even at Chatswood where their answers were correct.'
        },
        {
          kind: 'p',
          text: 'The agents, their tool logs and all counts of correct answers are our own, written for teaching from the published monthly figures. Entry counts measure gate entries and the page draws no conclusion about why any month was busier.'
        }
      ]
    },
    {
      id: 'grading',
      tint: 'tint',
      eyebrow: 'Grading agents properly',
      h2: 'Answer checks, path checks, and why you need both',
      intro: 'Teams that ship agents test them in layers. The Chatswood project gives learners a small version of each layer.',
      body: [
        {
          kind: 'table',
          caption: 'Layers of agent evaluation',
          head: ['Check', 'Question it asks', 'Catches'],
          rows: [
            ['Final answer', 'Did the output match the known answer?', 'Plainly wrong answers'],
            ['Coverage', 'Did the agent look at everything it needed?', 'Agent B\'s three-month shortcut'],
            ['Types', 'Were values handled as the right kind of data?', 'Agent C\'s text comparison'],
            ['Many cases', 'Does the behaviour hold across varied inputs?', 'Lucky passes on one example']
          ]
        },
        {
          kind: 'p',
          text: 'The last row is the cheapest lesson of all. One station, Chatswood, made every agent look good. Three hundred and thirty eight stations separated them completely. A test set with many varied cases is the first thing to build, before any clever prompt.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Write the three agents in Python, log every tool call, and write a grader that reads the log.' },
            {
              h3: 'University students',
              p: 'Design evaluation sets that mix easy, tricky and adversarial cases, and measure agents with both answer and path scores.'
            },
            { h3: 'Adults at work', p: 'Apply the same checks to workplace agents before they touch real systems or real customers.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, Willoughby City Council, the NSW Department of Education and the statistics bureau provide the open data used here and have no connection with Modern Age Coders.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Chatswood',
      h2: 'A school from 1883 and a very busy station',
      intro: 'A few more facts from the department\'s files and the station data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Chatswood Public School', p: 'The NSW Department of Education dates the school\'s first teacher to July 1883.' },
            { h3: 'Chatswood High School', p: 'The department\'s file gives January 1959 for the high school\'s first teacher.' },
            {
              h3: 'The quietest month',
              p: 'In the station data the lowest month was January 2025, with 686,889 entries; January 2026 was the second lowest at 724,159.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'A shared station',
          p: 'Transport for NSW labels Chatswood Station as Metro Shared in its monthly file, one of five stations with that label among 383 in the data.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From prompting a game to grading an agent',
    intro: 'Ages are a guide only; the free trial settles the level.',
    cols: [
      {
        band: 'Ages 8 to 12',
        h3: 'Vibe coding for kids',
        p: 'Scratch games planned by the child, built with AI help, then tested by hand.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 13 to 15',
        h3: 'Reading AI code',
        p: 'Python written with an AI and then checked line by line.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Agents and evaluation',
        p: 'Small agents with tools, logs and graders that read the logs.',
        courses: ['teens-ai-tools-mastery-course', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Agents for real work',
        p: 'Production agents, evaluation sets and workplace platforms.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Agents can already answer questions. Why should a Chatswood learner build the grader?',
    intro: 'Because an agent that is right for the wrong reason will eventually be wrong, and only someone who reads the path will see it coming.',
    p1: 'Agent C in our project is right at Chatswood and wrong at 79 other stations. Nothing in its answer warns you; the flaw is visible only in how it compared the numbers. Real agents fail in the same quiet way when they skip data or mishandle types.',
    p2: 'A learner who has built all three agents and the grader reads any AI system differently. They ask what the agent looked at, how it handled each value, and whether it was tested on many cases or just one convenient example.',
    closer: 'In 2026 the Chatswood learners who can grade agents will be the ones trusted to build them, and that skill starts with writing and testing code yourself.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'From a Chatswood apartment, live',
    intro: 'Most Chatswood homes are apartments, and a live online lesson needs nothing more than a quiet corner and a laptop.',
    cells: [
      { h3: 'No commute', p: 'The learner joins from home, so the whole hour goes to coding rather than travel.' },
      { h3: 'NSW stages', p: 'Plans follow the NSW syllabus stages and pause for state school holidays.' },
      { h3: 'A real trial', p: 'The free first lesson is a proper class, followed by a recommendation and nothing to pay.' },
      { h3: 'Level-matched groups', p: 'Fifteen to twenty learners at the same level, or one to one when that suits better.' },
      { h3: 'Regular rhythm', p: 'Two fixed lessons a week, about eight a month, with breaks planned in advance.' },
      { h3: 'Teachers in India', p: 'A 6:30pm Chatswood lesson in summer starts at 1pm India time, and at 2pm once Sydney ends daylight saving.' }
    ],
    spec: {
      title: 'Clock changes in Sydney',
      p: 'Daylight saving in Sydney runs from Sunday 4 October 2026 to Sunday 4 April 2027, while India stays on one time. Our timetables are always written in Sydney time.'
    }
  },
  fees: {
    h2: 'Chatswood class fees',
    intro: 'The price list has three lines.',
    first: 'The first lesson is free and ends with a clear suggestion.',
    group: 'A month of small-group lessons, normally eight, with fifteen to twenty learners.',
    private: 'Around eight one-to-one lessons a month.',
    closer: 'Outside India we invoice in US dollars, with one rate for every suburb. Nothing is charged until course and timing are fixed after the trial, and the pricing page explains holidays and absences.'
  },
  reviewsH2: 'Google reviews from our families',
  book: {
    h2: 'Book a first Chatswood lesson',
    intro: 'Tell us an age and a topic the learner likes. A Year 9 student might start by getting an AI to build a quiz; an adult might start by writing agent C and finding its bug.',
    success: 'Thank you. Our team will be in touch shortly about a Chatswood class.'
  },
  faq: {
    h2: 'Chatswood vibe coding and AI agents questions',
    intro: 'What Chatswood families and adult learners usually ask first.',
    items: [
      { q: 'How many people live in Chatswood?', a: 'The 2021 Census QuickStats for the Chatswood suburb record 25,553 residents and a median age of 37.' },
      {
        q: 'What is trajectory evaluation for AI agents?',
        a: 'Trajectory evaluation grades the steps an AI agent took, such as which tools it called and what it did with the results, instead of only checking whether its final answer was correct. It catches agents that reach a right answer by a wrong or lucky route.'
      },
      {
        q: 'What is the Chatswood agent project?',
        a: 'Learners build three agents that find the busiest month at Chatswood Station from Transport for NSW data. All three answer August 2026 correctly, but across 338 stations one is right every time, one only 29 times and one 259 times. Learners then write a grader that reads each agent\'s steps.'
      },
      {
        q: 'Why does comparing numbers as text go wrong?',
        a: 'Text comparison goes character by character, so 99,000 sorts above 100,000 because 9 comes after 1. When all the numbers have the same length it happens to work, which is how the text-comparing agent stayed right at Chatswood.'
      },
      {
        q: 'Do I need to know Python first?',
        a: 'Not for the first lessons. Beginners start with simpler projects and reach agents once they can write and read short programs.'
      },
      {
        q: 'Are Copilot Studio agents taught in groups?',
        a: 'No. Copilot Studio is taught one to one only, because every workplace has its own data and permissions. Teenagers build agents in Python.'
      },
      { q: 'Can younger children join?', a: 'Yes, from age six, starting with Scratch and simple vibe coding. The agent project is for older students.' },
      {
        q: 'Do you have an office in Chatswood?',
        a: 'No. All lessons are live online and we have no premises in Australia. The phone number on our site is Indian.',
        boiler: true
      },
      {
        q: 'What do AI agents classes cost in Chatswood?',
        a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one.',
        boiler: true
      },
      {
        q: 'How many learners are in each group?',
        a: 'Five to ten, grouped by level and pace. If no group fits, one-to-one lessons are offered.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Chatswood learners',
    html: 'The <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-willoughby-sydney">Willoughby page</a> covers the wider council area, and nearby <a class="cg-inline-link" href="/ai-and-programming-classes-in-north-sydney-sydney">North Sydney</a> has its own page. <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">Learn to think, not just use AI tools</a> explains our approach; the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> covers the city.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Chatswood and Sydney',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-willoughby-sydney', label: 'Willoughby' },
    { href: '/best-coding-and-ai-classes-in-kellyville-sydney', label: 'Kellyville' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-chsw .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.4vw, 2.7rem); }
.cg-root.cg-chsw .cg-hero h1 { font-weight: 800; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-chsw .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.45rem 0 0.45rem 1rem; }
.cg-root.cg-chsw .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-chsw .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.015em; }
.cg-root.cg-chsw .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.7rem); }
.cg-root.cg-chsw .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-chsw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-chsw .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-chsw .cg-callout { border-left-width: 7px; }
`,
  dossier: {
    curriculumAuthority: 'Chatswood, ABS Census 2021 QuickStats, Chatswood suburb SAL10891 (read 10 October 2026): 25,553 people; median age 37; 6,937 families; 11,129 private dwellings; 2.5 people per household; flat or apartment 6,442 (67.6 percent; NSW 21.7; Australia 14.2); separate house 2,660 (27.9 percent; NSW 65.6); Bachelor Degree level and above 11,221 (52.7 percent; NSW 27.8; Australia 26.3); Professionals 4,821 (39.6 percent; NSW 25.8); Walked only 856 (7.0 percent; NSW 2.5); Worked at home 6,073 (49.9 percent). Council: 4,000 random points inside the ABS SAL boundary all fall in Willoughby LGA. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Trajectory evaluation. Transport for NSW monthly station entries (CC BY), Chatswood Station, Station_Type Metro Shared (5 of 383 stations carry that label), Entry, October 2024 to August 2026: 805797, 797300, 755816, 686889, 776344, 864970, 785227, 841439, 830132, 812973, 843763, 846971, 880189, 850319, 794279, 724159, 809054, 867365, 813555, 888501, 869428, 877023, 949108. Busiest month August 2026 (949,108); quietest January 2025 (686,889). Agent A reads all 23 months numerically; agent B reads the last 3 months; agent C reads all 23 and compares as strings. Chatswood: all three answer August 2026. Across 338 stations with numeric counts in all 23 months: A 338 correct (7,774 calls), B 29 correct (1,014 calls), C 259 correct (exactly the stations whose counts all have the same number of digits). Busiest month across stations: March 2026 at 177 of 338. First-teacher dates (NSW Department of Education master dataset, Town_suburb Chatswood): Chatswood Public School 1883-07-01; Chatswood High School 1959-01-01.',
    requiredMentions: ['25,553', '6,937', '11,129', '6,442', '11,221', '724,159', '686,889', 'Chatswood Public School', 'Metro Shared'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Chatswood (SAL10891).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10891' },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'ABS ASGS Edition 3 boundaries (SAL and LGA), geo.abs.gov.au map services.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Which train lines or metro services use Chatswood Station: not verified from the data file, so only the file label Metro Shared is quoted.',
      'Any cause for busy or quiet months, including school holidays: not claimed.',
      'That the agents represent any commercial product: they are teaching scripts written by us.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, Willoughby City Council, the NSW Department of Education or the ABS.'
    ]
  }
};
