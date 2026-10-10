'use strict';
// Blacktown, Sydney (cg- district page, Australia cluster Phase 8, row 204). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: when an agent answers "how many schools match any of these conditions?" by adding up three counts
// from a tool, how wrong is it, and what does inclusion-exclusion fix?
// Data: NSW Department of Education master dataset (data.nsw.gov.au, CC BY), CSV read 10 October 2026,
// Date_extracted 2026-10-02. Rows with LGA "Blacktown": 87 (Primary 60, Secondary 19, Schools for Specific
// Purposes 8). Filters (our choice): A first teacher before 1950 (12 schools); B Preschool_ind = Y (13);
// C within 5 km of Blacktown South Public School by haversine on the file's coordinates (29).
// Our counts (scratchpad au/b1/bktn_ie2.py): A and B 3; A and C 3; B and C 5; all three 2; A + B + C = 54;
// true union 45; subtracting the pairs but forgetting the triple 43; 54 - 11 + 2 = 45.
// Lesson family: inclusion-exclusion in an agent that adds counts from overlapping filters; screened 0 hits.
// Place facts: ABS Census 2021 QuickStats, Blacktown LGA (LGA10750); earliest first teachers Colyton Public
// School 1861, Eastern Creek Public School 1866, Vineyard Public School 1872 (master dataset); Transport for
// NSW monthly station usage (CC BY): Blacktown Station, Train, Entry, August 2026, 371,550.
// Excluded: income, rent, mortgage, ancestry, birthplace, language, religion, health; enrolment, ICSEA,
// Indigenous, LBOTE and support-class columns of the master dataset.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BLACKTOWN',
    label: 'Blacktown, Sydney',
    blurb: 'Vibe coding and AI agents for Blacktown, with a project on why an agent that adds up overlapping counts gets the wrong answer.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-blacktown-sydney',
  code: 'bktn',
  accent: '#4C4472',
  accentRationale: 'Blacktown: a dusk slate blue (hue 249), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 8.8:1 on white and 7.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Blacktown',
    eyebrow: 'Blacktown, Sydney, New South Wales',
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
  routeLabel: 'Blacktown, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Blacktown, Sydney',
  description: 'Live online vibe coding, AI agents and Python classes for Blacktown teenagers and adults, with real teachers, in small groups or one to one. First lesson free.',
  ogDescription: 'AI agents classes for Blacktown, with a project that shows why an agent adding up three counts from 87 schools gets 54 when the honest answer is 45.',
  twitterDescription: 'Blacktown vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Blacktown',
    description: 'Level-matched online vibe coding, AI agents, Python and counting logic for teenagers and adults in the Blacktown council area, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Blacktown',
  capsuleQ: 'What are the best vibe coding and AI agents classes for Blacktown learners?',
  capsule: 'Live online classes where a teacher shows Blacktown teenagers and adults how to direct an AI to write code, then check every line it produces, and how to build small agents that use tools without fooling themselves. The 2021 Census counted 396,776 people in the Blacktown council area, with a median age of 34. Lessons run one to one or in a small group at one level, and the first one is free.',
  lead: 'Ask an AI agent how many Blacktown public schools either opened before 1950, or run a preschool, or sit within five kilometres of Blacktown South Public School. A careless agent calls its counting tool three times, gets 12, 13 and 29, adds them, and announces 54. The real figure is 45. Nine schools were counted twice or three times because they meet more than one condition. A slightly cleverer agent subtracts the overlaps and lands on 43, which is still wrong, because two schools meet all three conditions and were removed once too often. Our Blacktown project uses the state\'s own schools file to make that mistake visible, then fixes it with a rule called inclusion-exclusion.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Blacktown.',
  picks: {
    eyebrow: 'Course picks for Blacktown',
    h2: 'Courses for building agents that count correctly',
    intro: 'Each one connects to the counting project on this page. The free trial lesson decides the fit, and nobody asks for card details.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Describe a program to an AI, then read, test and correct the Python it writes.'
      },
      {
        course: 'teens-ai-tools-mastery-course',
        band: 'Ages 13 to 18',
        note: 'How AI tools reason, where they slip, and how to check their answers against data.'
      },
      {
        course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
        band: 'University and adult',
        note: 'Whole applications built with AI help, with the logic and data structures to keep them honest.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults and professionals',
        note: 'Coding agents used with care: clear tasks, real tests and reviewed results.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Blacktown in the Census',
      h2: 'A large, family-filled council area of separate houses',
      intro: 'Numbers from the statistics bureau\'s 2021 QuickStats for the Blacktown local government area, set against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Blacktown council area at the 2021 Census',
          head: ['Item', 'Blacktown'],
          rows: [
            ['People', '396,776'],
            ['Families', '104,171'],
            ['Private dwellings', '133,887'],
            ['People per household, on average', '3.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How Blacktown compares with NSW and Australia',
          head: ['Measure', 'Blacktown', 'New South Wales', 'Australia'],
          rows: [
            ['Median age', '34', '39', '38'],
            ['Separate houses among occupied homes', '81.1% (98,390)', '65.6%', '72.3%'],
            ['Flats or apartments among occupied homes', '6.7% (8,158)', '21.7%', '14.2%'],
            ['Residents aged 10 to 14', '7.3% (28,829)', '6.2%', '6.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Households of three',
              p: 'An average of 3.1 people per household is well above the national pattern, and four in five occupied homes are separate houses.'
            },
            {
              h3: 'Plenty of school-age children',
              p: 'The Census found 31,388 children aged 5 to 9 and 28,829 aged 10 to 14 in the council area, each a larger share than across the state.'
            },
            {
              h3: 'Degrees and jobs',
              p: '89,682 residents aged 15 and over held a bachelor degree or higher, 29.2% against 27.8% statewide, and 41,583 worked as professionals.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Because the bureau adds tiny random adjustments to every cell to protect privacy, its rows rarely add to the totals it prints. That is why these tables show published figures only and never a sum we worked out ourselves.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'An agent adds three counts and gets 54. The answer is 45.',
      intro: 'We gave a simple agent a counting tool over the NSW Department of Education\'s list of the 87 government schools in the Blacktown council area, and asked it about three overlapping conditions.',
      body: [
        {
          kind: 'table',
          caption: 'The three conditions and how often each is true (our counts from the department\'s file)',
          head: ['Condition', 'Schools'],
          rows: [
            ['A: first teacher recorded before 1950', '12'],
            ['B: has a preschool', '13'],
            ['C: within 5 km of Blacktown South Public School', '29'],
            ['A and B together', '3'],
            ['A and C together', '3'],
            ['B and C together', '5'],
            ['All three at once', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Three ways an agent might answer "how many meet at least one?"',
          head: ['Agent strategy', 'Answer', 'Right?'],
          rows: [
            ['Add the three tool counts', '54', 'No, 9 too many'],
            ['Add, then subtract each overlap of two', '43', 'No, 2 too few'],
            ['Add, subtract the pairs, add back the triple', '45', 'Yes'],
            ['Ask the tool for school codes and take the set union', '45', 'Yes']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why 54 is wrong',
              p: 'A school that opened before 1950 and runs a preschool is counted once by A and again by B. Simple addition counts every overlap more than once.'
            },
            {
              h3: 'Why 43 is wrong',
              p: 'Two schools meet all three conditions. They were added three times, then removed three times by the pair corrections, so they vanish completely until the triple is added back.'
            },
            {
              h3: 'The rule',
              p: 'For three sets: add the singles, subtract the pairs, add the triple. Here 12 + 13 + 29 - 3 - 3 - 5 + 2 = 45, which matches the union of the actual school codes.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Counts or lists?',
          p: 'An agent can be told the rule, or it can ask for the list of matching school codes and combine the lists itself. The second way needs more data from the tool but no arithmetic cleverness, which is why many careful agent designs prefer returning identifiers over returning bare numbers when the results will be combined.'
        },
        {
          kind: 'p',
          text: 'The filters, the five-kilometre circle and every count above come from our own code run on the department\'s published file, using straight-line distances between its coordinates. The conditions were chosen for teaching and say nothing about any school\'s quality, size or results.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Agents that combine results',
      h2: 'Checks for any agent that merges answers from a tool',
      intro: 'The Blacktown example is small, but the same slip appears whenever an AI agent adds up numbers that may describe the same things.',
      body: [
        {
          kind: 'table',
          caption: 'Questions to ask before an agent combines tool results',
          head: ['Question', 'What goes wrong if it is skipped', 'Fix'],
          rows: [
            ['Can one item satisfy two conditions?', 'Double counting, as in the 54', 'Inclusion-exclusion or set union'],
            ['Is the tool returning counts or identifiers?', 'Overlaps are invisible in bare counts', 'Ask for codes, then combine'],
            ['Are there four or more conditions?', 'Hand corrections get tangled quickly', 'Let code apply the general rule'],
            [
              'Does the answer pass a sanity check?',
              'A double counted total still looks plausible, so a glance will not catch it',
              'Compare with a direct union'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'With four conditions the rule needs fifteen terms instead of seven, and with ten conditions it needs over a thousand, which is why learners write the union in code rather than reciting the formula. Seeing both on 87 real schools makes the trade clear.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Write the three filters in Python, count each one, then build the true answer two ways and see them agree.' },
            { h3: 'University students', p: 'Generalise to any number of sets with itertools.combinations and compare the cost with a set union.' },
            { h3: 'Adults', p: 'Design tools for workplace agents that return identifiers, so reports built from several queries never double count.' }
          ]
        },
        {
          kind: 'p',
          text: 'Neither the NSW Department of Education nor Blacktown City Council, Transport for NSW or the Australian Bureau of Statistics is connected with us. Their files are open; the filters, overlaps and agent experiments are ours.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Blacktown',
      h2: 'Schools from 1861 and a busy western station',
      intro: 'A few more facts from the same open files and the state calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'The oldest dates',
              p: 'Colyton Public School records a first teacher in 1861, Eastern Creek Public School in 1866 and Vineyard Public School in 1872, the earliest three in the council area.'
            },
            {
              h3: 'Blacktown Station',
              p: 'Transport for NSW logged 371,550 Opal entries at Blacktown Station in August 2026, putting it twentieth among all stations in the monthly file.'
            },
            {
              h3: 'The 2027 school year',
              p: 'NSW Eastern division students start Term 1 on Wednesday 3 February 2027; Term 2 runs from Thursday 29 April to Friday 2 July.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Try a fourth condition',
          p: 'Add a fourth filter, such as secondary schools only, and the overlaps multiply. Writing a function that applies inclusion-exclusion to any list of sets, then checking it against Python\'s set union, is a satisfying next step that also shows why agents should not do this arithmetic in their heads.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From describing a game to an AI to designing careful agents',
    intro: 'Treat the ages as a rough guide; the trial lesson finds the right starting rung.',
    cols: [
      {
        band: 'Ages 8 to 12',
        h3: 'Vibe coding for kids',
        p: 'Games in Scratch planned by the learner, built with AI help, and tested by hand.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 15',
        h3: 'Reading the code',
        p: 'Small Python programs written with an AI, then read, changed and explained line by line.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Agents with tools',
        p: 'Agents that call functions over real data and check their own combined answers.',
        courses: ['teens-ai-tools-mastery-course', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Agents at work',
        p: 'Coding agents and workplace agents with good tool design, tests and review.',
        courses: [
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
          'vibe-coding-for-college-fullstack-ai-dsa-career-course'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent can count for you, why should a Blacktown learner learn the rule?',
    intro: 'Because the agent counts quickly and confidently whether or not it is counting the same thing twice.',
    p1: 'Modern assistants split questions into steps and call tools for each step, which is exactly where the 54 came from: three correct sub-answers combined incorrectly. Nothing in the final reply warns that overlaps were ignored. The number simply looks plausible, and plausible numbers are the hardest errors to notice.',
    p2: 'A learner who has worked through the Blacktown schools knows to ask whether the pieces of an answer can describe the same things, whether the tool should return lists rather than counts, and whether the combined figure can even be possible. Those are the questions that turn vibe coding from hopeful prompting into reliable software.',
    closer: 'In 2026 agents will happily add up anything, and the Blacktown learner who knows when addition double counts is the one who catches it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Anywhere in the council area, the same live lesson',
    intro: 'The 87 schools in our project cover a council area home to almost four hundred thousand people, and an online class reaches every corner of it equally.',
    cells: [
      { h3: 'Home, not a car park', p: 'Lessons happen at a desk at home, so evenings are not spent driving to a centre and waiting outside.' },
      {
        h3: 'Matched to NSW stages',
        p: 'Plans line up with the NSW stages and pause for state school holidays, and senior students can link projects to their computing subjects.'
      },
      {
        h3: 'An honest trial',
        p: 'The free first lesson teaches something real. Afterwards the teacher recommends a course, a level and a time; nothing is charged at that point.'
      },
      { h3: 'Classes of five to ten', p: 'Learners are grouped by skill, not by age or suburb, with classmates from Blacktown and from other places.' },
      { h3: 'A steady rhythm', p: 'Two lessons a week at the same hour make roughly eight a month, with breaks for holidays and exam weeks agreed ahead.' },
      {
        h3: 'Teachers in India',
        p: 'A 7pm Blacktown lesson during daylight saving begins at 1:30pm India time; in the Sydney winter it begins at 2:30pm there.'
      }
    ],
    spec: {
      title: 'Daylight saving and India time',
      p: 'Clocks in Sydney go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027. India does not change its clocks, so the gap to our teachers is 5 hours 30 minutes in summer and 4 hours 30 minutes in winter, and lesson times are always given in Sydney time.'
    }
  },
  fees: {
    h2: 'Blacktown class fees',
    intro: 'The whole price list fits in three lines.',
    first: 'A complete first lesson at no cost, with a suggested course and time at the end.',
    group: 'A month of group lessons, typically eight, with five to ten learners at one level.',
    private: 'The same eight-or-so lessons a month, taught one to one.',
    closer: 'All invoices outside India are in US dollars, so every Blacktown family pays the same and there is no separate local tariff. Billing begins once the trial has settled a course and slot, and the pricing page explains holidays, missed lessons and switching formats.'
  },
  reviewsH2: 'What families have written on Google',
  book: {
    h2: 'Book a first Blacktown lesson',
    intro: 'Give us an age and one thing the learner enjoys. A Year 8 student might start by asking an AI to build a quiz; an adult might go straight to the agent counting project.',
    success: 'Thank you. A member of our team will contact you about a Blacktown class shortly.'
  },
  faq: {
    h2: 'Blacktown vibe coding and AI agents questions',
    intro: 'The questions Blacktown families and adult learners raise most often.',
    items: [
      {
        q: 'How many people live in the Blacktown council area?',
        a: '396,776 at the 2021 Census, according to the QuickStats for the Blacktown local government area, with a median age of 34.'
      },
      {
        q: 'What is inclusion-exclusion?',
        a: 'It is the counting rule for overlapping groups: to count everything in at least one group, add the group sizes, subtract every overlap of two, add back every overlap of three, and so on, alternating signs.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Vibe coding means describing what a program should do in plain language and letting an AI write the code. We teach it together with reading, testing and correcting that code, so the learner stays in charge of the result.'
      },
      {
        q: 'What is the Blacktown agent project?',
        a: 'Learners give an agent a counting tool over the 87 Blacktown government schools in the NSW schools file and ask how many meet at least one of three conditions. Adding the tool counts gives 54; the correct answer, found by inclusion-exclusion or by a set union, is 45.'
      },
      {
        q: 'Does the project say anything about how good a school is?',
        a: 'No. The conditions are about opening dates, preschools and distance, chosen only to create overlaps, and the page makes no comment on results, enrolment or quality.'
      },
      {
        q: 'Who are these classes for?',
        a: 'Mainly teenagers and adults, from Year 8 students meeting AI tools for the first time to professionals building agents at work. Children from age six can start with Scratch and simpler vibe coding.'
      },
      {
        q: 'Do you teach Copilot Studio agents?',
        a: 'Yes, for professionals and always one to one, because each organisation\'s data and permissions are different. Teenagers learn agents in Python first.'
      },
      {
        q: 'Is there a Modern Age Coders office in Blacktown?',
        a: 'No. All lessons are live online, and we have no premises in Australia. You need a computer with sound and a reliable connection; the phone number we show is in India.',
        boiler: true
      },
      {
        q: 'How much do Blacktown AI agents classes cost?',
        a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, shared with five to ten learners, or USD 150 a month one to one on the same schedule. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Between five and ten, matched on level, pace and aims rather than age or location. When no group fits the hour a learner needs, private lessons are offered.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Blacktown learners',
    html: 'The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> covers the wider city, and <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a> explains why checking matters as much as prompting. For younger children see <a class="cg-inline-link" href="/coding-classes-for-kids-sydney">coding classes for kids in Sydney</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a> covers the rest of the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Blacktown and Sydney',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-parramatta-sydney', label: 'Parramatta' },
    { href: '/best-coding-and-ai-classes-in-the-hills-shire-sydney', label: 'The Hills Shire' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-bktn .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.4vw, 2.7rem); }
.cg-root.cg-bktn .cg-hero h1 { font-weight: 800; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-bktn .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.35rem 0 0.35rem 1.1rem; }
.cg-root.cg-bktn .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-bktn .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.015em; }
.cg-root.cg-bktn .cg-grid-3 { gap: clamp(0.9rem, 2.6vw, 2rem); }
.cg-root.cg-bktn .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bktn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bktn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-bktn .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Blacktown, ABS Census 2021 QuickStats, Blacktown local government area LGA10750 (read 10 October 2026): 396,776 people; median age 34 (NSW 39, Australia 38); 104,171 families; 133,887 private dwellings; average 3.1 people per household; separate house 98,390 (81.1 percent; NSW 65.6; Australia 72.3); flat or apartment 8,158 (6.7 percent; NSW 21.7; Australia 14.2); Professionals 41,583 (23.8 percent; NSW 25.8); Bachelor Degree level and above 89,682 (29.2 percent; NSW 27.8; Australia 26.3); age 5 to 9 31,388 (7.9 percent); age 10 to 14 28,829 (7.3 percent; NSW 6.2). NSW Department of Education 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April; Term 2 Thursday 29 April to Friday 2 July. IANA tz Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027. Transport for NSW monthly station usage (CC BY): Blacktown Station, Train, Entry, August 2026, 371,550, twentieth of the entry rows.',
    localProject: 'Inclusion-exclusion in an agent that adds tool counts. NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02, LGA = Blacktown: 87 schools (Primary 60, Secondary 19, SSP 8). A: Date_1st_teacher before 1950, 12; B: Preschool_ind = Y, 13; C: haversine distance at most 5,000 m from Blacktown South Public School (-33.780193, 150.905175), 29. A and B 3; A and C 3; B and C 5; A, B and C 2. Sum 54; union 45; sum minus pairs 43; inclusion-exclusion 54 - 11 + 2 = 45. Earliest first teachers: Colyton Public School 1861-09-01, Eastern Creek Public School 1866-10-01, Vineyard Public School 1872-06-01.',
    requiredMentions: [
      '396,776',
      '104,171',
      '133,887',
      '98,390',
      '89,682',
      'Colyton Public School',
      'Blacktown South Public School',
      '371,550',
      '12 + 13 + 29 - 3 - 3 - 5 + 2 = 45'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Blacktown local government area (LGA10750).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA10750'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      { claim: 'NSW Department of Education, 2027 term dates.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Partially selective status of two high schools: in the file but not used, to keep the page off school selection.',
      'Support class and specialty columns of the master dataset: excluded, as they concern individual students.',
      'Why some schools run preschools: not verified, so no reason is given.',
      'Suburb lists for the Blacktown council area: not printed, because suburb boundaries were not checked against the LGA.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Blacktown City Council, Transport for NSW or the ABS.'
    ]
  }
};
