'use strict';
// Hornsby, Sydney (cg- district page, Australia cluster Phase 8, row 205). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: how few keystrokes does an autocomplete box need to pick out each Hornsby school, and how does
// sorting plus the longest common prefix of neighbours give the answer without comparing every pair?
// Data: NSW Department of Education master dataset (data.nsw.gov.au, CC BY), read 10 October 2026,
// Date_extracted 2026-10-02. Rows with LGA "Hornsby": 35 (Primary 25, Secondary 8, SSP 1, Environmental
// Education Centre 1). Our run (scratchpad au/b1/hrnb_lcp.py): names sorted; 34 adjacent comparisons
// instead of 595 pairs; longest shared prefixes "Pennant Hills " (14 characters, High and Public),
// "Normanhurst " and "Cherrybrook " (12), "Hornsby H" (9). Shortest unique prefix per name = 1 + the
// longer of its two neighbour LCPs: total 226 characters against 881 for the full names (mean 6.46 against
// 25.17); 4 names need 1 character (Epping North, John Purchase, Oakhill Drive, Thornleigh West Public
// Schools); 2 need 15 (Pennant Hills High and Public). A brute-force check over all names agrees on all 35.
// Typing "hornsby" in lower case matches 0 names without case-folding and 5 with it.
// Earliest first teacher West Pennant Hills Public School 1850; latest 1992 (Cherrybrook Technology High
// School and Oakhill Drive Public School). Mount Kuring-gai Public School is in the Hornsby LGA.
// Lesson family: longest common prefix and sorted-neighbour autocomplete; screened 0 hits.
// Place facts: ABS Census 2021 QuickStats, Hornsby LGA (LGA14000); Transport for NSW station usage (CC BY):
// Hornsby Station, Train, Entry, August 2026, 289,451.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'HORNSBY',
    label: 'Hornsby, Sydney',
    blurb: 'Online coding and Python for Hornsby, with an autocomplete project built on the names of 35 public schools.'
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
  slug: 'online-coding-and-python-classes-in-hornsby-sydney',
  code: 'hrnb',
  accent: '#2A528E',
  accentRationale: 'Hornsby: a ridge-line blue (hue 217), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 7.8:1 on white and 6.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Hornsby',
    eyebrow: 'Hornsby Shire, Sydney, New South Wales',
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
  routeLabel: 'Hornsby, Sydney',
  title: 'Online Coding and Python Classes in Hornsby, Sydney',
  description: 'Live online coding and Python classes for Hornsby Shire children, teenagers and adults, taught by real teachers in small groups or one to one. First lesson free.',
  ogDescription: 'Python classes for Hornsby, with an autocomplete project that picks out each of 35 public schools in 226 keystrokes instead of 881.',
  twitterDescription: 'Hornsby online coding and Python classes, live, ages 6 to 67, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Hornsby',
    description: 'Level-matched online Python, string handling, searching and sorting for children, teenagers and adults in the Hornsby Shire council area, taught live in English.'
  },
  h1: 'Online coding and Python classes in Hornsby',
  capsuleQ: 'Where do Hornsby learners find the best online coding and Python classes?',
  capsule: 'Live online lessons in which a teacher writes Python with each Hornsby learner, from Scratch for younger children to strings, searching and real data for teenagers and adults. The 2021 Census counted 151,811 people in the Hornsby Shire council area, with a median age of 41. Classes run over video, one to one or in a small group at one level, and the opening lesson is free.',
  lead: 'Type "E" into a search box of Hornsby\'s public schools and only Epping North Public School can match. Type "Pennant Hills" and two schools are still in play until the fifteenth character settles it. How many keystrokes does each of the 35 names need before it is the only possible answer? Comparing every name with every other would take 595 comparisons. Sort the list first and only neighbours matter: 34 comparisons, one for each adjacent pair, give every answer. Our Hornsby project builds that autocomplete in Python and finds that all 35 schools can be picked out in 226 keystrokes, against 881 characters for the full names.',
  wa: 'Hello Modern Age Coders, I would like a free Python lesson for a learner in Hornsby.',
  picks: {
    eyebrow: 'Course picks for Hornsby',
    h2: 'Starting points for Hornsby learners of every age',
    intro: 'All four connect to the autocomplete project. A free first lesson decides which suits, with no card needed.',
    items: [
      {
        course: 'scratch-programming-complete-course',
        band: 'Ages 6 to 11',
        note: 'Blocks, sprites and simple lists, including a guessing game that narrows down a name letter by letter.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Python from scratch: strings, lists, sorting and searching on real local data.'
      },
      {
        course: 'pcep-pcap-python-certification-course',
        band: 'Ages 15 and over',
        note: 'Preparation for the Python Institute certificates, with every topic written as working code first.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'A full Python course for adults who want to write their own search and data tools.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Hornsby Shire in the Census',
      h2: 'An older shire of houses, degrees and teenagers',
      intro: 'QuickStats for the Hornsby local government area from the 2021 Census, alongside New South Wales and the nation.',
      body: [
        {
          kind: 'table',
          caption: 'Hornsby Shire, 2021 Census headline figures',
          head: ['Figure', 'Hornsby'],
          rows: [
            ['Residents', '151,811'],
            ['Families', '42,716'],
            ['Private dwellings', '55,909'],
            ['Average household size', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Hornsby next to the state and the country',
          head: ['Item', 'Hornsby', 'NSW', 'Australia'],
          rows: [
            ['Median age', '41', '39', '38'],
            ['Bachelor degree or above, aged 15 and over', '44.2% (54,377)', '27.8%', '26.3%'],
            ['Professionals among employed residents', '36.2% (27,084)', '25.8%', '24.0%'],
            ['Residents aged 10 to 14', '7.2% (10,958)', '6.2%', '6.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Mostly houses', p: '35,868 occupied homes were separate houses in 2021, 69.5% of the total, a little above the state share of 65.6%.' },
            { h3: 'Teenagers at home', p: 'The Census counted 9,774 residents aged 15 to 19, 6.4% of the shire against 5.7% across New South Wales.' },
            { h3: 'Older than average', p: 'A median age of 41 makes Hornsby two years older than the state, while still home to many school-age children.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census cells carry small deliberate random changes for privacy, so subtotals and totals do not always agree. We reproduce what the bureau published and do not invent totals by summing rows.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'How few keystrokes pick out each Hornsby school?',
      intro: 'The NSW Department of Education lists 35 government schools in the Hornsby council area. We sorted their names and built an autocomplete that knows exactly when a typed prefix becomes unique.',
      body: [
        {
          kind: 'table',
          caption: 'The longest prefixes shared by neighbouring names after sorting (our calculation)',
          head: ['Neighbouring names', 'Shared prefix', 'Characters'],
          rows: [
            ['Pennant Hills High School, Pennant Hills Public School', 'Pennant Hills ', '14'],
            ['Normanhurst Public School, Normanhurst West Public School', 'Normanhurst ', '12'],
            ['Cherrybrook Public School, Cherrybrook Technology High School', 'Cherrybrook ', '12'],
            ['Hornsby Heights Public School, Hornsby High School', 'Hornsby H', '9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Keystrokes needed to make each name the only match (our calculation)',
          head: ['Measure', 'Result'],
          rows: [
            ['Comparisons needed after sorting', '34 neighbour pairs, not 595 pairs'],
            ['Total keystrokes for all 35 schools', '226, against 881 characters typed in full'],
            ['Average keystrokes per school', '6.46, against an average name length of 25.17'],
            ['Names settled by a single letter', '4, including Epping North Public School'],
            ['Hardest names', '2 Pennant Hills schools, 15 characters each']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: '1. Sort',
              p: 'sorted(names) puts names that share a beginning next to each other, so any name\'s closest rival is always one of its two neighbours.'
            },
            {
              h3: '2. Compare neighbours',
              p: 'A short loop measures the longest common prefix of each adjacent pair; os.path.commonprefix does the same in one call.'
            },
            {
              h3: '3. Add one',
              p: 'A name becomes unique one character after the longer of its two neighbour prefixes. A brute-force check over every name confirms all 35 answers.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why sorting is enough',
          p: 'If two names share their first nine characters, every name that sorts between them shares those nine characters too. So the strongest competition for any name always sits right beside it in the sorted list, and the comparisons drop from one per pair to one per neighbour. That single observation is how real autocomplete boxes, dictionaries and database indexes stay fast.'
        },
        {
          kind: 'p',
          text: 'All prefixes and keystroke counts are our own, calculated from the school names exactly as the department publishes them. The project is about strings and says nothing about any school\'s results, enrolment or catchment.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Strings in practice',
      h2: 'Small changes that teach big Python lessons',
      intro: 'Once the autocomplete works, a few tweaks reveal traps that catch real programmers.',
      body: [
        {
          kind: 'table',
          caption: 'Experiments on the Hornsby names list',
          head: ['Try this', 'What happens', 'Lesson'],
          rows: [
            [
              'Type "hornsby" in lower case',
              '0 matches until the names are case-folded, then 5',
              'Normalise text before comparing it'
            ],
            [
              'Sort "Hornsby High" and "Hornsby Heights"',
              'Heights comes first, because e sorts before i',
              'Sorting compares characters, not words'
            ],
            [
              'Search with bisect instead of a loop',
              'The first matching name is found in a handful of steps',
              'Binary search on sorted text'
            ],
            ['Add a new school name', 'Only its two new neighbours need rechecking', 'Incremental updates']
          ]
        },
        {
          kind: 'p',
          text: 'Strings look simple and hide a lot: capital letters, spaces, punctuation and the order of characters all change results. Building something useful with them, on names a learner recognises, is one of the quickest ways to make Python feel concrete.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'A Scratch guessing game that keeps a list of names and removes the ones that cannot match after each letter.' },
            { h3: 'Teenagers', p: 'The full autocomplete in Python, with case-folding, bisect and a test that compares it with brute force.' },
            { h3: 'Adults', p: 'Prefix search over large lists, then the leap to tries and database indexes used in production systems.' }
          ]
        },
        {
          kind: 'p',
          text: 'The NSW Department of Education, Hornsby Shire Council, Transport for NSW and the statistics bureau publish this information openly and are not connected with Modern Age Coders. The sorting, prefixes and counts are the output of our own scripts.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Hornsby',
      h2: 'A school from 1850 and the busy northern interchange',
      intro: 'More facts from the same files and the state school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'The oldest date',
              p: 'West Pennant Hills Public School records its first teacher in 1850, the earliest in the shire. The most recent dates belong to Cherrybrook Technology High School and Oakhill Drive Public School, both 1992.'
            },
            {
              h3: 'A name that crosses a border',
              p: 'Mount Kuring-gai Public School sits in the Hornsby council area, not in neighbouring Ku-ring-gai, a useful reminder that place names and council boundaries do not always line up.'
            },
            {
              h3: 'Hornsby Station',
              p: 'Transport for NSW recorded 289,451 Opal entries at Hornsby Station in August 2026, twenty-seventh among the stations in its monthly file.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Term dates for 2027',
          p: 'NSW Eastern division schools, which include those in Sydney, begin Term 1 on Wednesday 3 February 2027 and end Term 3 on Friday 24 September 2027. Lessons can pause for the school holidays in between or keep running, as each family prefers.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing names in Scratch to indexing text in Python',
    intro: 'The ages are suggestions; the trial lesson finds the real starting point.',
    cols: [
      {
        band: 'Ages 6 to 11',
        h3: 'Lists and guesses',
        p: 'Scratch projects with lists of names, letters and simple searches.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 12 to 15',
        h3: 'Python strings',
        p: 'Sorting, slicing, comparing and searching text in Python.',
        courses: ['python-complete-masterclass-teens', 'maths-through-coding']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Algorithms on text',
        p: 'Binary search, prefixes and tries, timed and tested on real lists.',
        courses: ['problem-solving-dsa-masterclass-teens', 'pcep-pcap-python-certification-course']
      },
      {
        band: 'University and adult',
        h3: 'Search that scales',
        p: 'Indexes, data structures and search tools for large datasets at work.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI completes your sentences already. Why build an autocomplete in Hornsby?',
    intro: 'Because predicting the next character is where every text AI begins, and building the simplest version shows how much it depends on the list behind it.',
    p1: 'A language model suggesting the rest of a word is a far larger cousin of our prefix search: it narrows the possibilities with every character typed. Ask an AI assistant to write an autocomplete and it will produce one quickly, but it will rarely point out that capital letters break the match, that sorting order is about characters rather than words, or that two names sharing fourteen characters need fifteen keystrokes.',
    p2: 'A learner who has built the Hornsby version knows to check exactly those things in any text tool, AI or otherwise. They test lower-case input, look for the near-duplicate names that cause trouble, and ask what list the suggestions are actually drawn from.',
    closer: 'In 2026 suggestions appear before you finish typing, and the Hornsby learner who has built one understands what is being matched and what is being missed.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Brooklyn to Epping North, one lesson',
    intro: 'In the department\'s file the most northerly school in the shire is Brooklyn Public School and the most southerly is Epping North Public School, about 23 kilometres apart by latitude, and a live online class reaches both without a drive.',
    cells: [
      { h3: 'No travel', p: 'Wherever in the shire a learner lives, the lesson starts at home and the hour goes on programming rather than travelling.' },
      {
        h3: 'In step with NSW',
        p: 'Lessons follow the NSW stages and year levels, take breaks with the state school holidays, and can support senior computing subjects.'
      },
      { h3: 'A real first class', p: 'The free trial is a proper lesson; afterwards the teacher suggests a course, level and time, and nothing is billed.' },
      { h3: 'Small, matched groups', p: 'Groups hold five to ten learners at one level, mixing Hornsby learners with others from different places.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons each week, about eight a month, with holiday pauses arranged ahead of time.' },
      { h3: 'Teachers in India', p: 'A 5pm Hornsby lesson in summer starts at 11:30am India time, and at 12:30pm there once Sydney leaves daylight saving.' }
    ],
    spec: {
      title: 'Clock changes',
      p: 'Sydney starts daylight saving on Sunday 4 October 2026 and ends it on Sunday 4 April 2027, while India keeps the same time all year. Lesson times are always stated in Sydney time so nothing shifts for the family.'
    }
  },
  fees: {
    h2: 'Fees for Hornsby learners',
    intro: 'Three numbers cover everything.',
    first: 'The first lesson is free and ends with a recommendation.',
    group: 'About eight group lessons a month with five to ten learners at one level.',
    private: 'About eight private lessons a month with one teacher.',
    closer: 'Outside India we invoice in US dollars, which means one price for the whole shire and no Hornsby-specific rates. Nothing is charged until a course and time are confirmed after the trial; the pricing page covers holidays, absences and format changes.'
  },
  reviewsH2: 'Families on Google',
  book: {
    h2: 'Arrange a first Hornsby lesson',
    intro: 'An age and a favourite topic are all we need. A Year 5 student might begin with a name-guessing game; an adult might jump straight into the autocomplete.',
    success: 'Thank you. We will contact you shortly about a lesson for Hornsby.'
  },
  faq: {
    h2: 'Hornsby Python class questions',
    intro: 'What Hornsby parents and adult learners tend to ask.',
    items: [
      {
        q: 'How many people live in Hornsby Shire?',
        a: '151,811 at the 2021 Census, according to QuickStats for the Hornsby local government area, with a median age of 41.'
      },
      {
        q: 'What is a longest common prefix?',
        a: 'It is the longest run of characters that two strings share at their start. "Pennant Hills High School" and "Pennant Hills Public School" share "Pennant Hills ", fourteen characters.'
      },
      {
        q: 'What is the Hornsby autocomplete project?',
        a: 'Learners sort the names of the 35 government schools in the Hornsby council area, compare each name only with its neighbours, and work out how many characters each needs before it is the only match. All 35 can be selected in 226 keystrokes.'
      },
      {
        q: 'Why sort the names first?',
        a: 'After sorting, the name most similar to any given name is always next to it, so 34 neighbour comparisons replace 595 comparisons of every pair.'
      },
      {
        q: 'Does the project judge schools?',
        a: 'No. It only uses the published names to practise working with text. Nothing here concerns results, enrolment or catchment areas.'
      },
      {
        q: 'Can teenagers prepare for Python certificates?',
        a: 'Yes. Our certification course prepares for the Python Institute\'s entry and associate exams, with every topic written and tested as real code before any practice questions.'
      },
      {
        q: 'Can primary school children learn here?',
        a: 'Yes, from age six. Younger children start with Scratch blocks and games, and move to typed Python when reading and typing are comfortable.'
      },
      {
        q: 'Do you have a Hornsby centre?',
        a: 'No. We teach only online and have no premises in Australia. A learner needs a computer with sound and a steady internet connection; our contact number is Indian.',
        boiler: true
      },
      {
        q: 'How much are Python classes for Hornsby learners?',
        a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'What size are the groups?',
        a: 'Five to ten learners grouped by level and goals, not by age or suburb. One-to-one lessons are available when no group suits the required time.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Hornsby learners',
    html: 'Neighbouring <a class="cg-inline-link" href="/ai-and-programming-classes-in-ku-ring-gai-sydney">Ku-ring-gai</a> has its own page, as does the city-wide <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney guide</a>. Students heading for senior computing can read <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Hornsby and Sydney',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-ku-ring-gai-sydney', label: 'Ku-ring-gai' },
    { href: '/vibe-coding-and-ai-agents-classes-in-ryde-sydney', label: 'Ryde' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-hrnb .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 3vw, 2.5rem); }
.cg-root.cg-hrnb .cg-hero h1 { font-weight: 740; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-hrnb .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1rem; }
.cg-root.cg-hrnb .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-hrnb .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.012em; }
.cg-root.cg-hrnb .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.85rem); }
.cg-root.cg-hrnb .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-hrnb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hrnb .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-hrnb .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Hornsby, ABS Census 2021 QuickStats, Hornsby local government area LGA14000 (read 10 October 2026): 151,811 people; median age 41 (NSW 39, Australia 38); 42,716 families; 55,909 private dwellings; average 2.8 people per household; separate house 35,868 (69.5 percent; NSW 65.6); flat or apartment 11,283 (21.9 percent); Professionals 27,084 (36.2 percent; NSW 25.8; Australia 24.0); Bachelor Degree level and above 54,377 (44.2 percent; NSW 27.8; Australia 26.3); age 10 to 14 10,958 (7.2 percent; NSW 6.2); age 15 to 19 9,774 (6.4 percent; NSW 5.7). NSW Department of Education 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April; Term 3 Tuesday 20 July to Friday 24 September. IANA tz Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027. Transport for NSW monthly station usage (CC BY): Hornsby Station, Train, Entry, August 2026, 289,451.',
    localProject: 'Longest common prefix and sorted-neighbour autocomplete. NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02, LGA = Hornsby: 35 schools (Primary 25, Secondary 8, SSP 1, EEC 1). Names sorted; 34 adjacent LCPs. Largest: Pennant Hills High School / Pennant Hills Public School 14; Normanhurst Boys High School / Normanhurst Public School 12; Normanhurst Public School / Normanhurst West Public School 12; Cherrybrook Public School / Cherrybrook Technology High School 12; Hornsby Heights Public School / Hornsby High School 9. Shortest unique prefix = 1 + max(LCP with previous, LCP with next): sum 226, full names 881 characters; mean 6.46 vs 25.17; distribution 1 char 4 names, 2 chars 10, 3 chars 2, 4 chars 1, 7 chars 2, 9 chars 7, 10 chars 2, 13 chars 5, 15 chars 2. Brute force over all names agrees for all 35. Lower-case "hornsby": 0 matches raw, 5 after casefold. Earliest Date_1st_teacher West Pennant Hills Public School 1850-01-01; latest 1992-01-28 Cherrybrook Technology High School and Oakhill Drive Public School.',
    requiredMentions: ['151,811', '42,716', '55,909', '54,377', '27,084', 'Epping North Public School', 'Mount Kuring-gai Public School', '289,451', '226 keystrokes'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Hornsby local government area (LGA14000).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA14000'
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
      'Which suburbs lie inside Hornsby Shire: not listed, as suburb boundaries were not checked against the LGA; only school locations from the file are named.',
      'Why Mount Kuring-gai sits in Hornsby rather than Ku-ring-gai: not verified, so no history is given.',
      'Any claim about school quality, size, results or enrolment: excluded; the project uses names only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Hornsby Shire Council, Transport for NSW or the ABS.'
    ]
  }
};
