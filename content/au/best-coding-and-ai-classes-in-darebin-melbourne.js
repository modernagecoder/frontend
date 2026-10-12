'use strict';
// Darebin, Melbourne (cg- district page, Australia cluster Phase 8, row 271). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council-area page (ABS LGA21890, City of Darebin) under Melbourne and Victoria.
// Spine: sort Darebin's 44 listed schools by type, then by name. One tuple key, or two stable passes in the right
// order, give 4 tidy type runs; two passes in the wrong order give 26 runs and move 43 of 44 schools.
// Data: Victorian School Locations 2025 (CC BY 4.0); DTP annual metropolitan station entries FY24-25 (CC BY 4.0,
// rounded to 50). Our measurements (scratchpad au/b9/drbn.py). Only one tie in the FY24-25 network file: 201,950
// shared by Ashburton and Westgarth.
// Lesson family: multi-key sorting and sort stability; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'DAREBIN',
    label: 'Darebin, Melbourne',
    blurb: 'Coding and AI classes for Darebin, with a sorting project in which doing two sorts in the wrong order scatters 44 schools into 26 runs.'
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
  slug: 'best-coding-and-ai-classes-in-darebin-melbourne',
  code: 'drbn',
  accent: '#226496',
  accentRationale: 'Darebin: a steady cobalt blue (hue 205.4), chosen by hand at least 10 RGB units from every accent colour in content and the claims log, 6.6:1 on white; it sits 7.5 units from one non-accent stylesheet grey-blue, recorded as a caveat',
  pageType: 'city',
  place: {
    name: 'Darebin',
    eyebrow: 'City of Darebin, Melbourne, Victoria',
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
  routeLabel: 'Darebin, Melbourne',
  title: 'Best Coding and AI Classes in Darebin, Melbourne',
  description: 'Live online coding and AI classes for Darebin children, teens and adults, built on algorithms, real public data and careful testing, in small groups or one to one.',
  ogDescription: 'Darebin coding classes, with a sorting project: two sorts in the wrong order scattered 44 schools into 26 runs.',
  twitterDescription: 'Coding and AI for Darebin learners, taught live online, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Darebin',
    description: 'Level-matched online coding, algorithms and AI lessons for children, teenagers and adults in the City of Darebin, taught live in English.'
  },
  h1: 'Coding and AI classes in Darebin',
  capsuleQ: 'How can Darebin families judge the best coding and AI classes?',
  capsule: 'Watch a trial lesson and see whether the learner writes and explains real code, not just follows steps. Our live online classes start children on Scratch at six and take teenagers and adults into algorithms and AI. The City of Darebin counted 148,570 residents in the 2021 Census.',
  lead: 'Sorting a list sounds solved: call sort and move on. Sort by two things, school type and then name, and the order of the calls suddenly matters. We sorted every school with a Darebin address in the state list three ways and counted how badly one mistake scrambled the result.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Darebin.',
  picks: {
    eyebrow: 'Course picks for Darebin',
    h2: 'Courses where algorithms come first',
    intro: 'The school sort draws on lists, keys and how sorting works inside. These courses teach that thinking; a free first lesson sets the level.',
    items: [
      {
        course: 'problem-solving-dsa-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Sorting, searching and problem solving, explained step by step and tested.'
      },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Algorithms, complexity and stability for interviews and real systems.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python fluency first, including key functions, tuples and lambdas.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Early Python and AI, ordering cards and lists before writing code.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Darebin in the Census',
      h2: 'Northern suburbs with many renters, walkers and cyclists',
      intro: 'Headline 2021 Census QuickStats numbers for the City of Darebin (ABS code LGA21890) beside Victoria.',
      body: [
        {
          kind: 'table',
          caption: 'Census 2021 basics for Darebin',
          head: ['Figure', 'Darebin council'],
          rows: [
            ['Residents', '148,570'],
            ['Median age', '37'],
            ['Families', '37,717'],
            ['Private dwellings', '68,252'],
            ['People per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Darebin and Victoria side by side',
          head: ['Characteristic', 'In Darebin', 'Across Victoria'],
          rows: [
            ['Semi-detached, row or townhouse homes', '27.2% (16,180)', '13.9%'],
            ['Flats or apartments', '15.6% (9,283)', '12.1%'],
            ['Adults with a bachelor degree or higher', '39.6% (50,038)', '29.2%'],
            ['Workers employed as professionals', '34.3% (27,103)', '25.0%'],
            ['Workers who took the train to work', '2.8% (2,211)', '1.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young residents', p: 'The Census counted 7,378 residents aged 5 to 9 and 7,091 aged 10 to 14.' },
            { h3: 'A lockdown Census', p: 'In August 2021, 36.0% of employed residents, 28,459 people, worked from home during lockdown.' },
            { h3: 'The council area', p: 'The ABS boundary covers about 53.5 square kilometres, from Northcote and Fairfield up to Reservoir and Kingsbury.' }
          ]
        },
        {
          kind: 'p',
          text: 'Small random adjustments protect privacy in Census tables, so we quote each figure as published and never add published figures together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Does the order of two sorts matter?',
      intro: 'The 2025 Victorian school list gives 44 schools a Darebin address. We wanted them grouped by type (primary, secondary, combined, special) and alphabetical within each type, then tried three ways of getting there.',
      body: [
        {
          kind: 'table',
          caption: 'Three ways to sort the same 44 schools (our measurement)',
          head: ['Method', 'Runs of the same type', 'Schools out of place'],
          rows: [
            ['One sort with a tuple key (type, name)', '4', '0, the target order'],
            ['Stable sort by name, then stable sort by type', '4', '0, identical to the tuple key'],
            ['Stable sort by type, then stable sort by name', '26', '43 of 44 positions differ']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Stable means fair to ties',
              p: 'A stable sort keeps items with equal keys in the order they arrived. Python\'s sorted and list.sort are both guaranteed stable.'
            },
            { h3: 'Least important key first', p: 'With stable passes, sort by the minor key first and the major key last; the last pass decides the grouping.' },
            { h3: 'Or do it in one go', p: 'A tuple key compares type first and name only when types match, which avoids the ordering trap entirely.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Where stability matters with real numbers',
          p: 'Ranking Darebin\'s 13 stations by FY24-25 entries puts Reservoir first with 757,800 and Merri last with 147,850. Westgarth, on 201,950, shares that exact figure with Ashburton on the other side of Melbourne, the only tied value in the whole network file. Ranking the network with a stable sort keeps those two in whatever order they started; an unstable one may swap them between runs.'
        },
        {
          kind: 'p',
          text: 'School types and names come from the state list; station entries are published rounded to 50. The sorts, the run counts and the position counts are our measurement.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Algorithms in practice',
      h2: 'Sorting skills that carry into every project',
      intro: 'Sorting is often the first algorithm learners meet properly. Getting multi-key sorts right is a surprisingly common interview and workplace test.',
      body: [
        {
          kind: 'table',
          caption: 'Sorting ideas, with the Darebin example',
          head: ['Idea', 'What it means', 'In the school project'],
          rows: [
            ['Key function', 'Tell sort what to compare', 'key=lambda s: (s.type, s.name)'],
            ['Stability', 'Equal keys keep their order', 'Two passes only work because of it'],
            ['Order of passes', 'Minor key first, major key last', 'Wrong order gives 26 runs'],
            ['Ties in data', 'Equal values need a rule', 'Westgarth and Ashburton at 201,950']
          ]
        },
        {
          kind: 'p',
          text: 'Darebin\'s own station numbers make a friendly first exercise: Preston 581,250, Fairfield 437,700, Bell 412,250, Regent 382,700 and Thornbury 376,150 in FY24-25. Learners sort them by hand, then in code, and check that both agree.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Sort picture cards by colour and then shape, and discover that order of steps matters.' },
            { h3: 'Secondary learners', p: 'Write the three methods, count runs and explain why one fails.' },
            { h3: 'Adult learners', p: 'Apply multi-key sorts to spreadsheets and reports without losing ties.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Darebin',
      h2: 'Darebin by stations and schools',
      intro: 'Three quick facts drawn from patronage counts, the state school register and the calendar for 2027.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Stations by our count',
              p: 'Our boundary check places 13 stations inside Darebin, from Merri and Westgarth in the south to Reservoir and Ruthven in the north.'
            },
            {
              h3: 'Forty-four schools',
              p: 'The 2025 file lists 29 primary, 7 secondary, 4 combined and 4 special schools in Darebin. Government secondaries include Northcote High School, Preston High School and Thornbury High School.'
            },
            { h3: 'Term 1, 2027', p: 'Government school Term 1 in 2027 covers Thursday 28 January through Thursday 25 March across the state.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council-wide figures',
          p: 'The Census numbers above describe the whole City of Darebin; suburbs such as Preston, Reservoir and Northcote each have their own QuickStats.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From ordering cards to designing algorithms',
    intro: 'Each band is approximate, and the free first class settles where a learner joins.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games and puzzles that teach sequencing and ordering.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Lists, loops and the first sorting and searching programs.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Algorithms',
        p: 'Sorting, searching, complexity and competition practice.',
        courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course']
      },
      {
        band: 'University and adult',
        h3: 'Data structures and AI',
        p: 'Interview-level algorithms and the data work behind AI.',
        courses: ['data-structures-algorithms-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'With AI writing code, why should a Darebin student learn sorting?',
    intro: 'Because an assistant can produce two sort calls in the wrong order just as confidently as the right ones, and the output still looks sorted at a glance.',
    p1: 'Asked to "sort schools by type and then by name", AI tools usually give a correct tuple key. Sometimes, though, they write two passes in the order the request was phrased, type then name, which is exactly the version that broke 43 of 44 positions here. Nothing errors; the list is simply wrong.',
    p2: 'A learner who has counted those 26 runs spots the mistake in seconds. Understanding stability and key order turns AI from a black box into a fast assistant whose work can be checked.',
    closer: 'In Darebin, as anywhere, the learner who can check the sort is the one who can trust the AI.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online, from Northcote to Reservoir',
    intro: 'Every lesson runs on screen, so all Darebin suburbs join the same way.',
    cells: [
      { h3: 'Coding together', p: 'Teacher and learner work in the same code and talk through each step.' },
      { h3: 'Built around terms', p: 'Plans follow the Victorian school terms and break for holidays.' },
      { h3: 'A proper trial', p: 'The free first lesson teaches real content and ends with a recommendation.' },
      { h3: 'Groups of five to ten', p: 'Learners matched by level and pace, sometimes from several states.' },
      { h3: 'Two lessons a week', p: 'Regular times, around eight lessons each month, with planned breaks.' },
      { h3: 'Teachers in India', p: 'In daylight saving a 6pm Darebin lesson starts at 12:30pm India time; from April it starts at 1:30pm there.' }
    ],
    spec: {
      title: 'Melbourne and India clocks',
      p: 'Melbourne moves to daylight saving on Sunday 4 October 2026 and back on Sunday 4 April 2027; India keeps one time all year. Lesson times are set in Melbourne time.'
    }
  },
  fees: {
    h2: 'Darebin class fees',
    intro: 'Three prices, set out plainly.',
    first: 'The first lesson is free, with an honest recommendation at the end.',
    group: 'A month of group lessons, normally eight, with five to ten learners at a similar level.',
    private: 'Roughly eight lessons a month with one teacher.',
    closer: 'Families living abroad settle fees in US dollars. We take no payment until after the trial, when the course and lesson time are fixed together; holidays, absences and moving between formats are all on the pricing page.'
  },
  reviewsH2: 'Google reviews from families and learners',
  book: {
    h2: 'Book a first Darebin lesson',
    intro: 'What age is the learner, and what are they into? Teenagers frequently start with the school list and a sort that goes wrong, and younger ones with a Scratch project that lines up sprites by size.',
    success: 'Thank you. Our team will get in touch soon about a Darebin lesson.'
  },
  faq: {
    h2: 'Darebin coding and AI questions',
    intro: 'Common questions from Darebin families and adult learners.',
    items: [
      {
        q: 'What was the population of Darebin in 2021?',
        a: 'The 2021 Census QuickStats record 148,570 residents in the City of Darebin, with a median age of 37 and 37,717 families.'
      },
      {
        q: 'What is a stable sort?',
        a: 'A sort that keeps items with equal keys in the order they had before sorting. Python\'s built-in sorts are stable, which is what makes sorting in several passes possible.'
      },
      {
        q: 'How do you sort by two keys in Python?',
        a: 'Either use one sort with a tuple key, such as (type, name), or do two stable sorts with the less important key first. Our Darebin test showed the wrong order produces 26 runs instead of 4.'
      },
      {
        q: 'What did the Darebin school sort show?',
        a: 'Sorting 44 schools by type and name, the two correct methods gave identical results, while doing the passes in the wrong order moved 43 of the 44 schools.'
      },
      { q: 'What age can children start coding?', a: 'Six is a good age for Scratch, with Python usually starting between about nine and twelve.' },
      {
        q: 'Are Copilot Studio agents taught in groups?',
        a: 'No. Copilot Studio is one-to-one tuition only at our school; Darebin groups make agents by writing Python.'
      },
      {
        q: 'Do you have a classroom in Darebin?',
        a: 'No. Lessons are only live online, we have no premises in Australia, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Darebin learners?',
        a: 'The first lesson is free. After that, group classes cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one classes cost USD 150 a month. Course, format and time are agreed before paying.',
        boiler: true
      },
      {
        q: 'How many learners share a group?',
        a: 'Between five and ten, grouped by level, pace and goal. When no group time works, one-to-one lessons are available.',
        boiler: true
      },
      { q: 'Do adults join coding classes?', a: 'Yes. Adults learn in adult groups or one to one, often for career changes, interviews or work automation.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Darebin learners',
    html: 'Next door, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-banyule-melbourne">Banyule</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-moonee-valley-melbourne">Moonee Valley</a> have their own pages. Zoom out with <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">classes across greater Melbourne</a> or <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">the Victoria page</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Darebin and Melbourne',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-banyule-melbourne', label: 'Banyule' },
    { href: '/ai-and-programming-classes-in-moonee-valley-melbourne', label: 'Moonee Valley' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-drbn .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.3rem); }
.cg-root.cg-drbn .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-drbn .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.6rem 0 0.6rem 1.1rem; }
.cg-root.cg-drbn .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-drbn .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.013em; }
.cg-root.cg-drbn .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.75rem); }
.cg-root.cg-drbn .cg-table caption { font-weight: 650; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-drbn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-drbn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-drbn .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'City of Darebin, ABS Census 2021 QuickStats, Darebin LGA21890 (read 11 October 2026): 148,570 people; median age 37; 37,717 families; 68,252 private dwellings; 2.4 per household; semi-detached 27.2% (16,180; Victoria 13.9%); flats 15.6% (9,283; Victoria 12.1%); bachelor or higher 39.6% (50,038); professionals 34.3% (27,103); train to work 2.8% (2,211; Victoria 1.6%); worked at home 36.0% (28,459, lockdown); aged 5-9 7,378; aged 10-14 7,091. ABS area 53.4712 sq km. Victorian School Locations 2025: 44 schools (29 primary, 7 secondary, 4 Pri/Sec, 4 special); Northcote HS, Preston HS, Thornbury HS named. 13 stations inside boundary by our point-in-polygon check. FY24-25 entries: Reservoir 757,800, Preston 581,250, Fairfield 437,700, Bell 412,250, Regent 382,700, Thornbury 376,150, Westgarth 201,950, Merri 147,850. Vic 2027 Term 1: 28 January to 25 March. DST 4 Oct 2026 to 4 Apr 2027 (IANA).',
    localProject: 'Multi-key sorting and sort stability. 44 Darebin schools from Victorian School Locations 2025. Target: by School_Type then School_Name. (a) sorted(key=(type,name)) -> 4 type runs; (b) stable sort by name then stable sort by type -> identical to (a); (c) stable sort by type then by name -> 26 type runs, 43 of 44 positions differ from (a). FY24-25 network file: only one tied value, 201,950 shared by Ashburton and Westgarth. Script: scratchpad au/b9/drbn.py.',
    requiredMentions: ['148,570', '37,717', '16,180', '7,378', '26 runs', '201,950', '757,800', 'Thornbury High School', 'Westgarth'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Darebin local government area (LGA21890).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA21890'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) LGA boundary LGA21890, geo.abs.gov.au map service, used for our point-in-boundary checks.',
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
      { claim: 'Python documentation, Sorting Techniques (sort stability and complex sorts).', url: 'https://docs.python.org/3/howto/sorting.html' },
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
      'Any reason for the tie between Ashburton and Westgarth beyond identical published rounded values: not claimed.',
      'A total of entries across Darebin stations: not computed; published parts are never summed.',
      'Names of special or non-government schools: not used.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any ranking of Darebin schools by quality: not made; sorting is alphabetical and by type only.',
      'Any link with Darebin City Council, the Department of Education or the Department of Transport and Planning.'
    ]
  }
};
