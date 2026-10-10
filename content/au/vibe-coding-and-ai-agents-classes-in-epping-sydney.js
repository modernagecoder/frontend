'use strict';
// Epping, Sydney (cg- district page, Australia cluster Phase 8, row 216). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*). Epping is an ABS suburb and locality (SAL11431); by our grid estimate
// against ABS 2021 polygons it lies wholly inside the City of Parramatta council area. Parents: Australia, NSW, Sydney.
// Spine: an AI agent told to keep only "Train" rows answers "which is the busiest rail station?" with Town Hall,
// and Epping vanishes from its table. Why, and how should an agent handle category values it did not expect?
// Data: Transport for NSW, Train Station Entries and Exits (Opal, monthly, CC BY), file read 10 October 2026.
// August 2026 entry rows by Station_Type: Train 289, Light rail 65, Metro 16, Metro Shared 5 (Central, Chatswood,
// Epping, Martin Place, Sydenham); all four types present from October 2024. 16 entry values are "Less than 50".
// Our checks (scratchpad au/b2/p6_epp.py): Train-only top three Town Hall 1,832,430, Wynyard 1,147,663, Parramatta
// 1,058,394; with Metro Shared, Central 2,358,027 is first and Epping (435,308) is 14th. Metro Shared rows are
// 19.07% of numeric Train plus Metro Shared entries (our arithmetic, censored rows excluded). Epping entries
// October 2024 370,793; August 2026 435,308.
// Lesson family: unexpected category values in an agent's allow-list filter; screened 0 page hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Epping (NSW) SAL11431; NSW Department of Education master dataset (CC BY),
// Date_extracted 2026-10-02, rows with Town_suburb Epping: 5.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health; enrolment, ICSEA,
// Indigenous, LBOTE and selective columns.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'EPPING',
    label: 'Epping, Sydney',
    blurb: 'Vibe coding and AI agents for Epping, with a project on the station an agent filter quietly loses.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-epping-sydney',
  code: 'epsy',
  accent: '#543239',
  accentRationale: 'Epping: a dark mulberry brown (hue 347), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with strong contrast on white and on the paper tints',
  pageType: 'city',
  place: {
    name: 'Epping',
    eyebrow: 'Epping, City of Parramatta, Sydney',
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
  routeLabel: 'Epping, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Epping, Sydney',
  description: 'Live online vibe coding and AI agent classes for Epping learners aged 6 to 67: build with AI, then check its work line by line. Small groups; first lesson free.',
  ogDescription: 'Vibe coding and AI agents for Epping, with a project on how an agent filter silently drops Epping station from the busiest-station table.',
  twitterDescription: 'Epping vibe coding and AI agents classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Epping',
    description: 'Level-matched vibe coding, Python and AI agent lessons for children, teenagers and adults in Epping, Sydney, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Epping',
  capsuleQ: 'Where can Epping learners find the best vibe coding and AI agents classes?',
  capsule: 'In live online classes that pair building with AI and checking what it builds: block games for young children, Python and agents for teenagers and adults. Epping is a suburb of the City of Parramatta covering about 6.8 square kilometres, home to 29,551 people at the 2021 Census, median age 36.',
  lead: 'Ask an AI agent to find the busiest rail station in the Transport for NSW file and it may decide to keep rows where the station type is "Train". It answers Town Hall, 1,832,430 entries in August 2026, and looks right. It is not: Central logged 2,358,027 that month but is listed as "Metro Shared", along with Chatswood, Martin Place, Sydenham and Epping itself. Five stations vanish without a warning, and finding out why is a lesson every agent builder needs.',
  wa: 'Hello Modern Age Coders, we would like a free vibe coding or AI agents lesson for a learner in Epping.',
  picks: {
    eyebrow: 'Course picks for Epping',
    h2: 'Build with AI, then prove it right',
    intro: 'Every course here includes the habit this page teaches: look at the data before trusting a filter. The trial lesson picks the right one, and no card is needed.',
    items: [
      {
        course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev',
        band: 'Ages 6 to 11',
        note: 'Games made with friendly AI help, then tested by the child, one rule at a time.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 12 to 17',
        note: 'Python and web projects built with AI assistants, with every generated line read and checked.'
      },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Exploring real files first: categories, missing values and surprises, before any filtering.'
      },
      {
        course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
        band: 'University and adult',
        note: 'Full-stack apps and agent workflows, with tests that catch silent data loss.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Epping in the 2021 Census',
      h2: 'A suburb of families, flats and degrees',
      intro: 'Census night 2021 figures for the Epping suburb and locality, published in QuickStats, with NSW and national shares alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Epping suburb counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '29,551'],
            ['Families', '8,399'],
            ['All private dwellings', '11,515'],
            ['People per household, average', '2.8'],
            ['Area of the suburb', 'About 6.8 square kilometres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Epping compared',
          head: ['Indicator', 'Epping', 'NSW', 'Australia'],
          rows: [
            ['Flats or apartments among occupied homes', '47.4% (4,904)', '21.7%', '14.2%'],
            ['Separate houses among occupied homes', '42.6% (4,398)', '65.6%', '72.3%'],
            ['Couple families with children', '52.9% (4,443)', '44.7%', '43.7%'],
            ['Professionals among employed residents', '44.4% (6,396)', '25.8%', '24.0%'],
            ['Residents aged 10 to 14', '6.9% (2,036)', '6.2%', '6.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Younger than the state',
              p: 'A median age of 36 is three years below New South Wales, and children aged 10 to 14 make up a larger share than across the state.'
            },
            {
              h3: 'More flats than houses',
              p: 'Flats or apartments edge out separate houses, 47.4% against 42.6% of occupied homes, with townhouses and terraces at 9.8%.'
            },
            {
              h3: 'A highly qualified suburb',
              p: '55.9% of residents hold a bachelor degree or higher, about double the state share, and 44.4% of workers are professionals.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Epping is a suburb, not a council: its local government is the City of Parramatta, and these figures cover the suburb alone. Census cells are lightly randomised for privacy, so we copy each one as published and do not build totals from parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The station an agent\'s filter quietly lost',
      intro: 'The Transport for NSW entries and exits file labels every station with a type. An agent that assumes it knows the labels can drop real rows without any error at all.',
      body: [
        {
          kind: 'table',
          caption: 'Station types in the August 2026 entry rows (Transport for NSW)',
          head: ['Station_Type value', 'Stations'],
          rows: [
            ['Train', '289'],
            ['Light rail', '65'],
            ['Metro', '16'],
            ['Metro Shared', '5: Central, Chatswood, Epping, Martin Place, Sydenham']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Busiest stations by entries, August 2026, under two filters (our ranking)',
          head: ['Rank', 'Filter: Train only', 'Filter: Train and Metro Shared'],
          rows: [
            ['1', 'Town Hall, 1,832,430', 'Central, 2,358,027'],
            ['2', 'Wynyard, 1,147,663', 'Town Hall, 1,832,430'],
            ['3', 'Parramatta, 1,058,394', 'Wynyard, 1,147,663'],
            ['Epping', 'Missing', '14th, 435,308']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'What went wrong',
              p: 'The agent wrote an allow-list of the values it expected. "Metro Shared" was not on it, so those rows were filtered out, and no line of code complained.'
            },
            {
              h3: 'It was always there',
              p: 'This is not a value that appeared recently: all four station types are present from the first month in the file, October 2024. The agent simply never looked.'
            },
            {
              h3: 'How big the gap is',
              p: 'By our arithmetic, Metro Shared stations account for 19.07% of the numeric Train and Metro Shared entries in August 2026, too much to lose quietly.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The habit to teach the agent',
          p: 'Before filtering, print the distinct values of the column. After filtering, compare row counts before and after. And when a value turns up that is on neither the keep list nor the drop list, stop and ask instead of guessing. Those three lines would have kept Epping, at 435,308 entries in August 2026 against 370,793 in October 2024, in the answer.'
        },
        {
          kind: 'p',
          text: 'Entries are Opal gate taps, not people. In August 2026 sixteen entry values in the file read "Less than 50" rather than a number and were left out of our rankings and shares. All rankings and percentages here are our own work on the published file.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Building a careful agent',
      h2: 'Guardrails a learner can add in an afternoon',
      intro: 'With the failure understood, the project becomes an agent that handles unknown categories on purpose.',
      body: [
        {
          kind: 'table',
          caption: 'Guardrails for the station agent',
          head: ['Guardrail', 'Code idea', 'Catches'],
          rows: [
            ['Profile the column first', 'Count distinct Station_Type values', 'Labels nobody expected'],
            ['Explicit keep and drop lists', 'Raise an error on anything in neither list', 'New categories in next month\'s file'],
            ['Row counts in the log', 'Print rows before and after each filter', 'Filters that remove too much'],
            ['A tool that answers with evidence', 'Return the filter used beside the result', 'Answers a human cannot audit']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Sort coloured cards with a rule, then find the card that fits no rule, and decide together what to do with it.' },
            { h3: 'Teenagers', p: 'Write the station filter in Python, break it with "Metro Shared", and fix it so the program asks instead of guessing.' },
            { h3: 'Adults', p: 'Wrap a data tool for an AI agent at work with the same four guardrails, and log every filter it applies.' }
          ]
        },
        {
          kind: 'p',
          text: 'None of the agencies whose open files we used, Transport for NSW, the education department or the statistics bureau, is linked with Modern Age Coders. The rankings, shares and the guardrail design come from our own code.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Epping schools',
      h2: 'Five public schools with an Epping address',
      intro: 'From the education department\'s government school location file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Five schools',
              p: 'Five government schools list Epping as their suburb: four primary schools and one school for specific purposes, all in the City of Parramatta council area.'
            },
            {
              h3: 'A long history',
              p: 'Epping Public School records a first teacher in 1901, Epping West Public School in 1927 and Epping Heights Public School in 1956.'
            },
            {
              h3: '2027 school terms',
              p: 'NSW public schools in the Eastern division close for summer on Friday 18 December 2026, reopen to staff on 28 January, and welcome students back on Wednesday 3 February 2027.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'The newest school in the list',
          p: 'Ngarala Public School has a first-teacher date of 2023, the most recent of the five, a neat first exercise in sorting dates in Python.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From telling an AI what to build to checking what it built',
    intro: 'Use the ages as a rough guide; the free trial lesson sets the real starting point.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Rules and blocks',
        p: 'Scratch games and simple rules, learning that a computer does exactly what it is told.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'Thinking like a tester',
        p: 'Problem solving and first Python, predicting results before running the code.',
        courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'Vibe coding with checks',
        p: 'Projects built with AI assistants, data explored before it is filtered, and tests that catch silent errors.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Agents you can trust',
        p: 'Full-stack and agent workflows with logging, guardrails and evidence for every answer.',
        courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Agents act on their own. Who checks an Epping learner\'s agent?',
    intro: 'The learner does, and only someone who can read code can do that job.',
    p1: 'An agent that chooses its own filter can return a polished, confident answer built on a wrong assumption, as the Town Hall result shows. Nothing crashes, so a user who cannot read the code has no reason to doubt it.',
    p2: 'Our classes treat vibe coding as a starting point, not a finish line. Learners prompt the AI, then read what it produced, profile the data themselves, and add the guardrails that make an agent explain and justify every step.',
    closer: 'In 2026 agents can do a great deal of the typing; Epping learners who can audit an agent\'s choices are the ones who should be trusted to run one.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How online lessons work for Epping learners',
    intro: 'There is no class to travel to; the teacher and learner meet on video at a set time each week.',
    cells: [
      { h3: 'Live, not recorded', p: 'The teacher watches the learner build and prompt in real time and steps in the moment an AI suggestion goes astray.' },
      { h3: 'NSW-aware', p: 'Teachers know NSW stages and syllabus terms, and lessons pause for the state school holidays.' },
      { h3: 'A free trial lesson', p: 'The first class is complete and free, and closes with a recommended course, level and time slot.' },
      {
        h3: 'Small, level-matched groups',
        p: 'Five to ten classmates who are all working on similar material, or a private teacher if the timetable or pace needs it.'
      },
      { h3: 'Two sessions a week', p: 'A fixed weekly pair of lessons, about eight a month, with breaks agreed in advance.' },
      {
        h3: 'Teachers in India',
        p: 'A 5:30pm Epping lesson in summer begins at noon India time; after daylight saving ends in Sydney it begins at 1pm there.'
      }
    ],
    spec: {
      title: 'Daylight saving and our teachers',
      p: 'Sydney is on daylight saving from Sunday 4 October 2026 to Sunday 4 April 2027, while India has no clock change, so the difference shifts between 5 hours 30 minutes and 4 hours 30 minutes. We always quote Sydney time.'
    }
  },
  fees: {
    h2: 'Epping lesson fees',
    intro: 'One set of prices, the same for every course.',
    first: 'A full first lesson at no cost, with a recommended course and time afterwards.',
    group: 'About eight lessons a month in a group of five to ten learners at the same level.',
    private: 'About eight one-to-one lessons a month at a fixed time.',
    closer: 'Every invoice outside India is raised in US dollars, which keeps an Epping household on exactly the price a family in Penrith or Manly would see. Nothing is charged before the trial has settled a course and time; breaks, missed lessons and format changes are covered on the pricing page.'
  },
  reviewsH2: 'Google reviews from families',
  book: {
    h2: 'Tell us an age and an interest',
    intro: 'That is all a teacher needs to plan a first lesson. A seven-year-old might make a Scratch game with an AI helper; a teenager or adult might build the station filter and then make it refuse to guess.',
    success: 'Thank you. We will be in touch shortly about an Epping class.'
  },
  faq: {
    h2: 'Questions from Epping families',
    intro: 'What Epping learners and parents tend to ask first.',
    items: [
      {
        q: 'How many people live in Epping?',
        a: 'The 2021 Census QuickStats for the suburb and locality of Epping counted 29,551 people, with a median age of 36 and 8,399 families.'
      },
      {
        q: 'Which council is Epping in?',
        a: 'On our check against the statistics bureau\'s 2021 boundaries, the suburb of Epping lies within the City of Parramatta local government area.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Vibe coding means describing what you want and letting an AI assistant write much of the code. We teach it alongside reading and testing that code, so the learner stays in charge of the result.'
      },
      {
        q: 'What is an AI agent?',
        a: 'An AI agent is a program that uses a language model to plan steps and call tools, such as reading a file or filtering data, with less step-by-step direction from a person.'
      },
      {
        q: 'What does the Epping station project show?',
        a: 'An agent that keeps only rows labelled "Train" names Town Hall as the busiest station in August 2026 and leaves out Central, Chatswood, Epping, Martin Place and Sydenham, which the file labels "Metro Shared".'
      },
      {
        q: 'Are AI tools safe for younger learners?',
        a: 'We follow each provider\'s age rules. Younger children use age-appropriate tools with a teacher present, and tools with adult-only terms are reserved for learners old enough to accept them.'
      },
      {
        q: 'Will the lessons help with school assignments?',
        a: 'Teachers explain concepts that NSW students meet at school, but they never complete assessed work; anything submitted must be the student\'s own.'
      },
      {
        q: 'Is there an Epping classroom?',
        a: 'No. We teach only online and have no premises in Australia. A laptop or desktop with a microphone and a dependable connection is all that is needed, and our phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Epping coding lessons cost?',
        a: 'The first lesson is free. A group place is USD 100 a month for two live lessons a week, roughly eight a month, with five to ten learners, and one-to-one is USD 150 a month on the same pattern. You pay only after the course and time are agreed.',
        boiler: true
      },
      {
        q: 'How many learners are in each group?',
        a: 'Five to ten, grouped by level and pace rather than age. If no group suits the times needed, we offer one-to-one lessons instead.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Related pages',
    h2: 'More for Epping learners',
    html: 'The council area page is <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-parramatta-sydney">coding and AI classes in Parramatta</a>, and the city guide is <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. Anyone building with AI should read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a>. Learners elsewhere in the state can start from <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">our New South Wales guide</a>.',
    waLabel: 'WhatsApp us'
  },
  footerHeading: 'Epping and nearby areas',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/best-coding-and-ai-classes-in-parramatta-sydney', label: 'Parramatta' },
    { href: '/vibe-coding-and-ai-agents-classes-in-ryde-sydney', label: 'Ryde' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-epsy .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.4vw, 2rem); }
.cg-root.cg-epsy .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-epsy .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent); padding: 0.6rem 1rem; }
.cg-root.cg-epsy .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-epsy .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.014em; }
.cg-root.cg-epsy .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.9rem); }
.cg-root.cg-epsy .cg-table caption { font-weight: 700; text-align: left; text-transform: none; }
.cg-root.cg-epsy .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-epsy .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-epsy .cg-callout { border-left-width: 5px; border-left-style: solid; }
`,
  dossier: {
    curriculumAuthority: 'Epping, ABS Census 2021 QuickStats, Epping (NSW) suburb and locality SAL11431 (read 10 October 2026): 29,551 people; median age 36 (NSW 39); 8,399 families; 11,515 private dwellings; average 2.8 people per household; flats or apartments 47.4% (4,904), separate houses 42.6% (4,398), semi-detached 9.8% (1,012); couple families with children 52.9% (4,443); professionals 44.4% (6,396); bachelor degree or higher 55.9%; aged 10 to 14 6.9% (2,036). ABS ASGS 2021 SAL area 6.8382 square kilometres; our grid estimate places 100% of the suburb in the City of Parramatta LGA. NSW Department of Education 2027 calendar, Eastern division: students Term 1 from Wednesday 3 February 2027; summer holidays Friday 18 December 2026 to Wednesday 27 January 2027.',
    localProject: 'Unexpected category values in an agent allow-list filter. Transport for NSW Train Station Entries and Exits (CC BY), August 2026 entry rows: Train 289, Light rail 65, Metro 16, Metro Shared 5 (Central, Chatswood, Epping, Martin Place, Sydenham); all types present from October 2024. Train-only ranking: Town Hall 1,832,430, Wynyard 1,147,663, Parramatta 1,058,394. With Metro Shared: Central 2,358,027 first, Epping 435,308 14th. Metro Shared 19.07% of numeric Train plus Metro Shared entries (our arithmetic). 16 entry values "Less than 50" excluded. Epping October 2024 370,793. NSW schools master dataset rows with Town_suburb Epping: 5 (Epping Public School 1901, Epping West Public School 1927, Epping Heights Public School 1956, Karonga School 1974, Ngarala Public School 2023), all LGA Parramatta.',
    requiredMentions: ['29,551', '8,399', '11,515', '4,904', '4,443', 'Epping West Public School', 'Epping Heights Public School', '435,308', '2,358,027'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Epping (NSW) suburb and locality (SAL11431): people, median age, families, dwellings, dwelling structure, family composition, occupation, education, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL11431'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits: monthly station usage from Opal data, with Station_Type values (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) suburbs and localities and local government areas: boundaries used for the council check.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'NSW Department of Education, 2027 term dates and school holidays, Eastern division.',
        url: 'https://education.nsw.gov.au/schooling/calendars/2027'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That "Metro Shared" is a new or recently added category: it appears from October 2024, the first month in the file.',
      'Any explanation of what "Metro Shared" means operationally: the file does not define it, so the page only reports the label.',
      'Treating Opal entries as people: entries are gate taps.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective columns of the master dataset: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, City of Parramatta Council or the ABS.'
    ]
  }
};
