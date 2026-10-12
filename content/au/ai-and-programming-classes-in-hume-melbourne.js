'use strict';
// Hume, Melbourne (cg- district page, Australia cluster Phase 8, row 262). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council-area page (ABS LGA23270, Hume City Council) under Melbourne and Victoria.
// Spine: a classifier that guesses which Hume government schools are secondary looks brilliant when it reads the
// school name, because the name already says the answer. Target leakage, measured on the 2025 school locations file.
// Script: scratchpad au/b8/hume.py. Lesson family: target leakage; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'HUME',
    label: 'Hume, Melbourne',
    blurb: 'AI and programming classes for Hume, with a machine learning project on how a model can cheat by reading the answer.'
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
  slug: 'ai-and-programming-classes-in-hume-melbourne',
  code: 'hume',
  accent: '#1E1275',
  accentRationale: 'Hume: a deep ink violet (hue 247) chosen by hand at least 10 RGB units from 1,456 accent declarations in content, the shared stylesheets and the claims log, 15.0:1 on white and 12.2:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Hume',
    eyebrow: 'Hume City Council, Melbourne, Victoria',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Hume City Council' },
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
  routeLabel: 'Hume, Melbourne',
  title: 'AI and Programming Classes in Hume, Melbourne',
  description: 'Live online AI and programming classes for Hume learners of every age: Scratch, Python, data and machine learning, in small groups or one to one, first lesson free.',
  ogDescription: 'A Hume machine learning project: a school-type classifier scores 98% by reading the school name. Why that number means nothing.',
  twitterDescription: 'Hume AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Hume',
    description: 'Level-matched AI, machine learning and programming lessons for children, teenagers and adults in Hume City Council, taught live online in English.'
  },
  h1: 'AI and programming classes in Hume',
  capsuleQ: 'What should a Hume learner know before trusting an AI model\'s score?',
  capsule: 'Where the score came from. A model can look accurate because one of its inputs quietly contains the answer, which is called target leakage. Our Hume project shows it with real data: 49 government schools, a 98% score, and a model that learned nothing about schools.',
  lead: 'Hume City Council takes in both Broadmeadows and Sunbury, and the 2025 state file lists 49 government schools inside it. We asked a simple question of that list: can a program tell which schools are secondary? One version gets 48 of 49 right. It is also a model that has learned nothing, and seeing why is the lesson.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Hume.',
  picks: {
    eyebrow: 'Course picks for Hume',
    h2: 'AI and programming courses',
    intro: 'Each course below builds towards real models and real data, with honest testing. The free lesson tells us which one fits.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning from first principles, with train and test splits done properly.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python, tables and charts on public data sets.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Models, evaluation and the mistakes that inflate scores.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python and simple AI ideas for younger learners.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Hume by the numbers',
      h2: 'A young council of family homes',
      intro: 'All values are for Hume (ABS LGA23270) as printed on the 2021 Census QuickStats page, which we read on 10 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Hume, 2021 Census',
          head: ['Measure', 'Hume'],
          rows: [
            ['Persons', '243,901'],
            ['Median age', '33'],
            ['Families', '63,644'],
            ['Private dwellings', '83,928'],
            ['Household size, average', '3.1'],
            ['Motor vehicles per dwelling, average', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Hume against Victoria',
          head: ['Indicator', 'Hume', 'Victoria'],
          rows: [
            ['Dwellings that are separate houses', '87.8% (66,487)', '73.4%'],
            ['Dwellings that are flats', '3.0% (2,242)', '12.1%'],
            ['Holding a bachelor degree or higher', '20.2% (38,291)', '29.2%'],
            ['Employed as professionals', '16.8% (17,264)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Under-fives', p: 'There were 18,851 Hume children aged 0 to 4, which is 7.7% of residents.' },
            { h3: 'Early primary', p: '18,924 residents, 7.8%, were aged 5 to 9.' },
            {
              h3: 'Read with care',
              p: 'Census night came during a Melbourne lockdown. 17.8% of employed Hume residents (18,302) said they worked at home that day.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats rounds percentages and applies small random adjustments to protect privacy, so we print each number as published and never add groups together to make new totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The model that read the answer',
      intro: 'The task: label each of Hume\'s 49 government schools in the 2025 file as secondary or not secondary. Nine are secondary. We tried four rules and scored every one on Hume, then checked the name rules on the other 854 government schools in metropolitan Melbourne councils.',
      body: [
        {
          kind: 'table',
          caption: 'Four rules, scored on real schools (our calculation)',
          head: ['Rule', 'Hume (49)', 'Other metro councils (854)'],
          rows: [
            ['Always say "not secondary"', '40 right, 81.6%', '688 right, 80.6%'],
            ['Name contains "College"', '48 right, 98.0%', '785 right, 91.9%'],
            ['Name contains "Secondary College" or "High School"', '47 right, 95.9%', '817 right, 95.7%'],
            ['Five nearest schools by location vote', '40 right, 81.6%', 'not scored']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why 98% is hollow',
              p: 'A school\'s name is chosen because of what kind of school it is. Feeding the name to a model hands it the label in disguise. That is target leakage: the score measures the naming convention, not any pattern a model discovered.'
            },
            {
              h3: 'It does not travel',
              p: 'The "College" rule scored 98.0% in Hume but 91.9% across the rest of Melbourne. Its one Hume miss is Mount Ridley P-12 College, which teaches primary and secondary years.'
            },
            {
              h3: 'The honest model',
              p: 'Location carries no leak. The five-nearest-schools vote, trained on the other councils, never once predicted "secondary" in Hume and matched the do-nothing baseline at 81.6%. Here the simple baseline is as good as it gets.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The question to ask any score',
          p: 'Would this input exist before we knew the answer? A school name is decided alongside the school type, so it fails. That single question catches most leakage before a model is ever trained.'
        },
        {
          kind: 'p',
          text: 'The two misses for the stricter name rule are Sunbury College and Roxburgh College, both secondary schools without "Secondary" in their names. Names follow habits, and habits have exceptions. Specific-purpose schools are included in the 49 but not named here.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Finding the leak yourself',
      h2: 'Three checks before believing a score',
      intro: 'Learners build these checks into every project, starting with spreadsheets and ending with Python.',
      body: [
        {
          kind: 'table',
          caption: 'A leakage checklist',
          head: ['Check', 'What it catches'],
          rows: [
            ['Compare with a do-nothing baseline', 'A model that barely beats "always the common answer".'],
            ['Drop one feature at a time', 'A single input that carries almost the whole score.'],
            ['Score on a different place or time', 'A rule that only fits the data it was built on.']
          ]
        },
        {
          kind: 'p',
          text: 'The scikit-learn documentation describes the same trap in its guide to common pitfalls: information that would not be available when the model is really used must stay out of training.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary school learners', p: 'Play a guessing game where one clue gives the answer away, then talk about why that clue is unfair.' },
            { h3: 'High school learners', p: 'Rebuild the four rules in Python and find the three schools that break them.' },
            { h3: 'Adults', p: 'Audit a model at work for any column that is filled in after the outcome is known.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and stations',
      h2: 'Around Hume',
      intro: 'Counts taken from the state school locations list and the department\'s station entries file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: '49 government schools',
              p: 'Hume has 34 primary, 9 secondary, 1 combined primary and secondary, and 5 specific-purpose government schools in the 2025 list.'
            },
            {
              h3: 'Six train stations',
              p: 'Sunbury, Broadmeadows, Roxburgh Park, Craigieburn, Coolaroo and Upfield fall inside the boundary; Broadmeadows logged 878,300 entries in FY24-25.'
            },
            { h3: 'The 2027 school year', p: 'Term 1 at Victorian government schools starts on Thursday 28 January 2027 and ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Which Hume',
          p: 'This page follows the ABS outline of Hume City Council, about 503.8 square kilometres. School addresses inside it include Broadmeadows, Craigieburn, Greenvale, Mickleham, Roxburgh Park and Sunbury.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing games to real models',
    intro: 'Starting points by age; the trial lesson sets the real one.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Blocks and logic',
        p: 'Scratch projects that sort, count and decide.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'Python and AI ideas',
        p: 'Typed code, simple data and how a program learns from examples.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Data and machine learning',
        p: 'Real data sets, models and honest evaluation.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Machine learning and generative AI for study and work.',
        courses: ['ai-ml-masterclass-complete-college', 'complete-generative-ai-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can Hume students just ask an AI to build the model?',
    intro: 'They can, and the leak will still be there.',
    p1: 'Give an AI assistant the school file and ask for the most accurate classifier. A tool that is optimising for accuracy has every reason to use the name column, and it may well report a score near 98% without a word of warning.',
    p2: 'Spotting that takes a person who understands where the data came from. A learner who has seen the "College" rule fall from 98.0% to 91.9% knows to ask what each column means before trusting any number, generated or hand made.',
    closer: 'In Hume classes, AI speeds up the code, and the learner stays in charge of the judgement.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons work for Hume',
    intro: 'Everything happens on a video call, whether the learner is in Sunbury, Campbellfield or Greenvale.',
    cells: [
      { h3: 'Teacher and screen', p: 'The learner shares their screen; the teacher talks through the learner\'s own code.' },
      { h3: 'In step with terms', p: 'Lessons follow the Victorian school term pattern, with breaks in the holidays.' },
      { h3: 'First class free', p: 'A complete trial lesson with no charge, followed by a course suggestion.' },
      { h3: 'Matched groups', p: 'Five to ten learners grouped by level, from different suburbs and countries.' },
      { h3: 'Twice a week', p: 'Two scheduled lessons weekly, so roughly eight in a month.' },
      { h3: 'India time', p: 'A 5pm Hume lesson is 11:30am India time while Melbourne is on daylight saving, and 12:30pm after it ends.' }
    ],
    spec: {
      title: 'Clock changes',
      p: 'Melbourne daylight saving runs from Sunday 4 October 2026 until Sunday 4 April 2027. India stays on one time all year, so we confirm every booking in Melbourne time.'
    }
  },
  fees: {
    h2: 'Hume class fees',
    intro: 'One price list for every family outside India.',
    first: 'The first lesson costs nothing and ends with a recommendation.',
    group: 'Group classes: a month of lessons, about eight, in a group of five to ten.',
    private: 'One-to-one classes: a month of lessons, about eight, with a teacher to themselves.',
    closer: 'Hume families are billed in US dollars. Nothing is paid until the trial has settled the course and a weekly time; rules for holidays and missed lessons are on the pricing page.'
  },
  reviewsH2: 'Reviews on Google from our families',
  book: {
    h2: 'Book a free Hume class',
    intro: 'Share the learner\'s age and what they like doing. A seven-year-old might build a sorting game in Scratch; a sixteen-year-old might rebuild the school classifier.',
    success: 'Thank you. We will contact you shortly about a Hume class.'
  },
  faq: {
    h2: 'Hume AI and programming questions',
    intro: 'Questions Hume parents and adult learners put to us.',
    items: [
      { q: 'How many people live in Hume?', a: 'Hume City Council had 243,901 residents at the 2021 Census, with a median age of 33.' },
      {
        q: 'What is target leakage?',
        a: 'Target leakage is when a model\'s input contains information about the answer that would not really be known at prediction time. The model scores well in testing and fails in use.'
      },
      {
        q: 'How do you spot target leakage?',
        a: 'Compare against a simple baseline, remove one input at a time, and test on different data. A single input that carries the whole score is the usual sign.'
      },
      {
        q: 'How many government schools are in Hume?',
        a: 'The 2025 Victorian school locations file lists 49 government schools in Hume, nine of them secondary.'
      },
      {
        q: 'What age can a child start learning AI?',
        a: 'Ideas about how computers learn from examples suit children from about seven. Building real models in Python usually starts around 13.'
      },
      { q: 'Do you teach generative AI to adults?', a: 'Yes. Adults can take machine learning or generative AI courses, in groups or one to one.' },
      { q: 'Where are your Hume classes held?', a: 'Only online. We have no Australian premises, and our listed phone number is an Indian one.', boiler: true },
      {
        q: 'What do Hume classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups formed?',
        a: 'By level and pace, with five to ten learners in each, rather than by age or suburb. One-to-one lessons cover any timing a group cannot.',
        boiler: true
      },
      {
        q: 'Is the school data on this page official?',
        a: 'The school counts come from the Victorian Government\'s 2025 school locations file. The classifier scores are our own calculation.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More pages for Hume',
    html: 'See the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> for the wider city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> for the state, or <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for kids in Melbourne</a> for younger learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Hume and Melbourne',
  footerPlaces: [
    { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids in Melbourne' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-hume .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3vw, 2.4rem); }
.cg-root.cg-hume .cg-hero h1 { font-weight: 680; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-hume .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-hume .cg-eyebrow { letter-spacing: 0.09em; font-weight: 600; font-size: 0.78rem; }
.cg-root.cg-hume .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.012em; }
.cg-root.cg-hume .cg-grid-3 { gap: clamp(1rem, 2.1vw, 1.6rem); }
.cg-root.cg-hume .cg-table caption { text-align: left; font-weight: 650; letter-spacing: 0.01em; }
.cg-root.cg-hume .cg-table td:first-child { font-weight: 550; }
.cg-root.cg-hume .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-hume .cg-callout { border-radius: 2px; border-width: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Hume City Council, ABS Census 2021 QuickStats, LGA23270 (read 10 October 2026): 243,901 people; median age 33; 63,644 families; 83,928 private dwellings; 3.1 people per household; 2 vehicles per dwelling; aged 0-4 18,851 (7.7%); 5-9 18,924 (7.8%); bachelor or higher 38,291 (20.2%, Victoria 29.2%); professionals 17,264 (16.8%, Victoria 25.0%); worked at home 18,302 (17.8%, lockdown Census day); separate houses 66,487 (87.8%, Victoria 73.4%); flats 2,242 (3.0%, Victoria 12.1%). ABS LGA area 503.85 square kilometres. Victorian School Locations 2025: 49 government schools in Hume (C): 34 primary, 9 secondary, 1 Pri/Sec, 5 special. DTP FY24-25 metro stations inside the polygon: Sunbury 691,050; Upfield 264,250; Broadmeadows 878,300; Roxburgh Park 498,650; Craigieburn 1,508,250; Coolaroo 281,400. 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Target leakage in a secondary-vs-not classifier for government schools (Victorian School Locations 2025, metro councils, types Primary/Secondary/Pri/Sec/Special). Hume 49 schools (9 secondary); other metro councils 854. Always not-secondary: Hume 40/49 (81.6%), others 688/854 (80.6%). Name contains "College": Hume 48/49 (98.0%; miss Mount Ridley P-12 College, Pri/Sec), others 785/854 (91.9%). Name contains "Secondary College" or "High School": Hume 47/49 (95.9%; misses Sunbury College, Roxburgh College), others 817/854 (95.7%). 5-nearest-neighbour vote on school coordinates trained on other councils: Hume 40/49 (81.6%), predicted 0 secondary, ties the baseline. Script: scratchpad au/b8/hume.py.',
    requiredMentions: ['243,901', '63,644', '83,928', '18,924', '66,487', '38,291', '878,300', 'Sunbury College', '48 of 49'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Hume local government area (LGA23270).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA23270'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council polygons and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'scikit-learn documentation, Common pitfalls and recommended practices: data leakage.',
        url: 'https://scikit-learn.org/stable/common_pitfalls.html'
      },
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
      'That school names are assigned by any formal rule: not claimed; the page says names follow habits with exceptions.',
      'Naming or describing specific-purpose schools: counted only.',
      'Catholic and independent school counts: not used in the project.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Sums of Census age bands into a child total: not computed.',
      'Any affiliation with Hume City Council or the Victorian Department of Education.'
    ]
  }
};
