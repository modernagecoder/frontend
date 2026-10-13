'use strict';
// Berwick, Melbourne (cg- district page, Australia cluster Phase 8, row 254). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL20224, Berwick (Vic.), City of Casey) under Melbourne and
// Victoria.
// Spine: evaluating a ranking model with precision at 10 and NDCG at 10. Target: rank the 219 metropolitan stations
// present in FY18-19, FY23-24 and FY24-25 by FY24-25 entries as a ratio of FY18-19. Berwick 1,008,200 vs 864,800,
// ratio 1.166, rank 8. Models: last year's ratio (FY23-24/FY18-19) P@10 0.8, NDCG@10 0.9898, Spearman 0.86;
// distance from Flinders Street P@10 0.2, NDCG 0.6049; weekend share FY18-19 P@10 0.1, NDCG 0.487; random (1,000
// runs, seed 42) P@10 0.0475, NDCG 0.553. Script: scratchpad au/b7/bwck.py.
// Lesson family: ranking evaluation metrics; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BERWICK',
    label: 'Berwick, Melbourne',
    blurb: 'AI and programming classes for Berwick, with a project that scores four ways of ranking Melbourne stations by growth.'
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
  slug: 'ai-and-programming-classes-in-berwick-melbourne',
  code: 'bwck',
  accent: '#914F65',
  accentRationale: 'Berwick: a dusty plum rose (hue 340), picked by search at least 10 RGB units from all 1,485 accent declarations in content, the shared stylesheets and the claims log; 4.86:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Berwick',
    eyebrow: 'Berwick, City of Casey, Melbourne, Victoria',
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
  routeLabel: 'Berwick, Melbourne',
  title: 'AI and Programming Classes in Berwick, Melbourne',
  description: 'Live online AI and programming classes for Berwick children, teenagers and adults: Scratch, Python and machine learning, in small groups or one to one.',
  ogDescription: 'AI classes for Berwick with a ranking project: which model best predicts the fastest-growing stations? The plainest one scored 0.8, against 0.0475 for chance.',
  twitterDescription: 'Berwick AI and programming classes, live online, first class free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Berwick',
    description: 'Level-matched online lessons in Scratch, Python and machine learning for learners in Berwick, taught live in English.'
  },
  h1: 'AI and programming classes in Berwick',
  capsuleQ: 'What do AI and programming classes look like for Berwick learners?',
  capsule: 'Live online lessons where learners build models and then measure how good they are, honestly. Berwick is a family suburb: the 2021 Census counted 50,298 residents in 13,846 families, with 7.7% aged 10 to 14 against 6.0% across Victoria, and 89.0% of homes were separate houses.',
  lead: 'Berwick station had 1,008,200 entries in FY24-25, up from 864,800 in FY18-19. That rise put it eighth of 219 Melbourne stations ranked by growth. Could a model have picked the top ten in advance? More importantly, how would you know whether it did well? That second question is where most machine learning projects go wrong.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Berwick.',
  picks: {
    eyebrow: 'Course picks for Berwick',
    h2: 'Courses where models get measured',
    intro: 'Each course here teaches learners to test a model before trusting it, the habit behind the ranking project. The free first class decides the starting point.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Build models in Python, then score them against simple baselines.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python needed to sort, rank and compare real data.' },
      {
        course: 'ai-ml-masterclass-complete-college',
        band: 'University and adult',
        note: 'Machine learning end to end, including evaluation metrics for ranking.'
      },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Statistics and data work that make a metric mean something.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Berwick in the Census',
      h2: 'Houses, cars and school-age children',
      intro: 'Figures for the Berwick suburb (ABS code SAL20224, listed as Berwick (Vic.)) from the 2021 Census QuickStats, set against Victoria.',
      body: [
        {
          kind: 'table',
          caption: 'Berwick suburb, 2021 Census headline counts',
          head: ['Headline', 'Berwick'],
          rows: [
            ['Residents', '50,298'],
            ['Median age', '38'],
            ['Families', '13,846'],
            ['Private dwellings', '17,981'],
            ['Average people per household', '2.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Berwick against Victoria',
          head: ['Measure', 'Berwick', 'Victoria'],
          rows: [
            ['Separate houses', '89.0% (14,827)', '73.4%'],
            ['Flats or apartments', '0.3% (52)', '12.1%'],
            ['Residents aged 5 to 9', '7.5% (3,750)', '6.2%'],
            ['Residents aged 10 to 14', '7.7% (3,890)', '6.0%'],
            ['Workers who drove to work', '54.9% (13,925)', '49.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Two cars', p: 'Berwick homes averaged 2.1 motor vehicles each on Census night, with 2.9 people per household.' },
            { h3: 'Large area', p: 'The bureau measures the suburb at 33.20 square kilometres, in the City of Casey.' },
            {
              h3: 'Lockdown note',
              p: 'Because the Census fell in the August 2021 lockdown, the 6,401 residents who worked from home, 25.2%, describe that week only.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats adjusts small counts to protect privacy, so table rows may not sum to totals. Every figure here is quoted as published; we never add parts to make a new total.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which model finds the fastest-growing stations?',
      intro: 'We took the 219 stations with figures in FY18-19, FY23-24 and FY24-25 and ranked them by FY24-25 entries as a share of FY18-19. Then we tried three ways of predicting that ranking and scored each one with two standard ranking metrics.',
      body: [
        {
          kind: 'table',
          caption: 'Scores for each ranking model (our calculation from the station-entry files)',
          head: ['Model', 'Precision at 10', 'NDCG at 10', 'Berwick placed'],
          rows: [
            ['Last year\'s growth, FY23-24 against FY18-19', '0.8', '0.9898', '8th'],
            ['Distance from Flinders Street', '0.2', '0.6049', '14th'],
            ['Weekend share of trips in FY18-19', '0.1', '0.487', '210th'],
            ['Random order, average of 1,000 runs', '0.0475', '0.553', 'Anywhere']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The plain model won',
              p: 'Assuming last year\'s growth continues found eight of the true top ten and put Berwick exactly where it finished, eighth.'
            },
            {
              h3: 'Cleverer, worse',
              p: 'Distance from the city and weekend share sound like sensible clues. Distance barely beat chance; weekend share did worse than chance on NDCG.'
            },
            { h3: 'Top of the list', p: 'Merinda Park grew most, to 1.882 times its FY18-19 entries, then Officer at 1.697; Berwick\'s ratio was 1.166.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Read a metric next to its baseline',
          p: 'Random guessing scored 0.553 on NDCG at 10, because every station grew or shrank by a modest amount and so even a poor top ten earns partial credit. On its own, 0.6049 sounds respectable. Next to random, it shows distance from the city added very little. Always score a dumb baseline first.'
        },
        {
          kind: 'p',
          text: 'The models, scores and rankings are ours, built on the department\'s published estimates, which are rounded to the nearest 50. They show what happened in our test; we make no claim about why any station grew.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The metrics behind it',
      h2: 'Two ways to score a ranked list',
      intro: 'A ranking model is judged on its top results, because those are the ones anyone reads.',
      body: [
        {
          kind: 'table',
          caption: 'Precision at k and NDCG at k',
          head: ['Metric', 'What it measures', 'Blind spot'],
          rows: [
            ['Precision at 10', 'How many of the model\'s top ten are in the true top ten', 'Ignores order inside the ten'],
            [
              'NDCG at 10',
              'Rewards high true values placed near the top, discounted by position',
              'Graded gains can flatter weak models'
            ],
            ['Spearman correlation', 'Agreement across the whole ranking', 'Treats rank 200 as seriously as rank 2']
          ]
        },
        {
          kind: 'p',
          text: 'Last year\'s growth also had a Spearman correlation of 0.86 across all 219 stations, while distance from the city came out at minus 0.0429, essentially no relationship. NDCG divides the score of the model\'s list by the score of the perfect list, so 1 means the order was ideal.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Guess the top five in a class vote, then count how many guesses made the real top five.' },
            { h3: 'Secondary students', p: 'Code precision at k and NDCG in Python and test them on the station files.' },
            { h3: 'Adults', p: 'Score a search or recommendation feature at work against a random baseline before reporting it.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Berwick',
      h2: 'One station, twelve schools',
      intro: 'More detail from the state files.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Berwick station', p: 'The only metropolitan station inside the suburb, on the Pakenham line, with 1,008,200 entries in FY24-25.' },
            {
              h3: 'Schools',
              p: 'The 2025 school locations file places 12 open schools in Berwick: nine government, two Catholic and one independent, including Berwick Primary School and Berwick Secondary College.'
            },
            { h3: 'Term 1, 2027', p: 'Victorian government school students start on Thursday 28 January 2027; Term 1 ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Which Berwick',
          p: 'This page is about the Berwick suburb in Melbourne\'s south-east, in the City of Casey. Places with similar names elsewhere have their own figures, and none of them are used here.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From class votes to ranking models',
    intro: 'Ages are a rough guide; the free first class sets each learner\'s level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Games with scores, leaderboards and simple sorting.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI ideas',
        p: 'Lists, sorting and first guesses about what makes a model good.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Train models, then measure them against baselines.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Evaluation, ranking and models that hold up in use.',
        courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can build the model, why should a Berwick learner learn to score it?',
    intro: 'Because building a model takes minutes now, and knowing whether it is any good is the part that still takes a person.',
    p1: 'Ask an assistant for a model to predict station growth and it will give you one, often with an impressive sounding feature like distance from the city. It will rarely volunteer that a random guess scores 0.553 on the same metric, or that last year\'s numbers beat its idea easily.',
    p2: 'A learner who has computed precision at 10 by hand and watched a sensible feature lose to chance knows to ask for the baseline every time. That question saves more projects than any new algorithm.',
    closer: 'The Berwick learner who measures a model against a baseline is the one who can tell real progress from a good story.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Berwick lessons, live online',
    intro: 'Everything happens on screen, which suits a suburb where most trips mean the car.',
    cells: [
      { h3: 'Log in and build', p: 'At lesson time the learner opens the link, shares a screen and codes with the teacher watching.' },
      { h3: 'Term calendar', p: 'Courses follow Victoria\'s school terms and pause in the state holidays.' },
      { h3: 'Trial class', p: 'The free class is a normal lesson; afterwards we recommend a course and a weekly slot.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners per group, matched on level and pace.' },
      { h3: 'Steady pace', p: 'Two fixed lessons a week, about eight each month, with breaks agreed early.' },
      {
        h3: 'Teachers in India',
        p: 'Our teachers are in India: a 5:30pm Berwick lesson in summer is noon India time, then 1pm after Melbourne\'s clocks go back.'
      }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Melbourne\'s daylight saving began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India has no daylight saving, so we always confirm times in Melbourne time.'
    }
  },
  fees: {
    h2: 'Berwick class fees',
    intro: 'Three prices, set out plainly.',
    first: 'The first lesson is free and finishes with a clear recommendation.',
    group: 'A month of group lessons, usually eight, with fifteen to twenty learners at the same level.',
    private: 'About eight lessons a month, one teacher with one learner.',
    closer: 'Families outside India are billed in US dollars, so Berwick pays the same as other families abroad. Billing starts only after the trial has settled course and time; holidays, absences and changing format are covered on the pricing page.'
  },
  reviewsH2: 'Google reviews from families we teach',
  book: {
    h2: 'Book a free Berwick class',
    intro: 'Tell us the learner\'s age and an interest. A seven-year-old might start with a leaderboard game in Scratch; a Year 11 student might start by scoring the station models in Python.',
    success: 'Thank you. Our team will contact you soon about a Berwick class.'
  },
  faq: {
    h2: 'Berwick AI and programming questions',
    intro: 'What Berwick parents and adult learners ask before starting.',
    items: [
      {
        q: 'How many people live in Berwick?',
        a: 'The 2021 Census QuickStats for the Berwick suburb record 50,298 residents, 13,846 families and 17,981 private dwellings.'
      },
      {
        q: 'What is precision at 10?',
        a: 'The share of a model\'s top ten that are truly in the top ten. Our strongest station model scored 0.8, meaning eight of its ten picks were right.'
      },
      {
        q: 'What is NDCG?',
        a: 'Normalised discounted cumulative gain: a score from 0 to 1 that rewards putting the most relevant items at the very top of a list.'
      },
      {
        q: 'What did the Berwick ranking project show?',
        a: 'That the simplest model, assuming last year\'s growth continues, beat two cleverer-sounding ones, and that a metric only means something next to a random baseline.'
      },
      {
        q: 'At what age can children start AI classes?',
        a: 'From six, with Scratch and simple AI activities. Training and testing real models usually starts in the early teens, once Python is familiar.'
      },
      {
        q: 'Do learners need maths for machine learning?',
        a: 'Some helps, and we teach it as needed. Ranking metrics like these need only fractions, sorting and logarithms explained with examples.'
      },
      {
        q: 'Is there a Berwick centre?',
        a: 'No. All teaching is live online, we have no premises in Australia, and the phone number shown is an Indian number.',
        boiler: true
      },
      {
        q: 'What do AI classes cost for Berwick learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for one-to-one lessons. Course, format and time are agreed before paying.',
        boiler: true
      },
      {
        q: 'How many are in a group?',
        a: 'Fifteen to twenty learners, grouped by level, pace and goals. Private lessons are offered when no group time works.',
        boiler: true
      },
      { q: 'Can adults join AI classes?', a: 'Yes. Adults have their own groups or study privately, often to evaluate AI tools they already use at work.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Berwick learners',
    html: 'For younger learners, read about <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding classes for kids in Melbourne</a>. Families weighing selective entry can see <a class="cg-inline-link" href="/victorian-selective-entry-exam-maths-practice">Victorian selective entry maths practice</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Berwick and Melbourne',
  footerPlaces: [
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-bwck .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.2vw, 2.6rem); }
.cg-root.cg-bwck .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.08; }
.cg-root.cg-bwck .cg-capsule { border-left: 4px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0.5rem 0 0.7rem 1rem; }
.cg-root.cg-bwck .cg-eyebrow { letter-spacing: 0.13em; font-weight: 680; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-bwck .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.009em; }
.cg-root.cg-bwck .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 1.85rem); }
.cg-root.cg-bwck .cg-table caption { font-weight: 700; text-align: left; font-size: 0.95rem; }
.cg-root.cg-bwck .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; text-align: right; }
.cg-root.cg-bwck .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-bwck .cg-callout { border-left-width: 3px; border-radius: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Berwick, ABS Census 2021 QuickStats, Berwick (Vic.) suburb SAL20224 (read 10 October 2026): 50,298 people; median age 38; 13,846 families; 17,981 private dwellings; 2.9 people per household; 2.1 motor vehicles per dwelling; separate house 89.0% (14,827; Victoria 73.4%); flat or apartment 0.3% (52; Victoria 12.1%); aged 5-9 7.5% (3,750; Victoria 6.2%); aged 10-14 7.7% (3,890; Victoria 6.0%); car as driver 54.9% (13,925; Victoria 49.9%); worked at home 25.2% (6,401, lockdown Census day). ABS SAL area 33.1956 square kilometres. Berwick station is the only metropolitan station inside the boundary. Victorian School Locations 2025: 12 open schools inside the boundary (Primary 7, Secondary 3, Pri/Sec 2; Government 9, Catholic 2, Independent 1), including Berwick Primary School and Berwick Secondary College. Victorian 2027 Term 1: students start Thursday 28 January, ends Thursday 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Ranking evaluation. 219 metropolitan stations with Pax_annual in FY18-19 (nonzero), FY23-24 and FY24-25. Target ratio FY24-25/FY18-19. True top 10: Merinda Park 1.882, Officer 1.697, Cranbourne 1.289, Stony Point 1.287, Hughesdale 1.251, Craigieburn 1.22, Mernda 1.178, Berwick 1.166, Middle Gorge 1.157, Hawkstowe 1.077. Berwick 1,008,200 vs 864,800, rank 8. Models: last year (FY23-24/FY18-19) P@10 0.8, NDCG@10 0.9898 (graded gain = true ratio), Spearman 0.86, Berwick predicted 8; distance from Flinders Street (descending) P@10 0.2, NDCG 0.6049, Spearman -0.0429, Berwick 14; weekend share FY18-19 P@10 0.1, NDCG 0.487, Spearman -0.0071, Berwick 210; random 1,000 runs seed 42 mean P@10 0.0475, NDCG 0.553. Script: scratchpad au/b7/bwck.py.',
    requiredMentions: ['50,298', '13,846', '17,981', '1,008,200', '864,800', '14,827', '0.9898', 'Merinda Park', 'Berwick Secondary College', '33.20 square kilometres'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Berwick (Vic.) suburb (SAL20224).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20224' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20224 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
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
      'Reasons any station grew or shrank between FY18-19 and FY24-25 (new stations, line works, housing): not claimed.',
      'That the last-year model would work in another year: not tested; one year only.',
      'Names of the selective-entry, Catholic or independent schools in Berwick: not used; counted only.',
      'A total across stations or suburbs: not computed; published parts are never summed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Casey, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
