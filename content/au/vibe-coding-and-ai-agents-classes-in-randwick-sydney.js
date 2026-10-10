'use strict';
// Randwick, Sydney (cg- district page, Australia cluster Phase 8, row 232). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page (ABS LGA16550) under Sydney and New South Wales.
// Spine: an AI agent gets a tool that looks up monthly light rail tap-ons for nine stops from Royal Randwick to
// Juniors Kingsford. People type stop names and months loosely. Without argument validation the tool always returns a
// number; with normalising validation it answers or refuses with a reason.
// Data: Transport for NSW station usage file (light rail Entry rows, October 2024 to August 2026). 20 scripted
// requests (scratchpad au/b4/rdwk2.py): 14 answerable, 6 not. Naive tool: 9 right, 5 wrong numbers, 6 invented
// answers. Validating tool: 14 right, 6 refused with the correct reason, 0 wrong. Our own test; flattering by design.
// Census: ABS QuickStats Randwick LGA16550.
// Lesson family: tool argument validation for an agent; 0 location-page hits, unclaimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'RANDWICK',
    label: 'Randwick, Sydney',
    blurb: 'Vibe coding and AI agents for Randwick, with a project on an agent tool that checks its inputs before it answers.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-randwick-sydney',
  code: 'rdwk',
  accent: '#3C4080',
  accentRationale: 'Randwick: a muted harbour indigo (hue 236), chosen by hand at least 10 RGB units from all 1,272 accents in content, the shared stylesheets and the claims log, 9.0:1 on white and 7.4:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Randwick',
    eyebrow: 'Randwick City Council area, Sydney, New South Wales',
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
  routeLabel: 'Randwick, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Randwick, Sydney',
  description: 'Live online vibe coding and AI agent classes for Randwick children, teens and adults: plan, prompt, test and fix real projects with a teacher, in small groups.',
  ogDescription: 'Randwick AI agent classes, with a project on a light rail lookup tool: given 20 loosely typed requests, an unchecked tool invents 6 answers and a validated one invents none.',
  twitterDescription: 'Randwick vibe coding and AI agents classes, live online with a teacher, first class free.',
  ogImageCourse: 'teens-ai-tools-mastery-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Randwick',
    description: 'Level-matched online lessons in AI-assisted coding and building AI agents for children, teenagers and adults in the Randwick council area, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Randwick',
  capsuleQ: 'Where can Randwick learners find the best vibe coding and AI agents classes?',
  capsule: 'In small live online groups where a teacher builds agents with the class and makes every tool prove its inputs are sensible before it answers. Randwick suits that kind of careful work: the 2021 Census counted 134,252 residents, and 49,178 adults, 43.3%, held a bachelor degree or higher.',
  lead: 'An AI agent does not look things up itself; it calls tools that programmers write, passing in whatever words the conversation produced. "Royal Randwick", "UNSW", "Aug 2026", "last month": a careless tool turns every one of those into a number. A careful tool checks first, and says plainly when it cannot answer.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Randwick.',
  picks: {
    eyebrow: 'Course picks for Randwick',
    h2: 'Courses for building agents that check before they answer',
    intro: 'Each course here practises the validation habit from the light rail tool. The free trial sets the level, and payment waits until a course and time are agreed.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'AI drafts the Python; the learner adds input checks and tests before anything ships.'
      },
      {
        course: 'teens-ai-tools-mastery-course',
        band: 'Ages 13 to 18',
        note: 'How assistants call tools, what they pass in, and how to spot an invented answer.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Language models, function calling and evaluating agents on scripted requests.'
      },
      {
        course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals',
        band: 'Professionals, one to one',
        note: 'Workplace agents with validated inputs in Copilot Studio, taught privately.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Randwick in the Census',
      h2: 'A council of apartments and graduates',
      intro: 'Figures for the Randwick local government area (ABS code LGA16550) from the 2021 Census QuickStats, next to the NSW and Australian figures.',
      body: [
        {
          kind: 'table',
          caption: 'Randwick, 2021 Census headline counts',
          head: ['Headline', 'Randwick'],
          rows: [
            ['Residents', '134,252'],
            ['Median age', '37'],
            ['Families', '33,700'],
            ['Private dwellings', '59,773'],
            ['Average people per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Randwick compared with NSW and Australia',
          head: ['Measure', 'Randwick', 'NSW', 'Australia'],
          rows: [
            ['Homes that are flats or apartments', '55.5% (28,527)', '21.7%', '14.2%'],
            ['Homes that are separate houses', '26.8% (13,790)', '65.6%', '72.3%'],
            ['Adults with a bachelor degree or higher', '43.3% (49,178)', '27.8%', '26.3%'],
            ['Workers employed as professionals', '37.1% (25,647)', '25.8%', '24.0%'],
            ['Workers who cycled to work', '1.0%', '0.4%', '0.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Census day at home', p: 'The Census fell in the August 2021 lockdown; 31,221 employed residents, 45.2%, worked from home.' },
            { h3: 'Fewer drivers', p: '18,700 workers, 27.1%, drove to work that day, against 43.1% statewide.' },
            { h3: 'Walking', p: '4.1% of Randwick workers walked all the way to work, above the state share of 2.5%.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau perturbs each Census cell slightly for privacy, so we quote these figures as published and do not add any of them together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A light rail tool that refuses to guess',
      intro: 'Students give an agent one tool: look up the tap-on entries at a light rail stop for a month. The data is the Transport for NSW usage file for nine stops on the L2 and L3 lines, from Royal Randwick and Randwick to Kingsford and Juniors Kingsford.',
      body: [
        {
          kind: 'table',
          caption: 'Tap-on entries, August 2026 (Transport for NSW)',
          head: ['Stop', 'Tap-on entries'],
          rows: [
            ['UNSW Anzac Parade', '119,668'],
            ['Randwick', '99,155'],
            ['UNSW High Street', '94,948'],
            ['Juniors Kingsford', '74,860'],
            ['Kingsford', '45,786'],
            ['Kensington', '40,528'],
            ['ES Marks', '27,198'],
            ['Royal Randwick', '25,878'],
            ['Wansey Road', '23,021']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Twenty loosely typed requests, two versions of the tool (our test)',
          head: ['Outcome', 'Tool with no checks', 'Tool that validates'],
          rows: [
            ['Answerable requests answered correctly (of 14)', '9', '14'],
            ['Answerable requests given the wrong stop or month', '5', '0'],
            ['Unanswerable requests given a number anyway (of 6)', '6', '0'],
            ['Unanswerable requests refused with a reason', '0', '6']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The wrong stop',
              p: 'Asked for "Royal Randwick", the unchecked tool matched the first stop containing "Randwick" and returned Randwick\'s 99,155 instead of 25,878.'
            },
            {
              h3: 'A month that is not there',
              p: 'Asked for September 2026, beyond the last published month, it quietly returned August\'s figure. The validator says the month is outside the published range.'
            },
            {
              h3: 'Two stops, one word',
              p: '"UNSW" could mean UNSW High Street or UNSW Anzac Parade. The validator names both and asks; the unchecked tool picked one.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Check, tidy, then answer',
          p: 'The validator is short: tidy the words (case, spacing, "Rd" to "Road", a trailing "light rail"), accept an exact or unique match, read the month in a few common forms, and otherwise return a clear message the agent can pass back to the person.'
        },
        {
          kind: 'p',
          text: 'We wrote both the 20 requests and the validator, so a perfect score on them proves little; real conversations will find cases we did not think of. The counts are Transport for NSW tap-ons, which miss untapped trips. We name the stops only, not the council area each lies in.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'How students build it',
      h2: 'Let the AI draft it, then make it strict',
      intro: 'In a vibe coding lesson the AI writes the first version of the tool. The learner\'s job is to break it with awkward requests and then add the checks.',
      body: [
        {
          kind: 'table',
          caption: 'The rules the validator follows',
          head: ['Input', 'Accepted', 'Refused, with this message'],
          rows: [
            [
              'Stop name',
              'Exact or unique match after tidying',
              '"No light rail stop by that name" or "ambiguous, choose one of..."'
            ],
            ['Month', '2026-08, 2026-8, 08/2026, Aug 2026, March 2026', '"Say the month as YYYY-MM"'],
            ['Month range', 'October 2024 to August 2026', '"Outside the published range"']
          ]
        },
        {
          kind: 'p',
          text: 'The agent itself never touches the data file. It can only ask the tool, and the tool decides what counts as a sensible question. That separation is what makes an agent safe to give real data to.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Build a Scratch quiz that only accepts real answers and politely asks again when someone types nonsense.' },
            { h3: 'Teenagers', p: 'Write the tool, let an AI write tricky requests for it, and keep a table of what passed and what was refused.' },
            { h3: 'Adults', p: 'Wrap a work spreadsheet in a validated lookup tool before letting any assistant query it.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and terms',
      h2: 'A school at La Perouse since 1868',
      intro: 'From the NSW government schools file and the 2027 calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: '16 government schools', p: 'The NSW schools file lists 16 government schools in the council area, 11 primary and 3 secondary among them.' },
            {
              h3: 'The oldest',
              p: 'La Perouse Public School records its first teacher in 1868, then Coogee Public School in 1876 and Randwick Public School in 1883.'
            },
            { h3: 'Term 1, 2027', p: 'Eastern division schools start on Wednesday 3 February 2027; Term 1 closes on Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council area figures',
          p: 'The Census numbers on this page are for the whole Randwick council area, from Clovelly and Kensington south to La Perouse, not for the suburb of Randwick alone.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a quiz that asks again to agents that check',
    intro: 'The age bands are a guide; the free trial shows where each learner should start.',
    cols: [
      {
        band: 'Ages 8 to 12',
        h3: 'Vibe coding for kids',
        p: 'Scratch games planned by the child, built with AI help and tested on silly inputs.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 15',
        h3: 'Read, then trust',
        p: 'Python that an AI drafted, read line by line, fixed and extended.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Agents with tools',
        p: 'Assistants that call functions, with every input checked and tested.',
        courses: ['teens-ai-tools-mastery-course', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Agents for work',
        p: 'Tool design, validation and evaluation for workplace assistants.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If the agent understands language, why do Randwick students need to write checks?',
    intro: 'Because the agent understands the words, but the tool is what touches the data, and tools do exactly what they are told.',
    p1: 'A language model will happily pass "UNSW" or "last month" straight to a tool. If the tool guesses, the agent reports the guess with full confidence, and nobody in the conversation can tell that the number came from the wrong stop or the wrong month.',
    p2: 'Learners who have watched an unchecked tool invent six answers out of twenty write validation without being asked. It is the same skill that keeps booking systems, banking apps and school portals from acting on nonsense.',
    closer: 'The Randwick student who makes a tool say "I cannot answer that" has learned the most useful sentence in agent building.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Clovelly to La Perouse, classes arrive online',
    intro: 'Lessons are live online, so learners anywhere in the council area join the same way.',
    cells: [
      { h3: 'Join from home', p: 'The learner logs in from a desk at home and spends the whole lesson building.' },
      { h3: 'Built around NSW terms', p: 'Lessons track NSW syllabus stages and pause in the state school holidays.' },
      { h3: 'A genuine trial', p: 'The free first class is a full lesson, finishing with a course, level and time suggestion.' },
      { h3: 'Small groups', p: 'Five to ten learners per group, matched by level and pace, Randwick learners alongside others.' },
      { h3: 'Two a week', p: 'Two fixed lessons weekly, about eight a month, with breaks agreed in advance.' },
      {
        h3: 'Teachers in India',
        p: 'A 4pm Randwick lesson during daylight saving begins at 10:30am in India; in Sydney standard time it begins at 11:30am there.'
      }
    ],
    spec: {
      title: 'Daylight saving dates',
      p: 'Sydney clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027, while India keeps one time all year. Lesson times are always set in Sydney time.'
    }
  },
  fees: {
    h2: 'Fees for Randwick learners',
    intro: 'Three amounts, all stated up front.',
    first: 'The first class is free and closes with an honest course recommendation.',
    group: 'A month of group lessons, eight as a rule, with five to ten learners at a similar level.',
    private: 'Around eight lessons a month with a teacher to themselves.',
    closer: 'Families outside India are billed in US dollars, so every Randwick family pays the same. Billing starts only after the trial, when course and time are agreed; the pricing page explains holidays, absences and changing format.'
  },
  reviewsH2: 'Reviews from our families and learners on Google',
  book: {
    h2: 'Book a first Randwick class',
    intro: 'Tell us the learner\'s age and what they like building. An eleven-year-old might start with a Scratch quiz that checks answers; an adult might start with the light rail tool.',
    success: 'Thank you. Our team will contact you shortly about a Randwick class.'
  },
  faq: {
    h2: 'Randwick vibe coding and AI agents questions',
    intro: 'Questions Randwick families and adult learners ask us.',
    items: [
      {
        q: 'How many people live in the Randwick council area?',
        a: 'The 2021 Census QuickStats for the Randwick local government area record 134,252 residents, 33,700 families and 59,773 private dwellings.'
      },
      {
        q: 'What is tool argument validation?',
        a: 'Checking the values an AI agent passes to a tool before the tool acts on them, for example confirming that a stop name exists and a month is in the data, and returning a clear message when they are not.'
      },
      {
        q: 'What did the Randwick light rail tool test show?',
        a: 'On 20 requests we wrote, the unchecked tool answered 9 correctly, gave 5 wrong figures and invented answers for all 6 requests that had none. The validating tool answered all 14 answerable requests and refused the other 6 with a reason.'
      },
      {
        q: 'Does a perfect score mean the tool is finished?',
        a: 'No. We wrote both the requests and the checks, so the test suits the tool. Students then collect real phrasings from classmates and keep adding cases.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Describing what you want and letting an AI draft the code, then reading, testing and fixing it yourself. We teach the reading and testing as firmly as the prompting.'
      },
      { q: 'Do you teach Copilot Studio agents in groups?', a: 'No, Copilot Studio is taught one to one only. Group classes build agents in Python.' },
      {
        q: 'Do you have a centre in Randwick?',
        a: 'No. All lessons are live online, we have no premises in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'How much are vibe coding classes for Randwick learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How large is each group?',
        a: 'Five to ten learners, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner\'s time.',
        boiler: true
      },
      { q: 'Can university students and adults join?', a: 'Yes, in adult groups or one to one, often building an agent for study or a work task.' }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Randwick learners',
    html: 'Just north, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-waverley-sydney">Waverley</a> has its own page, and the <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-inner-west-sydney">Inner West</a> page is across the city. The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales guide</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Randwick and Sydney',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-waverley-sydney', label: 'Waverley' },
    { href: '/best-coding-and-ai-classes-in-inner-west-sydney', label: 'Inner West' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-rdwk .cg-hero-grid { align-items: end; gap: clamp(1.15rem, 3.4vw, 2.7rem); }
.cg-root.cg-rdwk .cg-hero h1 { font-weight: 690; letter-spacing: -0.017em; line-height: 1.08; }
.cg-root.cg-rdwk .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.4rem 0 0.4rem 1.1rem; }
.cg-root.cg-rdwk .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-rdwk .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.01em; }
.cg-root.cg-rdwk .cg-grid-3 { gap: clamp(0.85rem, 2.1vw, 1.7rem); }
.cg-root.cg-rdwk .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-rdwk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rdwk .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-rdwk .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Randwick, ABS Census 2021 QuickStats, Randwick local government area LGA16550 (read 10 October 2026): 134,252 people; median age 37; 33,700 families; 59,773 private dwellings; 2.4 people per household; flats or apartments 55.5% (28,527); separate houses 26.8% (13,790); bachelor degree or higher 43.3% (49,178); professionals 37.1% (25,647); worked at home 45.2% (31,221, lockdown Census day); drove to work 27.1% (18,700); walked only 4.1%; bicycle 1.0%. Transport for NSW station usage file, light rail Entry rows, August 2026: UNSW Anzac Parade 119,668; Randwick 99,155; UNSW High Street 94,948; Juniors Kingsford 74,860; Kingsford 45,786; Kensington 40,528; ES Marks 27,198; Royal Randwick 25,878; Wansey Road 23,021; published months October 2024 to August 2026. NSW government schools file (Date_extracted 2026-10-02): 16 schools in the LGA (11 primary, 3 secondary); La Perouse Public School 1868, Coogee Public School 1876, Randwick Public School 1883. NSW 2027 Eastern division Term 1: 3 February to 9 April. Sydney daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Tool argument validation for an agent: lookup(stop, month) over nine light rail stops. 20 scripted requests, 14 answerable, 6 not (ambiguous UNSW, 2026-09 and 2024-09 out of range, month 13, Coogee not a stop, "last month"). Naive tool (substring match, default month): 9 right, 5 wrong stop or month, 6 invented answers. Validating tool (tidy words, abbreviations, exact or unique match, four month formats, range check): 14 right, 0 wrong, 6 refused with reasons. Requests and validator written by us, so the score flatters it. Script: scratchpad au/b4/rdwk2.py.',
    requiredMentions: ['134,252', '33,700', '59,773', '28,527', '13,790', '49,178', '25,647', '31,221', '99,155', '119,668'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Randwick local government area (LGA16550).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA16550'
      },
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
      'That the validating tool would score 14 of 14 on real conversations: not claimed; we wrote the requests and the checks.',
      'Any total of entries across the nine stops: not computed.',
      'Which council area each stop lies in: not checked or claimed; stops are named only.',
      'Passenger numbers including untapped trips: not available; the file counts tap-on entries only.',
      'Names of schools for specific purposes: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Randwick City Council, Transport for NSW, UNSW, the NSW Department of Education or the ABS.'
    ]
  }
};
